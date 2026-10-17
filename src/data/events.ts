
export type YouthFundedEvent = {
  slug: string;
  title: string;
  image: string;
  date: string;
  place: string;
  description: string;
  details: string[];
};

export const events: YouthFundedEvent[] = [
  {
    slug: "wwf-youthfunded",
    title: "WWF X YouthFunded X Chicco Jerikho",
    image: "/event1-doc1.jpg",
    date: "August 2026 — October 2026",
    place: "Taman Nasional Way Kambas & WWF Jakarta Office",
    description:
      "A throwback to our fundraiser collaboration with @tusk_force and WWF! Thanks to everyone who supported us through drinks and custom tees.",
    details: [
      "YouthFunded collaborated on a fundraising initiative supporting elephant conservation in Indonesia.",
      "The campaign raised Rp 10,000,000 to support the conservation cause.",
      "Thank you to everyone who supported and contributed to this initiative.",
    ],
  },

  // Template event baru event baru di bawah ini.
];
