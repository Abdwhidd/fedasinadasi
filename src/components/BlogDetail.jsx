import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = ({ articles }) => {
  const { id } = useParams();

  // Cari artikel berdasarkan ID
  const article = articles.find((article) => article.id === Number(id));

  if (!article) {
    return <p className="text-center text-gray-500 mt-20">Article not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 bg-black">
      {/* Hero Section */}
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-gray-200">
        {article.title}
      </h1>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-auto rounded-lg mb-8 object-cover"
        style={{ maxHeight: "500px" }}
      />

      <h3 className="text-3xl font-bold text-gray-200 mb-6">Filosofi</h3>
      <article
        className="prose prose-lg lg:prose-xl dark:prose-invert mx-auto mb-16 text-gray-200"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Gallery Section */}
      {article.gallery && article.gallery.length > 0 && (
        <>
          <h2 className="text-3xl font-bold text-gray-200 mb-6">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {article.gallery.map((painting) => (
              <div key={painting.id} className="relative group">
                <img
                  src={painting.src}
                  alt={painting.alt}
                  className="w-full h-auto rounded-lg object-cover transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium">{painting.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BlogDetail;
