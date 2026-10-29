/* Museum engine: hangs window.COLLECTION along an endless wall.
   Each page calls Museum({ ... }) with its own look. */
window.Museum = function (opts) {
  const o = Object.assign({
    centre: 0.40,      // eye-level centreline of the art, share of screen height
    floor: null,       // where wall meets floor (share of height); enables reflections
    gap: 0.13,         // space between pieces, share of height
    lead: 0.30,        // space before the first piece, share of height
    tile: null,        // background tile aspect (width / height) to keep seams aligned
    sets: 3,
  }, opts);

  const room = document.getElementById('room');
  const track = document.getElementById('track');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PLAY = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1L12 7L3 13Z" fill="currentColor"/></svg>';
  const PAUSE = '<svg viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="1" width="3.5" height="12" fill="currentColor"/><rect x="8.5" y="1" width="3.5" height="12" fill="currentColor"/></svg>';
  const H = () => room.clientHeight;
  const moving = p => !!(p.video || p.moving);

  const media = (p, closeup) => p.video
    ? `<video src="${p.video}" ${p.poster ? `poster="${p.poster}"` : ''} muted loop playsinline preload="metadata" ${closeup ? 'controls' : 'aria-hidden="true"'}></video>`
    : p.image ? `<img src="${p.image}" alt="" ${closeup ? '' : 'loading="lazy"'}>`
    : window.ART[p.art];

  /* Build the wall: several identical sets side by side */
  const sets = [];
  for (let s = 0; s < o.sets; s++) {
    const set = document.createElement('div');
    set.className = 'set';
    set.style.paddingLeft = `calc(var(--H) * ${o.lead})`;
    set.innerHTML = `<p class="name"${s === 1 ? '' : ' aria-hidden="true"'}>Museum of Chai</p>`;
    window.COLLECTION.forEach((p, i) => {
      const [w, h] = window.SIZES[p.size] || window.SIZES.medium;
      const el = document.createElement('div');
      el.className = 'piece' + (moving(p) ? ' moving' : '');
      el.style.cssText =
        `--w:${w};--h:${h};margin-top:calc(var(--H) * ${o.centre - h / 2});` +
        `margin-right:calc(var(--H) * ${o.gap});` +
        (o.floor ? `--d:${o.floor - (o.centre + h / 2)};` : '');
      el.innerHTML = `
        <button class="frame" type="button" ${s === 1 ? '' : 'tabindex="-1" aria-hidden="true"'}
                aria-label="${p.title}, ${p.hobby}. View up close">
          <span class="mat"><span class="canvas">${media(p)}</span></span>
        </button>
        <span class="plaque" aria-hidden="true"></span>
        ${moving(p) ? `<button class="motion-toggle" type="button" ${s === 1 ? '' : 'tabindex="-1" aria-hidden="true"'} aria-label="Pause ${p.title}">${PAUSE}</button>` : ''}`;
      el.querySelector('.frame').addEventListener('click', () => openCloseup(p, w / h));
      set.appendChild(el);
      if (moving(p)) wireMotion(el, p.title);
    });
    track.appendChild(set);
    sets.push(set);
  }

  /* Fit a whole number of background tiles into each set (stretching them a few
     percent), so the wall has no visible seam when the loop wraps */
  let setW = 0;
  function measure() {
    setW = sets[0].getBoundingClientRect().width;
    if (o.tile) {
      const n = Math.max(1, Math.round(setW / (H() * o.tile)));
      track.style.backgroundSize = `${setW / n}px 100%`;
    }
  }
  function home() { room.scrollLeft = setW; }

  /* Endless: when you walk past a set, quietly step back by one set */
  room.addEventListener('scroll', () => {
    if (!setW) return;
    if (room.scrollLeft < setW * 0.5) room.scrollLeft += setW;
    else if (room.scrollLeft > setW * 1.5) room.scrollLeft -= setW;
  }, { passive: true });

  /* Vertical wheel walks sideways */
  room.addEventListener('wheel', e => {
    if (dlg.open || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    e.preventDefault();
    room.scrollLeft += e.deltaY;
  }, { passive: false });

  /* Arrow keys walk too */
  room.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { room.scrollLeft += H() * 0.25; e.preventDefault(); }
    if (e.key === 'ArrowLeft')  { room.scrollLeft -= H() * 0.25; e.preventDefault(); }
  });

  let lastH = 0;
  const relayout = () => {
    const ratio = setW ? (room.scrollLeft - setW) / setW : 0;
    measure();
    room.scrollLeft = setW + ratio * setW;
    lastH = H();
  };
  addEventListener('resize', () => { if (H() !== lastH) relayout(); });
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => { measure(); home(); lastH = H(); });
  measure(); home();

  function wireMotion(el, title) {
    const btn = el.querySelector('.motion-toggle');
    const video = el.querySelector('video');
    let userPaused = reduce;
    const set = playing => {
      el.classList.toggle('paused', !playing);
      if (video) playing ? video.play().catch(() => {}) : video.pause();
      btn.innerHTML = playing ? PAUSE : PLAY;
      btn.setAttribute('aria-label', (playing ? 'Pause ' : 'Play ') + title);
    };
    set(false);
    btn.addEventListener('click', () => { userPaused = !userPaused; set(!userPaused); });
    new IntersectionObserver(([e]) => { if (!userPaused) set(e.isIntersecting); },
      { root: room, threshold: 0.25 }).observe(el);
  }

  /* Close-up */
  const dlg = document.getElementById('closeup');
  const body = document.getElementById('closeup-body');
  function openCloseup(p, ratio) {
    body.innerHTML = `
      <div class="frame"><span class="mat"><span class="canvas" style="--ratio:${ratio}">${media(p, true)}</span></span></div>
      <p class="caption"><span class="t">${p.title}</span><span class="h">${p.hobby}</span></p>`;
    const v = body.querySelector('video'); if (v && !reduce) v.play().catch(() => {});
    dlg.showModal();
  }
  document.getElementById('close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', () => { body.innerHTML = ''; });
};
