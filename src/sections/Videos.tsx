import React from "react";

const Videos: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Videos</h2>

        <div className="w-20 h-1 bg-rose-500 mx-auto my-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-w-16 h-80">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/pfWFq3G7NI4"
              title="YouTube video 1"
              allowFullScreen
            ></iframe>
          </div>

          <div className="aspect-w-16 h-80">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/iY7XgCOTXaU"
              title="YouTube video 2"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
