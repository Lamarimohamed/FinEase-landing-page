import React from 'react';
import Button from '../../components/ui/Button';

const PricingSection = () => {
  const plans = [
    {
      name: "BASIC",
      price: "FREE",
      features: [
        "Free account creation",
        "Access to core features",
        "Standard currency exchange",
        "Up to 3 monthly transfers",
        "Basic savings tools"
      ],
      isFeatured: false
    },
    {
      name: "Pro Plan",
      price: "$9.99/month",
      features: [
        "Everything in Free",
        "Advanced analytics",
        "Lower international transfer fees",
        "Unlimited transfers",
        "Advanced savings automations"
      ],
      isFeatured: true
    },
    {
      name: "Premium Plan",
      price: "$19.99/month",
      features: [
        "Everything in Pro",
        "Exclusive perks and rewards",
        "Priority customer support",
        "Cashback on every transaction",
        "Financial advisory tools"
      ],
      isFeatured: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4 font-satoshi">
            Choose a Plan That Fits Your Needs
          </h2>
          <p className="text-xl text-secondary-light max-w-2xl mx-auto font-general-sans font-medium">
            Transparent pricing with no hidden fees. Upgrade anytime to unlock even more features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl border ${plan.isFeatured ? 'border-primary' : 'border-border'} p-6 flex flex-col h-full`}
            >
              <div className="text-center mb-8">
                <p className="text-[15px] font-medium uppercase text-secondary mb-4">
                  {plan.name}
                </p>
                
                {plan.price === "FREE" ? (
                  <h3 className="text-[56px] font-bold text-secondary font-satoshi">
                    {plan.price}
                  </h3>
                ) : (
                  <h3 className="text-[56px] font-bold text-secondary font-satoshi">
                    {plan.price.split('/')[0]}
                    <span className="text-[22px] font-bold">/month</span>
                  </h3>
                )}
              </div>
              
              <div className="flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start mb-5">
                    <img 
                      src="/images/img_hugeicon_interface_outline_tick.svg" 
                      alt="Check" 
                      className="w-6 h-6 mr-4 flex-shrink-0 mt-0.5"
                    />
                    <p className="text-base text-secondary">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button 
                  variant={plan.isFeatured ? "primary" : "ghost"} 
                  size="md"
                  fullWidth
                  icon={plan.isFeatured ? (
                    <img src="/images/img_vector_white_a700.svg" alt="Arrow" className="w-4 h-4" />
                  ) : null}
                  iconPosition="right"
                >
                  Get started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;