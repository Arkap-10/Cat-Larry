export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

export interface Product {
  id: string;
  description: string;
  finish: string;
  categorySlug: string;
  imageUrl: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Risers",
    slug: "risers",
    description: "Elegant risers for enhanced presentation",
  },
  {
    id: 2,
    name: "Cereal Range",
    slug: "cereal-range",
    description: "Premium cereal serving solutions",
  },
  {
    id: 3,
    name: "Goose Holloware",
    slug: "goose-holloware",
    description: "Classic goose holloware collection",
  },
  {
    id: 4,
    name: "Hinge Marmite",
    slug: "hinge-marmite",
    description: "Sophisticated hinge marmite designs",
  },
  {
    id: 5,
    name: "King Holloware",
    slug: "king-holloware",
    description: "Luxury king holloware selection",
  },
  {
    id: 6,
    name: "Premium 2 QT Lift Off Chafer",
    slug: "premium-2qt-chafer",
    description: "Professional 2 QT capacity lift off chafers",
  },
  {
    id: 7,
    name: "Premium 4 QT Lift Off Chafer",
    slug: "premium-4qt-chafer",
    description: "Professional 4 QT capacity lift off chafers",
  },
  {
    id: 8,
    name: "Premium 4.5 QT Oval Lift Off Chafer",
    slug: "premium-45qt-oval-chafer",
    description: "Premium oval lift off chafers with 4.5 QT capacity",
  },
  {
    id: 9,
    name: "Roll Top Chafers",
    slug: "roll-top-chafers",
    description: "Elegant roll top chafer collection",
  },
  {
    id: 10,
    name: "Teflon Servers",
    slug: "teflon-servers",
    description: "High-quality teflon serving solutions",
  },
];

export const products: Product[] = [
  {
    id: "SR060624SS",
    description: "SKARET SQUARE RISER 6 X6 X24.5'' SS",
    finish: "Mirror Polish",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/fLKmQcM2/SR06024-SS.jpg",
  },
  {
    id: "SR060612SS",
    description: "SKARET SQUARE RISER 6 X6 X12.5'' SS",
    finish: "Mirror Polish",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/MK0qY9Kj/SR06012-SS.jpg",
  },
  {
    id: "SR141409SS",
    description: "SKARET SQUARE RISER 14 X 14 X 9'' SS",
    finish: "Mirror Polish",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/xCkzZc6h/SR141409-SS.jpg",
  },
  {
    id: "SR141407SS",
    description: "SKARET SQUARE RISER 14 X 14 X 7'' SS",
    finish: "Mirror Polish",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/151vpQts/SR141405-SS.jpg",
  },
  {
    id: "SR141405SS",
    description: "SKARET SQUARE RISER 14 X 14 X 5'' SS",
    finish: "Mirror Polish",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/151vpQts/SR141405-SS.jpg",
  },
  {
    id: "SR060624TB",
    description: "SKARET SQUARE RISER 6 X6 X24.5'' TEFLON BLACK",
    finish: "Black teflon",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/yNF7fBKB/SR060624-TB.jpg",
  },
  {
    id: "SR060612TB",
    description: "SKARET SQUARE RISER 6 X6 X12.5'' TEFLON BLACK",
    finish: "Black teflon",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/jq4MQ1Jf/SRHX070712-TB.jpg",
  },
  {
    id: "SR141409TB",
    description: "SKARET SQUARE RISER 14 X 14 X 9'' TEFLON BLACK",
    finish: "Black teflon",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/kXFD5xzq/SRHX101009-TB.jpg",
  },
  {
    id: "SR141407TB",
    description: "SKARET SQUARE RISER 14 X 14 X 7'' TEFLON BLACK",
    finish: "Black teflon",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/CLmYtJ9B/SRHX101007-TB.jpg",
  },
  {
    id: "SR141405TB",
    description: "SKARET SQUARE RISER 14 X 14 X 5'' TEFLON BLACK",
    finish: "Black teflon",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/023XbwwX/SR141405-TB.jpg",
  },
  {
    id: "SRHX070724TB",
    description: "HEXAGON  RISER 7 X 7 X24.5'' TEFLON BLACK",
    finish: "Black teflon",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/NM5r95Tb/SRHX070724-TB.jpg",
  },
  {
    id: "SRHX070712TB",
    description: "HEXAGON  RISER 7 X 7 X 12.5'' TEFLON BLACK",
    finish: "Black teflon",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/jq4MQ1Jf/SRHX070712-TB.jpg",
  },
  {
    id: "SRHX101009TB",
    description: "HEXAGON  RISER 10.5 X 10.5 X 9.5'' TEFLON BLACK",
    finish: "Black teflon",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/kXFD5xzq/SRHX101009-TB.jpg",
  },
  {
    id: "SRHX101007TB",
    description: "HEXAGON  RISER 10.5 X 10.5 X 7.5'' TEFLON BLACK",
    finish: "Black teflon",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/CLmYtJ9B/SRHX101007-TB.jpg",
  },
  {
    id: "SRHX101006TB",
    description: "HEXAGON  RISER 10.5 X 10.5 X 6'' TEFLON BLACK",
    finish: "Black teflon",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/kXzVzn0t/SRHX101006-TB.jpg",
  },
  {
    id: "DS4TSS",
    description: "SKARET DISPLAY STAND 12 SHELVES  31.5'' X 15''X 28.5'' SS",
    finish: "Standalone",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/9XSFFLJ6/DS4TSS.jpg",
  },
  {
    id: "DS3TSS",
    description: "SKARET DISPLAY STAND 3 TIER 24'' X 9'' X 20'' SS",
    finish: "Standalone",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/Njb0YBV4/DR3TSS.jpg",
  },
  {
    id: "DSST04",
    description: "SKARET DISPLAY STOOL SET OF 4",
    finish: "Standalone",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/15QRq81B/DSST04.jpg",
  },
];
