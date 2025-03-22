import React from "react";
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
  return (
    <section className="bg-gray-100 py-[120px]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">What you can do</h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Thank-You for making a contribution to our work in Kenya. Your
          generosity makes it possible for us to continue helping the most
          vulnerable people in Kenya, the widows and orphans.Mission:180 is a
          fully registered Canadian Charitable Trust with the Canada Revenue
          Agency. We provide receipts for income tax purposes each year in
          February.
        </p>
        <div className="w-20 h-1 bg-rose-500 mx-auto my-6"></div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {donationOptions.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[300px] object-"
              />

              <h3 className="text-white text-lg absolute bg-gray-800 opacity-80 bottom-4 left-2 px-4 py-1 rounded-md ">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Donate;
