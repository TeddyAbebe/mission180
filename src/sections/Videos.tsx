import React from "react";

const Videos: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <p className="text-gray-600">Video Placeholder</p>
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <p className="text-gray-600">Video Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
