# IdentityTokens EVM Frontend (P-Mini DIT Prototype)

A **Next.js 13+ App Router–based** frontend for the **Decentralized Identity Tokens (DIT)** system on EVM chains. This prototype focuses on identity creation, viewing, and endorsement flows and is designed to be GSoC‑ready and easy to deploy.

---

## ✨ Features

* 🆔 Create decentralized identities
* 🔗 View identity details via dynamic routes
* 🤝 Endorse identities on-chain (UI-ready)
* 🧩 Modular component architecture
* 🎨 Tailwind CSS styling
* ⚡ App Router (`app/`) with layouts

---

## 🧱 Tech Stack

* **Next.js 13+** (App Router)
* **TypeScript**
* **Tailwind CSS**
* **EVM-compatible wallet support (planned)**
## Project Maturity

TODO: In the checklist below, mark the items that have been completed and delete items that are not applicable to the current project:

- [ ] The project has a logo.
- [ ] The project has a favicon.
- [ ] The protocol:
  - [ ] has been described and formally specified in a paper.
  - [ ] has had its main properties mathematically proven.
  - [ ] has been formally verified.
- [ ] The smart contracts:
  - [ ] were thoroughly reviewed by at least two knights of The Stable Order.
  - [ ] were deployed to:
    - [ ] Ergo
    - [ ] Cardano
    - [ ] EVM Chains:
      - [ ] Ethereum Classic
      - [ ] Ethereum
      - [ ] Polygon
      - [ ] BSC
      - [ ] Base
- [ ] The mobile app:
  - [ ] has an _About_ page containing the Stability Nexus's logo and pointing to the social media accounts of the Stability Nexus.
  - [ ] is available for download as a release in this repo.
  - [ ] is available in the relevant app stores.
- [ ] The web frontend:
  - [ ] has proper title and metadata.
  - [ ] has proper open graph metadata, to ensure that it is shown well when shared in social media (Discord, Telegram, Twitter, LinkedIn).
  - [ ] has a footer, containing the Stability Nexus's logo and pointing to the social media accounts of the Stability Nexus.
  - [ ] is fully static and client-side.
  - [ ] is deployed to Github Pages via a Github Workflow.
  - [ ] is accessible through the https://TODO:PROJECT-NAME.stability.nexus domain.
- [ ] the project is listed in [https://stability.nexus/protocols](https://stability.nexus/protocols).

---

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout (Navbar + global styles)
├── page.tsx            # Home page
├── create/
│   └── page.tsx        # Create Identity page
├── endorse/
│   └── page.tsx        # Endorse Identity page
├── identity/
│   └── [id]/
│       └── page.tsx    # Dynamic Identity detail page

components/
├── Navbar.tsx
├── IdentityCard.tsx
└── EndorseButton.tsx

lib/
└── store.ts            # Global state / utilities

styles/
└── globals.css         # Tailwind global styles

public/
└── stability.svg

# Config
package.json
tailwind.config.js
postcss.config.js
tsconfig.json
```

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Run development server

```bash
npm run dev
```

App will be available at:

```
http://localhost:3000
```

---

## 🎨 Styling

* Tailwind CSS is configured
* Global styles are imported in `app/layout.tsx`

```ts
import "@/styles/globals.css";
```

---

## 🔧 Path Aliases

This project uses `@/` aliasing.

**tsconfig.json**:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## 🌐 Deployment

This frontend is **Vercel-ready**.

```bash
npm run build
```

Then deploy via Vercel Dashboard or CLI.

---

## 🧪 Status

* UI flows complete
* Wallet + smart contract integration: **in progress**
* Optimized for GSoC / open‑source contributions

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Open a Pull Request

Please follow `DCO.md` and `Contributors.md`.

---

## 📜 License

Apache 2.0

---

## 🙌 Maintainer

**Anshul Chikhale**

Building decentralized identity infrastructure 🚀
