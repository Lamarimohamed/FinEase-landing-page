import React, { useState } from 'react';
import Card from '../../components/common/Card';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "\"FinEase has completely revolutionized my financial habits. The intuitive interface and robust tools make managing my expenses and savings effortless.\"",
      avatar: "/images/img_image_48x48.png",
      name: "Alexander Reus",
      title: "Freelance Consultant"
    },
    {
      quote: "\"Sending money internationally has never been this seamless. The platform offers speed, reliability, and transparency, making it a cost-effective solution for global transfers.\"",
      avatar: "/images/img_image_1.png",
      name: "Sarah Dawson",
      title: "Founder of Nomad Agency"
    },
    {
      quote: "\"With automated savings and clear insights, FinEase has given me the confidence to manage my money better. It\'s a game-changer for busy professionals.\"",
      avatar: "/images/img_image_2.png",
      name: "Michael Lewis",
      title: "Software Developer"
    }
  ];
  
  const handlePrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-primary h-[356px] top-1/2 transform -translate-y-1/2 rounded-3xl mx-4 md:mx-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12 font-satoshi">
          Our customers say it best
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              shadow={true} 
              className="h-full"
            >
              <p className="text-base text-secondary-light mb-8">
                <span className="font-normal">{testimonial.quote.split(" ").slice(0, 2).join(" ")} </span>
                <span className="font-normal text-secondary">{testimonial.quote.split(" ").slice(2, 3).join(" ")} </span>
                <span className="font-normal">{testimonial.quote.split(" ").slice(3, 8).join(" ")} </span>
                <span className="font-normal text-secondary">{testimonial.quote.split(" ").slice(8, 10).join(" ")} </span>
                <span className="font-normal">{testimonial.quote.split(" ").slice(10, 12).join(" ")} </span>
                <span className="font-normal text-secondary">{testimonial.quote.split(" ").slice(12).join(" ")}</span>
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-[17px] font-semibold text-secondary">
                    {testimonial.name}
                  </h4>
                  <p className="text-base text-secondary-light">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="w-[60px] h-3 bg-primary rounded-md mx-1"></div>
          <div className="w-3 h-3 bg-primary-lighter rounded-full mx-1"></div>
          <div className="w-3 h-3 bg-primary-lighter rounded-full mx-1"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;