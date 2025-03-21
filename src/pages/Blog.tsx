import React from "react";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Impact of Clean Water on Communities",
      excerpt:
        "Learn how access to clean water can transform lives in rural areas.",
      image: "https://via.placeholder.com/400x300?text=Blog+Post+1",
    },
    {
      id: 2,
      title: "Education for All: Our Latest Initiative",
      excerpt: "Discover how we’re building schools in underserved regions.",
      image: "https://via.placeholder.com/400x300?text=Blog+Post+2",
    },
  ];

  return (
    <div className="py-16">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Blog</h1>
        <p className="text-gray-600 mb-8">
          Stay updated with our latest news, stories, and initiatives.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
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
      </section>
    </div>
  );
};

export default Blog;
