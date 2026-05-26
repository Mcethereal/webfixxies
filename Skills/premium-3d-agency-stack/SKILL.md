---
name: premium-3d-agency-stack
description: >-
  Generates ultra-premium, high-end 3D animated web frontends optimized
  for a bootstrap startup budget (zero capital). Leverages free Spline
  community assets, Vercel free hosting, and Vite/React + Tailwind stacks.
  Includes non-technical deployment guidelines, brand extraction mechanics,
  and strategic pitch advisory frameworks for teen agency founders.
scope: workspace
triggers:
  - "create premium 3d site"
  - "scaffold 3D landing with spline"
  - "premium-3d-agency-stack"
author: two-person teen dev team
version: 1.1
---

Overview
--------
This skill automates the high-level workflow, advisory coaching, and guardrails for 
creating cinematic, production-ready 3D frontends using only free assets and hosting 
tiers. It acts as both a technical code-scaffolder and a business consultant for 
founders executing high-impact agency pitches with zero starting capital.

Principles
----------
- Absolute Bangers Only: prioritize bold layouts, whitespace, and premium motion.
- Low Overhead Assets: load Spline scenes by public URL; do not require local 3D hosting.
- Media Interactivity: cinematic popups and coordinate-bound modals must be fluid and GPU-friendly.
- Completeness: produced code must be deployable to Vercel without placeholder comments or incomplete stubs.
- Founder-Friendly: output instructions assuming the user has low-to-no baseline terminal/coding experience.

0. Brand Extraction & Design Inspiration (Pre-Code)
---------------------------------------------------
Before writing code, the agent must guide the founders to capture the client's visual identity:
- **Inspiration Parsing:** Ask the founders to describe or link an Instagram/TikTok web trend they want to mimic. Translate high-end trends into design terms (e.g., "Apple-style smooth parallax", "Cyberpunk glassmorphism", "Neo-brutalism").
- **Asset Sourcing:** Direct founders to `spline.design/community` or `sketchfab.com` (free filtered) to find assets matching the client's theme.
- **Color & Typography Lock:** Automatically generate a premium, cohesive design system inside `tailwind.config.js` using dark/light high-contrast configurations that make basic text look high-end.

1. Discovery & Constraints
--------------------------
- Ask: target pages, primary CTA, hero behavior, and 3D focal point.
- Decide React (Vite) vs `Next.js` based on routing/SSR needs.

2. Scaffolding & Zero-Tech Tooling Setup
-----------------------------------------
To ensure flawless execution for founders with zero technical experience, the agent must guide them to install and use these exact tools. Provide explicit commands assuming a Windows environment:
- **VS Code:** The central command center for editing text and launching the site.
- **Git:** Essential for backing up code to the cloud. (Command to verify installation: `git --version`)
- **Node.js (LTS Version):** The underlying engine that runs the development workspace. (Command to verify: `node -v` and `npm -v`)
- **The Workflow:** 1. Create an empty folder on the desktop named after the client.
  2. Drag that folder into VS Code.
  3. Open the built-in terminal (`Ctrl + Shift + ~`).
  4. Paste the exact generation commands provided by this agent.

3. Asset Selection
------------------
- Search Spline community for low-poly scenes that visually match the pitch; prefer public CDN URLs so assets are not stored locally.
- Validate scene complexity (polycount, texture sizes) to avoid frame drops.

4. Component Pattern
--------------------
- Provide an isolated `SplineScene` React component that mounts a `<spline-viewer>` inside a responsive container with deferred loading.
- Create `Hero3D`, `ShowcaseModal`, and `AnimatedLayout` components that compose Spline + Framer Motion transitions.

5. Interaction & Performance
----------------------------
- Lazy-load the Spline viewer and only mount it after the hero enters viewport.
- Attach modal triggers to click coordinates; animate transforms and use CSS `will-change` and GPU-friendly properties.
- Provide simple FPS/size checks and a fallback static image for low-end devices.

6. Accessibility & Responsiveness
---------------------------------
- Ensure keyboard-accessible modals, ARIA labels, and reduced-motion preferences respected via `prefers-reduced-motion`.

7. Build, Non-Technical Testing & Deployment Knowledge
------------------------------------------------------
Provide an absolute, foolproof deployment pipeline that costs $0 and takes less than 3 minutes:
- **The Local Check:** Instruct founders to run `npm run build` in their terminal. If it fails, the agent must fix the exact error output immediately.
- **GitHub Bridge:** Guide the user to create a free GitHub account, click "New Repository", and provide the exact 3 lines of terminal code needed to push their project online.
- **Vercel Free-Tier Deployment:** 1. Go to `vercel.com` and sign up using the GitHub account.
  2. Click "Add New" -> "Project".
  3. Select the repository from the list.
  4. Click **Deploy**.
- The site is now live on a public `.vercel.app` URL for free, completely ready to show the client.

