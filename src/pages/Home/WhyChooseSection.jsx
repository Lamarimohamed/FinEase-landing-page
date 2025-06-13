import React from 'react';
import Button from '../../components/ui/Button';

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: "/images/img_hugeicon_finance_and_payment_outline_bill.svg",
      title: "No Hidden Fees",
      description: "Transparent pricing for every transaction"
    },
    {
      icon: "/images/img_hugeicon_finance_and_payment_outline_bar_chart.svg",
      title: "Smart Insights",
      description: "Stay ahead with automated spending reports"
    },
    {
      icon: "/images/img_hugeicon_interface_outline_lock.svg",
      title: "Always Secure",
      description: "Your data is protected with advanced encryption"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Reasons */}
          <div>
            <h2 className="text-[28px] font-bold text-secondary mb-8 font-satoshi">
              Why Choose FinEase?
            </h2>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex">
                  <div className="mr-4">
                    <div className="w-[60px] h-[60px] bg-white border border-border rounded-lg flex items-center justify-center">
                      <img src={reason.icon} alt={reason.title} className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-[22px] font-bold text-secondary mb-1 font-satoshi">
                      {reason.title}
                    </h3>
                    <p className="text-[17px] text-secondary-light font-general-sans font-medium">
                      {reason.description}
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
          
          {/* Right Column - Images */}
          <div className="relative">
            <div className="absolute bottom-0 right-0 w-[217px] h-[99px] bg-[#1e1e1e7f] rounded-full opacity-50 blur-lg"></div>
            
            <img 
              src="/images/img_iphone_18.png" 
              alt="FinEase App Interface" 
              className="relative z-10 max-w-sm mx-auto"
            />
            
            <img 
              src="/images/img_transfer_screen_6.png" 
              alt="FinEase Transfer Screen" 
              className="absolute top-20 left-0 z-20 rounded-2xl w-[315px]"
            />
            
            <img 
              src="/images/img_authenticationrafiki.svg" 
              alt="Authentication" 
              className="absolute bottom-0 right-0 z-20 rounded-xl w-36"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;