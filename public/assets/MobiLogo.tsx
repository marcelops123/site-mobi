import React from 'react';

const MobiLogo: React.FC = () => {
  return (
    // Using an img tag to display the logo from the provided URL
    <img
      src="./assets/logo_principal_black.png"
      alt="Logo da MOBI"
      crossOrigin='anonymous'
      className="w-full h-full object-cover"
    />
  );
};

export default MobiLogo;