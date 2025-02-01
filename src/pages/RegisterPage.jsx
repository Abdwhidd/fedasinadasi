import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosInstance"; 

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(""); // State untuk error message
  const [loading, setLoading] = useState(false); // State untuk loading button
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error message sebelum mencoba registrasi

    try {
      await API.post("/api/register", formData);
      alert("Registrasi berhasil! Silakan login.");
      navigate("/login"); // Redirect ke halaman login setelah sukses
    } catch (error) {
      setError(error.response?.data?.message || "Registrasi gagal. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nama" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
