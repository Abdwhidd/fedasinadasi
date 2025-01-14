import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed px-2 md:px-24 top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-300 text-1xl font-semibold">
            Dasinadasi
          </div>
          <div className="flex items-center space-x-4">
  {/* Login Button */}
  <a
    href="/login"
    className="px-4 py-2 border border-gray-300 text-gray-300 rounded-full font-medium text-sm hover:bg-gray-950 hover:text-gray-400 hover:border-gray-200 transition"
  >
    Contact
  </a>
</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
