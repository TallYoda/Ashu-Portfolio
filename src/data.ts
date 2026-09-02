export type Category = "figurative" | "nonfigurative";

export type Work = {
  id: string;
  title: string;
  medium: string;
  size: string;
  year?: string;
  src: string;
  alt: string;
  category: Category;
  availability?: "sold" | "available";
  availabilityNote?: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  images: { src: string; alt: string }[];
};

export const works: Work[] = [
  {
    id: "portrait-of-native",
    title: "A Portrait of Native",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "60 × 40 cm",
    src: "/works/portrait-of-native.jpg",
    alt: "Hide mosaic portrait of a bearded man wearing a striped beanie",
    category: "figurative",
    availability: "sold",
  },
  {
    id: "portrait-of-native-acrylic",
    title: "A Portrait of Native",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ) and acrylic on canvas",
    size: "80 × 60 cm",
    src: "/works/portrait-of-native-acrylic.jpg",
    alt: "Hide mosaic portrait of a man against a light acrylic ground",
    category: "figurative",
  },
  {
    id: "hands-of-native",
    title: "A Hands of Native",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "60 × 60 cm",
    src: "/works/hands.jpg",
    alt: "Hide mosaic of two hands reaching toward each other",
    category: "figurative",
  },
  {
    id: "leg-of-native",
    title: "A Leg of Native",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "60 × 60 cm",
    src: "/works/feet.jpg",
    alt: "Hide mosaic of two crossed feet",
    category: "figurative",
  },
  {
    id: "portrait-profile",
    title: "Portrait",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ) and acrylic on canvas",
    size: "Studio photograph",
    src: "/works/portrait-profile.jpg",
    alt: "Hide mosaic profile portrait against a muted ground",
    category: "figurative",
  },
  {
    id: "monumental-person",
    title: "A Portrait of Monumental Person",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "80 × 60 cm",
    src: "/works/portrait-of-monumental-person.jpg",
    alt: "Hide mosaic portrait of a monumental figure",
    category: "figurative",
  },
  {
    id: "unwritten-history-1",
    title: "Unwritten History I",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "60 × 40 cm",
    src: "/works/unwritten-history-01.jpg",
    alt: "First work in the Unwritten History series",
    category: "figurative",
    availability: "sold",
  },
  {
    id: "unwritten-history-2",
    title: "Unwritten History II",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "60 × 40 cm",
    src: "/works/unwritten-history-02.jpg",
    alt: "Second work in the Unwritten History series",
    category: "figurative",
  },
  {
    id: "unwritten-history-3",
    title: "Unwritten History III",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "60 × 40 cm",
    src: "/works/unwritten-history-03.jpg",
    alt: "Third work in the Unwritten History series",
    category: "figurative",
  },
  {
    id: "native-knowledge",
    title: "Native Knowledge",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "30 × 40 cm each / 90 × 120 cm",
    src: "/works/native-knowledge.jpg",
    alt: "Grid of African-inspired hide mosaic masks",
    category: "figurative",
    availability: "available",
    availabilityNote: "4 available",
  },
  {
    id: "african-masks",
    title: "Native Knowledge",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "Panel group",
    src: "/works/african-masks.jpg",
    alt: "Four hide mosaic masks from the Native Knowledge series",
    category: "figurative",
    availability: "available",
    availabilityNote: "2 available",
  },
  {
    id: "self-portrait-2023",
    title: "Self Portrait",
    medium: "Mixed media (oil on canvas, collage and water color)",
    size: "120 × 90 cm",
    year: "2023",
    src: "/works/self-portrait-2023.jpg",
    alt: "Mixed-media self portrait with grayscale face and colorful architectural blocks",
    category: "figurative",
  },
  {
    id: "contradiction-120",
    title: "A Contradiction of Native and Contemporary Architecture",
    medium: "Mixed media (oil on canvas, collage and water color)",
    size: "120 × 100 cm",
    year: "2023",
    src: "/works/contradiction-120.jpg",
    alt: "Grayscale profile portrait against colorful architectural collage",
    category: "figurative",
  },
  {
    id: "contradiction-couple",
    title: "A Contradiction of Native and Contemporary Architecture",
    medium: "Mixed media (oil on canvas, collage and water color)",
    size: "90 × 70 cm",
    year: "2023",
    src: "/works/contradiction-couple.jpg",
    alt: "Grayscale portraits of a man and a woman among colorful architectural blocks",
    category: "figurative",
  },
  {
    id: "contradiction-cap",
    title: "A Contradiction of Native and Contemporary Architecture",
    medium: "Mixed media (oil on canvas, collage and water color)",
    size: "90 × 70 cm",
    year: "2023",
    src: "/works/contradiction-cap.jpg",
    alt: "Grayscale portrait of a man in a cap beside a colorful geometric field",
    category: "figurative",
  },
  {
    id: "monumental-city",
    title: "Monumental City",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "120 × 90 cm",
    src: "/works/monumental-city.jpg",
    alt: "Hide mosaic cityscape built from rectangular patches of cowhide",
    category: "nonfigurative",
  },
  {
    id: "native-contemporary",
    title: "Native and Contemporary Ethiopian Architecture",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "80 × 60 cm",
    src: "/works/native-contemporary-architecture.jpg",
    alt: "Hide mosaic exploring native and contemporary Ethiopian architecture",
    category: "nonfigurative",
    availability: "sold",
  },
  {
    id: "city-of-monuments",
    title: "City of Monuments",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "120 × 90 cm",
    src: "/works/city-of-monuments.jpg",
    alt: "Geometric hide mosaic of a monumental city skyline",
    category: "nonfigurative",
  },
  {
    id: "unconscious-urban-sprawl",
    title: "Unconscious Urban Sprawl",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "120 × 120 cm",
    src: "/works/unconscious-urban-sprawl.jpg",
    alt: "Grid-based hide mosaic recalling urban expansion",
    category: "nonfigurative",
  },
  {
    id: "impression-addis",
    title: "The Impression of Addis Ababa House",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "70 × 50 cm",
    src: "/works/impression-addis-ababa-house.jpg",
    alt: "Hide mosaic impression of a house in Addis Ababa",
    category: "nonfigurative",
  },
  {
    id: "floating-city",
    title: "The Floating City",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "90 × 70 cm",
    src: "/works/floating-city.jpg",
    alt: "Hide mosaic of a floating city in plan and elevation",
    category: "nonfigurative",
  },
  {
    id: "untitled-hide",
    title: "Untitled",
    medium: "Hide on canvas (ቆዳ በ ሸራ ላይ)",
    size: "90 × 70 cm",
    src: "/works/untitled.jpg",
    alt: "Untitled hide on canvas composition",
    category: "nonfigurative",
    availability: "sold",
  },
  {
    id: "concealment",
    title: "Concealment of Monuments",
    medium: "Mixed media — hide on canvas and iron",
    size: "120 × 120 cm",
    src: "/works/concealment-of-monuments.jpg",
    alt: "Mixed-media hide and iron work with crossed slats over a hide collage",
    category: "nonfigurative",
    availability: "available",
    availabilityNote: "Unsold",
  },
  {
    id: "section-of-city",
    title: "A Section of City",
    medium: "Mixed media (oil on canvas, collage and water color)",
    size: "120 × 100 cm",
    year: "2023",
    src: "/works/section-of-city.jpg",
    alt: "Colorful mixed-media city section over architectural drawings",
    category: "nonfigurative",
  },
  {
    id: "untitled-mixed-2023",
    title: "Untitled",
    medium: "Mixed media (oil on canvas, collage and water color)",
    size: "120 × 90 cm",
    year: "2023",
    src: "/works/untitled-mixed-2023.jpg",
    alt: "Four-panel mixed-media composition of color blocks and collage",
    category: "nonfigurative",
  },
];

