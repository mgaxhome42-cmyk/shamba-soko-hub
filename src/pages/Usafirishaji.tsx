import React from 'react';
import { TRANSPORT_SERVICES } from '@/lib/data';
import { Truck, Star, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const Usafirishaji = () => {
  const handleRequest = (provider: string) => {
    toast.success(`Ombi la usafiri limetumwa kwa ${provider}. Utapigiwa simu punde.`);
  };

  return (
    <div className="pb-24 pt-4 px-4 max-w-screen-xl mx-auto space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-green-800">Usafirishaji wa Mazao</h1>
        <p className="text-gray-600">Pata usafiri wa uhakika wa kutoa mazao shambani kwenda sokoni.</p>
      </header>

      <div className="bg-green-600 text-white p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-lg">
        <div className="z-10 space-y-4 max-w-md text-center md:text-left">
          <h2 className="text-2xl font-bold italic">Usafiri salama kwa mazao yako!</h2>
          <p className="text-green-50 text-sm">Tunashirikiana na wasafirishaji wenye uzoefu kote nchini ili kuhakikisha mazao yako hayaharibiki.</p>
          <div className="flex gap-4 justify-center md:justify-start">
             <div className="flex items-center gap-1 text-xs font-semibold">
               <ShieldCheck className="h-4 w-4" /> Bima ya Mazao
             </div>
             <div className="flex items-center gap-1 text-xs font-semibold">
               <Star className="h-4 w-4" /> Madereva Waliohakikiwa
             </div>
          </div>
        </div>
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c98d85df-f7dd-4c7f-b440-b20d5aa48ee6/logistics-truck-af5a3dab-1782750166716.webp" 
          alt="Logistics" 
          className="w-48 h-auto object-contain z-10 hidden sm:block"
        />
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full -translate-y-1/2 translate-x-1/3 opacity-20"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {TRANSPORT_SERVICES.map(service => (
          <Card key={service.id} className="overflow-hidden border-green-100 flex flex-col sm:flex-row">
            <div className="sm:w-48 aspect-square relative">
              <img 
                src={service.imageUrl} 
                className="w-full h-full object-cover" 
                alt={service.provider} 
              />
            </div>
            <div className="flex-1 flex flex-col">
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold">{service.provider}</CardTitle>
                  <div className="flex items-center text-yellow-500 font-bold text-sm">
                    <Star className="h-4 w-4 fill-current mr-1" />
                    {service.rating}
                  </div>
                </div>
                <CardDescription className="flex items-center text-sm font-medium text-green-700">
                  <Truck className="h-3 w-3 mr-1" />
                  {service.vehicleType} • {service.capacity}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-1">
                <p className="text-sm text-gray-600 mb-4">
                  Tunatoa huduma ya kusafirisha nafaka na mbogamboga mkoa wowote Tanzania. Bei zetu ni nafuu.
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-gray-900">TSh {service.pricePerKm.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">kwa kila km</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 gap-2">
                <Button 
                  onClick={() => handleRequest(service.provider)} 
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  Omba Usafiri
                </Button>
                <Button variant="outline" size="icon" className="text-green-600 border-green-200">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="text-green-600 border-green-200">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300 text-center">
        <h3 className="font-bold text-gray-800">Je, wewe ni msafirishaji?</h3>
        <p className="text-sm text-gray-500 mt-1 mb-4">Sajili gari lako hapa ili kuanza kupata wateja wakulima.</p>
        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
          Sajili Gari Lako
        </Button>
      </div>
    </div>
  );
};

export default Usafirishaji;
