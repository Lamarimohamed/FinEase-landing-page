import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({ 
  rating = 0, 
  maxRating = 5, 
  size = 'md',
  color = 'primary',
  showValue = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-[18px] h-[18px]',
    lg: 'w-6 h-6'
  };
  
  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    gold: 'text-yellow-400'
  };
  
  const renderStars = () => {
    const stars = [];
    
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <svg 
          key={i}
          className={`${sizeClasses[size]} ${i <= rating ? colorClasses[color] : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex">
        {renderStars()}
      </div>
      
      {showValue && (
        <span className="ml-2 text-sm font-medium text-secondary">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

RatingBar.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['primary', 'secondary', 'gold']),
  showValue: PropTypes.bool,
  className: PropTypes.string
};

export default RatingBar;