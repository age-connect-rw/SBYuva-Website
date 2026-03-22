# SBYuva Website — Jules Instructions

## About This Project
- **Organization:** SB Yuva — the youth wing of Samskrit Bharati USA, dedicated to
  spreading Sanskrit among young Indians and the broader youth community
- **Purpose:** A bilingual (Sanskrit + English) community platform and digital hub for
  young Sanskrit enthusiasts, connecting students and young professionals through
  structured learning pathways, events, and regional chapters
- **Target Audience:** Youth aged 15–35, segmented into two tracks:
  - **CSN (Campus Samskritam Network):** College students and campus communities
  - **SNYP (Samskritam Network for Young Professionals):** Working professionals aged 22–35
- **Tone & Brand:** Energetic, culturally grounded, modern — Sanskrit made native
  to digital youth culture
- **Reference Repo:** https://github.com/appadamofmyeye/SBYuvaTestPage
  *(Use for existing text, section names, and content direction only —
  do not copy design or code; do not commit to that repo)*

---

## Site Architecture (Pages)

| File | Page | Notes |
|---|---|---|
| index.html | Homepage | Hero, Pathway Selector, Gallery/Dhimahi Banner |
| communities.html | Communities | CSN chapters + SNYP sessions |
| chapter-template.html | Individual Chapter | Reusable template per chapter |
| learn.html | Learn Samskritam | 3-level program overview |
| yuva-vani.html | Blog Index | Article listing cards |
| article-template.html | Article Page | Reusable template per article |
| events.html | Events / Camp Dhimahi | About + Join Us CTA |
| contact.html | Contact Us | Unified contact form |

---

## Navigation Structure

**Sticky top navbar with dropdowns:**

- Home
- Communities *(dropdown)*
  - CSN — Campus Samskritam Network
  - SNYP — Young Professionals
- Learn Samskritam
- Yuva Vani *(Blog)*
- Events *(dropdown)*
  - Camp Dhimahi
- Contact Us

---

## Page-by-Page Requirements

### index.html (Homepage)
- Hero: Headline introducing SB Yuva, mission subheading,
  dual CTA buttons — "Join CSN" and "Join SNYP"
- Pathway Selector: Interactive split-screen card — CSN vs SNYP,
  each routes to communities.html with correct anchor
- Scroll section: Camp Dhimahi banner (if active campaign date exists)
  OR image gallery — toggle logic via a JS flag variable at top of script

### communities.html
- CSN section: Grid of chapter cards (one button per chapter),
  each routes to chapter-template.html with a query param for chapter name
- Final card: "Don't see your chapter?" → routes to contact.html
- SNYP section: Upcoming session event cards (date, topic, speaker),
  LinkedIn and Instagram quick-link buttons

### learn.html
- 3 program cards: Beginner, Intermediate, Advanced (confirm names from reference repo)
- Each card: brief description + outbound link to samskritabharatiusa.org
  for DLP / S2S / equivalent programs

### yuva-vani.html
- Article index: cards with title, author, excerpt, date
- Each card links to article-template.html with article ID as query param

### events.html
- Camp Dhimahi section: About description, theme, location, duration
- "Join Us" CTA button → routes to contact.html

### contact.html
- Unified form fields: Name, Email, City/Campus,
  Area of Interest (dropdown: CSN / SNYP / Events / Other), Message
- Used by all CTAs across the site

---

## Design & Color Schema

> ⚠️ Colors derived from samskritabharatiusa.org visible design.
> Jules: verify hex values via browser DevTools before finalizing.

### Primary Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary | SB Saffron | #F47B20 | Header bg, CTA buttons, nav active state |
| Primary Dark | Deep Saffron | #C85E10 | Button hover, footer bg, borders |
| Primary Light | Warm Amber | #FCEBD6 | Section bg, card hover fills |
| Secondary | Sanskrit Maroon | #8B1A1A | Secondary buttons, pull quote borders |
| Accent | Temple Gold | #D4A017 | Decorative highlights, icons, badges |

### Neutral Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Background | Parchment White | #FAFAF7 | Page background |
| Surface | Warm Off-White | #F5F0E8 | Alternating section bg, input fields |
| Border | Soft Tan | #E0D5C5 | Card borders, dividers |
| Text Primary | Charcoal Black | #1A1A1A | Body text, headings |
| Text Secondary | Warm Gray | #5A5A5A | Subheadings, captions, meta |
| Text Muted | Light Gray | #9A9A9A | Disabled states, helper text |

### Functional Colors

| Role | Hex | Usage |
|---|---|---|
| Success | #2E7D32 | Form success messages |
| Warning | #F9A825 | Alert banners |
| Error | #C62828 | Form validation errors |
| Link Default | #C85E10 | Inline text links |
| Link Hover | #8B1A1A | Hovered links |

---

## Tech Stack Rules
- Multi-page HTML structure — one .html file per page
- Tailwind CSS via CDN only (no npm, no build step, no node_modules)
- Vanilla JavaScript only — no frameworks
- Shared navbar and footer injected via a shared components.js file
- All file paths must be relative
- /assets folder for all images, icons, and media

## Hosting
- Deployed via GitHub Pages from main branch, root folder
- Must work at yourusername.github.io/SBYuva-Website
- No hardcoded absolute URLs

## Jules Working Rules
- Delete all existing code before starting fresh on first task
- One or two non-conflicting sections per Pull Request maximum
- Always confirm mobile responsiveness before submitting PR
- Use placeholder text [PLACEHOLDER] where real content is missing
