import { useState } from "react";
import GalleryBanner from "../assets/GalleryBanner.jpg";
import BannerSection from "../components/BannerSection";

import Image1 from "../assets/Gallery/Koko-Bedroom-1.jpg";
import Image2 from "../assets/Gallery/Koko-Bedroom-2.jpg";
import Image3 from "../assets/Gallery/Koko-bedroom-3.jpg";
import Image4 from "../assets/Gallery/Koko-Potty-room.jpg";
import Image5 from "../assets/Gallery/Kokos-House-Family.jpg";
import Image6 from "../assets/Gallery/Kokos-House.jpg";
import Image7 from "../assets/Gallery/Kokos-living-dining-room.jpg";
import Image8 from "../assets/Gallery/Pemoja-House.jpg";
import Image9 from "../assets/Gallery/Pemoja-Play-Room.jpg";
import Image10 from "../assets/Gallery/Rafiki-bedroom-1.jpg";
import Image11 from "../assets/Gallery/Rafiki-Bedroom-2.jpg";
import Image12 from "../assets/Gallery/Rafiki-Bedroom-3.jpg";
import Image13 from "../assets/Gallery/Rafiki-House.jpg";
import Image14 from "../assets/Gallery/Rafiki-kids.jpg";
import Image15 from "../assets/Gallery/Rafiki-living-room-dining-room.jpg";
import Image16 from "../assets/Gallery/Sailoji-bedroom-1.jpg";
import Image17 from "../assets/Gallery/Sailoji-bedroom-2.jpg";
import Image18 from "../assets/Gallery/Sailoji-House.jpg";
import Image19 from "../assets/Gallery/Sailoji-partial-family.jpg";
import Image20 from "../assets/Gallery/Sailoji-playtime.jpg";
import { IoCloseOutline } from "react-icons/io5";

const galleryImages = [
  { src: Image1, title: "Koko-Bedroom-1" },
  { src: Image2, title: "Koko-Bedroom-2" },
  { src: Image3, title: "Koko-Bedroom-3" },
  { src: Image4, title: "Koko-Potty-room" },
  { src: Image5, title: "Kokos-House-Family" },
  { src: Image6, title: "Kokos-House" },
  { src: Image7, title: "Kokos-living-dining-room" },
  { src: Image8, title: "Pemoja-House" },
  { src: Image9, title: "Pemoja-Play-Room" },
  { src: Image10, title: "Rafiki-bedroom-1" },
  { src: Image11, title: "Rafiki-Bedroom-2" },
  { src: Image12, title: "Rafiki-Bedroom-3" },
  { src: Image13, title: "Rafiki-House" },
  { src: Image14, title: "Rafiki-kids" },
  { src: Image15, title: "Rafiki-living-room-dining-room" },
  { src: Image16, title: "Sailoji-bedroom-1" },
  { src: Image17, title: "Sailoji-bedroom-2" },
  { src: Image18, title: "Sailoji-House" },
  { src: Image19, title: "Sailoji-partial-family" },
  { src: Image20, title: "Sailoji-playtime" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section>
      {/* Banner Section */}
      <BannerSection
        bannerTitle="Explore Our Gallery"
        bannerQuote='"A picture is worth a thousand words."'
        bannerQuoteAuthor=""
        title="Our Featured Moments"
        description={`Discover breathtaking landscapes, cityscape, and serene views captured in our gallery. Each image tells a unique story of its own.`}
        backgroundImage={GalleryBanner}
      />

      {/* Gallery Section */}
      <div className="bg-gray-100 pt-40 sm:pt-56 pb-12">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-wrap justify-center gap-6">
          {galleryImages.map(({ src, title }, index) => {
            const rotation = Math.floor(Math.random() * 21) - 10;

            return (
              <div
                key={index}
                className="relative bg-gray-200 shadow-lg cursor-pointer pb-4 px-5 pt-5 rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  zIndex: Math.floor(Math.random() * 10),
                }}
                onClick={() => setSelectedImage({ src, title })}
              >
                <div className="overflow-hidden rounded-md">
                  <img
                    src={src}
                    alt={title}
                    className="w-64 h-72 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <p className="text-center text-sm font-semibold mt-3">
                  {title.replace(/-/g, " ")}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="p-6 rounded-lg shadow-lg w-[90vw] md:w-[50vw] h-[70vh] md:h-[80vh] max-w-lg md:max-w-2xl flex flex-col items-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute right-2 top-2 text-3xl md:text-4xl px-2 cursor-pointer rounded-md hover:bg-rose-900 text-white transition"
              onClick={() => setSelectedImage(null)}
            >
              <IoCloseOutline />
            </button>

            {/* Title */}
            <h3 className="text-white text-lg md:text-xl font-semibold bg-rose-900 opacity-80 px-4 py-1 rounded-md mb-4 text-center">
              {selectedImage.title.replace(/-/g, " ")}
            </h3>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
