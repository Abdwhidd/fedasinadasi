import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed px-2 md:px-24 top-0 left-0 w-full z-50 bg-white bg-opacity-30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-900 text-1xl font-semibold">
            Picopico
          </div>
          <div className="flex items-center space-x-4">
            {/* Login Button */}
            <a
              href="#login"
              className="px-4 py-2 border border-gray-900 text-gray-900 rounded-full font-medium text-sm hover:bg-gray-100 hover:border-gray-700 transition"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
