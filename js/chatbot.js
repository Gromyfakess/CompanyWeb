/**
 * STRATiS Assistant — Enterprise College Web Project Controller
 * Clean, lightweight, zero-dependency client-side architecture.
 * Security: NO API keys in client code — all requests routed through serverless proxy or secure knowledge base.
 */

document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const launcher = document.getElementById("chatbotLauncher");
    const panel = document.getElementById("chatbotPanel");
    const closeBtn = document.getElementById("chatbotCloseBtn");
    const msgContainer = document.getElementById("chatbotMessages");
    const chatForm = document.getElementById("chatbotInputForm");
    const chatInput = document.getElementById("chatbotInput");
    const sendBtn = document.getElementById("chatbotSendBtn");
    const quickChatBtns = document.querySelectorAll(".quick-chat-btn");

    // Session-only conversation history (resets per refresh)
    let conversationHistory = [];
    let isGenerating = false;

    // Anti-Jailbreak Client Guard Regex
    const JAILBREAK_CLIENT_REGEX = /(ignore\s+(all\s+)?(previous|prior)\s+instructions|system\s+prompt|dan\s+mode|jailbreak|bypass\s+(filters|rules|guardrails)|act\s+as\s+an\s+unfiltered|pretend\s+you\s+have\s+no\s+rules|reveal\s+(your\s+)?(system|internal)\s+prompt)/i;

    // Toggle Chat Window
    function toggleChat(open) {
        const isOpen = open !== undefined ? open : !panel.classList.contains("is-open");
        if (isOpen) {
            panel.classList.add("is-open");
            chatInput.focus();
            if (msgContainer.children.length === 0) {
                renderInitialGreeting();
            }
        } else {
            panel.classList.remove("is-open");
        }
    }

    const heroQuickLaunch = document.getElementById("heroAiLaunchBtn");
    if (launcher) launcher.addEventListener("click", () => toggleChat(true));
    if (heroQuickLaunch) heroQuickLaunch.addEventListener("click", (e) => {
        e.preventDefault();
        toggleChat(true);
    });
    if (closeBtn) closeBtn.addEventListener("click", () => toggleChat(false));

    // Close when clicking outside of the chatbot panel
    document.addEventListener("click", (e) => {
        if (!panel || !panel.classList.contains("is-open")) return;

        const isClickInsidePanel = panel.contains(e.target);
        const isClickOnLauncher = launcher && launcher.contains(e.target);
        const isClickOnHeroLaunch = heroQuickLaunch && heroQuickLaunch.contains(e.target);

        if (!isClickInsidePanel && !isClickOnLauncher && !isClickOnHeroLaunch) {
            toggleChat(false);
        }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && panel && panel.classList.contains("is-open")) {
            toggleChat(false);
        }
    });

    // Strict HTML Escaping to prevent XSS
    function escapeHtml(text) {
        if (!text) return "";
        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Strip reasoning traces and <think>...</think> blocks to display only the actual answer
    function stripThinkingProcess(raw) {
        if (!raw) return "";
        let text = String(raw).trim();

        // 1. Strip closed <think>...</think> blocks and keep what comes after </think>
        if (text.includes("</think>")) {
            const parts = text.split("</think>");
            const actualAnswer = parts.slice(1).join("</think>").trim();
            text = actualAnswer || text.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
        } else if (text.includes("<think>")) {
            // Cut off incomplete <think> tag if model started with <think>
            const beforeThink = text.substring(0, text.indexOf("<think>")).trim();
            text = beforeThink || text.replace(/<think>[\s\S]*/gi, "").trim();
        }

        // 2. Strip bracket variants like [THINK]...[/THINK]
        text = text.replace(/\[THINK\][\s\S]*?\[\/THINK\]/gi, "").trim();

        // 3. Strip plaintext thinking traces if present at start
        text = text.replace(/^(?:(?:\*\*|\*|#+)?\s*(?:thinking\s*process|chain\s*of\s*thought|reasoning)(?:\*\*|\*|:)?[\s\S]*?(?=(?:###|\*\*|[A-Z][a-z]+:|\n\n)))/i, "").trim();

        return text;
    }

    // Markdown Parser
    function parseSafeMarkdown(raw) {
        if (!raw) return "";

        let safe = stripThinkingProcess(raw)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Code blocks
        safe = safe.replace(/```([a-z0-9_-]*)\n([\s\S]*?)```/gi, (match, lang, code) => {
            return `<pre><code class="language-${lang || 'plaintext'}">${code.trim()}</code></pre>`;
        });

        // Inline code
        safe = safe.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

        // Bold & Italic
        safe = safe.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');
        safe = safe.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        safe = safe.replace(/\*([^*]+)\*/g, '<em>$1</em>');

        // Headings
        safe = safe.replace(/^### (.*$)/gim, '<h4 class="chat-h4">$1</h4>');
        safe = safe.replace(/^## (.*$)/gim, '<h3 class="chat-h3">$1</h3>');

        // Lists
        const lines = safe.split("\n");
        let html = "";
        let inList = false;

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();

            if (line.startsWith("* ") || line.startsWith("- ")) {
                if (!inList) {
                    html += '<ul class="chat-list">';
                    inList = true;
                }
                html += `<li>${line.substring(2)}</li>`;
            } else if (/^\d+\.\s/.test(line)) {
                if (!inList) {
                    html += '<ol class="chat-list">';
                    inList = true;
                }
                html += `<li>${line.replace(/^\d+\.\s/, '')}</li>`;
            } else {
                if (inList) {
                    html += inList ? "</ul>" : "</ol>";
                    inList = false;
                }
                if (line.length > 0) {
                    if (line.startsWith("<h3>") || line.startsWith("<h4>") || line.startsWith("<pre>")) {
                        html += line;
                    } else {
                        html += `<p>${line}</p>`;
                    }
                }
            }
        }

        if (inList) {
            html += "</ul>";
        }

        return html;
    }

    // Render Messages
    function appendMessage(role, rawContent) {
        const msgDiv = document.createElement("div");
        msgDiv.className = `chat-msg ${role}`;

        const avatar = document.createElement("div");
        avatar.className = "chat-msg-avatar";
        avatar.innerHTML = role === "assistant" 
            ? `<i class="fa-solid fa-cube" aria-hidden="true"></i>` 
            : `<i class="fa-solid fa-user" aria-hidden="true"></i>`;

        const bubble = document.createElement("div");
        bubble.className = "chat-bubble";
        bubble.innerHTML = parseSafeMarkdown(rawContent);

        msgDiv.appendChild(avatar);
        msgDiv.appendChild(bubble);
        msgContainer.appendChild(msgDiv);
        msgContainer.scrollTop = msgContainer.scrollHeight;

        return bubble;
    }

    function appendTypingIndicator() {
        const msgDiv = document.createElement("div");
        msgDiv.className = "chat-msg assistant";
        msgDiv.id = "typingIndicator";

        const avatar = document.createElement("div");
        avatar.className = "chat-msg-avatar";
        avatar.innerHTML = `<i class="fa-solid fa-cube" aria-hidden="true"></i>`;

        const bubble = document.createElement("div");
        bubble.className = "chat-bubble";
        bubble.innerHTML = `
            <div class="typing-dots">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </div>
        `;

        msgDiv.appendChild(avatar);
        msgDiv.appendChild(bubble);
        msgContainer.appendChild(msgDiv);
        msgContainer.scrollTop = msgContainer.scrollHeight;
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById("typingIndicator");
        if (indicator) indicator.remove();
    }

    function renderInitialGreeting() {
        const greeting = `Selamat datang di **STRATiS Assistant**.

Saya adalah asisten rekayasa sistem resmi **STRATiS Technologies Inc.**

Pilih rekomendasi di bawah untuk jawaban instan seputar arsitektur dan kapabilitas perusahaan, atau ketikkan pertanyaan teknis Anda secara langsung.`;
        appendMessage("assistant", greeting);
    }

    // Smooth Typewriter Output
    function streamTypewriterText(bubbleElement, fullText, onDone) {
        let i = 0;
        const speed = 7;
        const step = 4;

        function tick() {
            i += step;
            if (i < fullText.length) {
                bubbleElement.innerHTML = parseSafeMarkdown(fullText.substring(0, i));
                msgContainer.scrollTop = msgContainer.scrollHeight;
                setTimeout(tick, speed);
            } else {
                bubbleElement.innerHTML = parseSafeMarkdown(fullText);
                msgContainer.scrollTop = msgContainer.scrollHeight;
                if (onDone) onDone();
            }
        }
        tick();
    }

    /**
     * Handler for the 5 Curated Quick Chat Buttons
     * Returns instant verified company info with zero network latency.
     */
    function handleQuickChat(quickKey, label) {
        if (isGenerating) return;

        isGenerating = true;
        sendBtn.disabled = true;

        appendMessage("user", label);
        conversationHistory.push({ role: "user", content: label });

        const responseText = (typeof STRATIS_QUICK_RESPONSES !== "undefined" && STRATIS_QUICK_RESPONSES[quickKey])
            ? STRATIS_QUICK_RESPONSES[quickKey]
            : (typeof queryKnowledgeBase === "function" ? queryKnowledgeBase(label) : "Informasi tidak tersedia.");

        appendTypingIndicator();

        setTimeout(() => {
            removeTypingIndicator();
            const bubble = appendMessage("assistant", "");
            streamTypewriterText(bubble, responseText, () => {
                conversationHistory.push({ role: "assistant", content: responseText });
                isGenerating = false;
                sendBtn.disabled = false;
                chatInput.focus();
            });
        }, 150);
    }

    /**
     * Handler for Custom User Queries
     * Securely routes requests to serverless endpoint /api/chat.
     * No API keys are stored in client-side code!
     */
    async function handleCustomUserMessage() {
        const text = chatInput.value.trim();
        if (!text || isGenerating) return;

        chatInput.value = "";
        isGenerating = true;
        sendBtn.disabled = true;

        // Render user message
        appendMessage("user", text);
        conversationHistory.push({ role: "user", content: text });

        // Anti-Jailbreak Guard Check
        if (JAILBREAK_CLIENT_REGEX.test(text)) {
            const refusalMsg = "Maaf, permintaan ini tidak sesuai dengan protokol keamanan sistem STRATiS. Saya beroperasi secara eksklusif untuk memberikan konsultasi arsitektur perangkat lunak, sistem komputasi terdistribusi, dan profil perusahaan **STRATiS Technologies Inc.**";
            const bubble = appendMessage("assistant", "");
            streamTypewriterText(bubble, refusalMsg, () => {
                conversationHistory.push({ role: "assistant", content: refusalMsg });
                isGenerating = false;
                sendBtn.disabled = false;
                chatInput.focus();
            });
            return;
        }

        // Show typing indicator
        appendTypingIndicator();

        try {
            let aiResponseText = null;

            // Secure Proxy Request (Tries /api/chat and /.netlify/functions/chat)
            const endpoints = ["/api/chat", "/.netlify/functions/chat"];

            for (const endpoint of endpoints) {
                if (aiResponseText) break;
                try {
                    const res = await fetch(endpoint, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            messages: conversationHistory.slice(-6)
                        })
                    });

                    const contentType = res.headers.get("content-type") || "";
                    if (contentType.includes("application/json")) {
                        const data = await res.json();
                        if (res.ok && data.choices && data.choices[0] && data.choices[0].message) {
                            const rawMsg = data.choices[0].message.content || "";
                            let cleaned = stripThinkingProcess(rawMsg);

                            // If stripping left empty string because all tokens were inside <think>,
                            // check if reasoning_content had a concluding statement
                            if (!cleaned && data.choices[0].message.reasoning_content) {
                                const reasoningStr = String(data.choices[0].message.reasoning_content).trim();
                                const answerMatch = reasoningStr.match(/(?:kesimpulan|jawaban|ringkasan|final answer|conclusion):\s*([\s\S]+)$/i);
                                if (answerMatch && answerMatch[1]) {
                                    cleaned = answerMatch[1].trim();
                                }
                            }

                            aiResponseText = cleaned || "";
                        }
                    }
                } catch (netErr) {
                    // Endpoint unavailable, try next
                }
            }

            // Fallback to corporate knowledge base if offline, serverless error, or empty response
            if (!aiResponseText) {
                aiResponseText = (typeof queryKnowledgeBase === "function")
                    ? queryKnowledgeBase(text)
                    : "Terima kasih atas pertanyaan Anda. Asisten STRATiS siap membantu kebutuhan rekayasa perangkat lunak enterprise Anda.";
            }

            removeTypingIndicator();

            const bubble = appendMessage("assistant", "");
            streamTypewriterText(bubble, aiResponseText, () => {
                conversationHistory.push({ role: "assistant", content: aiResponseText });
            });

        } catch (error) {
            removeTypingIndicator();
            const bubble = appendMessage("assistant", "");
            const fallbackText = (typeof queryKnowledgeBase === "function")
                ? queryKnowledgeBase(text)
                : `Terima kasih atas pertanyaan Anda. Asisten STRATiS siap membantu kebutuhan sistem Anda.`;
            streamTypewriterText(bubble, fallbackText, () => {
                conversationHistory.push({ role: "assistant", content: fallbackText });
            });
        } finally {
            isGenerating = false;
            sendBtn.disabled = false;
            chatInput.focus();
        }
    }

    // Form submission for custom questions
    if (chatForm) {
        chatForm.addEventListener("submit", (e) => {
            e.preventDefault();
            handleCustomUserMessage();
        });
    }

    // 5 Quick Chat Buttons
    quickChatBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const key = btn.getAttribute("data-quick-key");
            const label = btn.getAttribute("data-label") || btn.textContent.trim();
            handleQuickChat(key, label);
        });
    });
});
