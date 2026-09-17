/**
 * STRATiS Assistant - Enterprise Client Controller
 * 5 Deterministic Quick Chats with instant responses + Autonomous AI for custom queries.
 * Anti-Jailbreak protected, zero manual API key friction, no online pill.
 */

document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const launcher = document.getElementById("chatbotLauncher");
    const panel = document.getElementById("chatbotPanel");
    const closeBtn = document.getElementById("chatbotCloseBtn");
    const clearBtn = document.getElementById("chatbotClearBtn");
    const msgContainer = document.getElementById("chatbotMessages");
    const chatForm = document.getElementById("chatbotInputForm");
    const chatInput = document.getElementById("chatbotInput");
    const sendBtn = document.getElementById("chatbotSendBtn");
    const quickChatBtns = document.querySelectorAll(".quick-chat-btn");

    const STORAGE_KEY_HISTORY = "stratis_assistant_history_v2";
    let conversationHistory = [];
    let isGenerating = false;

    // Anti-Jailbreak Client Guard Regex (Targets actual malicious prompt-injection attacks)
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

    // Clear Conversation History
    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            conversationHistory = [];
            localStorage.removeItem(STORAGE_KEY_HISTORY);
            msgContainer.innerHTML = "";
            renderInitialGreeting();
        });
    }

    // Security: Strict HTML Escaping to prevent XSS
    function escapeHtml(text) {
        if (!text) return "";
        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Safe Markdown Parser
    function parseSafeMarkdown(rawText) {
        if (!rawText) return "";

        let safe = escapeHtml(rawText);

        // Fenced code blocks
        safe = safe.replace(/```([\s\S]*?)```/g, (match, code) => {
            return `<pre><code>${code.trim()}</code></pre>`;
        });

        // Inline code
        safe = safe.replace(/`([^`]+)`/g, "<code>$1</code>");

        // Headers
        safe = safe.replace(/^#### (.*?)$/gm, "<h4>$1</h4>");
        safe = safe.replace(/^### (.*?)$/gm, "<h3>$1</h3>");
        safe = safe.replace(/^## (.*?)$/gm, "<h3>$1</h3>");

        // Bold & Italic
        safe = safe.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
        safe = safe.replace(/\*([^*]+)\*/g, "<em>$1</em>");

        // Safe Links
        safe = safe.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\)/g, (match, label, url) => {
            return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
        });

        // Lists and Paragraphs
        const lines = safe.split("\n");
        let html = "";
        let inList = false;

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();

            if (line.startsWith("- ") || line.startsWith("* ")) {
                if (!inList) {
                    html += "<ul>";
                    inList = true;
                }
                html += `<li>${line.substring(2)}</li>`;
            } else if (/^\d+\.\s/.test(line)) {
                if (!inList) {
                    html += "<ol>";
                    inList = true;
                }
                html += `<li>${line.replace(/^\d+\.\s/, "")}</li>`;
            } else {
                if (inList) {
                    html += inList === "ol" ? "</ol>" : "</ul>";
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

Saya adalah asisten rekayasa dan konsultasi arsitektur resmi **STRATiS Technologies Inc.**

Anda dapat menggunakan **5 Tombol Topik Cepat** di bawah untuk informasi instan terverifikasi, atau ketikkan pertanyaan teknis spesifik Anda pada kolom input di bawah agar sistem AI kami menjawab secara mandiri.`;
        appendMessage("assistant", greeting);
    }

    // Smooth Typewriter Output
    function streamTypewriterText(bubbleElement, fullText, onDone) {
        let i = 0;
        const speed = 8;
        const step = 5;

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
     * Always returns the exact deterministic quick response.
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
        }, 180);
    }

    /**
     * Handler for Custom User Queries (Powered by NVIDIA NIM AI)
     * When user types manually, request the live AI completion.
     * No canned quick responses here — only real AI responses.
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

        // Anti-Jailbreak Client Guard Check
        if (JAILBREAK_CLIENT_REGEX.test(text)) {
            const refusalMsg = "Maaf, permintaan ini tidak sesuai dengan protokol keamanan sistem STRATiS. Saya beroperasi secara eksklusif untuk memberikan informasi resmi terkait layanan rekayasa perangkat lunak, arsitektur sistem, dan profil perusahaan **STRATiS Technologies Inc.**";
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
            let errorMessage = null;

            try {
                const res = await fetch("/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        messages: conversationHistory.slice(-8)
                    })
                });

                const data = await res.json();

                if (res.ok && data.choices && data.choices[0] && data.choices[0].message) {
                    aiResponseText = data.choices[0].message.content;
                } else if (data.error === "NO_SERVER_KEY") {
                    errorMessage = `Sistem AI membutuhkan konfigurasi **NVIDIA_API_KEY** pada environment server (\`.env\`) untuk memproses pertanyaan bebas Anda.\n\nSilakan atur di file \`.env\`:\n\`\`\`env\nNVIDIA_API_KEY=nvapi-your-api-key\nNVIDIA_MODEL=meta/llama-3.1-70b-instruct\n\`\`\`\n\n*(Catatan: 5 Tombol Topik Cepat di atas dapat digunakan untuk respons instan terverifikasi perusahaan).*`;
                } else if (data.error === "UPSTREAM_ERROR") {
                    errorMessage = `Kendala koneksi ke NVIDIA NIM AI:\n**${escapeHtml(data.message || "Upstream Error")}**\n\nSilakan periksa kembali nilai \`NVIDIA_API_KEY\` dan \`NVIDIA_MODEL\` di file \`.env\`.`;
                } else if (data.message) {
                    errorMessage = data.message;
                } else {
                    errorMessage = "Tidak dapat menerima respons dari server AI. Silakan periksa koneksi server lokal Anda.";
                }
            } catch (networkErr) {
                errorMessage = `Tidak dapat terhubung ke endpoint \`/api/chat\` (${escapeHtml(networkErr.message)}).\n\nPastikan server lokal dijalankan dengan perintah:\n\`\`\`bash\nnode server.js\n\`\`\`\ndan pastikan \`NVIDIA_API_KEY\` telah diatur di file \`.env\`.`;
            }

            removeTypingIndicator();

            if (aiResponseText) {
                const bubble = appendMessage("assistant", "");
                streamTypewriterText(bubble, aiResponseText, () => {
                    conversationHistory.push({ role: "assistant", content: aiResponseText });
                });
            } else if (errorMessage) {
                const bubble = appendMessage("assistant", "");
                streamTypewriterText(bubble, errorMessage, () => {
                    conversationHistory.push({ role: "assistant", content: errorMessage });
                });
            }

        } catch (error) {
            removeTypingIndicator();
            const bubble = appendMessage("assistant", "");
            const fallbackText = `Maaf, terjadi kendala saat memproses permintaan: ${escapeHtml(error.message)}`;
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