export const projects: Project[] = [
  {
    id: "peacock-park",
    title: "Peacock Park Mosaic Art",
    year: "2026",
    images: [
      {
        src: "/projects/peacock-park.jpg",
        alt: "Large mosaic mural of a peacock at Peacock Park",
      },
    ],
  },
  {
    id: "mahmoud-ahmed",
    title: "Mahmoud Ahmed Figure Mosaic Art",
    year: "2025",
    images: [
      {
        src: "/projects/mahmoud-ahmed.jpg",
        alt: "Mosaic mural of Mahmoud Ahmed with dove, flowers, and Amharic text",
      },
    ],
  },
  {
    id: "kechena",
    title: "Kechena Mosaic Art",
    year: "2025",
    images: [
      {
        src: "/projects/kechena.jpg",
        alt: "Long curved mosaic mural at Kechena",
      },
    ],
  },
  {
    id: "ghion-hotel",
    title: "Ghion Hotel Mosaic Art",
    year: "2025",
    images: [
      {
        src: "/projects/ghion-hotel.jpg",
        alt: "Mosaic wall in progress near Ghion Hotel with the city skyline beyond",
      },
    ],
  },
  {
    id: "afinchober",
    title: "AfinchoBer Mosaic Art",
    year: "2025",
    images: [
      {
        src: "/projects/afinchober-01.jpg",
        alt: "AfinchoBer mosaic mural with pottery and geometric forms",
      },
      {
        src: "/projects/afinchober-02.jpg",
        alt: "AfinchoBer mosaic mural in progress with scaffolding",
      },
      {
        src: "/projects/afinchober-03.jpg",
        alt: "AfinchoBer mosaic wall with red, purple, and geometric patterning",
      },
    ],
  },
];

export const exhibitions = [
  {
    title: "Exhibition, Fendika Cultural Center",
    year: "2023",
    images: [
      {
        src: "/exhibitions/fendika-01.jpg",
        alt: "Installation view at Fendika Cultural Center, 2023",
      },
      {
        src: "/exhibitions/fendika-02.jpg",
        alt: "Gallery wall at Fendika Cultural Center, 2023",
      },
    ],
  },
];

export const influences = [
  "Piet Mondrian",
  "Addis Gezahegne",
  "Robel Temesgen",
  "Ermias Ekube",
  "Dawit Abebe",
];
