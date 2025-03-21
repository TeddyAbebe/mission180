import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Clean Water Initiative",
      description: "Providing access to clean water for communities in need.",
      image: "https://via.placeholder.com/400x300?text=Clean+Water",
    },
    {
      id: 2,
      title: "Education for All",
      description: "Building schools and providing scholarships for children.",
      image: "https://via.placeholder.com/400x300?text=Education",
    },
    {
      id: 3,
      title: "Healthcare Outreach",
      description: "Delivering medical supplies and care to remote areas.",
      image: "https://via.placeholder.com/400x300?text=Healthcare",
    },
  ];

  return (
    <div className="py-16">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Projects</h1>
        <p className="text-gray-600 mb-8">
          Discover the impactful projects we’re working on to change lives.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={`/projects/${project.id}`}
                className="text-rose-500 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
