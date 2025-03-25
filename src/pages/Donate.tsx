/* eslint-disable @typescript-eslint/no-explicit-any */
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
import Slider from "react-slick";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import Button from "../components/Button";

interface DonationOption {
  title: string;
  images: string[];
  description: string;
}

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-black/70 text-white p-1 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <MdOutlineArrowLeft size={24} />
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-black/70 text-white p-1 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <MdOutlineArrowRight size={24} />
    </div>
  );
};

const donationOptions: DonationOption[] = [
  {
    title: "Child Sponsorship",
    images: [ChildSponsor, ChildSponsor],
    description:
      "Support a child's education, health, and overall well-being by providing essential resources such as school fees, medical care, nutritious meals, and emotional support. Your sponsorship helps break the cycle of poverty, offering children a brighter and more hopeful future.",
  },
  {
    title: "Baby Formula Gift",
    images: [BabyFormula, BabyFormula],
    description:
      "Provide essential baby formula for infants who lack access to proper nutrition. Many families struggle to afford formula, which is crucial for a baby's healthy development in the early months. Your gift ensures that newborns receive the nourishment they need to grow strong and healthy.",
  },
  {
    title: "Baby Supply Gift",
    images: [BabySupply, BabySupply],
    description:
      "Help provide newborns with essential supplies such as diapers, clothing, blankets, and hygiene products. These basic necessities can make a significant difference in ensuring a baby's comfort, health, and well-being, supporting families in difficult circumstances.",
  },
  {
    title: "Children’s Home Gift",
    images: [ChildHomeGift, ChildHomeGift],
    description:
      "Support a safe and nurturing environment for children in need by contributing to a children's home. Your donation helps provide shelter, food, education, and emotional care to orphans and vulnerable children, giving them a stable foundation for a better future.",
  },
  {
    title: "Christmas Sponsorship",
    images: [ChristmasSponsor, ChristmasSponsor],
    description:
      "Make Christmas special for a child in need by providing gifts, festive meals, and holiday joy. Many children go without presents or celebrations due to financial hardships, and your sponsorship can bring them happiness and cherished memories during the holiday season.",
  },
  {
    title: "Crib Sponsorship",
    images: [CribSponsor, CribSponsor],
    description:
      "Provide a safe and comfortable crib for a newborn to sleep in. Many families lack the resources to afford a proper crib, putting babies at risk. Your support ensures that infants have a secure sleeping environment, promoting healthy growth and development.",
  },
  {
    title: "Farming Sponsorship",
    images: [FarmingSp, FarmingSp],
    description:
      "Support sustainable farming projects that empower families and communities by providing agricultural training, seeds, tools, and resources. By fostering self-sufficiency, your donation helps ensure food security and economic stability for those in need.",
  },
  {
    title: "House Sponsorship",
    images: [HouseSp, HouseSp],
    description:
      "Help build homes for families in need, providing them with a secure and dignified place to live. Many families struggle with inadequate housing, and your sponsorship contributes to constructing safe, weather-resistant homes, improving their quality of life.",
  },
  {
    title: "House Mother Sponsorship",
    images: [HouseMotherSp, HouseMotherSp],
    description:
      "Support the caregivers who nurture and educate children in group homes or orphanages. House mothers provide emotional support, guidance, and stability for children who have lost their families. Your donation helps cover their wages, training, and daily needs.",
  },
  {
    title: "Teacher Sponsorship",
    images: [TeacherSp, TeacherSp],
    description:
      "Sponsor teachers to improve education in rural and underserved areas. Many schools struggle with a lack of qualified educators, and your contribution helps provide salaries, training, and teaching materials, ensuring that children receive a quality education.",
  },
  {
    title: "General Fund Giving",
    images: [GeneralFunds, GeneralFunds],
    description:
      "Support various charitable initiatives and programs by donating to the general fund. Your contribution helps cover urgent needs, operational costs, and emergency assistance, ensuring that aid reaches the most vulnerable people in a timely and effective manner.",
  },
];

const Donate: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<DonationOption | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedItem]);

  const handleCardClick = (item: DonationOption) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
                onClick={() => handleCardClick(item)}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                {/* Black overlay */}
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
      {selectedItem && (
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

            {/* Slick Carousel */}
            <Slider {...carouselSettings}>
              {selectedItem.images.map((image, index) => (
                <div key={index} className="">
                  <img
                    src={image}
                    alt={selectedItem.title}
                    className="w-full h-56 object-cover rounded-md"
                  />
                </div>
              ))}
            </Slider>

            <h2 className="text-2xl font-semibold mt-8 mb-1">
              {selectedItem.title}
            </h2>

            <div className="text-gray-700 mt-2 overflow-y-auto max-h-[300px] pr-4 text-justify">
              {selectedItem.description}
            </div>

            <Button className="px-4 mt-2 bg-rose-900 text-white text-md font-light rounded-md mx-auto">
              Donate
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Donate;
