import React from 'react';
import { CircuitBoard, Search, ShieldCheck, Truck, Clock, DollarSign, Factory, Award } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Services />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;