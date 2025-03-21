import React from "react";
import Button from "../components/Button";

const About: React.FC = () => {
  return (
    <div className="py-16">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 mb-8">
          We are a nonprofit organization dedicated to changing the lives of
          children around the world. Our mission is to provide access to clean
          water, education, and healthcare to those in need.
        </p>
        <Button>Support Our Cause</Button>
      </section>

      <section className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600">
            Founded in 2010, CharityOrg started with a simple goal: to make a
            difference. Over the years, we’ve grown into a global movement,
            impacting millions of lives through our programs and initiatives.
          </p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/600x400?text=About+Us+Image"
            alt="About Us"
            className="rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
