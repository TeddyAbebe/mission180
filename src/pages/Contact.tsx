import React from "react";
import Button from "../components/Button";
import DonateBanner from "../assets/DonateBanner.jpg";

const Contact: React.FC = () => {
  return (
    <section>
      {/* DonateBanner Section */}
      <div className="relative">
        <div
          className="relative w-full h-[500px] sm:h-[600px] bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${DonateBanner})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-left">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Contact Us
              </h1>
              <p className="text-white text-lg sm:text-xl lg:text-2xl mt-4 max-w-md italic">
                "We’d love to hear from you!"
              </p>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute bottom-0 md:w-[70%] mx-auto left-0 right-0 transform translate-y-1/2 sm:translate-y-[57%] bg-gray-100 rounded-t-lg p-2 md:p-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Get in Touch
            </h2>
            <div className="w-20 h-1 bg-rose-500 mx-auto my-6"></div>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto text-justify">
              Have questions or want to get involved? Reach out to us! Our team
              is here to assist you and provide more information about
              Mission:180 Ministries.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="bg-gray-100 pt-40 sm:pt-56 pb-12">
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-0">
          {/* Form Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-300 bg-gray-50 text-gray-900 placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-300 bg-gray-50 text-gray-900 placeholder-gray-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-300 bg-gray-50 text-gray-900 placeholder-gray-400"
                  placeholder="Your Message"
                  rows={5}
                />
              </div>
              <Button className="w-full bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors duration-300 font-semibold">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Directors
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-gray-600">
                    <p>
                      <strong className="text-gray-800">Jason Sheppard</strong>
                      <br />
                      Phone (Kenya):{" "}
                      <a
                        href="tel:011254732235118"
                        className="text-rose-500 hover:underline"
                      >
                        011254732235118
                      </a>
                      <br />
                      Email:{" "}
                      <a
                        href="mailto:jason@mission180.ca"
                        className="text-rose-500 hover:underline"
                      >
                        jason@mission180.ca
                      </a>
                    </p>
                  </div>
                  <div className="text-gray-600">
                    <p>
                      <strong className="text-gray-800">
                        Jennifer Sheppard
                      </strong>
                      <br />
                      Phone (Kenya):{" "}
                      <a
                        href="tel:011254700632424"
                        className="text-rose-500 hover:underline"
                      >
                        011254700632424
                      </a>
                      <br />
                      Email:{" "}
                      <a
                        href="mailto:jennifer@mission180.ca"
                        className="text-rose-500 hover:underline"
                      >
                        jennifer@mission180.ca
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Canada Office Manager */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Canada Office Manager
                </h3>
                <div className="text-gray-600">
                  <p>
                    <strong className="text-gray-800">Nina Krause</strong>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:nina@mission180.ca"
                      className="text-rose-500 hover:underline"
                    >
                      nina@mission180.ca
                    </a>
                    <br />
                    Phone:{" "}
                    <a
                      href="tel:4035280693"
                      className="text-rose-500 hover:underline"
                    >
                      403-528-0693
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Mailing Addresses
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-gray-600">
                    <p>
                      <strong className="text-gray-800">Canada:</strong>
                      <br />
                      Mission:180 Ministries
                      <br />
                      38E 10 AVE
                      <br />
                      Dunmore Alberta
                      <br />
                      T1B 0J7
                    </p>
                  </div>
                  <div className="text-gray-600">
                    <p>
                      <strong className="text-gray-800">Kenya:</strong>
                      <br />
                      Mission:180 Ministries
                      <br />
                      Care of: Jason Sheppard
                      <br />
                      P.O. Box: 15240
                      <br />
                      Postal Code: 00509
                      <br />
                      Langata Hardy,
                      <br />
                      Nairobi Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
