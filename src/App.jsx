import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import ArticlesList from './pages/ArticlesList';
import BlogDetail from './components/BlogDetail';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import articles from './data/articles'; 
import { AuthProvider } from './auth/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider> {/* AuthProvider harus di dalam Router */}
        <Navbar />
        <Routes>
          {/* Halaman Home */}
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <ArticlesList articles={articles} />
              </>
            }
          />
          <Route path="/articles" element={<ArticlesList articles={articles} />} />
          <Route path="/articles/:id" element={<BlogDetail articles={articles} />} />
          
          {/* Halaman Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
