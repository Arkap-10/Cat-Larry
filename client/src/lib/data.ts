export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Risers",
    slug: "risers",
    description: "Elegant risers for enhanced presentation"
  },
  {
    id: 2,
    name: "Cereal Range",
    slug: "cereal-range",
    description: "Premium cereal serving solutions"
  },
  {
    id: 3,
    name: "Goose Holloware",
    slug: "goose-holloware",
    description: "Classic goose holloware collection"
  },
  {
    id: 4,
    name: "Hinge Marmite",
    slug: "hinge-marmite",
    description: "Sophisticated hinge marmite designs"
  },
  {
    id: 5,
    name: "King Holloware",
    slug: "king-holloware",
    description: "Luxury king holloware selection"
  },
  {
    id: 6,
    name: "Premium 2 QT Lift Off Chafer",
    slug: "premium-2qt-chafer",
    description: "Professional 2 QT capacity lift off chafers"
  },
  {
    id: 7,
    name: "Premium 4 QT Lift Off Chafer",
    slug: "premium-4qt-chafer",
    description: "Professional 4 QT capacity lift off chafers"
  },
  {
    id: 8,
    name: "Premium 4.5 QT Oval Lift Off Chafer",
    slug: "premium-45qt-oval-chafer",
    description: "Premium oval lift off chafers with 4.5 QT capacity"
  },
  {
    id: 9,
    name: "Roll Top Chafers",
    slug: "roll-top-chafers",
    description: "Elegant roll top chafer collection"
  },
  {
    id: 10,
    name: "Teflon Servers",
    slug: "teflon-servers",
    description: "High-quality teflon serving solutions"
  }
];
