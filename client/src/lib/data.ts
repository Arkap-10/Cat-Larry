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
  features?: string[];
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
  {
    id: "CD-REV-3",
    description: "CEREAL DISPENSER REVOLVING 3 STATIONS SS",
    finish: "MIRROR POLISH STAINLESS STEEL",
    categorySlug: "cereal-range",
    imageUrl: "https://i.postimg.cc/76QYpckK/3-CDRV3-S35-SS.jpg",
    features: [
      "REVOLVING CEREAL DISPENSER",
      "CAPACITY 3.5 LITERS EACH CONTAINER ( 3.5 L X 3 )",
      "FREE & EASY POURING OF PORTIONS",
      "SUITABLE FOR CEREALS, RICE, WHEAT,CANDY, NUTS & MANY MORE",
      "MATERIALS : STAINLESS STEEL BASE / COVER & POLYCARBONATE CONTAINER",
      "OVER ALL PRODUCT DIMENSIONS: 38 X 36 X 69 CM",
      "POLYCARBONATE CONTAINER DIMENSION :12 X 12 X 38 CM",
      "SPARE PARTS ARE AVAILABLE FOR THIS DISPENSER",
    ],
  },
  {
    id: "CD-2S",
    description: "CEREAL DISPENSER 2 STATIONS SS",
    finish: "MIRROR POLISH STAINLESS STEEL",
    categorySlug: "cereal-range",
    imageUrl: "https://i.postimg.cc/xjhLmpzG/3-CD2-S35-SS.jpg",
    features: [
      "CAPACITY 3.5 LITERS EACH CONTAINER ( 3.5 L X 2 )",
      "FREE & EASY POURING OF PORTIONS",
      "SUITABLE FOR CEREALS, RICE, WHEAT,CANDY, NUTS & MANY MORE",
      "MATERIALS : STAINLESS STEEL BASE / COVER & POLYCARBONATE CONTAINER",
      "OVER ALL PRODUCT DIMENSIONS: 38 X 36 X 69 CM",
      "POLYCARBONATE CONTAINER DIMENSION : 12 X 12 X 38 CM",
      "SPARE PARTS ARE AVAILABLE FOR THIS DISPENSER",
    ],
  },
  {
    id: "CD-3S",
    description: "CEREAL DISPENSER 3 STATIONS SS",
    finish: "MIRROR POLISH STAINLESS STEEL",
    categorySlug: "cereal-range",
    imageUrl: "https://i.postimg.cc/Bvb5WjPs/3-CD3-S35-SS.jpg",
    features: [
      "CAPACITY 3.5 LITERS EACH CONTAINER ( 3.5 L X 3 )",
      "FREE & EASY POURING OF PORTIONS",
      "SUITABLE FOR CEREALS, RICE, WHEAT,CANDY, NUTS & MANY MORE",
      "MATERIALS : STAINLESS STEEL BASE / COVER & POLYCARBONATE CONTAINER",
      "OVER ALL PRODUCT DIMENSIONS : 48 X 31 X 69 CM",
      "POLYCARBONATE CONTAINER DIMENSION : 12 X 12 X 38 CM",
      "SPARE PARTS ARE AVAILABLE FOR THIS DISPENSER",
    ],
  },
  {
    id: "CD-4S",
    description: "CEREAL DISPENSER 4 STATIONS SS",
    finish: "MIRROR POLISH STAINLESS STEEL",
    categorySlug: "cereal-range",
    imageUrl: "https://i.postimg.cc/yxy33K3v/3-CD4-S35-SS.jpg",
    features: [
      "CAPACITY 3.5 LITERS EACH CONTAINER ( 3.5 L X 4 )",
      "FREE & EASY POURING OF PORTIONS",
      "SUITABLE FOR CEREALS, RICE, WHEAT,CANDY, NUTS & MANY MORE",
      "MATERIALS : STAINLESS STEEL BASE / COVER & POLYCARBONATE CONTAINER",
      "OVER ALL PRODUCT DIMENSIONS:  68 X 32 X 69 CM",
      "POLYCARBONATE CONTAINER DIMENSION : 12 X 12 X 38 CM",
      "SPARE PARTS ARE AVAILABLE FOR THIS DISPENSER",
    ],
  },
  {
    id: "JD-7QT",
    description: "JUICE DISPENSER 7 QT SS",
    finish: "MIRROR POLISH STAINLESS STEEL",
    categorySlug: "cereal-range",
    imageUrl: "https://i.postimg.cc/CLtSCtCN/3JD7QTSS.jpg",
    features: ["Many Features"],
  },
  {
    id: "GWP-64-G",
    description: "GOOSE WATER PITCHER 64 OZ GOLD",
    finish: "PVD GOLD",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/ZqLGyfDS/51WP64PG.jpg"
  },
  {
    id: "GCP-64-G",
    description: "GOOSE COFFEE POT 64 OZ GOLD",
    finish: "PVD GOLD",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/CM8WGL27/51CP64PG.jpg"
  },
  {
    id: "GC-8-G",
    description: "GOOSE CREAMER 8 OZ GOLD",
    finish: "PVD GOLD",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/vBYcWNYL/51CR08PG.jpg"
  },
  {
    id: "GSB-8-G",
    description: "GOOSE SUGAR BOWL 8 OZ GOLD",
    finish: "PVD GOLD",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/V62v3L94/51SB08PG.jpg"
  },
  {
    id: "GWP-64-SS",
    description: "GOOSE WATER PITCHER 64 OZ SS",
    finish: "MIRROR POLISH SS",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/90t2JWLD/51WP64SS.jpg"
  },
  {
    id: "GCP-64-SS",
    description: "GOOSE COFFEE POT 64 OZ SS",
    finish: "MIRROR POLISH SS",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/zGyMfzTT/51CP64SS.jpg"
  },
  {
    id: "GC-8-SS",
    description: "GOOSE CREAMER 8 OZ SS",
    finish: "MIRROR POLISH SS",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/66DzhrZ4/51CR08SS.jpg"
  },
  {
    id: "GSB-8-SS",
    description: "GOOSE SUGAR BOWL 8 OZ SS",
    finish: "MIRROR POLISH SS",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/GmBL1125/51SB08SS.jpg"
  },
  {
    id: "HM-6QT",
    description: "6 QT ROUND FULL GLASS COVER HINGE MARMITE SS",
    finish: "SS MIRROR POLISH",
    categorySlug: "hinge-marmite",
    imageUrl: "https://i.postimg.cc/JzzjjxxL/1HMGC6QT.jpg",
    features: [
      "FULL GLASS COVER",
      "CONDENSATE CATCH RETRIEVAL SYSTEM",
      "BALANCED HINGE MECHANIZM WHICH ENABLES",
      "SMOOTH OPENING / CLOSING OF THE COVER &",
      "THE COVER STOPS AT ANY POSITION WHERE EVER LEFT",
      "CAPACITY  6 QT"
    ]
  },
  {
    id: "HM-11QT",
    description: "11 QT ROUND FULL GLASS COVER HINGE MARMITE SS",
    finish: "SS MIRROR POLISH",
    categorySlug: "hinge-marmite",
    imageUrl: "https://i.postimg.cc/Yq9S3s5b/1-HMGC11-QT.jpg",
    features: [
      "FULL GLASS COVER",
      "CONDENSATE CATCH RETRIEVAL SYSTEM",
      "BALANCED HINGE MECHANIZM WHICH ENABLES",
      "SMOOTH OPENING / CLOSING OF THE COVER &",
      "THE COVER STOPS AT ANY POSITION WHERE EVER LEFT",
      "CAPACITY  11  QT"
    ]
  }
];