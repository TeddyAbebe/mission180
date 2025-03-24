import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button";
import Logo from "../../assets/Logo.jpg";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
    { label: "Gallery", path: "/gallery" },
    {
      label: "Projects",
      path: "",
      dropdown: [
        { label: "Water Project", path: "/water-project" },
        { label: "Community Involvement", path: "/community-involvement" },
      ],
    },
    { label: "Visit Us", path: "/visit-us" },
    { label: "Donate", path: "/donate" },
    { label: "Promo Video", path: "/promo-video" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 px-4 md:px-10 py-4 flex justify-between items-center text-white z-50 transition-all duration-300 ${
        isScrolled ? "bg-black opacity-90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="text-xl font-bold flex justify-center items-center gap-1 italic">
        <img
          src={Logo}
          alt="Mission 180 Logo"
          className="h-6 w-6 md:h-10 md:w-10 rounded-full object-cover"
        />
        Mission 180
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Navigation Items */}
      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:space-x-6 space-y-4 md:space-y-0 px-4 md:px-0 py-4 md:py-0 transition-all duration-300`}
      >
        {navItems.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Main Nav Item */}
            <div className="flex items-center justify-between">
              <Link
                to={item.path}
                className={`text-xs font-semibold uppercase flex items-center gap-1 transition-all ${
                  location.pathname === item.path || hoveredItem === item.label
                    ? "text-rose-500"
                    : "hover:text-rose-500"
                }`}
                onClick={() => {
                  if (item.dropdown) {
                    toggleDropdown(item.label);
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {item.label}
                {item.dropdown && (
                  <span className="text-xs">
                    {openDropdown === item.label ? "▲" : "▼"}
                  </span>
                )}
              </Link>
            </div>

            {item.dropdown && (
              <div
                className={`${
                  openDropdown === item.label || hoveredItem === item.label
                    ? "block opacity-100 translate-y-0"
                    : "hidden opacity-0 translate-y-2"
                } md:absolute md:-left-10 mt-2 md:mt-0 w-full md:w-40 bg-white text-black shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform`}
              >
                {item.dropdown.map((subItem) => (
                  <Link
                    key={subItem.label}
                    to={subItem.path}
                    className="block px-4 py-2 hover:bg-rose-500 hover:text-white transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Donate Button */}
        <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)}>
          <Button className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-1 text-sm mt-4 md:mt-0 hidden md:flex">
            Donate Now
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
