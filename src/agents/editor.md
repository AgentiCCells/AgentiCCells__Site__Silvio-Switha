# Instructions for a site editor

How to change the Silvio Switha site. Version __VERSION__.

## Where things are

- `src/`: the site. The home page comes in five designs (`src/index.html` and `src/d/*/index.html`), each self-contained with its own styles and a little JavaScript; the other pages share `src/style.css`. The full map is in `src/agents/silvio.md`.
- Pages: `src/portfolio/`, `src/how-he-works/`, `src/music/`, `src/hire/`, `src/photos-and-videos/`, `src/agents/`.
- Media: `src/assets/media/` (the film and other videos, played from this site), `src/assets/photos/` (add with `scripts/add-photo.py`), `src/assets/work/` (screenshots).
- For agents: `src/llms.txt`, `src/index.md` (the home page as Markdown), `src/agents/*.md`.
- `src/index.md` is the master copy of the facts: change it first, then every design, and update `src/llms.txt` when you add or rename a page.

## Rules for every page

- `<html lang="en-GB">`, a `<title>`, and a `<meta name="description">`.
- Link preview tags after the description: canonical, og:type, og:site_name, og:locale, og:url, og:title, og:description (110 to 150 characters), og:image (the absolute https URL of `assets/share/silvio-switha-1200x630.jpg`, 1200x630, at most 300 KB), og:image:type, og:image:width, og:image:height, og:image:alt and the twitter:card summary_large_image tags. Copy them from any page and change the URL, title and description. The validator fails a page without them.
- Keep the word "Version" followed by the version placeholder (two underscores, VERSION, two underscores) in the footer; the build replaces the placeholder.
- Keep the footer line: "Made with the AgentiCCells site factory; a first version, materials to follow." (update the wording only when Silvio and Dinis agree the site is no longer a first version).
- No scripts, styles, fonts, images or trackers from other hosts. Plain links to YouTube and Spotify; no embeds. Videos are served from this site.
- Every internal link must resolve to a file under `src/`.
- Plain British English, no em dashes, no hype words.
- Invent nothing. Every fact has a public source, and every number is marked with its source. Proposals are marked as proposals.
- Name only Silvio Switha and Dinis Cruz; everyone else is "the team". Companies only as RiskMandate, PrompTugal.news, Web Summit, AgentiCCells and SGit, until Silvio names others.
- Readable on a phone; the home page prints as a one-page presentation.

## Releasing

Silvio approves every change about him before it goes live. Then: `node scripts/build.mjs`, `node scripts/validate.mjs` (must print OK), and `scripts/release.sh`. Never skip or weaken a check.
