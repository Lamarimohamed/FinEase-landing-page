import React from 'react';

const TrustIndicatorsSection = () => {
  const partners = [
    {
      name: "Stripe",
      logo: "/images/img_stripe.svg"
    },
    {
      name: "Uber",
      logo: "/images/img_vector.svg"
    },
    {
      name: "IBM",
      logo: "/images/img_vector_blue_800.svg"
    },
    {
      name: "Prime Video",
      logo: "/images/img_prime_video.svg"
    },
    {
      name: "Trustpilot",
      logo: "/images/img_trustpilot.svg"
    }
  ];

  return (
    <section className="py-16 bg-background-light relative">
      <div className="absolute left-0 top-0 w-[511px] h-[132px] bg-gradient-to-r from-transparent to-background-light"></div>
      <div className="absolute right-0 top-0 w-[511px] h-[132px] bg-gradient-to-l from-transparent to-background-light"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12 font-satoshi">
          Trusted by 10,000+ global users
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicatorsSection;