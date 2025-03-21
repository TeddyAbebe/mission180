import React from "react";

const Sponsors: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Sponsors</h2>
        <div className="flex justify-center space-x-8">
          <img src="https://via.placeholder.com/150x50?text=eBay" alt="eBay" />
          <img
            src="https://via.placeholder.com/150x50?text=PayPal"
            alt="PayPal"
          />
          <img
            src="https://via.placeholder.com/150x50?text=Sponsor+3"
            alt="Sponsor 3"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
