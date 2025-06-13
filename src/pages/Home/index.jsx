import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import FeaturesSection from './FeaturesSection';
import OnboardingSection from './OnboardingSection';
import WhyChooseSection from './WhyChooseSection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import CtaSection from './CtaSection';
import NewsletterSection from './NewsletterSection';
import TrustIndicatorsSection from './TrustIndicatorsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background-light">
      <Header />
      
      <main>
        <HeroSection />
        <TrustIndicatorsSection />
        <FeaturesSection />
        <OnboardingSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;