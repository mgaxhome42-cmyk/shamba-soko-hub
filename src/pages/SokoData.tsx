import React from 'react';
import { REGIONS, CATEGORIES } from '@/lib/data';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const SokoData = () => {
  // Simulated database of market prices
  const marketData = [
    { crop: 'Mahindi', unit: 'Gunia (100kg)', dar: 82000, arusha: 78000, mbeya: 70000, trend: 'up' },
    { crop: 'Mpunga', unit: 'Gunia (100kg)', dar: 135000, arusha: 140000, mbeya: 110000, trend: 'down' },
    { crop: 'Maharage', unit: 'Gunia (100kg)', dar: 280000, arusha: 260000, mbeya: 255000, trend: 'stable' },
    { crop: 'Viazi Mviringo', unit: 'Gunia (100kg)', dar: 85000, arusha: 75000, mbeya: 65000, trend: 'up' },
    { crop: 'Vitunguu', unit: 'Gunia (100kg)', dar: 120000, arusha: 110000, mbeya: 115000, trend: 'up' },
    { crop: 'Nyanya', unit: 'Box', dar: 45000, arusha: 38000, mbeya: 35000, trend: 'down' },
  ];

  const getTrendIcon = (trend: string) => {
    switch(trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-red-500" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-green-500" />;
      default: return <Minus className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="pb-24 pt-4 px-4 max-w-screen-xl mx-auto space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-green-800">Taarifa za Bei za Soko</h1>
        <p className="text-gray-600">Bei hizi ni za wastani kwa mikoa mikuu ya biashara Tanzania.</p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <Card className="border-green-100 shadow-sm">
          <CardHeader>
            <CardTitle>Bei ya Jumla (Leo)</CardTitle>
            <CardDescription>Bei zote zipo katika Shilingi za Kitanzania (TSh).</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-green-50">
                    <TableHead className="font-bold">Zao</TableHead>
                    <TableHead className="font-bold">Kipimo</TableHead>
                    <TableHead className="font-bold text-right">Dar es Salaam</TableHead>
                    <TableHead className="font-bold text-right">Arusha</TableHead>
                    <TableHead className="font-bold text-right">Mbeya</TableHead>
                    <TableHead className="font-bold text-center">Mwenendo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {marketData.map((row) => (
                    <TableRow key={row.crop}>
                      <TableCell className="font-medium">{row.crop}</TableCell>
                      <TableCell className="text-gray-500 text-sm">{row.unit}</TableCell>
                      <TableCell className="text-right font-semibold">{row.dar.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{row.arusha.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{row.mbeya.toLocaleString()}</TableCell>
                      <TableCell className="flex justify-center items-center h-12">
                        {getTrendIcon(row.trend)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-orange-50 border-orange-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-orange-800">Ushauri wa Soko</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-orange-900 leading-relaxed">
                Bei ya Mahindi inatarajiwa kupanda Dar es Salaam kutokana na upungufu wa usambazaji kutoka mikoa ya Kusini. Wakulima wenye maghala wanashauriwa kusubiri kidogo.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-800">Fursa Mpya</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-900 leading-relaxed">
                Soko la Arusha lina uhitaji mkubwa wa Nyanya kwa sasa. Bei imepungua kule lakini mahitaji ni makubwa sana kwa ajili ya usafirishaji kwenda nje ya nchi.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SokoData;
