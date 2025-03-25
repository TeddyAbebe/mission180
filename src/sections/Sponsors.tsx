import React from "react";
import { Link } from "react-router-dom";
import ChildSponsor from "../assets/childSp.jpg";
import BabySupply from "../assets/babySupplyGift.jpg";
import ChildHomeGift from "../assets/childrenHomeGift.jpg";

const donationOptions = [
  { title: "Child Sponsorship", img: ChildSponsor },
  { title: "Baby Supply Gift", img: BabySupply },
  { title: "Children’s Home Gift", img: ChildHomeGift },
];

const Sponsors: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          How Can You Get Involved?
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Your generosity makes it possible for us to continue helping the most
          vulnerable people.
        </p>
        <div className="w-20 h-1 bg-rose-500 mx-auto my-6"></div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {donationOptions.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              {/* Black overlay */}
              <div className="absolute inset-0 bg-black opacity-20"></div>

              <h3 className="text-white text-sm absolute bg-rose-900 opacity-80 bottom-4 left-2 px-4 py-1 rounded-md">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link
          to="/donate"
          className="mt-10 inline-block px-4 py-2 bg-rose-500 text-white text-md font-light rounded-lg shadow-md hover:bg-rose-600 transition-all"
        >
          See More Options
        </Link>
      </div>
    </section>
  );
};

export default Sponsors;
