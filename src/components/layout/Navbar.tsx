import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 px-10 md:px-20 py-4 flex justify-between items-center text-white z-50 transition-all duration-300 ${
        isScrolled ? "bg-black opacity-90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Link to="/" className="text-2xl font-bold">
        Mission 180
      </Link>
      <div className="space-x-6">
        {[
          "About",
          "Projects",
          "Programs",
          "Get Involved",
          "Media",
          "Contact",
        ].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className={`text-sm uppercase ${
              location.pathname ===
              `/${item.toLowerCase().replace(/\s+/g, "-")}`
                ? "border-b-2 border-rose-500"
                : "hover:text-rose-500"
            }`}
          >
            {item}
          </Link>
        ))}
        <Link to="/donate">
          <Button className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-1 text-sm">
            Donate Now
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
