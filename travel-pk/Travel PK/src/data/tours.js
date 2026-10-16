import { IMG } from './destinations.js';

const INC = ['Accommodation as listed', 'Daily breakfast', 'Private transport', 'Local guide', 'Sightseeing as per itinerary'];
const EXC = ['Lunch and dinner unless mentioned', 'Personal expenses', 'Travel insurance', 'Tips'];

export const tourCategories = ['Adventure', 'Family', 'Honeymoon', 'Weekend', 'International'];

export const tours = [
  { id: 't1', title: 'Hunza & Skardu Explorer', dest: 'Hunza Valley', destId: 'hunza', days: 7, price: 89000, category: 'Adventure', rating: 4.9, maxGroup: 12, img: IMG.peaks,
    summary: 'A week through the Karakoram’s most scenic valleys, with forts, lakes and high plains.',
    highlights: ['Baltit and Altit forts', 'Attabad Lake boat ride', 'Deosai Plains jeep safari', 'Sunset at Eagle’s Nest'],
    itinerary: ['Arrive in Islamabad and drive to Chilas', 'Chilas to Hunza via Rakaposhi viewpoint', 'Karimabad forts and bazaar', 'Attabad Lake and Passu Cones', 'Drive to Skardu', 'Upper Kachura and Shangrila', 'Deosai Plains and return'],
    included: INC, excluded: EXC },
  { id: 't2', title: 'Fairy Meadows & Nanga Parbat Trek', dest: 'Fairy Meadows', destId: 'fairy-meadows', days: 4, price: 38500, category: 'Adventure', rating: 4.8, maxGroup: 10, img: IMG.night,
    summary: 'A short trek to a pine meadow facing the world’s ninth highest peak.',
    highlights: ['Raikot Bridge jeep ride', 'Guided trek to the meadows', 'Beyal Camp hike', 'Night sky views'],
    itinerary: ['Drive from Islamabad to Raikot', 'Jeep and trek to Fairy Meadows', 'Beyal Camp day hike', 'Descend and return to Islamabad'],
    included: INC, excluded: [...EXC, 'Porter charges'] },
  { id: 't3', title: 'Naran Kaghan Family Escape', dest: 'Naran Kaghan', destId: 'naran-kaghan', days: 4, price: 42000, category: 'Family', rating: 4.6, maxGroup: 15, img: IMG.lake,
    summary: 'Easy-paced lakes and river-side stays designed for families with children.',
    highlights: ['Saif-ul-Malook Lake', 'Riverside picnic', 'Shogran day trip', 'Comfortable hotels'],
    itinerary: ['Drive to Naran via Balakot', 'Saif-ul-Malook by jeep', 'Lalazar or Babusar Top (weather permitting)', 'Return to Islamabad'],
    included: INC, excluded: EXC },
  { id: 't4', title: 'Swat Valley Honeymoon Retreat', dest: 'Swat Valley', destId: 'swat', days: 5, price: 65000, category: 'Honeymoon', rating: 4.8, maxGroup: 2, img: IMG.road,
    summary: 'Quiet riverside suites, candle-lit dinners and private scenic drives.',
    highlights: ['Riverside suite', 'Private candle-lit dinner', 'Malam Jabba chairlift', 'Kalam valley drive'],
    itinerary: ['Islamabad to Swat', 'Malam Jabba and chairlift', 'Drive to Kalam', 'Mahodand Lake day trip', 'Return journey'],
    included: [...INC, 'Honeymoon dinner'], excluded: EXC },
  { id: 't5', title: 'Lahore Heritage Weekend', dest: 'Lahore', destId: 'lahore', days: 2, price: 18500, category: 'Weekend', rating: 4.7, maxGroup: 14, img: IMG.city,
    summary: 'Two days of Mughal landmarks, bazaars and Lahori food.',
    highlights: ['Badshahi Mosque', 'Walled City walk', 'Lahore Fort', 'Food Street dinner'],
    itinerary: ['Walled City, Wazir Khan Mosque and Food Street', 'Lahore Fort, Badshahi Mosque and Shalimar Gardens'],
    included: INC, excluded: EXC },
  { id: 't6', title: 'Islamabad & Murree Gateway', dest: 'Islamabad', destId: 'islamabad', days: 3, price: 24000, category: 'Weekend', rating: 4.5, maxGroup: 16, img: IMG.road,
    summary: 'A relaxed city break with a hill-station day out.',
    highlights: ['Faisal Mosque', 'Daman-e-Koh', 'Murree Mall Road', 'Saidpur Village'],
    itinerary: ['Islamabad city tour', 'Murree and Patriata', 'Margalla Hills walk and departure'],
    included: INC, excluded: EXC },
  { id: 't7', title: 'Dubai Family Holiday (Sample)', dest: 'Dubai', days: 6, price: 289000, category: 'International', rating: 4.6, maxGroup: 8, img: IMG.travel,
    summary: 'City sights, desert safari and theme parks. Sample package for demonstration only.',
    highlights: ['Burj Khalifa view', 'Desert safari', 'Dubai Marina cruise', 'Theme park day'],
    itinerary: ['Arrive and settle in', 'City tour', 'Desert safari', 'Theme park day', 'Free day for shopping', 'Departure'],
    included: ['Accommodation as listed', 'Daily breakfast', 'Airport transfers', 'Listed tours'], excluded: ['Airfare', 'Visa fees', ...EXC] },
  { id: 't8', title: 'Istanbul & Cappadocia Journey (Sample)', dest: 'Turkey', days: 8, price: 465000, category: 'International', rating: 4.8, maxGroup: 10, img: IMG.resort,
    summary: 'Bosphorus cruises, historic sites and sunrise over Cappadocia. Sample package for demonstration only.',
    highlights: ['Hagia Sophia', 'Bosphorus cruise', 'Cappadocia valleys', 'Grand Bazaar'],
    itinerary: ['Arrive in Istanbul', 'Old City sights', 'Bosphorus cruise', 'Fly to Cappadocia', 'Valleys and cave hotels', 'Optional balloon ride', 'Return to Istanbul', 'Departure'],
    included: ['Accommodation as listed', 'Daily breakfast', 'Domestic flight', 'Guide'], excluded: ['International airfare', 'Visa fees', 'Balloon ride', ...EXC] },
];
export const tourDestinations = [...new Set(tours.map((t) => t.dest))];
