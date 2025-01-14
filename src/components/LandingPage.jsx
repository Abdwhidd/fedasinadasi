import React from 'react';
import { SpotlightPreview } from './ui/SpotlightPreview';

const LandingPage = () => {
  return (
    <div className="relative bg-black text-gray-900 min-h-[50vh] w-full flex items-center pl-8">
      {/* Hero Section */}
      <div className="text-left px-2 md:px-24 pt-20">
        <h1 className="text-gray-300 text-4xl sm:text-6xl font-bold">
          Cerita lewat coretan
        </h1>
        <p className="mt-4 text-lg sm:text-2xl text-gray-300">
          Maaf Websitenya masih dalam proses development 
        </p>
      </div>
    </div>
    // <SpotlightPreview/>
  );
};

export default LandingPage;
