/* Museum engine: hangs window.COLLECTION along an endless wall. */
window.Museum = function (opts) {
  const o = Object.assign({
    centre: 0.46,   // eye level: where the middle of each piece sits, share of screen height
    gap: 0.16,      // space between pieces, share of screen height
    lead: 0.34,     // space before the first piece (where the name sits)
    sets: 3,        // copies of the wall used to make it endless
  }, opts);

  const room = document.getElementById('room');
  const track = document.getElementById('track');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PLAY = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1L12 7L3 13Z" fill="currentColor"/></svg>';
  const PAUSE = '<svg viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="1" width="3.5" height="12" fill="currentColor"/><rect x="8.5" y="1" width="3.5" height="12" fill="currentColor"/></svg>';
  const H = () => room.clientHeight;
  const label = p => [p.title, p.hobby].filter(Boolean).join(', ') || 'Artwork';

  const media = (p, closeup) => p.video
    ? `<video src="${p.video}" ${p.poster ? `poster="${p.poster}"` : ''} muted loop playsinline preload="metadata" ${closeup ? 'controls' : 'aria-hidden="true"'}></video>`
    : `<img src="${p.image}" alt="" ${closeup ? '' : 'loading="lazy" decoding="async"'}>`;

  /* Build the wall: identical sets side by side */
  const sets = [];
  for (let s = 0; s < o.sets; s++) {
    const live = s === 1;   // only the middle copy is reachable by keyboard and screen readers
    const set = document.createElement('div');
    set.className = 'set';
    set.style.paddingLeft = `calc(var(--H) * ${o.lead})`;
    set.innerHTML = `<p class="name"${live ? '' : ' aria-hidden="true"'}>Museum of Chai</p>`;
    window.COLLECTION.forEach(p => {
      const h = p.height || 0.45, w = h * (p.ratio || 0.75);
      const el = document.createElement('div');
      el.className = 'piece' + (p.video ? ' moving' : '');
      el.style.cssText =
        `width:calc(var(--H) * ${w});height:calc(var(--H) * ${h});` +
        `margin-top:calc(var(--H) * ${o.centre - h / 2});margin-right:calc(var(--H) * ${o.gap});`;
      el.innerHTML = `
        <button class="art" type="button" ${live ? '' : 'tabindex="-1" aria-hidden="true"'} aria-label="${label(p)}. View up close">${media(p)}</button>
        ${p.video ? `<button class="motion-toggle" type="button" ${live ? '' : 'tabindex="-1" aria-hidden="true"'} aria-label="Pause ${label(p)}">${PAUSE}</button>` : ''}`;
      el.querySelector('.art').addEventListener('click', () => openCloseup(p));
      set.appendChild(el);
      if (p.video) wireMotion(el, label(p));
    });
    track.appendChild(set);
    sets.push(set);
  }

  /* Endless: walking past one copy quietly steps back by exactly one copy */
  let setW = 0;
  const measure = () => { setW = sets[0].getBoundingClientRect().width; };
  room.addEventListener('scroll', () => {
    if (!setW) return;
    if (room.scrollLeft < setW * 0.5) room.scrollLeft += setW;
    else if (room.scrollLeft > setW * 1.5) room.scrollLeft -= setW;
  }, { passive: true });

  /* Vertical wheel and arrow keys walk sideways */
  room.addEventListener('wheel', e => {
    if (dlg.open || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    e.preventDefault();
    room.scrollLeft += e.deltaY;
  }, { passive: false });
  room.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { room.scrollLeft += H() * 0.3; e.preventDefault(); }
    if (e.key === 'ArrowLeft')  { room.scrollLeft -= H() * 0.3; e.preventDefault(); }
  });

  let lastH = 0;
  addEventListener('resize', () => {
    if (H() === lastH) return;
    const at = setW ? (room.scrollLeft - setW) / setW : 0;
    measure(); room.scrollLeft = setW + at * setW; lastH = H();
  });
  measure(); room.scrollLeft = setW; lastH = H();

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

  /* Up close, in colour */
  const dlg = document.getElementById('closeup');
  const body = document.getElementById('closeup-body');
  function openCloseup(p) {
    body.innerHTML = `
      <div class="big" style="--ratio:${p.ratio || 0.75}">${media(p, true)}</div>
      ${p.title || p.hobby ? `<p class="caption">${p.title ? `<span class="t">${p.title}</span>` : ''}${p.hobby && p.hobby !== p.title ? `<span class="h">${p.hobby}</span>` : ''}</p>` : ''}`;
    const v = body.querySelector('video'); if (v && !reduce) v.play().catch(() => {});
    dlg.showModal();
  }
  document.getElementById('close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg || e.target === body) dlg.close(); });
  dlg.addEventListener('close', () => { body.innerHTML = ''; });
};
