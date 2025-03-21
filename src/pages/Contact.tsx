import React from "react";
import Button from "../components/Button";

const Contact: React.FC = () => {
  return (
    <div className="py-16">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have questions or want to get involved? We’d love to hear from you!
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Your Message"
                rows={4}
              />
            </div>
            <Button>Send Message</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> info@charityorg.org
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> 123 Charity Lane, Hope City, USA
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
