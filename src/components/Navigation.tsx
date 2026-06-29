import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBag, LayoutDashboard, Truck, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const navItems = [
    { to: '/', icon: ShoppingBag, label: 'Soko' },
    { to: '/dashboard', icon: LayoutDashboard, label: 'Mkulima' },
    { to: '/data', icon: LineChart, label: 'Bei za Soko' },
    { to: '/logistics', icon: Truck, label: 'Usafiri' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 pb-safe shadow-lg md:top-0 md:bottom-auto md:border-t-0 md:border-b">
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center space-y-1 transition-colors duration-200 w-full h-full text-xs font-medium",
                isActive ? "text-green-600" : "text-gray-500 hover:text-green-500"
              )
            }
          >
            <item.icon className="h-6 w-6" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
