interface BannerSectionProps {
  bannerTitle: string;
  bannerQuote: string;
  bannerQuoteAuthor: string;
  title: string;
  description: string;
  backgroundImage: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({
  bannerTitle,
  bannerQuote,
  bannerQuoteAuthor,
  title,
  description,
  backgroundImage,
}) => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative w-full h-[500px] sm:h-[600px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-left">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              {bannerTitle}
            </h1>
            <p className="text-white text-lg sm:text-xl lg:text-2xl mt-4 max-w-md italic">
              {bannerQuote}
              {bannerQuoteAuthor && (
                <span className="block mt-2 text-base sm:text-lg font-semibold not-italic">
                  — {bannerQuoteAuthor}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute bottom-0 md:w-[70%] mx-auto left-0 right-0 transform translate-y-1/2 sm:translate-y-[70%] bg-gray-100 rounded-t-lg p-2 md:p-6 text-center h-[300px]">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {title}
          </h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto my-6"></div>
          {/* Render description with HTML */}
          <p
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto text-justify"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
