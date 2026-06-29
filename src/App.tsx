import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { Toaster } from './components/ui/sonner';

const Soko = lazy(() => import('./pages/Soko'));
const Mkulima = lazy(() => import('./pages/Mkulima'));
const SokoData = lazy(() => import('./pages/SokoData'));
const Usafirishaji = lazy(() => import('./pages/Usafirishaji'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 pb-16 md:pb-0 md:pt-16">
        <Navigation />
        <main className="animate-in fade-in duration-500">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Soko />} />
              <Route path="/dashboard" element={<Mkulima />} />
              <Route path="/data" element={<SokoData />} />
              <Route path="/logistics" element={<Usafirishaji />} />
            </Routes>
          </Suspense>
        </main>
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}

export default App;
