export interface Spot {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  latitude: number;
  longitude: number;
}

const spots: Spot[] = [
  {
    id: '1',
    name: 'St. Paul’s Bay',
    shortDescription: 'Turquoise lagoon beneath Lindos Acropolis',
    description: 'A picturesque cove with crystal‑clear waters perfect for snorkeling. Arrive early to avoid crowds.',
    image: 'https://images.unsplash.com/photo-1609220139298-48fb3983acfd?auto=format&q=60',
    latitude: 36.0864,
    longitude: 28.0912,
  },
  {
    id: '2',
    name: 'Monolithos Castle Sunset',
    shortDescription: 'Dramatic cliff‑top ruins & sunset views',
    description: 'Climb the steps at golden hour for sweeping vistas over the Aegean and offshore islets.',
    image: 'https://images.unsplash.com/photo-1519678130734-c21cd3f5420d?auto=format&q=60',
    latitude: 36.1434,
    longitude: 27.7002,
  },
  {
    id: '3',
    name: 'Seven Springs Tunnel',
    shortDescription: 'Cool walk through a dark water tunnel',
    description: 'Wade barefoot through an 186 m stone tunnel emerging at a hidden lake surrounded by pines.',
    image: 'https://images.unsplash.com/photo-1641197689349-937759b4e614?auto=format&q=60',
    latitude: 36.2381,
    longitude: 28.1295,
  },
  {
    id: '4',
    name: 'Anthony Quinn Bay',
    shortDescription: 'Pine‑backed bay popular with divers',
    description: 'Named after the actor who fell in love with this spot while filming *The Guns of Navarone*.',
    image: 'https://images.unsplash.com/photo-1599058917211-f136ba0cbb19?auto=format&q=60',
    latitude: 36.3216,
    longitude: 28.2086,
  },
  {
    id: '5',
    name: 'Profitis Ilias Forest',
    shortDescription: 'Alpine vibe & abandoned Italian chalets',
    description: 'Escape the heat on shady hiking trails and explore eerie 1930s sanatoria locked in time.',
    image: 'https://images.unsplash.com/photo-1642412246339-8620fd6150e3?auto=format&q=60',
    latitude: 36.2747,
    longitude: 28.0289,
  },
];

export default spots;
