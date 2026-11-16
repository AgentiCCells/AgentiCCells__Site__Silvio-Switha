# Instructions for a site editor

How to change the Silvio Switha site. Version __VERSION__.

## Where things are

- `src/`: the site. Static HTML, one shared `src/style.css`, no JavaScript yet.
- Pages: `src/index.html` (home), `src/portfolio/`, `src/how-he-works/`, `src/music/`, `src/hire/`, `src/photos-and-videos/`, `src/agents/`.
- For agents: `src/llms.txt`, `src/index.md` (the home page as Markdown), `src/agents/*.md`.
- When you change the home page, change `src/index.md` to match, and update `src/llms.txt` when you add or rename a page.

## Rules for every page

- `<html lang="en-GB">`, a `<title>`, and a `<meta name="description">`.
- Keep the word "Version" followed by the version placeholder (two underscores, VERSION, two underscores) in the footer; the build replaces the placeholder.
- Keep the footer line: "Made with the AgentiCCells site factory; a first version, materials to follow." (update the wording only when Silvio and Dinis agree the site is no longer a first version).
- No scripts, styles, fonts, images or trackers from other hosts. Plain links to YouTube and Spotify; no embeds.
- Every internal link must resolve to a file under `src/`.
- Plain British English, no em dashes, no hype words.
- Invent nothing. Every fact has a public source, and every number is marked with its source. Proposals are marked as proposals.
- Name only Silvio Switha and Dinis Cruz; everyone else is "the team". Companies only as RiskMandate, PrompTugal.news, Web Summit, AgentiCCells and SGit, until Silvio names others.
- Readable on a phone; the home page prints as a one-page presentation.

## Releasing

Silvio approves every change about him before it goes live. Then: `node scripts/build.mjs`, `node scripts/validate.mjs` (must print OK), and `scripts/release.sh`. Never skip or weaken a check.
