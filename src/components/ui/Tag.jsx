import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({
  children,
  variant = 'default',
  size = 'md',
  rounded = 'full',
  onClose = null,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center font-medium';
  
  const variantClasses = {
    default: 'bg-background-light text-secondary',
    primary: 'bg-primary-lighter text-primary',
    secondary: 'bg-secondary text-white',
    outline: 'bg-transparent border border-border text-secondary',
  };
  
  const sizeClasses = {
    sm: 'text-xs py-1 px-2',
    md: 'text-sm py-1 px-3',
    lg: 'text-base py-1.5 px-4',
  };
  
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };
  
  return (
    <span
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${roundedClasses[rounded]}
        ${className}
      `}
      {...props}
    >
      {children}
      
      {onClose && (
        <button
          type="button"
          className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-opacity-20 hover:bg-black focus:outline-none"
          onClick={onClose}
          aria-label="Remove"
        >
          <svg
            className="w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
  onClose: PropTypes.func,
  className: PropTypes.string,
};

export default Tag;