/* ─────────────────────────────────────────────────────────────
   THE COLLECTION (shared by every version of the museum)

   Each piece:
     title   shown only in the close-up view
     hobby   shown only in the close-up view
     size    "small" | "medium" | "large" | "wide"
     and one of:
       image: "assets/art/surfing.jpg"
       video: "assets/art/surfing.mp4"   (loops silently)
       art:   one of the placeholder drawings in ART below
   Pieces hang left to right in this order, then the wall repeats.
   ───────────────────────────────────────────────────────────── */
window.COLLECTION = [
  { title: "Four Seasons",      hobby: "Colour analysis", size: "large",  art: "seasons" },
  { title: "Drape Test",        hobby: "Colour analysis", size: "small",  art: "drape" },
  { title: "Waiting for a Set", hobby: "Surfing",         size: "wide",   art: "waves", moving: true },
  { title: "The Lineup",        hobby: "Surfing",         size: "small",  art: "lineup" },
  { title: "First Tracks",      hobby: "Snowboarding",    size: "medium", art: "tracks" },
  { title: "Night Run",         hobby: "Snowboarding",    size: "medium", art: "nightsnow", moving: true },
];

/* Width × height of each size, as a share of screen height */
window.SIZES = {
  small:  [0.12, 0.15],
  medium: [0.17, 0.22],
  large:  [0.22, 0.28],
  wide:   [0.30, 0.22],
};

/* Placeholder drawings, until real photos and videos arrive */
window.ART = {
  seasons: `<svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    ${[["#F7C59F","#F29E7D","#B8D98A","#F2D16B"],["#C9D4E8","#D9AFC0","#9FB4C7","#B9A9CF"],
       ["#C1652F","#7A6A2E","#D99A3D","#5E3B27"],["#1F2A5A","#B0123B","#F4F6F8","#0F5E4E"]]
      .map((col,i)=>col.map((c,j)=>`<rect x="${i*50}" y="${j*65}" width="50" height="65" fill="${c}"/>`).join("")).join("")}
  </svg>`,
  drape: `<svg viewBox="0 0 160 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="160" height="200" fill="#3B2F3A"/>
    <path d="M0 200 L0 150 Q80 100 160 150 L160 200Z" fill="#C24A5B"/>
    <path d="M25 200 Q80 128 135 200Z" fill="#E7B9A5"/>
    <ellipse cx="80" cy="88" rx="30" ry="38" fill="#E9C2A8"/>
    <path d="M48 82 Q50 44 80 44 Q112 44 113 84 Q108 62 80 60 Q54 62 48 82Z" fill="#2A1C18"/>
  </svg>`,
  waves: `<svg viewBox="0 0 250 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="250" height="190" fill="#F3E3C6"/>
    <circle cx="190" cy="50" r="24" fill="#F2B66B"/>
    <path class="wave" d="M-30 105 Q0 85 30 105 T90 105 T150 105 T210 105 T280 100 V190 H-30Z" fill="#7FB7C9"/>
    <path class="wave w2" d="M-30 127 Q5 103 40 127 T110 127 T180 127 T280 123 V190 H-30Z" fill="#3F86A3"/>
    <path class="wave w3" d="M-30 153 Q10 125 50 153 T130 153 T210 153 T290 149 V190 H-30Z" fill="#1E5A78"/>
  </svg>`,
  lineup: `<svg viewBox="0 0 160 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="160" height="120" fill="#E9A07A"/><rect y="55" width="160" height="65" fill="#F1BE93"/>
    <rect y="120" width="160" height="80" fill="#2D5E77"/>
    <g fill="#1A2630"><rect x="30" y="116" width="18" height="3" rx="1.5"/><circle cx="39" cy="112" r="3"/>
    <rect x="76" y="117" width="16" height="3" rx="1.5"/><circle cx="84" cy="113" r="3"/>
    <rect x="114" y="116" width="18" height="3" rx="1.5"/><circle cx="123" cy="112" r="3"/></g>
  </svg>`,
  tracks: `<svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="200" height="260" fill="#CFE0EE"/>
    <path d="M0 125 L70 42 L110 88 L150 30 L200 98 V260 H0Z" fill="#F7FAFC"/>
    <path d="M70 42 L82 56 L64 68 Z M150 30 L162 46 L140 53 Z" fill="#B7C9D9"/>
    <path d="M150 62 C 90 104, 170 146, 100 182 S 60 235, 40 260" fill="none" stroke="#2C3E66" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
  nightsnow: `<svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="200" height="260" fill="#1C2A4A"/>
    <path d="M0 170 L50 100 L85 140 L140 70 L200 160 V260 H0Z" fill="#E6EDF5"/>
    <path d="M0 200 L200 185 V260 H0Z" fill="#C7D3E2"/>
    <g fill="#fff">${Array.from({length:44},(_,i)=>`<circle class="flake" cx="${(i*37)%200}" cy="${(i*53)%260-260}" r="${1+(i%3)*.6}" style="animation-duration:${6+(i%5)}s;animation-delay:-${(i*0.7)%7}s"/>`).join("")}</g>
  </svg>`,
};
