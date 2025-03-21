import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Projects and Programs Impacts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Clean Water Initiative</h3>
            <p className="mt-2">
              Providing access to clean water for communities in need.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Education for All</h3>
            <p className="mt-2">
              Building schools and providing scholarships for children.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Healthcare Outreach</h3>
            <p className="mt-2">
              Delivering medical supplies and care to remote areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
