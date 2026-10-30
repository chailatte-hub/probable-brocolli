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
    place: "Pangkor Laut, 2026", month: "Aug", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/bangkok-2026-1.jpg", ratio: 1.5088, crop: 1.35, focus: "45% 50%", height: 0.30, nudge: -0.05, space: 0.11,
    more: [{ image: "assets/art/bangkok-2026-2.jpg", ratio: 1.5088 }, { image: "assets/art/bangkok-2026-3.jpg", ratio: 1.5088 }],
    place: "Bangkok, 2026", month: "Jun", tags: ["film", "pentaxespio"] },

  { image: "assets/art/blue-house-1.jpg", ratio: 0.6667, crop: 0.75, focus: "50% 45%", height: 0.44, nudge: 0.07, space: 0.11,
    more: [{ image: "assets/art/blue-house-2.jpg", ratio: 0.6667 }, { image: "assets/art/blue-house-3.jpg", ratio: 0.6667 }, { image: "assets/art/blue-house-4.jpg", ratio: 0.6667 }],
    place: "2026", month: "Jun", note: "blue house check", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/gyeongju-1.jpg", ratio: 0.6667, crop: 0.80, focus: "50% 55%", height: 0.40, nudge: -0.07, space: 0.11,
    more: [{ image: "assets/art/gyeongju-2.jpg", ratio: 1.5 }, { image: "assets/art/gyeongju-3.jpg", ratio: 1.5 }],
    place: "Gyeongju, 2026", month: "May", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/macritchie-1.jpg", ratio: 1.5, crop: 1.25, focus: "52% 45%", height: 0.28, nudge: 0.10, space: 0.11,
    more: [{ image: "assets/art/macritchie-2.jpg", ratio: 1.5 }, { image: "assets/art/macritchie-3.jpg", ratio: 1.5 }, { image: "assets/art/macritchie-4.jpg", ratio: 1.5 }],
    place: "MacRitchie, 2026", month: "May", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/snowboarding.jpg",  ratio: 0.5622, crop: 0.75, focus: "50% 42%", height: 0.50, nudge: -0.06,
    place: "Aizu, 2026",         note: "The one where I couldn't stop screaming." },

  { image: "assets/art/nozawa-film-1.jpg", ratio: 0.75, crop: 0.75, focus: "50% 50%", height: 0.42, nudge: 0.06, space: 0.11,
    more: [{ image: "assets/art/nozawa-film-2.jpg", ratio: 1.3333 }],
    place: "Nozawa, 2026", month: "Jan", tags: ["film"] },

  { image: "assets/art/nozawa-yakiniku-1.jpg", ratio: 0.6667, crop: 0.8, focus: "50% 55%", height: 0.44, nudge: -0.06, space: 0.12,
    more: [{ image: "assets/art/nozawa-yakiniku-2.jpg", ratio: 0.6667 }],
    place: "Nozawa, 2026", month: "Jan", tags: ["fujifilm", "yakiniku"] },

  { video: "assets/art/nozawa-cold.mp4", poster: "assets/art/nozawa-cold-poster.jpg", ratio: 0.5625, crop: 0.7, focus: "50% 55%", height: 0.46, nudge: 0.05, space: 0.12,
    place: "Nozawa, 2026", month: "Jan", note: "Freezing our ass off" },

  { image: "assets/art/secret-santa-1.jpg", ratio: 1.5, crop: 1.35, focus: "50% 50%", height: 0.30, nudge: -0.09, space: 0.12,
    more: [{ image: "assets/art/secret-santa-2.jpg", ratio: 1.5 }],
    place: "2025", month: "Nov", note: "Annual Secret Santa. Always a good time", tags: ["ricohgriii", "xrickie"] },

  { image: "assets/art/japan-street.jpg",  ratio: 1.5038, crop: 1.40, focus: "55% 50%", height: 0.20, nudge: 0.06, space: 0.12,
    place: "Japan, 2025", month: "Jan" },
  { image: "assets/art/japan-wako.jpg",    ratio: 0.6650, crop: 1.00, focus: "52% 42%", height: 0.24, stack: true, shift: -0.035,
    place: "Japan, 2025", month: "Jan" },

  { image: "assets/art/bangkok-cases.jpg", ratio: 0.6650, crop: 0.80, focus: "45% 55%", height: 0.36, nudge: -0.11, space: 0.08,
    place: "Bangkok, 2024",      note: "Ugly phone cases." },

  { image: "assets/art/jeju-1.jpg", ratio: 1.5, crop: 1.4, focus: "50% 50%", height: 0.28, nudge: 0.07, space: 0.11,
    more: [{ image: "assets/art/jeju-2.jpg", ratio: 0.6667 }],
    place: "Jeju, 2023", month: "Oct", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/penang-1.jpg", ratio: 0.6667, crop: 0.75, focus: "50% 60%", height: 0.44, nudge: -0.06, space: 0.11,
    more: [{ image: "assets/art/penang-2.jpg", ratio: 0.6667 }],
    place: "Penang, 2023", month: "Jul", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/coucou-1.jpg", ratio: 1.5, crop: 1.35, focus: "55% 45%", height: 0.26, nudge: 0.08, space: 0.11,
    more: [{ image: "assets/art/coucou-2.jpg", ratio: 1.5 }],
    place: "2023", month: "Jul", note: "coucou", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/rickie-pottery.jpg", ratio: 1.5, crop: 1.4, focus: "55% 50%", height: 0.22, nudge: 0.03, space: 0.11,
    place: "2023", month: "Jun", note: "birth of rickie at pottery", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/wet-plate.jpg", ratio: 1.5, crop: 1.35, focus: "50% 45%", height: 0.20, stack: true, shift: -0.03,
    place: "2023", month: "Jun", note: "wet plate photograph (semi annual birthday self portrait)", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/bw-goodness-1.jpg", ratio: 1.5, crop: 1.35, focus: "55% 50%", height: 0.26, nudge: -0.05, space: 0.11,
    more: [{ image: "assets/art/bw-goodness-2.jpg", ratio: 0.6667 }, { image: "assets/art/bw-goodness-3.jpg", ratio: 0.6667 }],
    place: "2023", month: "Jun", note: "b/w goodness", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/surfing.jpg",       ratio: 0.6667, crop: 0.80, focus: "40% 55%", height: 0.46, nudge: 0.08, space: 0.11,
    place: "Wakesurfing, 2023" },

  { image: "assets/art/italy-dancers.jpg", ratio: 1.7822, crop: 1.25, focus: "52% 50%", height: 0.22, nudge: -0.07, space: 0.12,
    place: "Italy, 2023" },
  { image: "assets/art/italy-food.jpg",    ratio: 1.7822, crop: 1.50, focus: "30% 60%", height: 0.18, stack: true, shift: 0.045,
    place: "Italy, 2023" },

  { image: "assets/art/polaroid.jpg",      ratio: 0.8228, crop: 0.8228, focus: "50% 50%", height: 0.30, nudge: 0.12,
    place: "Photography, 2022",  note: "Model, photographer and art director. Paid in drinks." },

  { image: "assets/art/melbourne-library.jpg", ratio: 1.7831, crop: 1.4, focus: "50% 55%", height: 0.22, nudge: 0.04, space: 0.11,
    place: "Melbourne, 2022", month: "Apr", tags: ["xchelsea", "fujifilm x100f", "melbourne"] },

  { image: "assets/art/melbourne-coast-1.jpg", ratio: 1.7831, crop: 1.5, focus: "45% 50%", height: 0.20, stack: true, shift: 0.035,
    more: [{ image: "assets/art/melbourne-coast-2.jpg", ratio: 1.7831 }],
    place: "Melbourne, 2022", month: "Apr", tags: ["xchelsea", "fujifilm x100f", "melbourne"] },

  { image: "assets/art/secret-santa-2021-1.jpg", ratio: 1.7831, crop: 1.4, focus: "50% 50%", height: 0.28, nudge: -0.08, space: 0.11,
    more: [{ image: "assets/art/secret-santa-2021-2.jpg", ratio: 1.7831 }],
    place: "2021", month: "Dec", note: "secret santa", tags: ["xchelsea", "fujifilm x100f"] },

  { image: "assets/art/sunrise-mirrors-1.jpg", ratio: 1.7831, crop: 1.35, focus: "52% 45%", height: 0.22, nudge: 0.08, space: 0.11,
    more: [{ image: "assets/art/sunrise-mirrors-2.jpg", ratio: 0.5608 }, { image: "assets/art/sunrise-mirrors-3.jpg", ratio: 1.7831 }],
    place: "2021", month: "May", note: "sunrise and mirrors", tags: ["xchelsea", "fujifilm x100f"] },

  { image: "assets/art/kyes-bowl-1.jpg", ratio: 1.7831, crop: 1.25, focus: "58% 45%", height: 0.22, stack: true, shift: -0.03,
    more: [{ image: "assets/art/kyes-bowl-2.jpg", ratio: 1.7831 }, { image: "assets/art/kyes-bowl-3.jpg", ratio: 1.7831 }],
    place: "2021", month: "May", note: "kye's bowl", tags: ["xchelsea", "fujifilm x100f", "kye", "dog"] },

  { image: "assets/art/aging-celebrations.jpg", ratio: 0.5608, crop: 0.8, focus: "50% 40%", height: 0.44, nudge: -0.06, space: 0.12,
    place: "2020", month: "Jul", note: "of aging and celebrations", tags: ["xchelsea", "fujifilm x100f"] },
];
