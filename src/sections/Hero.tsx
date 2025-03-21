import React from "react";
import Button from "../components/Button";
import Banner from "../assets/Banner.jpg";

const Hero: React.FC = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Banner})`,
      }}
    >
      <div className="w-full h-full flex items-center px-10 md:px-20">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            Be the Light. <br /> Impact Their Future.
          </h1>
          <p className="text-xl text-white mt-4">
            Every act of kindness creates a ripple of hope. Make a difference
            today.
          </p>
          <Button className="mt-6 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 text-lg">
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
