import { IMG } from './destinations.js';

export const hotelCategories = ['Luxury', 'Boutique', 'Resort', 'Budget'];
export const hotels = [
  { id: 'h1', name: 'Fort View Retreat (Sample)', city: 'Hunza', destId: 'hunza', category: 'Boutique', price: 28000, rating: 4.8, img: IMG.hotel1, amenities: ['Valley view', 'Breakfast', 'Wi-Fi', 'Heating'] },
  { id: 'h2', name: 'Lakeside Lodge Skardu (Sample)', city: 'Skardu', destId: 'skardu', category: 'Resort', price: 24000, rating: 4.6, img: IMG.resort, amenities: ['Lake view', 'Restaurant', 'Parking', 'Heating'] },
  { id: 'h3', name: 'Riverside Resort Swat (Sample)', city: 'Swat', destId: 'swat', category: 'Resort', price: 19500, rating: 4.5, img: IMG.resort, amenities: ['River view', 'Pool', 'Wi-Fi', 'Breakfast'] },
  { id: 'h4', name: 'Pine Valley Inn Naran (Sample)', city: 'Naran Kaghan', destId: 'naran-kaghan', category: 'Budget', price: 9000, rating: 4.1, img: IMG.hotel1, amenities: ['Breakfast', 'Parking', 'Hot water'] },
  { id: 'h5', name: 'Walled City Haveli Lahore (Sample)', city: 'Lahore', destId: 'lahore', category: 'Boutique', price: 22000, rating: 4.7, img: IMG.city, amenities: ['Rooftop dining', 'Wi-Fi', 'Breakfast', 'Air conditioning'] },
  { id: 'h6', name: 'Capital Grand Islamabad (Sample)', city: 'Islamabad', destId: 'islamabad', category: 'Luxury', price: 38000, rating: 4.8, img: IMG.hotel1, amenities: ['Pool', 'Spa', 'Gym', 'Wi-Fi', 'Airport shuttle'] },
  { id: 'h7', name: 'Seaview Suites Karachi (Sample)', city: 'Karachi', destId: 'karachi', category: 'Luxury', price: 34000, rating: 4.6, img: IMG.beach, amenities: ['Sea view', 'Pool', 'Gym', 'Wi-Fi'] },
];
export const hotelCities = [...new Set(hotels.map((h) => h.city))];
