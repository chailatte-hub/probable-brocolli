/* Shared close-up viewer for the museum and the archive.
   openViewer({ slides: [{ image, video, poster, ratio }], note, tags, place })
   Posts with several photos swipe sideways (or use the buttons / arrow keys).
   Needs <dialog id="closeup"> with #close and #closeup-body in the page. */
(() => {
  const dlg = document.getElementById('closeup');
  const body = document.getElementById('closeup-body');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const CHEV = d => `<svg viewBox="0 0 12 12" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>`;
  const media = m => m.video
    ? `<video src="${m.video}" ${m.poster ? `poster="${m.poster}"` : ''} muted loop playsinline controls></video>`
    : `<img src="${m.image}" alt="" loading="lazy" decoding="async">`;
  let track = null, total = 1, refresh = () => {};

  window.openViewer = function (p) {
    const n = total = p.slides.length;
    const maxR = Math.max(...p.slides.map(m => m.ratio || 0.8));
    const tags = p.tags && p.tags.length ? `<span class="tags">${p.tags.map(t => '#' + esc(t)).join(' ')}</span>` : '';
    body.innerHTML = `
      <div class="viewer" style="--vh:min(72svh, 900px);--vw:min(84vw, calc(min(72svh, 900px) * ${maxR}))">
        <div class="slides" id="slides" tabindex="0" aria-label="${n > 1 ? `${n} photos. Use arrow keys to move between them` : 'Photo'}">
          ${p.slides.map(m => `<figure class="slide">${media(m)}</figure>`).join('')}
        </div>
        ${n > 1 ? `
          <button class="nav prev" type="button" aria-label="Previous photo">${CHEV('M7.5 2 L3.5 6 L7.5 10')}</button>
          <button class="nav next" type="button" aria-label="Next photo">${CHEV('M4.5 2 L8.5 6 L4.5 10')}</button>
          <span class="where" aria-live="polite">1 / ${n}</span>` : ''}
      </div>
      <p class="caption">${p.note ? `<span class="t">${esc(p.note)}</span>` : ''}${tags}${p.place ? `<span class="h">${esc(p.place)}</span>` : ''}</p>`;
    track = body.querySelector('#slides');
    if (n > 1) {
      const where = body.querySelector('.where'), prev = body.querySelector('.prev'), next = body.querySelector('.next');
      const update = () => {
        const k = track.clientWidth ? Math.round(track.scrollLeft / track.clientWidth) : 0;
        where.textContent = `${k + 1} / ${n}`; prev.disabled = k === 0; next.disabled = k === n - 1;
      };
      track.addEventListener('scroll', update, { passive: true });
      prev.addEventListener('click', () => go(-1));
      next.addEventListener('click', () => go(1));
      refresh = update;
    } else refresh = () => {};
    const v = body.querySelector('video'); if (v && !reduce) v.play().catch(() => {});
    dlg.showModal();
    refresh();
    track.focus({ preventScroll: true });
  };

  function go(d) {
    if (!track) return;
    if (!track.clientWidth) return;
    const k = Math.round(track.scrollLeft / track.clientWidth) + d;
    track.scrollTo({ left: Math.max(0, Math.min(total - 1, k)) * track.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
  }
  dlg.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { go(1); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { go(-1); e.preventDefault(); }
  });
  document.getElementById('close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => {
    if (e.target === dlg || e.target === body || e.target.classList.contains('slide')) dlg.close();
  });
  dlg.addEventListener('close', () => { body.innerHTML = ''; track = null; });
})();
