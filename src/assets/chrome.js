// The top bar and the design picker: the same site in five designs. The choice is kept in this browser only. Code Apache-2.0.
(() => {
  const me = document.currentScript, slug = me.dataset.slug || 'premiere';
  const KEY = 'ss-design';
  const store = { get() { try { return localStorage.getItem(KEY); } catch { return null; } }, set(v) { try { localStorage.setItem(KEY, v); } catch {} } };
  const q = new URLSearchParams(location.search).get('design');
  if (q) store.set(q);
  // The home page remembers a chosen design and opens it, unless ?design= says otherwise.
  if (slug === 'premiere' && !q) { const saved = store.get(); if (saved && saved !== 'premiere') fetch('/designs.json').then(r => r.json()).then(m => { const d = m.designs.find(x => x.slug === saved); if (d) location.replace(d.path); }).catch(() => {}); }
  if (slug !== 'page' && !q) store.set(slug);
  const bar = document.createElement('div');
  bar.className = 'ss-bar';
  bar.innerHTML = '<span>Silvio Switha, AI entrepreneur, musician and producer</span><span class="ss-bar-sep" aria-hidden="true">|</span><button type="button" class="ss-bar-pick" data-ss-picker>Choose a design</button><a href="/#film">Watch the film</a><a href="/photos-and-videos/">Photos</a><a href="/agents/">Use with AI</a><a href="/hire/">Hire Silvio</a>';
  document.body.prepend(bar);
  let box;
  async function open() {
    if (!box) {
      const m = await (await fetch('/designs.json')).json();
      box = document.createElement('div'); box.className = 'ss-pick'; box.hidden = true;
      box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.setAttribute('aria-label', 'Choose a design');
      const card = d => `<a class="ss-pick-card" href="${d.path}?design=${d.slug}" data-slug="${d.slug}"${d.slug === slug ? ' aria-current="true"' : ''}><div class="ss-pick-thumb" style="background-image:url('${d.thumb}')"></div><strong>${d.name}</strong><span>${d.tagline}</span></a>`;
      box.innerHTML = `<div class="ss-pick-box"><button type="button" class="ss-pick-close" aria-label="Close">×</button><h2>Choose a design</h2><p>The same site, the same facts and sources, in five designs. Your choice is kept in this browser only.</p><div class="ss-pick-grid">${m.designs.map(card).join('')}</div></div>`;
      document.body.appendChild(box);
      box.addEventListener('click', e => { if (e.target === box || e.target.closest('.ss-pick-close')) close(); });
      box.querySelectorAll('.ss-pick-card').forEach(a => a.addEventListener('click', () => store.set(a.dataset.slug)));
    }
    box.hidden = false; document.body.style.overflow = 'hidden'; box.querySelector('.ss-pick-close').focus();
  }
  function close() { box.hidden = true; document.body.style.overflow = ''; document.querySelector('[data-ss-picker]')?.focus(); }
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && box && !box.hidden) close(); });
  document.querySelectorAll('[data-ss-picker]').forEach(b => b.addEventListener('click', open));
})();
