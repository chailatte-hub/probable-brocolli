/* ─────────────────────────────────────────────────────────────
   THE COLLECTION — a museum of my life, newest first

   Pieces hang left to right in this order.
     image:  "assets/art/name.jpg"   or   video: "assets/art/name.mp4"
     ratio:  width ÷ height of the original (used up close, uncropped)
     crop:   width ÷ height it's cropped to on the wall (0.8 = 4:5 portrait, 1 = square, 1.5 = 3:2 landscape)
     focus:  which part to keep when cropping, as "x% y%" (50% 50% = centre)
     height: how tall it hangs, as a share of the screen
     stack:  true = hang under the previous piece instead of beside it
     nudge:  move this column up (−) or down (+), as a share of the screen
     place:  small line under the piece on the wall
     note:   the one-liner, shown only up close
   ───────────────────────────────────────────────────────────── */
window.COLLECTION = [
  { image: "assets/art/snowboarding.jpg",  ratio: 0.5622, crop: 0.75, focus: "50% 42%", height: 0.50, nudge: -0.01,
    place: "Aizu, 2026",         note: "The one where I couldn't stop screaming." },

  { image: "assets/art/japan-street.jpg",  ratio: 1.5038, crop: 1.40, focus: "55% 50%", height: 0.20, nudge: -0.03,
    place: "Japan, 2025" },
  { image: "assets/art/japan-wako.jpg",    ratio: 0.6650, crop: 1.00, focus: "52% 42%", height: 0.24, stack: true,
    place: "Japan, 2025" },

  { image: "assets/art/bangkok-cases.jpg", ratio: 0.6650, crop: 0.80, focus: "45% 55%", height: 0.36, nudge: 0.03,
    place: "Bangkok, 2024",      note: "Ugly phone cases." },

  { image: "assets/art/surfing.jpg",       ratio: 0.6667, crop: 0.80, focus: "40% 55%", height: 0.46, nudge: -0.02,
    place: "Wakesurfing, 2023" },

  { image: "assets/art/italy-dancers.jpg", ratio: 1.7822, crop: 1.25, focus: "52% 50%", height: 0.22, nudge: 0.01,
    place: "Italy, 2023" },
  { image: "assets/art/italy-food.jpg",    ratio: 1.7822, crop: 1.50, focus: "30% 60%", height: 0.18, stack: true,
    place: "Italy, 2023" },

  { image: "assets/art/polaroid.jpg",      ratio: 0.8228, crop: 0.8228, focus: "50% 50%", height: 0.30, nudge: 0.04,
    place: "Photography, 2022",  note: "Model, photographer and art director. Paid in drinks." },
];
