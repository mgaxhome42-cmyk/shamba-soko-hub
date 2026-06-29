export interface Crop {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  price: number;
  region: string;
  category: string;
  farmerName: string;
  contact: string;
  imageUrl: string;
  date: string;
}

export interface MarketPrice {
  month: string;
  price: number;
  region: string;
}

export interface TransportService {
  id: string;
  provider: string;
  vehicleType: string;
  capacity: string;
  pricePerKm: number;
  contact: string;
  rating: number;
  imageUrl: string;
}
