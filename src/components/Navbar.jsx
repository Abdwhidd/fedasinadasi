import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../src/auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(user); // Local state untuk user

  useEffect(() => {
    setCurrentUser(user); // Update local state setiap kali `user` berubah
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed px-2 md:px-24 top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-300 text-1xl font-semibold">
            Dasinadasi
          </div>
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <>
                <Link
                  to="/profile"
                  className="px-4 py-2 border border-gray-300 text-gray-300 rounded-full font-medium text-sm hover:bg-gray-950 hover:text-gray-400 hover:border-gray-200 transition"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-gray-300 text-gray-300 rounded-full font-medium text-sm hover:bg-gray-950 hover:text-gray-400 hover:border-gray-200 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 border border-gray-300 text-gray-300 rounded-full font-medium text-sm hover:bg-gray-950 hover:text-gray-400 hover:border-gray-200 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
