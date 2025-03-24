import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GalleryBanner from "../assets/GalleryBanner.jpg";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import BannerSection from "../components/BannerSection";

const images = [
  { title: "Beautiful Landscape", img: Image1 },
  { title: "City Skyline", img: Image2 },
  { title: "Serene Beach", img: Image3 },
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

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

      {/* Gallery Slider */}
      <div className="bg-gray-100 pt-40 sm:pt-56 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Slider {...settings}>
            {images.map((item, index) => (
              <div key={index} className="p-2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-contain rounded-lg"
                />
                <h3 className="text-gray-800 text-lg text-center mt-2">
                  {/* {item.title} */}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
