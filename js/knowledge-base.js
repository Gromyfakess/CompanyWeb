/**
 * STRATiS Corporate Intelligence Knowledge Base
 * Autonomous enterprise intelligence engine with built-in Anti-Jailbreak defense
 * and 5 deterministic quick responses for preset quick chats.
 */

const STRATIS_KB = {
  company: {
    name: "STRATiS Technologies Inc.",
    legalEntity: "PT STRATiS Solusi Digital",
    tagline: "Architecting Resilient Digital Foundations & Scalable Enterprise Infrastructure",
    field: "Teknologi, Enterprise Software & Cloud Infrastructure",
    headquarters: "Horizon Tower, Level 18, Batam, Indonesia",
    leadership: {
      ceo: "David Hendrawan (Chief Executive Officer)",
      architect: "Katherine Laurent (Principal Cloud Architect)",
      aiHead: "Dr. Fiona Cellestine (Head of AI & Cognitive Systems)"
    },
    email: "solutions@stratis-tech.io",
    supportEmail: "support@stratis-tech.io",
    phone: "+62 (21) 5088-0199",
    vision: "Menjadi pelopor global dalam rekayasa arsitektur perangkat lunak enterprise dan infrastruktur komputasi awan berkinerja tinggi yang mendefinisikan standar baru efisiensi, ketahanan sistem, dan integrasi kecerdasan buatan enterprise.",
    mission: [
      "Precision Engineering: Membangun infrastruktur perangkat lunak modular dengan prinsip Clean Architecture dan latensi sub-milidetik.",
      "Intelligent Acceleration: Mengintegrasikan sistem kecerdasan kognitif enterprise untuk melipatgandakan produktivitas proses bisnis.",
      "Seamless Resilience: Menyediakan fondasi sistem yang tangguh, aman, dan berkesinambungan bagi akselerasi bisnis mitra global."
    ],
    coreValues: {
      precision: "Presisi (Precision) — Terinspirasi dari garis potong tajam (slash) pada huruf 'S', mencerminkan ketelitian desain kode, pemisahan domain logic, dan zero-defect implementation.",
      velocity: "Kecepatan (Velocity) — Terinspirasi dari speed lines di sudut kanan atas, menegaskan akselerasi inovasi dinamis dan kecepatan delivery sistem ke ranah produksi.",
      seamlessFlow: "Alur Mulus (Seamless Flow) — Terinspirasi dari garis lengkung (swoosh) pada huruf 'R', melambangkan integrasi data dan microservices yang berjalan tanpa hambatan.",
      trust: "Keandalan & Keamanan (Trust & Resilience) — Ditopang oleh warna biru solid yang melambangkan keamanan kelas enterprise, reliabilitas tinggi, dan integritas profesional."
    }
  },

  logoPhilosophy: {
    font: "Ethnocentric (font bertema Tech/Sci-Fi Sans-Serif yang dimodifikasi miring/italic)",
    speedLines: "Kemiringan huruf ke kanan ditambah speed lines di sudut kanan atas menciptakan ilusi visual pergerakan cepat dan dinamis yang menegaskan bahwa STRATiS adalah perusahaan teknologi yang inovatif dan bergerak cepat.",
    slashS: "Garis potong (slash) tajam pada huruf 'S' merepresentasikan presisi rekayasa arsitektur perangkat lunak.",
    swooshR: "Garis lengkung (swoosh) dari huruf 'R' di bagian bawah melambangkan fondasi arsitektur yang kuat dan memiliki alur mulus (seamless).",
    colorBlue: "Karakter huruf tebal dengan warna biru solid (#0056d6) memberikan impresi kokoh, modern, aman (secure), tepercaya, dan profesional."
  },

  services: [
    {
      title: "Enterprise Backend & Microservices (Go Clean Architecture)",
      desc: "Rekayasa backend berskala enterprise dengan throughput tinggi, latensi sub-milidetik, dan pemisahan lapisan domain logic dari framework serta database luar."
    },
    {
      title: "Distributed Cloud & Multi-Region Service Mesh",
      desc: "Infrastruktur cloud terdistribusi dengan edge routing berbasis eBPF, mutual TLS (mTLS), dan orkestrasi microservices zero-downtime."
    },
    {
      title: "Enterprise Cognitive Systems & Neural RAG",
      desc: "Integrasi sistem cerdas untuk otomatisasi proses bisnis, knowledge retrieval (RAG) aman berbasis enkripsi tingkat tinggi, dan semantic search internal berlatensi rendah."
    },
    {
      title: "High-Concurrency Database Optimization & Clustering",
      desc: "Tuning indeks relasional (PostgreSQL / MySQL), distributed caching (Redis Cluster), dan mitigasi query bottleneck untuk menangani puluhan ribu transaksi per detik."
    }
  ],

  projects: [
    {
      id: "aethermesh",
      title: "AetherMesh — Distributed Multi-Cloud Service Mesh & Edge Gateway",
      client: "Global Telecommunications & Cloud Infrastructure",
      tech: "Go (Golang), eBPF Kernel Routing, Zero-Trust mTLS, Distributed Telemetry",
      summary: "High-concurrency edge API gateway dan zero-trust service mesh yang menangani lebih dari 54.000 req/detik per kluster dengan latensi antar-node rata-rata 0.85ms."
    },
    {
      id: "nexuscore",
      title: "NexusCore — Real-Time Transaction Engine & Ledger Reconciliation",
      client: "Institutional FinTech & Digital Banking",
      tech: "Go Clean Architecture, Event Sourcing, Clustered PostgreSQL, Redis In-Memory Locks",
      summary: "Mesin kliring transaksi finansial dan rekonsiliasi pembukuan real-time dengan verifikasi audit kriptografis, memproses 32.500 transaksi per detik dengan penyelesaian ACID sub-5ms."
    },
    {
      id: "stratis-ai",
      title: "STRATiS Cognitive Intelligence Hub",
      client: "Enterprise AI Telemetry Division",
      tech: "Python FastAPI, Vector DB, High-Throughput Inference Telemetry",
      summary: "Platform orkestrasi inferensi cerdas enterprise dengan analitik throughput token real-time, visualisasi neural pathway, dan manajemen knowledge terenkripsi TLS 1.3."
    },
    {
      id: "sentinel",
      title: "Sentinel Cloud Gateway & Cyber Defense Telemetry",
      client: "High-Throughput Microservices Security Infrastructure",
      tech: "Go (Golang), Redis Distributed Cache, WAF Middleware, Docker",
      summary: "API Gateway mikroarsitektur berkemampuan routing cepat dengan proteksi cyber defense telemetry, pembatas laju (rate limiting) adaptif, dan mitigasi DDoS jaringan."
    }
  ]
};

