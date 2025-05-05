export type Spot = {
  id: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
};

const spots: Spot[] = [
  { id: '1', name: 'Lindos Acropolis', description: 'Ancient ruins with stunning views.', latitude: 36.0888, longitude: 28.0862 },
  { id: '2', name: 'Anthony Quinn Bay', description: 'Crystal-clear waters in a scenic cove.', latitude: 36.1964, longitude: 28.1766 },
  { id: '3', name: 'Rhodes Old Town', description: 'Medieval streets and historical landmarks.', latitude: 36.4427, longitude: 28.2278 },
  // add more spots as desired
];

export default spots;
