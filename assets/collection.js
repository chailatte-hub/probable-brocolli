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
     shift:  slide a stacked piece left (−) or right (+)
     space:  gap after this column (default 0.10)
     place:  small line under the piece on the wall
     note:   the one-liner, shown only up close
     tags:   clickable tags, shown up close
     month:  optional, only used to keep the order right (newest first)
     more:   extra photos in the same post, [{ image, ratio }], swiped through up close
   ───────────────────────────────────────────────────────────── */
window.COLLECTION = [
  { image: "assets/art/pangkor-laut-1.jpg", ratio: 0.6667, crop: 0.80, focus: "40% 62%", height: 0.46, nudge: 0.07, space: 0.12,
    more: [{ image: "assets/art/pangkor-laut-2.jpg", ratio: 1.5 }, { image: "assets/art/pangkor-laut-3.jpg", ratio: 1.5 }],
    place: "Pangkor Laut, 2026", month: "Aug", tags: ["rickie", "ricohgriii"] },

  { image: "assets/art/gyeongju-1.jpg", ratio: 0.6667, crop: 0.80, focus: "50% 55%", height: 0.40, nudge: -0.07, space: 0.11,
    more: [{ image: "assets/art/gyeongju-2.jpg", ratio: 1.5 }, { image: "assets/art/gyeongju-3.jpg", ratio: 1.5 }],
    place: "Gyeongju, 2026", month: "May", tags: ["rickie", "ricohgriii"] },

  { image: "assets/art/snowboarding.jpg",  ratio: 0.5622, crop: 0.75, focus: "50% 42%", height: 0.50, nudge: -0.06,
    place: "Aizu, 2026",         note: "The one where I couldn't stop screaming." },

  { image: "assets/art/japan-street.jpg",  ratio: 1.5038, crop: 1.40, focus: "55% 50%", height: 0.20, nudge: 0.06, space: 0.12,
    place: "Japan, 2025" },
  { image: "assets/art/japan-wako.jpg",    ratio: 0.6650, crop: 1.00, focus: "52% 42%", height: 0.24, stack: true, shift: -0.035,
    place: "Japan, 2025" },

  { image: "assets/art/bangkok-cases.jpg", ratio: 0.6650, crop: 0.80, focus: "45% 55%", height: 0.36, nudge: -0.11, space: 0.08,
    place: "Bangkok, 2024",      note: "Ugly phone cases." },

  { image: "assets/art/surfing.jpg",       ratio: 0.6667, crop: 0.80, focus: "40% 55%", height: 0.46, nudge: 0.08, space: 0.11,
    place: "Wakesurfing, 2023" },

  { image: "assets/art/italy-dancers.jpg", ratio: 1.7822, crop: 1.25, focus: "52% 50%", height: 0.22, nudge: -0.07, space: 0.12,
    place: "Italy, 2023" },
  { image: "assets/art/italy-food.jpg",    ratio: 1.7822, crop: 1.50, focus: "30% 60%", height: 0.18, stack: true, shift: 0.045,
    place: "Italy, 2023" },

  { image: "assets/art/polaroid.jpg",      ratio: 0.8228, crop: 0.8228, focus: "50% 50%", height: 0.30, nudge: 0.12,
    place: "Photography, 2022",  note: "Model, photographer and art director. Paid in drinks." },
];
