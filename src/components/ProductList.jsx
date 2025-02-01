import React from "react";
import { useNavigate } from "react-router-dom";

const ProductList = ({ articles }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/articles/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 md:px-24">
        {articles.map((article) => (
          <div
            key={article.id}
            className="relative rounded-lg overflow-hidden shadow-xl cursor-pointer group border-[1px] border-transparent bg-clip-border bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600"
            onClick={() => handleNavigate(article.id)}
          >
            {/* Article Image */}
            <div className="h-80">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
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

export default ProductList;
