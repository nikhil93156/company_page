// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  // Function to generate a random license key
  const generateLicenseKey = () => {
    // Example: 16-character alphanumeric key
    return Math.random().toString(36).substring(2, 10).toUpperCase() +
           Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const handleSellClick = () => {
    const licenseKey = generateLicenseKey();
    window.alert(`Your license ${licenseKey} is sold`);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Turn Unused Software into Profit
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        Easily sell your old software licenses and get paid fast. No hassle, no waiting.
      </p>
      <button
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
        onClick={handleSellClick}
      >
        Sell My Licenses
      </button>
    </section>
  );
};

export default Hero;
