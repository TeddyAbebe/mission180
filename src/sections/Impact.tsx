import React from "react";
import Button from "../components/Button";

const Impact: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-rose-500">10,000+</h3>
            <p className="text-gray-600 mt-2">
              Children provided with clean water
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-rose-500">5,000+</h3>
            <p className="text-gray-600 mt-2">
              Students enrolled in our schools
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-rose-500">50+</h3>
            <p className="text-gray-600 mt-2">Countries served worldwide</p>
          </div>
        </div>
        <Button className="mt-8">See Our Impact</Button>
      </div>
    </section>
  );
};

export default Impact;
