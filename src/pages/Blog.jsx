// src/pages/Blog.jsx
import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "5 Must-Try Summer Salads",
    excerpt: "Cool down this summer with these refreshing salad ideas...",
    image: "/blog (1).jpg",
    date: "July 1, 2025",
  },
  {
    id: 2,
    title: "Chef’s Secrets for Perfect Pasta",
    excerpt: "Learn the secrets to making restaurant-quality pasta at home.",
    image: "/blog (2).jpg",
    date: "July 10, 2025",
  },
  {
    id: 3,
    title: "Why Fresh Ingredients Matter",
    excerpt: "Discover how fresh produce can elevate your dishes.",
    image: "/blog (3).jpg",
    date: "July 18, 2025",
  },
  {
    id: 4,
    title: "Top 7 Breakfast Ideas for Busy Mornings",
    excerpt: "Kickstart your day with these quick and nutritious breakfast recipes.",
    image: "/blog (4).jpg",
    date: "July 21, 2025",
  },
];

const Blog = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-red-600 mb-8">Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{post.date}</p>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.excerpt}</p>
              <button className="mt-3 text-red-600 hover:underline">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
