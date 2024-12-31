import React from 'react';

const LandingPage = () => {
  return (
    <div className="relative bg-white text-gray-900 min-h-[50vh] w-full flex items-center pl-8">
      {/* Hero Section */}
      <div className="text-left px-2 md:px-24 pt-20">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          Welcome to Our Amazing Product
        </h1>
        <p className="mt-4 text-lg sm:text-2xl">
          The future of technology, designed just for you.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
