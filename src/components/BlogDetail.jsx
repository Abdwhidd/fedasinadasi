import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = ({ articles }) => {
  const { id } = useParams();

  // Cari artikel berdasarkan ID
  const article = articles.find((article) => article.id === Number(id));

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 bg-white">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-auto rounded-lg mb-6"
      />
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
};

export default BlogDetail;
