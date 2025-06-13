import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'default',
  shadow = false,
  border = true,
  rounded = 'default'
}) => {
  const variantClasses = {
    default: 'bg-white',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    teal: 'bg-background-teal',
  };

  const paddingClasses = {
    none: 'p-0',
    small: 'p-3',
    default: 'p-6',
    large: 'p-8',
  };

  const roundedClasses = {
    none: 'rounded-none',
    small: 'rounded',
    default: 'rounded-lg',
    large: 'rounded-xl',
    xl: 'rounded-2xl',
    full: 'rounded-3xl',
  };

  const shadowClass = shadow ? 'shadow-card' : '';
  const borderClass = border ? 'border border-border' : '';

  return (
    <div className={`
      ${variantClasses[variant]} 
      ${paddingClasses[padding]} 
      ${roundedClasses[rounded]} 
      ${shadowClass} 
      ${borderClass} 
      ${className}
    `}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'teal']),
  padding: PropTypes.oneOf(['none', 'small', 'default', 'large']),
  shadow: PropTypes.bool,
  border: PropTypes.bool,
  rounded: PropTypes.oneOf(['none', 'small', 'default', 'large', 'xl', 'full']),
};

export default Card;