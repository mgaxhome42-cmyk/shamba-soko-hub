import React, { useState, useEffect } from 'react';
import { getStoredCrops, saveCrop, CATEGORIES, REGIONS, MARKET_DATA } from '@/lib/data';
import { Crop } from '@/lib/types';
import { PlusCircle, List, LineChart as ChartIcon, Save, Phone, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { toast } from 'sonner';

const Mkulima = () => {
  const [crops, setCrops] = useState<Crop[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    unit: 'Magunia',
    price: '',
    region: 'Dar es Salaam',
    category: 'Nafaka',
    farmerName: '',
    contact: ''
  });

  useEffect(() => {
    setCrops(getStoredCrops());
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.quantity || !formData.farmerName || !formData.contact) {
      toast.error('Tafadhali jaza taarifa zote muhimu.');
      return;
    }

    const newCrop: Crop = {
      id: Date.now().toString(),
      name: formData.name,
      quantity: Number(formData.quantity),
      unit: formData.unit,
      price: Number(formData.price),
      region: formData.region,
      category: formData.category,
      farmerName: formData.farmerName,
      contact: formData.contact,
      imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c98d85df-f7dd-4c7f-b440-b20d5aa48ee6/farm-hero-dc262495-1782750166375.webp',
      date: new Date().toISOString().split('T')[0]
    };

    const updated = saveCrop(newCrop);
    setCrops(updated);
    toast.success('Zao lako limeongezwa sokoni kwa mafanikio!');
    
    setFormData({
      name: '',
      quantity: '',
      unit: 'Magunia',
      price: '',
      region: 'Dar es Salaam',
      category: 'Nafaka',
      farmerName: formData.farmerName, // Keep name/contact for convenience
      contact: formData.contact
    });
  };

  return (
    <div className="pb-24 pt-4 px-4 max-w-screen-xl mx-auto space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-green-800">Sehemu ya Mkulima</h1>
        <p className="text-gray-600">Ongeza mazao yako na ufuatilie bei za soko.</p>
      </header>

      <Tabs defaultValue="ongeza" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="ongeza" className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            <span>Ongeza Zao</span>
          </TabsTrigger>
          <TabsTrigger value="orodha" className="flex items-center gap-2">
            <List className="h-4 w-4" />
            <span>Mazao Yangu</span>
          </TabsTrigger>
          <TabsTrigger value="uchambuzi" className="flex items-center gap-2">
            <ChartIcon className="h-4 w-4" />
            <span>Grafu</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ongeza">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Taarifa za Zao Jipya</CardTitle>
              <CardDescription>Jaza fomu hii ili kuweka zao lako sokoni.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Jina la Zao</Label>
                    <Input id="name" name="name" placeholder="Mf. Mahindi, Nyanya" value={formData.name} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Kundi la Zao</Label>
                    <Select value={formData.category} onValueChange={(v) => handleSelectChange('category', v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Chagua kundi" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Kiasi</Label>
                    <Input id="quantity" name="quantity" type="number" placeholder="50" value={formData.quantity} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Kipimo</Label>
                    <Select value={formData.unit} onValueChange={(v) => handleSelectChange('unit', v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Kipimo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Magunia">Magunia</SelectItem>
                        <SelectItem value="Kilo">Kilo</SelectItem>
                        <SelectItem value="Tani">Tani</SelectItem>
                        <SelectItem value="Fungu">Fungu</SelectItem>
                        <SelectItem value="Box">Box</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 col-span-2 md:col-span-1">
                    <Label htmlFor="price">Bei (TSh) kwa Kipimo</Label>
                    <Input id="price" name="price" type="number" placeholder="80,000" value={formData.price} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="region">Mkoa</Label>
                    <Select value={formData.region} onValueChange={(v) => handleSelectChange('region', v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Chagua mkoa" />
                      </SelectTrigger>
                      <SelectContent>
                        {REGIONS.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                  <div className="space-y-2">
                    <Label htmlFor="farmerName" className="flex items-center gap-1">
                      <User className="h-3 w-3" /> Jina lako
                    </Label>
                    <Input id="farmerName" name="farmerName" placeholder="Jina lako kamili" value={formData.farmerName} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact" className="flex items-center gap-1">
                      <Phone className="h-3 w-3" /> Simu ya Mawasiliano
                    </Label>
                    <Input id="contact" name="contact" placeholder="07XXXXXXXX" value={formData.contact} onChange={handleInputChange} />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  <Save className="h-4 w-4 mr-2" />
                  Weka Sokoni
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orodha">
          <div className="grid grid-cols-1 gap-4">
            {crops.length > 0 ? (
              crops.map(crop => (
                <Card key={crop.id} className="flex overflow-hidden border-l-4 border-l-green-600">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                    <img src={crop.imageUrl} className="w-full h-full object-cover" alt={crop.name} />
                  </div>
                  <CardContent className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg">{crop.name}</h3>
                        <Badge variant="outline" className="text-green-700 border-green-200">{crop.category}</Badge>
                      </div>
                      <p className="text-sm text-gray-500">{crop.region} • {crop.date}</p>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                      <div className="text-green-700 font-bold">
                        TSh {crop.price.toLocaleString()} / {crop.unit}
                      </div>
                      <div className="text-xs text-gray-400">
                        {crop.quantity} {crop.unit} zimebaki
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                Bado haujaweka zao lolote.
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="uchambuzi">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mwenendo wa Bei - Mahindi (Dar es Salaam)</CardTitle>
                <CardDescription>Grafu inayoonyesha mabadiliko ya bei kwa mwezi mmoja uliopita.</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={MARKET_DATA}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#16a34a" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value/1000}k`} />
                    <Tooltip 
                      formatter={(value: number) => [`TSh ${value.toLocaleString()}`, 'Bei']}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#16a34a" 
                      fillOpacity={1} 
                      fill="url(#colorPrice)" 
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-green-50 border-green-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-800">Bei ya Wastani Leo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-900">TSh 78,500</div>
                  <p className="text-xs text-green-600 mt-1">+2.4% kutoka wiki iliyopita</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-800">Mahitaji ya Soko</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-900">Juu Sana</div>
                  <p className="text-xs text-blue-600 mt-1">Wanunuzi wengi wanatafuta nafaka</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Mkulima;
