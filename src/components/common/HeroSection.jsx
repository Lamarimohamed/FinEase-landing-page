import React from 'react';
import Button from '../ui/Button';
import RatingBar from '../ui/RatingBar';

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-24 bg-background-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="z-10">
            <h1 className="text-[56px] font-bold leading-[68px] text-secondary mb-4 font-satoshi">
              Make your payment simple, secure, and stress-free
            </h1>
            <p className="text-xl text-secondary-light mb-8 font-general-sans font-medium">
              Effortlessly manage money, track expenses, and exchange currencies—all in one secure app
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="primary" size="lg">
                Download the App
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            {/* User Ratings */}
            <div className="flex items-center">
              <img src="/images/img_avatars.png" alt="User Avatars" className="h-12 mr-4" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-medium text-[17px] text-secondary">4.9/5.0</span>
                <div className="flex">
                  <RatingBar rating={5} />
                </div>
                <span className="font-medium text-[17px] text-secondary">based on 2348 reviews</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - App Screenshots */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-[529px] h-[529px] bg-primary-light rounded-full opacity-80 blur-md z-0"></div>
            <div className="relative z-10 flex justify-center">
              {/* Main Phone */}
              <img 
                src="/images/img_iphone_15_pro.png" 
                alt="FinEase App" 
                className="h-auto max-w-full relative z-20"
              />
              
              {/* Expense Card */}
              <div className="absolute top-10 left-12 bg-white rounded-lg p-2 shadow-lg w-[168px] z-10">
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <div>
                      <p className="text-[7px] font-semibold text-primary">$2450.00</p>
                      <p className="text-[5px] text-secondary-light">Average monthly spending</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[7px] font-semibold text-primary">$2300</p>
                      <p className="text-[5px] text-secondary-light">Spending this month</p>
                    </div>
                  </div>
                  
                  {/* Expense Categories */}
                  <div className="space-y-1">
                    {[
                      { name: 'General', percent: '50%', amount: '$1,150' },
                      { name: 'Food & Grocery', percent: '16%', amount: '$383' },
                      { name: 'Clothing', percent: '8%', amount: '$191.75' },
                      { name: 'Traveling', percent: '23%', amount: '$525.25' },
                      { name: 'Gym', percent: '3%', amount: '$50' }
                    ].map((category, index) => (
                      <div key={index} className="bg-background-light rounded p-1">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-[7px] font-semibold text-secondary">{category.name}</p>
                            <p className="text-[6px] text-secondary-light">{category.percent} of overall spending</p>
                          </div>
                          <p className="text-[8px] font-semibold text-primary">{category.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Currency Exchange Card */}
              <div className="absolute top-[375px] right-[50px] bg-background-light rounded-lg p-2 shadow-md w-[100px] z-10">
                <p className="text-[7px] font-bold text-secondary mb-1">Exchange USD</p>
                <p className="text-[3px] text-secondary-light mb-2">1 USD = 0.85 EUR</p>
                
                <div className="bg-white rounded p-1 mb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img src="/images/img_flag.svg" alt="US Flag" className="w-[5px] h-[4px]" />
                      <div className="ml-1">
                        <p className="text-[3px] font-semibold text-primary">Convert</p>
                        <p className="text-[4px] font-semibold text-secondary-dark">10</p>
                      </div>
                    </div>
                    <p className="text-[3px] font-semibold text-secondary">USD</p>
                  </div>
                </div>
                
                <div className="bg-white rounded p-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img src="/images/img_flags.svg" alt="EU Flag" className="w-[5px] h-[4px]" />
                      <div className="ml-1">
                        <p className="text-[3px] font-semibold text-primary">To</p>
                        <p className="text-[4px] font-semibold text-secondary-dark">8.5</p>
                      </div>
                    </div>
                    <p className="text-[3px] font-semibold text-secondary">EUR</p>
                  </div>
                </div>
              </div>
              
              {/* Credit Card */}
              <div className="absolute top-[260px] left-[160px] w-[202px] h-[177px] rounded-lg overflow-hidden z-10">
                <div className="w-full h-full bg-gradient-to-br from-secondary-dark to-primary p-4 rounded-lg">
                  <img src="/images/img_visalogo.svg" alt="Visa" className="absolute top-4 right-4 h-5" />
                  <p className="text-[8px] font-bold text-white absolute top-[77px] left-[17px]">FinEase</p>
                  <img src="/images/img_contactless.svg" alt="Contactless" className="w-3 h-3 absolute top-[70px] left-[47px]" />
                  <p className="text-[6px] font-bold text-white absolute top-[111px] left-[47px]">1234 9546 2486 3971</p>
                  <p className="text-[5px] font-bold text-white absolute top-[148px] left-[53px]">John Doe</p>
                  <div className="absolute top-[87px] right-[17px]">
                    <p className="text-[3px] text-white">VALID<br/>THRU</p>
                    <p className="text-[5px] font-bold text-white">05/27</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;