import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      try {
        // Cek apakah data di localStorage dapat di-parse menjadi JSON
        const parsedUser = JSON.parse(loggedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Gagal mem-parsing data user dari localStorage:", error);
        // Jika terjadi error saat parsing, kosongkan data user
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = (userData) => {
    // Pastikan userData valid sebelum menyimpannya
    if (userData && typeof userData === "object") {
      localStorage.setItem("user", JSON.stringify(userData)); 
      setUser(userData);  // Set user di state
      navigate("/");  // Navigasi setelah login
    } else {
      console.error("Invalid user data:", userData); // Handle invalid user data
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
