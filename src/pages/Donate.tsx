import React from "react";
import Button from "../components/Button";

const Donate: React.FC = () => {
  return (
    <div className="py-16">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Make a Donation
        </h1>
        <p className="text-gray-600 mb-8">
          Your support can change lives. Every dollar counts in our mission to
          help children in need.
        </p>
      </section>

      <section className="max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Choose Your Donation Amount
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <button className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600">
              $10
            </button>
            <button className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600">
              $25
            </button>
            <button className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600">
              $50
            </button>
          </div>
          <div className="mb-6">
            <label htmlFor="custom-amount" className="block text-gray-700 mb-2">
              Or Enter a Custom Amount
            </label>
            <input
              type="number"
              id="custom-amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="$0.00"
            />
          </div>
          <Button className="w-full">Donate Now</Button>
        </div>
      </section>
    </div>
  );
};

export default Donate;
