import React from 'react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-background-light relative">
      <div className="absolute right-0 top-0 w-[469px] h-[469px] bg-primary-light rounded-full opacity-80 blur-md"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text */}
          <div className="z-10">
            <h2 className="text-[56px] font-bold leading-tight text-secondary mb-4 font-satoshi">
              Take the First Step Toward Financial Freedom
            </h2>
            <p className="text-xl text-secondary-light mb-8 font-general-sans font-medium">
              Download the app and join thousands of users who trust FinEase for seamless money management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Google Play Button */}
              <a 
                href="#download" 
                className="border border-black rounded-md flex items-center justify-center px-4 py-2 bg-white"
              >
                <div className="mr-2">
                  <img src="/images/img_subtract.svg" alt="Google Play" className="h-6" />
                </div>
                <div className="flex flex-col">
                  <img src="/images/img_get_it_on.svg" alt="Get it on" className="h-1.5" />
                  <img src="/images/img_google_play.svg" alt="Google Play" className="h-4 mt-1" />
                </div>
              </a>
              
              {/* App Store Button */}
              <a 
                href="#download" 
                className="border border-black rounded-md flex items-center justify-center px-4 py-2 bg-white"
              >
                <div className="mr-2">
                  <img src="/images/img_apple_logo.svg" alt="Apple" className="h-5" />
                </div>
                <div className="flex flex-col">
                  <img src="/images/img_download_on_the.svg" alt="Download on the" className="h-1.5" />
                  <img src="/images/img_app_store.svg" alt="App Store" className="h-4 mt-1" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <img 
              src="/images/img_iphone_16_pro.png" 
              alt="FinEase App" 
              className="relative z-10 max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;