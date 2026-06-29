import { Crop, MarketPrice, TransportService } from './types';

export const CATEGORIES = ['Nafaka', 'Mbogamboga', 'Matunda', 'Viungo', 'Mizizi'];
export const REGIONS = ['Dar es Salaam', 'Arusha', 'Mwanza', 'Mbeya', 'Dodoma', 'Morogoro', 'Iringa', 'Kilimanjaro'];

export const MOCK_CROPS: Crop[] = [
  {
    id: '1',
    name: 'Mahindi ya Njano',
    quantity: 50,
    unit: 'Magunia',
    price: 85000,
    region: 'Iringa',
    category: 'Nafaka',
    farmerName: 'Juma Hamisi',
    contact: '0712345678',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c98d85df-f7dd-4c7f-b440-b20d5aa48ee6/mahindi-crop-3f260c05-1782750164697.webp',
    date: '2023-10-25'
  },
  {
    id: '2',
    name: 'Mpunga wa Kyela',
    quantity: 100,
    unit: 'Magunia',
    price: 120000,
    region: 'Mbeya',
    category: 'Nafaka',
    farmerName: 'Anna Mlowe',
    contact: '0787654321',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c98d85df-f7dd-4c7f-b440-b20d5aa48ee6/mpunga-crop-89bb05aa-1782750166009.webp',
    date: '2023-10-24'
  },
  {
    id: '3',
    name: 'Maharage ya Njano',
    quantity: 30,
    unit: 'Magunia',
    price: 250000,
    region: 'Arusha',
    category: 'Nafaka',
    farmerName: 'Peter John',
    contact: '0654321098',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c98d85df-f7dd-4c7f-b440-b20d5aa48ee6/maharage-crop-58c79c55-1782750164847.webp',
    date: '2023-10-23'
  },
  {
    id: '4',
    name: 'Viazi Mviringo',
    quantity: 200,
    unit: 'Kilo',
    price: 1200,
    region: 'Njombe',
    category: 'Mizizi',
    farmerName: 'Maria Soko',
    contact: '0711223344',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c98d85df-f7dd-4c7f-b440-b20d5aa48ee6/viazi-crop-00df83dc-1782750166409.webp',
    date: '2023-10-22'
  },
  {
    id: '5',
    name: 'Mbogamboga Mchanganyiko',
    quantity: 500,
    unit: 'Fungu',
    price: 500,
    region: 'Morogoro',
    category: 'Mbogamboga',
    farmerName: 'Saidi Ally',
    contact: '0744556677',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c98d85df-f7dd-4c7f-b440-b20d5aa48ee6/mbogamboga-crop-50b7fa49-1782750165562.webp',
    date: '2023-10-21'
  }
];

export const MARKET_DATA: MarketPrice[] = [
  { month: 'Jan', price: 75000, region: 'Dar es Salaam' },
  { month: 'Feb', price: 78000, region: 'Dar es Salaam' },
  { month: 'Mar', price: 82000, region: 'Dar es Salaam' },
  { month: 'Apr', price: 85000, region: 'Dar es Salaam' },
  { month: 'May', price: 80000, region: 'Dar es Salaam' },
  { month: 'Jun', price: 72000, region: 'Dar es Salaam' },
  { month: 'Jul', price: 68000, region: 'Dar es Salaam' },
  { month: 'Aug', price: 70000, region: 'Dar es Salaam' },
  { month: 'Sep', price: 75000, region: 'Dar es Salaam' },
  { month: 'Oct', price: 80000, region: 'Dar es Salaam' },
];

export const TRANSPORT_SERVICES: TransportService[] = [
  {
    id: 't1',
    provider: 'Kilimo Logistics',
    vehicleType: 'Fuso Truck',
    capacity: '7 Tons',
    pricePerKm: 2500,
    contact: '0711001122',
    rating: 4.8,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c98d85df-f7dd-4c7f-b440-b20d5aa48ee6/logistics-truck-af5a3dab-1782750166716.webp'
  },
  {
    id: 't2',
    provider: 'Fast Agri Transport',
    vehicleType: 'Canter',
    capacity: '4 Tons',
    pricePerKm: 1800,
    contact: '0788112233',
    rating: 4.5,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c98d85df-f7dd-4c7f-b440-b20d5aa48ee6/logistics-truck-af5a3dab-1782750166716.webp'
  }
];

export const getStoredCrops = (): Crop[] => {
  const stored = localStorage.getItem('mkulima_crops');
  return stored ? JSON.parse(stored) : MOCK_CROPS;
};

export const saveCrop = (crop: Crop) => {
  const crops = getStoredCrops();
  const updated = [crop, ...crops];
  localStorage.setItem('mkulima_crops', JSON.stringify(updated));
  return updated;
};
