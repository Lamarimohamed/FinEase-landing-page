// src/pages/finease-payment-app-homepage/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import RatingBar from '../../components/ui/RatingBar';

const FineasePaymentAppHomepage = () => {
  // Features section data
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

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image: "/images/img_image_1.png",
      content: "FinEase transformed how I manage my business finances. The expense tracking is intuitive and the currency exchange rates are the best I\'ve found.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      image: "/images/img_image_2.png",
      content: "As someone who works with international clients, the seamless currency exchange and instant transfers have saved me countless hours and money.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Nomad",
      image: "/images/img_image_48x48.png",
      content: "I travel constantly for work, and FinEase has been a game-changer. The security features give me peace of mind no matter where I am.",
      rating: 4
    }
  ];

  // Pricing plans
  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      description: "Essential features for personal finance management",
      features: [
        "Expense tracking",
        "Up to 3 accounts",
        "Basic reports",
        "Standard security"
      ],
      isFeatured: false,
      ctaText: "Get Started"
    },
    {
      name: "Premium",
      price: "$8.99",
      period: "/month",
      description: "Advanced features for comprehensive financial management",
      features: [
        "Everything in Basic",
        "Unlimited accounts",
        "Currency exchange",
        "Advanced analytics",
        "Premium security",
        "Priority support"
      ],
      isFeatured: true,
      ctaText: "Start Free Trial"
    },
    {
      name: "Business",
      price: "$24.99",
      period: "/month",
      description: "Complete solution for businesses of all sizes",
      features: [
        "Everything in Premium",
        "Multi-user access",
        "Expense approvals",
        "Invoice management",
        "API integration",
        "Dedicated support"
      ],
      isFeatured: false,
      ctaText: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-background-light">
      {/* Header Section */}
      <header className="py-4 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/img_logo_frame.png" alt="FinEase Logo" className="h-[42px] w-[42px]" />
            <img src="/images/img_name.svg" alt="FinEase" className="h-6 ml-2" />
          </div>
          
          {/* Mobile Navigation Menu - Hidden by default */}
          <div id="mobile-nav" className="hidden fixed inset-0 z-50 bg-white p-5">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <img src="/images/img_logo_frame.png" alt="FinEase Logo" className="h-[42px] w-[42px]" />
                <img src="/images/img_name.svg" alt="FinEase" className="h-6 ml-2" />
              </div>
              <button 
                onClick={() => {
                  const mobileNav = document.getElementById('mobile-nav');
                  if (mobileNav) {
                    mobileNav.classList.add('hidden');
                  }
                }}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              <Link to="/finease-payment-app-homepage" className="text-secondary font-medium text-xl">
                Features
              </Link>
              <Link to="/finease-payment-app-homepage" className="text-secondary font-medium text-xl">
                Pricing
              </Link>
              <Link to="/finease-payment-app-homepage" className="text-secondary font-medium text-xl">
                Testimonials
              </Link>
              <Link to="/finease-payment-app-homepage" className="text-secondary font-medium text-xl">
                About
              </Link>
              <div className="pt-6 border-t border-gray-200">
                <Link to="/finease-payment-app-homepage" className="text-primary font-semibold text-xl block mb-4">
                  Log in
                </Link>
                <Button variant="primary" size="md" fullWidth>
                  Get started
                </Button>
              </div>
            </nav>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/finease-payment-app-homepage" className="text-secondary font-medium text-base">
              Features
            </Link>
            <Link to="/finease-payment-app-homepage" className="text-secondary font-medium text-base">
              Pricing
            </Link>
            <Link to="/finease-payment-app-homepage" className="text-secondary font-medium text-base">
              Testimonials
            </Link>
            <Link to="/finease-payment-app-homepage" className="text-secondary font-medium text-base">
              About
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/finease-payment-app-homepage" className="text-primary font-semibold text-[17px]">
              Log in
            </Link>
            <Button variant="primary" size="md">
              Get started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => {
              const mobileNav = document.getElementById('mobile-nav');
              if (mobileNav) {
                mobileNav.classList.toggle('hidden');
              }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
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
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={() => {
                      document.querySelector('#download-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Download the App
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => {
                      document.querySelector('#features-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
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

        {/* Trust Indicators Section */}
        <section className="py-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-secondary mb-4 font-satoshi">Trusted by leading companies</h2>
            </div>
            <style>
              {`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .companies-scroll {
                  display: flex;
                  width: max-content;
                  animation: scroll 20s linear infinite;
                }
                .companies-container {
                  overflow: hidden;
                  width: 100%;
                  position: relative;
                }
                .companies-container::before,
                .companies-container::after {
                  content: "";
                  position: absolute;
                  top: 0;
                  width: 50px;
                  height: 100%;
                  z-index: 2;
                }
                .companies-container::before {
                  left: 0;
                  background: linear-gradient(to right, white, transparent);
                }
                .companies-container::after {
                  right: 0;
                  background: linear-gradient(to left, white, transparent);
                }
              `}
            </style>
            <div className="companies-container">
              <div className="companies-scroll">
                {/* First set of logos */}
                <div className="flex items-center gap-16 mx-8">
                  <img src="/images/img_stripe.svg" alt="Stripe" className="h-8" />
                  <img src="/images/img_mastercard_logo.svg" alt="PayPal" className="h-8" />
                  <img src="/images/img_visalogo.svg" alt="Visa" className="h-8" />
                  <img src="/images/img_mastercard_logo.svg" alt="Mastercard" className="h-8" />
                  <img src="/images/img_google.svg" alt="Google" className="h-8" />
                  <img src="/images/img_apple_logo.svg" alt="Apple" className="h-8" />
                </div>
                {/* Duplicate logos for seamless looping */}
                <div className="flex items-center gap-16 mx-8">
                  <img src="/images/img_stripe.svg" alt="Stripe" className="h-8" />
                  <img src="/images/img_mastercard_logo.svg" alt="PayPal" className="h-8" />
                  <img src="/images/img_visalogo.svg" alt="Visa" className="h-8" />
                  <img src="/images/img_mastercard_logo.svg" alt="Mastercard" className="h-8" />
                  <img src="/images/img_google.svg" alt="Google" className="h-8" />
                  <img src="/images/img_apple_logo.svg" alt="Apple" className="h-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features-section" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            <h2 className="text-4xl font-bold text-center text-secondary mb-16 font-satoshi">
              Smart Features Designed for You
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-card"
                >
                  <div className="feature-icon-container">
                    <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-[22px] font-bold text-secondary text-center mb-2 font-satoshi">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[17px] text-secondary-light text-center font-general-sans font-medium">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Screenshots Section */}
        <section className="py-20 bg-background-teal">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl font-bold text-secondary mb-6 font-satoshi">
                  Manage Your Finances with Ease
                </h2>
                <p className="text-xl text-secondary-light mb-8 font-general-sans font-medium">
                  FinEase provides powerful yet simple tools to help you stay on top of your finances. From expense tracking to currency exchange, everything is just a tap away.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <img src="/images/img_hugeicon_interface_outline_tick.svg" alt="Tick" className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2 font-satoshi">Intuitive Interface</h3>
                      <p className="text-[17px] text-secondary-light font-general-sans font-medium">
                        Simple navigation and clear visuals make managing finances straightforward
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <img src="/images/img_hugeicon_interface_outline_tick.svg" alt="Tick" className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2 font-satoshi">Smart Notifications</h3>
                      <p className="text-[17px] text-secondary-light font-general-sans font-medium">
                        Get timely alerts about unusual spending or upcoming bill payments
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <img src="/images/img_hugeicon_interface_outline_tick.svg" alt="Tick" className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2 font-satoshi">Cross-Platform Sync</h3>
                      <p className="text-[17px] text-secondary-light font-general-sans font-medium">
                        Access your financial data across all your devices, always in sync
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative flex justify-center">
                <img 
                  src="/images/img_iphone_18.png" 
                  alt="FinEase App Features" 
                  className="max-w-full relative z-10"
                />
                <img 
                  src="/images/img_transfer_screen_6.png" 
                  alt="FinEase Transfer Screen" 
                  className="absolute -top-10 -right-5 max-w-[60%] z-20 shadow-lg rounded-3xl"
                />
                <img 
                  src="/images/img_sign_up_screen_3_2.png" 
                  alt="FinEase Sign Up Screen" 
                  className="absolute -bottom-10 -left-5 max-w-[60%] z-20 shadow-lg rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="relative bg-primary-lighter rounded-3xl p-8 z-10">
                  <img 
                    src="/images/img_authenticationrafiki.svg" 
                    alt="Security Illustration" 
                    className="max-w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-primary rounded-full w-40 h-40 opacity-10 z-0"></div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-secondary mb-6 font-satoshi">
                  Bank-Level Security for Your Peace of Mind
                </h2>
                <p className="text-xl text-secondary-light mb-8 font-general-sans font-medium">
                  Your financial security is our top priority. FinEase employs industry-leading security measures to ensure your data and money are always protected.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white shadow-md w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <img src="/images/img_hugeicon_interface_outline_lock.svg" alt="Lock" className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2 font-satoshi">End-to-End Encryption</h3>
                      <p className="text-[17px] text-secondary-light font-general-sans font-medium">
                        All your data is encrypted during transmission and storage
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white shadow-md w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <img src="/images/img_hugeicon_interface_outline_user.svg" alt="User" className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2 font-satoshi">Biometric Authentication</h3>
                      <p className="text-[17px] text-secondary-light font-general-sans font-medium">
                        Access your account securely with fingerprint or face recognition
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white shadow-md w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <img src="/images/img_hugeicon_communication_outline_send.svg" alt="Notification" className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2 font-satoshi">Fraud Monitoring</h3>
                      <p className="text-[17px] text-secondary-light font-general-sans font-medium">
                        Advanced systems detect and prevent suspicious activities in real-time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            <h2 className="text-4xl font-bold text-center text-secondary mb-16 font-satoshi">
              What Our Users Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="mb-6">
                    <RatingBar rating={testimonial.rating} />
                  </div>
                  
                  <p className="text-[17px] text-secondary-light mb-6 font-general-sans font-medium">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-secondary text-[17px] font-satoshi">{testimonial.name}</h4>
                      <p className="text-secondary-light text-[15px] font-general-sans">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-4 font-satoshi">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-secondary-light max-w-2xl mx-auto font-general-sans font-medium">
                Choose the plan that works best for your financial needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`pricing-card ${plan.isFeatured ? 'pricing-card-featured' : ''}`}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-secondary mb-2 font-satoshi">{plan.name}</h3>
                    <div className="flex items-end mb-2">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      {plan.period && <span className="text-secondary-light ml-1">{plan.period}</span>}
                    </div>
                    <p className="text-[17px] text-secondary-light font-general-sans font-medium">{plan.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="pricing-feature">
                        <img 
                          src="/images/img_hugeicon_interface_outline_tick.svg" 
                          alt="Included" 
                          className="w-6 h-6 text-primary"
                        />
                        <span className="text-[17px] text-secondary font-general-sans">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <Button 
                      variant={plan.isFeatured ? 'primary' : 'outline'} 
                      size="lg" 
                      fullWidth
                    >
                      {plan.ctaText}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-lighter">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl font-bold text-secondary mb-6 font-satoshi">
                  Ready to Take Control of Your Finances?
                </h2>
                <p className="text-xl text-secondary-light mb-8 font-general-sans font-medium">
                  Join thousands of satisfied users who have transformed their financial lives with FinEase.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={() => {
                      // In a real app, this would link to app stores
                      window.location.href = '#download-section';
                    }}
                  >
                    Download Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => {
                      // Scroll to features section
                      document.querySelector('#features-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Learn More
                  </Button>
                </div>
                
                <div id="download-section" className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a href="#" className="flex items-center">
                    <img src="/images/img_app_store.svg" alt="App Store" className="h-12" />
                  </a>
                  <a href="#" className="flex items-center">
                    <img src="/images/img_google_play.svg" alt="Google Play" className="h-12" />
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/images/img_graphic.png" 
                  alt="FinEase App" 
                  className="max-w-full relative z-10"
                />
                <div className="absolute -bottom-10 -right-10 bg-primary rounded-full w-40 h-40 opacity-10 z-0"></div>
                <div className="absolute -top-10 -left-10 bg-primary-dark rounded-full w-32 h-32 opacity-10 z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 md:px-10 text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4 font-satoshi">
              Stay Updated with FinEase
            </h2>
            <p className="text-[17px] text-secondary-light mb-8 font-general-sans font-medium">
              Subscribe to our newsletter for the latest features, tips, and financial insights
            </p>
            
            <form 
              className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.email.value;
                if (email && email.includes('@') && email.includes('.')) {
                  // In a real app, this would send the data to an API
                  alert('Thank you for subscribing!');
                  e.target.reset();
                } else {
                  alert('Please enter a valid email address');
                }
              }}
            >
              <div className="flex-grow">
                <input 
                  name="email"
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg border border-secondary-lighter focus:ring-primary focus:ring-2 focus:outline-none"
                  aria-label="Email address"
                  required
                />
              </div>
              <Button variant="primary" size="md" type="submit">
                Subscribe
              </Button>
            </form>
            
            <p className="text-[15px] text-secondary-light mt-4 font-general-sans">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo and Social Links */}
            <div className="col-span-1">
              <div className="flex items-center mb-6">
                <img src="/images/img_logo_frame.png" alt="FinEase Logo" className="h-[42px] w-[42px]" />
                <img src="/images/img_name.svg" alt="FinEase" className="h-6 ml-2" />
              </div>
              <p className="text-[15px] text-[#f6f6f6] mb-6">
                Making financial management simple, secure, and accessible for everyone.
              </p>
            </div>

            {/* Legal Links */}
            <div className="col-span-1">
              <h3 className="text-[17px] font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/finease-payment-app-homepage" className="text-[#f6f6f6] text-[15px]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/finease-payment-app-homepage" className="text-[#f6f6f6] text-[15px]">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/finease-payment-app-homepage" className="text-[#f6f6f6] text-[15px]">
                    Legal agreements
                  </Link>
                </li>
                <li>
                  <Link to="/finease-payment-app-homepage" className="text-[#f6f6f6] text-[15px]">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="col-span-1">
              <h3 className="text-[17px] font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/finease-payment-app-homepage" className="text-[#f6f6f6] text-[15px]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/finease-payment-app-homepage" className="text-[#f6f6f6] text-[15px]">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/finease-payment-app-homepage" className="text-[#f6f6f6] text-[15px]">
                    Plans
                  </Link>
                </li>
                <li>
                  <Link to="/finease-payment-app-homepage" className="text-[#f6f6f6] text-[15px]">
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="col-span-1">
              <h3 className="text-[17px] font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/finease-payment-app-homepage" className="text-[#f6f6f6] text-[15px]">
                    Essentials
                  </Link>
                </li>
                <li>
                  <Link to="/finease-payment-app-homepage" className="text-[#f6f6f6] text-[15px]">
                    Saving accounts
                  </Link>
                </li>
                <li>
                  <Link to="/finease-payment-app-homepage" className="text-[#f6f6f6] text-[15px]">
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/finease-payment-app-homepage" className="text-[#f6f6f6] text-[15px]">
                    Insurance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="col-span-1 lg:col-span-4">
              <h3 className="text-[17px] font-semibold mb-4">Contact Information</h3>
              <p className="text-[15px] mb-2">
                Email: <a href="mailto:support@finease.com" className="underline">support@finease.com</a>
              </p>
              <p className="text-[15px]">Phone: +123-456-7890</p>
            </div>
          </div>

          {/* Copyright and Social Icons */}
          <div className="mt-16 pt-8 border-t border-[#e7ebeb] flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-[15px] text-[#f6f6f6]">© 2024 FinEase. All Rights Reserved</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white w-8 h-8 flex items-center justify-center rounded">
                <img src="/images/img_vector_gray_900.png" alt="Facebook" className="w-3" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/img_vector_white_a700_32x32.svg" alt="Twitter" className="w-8 h-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/img_vector_32x32.svg" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/img_x.svg" alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FineasePaymentAppHomepage;