import React from "react";
import { useNavigate } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/articles/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 md:px-24">
        {articles.map((article) => (
          <div
            key={article.id}
            className="relative rounded-lg overflow-hidden shadow-xl bg-white cursor-pointer"
            onClick={() => handleNavigate(article.id)}
          >
            {/* Article Image */}
            <div className="h-80">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md flex flex-col justify-end p-6">
              <h2 className="text-2xl font-bold text-white">
                {article.title}
              </h2>
              <p className="text-gray-300 mt-2">{article.description}</p>
              <span className="mt-4 inline-block text-blue-400 hover:underline">
                Read More →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
