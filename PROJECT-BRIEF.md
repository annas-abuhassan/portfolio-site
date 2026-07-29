# Project handoff: BA Portfolio Website

## Context
Building a portfolio website for a career-changer moving into Business Analysis.
She's currently completing her PSPO (Professional Scrum Product Owner) certification
and about to start a dedicated Business Analyst course. This site goes on her CV to
upsell her to prospective employers for junior BA / BA associate roles.

The core value of the site: recruiters can read structured case studies that show
her BA thinking process, not just claims about it — problem statement, stakeholders,
user stories, mockups, outcome. Consistency across case studies matters more than
volume (2-3 deep ones beat 6 shallow ones).

Important framing note: the example case studies are self-directed/independent
projects, not paid client work. The site should be honest about that (case studies
are labelled "Independent case study") rather than implying consulting engagements
that didn't happen.

## Current state
A static HTML/CSS/JS site already exists (attached/provided alongside this brief).
Structure:
- `index.html` — homepage: hero with a "story-quote" (As a / I want / so that) signature
  element, certifications section, case study preview grid, contact CTA
- `about.html` — bio, skills list, certifications, background
- `case-studies.html` — index/grid of all case studies
- `case-study-1.html` — the reusable case study template: problem statement →
  stakeholders/personas → user stories → mockups/wireframes (placeholder boxes) → outcome
- `contact.html` — contact form (mailto-based, no backend) + email/LinkedIn/CV links
- `styles.css` / `script.js` — shared, but currently **inlined into every HTML page**
  (see "known issue" below for why)
- `README.md` — instructions for the non-technical user on what to edit
- All personalizable content is marked with `[bracketed placeholders]`

## Design system (already decided — keep consistent)
Direction: grounded in her actual BA/Agile vernacular — kanban boards, tickets, user
stories — rather than a generic "warm cream + serif" or "dark + neon" template look.

**Colors:**
- `--bg: #F7F8F6` (paper, near-white neutral)
- `--ink: #14181C` (near-black text)
- `--ink-soft: #4A5157` (secondary text)
- `--line: #D8DCE0` (hairline borders/dividers)
- `--tag-bg: #EDEFF2` (chip/tag background)
- `--blue: #2B5FA8` / `--blue-soft: #E7EEF7` ("in progress" status accent)
- `--green: #3C8B6C` / `--green-soft: #E7F2ED` ("done" status accent)

**Type:**
- Display/headings: Space Grotesk (700)
- Body: Inter (400/500/600)
- Mono/utility (tags, ticket IDs, labels): IBM Plex Mono

**Signature component:** `.story-card` — case studies are presented as literal
tickets (mono ID like "CS-01", status-color left border, tag chips). `.story-quote`
renders literal "As a [user] / I want [goal] / so that [benefit]" text in mono,
used decoratively in the hero and functionally in the case study's user-stories
section. This motif should stay consistent site-wide — it's the whole design thesis.

**Other established patterns:**
- `.lane-strip` — a 4px three-color strip (blue/green/ink) at the top of every page,
  a quiet kanban-lane nod
- Buttons lift on hover with a soft shadow (`.btn`, `.btn--ghost`)
- Hero content has a subtle rise-in entrance animation, respects `prefers-reduced-motion`
- Mobile nav collapses into a toggle menu under 720px

## Known issue to fix / be aware of
CSS and JS were originally separate files (`styles.css`, `script.js`) linked via
`<link>`/`<script src>`. That's the right structure for a real static site (edit once,
applies everywhere), but it meant the in-chat preview tool couldn't render the pages
(sandboxed preview can't fetch sibling files from disk). As a workaround, CSS/JS were
inlined into every HTML page so preview would work.

**For Claude Code:** please refactor back to shared external `styles.css` and
`script.js` files linked from each page (this is the correct long-term structure —
no more preview sandbox constraint once we're not previewing single files in chat).
Keep the design tokens and components exactly as specified above during the refactor.

## Next steps / open work
1. Refactor CSS/JS back to shared external files (see above)
2. Fill in real content for at least one full case study end-to-end (currently all
   placeholder text in brackets) — will need her actual input for this
3. Add real mockup/wireframe images to replace `.mockup-placeholder` boxes
4. Add her real CV as a PDF in `assets/`, update the two links currently pointing
   to `assets/cv-placeholder.pdf`
5. Cross-browser/device check, accessibility pass (keyboard focus states are in
   place via `:focus-visible`, but worth a full audit)
6. Deployment: static site, no build step — GitHub Pages or Netlify both work
   (drag-and-drop for Netlify, repo + Pages toggle for GitHub)

## Tech constraints
- Plain HTML/CSS/JS, no framework, no build step — keep it this way per original request
- No backend — contact form uses `mailto:` link generation, not a server