// Exactly 5 Curated Quick Responses
const STRATIS_QUICK_RESPONSES = {
  "quick_profile": `### Profil Perusahaan STRATiS Technologies Inc.

**STRATiS Technologies Inc.** (PT STRATiS Solusi Digital) adalah studio rekayasa perangkat lunak enterprise dan infrastruktur digital modern yang berkantor pusat di **Horizon Tower, Level 18, Batam, Indonesia**.

* **Visi Global**: ${STRATIS_KB.company.vision}

* **3 Misi Utama**:
  1. **Precision Engineering**: Membangun arsitektur Go modular berprinsip Clean Architecture dengan query berlatensi sub-milidetik.
  2. **Intelligent Acceleration**: Mengintegrasikan sistem kecerdasan kognitif enterprise untuk efisiensi alur kerja bisnis secara aman.
  3. **Seamless Resilience**: Menyediakan fondasi komputasi yang stabil, aman, dan siap bertumbuh bersama skala organisasi mitra.

* **4 Nilai Inti (Core Values)**:
  - **Presisi (Precision)**: Akurasi kode tingkat tinggi dan pemisahan domain logic tanpa cacat.
  - **Kecepatan (Velocity)**: Akselerasi inovasi dinamis dan delivery produksi yang tangkas.
  - **Alur Mulus (Seamless Flow)**: Integrasi microservices dan data pipeline tanpa friksi teknis.
  - **Keandalan (Trust & Resilience)**: Tata kelola data enterprise, kepatuhan keamanan, dan keandalan operasional 99.99%.`,

  "quick_engineering": `### Layanan Rekayasa Go & Cloud Infrastructure

STRATiS berfokus pada pembangunan sistem backend berkinerja tinggi yang dirancang untuk skala trafik masif:

1. **Go Clean Architecture**:
   - Pemisahan ketat antara *Domain Entities*, *Usecases*, *Repositories*, dan *HTTP Deliveries*.
   - Kode bebas dari ketergantungan framework luar, mempermudah unit testing dan pemeliharaan jangka panjang.
   - Latensi respon median di bawah **8.4ms** dengan alokasi memori minimal.

2. **Distributed Cloud & Service Mesh**:
   - Routing jaringan berkecepatan tinggi menggunakan Go dan inspeksi kernel eBPF.
   - Enkripsi mutual TLS (mTLS) end-to-end tanpa overhead performa.
   - High concurrency handling menggunakan goroutines multiplexed pool.

3. **High-Concurrency Database Tier**:
   - Optimasi skema relasional terindeks (PostgreSQL / MySQL).
   - Distributed in-memory caching via Redis Cluster untuk rasio hit di atas 98%.`,

  "quick_ai": `### Kapabilitas AI & Sistem Cerdas Enterprise

STRATiS mengembangkan dan mengintegrasikan kapabilitas kecerdasan kognitif dengan tata kelola keamanan ketat:

* **Enterprise Cognitive RAG Pipeline**:
  - Retrieval-Augmented Generation terenkripsi untuk menghubungkan data korporat internal secara aman.
  - Semantic chunking dan pencarian vektor berdimensi tinggi berlatensi rendah.

* **Autonomous Knowledge Telemetry**:
  - Pemantauan performa inferensi, token throughput, dan GPU load secara real-time.
  - Mitigasi risiko halusinasi melalui validasi domain logic berbasis aturan bisnis.

* **Zero-Data-Retention Security**:
  - Arsitektur proxy serverless dengan enkripsi Edge TLS 1.3.
  - Perlindungan ketat terhadap prompt injection dan kebocoran data rahasia korporat.`,

  "quick_portfolio": `### Showcase Portfolio Proyek Produksi

STRATiS Technologies telah merancang dan mengimplementasikan sistem infrastruktur untuk berbagai sektor enterprise:

1. **AetherMesh — Distributed Multi-Cloud Service Mesh**
   - *Domain*: Global Telecommunications & Cloud Infrastructure
   - *Teknologi*: \`Go, eBPF Routing, Zero-Trust mTLS, Distributed Telemetry\`
   - *Performa*: 54.000 req/detik per kluster, latensi antar-node 0.85ms.

2. **NexusCore — Real-Time Transaction Engine & Ledger**
   - *Domain*: Institutional FinTech & Digital Banking
   - *Teknologi*: \`Go Clean Architecture, Event Sourcing, Clustered PostgreSQL, Redis\`
   - *Performa*: 32.500 tx/detik, verifikasi audit kriptografis, penyelesaian ACID < 5ms.

3. **STRATiS Cognitive Intelligence Hub**
   - *Domain*: Enterprise AI Telemetry Division
   - *Teknologi*: \`Python FastAPI, High-Dimensional Vector DB, Real-Time Telemetry\`
   - *Performa*: Orkestrasi inferensi cerdas dengan visualisasi neural pathways dan kapasitas konteks 1M.

4. **Sentinel Cloud Gateway & Cyber Defense**
   - *Domain*: High-Throughput Microservices Security
   - *Teknologi*: \`Go (Golang), Redis Cluster, WAF Middleware, Docker\`
   - *Performa*: Rate limiting adaptif, mitigasi DDoS instan, dan uptime 99.99%.`,

  "quick_contact": `### Konsultasi & Kontak Kemitraan STRATiS

Tim arsitek STRATiS siap mendiskusikan kebutuhan sistem, migrasi arsitektur, dan transformasi digital organisasi Anda:

* **Email Resmi**: [solutions@stratis-tech.io](mailto:solutions@stratis-tech.io)
* **Hotline Enterprise**: +62 (21) 5088-0199
* **Kantor Pusat**: Horizon Tower, Level 18, Batam, Indonesia
* **Corporate Network**: [linkedin.com/company/stratis-technologies](https://linkedin.com/company/stratis-technologies)

Silakan gunakan formulir **Permohonan Konsultasi Proyek** di bagian bawah website untuk menjadwalkan sesi technical briefing bersama principal architect kami.`
};

