import React from 'react';
import BlogDetail from './components/BlogDetail';

const mockData = {
  title: 'The Future of Web Development',
  author: {
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/48',
  },
  date: 'December 29, 2024',
  image: 'https://via.placeholder.com/1200x600',
  content: `
    <p>Web development is constantly evolving. As we move forward, new technologies and methodologies will continue to shape the way we create and interact with websites.</p>
    <h2>Key Trends</h2>
    <p>Some of the most promising trends include the rise of Web3, AI integration, and more accessible frameworks for developers.</p>
    <ul>
      <li>AI-enhanced tools for design and development</li>
      <li>Increased adoption of serverless architectures</li>
      <li>Continued growth of Progressive Web Apps (PWAs)</li>
    </ul>
    <p>The future is exciting, and we are just getting started!</p>
  `,
};

const BlogDetailPage = () => {
  return <BlogDetail {...mockData} />;
};

export default BlogDetailPage;
