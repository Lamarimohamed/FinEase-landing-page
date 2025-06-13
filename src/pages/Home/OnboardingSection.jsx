import React from 'react';
import Button from '../../components/ui/Button';

const OnboardingSection = () => {
  const steps = [
    {
      icon: "/images/img_frame.svg",
      title: "Download FinEase",
      description: "Available on iOS and Android"
    },
    {
      icon: "/images/img_hugeicon_interface_outline_user.svg",
      title: "Create Your Account",
      description: "Sign up in minutes with your email or phone number"
    },
    {
      icon: "/images/img_hugeicon_finance_and_payment_outline_profit_teal_400.svg",
      title: "Manage Your Money",
      description: "Track, save, and transfer money effortlessly"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <img 
              src="/images/img_sign_up_screen_3_2.png" 
              alt="FinEase App Signup" 
              className="rounded-3xl w-full max-w-md mx-auto"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img 
                src="/images/img_image.svg" 
                alt="Decorative Element" 
                className="w-72"
              />
            </div>
          </div>
          
          {/* Right Column - Steps */}
          <div>
            <h2 className="text-[28px] font-bold text-secondary mb-8 font-satoshi">
              Getting Started is Easy
            </h2>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-4">
                    <div className="w-[60px] h-[60px] bg-white border border-border rounded-lg flex items-center justify-center">
                      <img src={step.icon} alt={step.title} className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-[22px] font-bold text-secondary mb-1 font-satoshi">
                      {step.title}
                    </h3>
                    <p className="text-[17px] text-secondary-light font-general-sans font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button 
                variant="ghost" 
                size="md"
                icon={
                  <img src="/images/img_vector_teal_400.svg" alt="Arrow" className="w-4 h-4" />
                }
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;