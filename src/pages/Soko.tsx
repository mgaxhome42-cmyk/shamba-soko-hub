import React, { useState, useEffect } from 'react';
import { getStoredCrops, CATEGORIES } from '@/lib/data';
import { Crop } from '@/lib/types';
import { Search, MapPin, Phone, ShoppingCart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const Soko = () => {
  const [crops, setCrops] = useState<Crop[]>([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    setCrops(getStoredCrops());
  }, []);

  const filteredCrops = crops.filter(crop => {
    const matchesSearch = crop.name.toLowerCase().includes(search.toLowerCase()) || 
                          crop.region.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory ? crop.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const handleBuy = (crop: Crop) => {
    toast.success(`Umeagiza ${crop.name}. Mkulima ${crop.farmerName} atapigiwa simu.`);
  };

  return (
    <div className="pb-24 pt-4 px-4 max-w-screen-xl mx-auto space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-green-800">Soko la Mkulima</h1>
        <p className="text-gray-600">Pata mazao bora moja kwa moja kutoka kwa wakulima wa Tanzania.</p>
      </header>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Tafuta zao au mkoa..." 
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          <Button 
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="whitespace-nowrap rounded-full"
            size="sm"
          >
            Yote
          </Button>
          {CATEGORIES.map(cat => (
            <Button 
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
              className="whitespace-nowrap rounded-full"
              size="sm"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCrops.map(crop => (
          <Card key={crop.id} className="overflow-hidden hover:shadow-lg transition-shadow border-green-100">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={crop.imageUrl} 
                alt={crop.name}
                className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
              />
              <Badge className="absolute top-2 right-2 bg-green-600">
                {crop.category}
              </Badge>
            </div>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xl font-bold text-gray-800">{crop.name}</CardTitle>
              <CardDescription className="flex items-center text-sm">
                <MapPin className="h-3 w-3 mr-1 text-green-600" />
                {crop.region}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-2xl font-black text-green-700">
                  TSh {crop.price.toLocaleString()}
                </span>
                <span className="text-xs text-gray-500">kwa {crop.unit}</span>
              </div>
              <p className="text-sm text-gray-600 italic">
                Ipo: {crop.quantity} {crop.unit}
              </p>
              <div className="flex items-center text-xs text-gray-500 pt-2 border-t">
                <Phone className="h-3 w-3 mr-1" />
                <span>{crop.farmerName}: {crop.contact}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button onClick={() => handleBuy(crop)} className="w-full bg-green-600 hover:bg-green-700">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Nunua Sasa
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredCrops.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Samahani, hatujapata mazao unayotafuta.</p>
        </div>
      )}
    </div>
  );
};

export default Soko;
