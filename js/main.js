/**
 * STRATiS Technologies — Enterprise Controller
 * Handles interactive Architecture Console tabs, spotlight cards,
 * gallery filters, architecture modal lightbox, and B2B intake form.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Header scroll progress & floating pill styling
    const header = document.querySelector(".header-nav-floating");
    const progressBar = document.getElementById("scrollProgressBar");

    function updateScroll() {
        const scrollTop = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (header) {
            if (scrollTop > 30) {
                header.style.background = "rgba(10, 12, 16, 0.94)";
                header.style.borderColor = "rgba(255, 255, 255, 0.12)";
            } else {
                header.style.background = "rgba(12, 14, 19, 0.85)";
                header.style.borderColor = "rgba(255, 255, 255, 0.08)";
            }
        }

        if (progressBar && totalHeight > 0) {
            const progress = Math.min(100, Math.max(0, (scrollTop / totalHeight) * 100));
            progressBar.style.width = `${progress}%`;
        }
    }

    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    // 2. Smooth anchor scroll with header offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#" || targetId === "") return;

            const targetEl = document.querySelector(targetId);
            if (!targetEl) return;

            e.preventDefault();
            const headerOffset = 95;
            const topPosition = targetId === "#overview" ? 0 : targetEl.offsetTop - headerOffset;

            window.scrollTo({
                top: topPosition,
                behavior: "smooth"
            });

            // Close mobile menu if open
            const navLinks = document.querySelector(".nav-links");
            if (navLinks && navLinks.classList.contains("is-mobile-open")) {
                navLinks.classList.remove("is-mobile-open");
            }
        });
    });

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById("mobileNavToggle");
    const navLinksMenu = document.querySelector(".nav-links");
    if (mobileToggle && navLinksMenu) {
        mobileToggle.addEventListener("click", () => {
            navLinksMenu.classList.toggle("is-mobile-open");
        });
    }

    // 3. Active Nav Link on Scroll
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-item-link");

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 160;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    const isCurrent = link.getAttribute("href") === `#${sectionId}`;
                    link.classList.toggle("active", isCurrent);
                });
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav, { passive: true });

    // 4. Ambient Flashlight Tracking
    const flashlight = document.getElementById("ambientFlashlight");
    if (flashlight) {
        window.addEventListener("mousemove", (e) => {
            flashlight.style.left = `${e.clientX}px`;
            flashlight.style.top = `${e.clientY}px`;
        }, { passive: true });
    }

    // 5. Spotlight Cards Cursor Tracking
    document.querySelectorAll(".spotlight-card").forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x.toFixed(1)}px`);
            card.style.setProperty("--mouse-y", `${y.toFixed(1)}px`);
        });
    });

    // 6. Scroll Reveal Observer
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-revealed");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add("is-revealed"));
    }

    // 7. Interactive Architecture Console (Hero Right)
    const consoleTabs = document.querySelectorAll(".console-tab-btn");
    const consoleContents = document.querySelectorAll(".console-tab-content");

    consoleTabs.forEach(btn => {
        btn.addEventListener("click", () => {
            consoleTabs.forEach(b => b.classList.remove("active"));
            consoleContents.forEach(c => c.classList.remove("active"));

            btn.classList.add("active");
            const targetTabId = btn.getAttribute("data-tab");
            const targetContent = document.getElementById(targetTabId);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });

    // 8. Mobile Navigation Toggle
    const mobileToggle = document.getElementById("mobileNavToggle");
    const navLinksContainer = document.querySelector(".nav-links");
    if (mobileToggle && navLinksContainer) {
        mobileToggle.addEventListener("click", () => {
            navLinksContainer.classList.toggle("is-mobile-open");
        });
    }

    // 9. Interactive Portfolio Gallery Filtering
    const filterBtns = document.querySelectorAll(".filter-btn");
    const galleryCards = document.querySelectorAll(".gallery-card, .gallery-bento-card-wrap");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            galleryCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filterValue === "all" || category === filterValue) {
                    card.style.display = "flex";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 20);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.96)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 250);
                }
            });
        });
    });

    // 10. Project Architecture Detail Modal Data
    const projectData = {
        "aethermesh": {
            title: "AetherMesh — Distributed Multi-Cloud Service Mesh & Edge Gateway",
            category: "Distributed Cloud Infrastructure &bull; High-Concurrency Network Engine",
            image: "images/projects/aethermesh.jpg",
            summary: "High-concurrency edge API gateway dan zero-trust service mesh berskala multi-region global yang menangani routing mikroarsitektur dengan latensi jaringan sub-milidetik untuk mencapai efisiensi throughput ekstrem tanpa overhead proxy tradisional.",
            specs: [
                { title: "Core Engine", val: "High-Throughput Native Routing Engine" },
                { title: "Throughput Scale", val: "54,000+ Requests/sec per cluster node" },
                { title: "Security Protocol", val: "Zero-Trust mutual TLS (mTLS) with SPIFFE/SPIRE" },
                { title: "Median Hop Latency", val: "0.85ms p50 (1.4ms p99 across multi-region mesh)" },
                { title: "Traffic Topology", val: "Autonomous Circuit Breaking & Weighted Canary Routing" },
                { title: "Observability", val: "Distributed Tracing & OpenTelemetry Exporter" }
            ],
            link: "aethermesh.stratis.internal"
        },
        "nexuscore": {
            title: "NexusCore — Real-Time Transaction Engine & Ledger Reconciliation",
            category: "Core Financial Architecture &bull; Distributed Event-Sourced Ledger",
            image: "images/projects/nexuscore.jpg",
            summary: "Mesin kliring transaksi finansial dan rekonsiliasi pembukuan real-time berkinerja tinggi untuk institusi perbankan dan fintech global dengan model Event Sourcing dan snapshot in-memory terdistribusi, menjamin penyelesaian transaksi ACID mutlak tanpa dirty read.",
            specs: [
                { title: "Architecture Standard", val: "Enterprise Modular Architecture • Event Sourcing & CQRS" },
                { title: "Transaction Throughput", val: "32,500 Transactions/sec sustained peak" },
                { title: "Data Tier", val: "Clustered PostgreSQL with WAL Replication" },
                { title: "Settlement SLA", val: "Sub-5ms End-to-End Cryptographic Clearance" },
                { title: "Audit Verification", val: "Merkle Tree Root Hash & Immutable Ledger History" },
                { title: "Locking Mechanism", val: "Distributed Redis Redlock for Zero Double-Spending" }
            ],
            link: "nexuscore.stratis.internal"
        },
        "stratis-ai": {
            title: "STRATiS Cognitive Intelligence Hub",
            category: "Enterprise AI Infrastructure &bull; Neural Orchestration",
            image: "images/projects/stratis-ai-hub.jpg",
            summary: "Platform orkestrasi inferensi cerdas tingkat lanjut yang menghubungkan microservices korporat dengan kluster neural internal STRATiS. Dilengkapi visualisasi neural pathways, pemantauan latensi inferensi real-time, dan retrieval-augmented generation (RAG) aman berbasis enkripsi tingkat enterprise.",
            specs: [
                { title: "Inference Engine", val: "STRATiS Enterprise Neural Cluster v4.2" },
                { title: "Microservices", val: "Asynchronous High-Throughput Streaming Gateway" },
                { title: "Vector Search", val: "High-dimensional pgvector with semantic chunking" },
                { title: "Telemetry Metrics", val: "Token/sec throughput & compute load telemetry" },
                { title: "Security Isolation", val: "Serverless Netlify Proxy & Edge TLS 1.3" },
                { title: "Context Window", val: "Up to 1,000,000 Tokens (1M Context)" }
            ],
            link: "stratis-ai.internal/hub"
        },
        "sentinel": {
            title: "Sentinel Cloud Gateway & Cyber Telemetry",
            category: "Cloud Microservices &bull; High Concurrency Gateway",
            image: "images/projects/sentinel-gateway.jpg",
            summary: "API Gateway mikroarsitektur berkinerja tinggi yang menangani perutean request, rate limiting adaptif berbasis Redis, mitigasi serangan DDoS, dan inspeksi WAF dengan latensi jaringan sub-milidetik menggunakan arsitektur mikroarsitektur modern.",
            specs: [
                { title: "Core Engine", val: "High-Concurrency Async Execution Engine" },
                { title: "Distributed Cache", val: "Redis Cluster for Token Bucket Rate Limiting" },
                { title: "Security Layer", val: "WAF Middleware & Anomaly Detection" },
                { title: "Throughput", val: "10,000+ Requests/sec per node" },
                { title: "Containerization", val: "Docker & Kubernetes Orchestration" },
                { title: "Observability", val: "Prometheus Metrics & Distributed Tracing" }
            ],
            link: "sentinel.stratis.internal"
        }
    };

    // Modal elements
    const modalOverlay = document.getElementById("archModalOverlay");
    const modalCloseBtn = document.getElementById("archModalCloseBtn");
    const modalCategory = document.getElementById("modalCategory");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalSummary = document.getElementById("modalSummary");
    const modalSpecsGrid = document.getElementById("modalSpecsGrid");

    function openModal(projectId) {
        const p = projectData[projectId];
        if (!p) return;

        modalCategory.innerHTML = p.category;
        modalTitle.textContent = p.title;
        modalImage.src = p.image;
        modalImage.alt = p.title;
        modalSummary.textContent = p.summary;

        modalSpecsGrid.innerHTML = p.specs.map(s => `
            <div class="arch-spec-item">
                <span class="spec-label font-mono">${s.title}</span>
                <span class="spec-val">${s.val}</span>
            </div>
        `).join("");

        modalOverlay.classList.add("is-open");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modalOverlay.classList.remove("is-open");
        document.body.style.overflow = "";
    }

    document.querySelectorAll(".btn-open-modal").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-project-id");
            openModal(id);
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("is-open")) {
            closeModal();
        }
    });

    // 11. Interactive Contact Section Assistant Launcher
    const contactAiBtn = document.getElementById("contactAiLaunchBtn");
    if (contactAiBtn) {
        contactAiBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const chatbotLauncher = document.getElementById("chatbotLauncher");
            if (chatbotLauncher) chatbotLauncher.click();
        });
    }
});
