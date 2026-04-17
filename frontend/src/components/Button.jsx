// Button component
import React from 'react';

export const Button = ({
  children,
  loading = false,
  disabled = false,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles =
    'font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 disabled:bg-gray-300',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white disabled:opacity-50',
  };

  return (
    <button
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};
