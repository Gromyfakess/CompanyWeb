/**
 * STRATiS Technologies — Secure Serverless AI Proxy
 * Protects NVIDIA API Key from client exposure.
 * Reads credentials strictly from server environment variables.
 */

// Native .env support if run locally in Node.js
if (typeof process.loadEnvFile === 'function') {
  try {
    process.loadEnvFile();
  } catch (e) {}
}

const SYSTEM_PROMPT = `You are STRATiS Assistant, the official AI enterprise solutions consultant and technical intelligence specialist for STRATiS Technologies Inc. (PT STRATiS Solusi Digital).
Answer questions clearly, professionally, and helpfully in Bahasa Indonesia or English based on user input.
Specialize in enterprise software engineering, distributed systems, resilient cloud infrastructure, database optimization, cognitive intelligence platforms, and STRATiS company offerings.
Tone & Persona: Speak like an enterprise technology consultant from a prestigious tech firm (like Cloudflare, Stripe, or HashiCorp). Never mention internal code stacks, specific programming languages, internal student project mechanics, or course details. Present systems in terms of modular enterprise architecture, distributed systems, and low-latency cloud infrastructure.
Keep responses articulate, concise, and formatted with markdown bullets where appropriate.`;

const JAILBREAK_PATTERN = /(ignore\s+(all\s+)?(previous|prior)\s+instructions|system\s+prompt|dan\s+mode|jailbreak|bypass\s+(filters|rules|guardrails)|act\s+as\s+(an\s+)?(unfiltered|unrestricted|evil)|pretend\s+you\s+(have\s+no\s+rules|are\s+unlocked)|reveal\s+(your\s+)?(system|internal|hidden)\s+(prompt|instructions))/i;

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed. Only POST is accepted.' })
    };
  }

  try {
    if (!event.body || event.body.length > 20000) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Payload too large or invalid.' })
      };
    }

    const payload = JSON.parse(event.body);
    const { messages } = payload;

    if (!Array.isArray(messages) || messages.length === 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid messages array.' })
      };
    }

    // Inspect user message for malicious prompt injection
    const latestUserMsg = [...messages].reverse().find(m => m.role === 'user');
    if (latestUserMsg && JAILBREAK_PATTERN.test(latestUserMsg.content)) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          choices: [{
            message: {
              role: 'assistant',
              content: 'Maaf, permintaan ini tidak sesuai dengan protokol keamanan sistem STRATiS. Saya beroperasi secara eksklusif untuk memberikan konsultasi arsitektur perangkat lunak, sistem komputasi terdistribusi, dan solusi teknologi enterprise STRATiS Technologies Inc.'
            }
          }]
        })
      };
    }

    // Retrieve API key strictly from server environment (NEVER exposed to client)
    const apiKey = process.env.NVIDIA_API_KEY || process.env.NIM_API_KEY;
    const model = process.env.NVIDIA_MODEL || process.env.NIM_MODEL || 'nvidia/nemotron-3.5-lightning-30b-a3b';

    if (!apiKey) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({
          error: 'NO_SERVER_KEY',
          message: 'NVIDIA_API_KEY belum dikonfigurasi pada environment Netlify. Silakan tambahkan NVIDIA_API_KEY di Netlify Dashboard > Site configuration > Environment variables.'
        })
      };
    }

    // Enforce system prompt and trim history
    const cleanMessages = messages
      .filter(m => m.role === 'user' || m.role === 'assistant')
      .slice(-6);

    cleanMessages.unshift({
      role: 'system',
      content: SYSTEM_PROMPT
    });

    const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: cleanMessages,
        temperature: 0.6,
        top_p: 0.9,
        max_tokens: 1024
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      let parsedErr = {};
      try { parsedErr = JSON.parse(errText); } catch (e) {}

      let userMsg = `Kendala koneksi ke model ${model}.`;
      if (response.status === 401) {
        userMsg = 'NVIDIA_API_KEY tidak valid atau kadaluarsa.';
      } else if (response.status === 404) {
        userMsg = `Model ${model} tidak ditemukan di NVIDIA NIM.`;
      } else if (parsedErr && parsedErr.message) {
        userMsg = parsedErr.message;
      }

      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          error: 'UPSTREAM_ERROR',
          message: userMsg,
          model: model
        })
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'SERVER_ERROR', message: error.message })
    };
  }
};
