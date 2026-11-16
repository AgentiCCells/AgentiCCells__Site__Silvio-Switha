# Instructions for Silvio's own agents

This site is Silvio Switha's portfolio. Silvio and Dinis Cruz each steer it from their own Claude Code sessions on the repository. Version __VERSION__.

## The rule that matters most

**Silvio approves every change about him before it goes live.** Propose; do not publish on his behalf without his yes.

## Set up (once)

1. A Claude Code session on https://github.com/AgentiCCells/AgentiCCells__Site__Silvio-Switha, branch `dev` (a push to `dev` deploys in about a minute).
2. Name yourself `site@AgentiCCells.silvio` (or a role Silvio chooses, as `role@AgentiCCells.silvio`) and add `Agent: site@AgentiCCells.silvio` to every commit. The deploy checks for it.
3. Read `CLAUDE.md`, `REALITY.md`, `README.md`, and the latest brief in `briefs/`.
4. For photos: `pip install pillow pillow-heif` (once). For video: `ffmpeg`.

A prompt Silvio can paste into a new session:

> You are site@AgentiCCells.silvio, the agent for my website, https://silvio-switha.agenticcells.site. Read https://silvio-switha.agenticcells.site/agents/silvio.md and follow it. Then tell me in three lines what the site has now and what is still a placeholder.

## How the site is built

The home page comes in **five designs** with the same facts; visitors switch with "Choose a design" in the top bar.

| Design | File |
|---|---|
| Premiere (the default, at `/`) | `src/index.html` |
| Universe | `src/d/universe/index.html` |
| The Studio | `src/d/studio/index.html` |
| The Proposal | `src/d/proposal/index.html` |
| On Tour | `src/d/tour/index.html` |

- `src/index.md` is the master copy of the facts (Markdown, for AI agents). Change it first, then each design.
- `src/data/agents.json` (his 17 agents) and `src/data/photos.json` (the photos) are shared data.
- `src/assets/media/`: the film (`know-the-reach-720p.mp4`), its poster and stills, the silent hero loop, the universe screen recording. `src/assets/photos/`: photos. `src/assets/work/`: screenshots of his work. `src/assets/chrome.*` and `src/designs.json`: the top bar and the design picker.
- The other pages (`portfolio/`, `how-he-works/`, `music/`, `hire/`, `photos-and-videos/`, `agents/`) share `src/style.css`.
- Nothing is loaded from other hosts. Videos play from this site; YouTube and Spotify are plain links.

## Common jobs

- **Change a fact:** ask Silvio for the words and the source; change `src/index.md`, then search all five designs (`grep -rn "old words" src/`) and change each.
- **Add a photo:** `python3 scripts/add-photo.py PHOTO --name short-name --alt "what is in it" --credit "who took it" [--crop L,T,R,B]`. It removes all metadata (including location), resizes it and lists it on the photos page. Anyone else in the photo must have agreed, or be cropped out.
- **Add a video:** encode for the web, for example `ffmpeg -i IN.mov -vf scale=1280:-2 -c:v libx264 -crf 27 -preset slow -c:a aac -b:a 112k -movflags +faststart -map_metadata -1 src/assets/media/NAME.mp4`. Keep each file under about 30 MB (GitHub refuses files over 100 MB); for anything longer, link to YouTube. Use `preload="none"` and a poster image.
- **Contact details, the "Hire me" list, the band's name, clients:** only what Silvio gives you, exactly as given; put them in `#contact` of every design, in `src/hire/` and in `src/index.md`.
- **Improve the site with his answers:** interview him with `src/agents/questions.md`, one question at a time.

## Check and publish

`node scripts/build.mjs && node scripts/validate.mjs && node scripts/leak-scan.mjs` must all print OK. Look at the change (`python3 -m http.server 8000 -d _site`) at desktop and phone widths. Commit with the `Agent:` trailer, push to `dev`, and check https://silvio-switha.agenticcells.site/version.json.

## How to work

- Keep every fact tied to a source; mark numbers with their source and the date they were read.
- Name no person other than Silvio Switha and Dinis Cruz unless they have agreed to be named.
- Never send a message, post or email for Silvio: draft it; he sends it.
- Plain British English, no em dashes, no hype words. Follow the repository's CLAUDE.md.
