/* Museum engine: hangs window.COLLECTION along one long wall, left to right. */
window.Museum = function (opts) {
  const o = Object.assign({
    centre: 0.46,   // eye level: where the middle of each piece sits, share of screen height
    gap: 0.10,      // space between columns, share of screen height
    stackGap: 0.035,// space between stacked pieces
    lead: 0.34,     // space before the first piece (where the name sits)
    tail: 0.30,     // space after the last piece
  }, opts);

  const room = document.getElementById('room');
  const track = document.getElementById('track');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PLAY = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1L12 7L3 13Z" fill="currentColor"/></svg>';
  const PAUSE = '<svg viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="1" width="3.5" height="12" fill="currentColor"/><rect x="8.5" y="1" width="3.5" height="12" fill="currentColor"/></svg>';
  const H = () => room.clientHeight;
  const label = p => [p.place, p.note].filter(Boolean).join('. ') || 'Artwork';

  const media = (p, closeup) => p.video
    ? `<video src="${p.video}" ${p.poster ? `poster="${p.poster}"` : ''} muted loop playsinline preload="metadata" ${closeup ? 'controls' : 'aria-hidden="true"'}></video>`
    : `<img src="${p.image}" alt="" ${closeup ? '' : 'loading="lazy" decoding="async"'}>`;

  /* Build the wall: pieces hang in columns; a "stack" piece joins the column before it */
  const set = document.createElement('div');
  set.className = 'set';
  set.style.paddingLeft = `calc(var(--H) * ${o.lead})`;
  set.style.paddingRight = `calc(var(--H) * ${Math.max(0, o.tail - o.gap)})`;
  set.innerHTML = `<p class="name" aria-label="Museum of Chai">Museum of <b>Chai</b></p>`;

  const columns = [];
  window.COLLECTION.forEach(p => {
    if (p.stack && columns.length) columns[columns.length - 1].push(p);
    else columns.push([p]);
  });

  columns.forEach(col => {
    const heights = col.map(p => p.height || 0.4);
    const total = heights.reduce((a, b) => a + b, 0) + o.stackGap * (col.length - 1);
    const top = o.centre - total / 2 + (col[0].nudge || 0);
    const bay = document.createElement('div');
    bay.className = 'bay';
    bay.style.cssText = `margin-top:calc(var(--H) * ${top});margin-right:calc(var(--H) * ${col[0].space ?? o.gap});gap:calc(var(--H) * ${o.stackGap});`;

    col.forEach(p => {
      const h = p.height || 0.4, w = h * (p.crop || p.ratio || 0.8);
      const el = document.createElement('div');
      el.className = 'piece' + (p.video ? ' moving' : '');
      el.style.cssText = `width:calc(var(--H) * ${w});height:calc(var(--H) * ${h});--focus:${p.focus || '50% 50%'};transform:translateX(calc(var(--H) * ${p.shift || 0}));`;
      el.innerHTML = `
        <button class="art" type="button" aria-label="${label(p)}. View up close">${media(p)}</button>
        ${p.video ? `<button class="motion-toggle" type="button" aria-label="Pause ${label(p)}">${PAUSE}</button>` : ''}`;
      el.querySelector('.art').addEventListener('click', () => openCloseup(p));
      bay.appendChild(el);
      if (p.video) wireMotion(el, label(p));
    });
    set.appendChild(bay);
  });
  track.appendChild(set);

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
      ${p.note || p.place ? `<p class="caption">${p.note ? `<span class="t">${p.note}</span>` : ''}${p.place ? `<span class="h">${p.place}</span>` : ''}</p>` : ''}`;
    const v = body.querySelector('video'); if (v && !reduce) v.play().catch(() => {});
    dlg.showModal();
  }
  document.getElementById('close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg || e.target === body) dlg.close(); });
  dlg.addEventListener('close', () => { body.innerHTML = ''; });
};
