
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
    date: "November 2025 — December 2026",
    place: "Taman Nasional Way Kambas & WWF Jakarta Office",
    description:
      "A throwback to our fundraiser collaboration with @tusk_force and WWF! Thanks to everyone who supported us through drinks and custom tees.",
    details: [
      "YouthFunded collaborated on a fundraising initiative supporting elephant conservation in Indonesia.",
      "The campaign raised Rp 10,000,000 to support the conservation cause.",
      "Thank you to everyone who supported and contributed to this initiative.",
    ],
  },

  {
    slug: "workshop-visit-maria-imaculata-orphanage",
    title: "Workshop Visit: Maria Imaculata Orphanage",
    image: "/event2-doc1.jpg",
    date: "October 24, 2026",
    place: "Maria Imaculata Orphanage, Bekasi",
    description:
      "We recently visited Panti Asuhan Maria Imaculata Bekasi for a fun and meaningful day of learning and sharing! 💡✨",
    details: [
      "During our workshop, we introduced the children to basic financial concepts, including:",
      "💳 Understanding debt and how it works",
      "⚠️ Learning about the risks of Buy Now, Pay Later (BNPL) services",
      "🧠 Making smarter and more responsible financial decisions",
      "We also spent time playing games, sharing gifts, and distributing meals 🎮🎁🍱",
      "A big thank you to our partners, Evermos, Inifa, and PT Sinar Inti Maju, for supporting this visit!",
      "Through initiatives like this, we hope to spread financial awareness and help build a more financially literate generation 🌱",
    ],
  },

  // Add new events below this line.
];