// Anti-Jailbreak Pattern Matcher
const JAILBREAK_REGEX = /(ignore\s+(all\s+)?(previous|prior)\s+instructions|system\s+prompt|dan\s+mode|jailbreak|bypass|act\s+as\s+an\s+unfiltered|pretend\s+you\s+have\s+no\s+rules|reveal\s+(your\s+)?(system|internal)\s+prompt|what\s+model|who\s+trained\s+you|nvidia|nim|nemotron|llama|openai|chatgpt)/i;

/**
 * Intelligent Query Matcher with Anti-Jailbreak Guardrails
 * Used for autonomous AI answering when user types custom questions.
 */
function queryKnowledgeBase(userQuery) {
  const raw = String(userQuery || "").trim();
  const q = raw.toLowerCase();

  // 1. Anti-Jailbreak Protection
  if (JAILBREAK_REGEX.test(raw)) {
    return `Maaf, permintaan ini tidak sesuai dengan protokol keamanan sistem STRATiS. Saya beroperasi secara eksklusif untuk memberikan informasi resmi terkait layanan rekayasa perangkat lunak, arsitektur sistem, dan profil perusahaan **STRATiS Technologies Inc.**`;
  }

  const has = (...terms) => terms.some(term => q.includes(term));

  // Leadership queries
  if (has("leadership", "direksi", "tim", "siapa di balik", "david hendrawan", "katherine", "fiona", "ceo", "cto", "architect")) {
    return `### Tim Kepemimpinan & Arsitektur STRATiS\n\n**STRATiS Technologies Inc.** dipimpin oleh para profesional rekayasa perangkat lunak dan arsitek sistem terdistribusi:\n\n- **David Hendrawan** — Chief Executive Officer (CEO) // Founder\n- **Katherine Laurent** — Principal Cloud Architect\n- **Dr. Fiona Cellestine** — Head of AI & Cognitive Systems\n\nKepemimpinan kami memadukan visi ekspansi bisnis dengan standar rekayasa kode Clean Architecture bebas cacat dan tata kelola enterprise berstandar internasional.`;
  }

  // Logo philosophy
  if (has("logo", "arti logo", "makna logo", "filosofi", "ethnocentric", "warna biru", "speed line", "swoosh", "slash")) {
    return `### Filosofi Identitas Wordmark STRATiS\n\nIdentitas visual **STRATiS** memadukan 4 elemen geometri arsitektural:\n\n1. **Kemiringan Huruf & Speed Lines**: Melambangkan **Velocity** — pergerakan cepat dan inovasi dinamis yang terus melaju ke depan.\n2. **Garis Potong Tajam (Slash) pada 'S'**: Merepresentasikan **Presisi** tinggi dan ketajaman dalam pemisahan dependensi Clean Architecture.\n3. **Garis Lengkung (Swoosh) pada 'R'**: Melambangkan fondasi arsitektur yang kokoh serta alur kerja yang mulus (**Seamless Flow**).\n4. **Solid Electric Blue (#0056d6)**: Menegaskan keamanan enterprise, reliabilitas sistem, dan profesionalisme teruji.`;
  }

  // Go Clean Architecture
  if (has("clean architecture", "golang", "go", "kenapa go", "arsitektur", "domain", "repository", "usecase")) {
    return `### Standar Clean Architecture di STRATiS\n\nDi STRATiS, kami menerapkan prinsip **Clean Architecture (Robert C. Martin)** yang memisahkan kode menjadi 4 lapisan independen:\n\n1. **Domain Entities**: Aturan bisnis murni tanpa dependensi eksternal.\n2. **Usecases / Interactors**: Logika alur proses transaksi dan orkestrasi fitur.\n3. **Repositories**: Abstraksi akses basis data (PostgreSQL / MySQL / Redis).\n4. **Deliveries / Handlers**: Endpoint HTTP RESTful berkinerja tinggi menggunakan Go.\n\n**Keunggulan Utama**: Latensi rata-rata sub-10ms, konsumsi memori minimal, kemudahan pengujian unit otomatis, dan ketahanan sistem jangka panjang tanpa keterikatan framework.`;
  }

  // Database optimization
  if (has("database", "mysql", "postgres", "postgresql", "redis", "query", "indexing", "cache")) {
    return `### Solusi Data Tier & Database Optimization\n\nSTRATiS merekayasa lapisan data tier untuk menangani lonjakan transaksi finansial dan data stream tinggi:\n\n- **Clustered Indexing**: Mengurangi full table scan menjadi direct B-tree lookup dengan latensi query rata-rata 1.2ms.\n- **Distributed Redis Cache**: Menampung session dan data referensi dengan rasio hit mencapai 98.6%.\n- **ACID Concurrency Control**: Menjamin integritas data mutlak tanpa dirty read pada concurrent transactions.\n- **Multiplexed Connection Pooling**: Mengoptimalkan koneksi database menggunakan thread-safe Go worker pools.`;
  }

  // Greetings
  if (has("halo", "hai", "hello", "hi", "selamat pagi", "selamat siang", "selamat malam", "pagi", "siang", "malam")) {
    return `Halo! Selamat datang di **STRATiS Assistant**. 🚀\n\nSaya siap membantu Anda mengeksplorasi:\n- **Profil & Visi STRATiS Technologies**\n- **Layanan Rekayasa Go & Cloud Infrastructure**\n- **Kapabilitas AI & Sistem Cerdas Enterprise**\n- **Portfolio Proyek Produksi (AetherMesh, NexusCore, dll)**\n- **Konsultasi Kemitraan & Kontak**\n\nSilakan pilih salah satu tombol cepat di atas atau ajukan pertanyaan spesifik Anda secara langsung!`;
  }

  // Autonomous Dynamic Reasoning Fallback
  return `Terima kasih atas pertanyaan Anda terkait **"${raw}"**.\n\nSebagai asisten resmi **STRATiS Technologies Inc.**, sistem kami berfokus pada rekayasa arsitektur perangkat lunak enterprise dengan standar **Clean Architecture**, infrastruktur cloud terdistribusi, dan platform kecerdasan kognitif yang aman.\n\nUntuk informasi terstruktur, Anda dapat menggunakan 5 tombol topik cepat di atas, atau silakan jelaskan lebih detail kebutuhan sistem yang ingin Anda diskusikan.`;
}