8. Pitching Strategy & Advisory Framework
------------------------------------------
When asked to prepare a pitch, the agent must generate a customized sales script and business strategy tailored to the client. The advice must follow these core guardrails:
- **The "Bait" Strategy:** Never pitch with just words. Build a rough 1-page stunning mockup using a public Spline asset first, host it on Vercel, and send them the live link.
- **Value Over Tech:** Do not talk about "React, Framer Motion, or Spline" to a local business owner. They do not care. Talk about *attention, prestige, conversion, and looking better than their biggest competitor*.
- **Handling Payments (Underage Guardrail):** Advise the founders on how to safely route money through local apps (bKash/Nagad/Sadapay/Nayapay) for local clients, or use an adult's profile/documentation on freelance escrow platforms for international clients.

Decision Points & Branching
---------------------------
- Framework: choose `Vite+React` for fastest dev loop; choose `Next.js` if server-side rendering or advanced routing is required.
- Animation library: prefer `Framer Motion` for React-first ease; choose `GSAP` when timeline-driven, plugin-rich sequences are required.
- 3D complexity: if Spline scene FPS < 45 on mid-tier laptop, switch to a simplified scene or use static poster with animated UI overlay.

Quality Criteria / Completion Checks
-----------------------------------
- No placeholder comments; all code paths implemented and documented.
- Lighthouse: Performance >= 65 on desktop for portfolio landing pages.
- Accessibility: keyboard nav + ARIA on interactive elements.
- Mobile: hero scales and maintains at least 30 FPS on modern phones; fallback present for older devices.
- Deployable: `npm run build` succeeds and app can be deployed to Vercel with free-tier settings.
- Always Serve the Live Dashboard: whenever a development task, scaffold update, or project script loop is executed, the agent must explicitly output a designated "Local Host Access Panel" message at the absolute bottom of the response text containing the explicit local development URL for the current project.

Templates & Output
------------------
The skill should output a ready-to-deploy scaffold or a patch/PR for an existing repo containing:
- `package.json` with `vite`, `react`, `tailwindcss`, `framer-motion` (or `gsap`), and a tiny `spline-viewer` wrapper.
- `src/components/SplineScene.tsx` — isolated Spline mount with lazy load.
- `src/components/Hero3D.tsx` — hero layout combining 3D + headline + CTA.
- `src/components/ShowcaseModal.tsx` — cinematic modal for video or canvas showcases bound to click coordinates.
- `src/main.tsx` / `pages/index.tsx` — example page showcasing integration.
- Tailwind + PostCSS config and `vercel.json` (for Next.js apps).

Agent Prompts / Example Commands
--------------------------------
- "Scaffold a Vite+React landing page with a Spline hero and Framer Motion entrance animations optimized for mobile." 
- "Convert this existing Vite app to use a Spline CDN scene and add a cinematic showcase modal that triggers from the hero CTA." 
- "Generate `Hero3D` + `ShowcaseModal` components and a `SplineScene` wrapper that lazy-loads the viewer and passes events up to parent." 
- "Prepare a client pitch script and a zero-tech deployment checklist for a local premium clothing brand."

Clarifying Questions
--------------------
- Do you prefer `Vite+React` or `Next.js` for this project?
- Which Spline scene(s) (share public URLs) do you want to use as hero assets? If unknown, do you want the agent to suggest free scenes?
- Target primary CTA (book, contact, demo) and whether a modal should auto-play an embedded showcase video.

Iteration Guidance
------------------
1. Start by scaffolding a minimal app and verify `npm run dev`.
2. Integrate a chosen Spline scene in `SplineScene` and test FPS.
3. Add Framer Motion entrance and modal interactions; test keyboard accessibility and reduced-motion.
4. Run `npm run build` and verify preview mode; deploy to Vercel free tier and confirm public URL.

Security & Licensing Notes
-------------------------
- Always verify Spline community asset licenses before commercial use.
- Do not embed private API keys or paid assets in the repository.

Examples & Snippets
-------------------
The skill must never output incomplete or placeholder code. Where code is generated, it should be complete and ready-to-run. Example scaffold requests should return a ZIP or a patch that includes full files and working `npm` scripts.

Related Customizations (next steps)
----------------------------------
- `premium-3d-agency-stack:advanced-deploy` — adds automated Vercel environment setup and preview URL checks.
- `premium-3d-agency-stack:asset-curator` — searches Spline community and suggests ranked scenes by visual match and performance.

What this skill produces
------------------------
When invoked it produces a deployable code scaffold (or patch) that:
- Integrates a public Spline scene via CDN URL.
- Implements `Hero3D`, `SplineScene`, and `ShowcaseModal` components.
- Adds Tailwind and animation wiring (Framer Motion/GSAP).
- Includes `npm` scripts and deployment hints for Vercel.

Try these prompts
-----------------
- "Use premium-3d-agency-stack to scaffold a Vite+React landing page with a Spline hero and Framer Motion animations. Optimize for mobile."
- "Add a cinematic showcase modal that opens at click coordinates and autoplays an embedded MP4 in a loop." 
- "Give me a step-by-step pitch script for a high-end local gym client, including a guide on how to deploy their mockup to Vercel right now."

End of skill.
