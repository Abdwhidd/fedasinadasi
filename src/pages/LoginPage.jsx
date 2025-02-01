import { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import API from "../api/axiosInstance"; // Gunakan Axios instance

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // State untuk error message
  const [loading, setLoading] = useState(false); // State untuk loading button

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error message sebelum mencoba login
  
    try {
      const response = await API.post("/login", formData);
      console.log("API Response:", response); // Log respons API untuk debugging
  
      // Cek jika ada data dalam response.data dan data.user serta data.token
      if (response.data?.data?.user && response.data?.data?.token) {
        const { token, user } = response.data.data; // Ambil user dan token dari data
  
        // Simpan token ke localStorage
        localStorage.setItem("token", token);
  
        // Login dengan data user dari API
        login(user);
      } else {
        throw new Error("User data or token is missing in response");
      }
  
    } catch (err) {
      console.error("Login error:", err); // Menambahkan log untuk debug
      setError(err.response?.data?.message || err.message || "Login gagal! Periksa kembali kredensial Anda.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
