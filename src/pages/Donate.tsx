import React, { useEffect } from "react";
import ChildSponsor from "../assets/childSp.jpg";
import BabySupply from "../assets/babySupplyGift.jpg";
import ChildHomeGift from "../assets/childrenHomeGift.jpg";
import BabyFormula from "../assets/babyFormula.jpg";
import ChristmasSponsor from "../assets/christmasSp.jpg";
import CribSponsor from "../assets/cribSp.jpg";
import FarmingSp from "../assets/farmingSp.jpg";
import HouseSp from "../assets/HouseSp.jpg";
import HouseMotherSp from "../assets/houseMotherSp.jpg";
import TeacherSp from "../assets/teacherSp.jpg";
import GeneralFunds from "../assets/GeneralFunds.jpg";
import DonateBanner from "../assets/DonateBanner.jpg";

const donationOptions = [
  { title: "Child Sponsorship", img: ChildSponsor },
  { title: "Baby Formula Gift", img: BabyFormula },
  { title: "Baby Supply Gift", img: BabySupply },
  { title: "Children’s Home Gift", img: ChildHomeGift },
  { title: "Christmas Sponsorship", img: ChristmasSponsor },
  { title: "Crib Sponsorship", img: CribSponsor },
  { title: "Farming Sponsorship", img: FarmingSp },
  { title: "House Sponsorship", img: HouseSp },
  { title: "House Mother Sponsorship", img: HouseMotherSp },
  { title: "Teacher Sponsorship", img: TeacherSp },
  { title: "General Fund Giving", img: GeneralFunds },
];

const Donate: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                Support Our Mission
              </h1>
              <p className="text-white text-lg sm:text-xl lg:text-2xl mt-4 max-w-md italic">
                "It's not how much we give but how much love we put into
                giving."
                <span className="block mt-2 text-base sm:text-lg font-semibold not-italic">
                  — Mother Teresa
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute bottom-0 md:w-[70%] mx-auto left-0 right-0 transform translate-y-1/2 sm:translate-y-[70%] bg-gray-100 rounded-t-lg p-2 md:p-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              What You Can Do
            </h2>
            <div className="w-20 h-1 bg-rose-500 mx-auto my-6"></div>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto text-justify">
              Thank you for making a contribution to our work in Kenya. Your
              generosity makes it possible for us to continue helping the most
              vulnerable people in Kenya, the widows and orphans. <br />{" "}
              Mission:180 is a fully registered Canadian Charitable Trust with
              the Canada Revenue Agency. We provide receipts for income tax
              purposes each year in February.
            </p>
          </div>
        </div>
      </div>

      {/* Donation Cards Section */}
      <div className="bg-gray-100 pt-40 sm:pt-56 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {donationOptions.map((item, index) => (
              <div
                key={index}
                className="relative rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[250px] sm:h-[300px] object-cover"
                />
                <h3 className="text-white text-base sm:text-lg absolute bg-gray-800 opacity-80 bottom-4 left-2 px-4 py-1 rounded-md">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
