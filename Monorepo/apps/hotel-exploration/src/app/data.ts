export interface Hotel {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

export const HOTELS: Hotel[] = [
  {
    id: '1',
    name: 'Grand Plaza Hotel',
    location: 'New York, USA',
    price: 250,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    description:
      'A luxurious stay in the heart of NYC with stunning skyline views.',
  },
  {
    id: '2',
    name: 'Ocean Breeze Resort',
    location: 'Maldives',
    price: 450,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
    description: 'Overwater bungalows and crystal clear waters await you.',
  },
  {
    id: '3',
    name: 'Alpine Retreat',
    location: 'Zermatt, Switzerland',
    price: 320,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800',
    description: 'Cozy mountain logs with direct access to ski slopes.',
  },
  {
    id: '4',
    name: 'Desert Oasis',
    location: 'Dubai, UAE',
    price: 380,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1543158266-0066955047b1?auto=format&fit=crop&q=80&w=800',
    description: 'Luxurious retreat escaping the heat in beautiful sands.',
  },
  {
    id: '5',
    name: 'Tokyo Skytower Suites',
    location: 'Tokyo, Japan',
    price: 290,
    rating: 4.9,
    image:
      'https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Breathtaking high-rise views over Neon city skyline.',
  },
];
