/* Museum engine: hangs one long wall, left to right, newest first.
   1. window.COLLECTION — the hand-picked pieces (crop and focus set in collection.js; size and placement are automatic)
   2. window.TUMBLR     — every Tumblr post, hung automatically in the same salon style.
      A post with several photos shows its first one; clicking opens all of them. */
window.Museum = function (opts) {
  const o = Object.assign({
    centre: 0.46,   // eye level: where the middle of each column sits, share of screen height
    gap: 0.065,     // space between columns, share of screen height
    stackGap: 0.04, // space between stacked pieces
    lead: 0.30,     // space before the first piece (where the name sits)
    tail: 0.30,     // space after the last piece
    top: 0.09,      // keep art below the navigation…
    bottom: 0.93,   // …and above the floor
  }, opts);

  const room = document.getElementById('room');
  const track = document.getElementById('track');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PLAY = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1L12 7L3 13Z" fill="currentColor"/></svg>';
  const PAUSE = '<svg viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="1" width="3.5" height="12" fill="currentColor"/><rect x="8.5" y="1" width="3.5" height="12" fill="currentColor"/></svg>';
  const H = () => room.clientHeight;
  const label = p => [p.place, p.note, (p.tags || []).slice(0, 3).join(', ')].filter(Boolean).join('. ') || 'Artwork';

  /* ── 1. Hand-hung pieces ── */
  const pieces = window.COLLECTION.map(p => ({
    ...p,
    slides: p.more ? [{ image: p.image, ratio: p.ratio }, ...p.more] : [{ image: p.image, video: p.video, poster: p.poster, ratio: p.ratio }],
  }));

  /* ── 2. Tumblr posts, hung automatically ──
     Same "random" every visit (seeded), so the wall always looks the same. */
  let seed = 20260430;
  const rnd = () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const between = (a, b) => a + (b - a) * rnd();
  const shapeOf = r => r < 0.9 ? 'portrait' : r <= 1.15 ? 'square' : 'landscape';
  const cropFor = r => shapeOf(r) === 'portrait' ? 0.8 : shapeOf(r) === 'square' ? 1 : Math.min(r, [1.25, 1.4, 1.5][Math.floor(rnd() * 3)]);

  (window.TUMBLR || []).forEach(t => {
    const r = t.r[0];
    pieces.push({
      place: t.place, note: t.note, tags: t.tags,
      image: `assets/archive/thumb/${t.f[0]}.jpg`, full: `assets/archive/full/${t.f[0]}.jpg`,
      ratio: r, crop: cropFor(r),
      slides: t.f.map((f, k) => ({ image: `assets/archive/full/${f}.jpg`, ratio: t.r[k] })),
    });
  });

  /* ── Salon packing: every piece gets a size from its shape, then pieces fill columns
     top to bottom (newest first) until the column is full, so 2–3 pieces share each column. ── */
  const band = o.bottom - o.top;
  pieces.forEach(p => {
    const c = p.crop || p.ratio || 0.8, shape = shapeOf(c);
    p.height = shape === 'portrait' ? between(0.30, 0.35) : shape === 'square' ? between(0.24, 0.28) : c >= 1.6 ? between(0.18, 0.21) : between(0.20, 0.24);
    p.shift = between(-0.025, 0.025);
  });
  // Column rhythm like 2 1 1 2 1 2 1 3 2: ones and twos mixed, never long runs of the same,
  // and three only when the next three pieces are all landscapes.
  const columns = [];
  const isLand = p => shapeOf(p.crop || p.ratio || 0.8) === 'landscape';
  const fits = list => list.reduce((a, p) => a + p.height, 0) + o.stackGap * (list.length - 1) <= band;
  let i = 0, last = [];
  while (i < pieces.length) {
    const run2 = last.slice(-2).every(n => n === 2) && last.length >= 2;
    const run1 = last.slice(-2).every(n => n === 1) && last.length >= 2;
    let n = rnd() < 0.45 ? 1 : 2;
    if (run2) n = 1; else if (run1) n = 2;
    const three = pieces.slice(i, i + 3);
    if (three.length === 3 && three.every(isLand) && fits(three) && rnd() < 0.5 && last[last.length - 1] !== 3) n = 3;
    n = Math.min(n, pieces.length - i);
    while (n > 1 && !fits(pieces.slice(i, i + n))) n--;
    columns.push(pieces.slice(i, i + n)); last.push(n); i += n;
  }
  columns.forEach(c => { if (c.length === 1) c[0].height = Math.min(band * 0.62, c[0].height * 1.45); });

  /* ── Build the wall: pieces hang in columns; a "stack" piece joins the column before it ── */
  const set = document.createElement('div');
  set.className = 'set';
  set.style.paddingLeft = `calc(var(--H) * ${o.lead})`;
  set.style.paddingRight = `calc(var(--H) * ${Math.max(0, o.tail - o.gap)})`;
  set.innerHTML = `<p class="name" aria-label="Museum of Chai">Museum of <b>Chai</b></p>`;


  const wallMedia = (p, w) => p.video
    ? `<video src="${p.video}" ${p.poster ? `poster="${p.poster}"` : ''} muted loop playsinline preload="metadata" aria-hidden="true"></video>`
    : p.full
      ? `<img src="${p.image}" srcset="${p.image} 560w, ${p.full} 1280w" sizes="${Math.round(w * 1000) / 10}vh" alt="" loading="lazy" decoding="async">`
      : `<img src="${p.image}" alt="" loading="lazy" decoding="async">`;

  const frag = document.createDocumentFragment();
  columns.forEach(col => {
    const heights = col.map(p => p.height || 0.4);
    const total = heights.reduce((a, b) => a + b, 0) + o.stackGap * (col.length - 1);
    const spare = band - total;
    let top = o.top + spare / 2 + between(-0.5, 0.5) * spare;   // centred, drifting a little within the free space
    top = Math.max(o.top, Math.min(o.bottom - total, top));
    const bay = document.createElement('div');
    bay.className = 'bay';
    bay.style.cssText = `margin-top:calc(var(--H) * ${top});margin-right:calc(var(--H) * ${between(o.gap * 0.8, o.gap * 1.25)});gap:calc(var(--H) * ${o.stackGap});`;

    col.forEach(p => {
      const h = p.height || 0.4, w = h * (p.crop || p.ratio || 0.8);
      const el = document.createElement('div');
      el.className = 'piece' + (p.video ? ' moving' : '');
      el.style.cssText = `width:calc(var(--H) * ${w});height:calc(var(--H) * ${h});--focus:${p.focus || '50% 50%'};transform:translateX(calc(var(--H) * ${p.shift || 0}));`;
      el.innerHTML = `
        <button class="art" type="button" aria-label="${label(p)}${p.slides.length > 1 ? `. ${p.slides.length} photos` : ''}. View up close">${wallMedia(p, w)}</button>
        ${p.video ? `<button class="motion-toggle" type="button" aria-label="Pause ${label(p)}">${PAUSE}</button>` : ''}`;
      el.querySelector('.art').addEventListener('click', () => openViewer(p));
      bay.appendChild(el);
      if (p.video) wireMotion(el, label(p));
    });
    frag.appendChild(bay);
  });
  set.appendChild(frag);
  track.appendChild(set);

  /* Vertical wheel and arrow keys walk sideways */
  const dlg = document.getElementById('closeup');
  room.addEventListener('wheel', e => {
    if (dlg.open || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    e.preventDefault();
    room.scrollLeft += e.deltaY;
  }, { passive: false });
  room.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { room.scrollLeft += H() * 0.3; e.preventDefault(); }
    if (e.key === 'ArrowLeft')  { room.scrollLeft -= H() * 0.3; e.preventDefault(); }
  });

  function wireMotion(el, name) {
    const btn = el.querySelector('.motion-toggle');
    const video = el.querySelector('video');
    let userPaused = reduce;
    const set = playing => {
      el.classList.toggle('paused', !playing);
      playing ? video.play().catch(() => {}) : video.pause();
      btn.innerHTML = playing ? PAUSE : PLAY;
      btn.setAttribute('aria-label', (playing ? 'Pause ' : 'Play ') + name);
    };
    set(false);
    btn.addEventListener('click', () => { userPaused = !userPaused; set(!userPaused); });
    new IntersectionObserver(([e]) => { if (!userPaused) set(e.isIntersecting); },
      { root: room, threshold: 0.25 }).observe(el);
  }
};
