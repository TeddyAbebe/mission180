import BannerSection from "../../components/BannerSection";
import CommunityBanner from "../../assets/CommunityBanner.jpg";
import ComingSoonImage from "../../assets/ComingSoon.png";

const CommunityInvolvement = () => {
  return (
    <section>
      <BannerSection
        bannerTitle="Making an Impact in Our Community"
        bannerQuote="Together, we can bring meaningful change and build stronger, healthier communities. Stay tuned for more updates!"
        bannerQuoteAuthor=""
        title="Coming Soon: Community Involvement Projects"
        description={`We are working on new initiatives to engage with and support our local community in meaningful ways.`}
        backgroundImage={CommunityBanner}
      />

      <div className="bg-gray-100 py-20">
        <img
          src={ComingSoonImage}
          alt="Coming Soon"
          className="w-full h-auto max-w-3xl mx-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default CommunityInvolvement;
