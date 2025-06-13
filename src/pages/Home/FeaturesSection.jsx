import React from 'react';
import Card from '../../components/common/Card';

const FeaturesSection = () => {
  const features = [
    {
      icon: "/images/img_hugeicon_finance_and_payment_outline_profit_02.svg",
      title: "Expense Tracker",
      description: "Track your spending in real time and gain full control of your budget"
    },
    {
      icon: "/images/img_hugeicon_finance_and_payment_outline_profit.svg",
      title: "Seamless Transfers",
      description: "Send and receive money instantly, anywhere, without hidden fees"
    },
    {
      icon: "/images/img_hugeicon_finance_and_payment_outline_transfer.svg",
      title: "Currency Exchange",
      description: "Get the best exchange rates for every transaction"
    },
    {
      icon: "/images/img_hugeicon_finance_and_payment_outline_safe_box_01.svg",
      title: "Enhanced Security",
      description: "State-of-the-art encryption ensures your data stays safe"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <h2 className="text-4xl font-bold text-center text-secondary mb-16 font-satoshi">
          Smart Features Designed for You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              variant="teal" 
              rounded="xl" 
              className="flex flex-col items-center"
            >
              <div className="bg-primary w-[60px] h-[60px] rounded-lg flex items-center justify-center mb-5">
                <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
              </div>
              
              <h3 className="text-[22px] font-bold text-secondary text-center mb-2 font-satoshi">
                {feature.title}
              </h3>
              
              <p className="text-[17px] text-secondary-light text-center font-general-sans font-medium">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;