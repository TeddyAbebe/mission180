import React from "react";

const Statistics: React.FC = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Each day, an estimated 734 children become orphans
        </h2>
        <div className="w-16 h-1 bg-rose-500 mx-auto my-4"></div>
        <p className="text-gray-700 leading-relaxed">
          Orphan Life Foundation is a worldwide non-profit orphanage funding
          organization that is dedicated to looking for the welfare of abandoned
          children and orphans. We help orphans by providing health and
          educational opportunities, stable housing, and adoption services.
        </p>
        <p className="text-gray-700 mt-4 leading-relaxed">
          With the help of our charity program for orphans, we’ve developed a
          number of orphanages, infant adoption centers, and schools in
          undeserved parts of the Philippines, India, Columbia, and Africa with
          proper learning resources and tools.
        </p>
        <p className="text-gray-700 mt-4">
          Help us donate to orphans and improve their living situations.
        </p>
        <p className="text-gray-700 mt-4">
          For further information, check out our orphanage website.
        </p>
        <a
          href="/donate"
          className="mt-6 inline-block bg-rose-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-rose-600 transition"
        >
          LEARN MORE
        </a>
      </div>
    </section>
  );
};

export default Statistics;
