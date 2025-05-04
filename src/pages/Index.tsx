
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import LoginSection from '@/components/LoginSection';
import FeaturesDetails from '@/components/FeaturesDetails';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <LoginSection />
      <FeaturesDetails />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
