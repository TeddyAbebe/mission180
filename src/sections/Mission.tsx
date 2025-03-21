import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Button from "../components/Button";

const Mission = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">
        Supporting an orphan creates a ripple effect that strengthens the entire
        community.
      </h2>
      <div className="w-20 h-1 bg-rose-500 mx-auto my-6"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-4">
        {[
          {
            title: "Our Purpose",
            img: Image1,
          },
          {
            title: "How We Help",
            img: Image3,
          },
          {
            title: "Our Impact",
            img: Image2,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[30rem] object-cover transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply"></div>

            {/* Title */}
            <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold z-10">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <Button>Learn More</Button>
      </div>
    </section>
  );
};

export default Mission;
