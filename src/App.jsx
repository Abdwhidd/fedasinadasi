import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import ArticlesList from './components/ArticlesList';
import BlogDetail from './components/BlogDetail';

function App() {
  const articles = [
    {
      id: 1,
      image: "https://via.placeholder.com/400",
      title: "The Future of Technology",
      description: "Explore the trends shaping the tech industry in 2024.",
      content: "<p>Detailed content about the future of technology...</p>",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400",
      title: "Sustainable Design",
      description: "How to incorporate sustainability into modern design.",
      content: "<p>Detailed content about sustainable design...</p>",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400",
      title: "AI and Innovation",
      description: "The role of AI in driving innovation across industries.",
      content: "<p>Detailed content about AI and innovation...</p>",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400",
      title: "Blockchain and the Future",
      description: "How blockchain technology is reshaping industries.",
      content: "<p>Detailed content about blockchain...</p>",
    },
  ];

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
