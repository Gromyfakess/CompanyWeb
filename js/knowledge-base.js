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
      "Precision Engineering: Membangun infrastruktur perangkat lunak modular enterprise dengan latensi sub-milidetik dan reliabilitas tinggi.",
      "Intelligent Acceleration: Mengintegrasikan sistem kecerdasan kognitif enterprise untuk melipatgandakan produktivitas proses bisnis.",
      "Seamless Resilience: Menyediakan fondasi sistem yang tangguh, aman, dan berkesinambungan bagi akselerasi bisnis mitra global."
    ],
    coreValues: {
      precision: "Presisi (Precision) — Terinspirasi dari garis potong tajam (slash) pada huruf 'S', mencerminkan ketelitian desain kode, pemisahan arsitektur modular, dan zero-defect implementation.",
      velocity: "Kecepatan (Velocity) — Terinspirasi dari speed lines di sudut kanan atas, menegaskan akselerasi inovasi dinamis dan kecepatan delivery sistem ke ranah produksi.",
      seamlessFlow: "Alur Mulus (Seamless Flow) — Terinspirasi dari garis lengkung (swoosh) pada huruf 'R', melambangkan integrasi data dan microservices yang berjalan tanpa hambatan.",
      trust: "Keandalan & Keamanan (Trust & Resilience) — Ditopang oleh warna biru solid yang melambangkan keamanan kelas enterprise, reliabilitas tinggi, dan integritas profesional."
    }
  },

  logoPhilosophy: {
    font: "Ethnocentric (font bertema Tech/Sci-Fi Sans-Serif yang dimodifikasi miring/italic)",
    speedLines: "Kemiringan huruf ke kanan ditambah speed lines di sudut kanan atas menciptakan ilusi visual pergerakan cepat dan dinamis yang menegaskan bahwa STRATiS adalah perusahaan teknologi yang inovatif dan bergerak cepat.",
    slashS: "Garis potong (slash) tajam pada huruf 'S' merepresentasikan presisi rekayasa arsitektur perangkat lunak dan ketajaman logika bisnis.",
    swooshR: "Garis lengkung (swoosh) dari huruf 'R' di bagian bawah melambangkan fondasi arsitektur yang kuat dan memiliki alur mulus (seamless).",
    colorBlue: "Karakter huruf tebal dengan warna biru solid (#0056d6) memberikan impresi kokoh, modern, aman (secure), tepercaya, dan profesional."
  },

  services: [
    {
      title: "Enterprise Backend & Distributed Systems",
      desc: "Rekayasa backend berskala enterprise dengan throughput masif, latensi sub-milidetik, dan arsitektur modular yang memisahkan aturan bisnis inti dari framework serta database luar."
    },
    {
      title: "Distributed Cloud & Multi-Region Service Mesh",
      desc: "Infrastruktur cloud terdistribusi dengan edge routing cerdas, mutual TLS (mTLS), dan orkestrasi microservices berdaya tahan tinggi."
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
      tech: "High-Throughput Native Routing, Zero-Trust mTLS, Global Edge Mesh, Telemetry Pipeline",
      summary: "High-concurrency edge API gateway dan zero-trust service mesh yang menangani lebih dari 54.000 req/detik per kluster dengan latensi antar-node rata-rata 0.85ms."
    },
    {
      id: "nexuscore",
      title: "NexusCore — Real-Time Transaction Engine & Ledger Reconciliation",
      client: "Institutional FinTech & Digital Banking",
      tech: "Enterprise Modular Architecture, Event Sourcing & CQRS, Clustered PostgreSQL, Distributed Cache",
      summary: "Mesin kliring transaksi finansial dan rekonsiliasi pembukuan real-time dengan verifikasi audit kriptografis, memproses 32.500 transaksi per detik dengan penyelesaian ACID sub-5ms."
    },
    {
      id: "stratis-ai",
      title: "STRATiS Cognitive Intelligence Hub",
      client: "Enterprise AI Telemetry Division",
      tech: "High-Throughput Inference Engine, High-Dimensional Vector DB, Real-Time Telemetry Pipeline",
      summary: "Platform orkestrasi inferensi cerdas enterprise dengan analitik throughput token real-time, visualisasi neural pathway, dan manajemen knowledge terenkripsi TLS 1.3."
    },
    {
      id: "sentinel",
      title: "Sentinel Cloud Gateway & Cyber Defense Telemetry",
      client: "High-Throughput Microservices Security Infrastructure",
      tech: "Microservices Security Gateway, Distributed Redis Cluster, WAF Middleware, Container Mesh",
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
  1. **Precision Engineering**: Membangun arsitektur perangkat lunak modular enterprise dengan query berlatensi sub-milidetik.
  2. **Intelligent Acceleration**: Mengintegrasikan sistem kecerdasan kognitif enterprise untuk efisiensi alur kerja bisnis secara aman.
  3. **Seamless Resilience**: Menyediakan fondasi komputasi yang stabil, aman, dan siap bertumbuh bersama skala organisasi mitra.

* **4 Nilai Inti (Core Values)**:
  - **Presisi (Precision)**: Akurasi kode tingkat tinggi dan pemisahan arsitektur modular tanpa cacat.
  - **Kecepatan (Velocity)**: Akselerasi inovasi dinamis dan delivery produksi yang tangkas.
  - **Alur Mulus (Seamless Flow)**: Integrasi microservices dan data pipeline tanpa friksi teknis.
  - **Keandalan (Trust & Resilience)**: Tata kelola data enterprise, kepatuhan keamanan, dan keandalan operasional 99.99%.`,

  "quick_engineering": `### Layanan Rekayasa Sistem & Cloud Infrastructure

STRATiS berfokus pada pembangunan sistem backend berkinerja tinggi yang dirancang untuk skala trafik masif:

1. **Enterprise Modular Architecture**:
   - Pemisahan ketat antara domain bisnis inti, alur orkestrasi transaksi, dan integrasi antarmuka eksternal.
   - Desain terstruktur yang memudahkan pengujian unit otomatis serta pemeliharaan jangka panjang.
   - Latensi respon median di bawah **8.4ms** dengan alokasi sumber daya komputasi yang sangat efisien.

2. **Distributed Cloud & Service Mesh**:
   - Routing jaringan berkecepatan tinggi dengan segmentasi multi-region global.
   - Enkripsi mutual TLS (mTLS) otomatis end-to-end tanpa menurunkan throughput jaringan.
   - Pemrosesan asynchronous concurrency handling untuk mengatasi lonjakan trafik puncak.

3. **High-Concurrency Database Tier**:
   - Optimasi skema relasional terindeks (PostgreSQL / MySQL) dengan efisiensi B-Tree.
   - In-memory distributed caching via Redis Cluster untuk rasio hit di atas 98%.`,

  "quick_ai": `### Kapabilitas AI & Sistem Cerdas Enterprise

STRATiS mengembangkan dan mengintegrasikan kapabilitas kecerdasan kognitif dengan tata kelola keamanan ketat:

* **Enterprise Cognitive RAG Pipeline**:
  - Retrieval-Augmented Generation terenkripsi untuk menghubungkan data korporat internal secara aman.
  - Semantic chunking dan pencarian vektor berdimensi tinggi berlatensi rendah.

* **Autonomous Knowledge Telemetry**:
  - Pemantauan performa inferensi, token throughput, dan GPU compute load secara real-time.
  - Mitigasi risiko halusinasi melalui validasi domain logic berbasis aturan bisnis.

* **Zero-Data-Retention Security**:
  - Arsitektur proxy serverless dengan enkripsi Edge TLS 1.3.
  - Perlindungan ketat terhadap prompt injection dan kebocoran data rahasia korporat.`,

  "quick_portfolio": `### Showcase Portfolio Proyek Produksi

STRATiS Technologies telah merancang dan mengimplementasikan sistem infrastruktur untuk berbagai sektor enterprise:

1. **AetherMesh — Distributed Multi-Cloud Service Mesh**
   - *Domain*: Global Telecommunications & Cloud Infrastructure
   - *Teknologi*: \`High-Throughput Native Routing, Zero-Trust mTLS, Global Edge Mesh\`
   - *Performa*: 54.000 req/detik per kluster, latensi antar-node 0.85ms.

2. **NexusCore — Real-Time Transaction Engine & Ledger**
   - *Domain*: Institutional FinTech & Digital Banking
   - *Teknologi*: \`Enterprise Modular Architecture, Event Sourcing, Clustered PostgreSQL, Redis\`
   - *Performa*: 32.500 tx/detik, verifikasi audit kriptografis, penyelesaian ACID < 5ms.

3. **STRATiS Cognitive Intelligence Hub**
   - *Domain*: Enterprise AI Telemetry Division
   - *Teknologi*: \`High-Throughput Inference Engine, High-Dimensional Vector DB, Real-Time Telemetry\`
   - *Performa*: Orkestrasi inferensi cerdas dengan visualisasi neural pathways dan kapasitas konteks 1M.

4. **Sentinel Cloud Gateway & Cyber Defense**
   - *Domain*: High-Throughput Microservices Security
   - *Teknologi*: \`Microservices Security Gateway, Redis Cluster, WAF Middleware, Container Mesh\`
   - *Performa*: Rate limiting adaptif, mitigasi DDoS instan, dan uptime 99.99%.`,

  "quick_contact": `### Saluran Komunikasi Resmi STRATiS

Tim arsitek STRATiS siap mendiskusikan kebutuhan arsitektur sistem, modernisasi infrastruktur cloud, dan transformasi digital organisasi Anda:

* **Email Resmi (Inquiries)**: [solutions@stratis-tech.io](mailto:solutions@stratis-tech.io)
* **Dukungan Operasional & Keamanan**: [support@stratis-tech.io](mailto:support@stratis-tech.io)
* **Hotline Enterprise**: +62 (21) 5088-0199
* **Kantor Pusat**: Horizon Tower, Level 18, Batam, Indonesia
* **Corporate Network**: [linkedin.com/company/stratis-technologies](https://linkedin.com/company/stratis-technologies)

Anda dapat mengirimkan email langsung ke tim solusi kami atau mengajukan pertanyaan teknis kepada asisten AI ini.`
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
    return `### Tim Kepemimpinan & Arsitektur STRATiS\n\n**STRATiS Technologies Inc.** dipimpin oleh para profesional rekayasa perangkat lunak dan arsitek sistem terdistribusi:\n\n- **David Hendrawan** — Chief Executive Officer (CEO) // Founder\n- **Katherine Laurent** — Principal Cloud Architect\n- **Dr. Fiona Cellestine** — Head of AI & Cognitive Systems\n\nKepemimpinan kami memadukan visi ekspansi bisnis dengan standar rekayasa kode modular enterprise bebas cacat dan tata kelola internasional.`;
  }

  // Logo philosophy
  if (has("logo", "arti logo", "makna logo", "filosofi", "ethnocentric", "warna biru", "speed line", "swoosh", "slash")) {
    return `### Filosofi Identitas Wordmark STRATiS\n\nIdentitas visual **STRATiS** memadukan 4 elemen geometri arsitektural:\n\n1. **Kemiringan Huruf & Speed Lines**: Melambangkan **Velocity** — pergerakan cepat dan inovasi dinamis yang terus melaju ke depan.\n2. **Garis Potong Tajam (Slash) pada 'S'**: Merepresentasikan **Presisi** tinggi dan ketajaman dalam pemisahan arsitektur modular.\n3. **Garis Lengkung (Swoosh) pada 'R'**: Melambangkan fondasi arsitektur yang kokoh serta alur kerja yang mulus (**Seamless Flow**).\n4. **Solid Electric Blue (#0056d6)**: Menegaskan keamanan enterprise, reliabilitas sistem, dan profesionalisme teruji.`;
  }

  // Modular Architecture & Engineering
  if (has("arsitektur", "modular", "backend", "microservices", "performa", "throughput", "desain sistem", "standar")) {
    return `### Standar Arsitektur Enterprise di STRATiS\n\nDi STRATiS, kami menerapkan prinsip **Modular Enterprise Architecture** yang memisahkan tanggung jawab sistem secara terstruktur:\n\n1. **Core Business Logic**: Domain aturan bisnis yang independen dari framework dan database luar.\n2. **Orchestration & Workflow**: Alur proses transaksi dan eksekusi event terdistribusi.\n3. **Data Abstraction**: Manajemen akses basis data berkinerja tinggi dengan integritas ACID mutlak.\n4. **Edge Delivery & Gateway**: Endpoint API berlatensi sub-milidetik dengan proteksi keamanan terpadu.\n\n**Keunggulan Utama**: Latensi respon rata-rata di bawah 10ms, skalabilitas beban tinggi, kemudahan pengujian unit otomatis, dan ketahanan sistem jangka panjang.`;
  }

  // Database optimization
  if (has("database", "mysql", "postgres", "postgresql", "redis", "query", "indexing", "cache")) {
    return `### Solusi Data Tier & Database Optimization\n\nSTRATiS merekayasa lapisan data tier untuk menangani lonjakan transaksi finansial dan data stream tinggi:\n\n- **Clustered Indexing**: Mengurangi full table scan menjadi direct B-tree lookup dengan latensi query rata-rata 1.2ms.\n- **Distributed Redis Cache**: Menampung session dan data referensi dengan rasio hit mencapai 98.6%.\n- **ACID Concurrency Control**: Menjamin integritas data mutlak tanpa dirty read pada concurrent transactions.\n- **Multiplexed Connection Pooling**: Mengoptimalkan koneksi database menggunakan thread-safe asynchronous worker pools.`;
  }

  // Greetings
  if (has("halo", "hai", "hello", "hi", "selamat pagi", "selamat siang", "selamat malam", "pagi", "siang", "malam")) {
    return `Halo! Selamat datang di **STRATiS Assistant**. 🚀\n\nSaya siap membantu Anda mengeksplorasi:\n- **Profil & Visi STRATiS Technologies**\n- **Layanan Rekayasa Sistem & Cloud Infrastructure**\n- **Kapabilitas AI & Sistem Cerdas Enterprise**\n- **Portfolio Proyek Produksi (AetherMesh, NexusCore, dll)**\n- **Saluran Komunikasi Resmi & Kemitraan**\n\nSilakan pilih salah satu tombol cepat di atas atau ajukan pertanyaan spesifik Anda secara langsung!`;
  }

  // Autonomous Dynamic Reasoning Fallback
  return `Terima kasih atas pertanyaan Anda terkait **"${raw}"**.\n\nSebagai asisten resmi **STRATiS Technologies Inc.**, sistem kami berfokus pada rekayasa arsitektur perangkat lunak enterprise, infrastruktur cloud terdistribusi, dan platform kecerdasan kognitif yang aman.\n\nUntuk informasi terstruktur, Anda dapat menggunakan 5 tombol topik cepat di atas, atau silakan jelaskan lebih detail kebutuhan sistem yang ingin Anda diskusikan.`;
}
