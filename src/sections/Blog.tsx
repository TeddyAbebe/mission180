import React from "react";

const BlogSection: React.FC = () => {
  const recentPosts = [
    {
      id: 1,
      title: "The Impact of Clean Water",
      excerpt: "Learn how access to clean water can transform lives.",
      image: "https://via.placeholder.com/300x200?text=Blog+Post+1",
    },
    {
      id: 2,
      title: "Education for All",
      excerpt: "Discover how we’re building schools in underserved regions.",
      image: "https://via.placeholder.com/300x200?text=Blog+Post+2",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Recent Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="text-rose-500 font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
