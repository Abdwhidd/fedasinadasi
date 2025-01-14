import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import ArticlesList from './components/ArticlesList';
import BlogDetail from './components/BlogDetail';
import LoginPage from './components/Auth/LoginPage';
import RegisterPage from './components/Auth/RegisterPage';
import articles from './data/articles'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
