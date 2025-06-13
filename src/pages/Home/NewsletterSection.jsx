import React, { useState } from 'react';
import Button from '../../components/ui/Button';


const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Illustration */}
          <div className="relative">
            <img 
              src="/images/img_freepikcharacterinject280.svg" 
              alt="Financial Expert" 
              className="max-w-sm mx-auto"
            />
            <img 
              src="/images/img_freepikpaperplanesinject280.svg" 
              alt="Paper Planes" 
              className="absolute top-8 right-1/4 w-[214px]"
            />
            <img 
              src="/images/img_freepikdeviceinject280.svg" 
              alt="Device" 
              className="absolute bottom-0 left-1/4 w-[208px]"
            />
          </div>
          
          {/* Right Column - Form */}
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-6 font-satoshi">
              Stay Ahead with Expert Financial Tips!
            </h2>
            <p className="text-xl text-secondary-light mb-8 font-general-sans font-medium">
              Subscribe to our newsletter and get our free guide: Five Steps to Master Your Finances
            </p>
            
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="bg-white border border-border rounded-lg p-2 flex items-center">
                <div className="flex items-center pl-2 pr-4 flex-grow">
                  <img 
                    src="/images/img_hugeicon_communication_outline_mail.svg" 
                    alt="Email" 
                    className="w-6 h-6 mr-2"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full text-base text-secondary-light focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="md"
                >
                  Subscribe now
                </Button>
              </div>
            </form>
            
            {isSubscribed && (
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md mb-4">
                Thank you for subscribing! Check your email for the free guide.
              </div>
            )}
            
            <p className="text-[15px] text-secondary-light">
              No ads, No trails
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;