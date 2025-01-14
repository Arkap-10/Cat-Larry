export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  categorySlug: string;
  finish?: string;
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
    name: "SKARET SQUARE RISER 6 X6 X24.5'' SS",
    description: "SKARET SQUARE RISER 6 X6 X24.5'' SS",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/fLKmQcM2/SR06024-SS.jpg",
    finish: "Mirror Polish"
  },
  {
    id: "SR060612SS",
    name: "SKARET SQUARE RISER 6 X6 X12.5'' SS",
    description: "SKARET SQUARE RISER 6 X6 X12.5'' SS",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/MK0qY9Kj/SR06012-SS.jpg",
    finish: "Mirror Polish"
  },
  {
    id: "SR141409SS",
    name: "SKARET SQUARE RISER 14 X 14 X 9'' SS",
    description: "SKARET SQUARE RISER 14 X 14 X 9'' SS",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/xCkzZc6h/SR141409-SS.jpg",
    finish: "Mirror Polish"
  },
  {
    id: "SR141407SS",
    name: "SKARET SQUARE RISER 14 X 14 X 7'' SS",
    description: "SKARET SQUARE RISER 14 X 14 X 7'' SS",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/151vpQts/SR141405-SS.jpg",
    finish: "Mirror Polish"
  },
  {
    id: "SR141405SS",
    name: "SKARET SQUARE RISER 14 X 14 X 5'' SS",
    description: "SKARET SQUARE RISER 14 X 14 X 5'' SS",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/151vpQts/SR141405-SS.jpg",
    finish: "Mirror Polish"
  },
  {
    id: "SR060624TB",
    name: "SKARET SQUARE RISER 6 X6 X24.5'' TEFLON BLACK",
    description: "SKARET SQUARE RISER 6 X6 X24.5'' TEFLON BLACK",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/yNF7fBKB/SR060624-TB.jpg",
    finish: "Black teflon"
  },
  {
    id: "SR060612TB",
    name: "SKARET SQUARE RISER 6 X6 X12.5'' TEFLON BLACK",
    description: "SKARET SQUARE RISER 6 X6 X12.5'' TEFLON BLACK",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/jq4MQ1Jf/SRHX070712-TB.jpg",
    finish: "Black teflon"
  },
  {
    id: "SR141409TB",
    name: "SKARET SQUARE RISER 14 X 14 X 9'' TEFLON BLACK",
    description: "SKARET SQUARE RISER 14 X 14 X 9'' TEFLON BLACK",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/kXFD5xzq/SRHX101009-TB.jpg",
    finish: "Black teflon"
  },
  {
    id: "SR141407TB",
    name: "SKARET SQUARE RISER 14 X 14 X 7'' TEFLON BLACK",
    description: "SKARET SQUARE RISER 14 X 14 X 7'' TEFLON BLACK",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/CLmYtJ9B/SRHX101007-TB.jpg",
    finish: "Black teflon"
  },
  {
    id: "SR141405TB",
    name: "SKARET SQUARE RISER 14 X 14 X 5'' TEFLON BLACK",
    description: "SKARET SQUARE RISER 14 X 14 X 5'' TEFLON BLACK",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/023XbwwX/SR141405-TB.jpg",
    finish: "Black teflon"
  },
  {
    id: "SRHX070724TB",
    name: "HEXAGON  RISER 7 X 7 X24.5'' TEFLON BLACK",
    description: "HEXAGON  RISER 7 X 7 X24.5'' TEFLON BLACK",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/NM5r95Tb/SRHX070724-TB.jpg",
    finish: "Black teflon"
  },
  {
    id: "SRHX070712TB",
    name: "HEXAGON  RISER 7 X 7 X 12.5'' TEFLON BLACK",
    description: "HEXAGON  RISER 7 X 7 X 12.5'' TEFLON BLACK",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/jq4MQ1Jf/SRHX070712-TB.jpg",
    finish: "Black teflon"
  },
  {
    id: "SRHX101009TB",
    name: "HEXAGON  RISER 10.5 X 10.5 X 9.5'' TEFLON BLACK",
    description: "HEXAGON  RISER 10.5 X 10.5 X 9.5'' TEFLON BLACK",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/kXFD5xzq/SRHX101009-TB.jpg",
    finish: "Black teflon"
  },
  {
    id: "SRHX101007TB",
    name: "HEXAGON  RISER 10.5 X 10.5 X 7.5'' TEFLON BLACK",
    description: "HEXAGON  RISER 10.5 X 10.5 X 7.5'' TEFLON BLACK",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/CLmYtJ9B/SRHX101007-TB.jpg",
    finish: "Black teflon"
  },
  {
    id: "SRHX101006TB",
    name: "HEXAGON  RISER 10.5 X 10.5 X 6'' TEFLON BLACK",
    description: "HEXAGON  RISER 10.5 X 10.5 X 6'' TEFLON BLACK",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/kXzVzn0t/SRHX101006-TB.jpg",
    finish: "Black teflon"
  },
  {
    id: "DS4TSS",
    name: "SKARET DISPLAY STAND 12 SHELVES  31.5'' X 15''X 28.5'' SS",
    description: "SKARET DISPLAY STAND 12 SHELVES  31.5'' X 15''X 28.5'' SS",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/9XSFFLJ6/DS4TSS.jpg",
    finish: "Standalone"
  },
  {
    id: "DS3TSS",
    name: "SKARET DISPLAY STAND 3 TIER 24'' X 9'' X 20'' SS",
    description: "SKARET DISPLAY STAND 3 TIER 24'' X 9'' X 20'' SS",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/Njb0YBV4/DR3TSS.jpg",
    finish: "Standalone"
  },
  {
    id: "DSST04",
    name: "SKARET DISPLAY STOOL SET OF 4",
    description: "SKARET DISPLAY STOOL SET OF 4",
    price: "",
    categorySlug: "risers",
    imageUrl: "https://i.postimg.cc/15QRq81B/DSST04.jpg",
    finish: "Standalone"
  },
  {
    id: "CD-REV-3",
    name: "CEREAL DISPENSER REVOLVING 3 STATIONS SS",
    description: "CEREAL DISPENSER REVOLVING 3 STATIONS SS",
    price: "",
    categorySlug: "cereal-range",
    imageUrl: "https://i.postimg.cc/76QYpckK/3-CDRV3-S35-SS.jpg",
    finish: "MIRROR POLISH STAINLESS STEEL",
    features: [
      "REVOLVING CEREAL DISPENSER",
      "CAPACITY 3.5 LITERS EACH CONTAINER ( 3.5 L X 3 )",
      "FREE & EASY POURING OF PORTIONS",
      "SUITABLE FOR CEREALS, RICE, WHEAT,CANDY, NUTS & MANY MORE",
      "MATERIALS : STAINLESS STEEL BASE / COVER & POLYCARBONATE CONTAINER",
      "OVER ALL PRODUCT DIMENSIONS: 38 X 36 X 69 CM",
      "POLYCARBONATE CONTAINER DIMENSION :12 X 12 X 38 CM",
      "SPARE PARTS ARE AVAILABLE FOR THIS DISPENSER",
    ]
  },
  {
    id: "CD-2S",
    name: "CEREAL DISPENSER 2 STATIONS SS",
    description: "CEREAL DISPENSER 2 STATIONS SS",
    price: "",
    categorySlug: "cereal-range",
    imageUrl: "https://i.postimg.cc/xjhLmpzG/3-CD2-S35-SS.jpg",
    finish: "MIRROR POLISH STAINLESS STEEL",
    features: [
      "CAPACITY 3.5 LITERS EACH CONTAINER ( 3.5 L X 2 )",
      "FREE & EASY POURING OF PORTIONS",
      "SUITABLE FOR CEREALS, RICE, WHEAT,CANDY, NUTS & MANY MORE",
      "MATERIALS : STAINLESS STEEL BASE / COVER & POLYCARBONATE CONTAINER",
      "OVER ALL PRODUCT DIMENSIONS: 38 X 36 X 69 CM",
      "POLYCARBONATE CONTAINER DIMENSION : 12 X 12 X 38 CM",
      "SPARE PARTS ARE AVAILABLE FOR THIS DISPENSER",
    ]
  },
  {
    id: "CD-3S",
    name: "CEREAL DISPENSER 3 STATIONS SS",
    description: "CEREAL DISPENSER 3 STATIONS SS",
    price: "",
    categorySlug: "cereal-range",
    imageUrl: "https://i.postimg.cc/Bvb5WjPs/3-CD3-S35-SS.jpg",
    finish: "MIRROR POLISH STAINLESS STEEL",
    features: [
      "CAPACITY 3.5 LITERS EACH CONTAINER ( 3.5 L X 3 )",
      "FREE & EASY POURING OF PORTIONS",
      "SUITABLE FOR CEREALS, RICE, WHEAT,CANDY, NUTS & MANY MORE",
      "MATERIALS : STAINLESS STEEL BASE / COVER & POLYCARBONATE CONTAINER",
      "OVER ALL PRODUCT DIMENSIONS : 48 X 31 X 69 CM",
      "POLYCARBONATE CONTAINER DIMENSION : 12 X 12 X 38 CM",
      "SPARE PARTS ARE AVAILABLE FOR THIS DISPENSER",
    ]
  },
  {
    id: "CD-4S",
    name: "CEREAL DISPENSER 4 STATIONS SS",
    description: "CEREAL DISPENSER 4 STATIONS SS",
    price: "",
    categorySlug: "cereal-range",
    imageUrl: "https://i.postimg.cc/yxy33K3v/3-CD4-S35-SS.jpg",
    finish: "MIRROR POLISH STAINLESS STEEL",
    features: [
      "CAPACITY 3.5 LITERS EACH CONTAINER ( 3.5 L X 4 )",
      "FREE & EASY POURING OF PORTIONS",
      "SUITABLE FOR CEREALS, RICE, WHEAT,CANDY, NUTS & MANY MORE",
      "MATERIALS : STAINLESS STEEL BASE / COVER & POLYCARBONATE CONTAINER",
      "OVER ALL PRODUCT DIMENSIONS:  68 X 32 X 69 CM",
      "POLYCARBONATE CONTAINER DIMENSION : 12 X 12 X 38 CM",
      "SPARE PARTS ARE AVAILABLE FOR THIS DISPENSER",
    ]
  },
  {
    id: "JD-7QT",
    name: "JUICE DISPENSER 7 QT SS",
    description: "JUICE DISPENSER 7 QT SS",
    price: "",
    categorySlug: "cereal-range",
    imageUrl: "https://i.postimg.cc/CLtSCtCN/3JD7QTSS.jpg",
    finish: "MIRROR POLISH STAINLESS STEEL",
    features: ["Many Features"]
  },
  {
    id: "GWP-64-G",
    name: "GOOSE WATER PITCHER 64 OZ GOLD",
    description: "GOOSE WATER PITCHER 64 OZ GOLD",
    price: "",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/ZqLGyfDS/51WP64PG.jpg",
    finish: "PVD GOLD"
  },
  {
    id: "GCP-64-G",
    name: "GOOSE COFFEE POT 64 OZ GOLD",
    description: "GOOSE COFFEE POT 64 OZ GOLD",
    price: "",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/CM8WGL27/51CP64PG.jpg",
    finish: "PVD GOLD"
  },
  {
    id: "GC-8-G",
    name: "GOOSE CREAMER 8 OZ GOLD",
    description: "GOOSE CREAMER 8 OZ GOLD",
    price: "",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/vBYcWNYL/51CR08PG.jpg",
    finish: "PVD GOLD"
  },
  {
    id: "GSB-8-G",
    name: "GOOSE SUGAR BOWL 8 OZ GOLD",
    description: "GOOSE SUGAR BOWL 8 OZ GOLD",
    price: "",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/V62v3L94/51SB08PG.jpg",
    finish: "PVD GOLD"
  },
  {
    id: "GWP-64-SS",
    name: "GOOSE WATER PITCHER 64 OZ SS",
    description: "GOOSE WATER PITCHER 64 OZ SS",
    price: "",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/90t2JWLD/51WP64SS.jpg",
    finish: "MIRROR POLISH SS"
  },
  {
    id: "GCP-64-SS",
    name: "GOOSE COFFEE POT 64 OZ SS",
    description: "GOOSE COFFEE POT 64 OZ SS",
    price: "",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/zGyMfzTT/51CP64SS.jpg",
    finish: "MIRROR POLISH SS"
  },
  {
    id: "GC-8-SS",
    name: "GOOSE CREAMER 8 OZ SS",
    description: "GOOSE CREAMER 8 OZ SS",
    price: "",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/66DzhrZ4/51CR08SS.jpg",
    finish: "MIRROR POLISH SS"
  },
  {
    id: "GSB-8-SS",
    name: "GOOSE SUGAR BOWL 8 OZ SS",
    description: "GOOSE SUGAR BOWL 8 OZ SS",
    price: "",
    categorySlug: "goose-holloware",
    imageUrl: "https://i.postimg.cc/GmBL1125/51SB08SS.jpg",
    finish: "MIRROR POLISH SS"
  },
  {
    id: "HM-6QT",
    name: "6 QT ROUND FULL GLASS COVER HINGE MARMITE SS",
    description: "6 QT ROUND FULL GLASS COVER HINGE MARMITE SS",
    price: "",
    categorySlug: "hinge-marmite",
    imageUrl: "https://i.postimg.cc/JzzjjxxL/1HMGC6QT.jpg",
    finish: "SS MIRROR POLISH",
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
    name: "11 QT ROUND FULL GLASS COVER HINGE MARMITE SS",
    description: "11 QT ROUND FULL GLASS COVER HINGE MARMITE SS",
    price: "",
    categorySlug: "hinge-marmite",
    imageUrl: "https://i.postimg.cc/Yq9S3s5b/1-HMGC11-QT.jpg",
    finish: "SS MIRROR POLISH",
    features: [
      "FULL GLASS COVER",
      "CONDENSATE CATCH RETRIEVAL SYSTEM",
      "BALANCED HINGE MECHANIZM WHICH ENABLES",
      "SMOOTH OPENING / CLOSING OF THE COVER &",
      "THE COVER STOPS AT ANY POSITION WHERE EVER LEFT",
      "CAPACITY  11  QT"
    ]
  },
  {
    id: "KCP-64-SS",
    name: "KING COFFEE POT 64 OZ SS",
    description: "KING COFFEE POT 64 OZ SS",
    price: "",
    categorySlug: "king-holloware",
    imageUrl: "https://i.postimg.cc/XqNxQFKT/52CP64SS.jpg",
    finish: "MIRROR POLISH SS"
  },
  {
    id: "KWP-64-SS",
    name: "KING WATER PITCHER 64 OZ SS",
    description: "KING WATER PITCHER 64 OZ SS",
    price: "",
    categorySlug: "king-holloware",
    imageUrl: "https://i.postimg.cc/Qdc5KC15/52WP64SS.jpg",
    finish: "MIRROR POLISH SS"
  },
  {
    id: "KTP-16-SS",
    name: "KING TEA POT 16 OZ SS",
    description: "KING TEA POT 16 OZ SS",
    price: "",
    categorySlug: "king-holloware",
    imageUrl: "https://i.postimg.cc/8sQcTdyY/52TP16SS.jpg",
    finish: "MIRROR POLISH SS"
  },
  {
    id: "KSB-8-SS",
    name: "KING SUGAR BOWL 8 OZ SS",
    description: "KING SUGAR BOWL 8 OZ SS",
    price: "",
    categorySlug: "king-holloware",
    imageUrl: "https://i.postimg.cc/JhWFjsgW/52SB08SS.jpg",
    finish: "MIRROR POLISH SS"
  },
  {
    id: "KC-8-SS",
    name: "KING CREAMER 8 OZ SS",
    description: "KING CREAMER 8 OZ SS",
    price: "",
    categorySlug: "king-holloware",
    imageUrl: "https://i.postimg.cc/bvJmx1TW/52CR08SS.jpg",
    finish: "MIRROR POLISH SS"
  },
  {
    id: "KCP-64-G",
    name: "KING COFFEE POT 64 OZ GOLD",
    description: "KING COFFEE POT 64 OZ GOLD",
    price: "",
    categorySlug: "king-holloware",
    imageUrl: "https://i.postimg.cc/nLDDfzcM/52CP64PG.jpg",
    finish: "PVD GOLD"
  },
  {
    id: "KWP-64-G",
    name: "KING WATER PITCHER 64 OZ GOLD",
    description: "KING WATER PITCHER 64 OZ GOLD",
    price: "",
    categorySlug: "king-holloware",
    imageUrl: "https://i.postimg.cc/mrBsBpTM/52WP64PG.jpg",
    finish: "PVD GOLD"
  },
  {
    id: "KTP-16-G",
    name: "KING TEA POT 16 OZ GOLD",
    description: "KING TEA POT 16 OZ GOLD",
    price: "",
    categorySlug: "king-holloware",
    imageUrl: "https://i.postimg.cc/v8LSd8cP/52TP16PG.jpg",
    finish: "PVD GOLD"
  },
  {
    id: "KSB-8-G",
    name: "KING SUGAR BOWL 8 OZ GOLD",
    description: "KING SUGAR BOWL 8 OZ GOLD",
    price: "",
    categorySlug: "king-holloware",
    imageUrl: "https://i.postimg.cc/K4hZLGhp/52SB08PG.jpg",
    finish: "PVD GOLD"
  },
  {
    id: "KC-8-G",
    name: "KING CREAMER 8 OZ GOLD",
    description: "KING CREAMER 8 OZ GOLD",
    price: "",
    categorySlug: "king-holloware",
    imageUrl: "https://i.postimg.cc/NFDcy1bF/52CR08PG.jpg",
    finish: "PVD GOLD"
  },
  {
    id: "1L0PPRTB2Q",
    name: "2 QT Round Rose Gold Lift Off Induction / Grill Chafer",
    description: "2 QT ROUND ROSE GOLD LIFT OFF INDUCTION / GRILL CHAFER",
    price: "299.99",
    categorySlug: "premium-2qt-chafer",
    imageUrl: "/images/placeholder.jpg",
    finish: "KNOB, SIDE HANDLES PVD ROSE GOLD & WATER PAN & COVER BLACK TEXTURED TEFLON OUTER BODY MIRROR POLISH INSIDE WATER PAN, FOOD PAN & COVER",
    features: [
      "CAN BE USED ON INDUCTION & GRILL",
      "INCLUSSIVE WITH STANDARD FOOD PAN",
      "SIZES AVAILABLE 2 QT, 4QT, 6 QT & 4.5 QT OVAL CAPACITY",
      "AVAILABLE IN BLACK / WHITE TEFLON COATING & MIRROR POLISH SS",
      "AVAILABLE IN GOLD / ROSE GOLD KNOB & SIDE HANDLES + MIRROR POLISH SS"
    ]
  },
  {
    id: "1L0PFRPRTB2Q",
    name: "2 QT Round Rose Gold Lift Off with Fry Handle+ Induction / Grill Chafer",
    description: "2 QT ROUND ROSE GOLD LIFT OFF WITH FRY HANDLE+ INDUCTION / GRILL CHAFER",
    price: "329.99",
    categorySlug: "premium-2qt-chafer",
    imageUrl: "/images/placeholder.jpg",
    finish: "KNOB, FRY HANDLE, SIDE HANDLE PVD ROSE GOLD WATER PAN & COVER BLACK TEXTURED TEFLON OUTER BODY MIRROR POLISH INSIDE WATER PAN, FOOD PAN & COVER",
    features: [
      "CAN BE USED ON INDUCTION & GRILL",
      "INCLUSSIVE WITH STANDARD FOOD PAN",
      "AVAILABLE IN BLACK / WHITE TEFLON COATING & MIRROR POLISH SS",
      "AVAILABLE IN GOLD / ROSE GOLD KNOB & SIDE HANDLES + MIRROR POLISH SS"
    ]
  },
  {
    id: "1L0PPGTB2Q",
    name: "2 QT Round PVD Gold Lift Off Induction / Grill Chafer",
    description: "2 QT ROUND PVD GOLD LIFT OFF INDUCTION / GRILL CHAFER",
    price: "299.99",
    categorySlug: "premium-2qt-chafer",
    imageUrl: "/images/placeholder.jpg",
    finish: "KNOB & SIDE HANDLES PVD GOLD WATER PAN & COVER BLACK TEXTURED TEFLON MIRROR POLISH INSIDE WATER PAN, FOOD PAN & COVER",
    features: [
      "CAN BE USED ON INDUCTION & GRILL",
      "INCLUSSIVE WITH STANDARD FOOD PAN",
      "SIZES AVAILABLE 2 QT, 4QT, 6 QT & 4.5 QT OVAL CAPACITY",
      "AVAILABLE IN BLACK / WHITE TEFLON COATING & MIRROR POLISH SS",
      "AVAILABLE IN GOLD / ROSE GOLD KNOB & SIDE HANDLES + MIRROR POLISH SS"
    ]
  },
  {
    id: "1L0PFRPGTB2Q",
    name: "2 QT Round PVD Gold Lift Off with Fry Handle, Induction/Grill Chafer",
    description: "2 QT ROUND PVD GOLD LIFT OFF WITH FRY HANDLE, INDUCTION/GRILL CHAFER",
    price: "329.99",
    categorySlug: "premium-2qt-chafer",
    imageUrl: "/images/placeholder.jpg",
    finish: "KNOB, FRY HANDLE, SIDE HANDLE PVD GOLD\nWATER PAN & COVER BLACK TEXTURED TEFLON\nMIRROR POLISH INSIDE WATER PAN, FOOD PAN & COVER",
    features: [
      "CAN BE USED ON INDUCTION & GRILL",
      "INCLUSSIVE WITH STANDARD FOOD PAN",
      "SIZES AVAILABLE 2 QT, 4QT, 6 QT & 4.5 QT OVAL CAPACITY",
      "AVAILABLE IN BLACK / WHITE TEFLON COATING & MIRROR POLISH SS",
      "AVAILABLE IN GOLD / ROSE GOLD KNOB & SIDE HANDLES + MIRROR POLISH SS"
    ]
  },
  {
    id: "1L0PPGTB2Q-SS",
    name: "2 QT Round Lift Off Induction / Grill Chafer SS",
    description: "2 QT ROUND LIFT OFF INDUCTION / GRILL CHAFER SS",
    price: "279.99",
    categorySlug: "premium-2qt-chafer",
    imageUrl: "/images/placeholder.jpg",
    finish: "MIRROR POLISH SS",
    features: [
      "CAN BE USED ON INDUCTION & GRILL",
      "INCLUSSIVE WITH STANDARD FOOD PAN",
      "SIZES AVAILABLE 2 QT, 4QT, 6 QT & 4.5 QT OVAL CAPACITY",
      "AVAILABLE IN BLACK / WHITE TEFLON COATING & MIRROR POLISH SS",
      "AVAILABLE IN GOLD / ROSE GOLD KNOB & SIDE HANDLES + MIRROR POLISH SS"
    ]
  },
  {
    id: "1L0PFRMP2QSS",
    name: "2 QT Round Lift Off Fry Handle Induction / Grill Chafer SS",
    description: "2 QT ROUND LIFT OFF FRY HANDLE INDUCTION / GRILL CHAFER SS",
    price: "299.99",
    categorySlug: "premium-2qt-chafer",
    imageUrl: "/images/placeholder.jpg",
    finish: "MIRROR POLISH SS",
    features: [
      "CAN BE USED ON INDUCTION & GRILL",
      "INCLUSSIVE WITH STANDARD FOOD PAN",
      "SIZES AVAILABLE 2 QT, 4QT, 6 QT & 4.5 QT OVAL CAPACITY",
      "AVAILABLE IN BLACK / WHITE TEFLON COATING & MIRROR POLISH SS",
      "AVAILABLE IN GOLD / ROSE GOLD KNOB & SIDE HANDLES + MIRROR POLISH SS"
    ]
  }
];