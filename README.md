# Portfolio site — structure & how to edit

## Files
- `index.html` — homepage
- `about.html` — bio, skills, certifications
- `case-studies.html` — index/grid of all case studies
- `case-study-1.html` — detail template for one case study (duplicate this file as `case-study-2.html`, `case-study-3.html` etc. for more)
- `styles.css` — all styling, colors and fonts live here
- `script.js` — mobile menu toggle + contact form behaviour
- `assets/` — put images (mockups, wireframes) and your CV PDF here

## What to replace
Search each HTML file for text in `[square brackets]` — every one marks something to
personalise: your name, bio, certification dates, case study content, email, LinkedIn URL.

## Adding a new case study
1. Copy `case-study-1.html` → `case-study-2.html`
2. Fill in the bracketed placeholders
3. Add a `story-card` link to it in both `index.html` (preview section) and `case-studies.html`

## Adding real mockup images
Drop image files into `assets/`, then in the case study file replace:
```html
<div class="mockup-placeholder">Replace with wireframe / mockup image...</div>
```
with:
```html
<img src="assets/your-image.png" alt="Description of the mockup" style="width:100%; border-radius:4px; border:1px solid var(--line);">
```

## Adding your CV
Save your CV as a PDF into `assets/` (e.g. `assets/cv.pdf`) and update the two links
that currently point to `assets/cv-placeholder.pdf` (in `index.html` and `contact.html`).

## Colors & fonts
All defined as CSS variables at the top of `styles.css` under `:root` — change once,
applies everywhere.

## Hosting
This is a fully static site (no build step). Easiest free options:
- **GitHub Pages** — push this folder to a repo, enable Pages in settings
- **Netlify** — drag-and-drop the folder onto netlify.com's deploy page
