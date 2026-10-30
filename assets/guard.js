/* Right-click (or long-press) shows a museum notice instead of the menu. */
(() => {
  const MSG = 'No flash photography.';
  let note = null, timer = 0;
  const show = (x, y) => {
    if (!note) {
      note = document.createElement('div');
      note.className = 'notice'; note.setAttribute('role', 'status');
      note.textContent = MSG;
      // inside an open dialog the page behind is inert, so attach there
    }
    const dlg = document.querySelector('dialog[open]');
    (dlg || document.body).appendChild(note);
    const pad = 12, w = note.offsetWidth || 180, h = note.offsetHeight || 28;
    note.style.left = Math.min(innerWidth - w - pad, Math.max(pad, x + 14)) + 'px';
    note.style.top = Math.min(innerHeight - h - pad, Math.max(pad, y + 14)) + 'px';
    note.classList.remove('on'); void note.offsetWidth; note.classList.add('on');
    clearTimeout(timer); timer = setTimeout(() => note.classList.remove('on'), 1800);
  };
  addEventListener('contextmenu', e => { e.preventDefault(); show(e.clientX, e.clientY); });
  addEventListener('dragstart', e => { if (e.target.closest('img, video')) e.preventDefault(); });
})();
