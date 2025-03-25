/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import WaterBanner from "../../assets/WaterBanner.jpg";
import Image1 from "../../assets/Water-Project-1.png";
import Image2 from "../../assets/Water-Project-2.png";
import Image3 from "../../assets/Water-Project-3.png";
import Image4 from "../../assets/Water-Project-4.png";
import Image5 from "../../assets/Water-Project-5.png";
import BannerSection from "../../components/BannerSection";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const images = [
  { img: Image1 },
  { img: Image2 },
  { img: Image3 },
  { img: Image4 },
  { img: Image5 },
];

const WaterProject = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const openModal = (index: any) => {
    setSelectedImage(images[index].img);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const prevImage = (event: any) => {
    event.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex].img);
    setCurrentIndex(newIndex);
  };

  const nextImage = (event: any) => {
    event.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex].img);
    setCurrentIndex(newIndex);
  };

  return (
    <section>
      {/* Banner Section */}
      <BannerSection
        bannerTitle="Water Project"
        bannerQuote="Mission:180 provides essential clean drinking water to our surrounding community on a daily basis."
        bannerQuoteAuthor=""
        title="Providing Clean Water for Communities"
        description={`We supply water to about 1,000 people every day and thousands of animals in the region.<br/><p>If you would like more specific information on the water project please contact <span class="font-semibold">Jennifer Sheppard</span> at <a href="mailto:jennifer@mission180.ca" class="text-blue-500 underline"> jennifer@mission180.ca</a>.</p>`}
        backgroundImage={WaterBanner}
      />

      {/* Gallery */}
      <div className="bg-gray-100 pt-40 sm:pt-56 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.img}
                  alt={`Water Project ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <button
            className="absolute top-10 right-10 text-white text-4xl px-2 cursor-pointer rounded-md hover:bg-rose-900 opacity-80"
            onClick={closeModal}
          >
            <IoCloseOutline />
          </button>
          <button
            className="mx-10 text-white text-4xl px-2 cursor-pointer flex rounded-md hover:bg-rose-900 opacity-80"
            onClick={(event) => prevImage(event)}
          >
            <IoIosArrowBack />
          </button>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-3xl max-h-[80vh]"
            />
          </div>
          <button
            className="mx-10 text-white text-4xl px-2 cursor-pointer flex rounded-md hover:bg-rose-900 opacity-80"
            onClick={(event) => nextImage(event)}
          >
            <IoIosArrowForward />
          </button>
        </div>
      )}
    </section>
  );
};

export default WaterProject;
