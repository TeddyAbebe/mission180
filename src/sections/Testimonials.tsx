import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-rose-500 text-white">
      <div className="max-w-6xl mx-auto flex items-center">
        <div className="w-1/3">
          <img
            src="https://via.placeholder.com/300x400?text=Testimonial+Image"
            alt="Testimonial"
            className="rounded-lg"
          />
        </div>
        <div className="w-2/3 pl-8">
          <h2 className="text-3xl font-bold mb-4">Meet Thomas</h2>
          <p className="mb-4">
            "Thanks to CharityOrg, I now have access to clean water and a better
            future for my family. Their support has changed my life."
          </p>
          <a
            href="/stories"
            className="text-white font-semibold hover:underline"
          >
            Read More Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
