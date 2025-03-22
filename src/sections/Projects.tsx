import React from "react";
import {
  FaTint,
  FaBicycle,
  FaSchool,
  FaHandsHelping,
  FaLaptop,
  FaBox,
} from "react-icons/fa";
import Impact from "../assets/Impact.jpg";

const projectsData = [
  {
    icon: <FaTint className="text-4xl text-white" />,
    title: "5,500 Water Filters Distributed to Schools and Communities.",
    description:
      "Helping remove viruses and bacteria from water which are what cause most water-borne diseases.",
  },
  {
    icon: <FaBicycle className="text-4xl text-white" />,
    title: "300 Bikes Donated to Orphan Children",
    description:
      "Serve as a necessary means of transportation to school, but also as a symbol of hope for new opportunities and possibilities for the orphans.",
  },
  {
    icon: <FaSchool className="text-4xl text-white" />,
    title: "Over $35,255 of School Supplies gifted",
    description:
      "Help improve grades, creativity, attitudes towards learning, behavior, peer relationships and self-image.",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-white" />,
    title: "10 Improved Water Wells Installed",
    description:
      "Reducing the devastating effect on health, dignity by providing access to safe, sufficient, and affordable water, sanitation, and hygiene facilities.",
  },
  {
    icon: <FaLaptop className="text-4xl text-white" />,
    title:
      "1 Smart Room (Equipped with Computers) installed for Orphan Children",
    description:
      "Contribute to the improvement of student learning and basic skill area.",
  },
  {
    icon: <FaBox className="text-4xl text-white" />,
    title: "1100 Blankets Provided to Children in Need",
    description:
      "Provide comfort and well-being, ensure each orphan's health by keeping them warm with soft and fluffy blankets.",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="relative py-16 bg-black bg-opacity-60 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Impact})`,
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Our Projects and Programs Impacts
        </h2>
        <div className="w-24 h-1 bg-rose-500 mx-auto mb-10"></div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Icon */}
              <div className="flex-shrink-0">{project.icon}</div>
              {/* Text Content */}
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.description && (
                  <p className="mt-2">{project.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
