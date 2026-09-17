# CompanyWeb — STRATiS Technologies Inc.

> **Enterprise Software Architecture & Distributed Cloud Infrastructure Platform**  
> Official corporate profile and production project showcase for **STRATiS Technologies Inc.** (PT STRATiS Solusi Digital).

---

## 🏛️ Company Profile

- **Legal Entity**: PT STRATiS Solusi Digital
- **Headquarters**: Horizon Tower, Level 18, Batam, Indonesia
- **Focus**: High-Concurrency Backend Architecture (Go Clean Architecture), Distributed Cloud & Multi-Region Service Mesh, Enterprise Data Tier Engineering, and Cognitive Systems.
- **Executive Leadership**:
  - **David Hendrawan** — Chief Executive Officer // Founder
  - **Katherine Laurent** — Principal Cloud Architect
  - **Dr. Fiona Cellestine** — Head of AI & Cognitive Systems

---

## 🚀 Key Systems & Case Studies

1. **AetherMesh** — Distributed Multi-Cloud Service Mesh & Edge API Gateway (Go, eBPF, Zero-Trust mTLS, 54,000+ req/s, sub-1.5ms hop latency).
2. **NexusCore** — Real-Time Transaction Clearing Engine & Ledger Reconciliation (Go Clean Architecture, Event Sourcing, Clustered PostgreSQL, sub-5ms ACID settlement).
3. **STRATiS Cognitive Intelligence Hub** — Enterprise Cognitive AI & Encrypted Neural RAG Pipeline.
4. **Sentinel Cloud Gateway** — High-Throughput API Gateway with WAF & Cyber Telemetry.

---

## 🤖 STRATiS Assistant

The STRATiS Assistant is architected with a strict separation between instant verified company knowledge and live autonomous AI reasoning:

### 1. 5 Curated Quick Chat Buttons (Instant Verified Answers)
- **Profil & Visi STRATiS**: Company vision, mission, and core values.
- **Layanan Rekayasa Go & Cloud**: Go Clean Architecture, microservices, and database clustering.
- **Kapabilitas AI & Sistem Cerdas**: Enterprise RAG, inference telemetry, and security governance.
- **Portfolio Proyek Produksi**: Real-world specs for AetherMesh, NexusCore, Cognitive Hub, and Sentinel Gateway.
- **Konsultasi & Kontak Kemitraan**: Official partnership and executive channels.
*These 5 buttons return instant deterministic answers without external latency.*

### 2. Manual Typed Input (Live NVIDIA NIM AI)
- Any question typed into the chat input is routed to the **NVIDIA NIM AI endpoint** (`/api/chat`).
- No canned or quick responses are used for typed input; the configured AI model answers user questions directly.
- **Configurable Model**: Easily customize the active model via the `NVIDIA_MODEL` environment variable.
- **Zero Client-Side Key Exposure**: API keys are securely stored server-side in `.env` or Netlify Environment Variables.

---

## ⚙️ Environment Configuration

Create a `.env` file in the root directory (see `.env.example`):

```env
# Your NVIDIA NIM API Key (format: nvapi-...)
# Get a free key at: https://build.nvidia.com/
NVIDIA_API_KEY=nvapi-your-key-here

# Configurable NVIDIA NIM Model (change anytime!)
# Examples:
# - meta/llama-3.1-70b-instruct (Default)
# - meta/llama-3.3-70b-instruct
# - meta/llama-3.1-8b-instruct
# - nvidia/nemotron-4-340b-instruct
# - mistralai/mistral-large-2-instruct
# - deepseek-ai/deepseek-r1
NVIDIA_MODEL=meta/llama-3.1-70b-instruct

# Local Port (default: 8080)
PORT=8080
```

---

## 📦 Running Locally

### Recommended: Zero-Dependency Node.js Server (Serves web + `/api/chat` proxy)
```bash
node server.js
```
Open [http://localhost:8080](http://localhost:8080). Both the website and the live AI endpoint (`/api/chat`) will be active.

### Netlify Deployment
When deployed to Netlify:
1. Go to **Site Settings > Environment Variables**.
2. Add `NVIDIA_API_KEY` and `NVIDIA_MODEL`.
3. Netlify automatically hosts the serverless function at `/api/chat` via `netlify.toml`.
