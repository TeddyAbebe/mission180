import React, { useEffect, useState } from "react";
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
import BannerSection from "../components/BannerSection";
import { IoMdClose } from "react-icons/io";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import Button from "../components/Button";

interface DonationOption {
  title: string;
  image: string;
  description: string;
}

const donationOptions: DonationOption[] = [
  {
    title: "Child Sponsorship",
    image: ChildSponsor,
    description:
      "Support a child's education, health, and overall well-being by providing essential resources such as school fees, medical care, nutritious meals, and emotional support. Your sponsorship helps break the cycle of poverty, offering children a brighter and more hopeful future.",
  },
  {
    title: "Baby Formula Gift",
    image: BabyFormula,
    description:
      "Provide essential baby formula for infants who lack access to proper nutrition. Many families struggle to afford formula, which is crucial for a baby's healthy development in the early months. Your gift ensures that newborns receive the nourishment they need to grow strong and healthy.",
  },
  {
    title: "Baby Supply Gift",
    image: BabySupply,
    description:
      "Help provide newborns with essential supplies such as diapers, clothing, blankets, and hygiene products. These basic necessities can make a significant difference in ensuring a baby's comfort, health, and well-being, supporting families in difficult circumstances.",
  },
  {
    title: "Children’s Home Gift",
    image: ChildHomeGift,
    description:
      "Support a safe and nurturing environment for children in need by contributing to a children's home. Your donation helps provide shelter, food, education, and emotional care to orphans and vulnerable children, giving them a stable foundation for a better future.",
  },
  {
    title: "Christmas Sponsorship",
    image: ChristmasSponsor,
    description:
      "Make Christmas special for a child in need by providing gifts, festive meals, and holiday joy. Many children go without presents or celebrations due to financial hardships, and your sponsorship can bring them happiness and cherished memories during the holiday season.",
  },
  {
    title: "Crib Sponsorship",
    image: CribSponsor,
    description:
      "Provide a safe and comfortable crib for a newborn to sleep in. Many families lack the resources to afford a proper crib, putting babies at risk. Your support ensures that infants have a secure sleeping environment, promoting healthy growth and development.",
  },
  {
    title: "Farming Sponsorship",
    image: FarmingSp,
    description:
      "Support sustainable farming projects that empower families and communities by providing agricultural training, seeds, tools, and resources. By fostering self-sufficiency, your donation helps ensure food security and economic stability for those in need.",
  },
  {
    title: "House Sponsorship",
    image: HouseSp,
    description:
      "Help build homes for families in need, providing them with a secure and dignified place to live. Many families struggle with inadequate housing, and your sponsorship contributes to constructing safe, weather-resistant homes, improving their quality of life.",
  },
  {
    title: "House Mother Sponsorship",
    image: HouseMotherSp,
    description:
      "Support the caregivers who nurture and educate children in group homes or orphanages. House mothers provide emotional support, guidance, and stability for children who have lost their families. Your donation helps cover their wages, training, and daily needs.",
  },
  {
    title: "Teacher Sponsorship",
    image: TeacherSp,
    description:
      "Sponsor teachers to improve education in rural and underserved areas. Many schools struggle with a lack of qualified educators, and your contribution helps provide salaries, training, and teaching materials, ensuring that children receive a quality education.",
  },
  {
    title: "General Fund Giving",
    image: GeneralFunds,
    description:
      "Support various charitable initiatives and programs by donating to the general fund. Your contribution helps cover urgent needs, operational costs, and emergency assistance, ensuring that aid reaches the most vulnerable people in a timely and effective manner.",
  },
];

const Donate: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? donationOptions.length - 1 : (prev ?? 0) - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === donationOptions.length - 1 ? 0 : (prev ?? 0) + 1
    );
  };

  return (
    <section>
      <BannerSection
        bannerTitle="Support Our Mission"
        bannerQuote="It's not how much we give but how much love we put into giving."
        bannerQuoteAuthor="Mother Teresa"
        title="What You Can Do"
        description={`Thank you for making a contribution to our work in Kenya. Your generosity makes it possible for us to continue helping the most vulnerable people in Kenya, the widows and orphans.<br />Mission:180 is a fully registered Canadian Charitable Trust with the Canada Revenue Agency. We provide receipts for income tax purposes each year in February.`}
        backgroundImage={DonateBanner}
      />

      {/* Donation Cards Section */}
      <div className="bg-gray-100 pt-40 sm:pt-56 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {donationOptions.map((item, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => handleCardClick(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <h3 className="text-white text-sm absolute bg-rose-900 opacity-80 bottom-4 left-2 px-4 py-1 rounded-md">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white shadow-lg rounded-lg max-w-md w-full p-6 relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 hover:bg-rose-900 hover:text-white opacity-80 cursor-pointer hover:scale-110 transition-transform rounded-xs "
              onClick={handleCloseModal}
            >
              <IoMdClose />
            </button>
            <img
              src={donationOptions[selectedIndex].image}
              alt={donationOptions[selectedIndex].title}
              className="w-full h-56 object-cover rounded-md"
            />
            <h2 className="text-2xl font-semibold mt-8 mb-1">
              {donationOptions[selectedIndex].title}
            </h2>
            <p className="text-gray-700">
              {donationOptions[selectedIndex].description}
            </p>
            <Button className="mt-4 bg-rose-900 mx-auto rounded-md text-white">
              Donate
            </Button>

            <div
              className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-rose-900 text-white p-1 rounded-full cursor-pointer z-10"
              onClick={handlePrev}
            >
              <MdOutlineArrowLeft size={24} />
            </div>
            <div
              className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-rose-900 text-white p-1 rounded-full cursor-pointer z-10"
              onClick={handleNext}
            >
              <MdOutlineArrowRight size={24} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Donate;
