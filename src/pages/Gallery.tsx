import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner from "../assets/DonateBanner.jpg";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";

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
      <div className="relative">
        <div
          className="relative w-full h-[500px] sm:h-[600px] bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-left">
              <h1 className="text-white text-3xl sm:text-4xl font-bold">
                Explore Our Gallery
              </h1>
              <p className="text-white text-lg sm:text-xl mt-4 max-w-md italic">
                "A picture is worth a thousand words."
              </p>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute bottom-0 md:w-[70%] mx-auto left-0 right-0 transform translate-y-1/2 sm:translate-y-[70%] bg-gray-100 rounded-t-lg p-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Our Featured Moments
            </h2>
            <div className="w-20 h-1 bg-rose-500 mx-auto my-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto text-justify">
              Discover breathtaking landscapes, cityscapes, and serene views
              captured in our gallery. Each image tells a unique story of its
              own.
            </p>
          </div>
        </div>
      </div>

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
