# SBYuva Website

The official website for **SB Yuva** — the youth wing of
Samskrit Bharati USA. This is a static multi-page website
built with plain HTML, Tailwind CSS (CDN), and vanilla JavaScript.

---

## Project Purpose
SB Yuva connects young Sanskrit enthusiasts across the USA
through two community tracks:
- **CSN** — Campus Samskritam Network (college students)
- **SNYP** — Samskritam Network for Young Professionals (ages 22–35)

The site serves as a digital hub for learning pathways, events,
regional chapters, a blog (Yuva Vani), and community onboarding.

---

## Live Site
- **GitHub Pages URL:** https://[YOUR-USERNAME].github.io/SBYuva-Website
- **Hosted via:** GitHub Pages, deployed from `main` branch root folder
- **Domain:** [Add your Google Sites or custom domain here]

---

## Reference Repo
https://github.com/appadamofmyeye/SBYuvaTestPage
- Used for content direction and text only
- Do NOT commit to or copy design from this repo

---

## Site Architecture

| File | Page | Status |
|---|---|---|
| index.html | Homepage — Hero, Pathway Selector, Gallery | Built |
| communities.html | CSN Chapters + SNYP Sessions | Built |
| learn.html | 3-Level Samskritam Program Overview | Built |
| events.html | Camp Dhimahi — About + Join CTA | Built |
| yuva-vani.html | Blog / Article Index | Built |
| article-template.html | Individual Article Page Template | Built |
| chapter-template.html | Individual Chapter Page Template | Built |
| contact.html | Unified Contact Form | Built |
| assets/ | All images, icons, media | Folder |
| components.js | Shared navbar + footer injected on all pages | Built |

---

## Tech Stack
- **HTML5** — one .html file per page
- **Tailwind CSS** — loaded via CDN, no build step
- **Vanilla JavaScript** — no frameworks, no npm
- **components.js** — injects shared navbar and footer into
  every page; edit navigation here, not in individual HTML files

---

## Automation Workflow (How This Project Is Built)

This project uses a fully automated AI coding workflow:

### Tools Used
| Tool | Role |
|---|---|
| Google Jules (jules.google.com) | AI coding agent — writes all code |
| GitHub | Stores code, manages Pull Requests |
| GitHub Pages | Auto-deploys site on every merge to main |
| Google Sites (embed) | Hosts paid domain; embeds GitHub Pages URL |

### How to Make Changes
1. Go to jules.google.com → New Task → select SBYuva-Website
2. Write your task using the prompt templates in AGENTS.md
3. Jules reads AGENTS.md, writes the code, opens a Pull Request
4. Review the PR on GitHub — check files changed
5. Merge the PR → GitHub Pages redeploys in 2–5 minutes
6. Hard refresh browser (Ctrl+Shift+R) to see changes

### Rules for Every Jules Task
- Always reference AGENTS.md at the start of every prompt
- One feature or page per task — do not bundle unrelated changes
- Use [PLACEHOLDER] for any content not yet confirmed
- Never ask Jules to modify components.js unless changing nav structure
- Always check the GitHub Actions tab after merge to confirm
  deployment succeeded

---

## Prompt Templates for Jules

Refer to AGENTS.md for the full prompt templates covering:
- Content updates (replacing placeholder text)
- New feature or functionality builds
- Bug fixes and visual corrections

---

## Common Issues & Fixes

| Problem | Fix |
|---|---|
| Site not updating after merge | Check Actions tab → re-run failed job |
| Blank white page | Open browser DevTools → Console tab → read error |
| CSS not loading | Check relative path in <link href> tag |
| Navbar not showing on a page | Check components.js is linked via <script src> |
| 404 on a page URL | Check .html filename matches the href link exactly |

---

## Brand & Design
Full color schema, typography, and design rules are in AGENTS.md.
Primary brand color: SB Saffron #F47B20
Font: Poppins via Google Fonts CDN

---

## Contribution Guidelines
- All code changes must go through a Jules task + Pull Request
- Do not commit directly to main
- Do not install npm packages or introduce a build step
- Do not modify the reference repo (SBYuvaTestPage)
