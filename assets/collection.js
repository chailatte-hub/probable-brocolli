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
  { image: "assets/art/taipei-mirror.jpg", ratio: 1.5, crop: 1.3, focus: "54% 50%", height: 0.23, nudge: -0.02, space: 0.11,
    place: "Taipei, 2026", month: "Oct", tags: ["xrickie", "ricohgriii"] },
  { image: "assets/art/taipei-manhole.jpg", ratio: 1.5, crop: 1.35, focus: "50% 55%", height: 0.21, stack: true, shift: 0.035,
    place: "Taipei, 2026", month: "Oct", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/pangkor-laut-2.jpg", ratio: 1.5, crop: 1.35, focus: "50% 55%", height: 0.30, nudge: 0.07, space: 0.12,
    more: [{ image: "assets/art/pangkor-laut-3.jpg", ratio: 1.5 }, { image: "assets/art/pangkor-laut-1.jpg", ratio: 0.6667 }],
    place: "Pangkor Laut, 2026", month: "Aug", tags: ["xrickie", "ricohgriii"] },

  { video: "assets/art/pangkor-laut-video.mp4", poster: "assets/art/pangkor-laut-video-poster.jpg", ratio: 0.5625, crop: 0.7, focus: "50% 55%", height: 0.44, nudge: -0.05, space: 0.11,
    place: "Pangkor Laut, 2026", month: "Aug" },

  { image: "assets/art/tuesday-constants-1.jpg", ratio: 1.5088, crop: 1.35, focus: "45% 55%", height: 0.22, nudge: 0.03, space: 0.11,
    more: [{ image: "assets/art/tuesday-constants-2.jpg", ratio: 1.5088 }],
    place: "2026", month: "Jul", note: "my tuesday constants <3", tags: ["film", "pentaxespio"] },

  { image: "assets/art/always-forever-1.jpg", ratio: 1.509, crop: 1.35, focus: "50% 45%", height: 0.21, stack: true, shift: -0.035,
    more: [{ image: "assets/art/always-forever-2.jpg", ratio: 1.509 }, { image: "assets/art/always-forever-3.jpg", ratio: 1.509 }, { image: "assets/art/always-forever-4.jpg", ratio: 1.509 }],
    place: "2026", month: "Jul", note: "always and forever", tags: ["film", "pentaxespio"] },

  { video: "assets/art/crocs-selfie.mp4", poster: "assets/art/crocs-selfie-poster.jpg", ratio: 1.7778, crop: 1.5, focus: "50% 45%", height: 0.24, nudge: -0.06, space: 0.11,
    place: "2026", month: "Jul" },

  { image: "assets/art/bangkok-2026-1.jpg", ratio: 1.5088, crop: 1.35, focus: "45% 50%", height: 0.30, nudge: -0.05, space: 0.11,
    more: [{ image: "assets/art/bangkok-2026-2.jpg", ratio: 1.5088 }, { image: "assets/art/bangkok-2026-3.jpg", ratio: 1.5088 }],
    place: "Bangkok, 2026", month: "Jun", tags: ["film", "pentaxespio"] },

  { video: "assets/art/senget-gals.mp4", poster: "assets/art/senget-gals-poster.jpg", ratio: 1.7778, crop: 1.5, focus: "40% 55%", height: 0.24, nudge: 0.06, space: 0.11,
    place: "Bangkok, 2026", month: "Jun", note: "3 senget gals" },

  { image: "assets/art/gyeongju-1.jpg", ratio: 0.6667, crop: 0.80, focus: "50% 55%", height: 0.40, nudge: -0.07, space: 0.11,
    more: [{ image: "assets/art/gyeongju-2.jpg", ratio: 1.5 }, { image: "assets/art/gyeongju-3.jpg", ratio: 1.5 }],
    place: "Gyeongju, 2026", month: "May", tags: ["xrickie", "ricohgriii"] },

  { video: "assets/art/blue-tiles.mp4", poster: "assets/art/blue-tiles-poster.jpg", ratio: 0.5625, crop: 0.7, focus: "50% 50%", height: 0.42, nudge: 0.06, space: 0.11,
    place: "Seoul, 2026", month: "May" },

  { image: "assets/art/shio-pan-1.jpg", ratio: 1.5, crop: 1.35, focus: "55% 50%", height: 0.26, nudge: -0.06, space: 0.11,
    more: [{ image: "assets/art/shio-pan-2.jpg", ratio: 1.5 }, { image: "assets/art/shio-pan-3.jpg", ratio: 1.5 }],
    place: "2026", month: "May", note: "shio pan and potluck", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/hong-kong-calm.jpg", ratio: 0.6667, crop: 0.72, focus: "50% 45%", height: 0.48, nudge: 0.06, space: 0.11,
    place: "Hong Kong, 2026", month: "May", note: "calm in chaos", tags: ["xrickie", "ricohgriii"] },

  { video: "assets/art/hk-photobooth-strip.mp4", poster: "assets/art/hk-photobooth-strip-poster.jpg", ratio: 0.6704, crop: 0.6704, focus: "50% 50%", height: 0.42, nudge: -0.06, space: 0.11,
    place: "Hong Kong, 2026", month: "May", tags: ["photobooth"] },

  { image: "assets/art/macritchie-2.jpg", ratio: 1.5, crop: 1.25, focus: "52% 45%", height: 0.28, nudge: 0.10, space: 0.11,
    more: [{ image: "assets/art/macritchie-1.jpg", ratio: 1.5 }, { image: "assets/art/macritchie-3.jpg", ratio: 1.5 }, { image: "assets/art/macritchie-4.jpg", ratio: 1.5 }],
    place: "MacRitchie, 2026", month: "May", tags: ["xrickie", "ricohgriii"] },

  { video: "assets/art/shuv-club.mp4", poster: "assets/art/shuv-club-poster.jpg", ratio: 0.5625, crop: 0.7, focus: "50% 60%", height: 0.46, nudge: -0.05, space: 0.11,
    place: "2026", month: "Mar", note: "Joined the shuv club!!!!!" },

  { image: "assets/art/snowboarding.jpg",  ratio: 0.5622, crop: 0.75, focus: "50% 42%", height: 0.50, nudge: -0.06,
    place: "Aizu, 2026", month: "Jan",         note: "The one where I couldn't stop screaming." },

  { video: "assets/art/japan-2026.mp4", poster: "assets/art/japan-2026-poster.jpg", ratio: 0.5625, crop: 0.7, focus: "50% 40%", height: 0.44, nudge: -0.05, space: 0.11,
    place: "Aizu, 2026", month: "Jan" },

  { image: "assets/art/nozawa-film-1.jpg", ratio: 0.75, crop: 0.75, focus: "50% 50%", height: 0.42, nudge: 0.06, space: 0.11,
    more: [{ image: "assets/art/nozawa-film-2.jpg", ratio: 1.3333 }],
    place: "Nozawa, 2026", month: "Jan", tags: ["film"] },

  { video: "assets/art/nozawa-cold.mp4", poster: "assets/art/nozawa-cold-poster.jpg", ratio: 0.5625, crop: 0.7, focus: "50% 55%", height: 0.46, nudge: 0.05, space: 0.12,
    place: "Nozawa, 2026", month: "Jan", note: "Freezing our ass off" },

  { image: "assets/art/nozawa-yakiniku-1.jpg", ratio: 0.6667, crop: 0.8, focus: "50% 55%", height: 0.44, nudge: -0.06, space: 0.12,
    more: [{ image: "assets/art/nozawa-yakiniku-2.jpg", ratio: 0.6667 }],
    place: "Nozawa, 2026", month: "Jan", tags: ["fujifilm", "yakiniku"] },

  { video: "assets/art/seoul-photobooth.mp4", poster: "assets/art/seoul-photobooth-poster.jpg", ratio: 0.6667, crop: 0.6667, focus: "50% 50%", height: 0.42, nudge: -0.05, space: 0.11,
    place: "Seoul, 2025", month: "Nov", tags: ["photobooth"] },

  { image: "assets/art/secret-santa-1.jpg", ratio: 1.5, crop: 1.35, focus: "50% 50%", height: 0.30, nudge: -0.09, space: 0.12,
    more: [{ image: "assets/art/secret-santa-2.jpg", ratio: 1.5 }],
    place: "2025", month: "Nov", note: "Annual Secret Santa. Always a good time", tags: ["ricohgriii", "xrickie"] },

  { image: "assets/art/party-julhan.jpg", ratio: 0.8231, crop: 0.8231, focus: "50% 50%", height: 0.34, nudge: 0.07, space: 0.09,
    place: "2025", month: "Nov", note: "party for julhan", tags: ["Polaroid", "itypefilm"] },

  { image: "assets/art/party-julhan-2.jpg", ratio: 0.8221, crop: 0.8221, focus: "50% 50%", height: 0.30, nudge: -0.06, space: 0.09,
    more: [{ image: "assets/art/party-julhan-3.jpg", ratio: 0.8231 }],
    place: "2025", month: "Nov", note: "party for julhan", tags: ["Polaroid", "itypefilm"] },

  { image: "assets/art/party-julhan-4.jpg", ratio: 0.8221, crop: 0.8221, focus: "50% 50%", height: 0.32, nudge: 0.05, space: 0.11,
    more: [{ image: "assets/art/party-julhan-5.jpg", ratio: 0.8231 }, { image: "assets/art/party-julhan-6.jpg", ratio: 0.8231 }],
    place: "2025", month: "Nov", note: "party for julhan", tags: ["Polaroid", "itypefilm"] },

  { image: "assets/art/mumbai-1.jpg", ratio: 1.5, crop: 1.35, focus: "50% 50%", height: 0.27, nudge: -0.07, space: 0.11,
    more: [{ image: "assets/art/mumbai-2.jpg", ratio: 1.5 }],
    place: "Mumbai, 2025", month: "May", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/pickleponies-1.jpg", ratio: 0.6644, crop: 0.75, focus: "40% 50%", height: 0.44, nudge: 0.06, space: 0.11,
    more: [{ image: "assets/art/pickleponies-2.jpg", ratio: 0.6644 }, { image: "assets/art/pickleponies-3.jpg", ratio: 1.505 }],
    place: "2025", month: "Mar", note: "pickleponies", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/beijing-blossom-1.jpg", ratio: 0.6667, crop: 0.75, focus: "45% 50%", height: 0.44, nudge: -0.06, space: 0.11,
    more: [{ image: "assets/art/beijing-blossom-2.jpg", ratio: 0.6667 }, { image: "assets/art/beijing-blossom-3.jpg", ratio: 0.6667 }, { image: "assets/art/beijing-blossom-4.jpg", ratio: 0.6667 }],
    place: "Beijing, 2025", month: "Mar", note: "cherry blossoming in beijing", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/japan-street.jpg",  ratio: 1.5038, crop: 1.40, focus: "55% 50%", height: 0.20, nudge: 0.06, space: 0.12,
    place: "Japan, 2025", month: "Jan" },
  { image: "assets/art/japan-wako.jpg",    ratio: 0.6650, crop: 1.00, focus: "52% 42%", height: 0.24, stack: true, shift: -0.035,
    place: "Japan, 2025", month: "Jan" },

  { image: "assets/art/izu-sunrise-1.jpg", ratio: 0.6667, crop: 0.75, focus: "45% 60%", height: 0.44, nudge: 0.06, space: 0.11,
    more: [{ image: "assets/art/izu-sunrise-2.jpg", ratio: 1.5 }],
    place: "Izu, 2024", month: "Dec", note: "izu sunrise", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/self-portrait-30-1.jpg", ratio: 0.6667, crop: 0.75, focus: "50% 30%", height: 0.46, nudge: 0.05, space: 0.11,
    place: "Seoul, 2024", month: "Jul", note: "30 self portrait", tags: ["studio"] },

  { image: "assets/art/colour-jpg-1.jpg", ratio: 1.5, crop: 1.35, focus: "45% 50%", height: 0.26, nudge: -0.07, space: 0.11,
    more: [{ image: "assets/art/colour-jpg-2.jpg", ratio: 0.6667 }, { image: "assets/art/colour-jpg-3.jpg", ratio: 1.5 }],
    place: "Seoul, 2024", month: "Jul", note: "colour analysis at colour jpg", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/bangkok-cases.jpg", ratio: 0.6650, crop: 0.80, focus: "45% 55%", height: 0.36, nudge: -0.11, space: 0.08,
    place: "Bangkok, 2024",      note: "Ugly phone cases." },

  { image: "assets/art/fukuoka-film.jpg", ratio: 1.5088, crop: 1.4, focus: "50% 55%", height: 0.27, nudge: 0.08, space: 0.11,
    place: "Fukuoka, 2024", month: "Mar", tags: ["film", "pentaxespio"] },

  { image: "assets/art/fukuoka-film-2.jpg", ratio: 0.6628, crop: 0.6628, focus: "50% 50%", height: 0.44, nudge: -0.06, space: 0.11,
    more: [{ image: "assets/art/fukuoka-film-3.jpg", ratio: 1.5088 }],
    place: "Fukuoka, 2024", month: "Mar", tags: ["film", "pentaxespio"] },

  { image: "assets/art/touching-grass.jpg", ratio: 0.6642, crop: 0.6642, focus: "50% 50%", height: 0.36, nudge: 0.07, space: 0.11,
    place: "Fukuoka, 2024", month: "Mar", note: "touching grass", tags: ["film", "pentaxespio"] },

  { image: "assets/art/secret-santa-2023.jpg", ratio: 1.5, crop: 1.4, focus: "50% 45%", height: 0.22, nudge: -0.03, space: 0.11,
    place: "2023", month: "Dec", note: "secret santa", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/hyde-park-1.jpg", ratio: 1.5, crop: 1.35, focus: "40% 45%", height: 0.21, stack: true, shift: 0.035,
    more: [{ image: "assets/art/hyde-park-2.jpg", ratio: 1.5 }, { image: "assets/art/hyde-park-3.jpg", ratio: 1.5 }],
    place: "London, 2023", month: "Dec", note: "Hyde park with some friends", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/borough-market-1.jpg", ratio: 1.5, crop: 1.3, focus: "50% 45%", height: 0.28, nudge: 0.08, space: 0.11,
    more: [{ image: "assets/art/borough-market-2.jpg", ratio: 1.5 }, { image: "assets/art/borough-market-3.jpg", ratio: 1.5 }, { image: "assets/art/borough-market-4.jpg", ratio: 1.5 }],
    place: "London, 2023", month: "Dec", note: "borough market baes", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/jeju-1.jpg", ratio: 1.5, crop: 1.4, focus: "50% 50%", height: 0.28, nudge: 0.07, space: 0.11,
    more: [{ image: "assets/art/jeju-2.jpg", ratio: 0.6667 }],
    place: "Jeju, 2023", month: "Oct", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/seoul-autumn-1.jpg", ratio: 0.6667, crop: 0.75, focus: "50% 55%", height: 0.46, nudge: -0.06, space: 0.11,
    more: [{ image: "assets/art/seoul-autumn-2.jpg", ratio: 1.5 }, { image: "assets/art/seoul-autumn-3.jpg", ratio: 1.5 }],
    place: "Seoul, 2023", month: "Oct", note: "autumn in seoul", tags: ["xrickie", "ricohgriii"] },

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

  { image: "assets/art/blue-house-1.jpg", ratio: 0.6667, crop: 0.75, focus: "50% 45%", height: 0.44, nudge: 0.07, space: 0.11,
    more: [{ image: "assets/art/blue-house-2.jpg", ratio: 0.6667 }, { image: "assets/art/blue-house-3.jpg", ratio: 0.6667 }, { image: "assets/art/blue-house-4.jpg", ratio: 0.6667 }],
    place: "2023", month: "Jun", note: "blue house check", tags: ["xrickie", "ricohgriii"] },

  { image: "assets/art/surfing.jpg",       ratio: 0.6667, crop: 0.80, focus: "40% 55%", height: 0.46, nudge: 0.08, space: 0.11,
    place: "Wakesurfing, 2023" },

  { image: "assets/art/hike-hangs-1.jpg", ratio: 1.5088, crop: 1.4, focus: "45% 55%", height: 0.23, nudge: 0.04, space: 0.11,
    more: [{ image: "assets/art/hike-hangs-2.jpg", ratio: 1.5088 }],
    place: "2023", note: "hike and hangs", tags: ["film", "pentaxespio"] },

  { image: "assets/art/cutie-pals.jpg", ratio: 1.5088, crop: 1.4, focus: "40% 55%", height: 0.20, stack: true, shift: 0.035,
    place: "2023", note: "cutie pals", tags: ["film", "pentaxespio"] },

  { image: "assets/art/we-be-exploring-1.jpg", ratio: 1.5088, crop: 1.35, focus: "50% 55%", height: 0.27, nudge: -0.07, space: 0.11,
    more: [{ image: "assets/art/we-be-exploring-2.jpg", ratio: 1.5088 }],
    place: "2023", note: "we be exploring", tags: ["film", "pentaxespio"] },

  { image: "assets/art/italy-dancers.jpg", ratio: 1.7822, crop: 1.25, focus: "52% 50%", height: 0.22, nudge: -0.07, space: 0.12,
    place: "Italy, 2023" },
  { image: "assets/art/italy-food.jpg",    ratio: 1.7822, crop: 1.50, focus: "30% 60%", height: 0.18, stack: true, shift: 0.045,
    place: "Italy, 2023" },

  { image: "assets/art/photobooth-ting-1.jpg", ratio: 0.6667, crop: 0.75, focus: "45% 35%", height: 0.44, nudge: -0.05, space: 0.11,
    more: [{ image: "assets/art/photobooth-ting-2.jpg", ratio: 0.6667 }],
    place: "2022", month: "Sep", note: "selfie time with ting", tags: ["photobooth"] },

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
