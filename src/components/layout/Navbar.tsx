import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "About",
      path: "",
      dropdown: [
        { label: "Staff", path: "/staff" },
        { label: "Vision, Mission & Purpose", path: "/mission" },
      ],
    },
    { label: "News Letters", path: "/news" },
    { label: "Children's Homes", path: "/children-homes" },
    {
      label: "Projects",
      path: "",
      dropdown: [
        { label: "Water Project", path: "/water-project" },
        { label: "Community Involvement", path: "/community-involvement" },
      ],
    },
    { label: "Photos", path: "/photos" },
    { label: "Contact", path: "/contact" },
    { label: "Visit Us", path: "/visit-us" },
    { label: "Donate", path: "/donate" },
    { label: "Promo Video", path: "/promo-video" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 px-10 md:pl-10 md:pr-3 py-4 flex justify-between items-center text-white z-50 transition-all duration-300 ${
        location.pathname !== "/"
          ? "bg-black opacity-90 backdrop-blur-md"
          : isScrolled
          ? "bg-black opacity-90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Link to="/" className="text-2xl font-bold">
        Mission 180
      </Link>

      <div className="space-x-6 flex items-center">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link
              to={item.path}
              className={`text-sm uppercase flex items-center gap-1 transition-all ${
                location.pathname === item.path || hoveredItem === item.label
                  ? " text-rose-500"
                  : "hover:text-rose-500"
              }`}
            >
              {item.label}
              {item.dropdown && <span className="text-xs">▼</span>}
            </Link>

            {item.dropdown && hoveredItem === item.label && (
              <div className="absolute -left-10 mt-0 w-40 bg-white text-black shadow-lg rounded-md overflow-hidden">
                {item.dropdown.map((subItem) => (
                  <Link
                    key={subItem.label}
                    to={subItem.path}
                    className="block px-4 py-2 hover:bg-rose-500 hover:text-white"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
