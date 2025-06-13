import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type = 'text',
  label = '',
  placeholder = '',
  value = '',
  onChange,
  name = '',
  id = '',
  error = '',
  disabled = false,
  required = false,
  icon = null,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  
  const baseClasses = 'w-full rounded-lg border transition-all duration-200 focus:outline-none';
  const stateClasses = error 
    ? 'border-text-accent text-text-accent focus:border-text-accent' 
    : isFocused 
      ? 'border-primary focus:border-primary' :'border-border focus:border-primary';
  
  const disabledClass = disabled ? 'bg-background-light cursor-not-allowed opacity-60' : 'bg-white';
  
  return (
    <div className={`${className}`}>
      {label && (
        <label 
          htmlFor={id || name} 
          className={`block mb-1 text-sm font-medium ${error ? 'text-text-accent' : 'text-secondary'}`}
        >
          {label}
          {required && <span className="text-text-accent ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`
            ${baseClasses}
            ${stateClasses}
            ${disabledClass}
            ${icon && iconPosition === 'left' ? 'pl-10' : 'pl-4'}
            ${icon && iconPosition === 'right' ? 'pr-10' : 'pr-4'}
            py-3
          `}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-text-accent">{error}</p>
      )}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
};

export default InputField;