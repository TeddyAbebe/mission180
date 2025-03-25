import MissionBanner from "../assets/StaffBanner.jpg";
import BannerSection from "../components/BannerSection";

// TypeScript Interfaces
interface MissionItem {
  title: string;
  description: string;
}

interface PurposeItem {
  title: string;
  description: string;
}

const missionDetails: MissionItem[] = [
  {
    title: "Our Vision: Total Turn Around",
    description:
      "We envision a total turn around in individual lives—transforming poverty into wholeness, sickness into health, and darkness into light. Our goal is a future where every person thrives with hope and dignity.",
  },
  {
    title: "Our Mission",
    description:
      "We bring compassion to the vulnerable and hope to the hopeless by impacting lives through practical acts of kindness. From meeting physical needs like food, clothing, and medical care to sharing the love of Jesus, we care for the whole person—body, mind, soul, and spirit.",
  },
  {
    title: "Our Purpose",
    description:
      "Mission:180 Ministries exists to serve the needy in Canada and Africa. We provide employment training, volunteer opportunities, and spiritual growth through preaching, teaching, and raising up leaders. We also empower Canadians for short- and long-term missions to make a lasting difference in the developing world.",
  },
];

const purposeDetails: PurposeItem[] = [
  {
    title: "Helping the Needy",
    description:
      "Impacting lives in Canada and Africa with practical kindness—caring for body, mind, soul, and spirit through the love of Jesus.",
  },
  {
    title: "Physical Support",
    description:
      "Meeting immediate needs by providing food, clothing, housing, medical care, and employment training opportunities.",
  },
  {
    title: "Spiritual Growth",
    description:
      "Sharing the Gospel, preaching, and teaching the Bible to introduce people to Jesus and strengthen local churches.",
  },
  {
    title: "Leadership Development",
    description:
      "Training ministers and raising new church leaders through seminars, conferences, and ministry schools.",
  },
  {
    title: "Canadian Impact",
    description:
      "Offering volunteer opportunities and short-term mission trips to the developing world for churches, teams, families, and individuals.",
  },
  {
    title: "Long-Term Commitment",
    description:
      "Equipping Canadians for long-term missions to pour their lives into those in need globally.",
  },
];

const MissionItemComponent: React.FC<MissionItem> = ({
  title,
  description,
}) => (
  <div className="bg-white py-8 px-6 border-l-4 border-rose-700 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl cursor-pointer">
    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const PurposeSection: React.FC = () => (
  <div className="mt-16 bg-white py-12 px-8 rounded-2xl shadow-lg">
    <h2 className="text-3xl font-bold text-rose-800 text-center mb-10">
      How We Fulfill Our Purpose
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {purposeDetails.map((item, index) => (
        <div key={index} className="flex flex-col">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            {item.title}
          </h4>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Mission: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      <BannerSection
        bannerTitle="Our Mission & Vision"
        bannerQuote="The best way to find yourself is to lose yourself in the service of others."
        bannerQuoteAuthor="Mahatma Gandhi"
        title="Our Mission"
        description="We strive to transform lives through compassion, action, and faith, creating a world where everyone has the chance to heal, grow, and shine."
        backgroundImage={MissionBanner}
      />

      <div className="pt-40 sm:pt-56 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="my-20 space-y-10">
            {missionDetails.map((mission, index) => (
              <MissionItemComponent
                key={index}
                title={mission.title}
                description={mission.description}
              />
            ))}
          </div>

          <PurposeSection />
        </div>
      </div>
    </section>
  );
};

export default Mission;
