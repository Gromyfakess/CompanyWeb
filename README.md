# Project Website Company Profile — STRATiS Technologies Inc.

> **Tugas Proyek Web Company Profile Semi-Dinamis**  
> Modern, profesional, dan responsif menggunakan standar murni HTML5, CSS3, dan JavaScript (Vanilla ES6+).

---

## 📋 Fitur Utama Sesuai Ketentuan Proyek

1. **Tentang Kami (About Us)**:
   - **Profil Perusahaan**: Identitas korporasi STRATiS Technologies Inc.
   - **Visi & Misi**: Visi global dan 3 pilar misi strategis rekayasa sistem.
   - **Core Values**: 4 nilai inti arsitektur (Presisi, Kecepatan, Alur Mulus, dan Keandalan).
   - **Tim Kepemimpinan**: Grid profil eksekutif (CEO, Cloud Architect, Head of AI).

2. **Portfolio & Showcase Proyek**:
   - **Galeri Interaktif**: Filter kategori proyek (*Semua*, *Go Core*, *Cloud Mesh*, *Cognitive AI*).
   - **Project Showcase**: Studi kasus sistem nyata (AetherMesh, NexusCore, Cognitive Hub, Sentinel Gateway).
   - **Modal Arsitektur**: Lightbox detail spesifikasi teknologi dan metrik performa.

3. **STRATiS Assistant (Chatbot Interaktif)**:
   - **5 Tombol Topik Cepat (Instant Verified Response)**:
     1. Profil & Visi (Tentang Kami)
     2. Rekayasa Go & Cloud (Layanan)
     3. Sistem Cerdas AI (Kapabilitas)
     4. Proyek Produksi (Showcase Proyek)
     5. Kontak & Kemitraan
   - **AI Question Answering**: Pertanyaan teknis bebas dijawab secara cerdas oleh asisten AI.
   - **Zero Client Key Exposure**: Keamanan terjamin tanpa membocorkan API key di sisi klien/browser.

---

## 🛠️ Struktur File (Bersih & Tanpa Komplikasi)

```
CompanyWeb/
├── index.html          # Halaman web utama (Semantic HTML5)
├── css/
│   ├── style.css       # Desain tema korporat (Swiss/Linear non-neon pattern)
│   └── chatbot.css     # Styling tampilan asisten chatbot
├── js/
│   ├── chatbot.js      # Controller interaktif chatbot
│   ├── knowledge-base.js # Database pengetahuan terstruktur & offline fallback
│   └── main.js         # Controller galeri, modal, smooth scroll, & tab konsol
├── images/             # Aset logo dan tangkapan layar proyek
├── fonts/              # Font Inter dan JetBrains Mono
├── vendor/             # Bootstrap Grid & FontAwesome Icons lokal
├── netlify/            # Serverless proxy aman untuk live web Netlify
└── netlify.toml        # Konfigurasi hosting statis & routing Netlify
```

*Proyek ini tidak memerlukan `package.json`, `npm install`, ataupun build step yang rumit. Cukup buka di browser.*

---

## 🚀 Cara Menjalankan

### Cara 1: Buka Langsung (Direct Browser)
Cukup buka file `index.html` dengan browser favorit Anda (Google Chrome, Firefox, Edge).

### Cara 2: Server Lokal Sederhana (Opsional)
```bash
python -m http.server 8080
```
Buka `http://localhost:8080`.

### Cara 3: Live Hosting di Netlify
- Drag and drop folder proyek ke Netlify, atau hubungkan melalui repository GitHub.
- Untuk mengaktifkan respon AI dinamis pada live web, masukkan variabel berikut pada menu **Site configuration > Environment variables** di Netlify:
  - `NVIDIA_API_KEY`: *(API key NVIDIA Anda)*
  - `NVIDIA_MODEL`: `nvidia/nemotron-3.5-lightning-30b-a3b`
