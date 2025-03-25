import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Slider from "react-slick";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import JasonHazel from "../assets/JasonHazel.jpeg";
import Jennifer from "../assets/Jennifer.jpg";
import MarkNancy from "../assets/MarkNancy.jpg";
import Nina from "../assets/Nina.jpg";
import StaffBanner from "../assets/StaffBanner.jpg";
import BannerSection from "../components/BannerSection";

const staffMembers = [
  {
    name: "Jason and Hazel Sheppard",
    role: "Leaders of Mission:180 Ministries",
    description: `
      Jason is a graduate of Central Pentecostal College (1996) where he earned his diploma in Theology. <br/>
      Upon graduating, he was a Youth Pastor in three different churches across Western Canada for a total of 15 years, in Pentecostal Assemblies of Canada Churches. He is currently the president of Mission:180 Ministries.<br/><br/>
      Hazel holds a diploma in journalism from her post-secondary education in Kenya. <br/>
      She serves in various capacities with Mission:180 and helps manage many challenging aspects of the ministry. <br/>
      Currently, due to her passion to see the children in our care thrive academically, Hazel’s main role is under the title of Education Officer. <br/>
      This means she manages all things school-related—no small task with more than 50 children in school!<br/><br/>
      Jason and Hazel live and work together in Nairobi, Kenya.
    `,
    images: [JasonHazel, JasonHazel],
  },
  {
    name: "Jennifer Sheppard",
    role: "Co-Founder & Co-Director",
    description: `
      Jennifer is the co-founder and co-director of Mission:180. <br/>
      She lives and works in Nairobi, specifically in the role of finance and human resource management. <br/>
      She is vice-president and co-managing director, and as such, is directly involved in decision-making and direction setting.<br/><br/>
      In 2007, Jennifer made her first trip to Africa, and it was an incredible personal journey. <br/>
      She traveled to Rwanda, to a little village in the middle of nowhere, to help with the construction of a water tank. <br/>
      It was here that Jennifer fell in love with the African people and culture. <br/>
      When she returned home to Canada, she had a completely different outlook on life. <br/>
      This trip had changed everything, and she could not wait to get back to the continent of Africa. <br/><br/>
      Jennifer would not hesitate to tell you her heart is here in Kenya, with the children and staff we serve as part of Mission:180!
    `,
    images: [Jennifer, Jennifer],
  },
  {
    name: "Nina Krause",
    role: "Office Manager (Canada)",
    description: `
      Nina manages Mission:180’s office in Canada. <br/>
      She and her husband Lorne reside in Medicine Hat, Alberta, so that is where our office is now located. <br/>
      Nina is heavily involved in her local church and serves part-time on staff there in a similar capacity to the one she does with Mission:180.<br/><br/>
      She brings years of experience and know-how to the team, particularly in the area of charitable finances and CRA compliance. <br/>
      She is an invaluable member of this team, and we are blessed to have her serve with us.
    `,
    images: [Nina, Nina],
  },
  {
    name: "Mark and Nancy Emde",
    role: "Advisors",
    description: `
      Mark and Nancy serve as advisors on Team Mission:180. <br/>
      They bring many years of cross-cultural experience to the team. <br/>
      Mark, Nancy, and their children served as missionaries to Thailand from 1985 to 1997, where they worked in church planting and Bible College training. <br/>
      From the very birth of Mission:180, they have been a part of the DNA!<br/><br/>
      Nancy served as part of the staff from 2010 to 2022 as the Chief Financial Officer with Mission:180 and managed the office in Canada. <br/>
      To say she served with excellence and integrity would be an understatement. <br/>
      We are blessed to have these two as members of Team Mission:180 and consider them dear and close friends.
    `,
    images: [MarkNancy, MarkNancy],
  },
];

// Custom slider arrows
const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-black/70 text-white p-1 rounded-full cursor-pointer z-10"
    onClick={onClick}
  >
    <MdOutlineArrowLeft size={24} />
  </div>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-black/70 text-white p-1 rounded-full cursor-pointer z-10"
    onClick={onClick}
  >
    <MdOutlineArrowRight size={24} />
  </div>
);

const Staff = () => {
  const [selectedMember, setSelectedMember] = useState<
    (typeof staffMembers)[0] | null
  >(null);

  const handleCardClick = (member: (typeof staffMembers)[0]) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section>
      <BannerSection
        bannerTitle="Meet Our Dedicated Team"
        bannerQuote="Alone we can do so little; together we can do so much."
        bannerQuoteAuthor="Helen Keller"
        title="Our Team"
        description={`Our team is the backbone of our mission, working tirelessly to bring positive change. Their dedication and compassion drive every initiative, ensuring that we make a lasting impact in the lives of those we serve.`}
        backgroundImage={StaffBanner}
      />

      <div className="bg-gray-100 pt-40 sm:pt-56 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffMembers.map((member, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => handleCardClick(member)}
              >
                <img
                  src={member.images[0]}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />

                <h3 className="text-white text-sm absolute bg-rose-900 opacity-80 bottom-4 left-2 px-4 py-1 rounded-md">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white shadow-lg rounded-lg max-w-md w-full p-6 relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 hover:bg-rose-900 hover:text-white opacity-80 cursor-pointer hover:scale-110 transition-transform rounded-xs"
              onClick={handleCloseModal}
            >
              <IoMdClose />
            </button>

            {/* Image Slider */}
            <Slider {...carouselSettings}>
              {selectedMember.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={selectedMember.name}
                    className="w-full h-56 object-contain rounded-md"
                  />
                </div>
              ))}
            </Slider>

            <h2 className="text-2xl font-semibold mt-8">
              {selectedMember.name}
            </h2>
            <p className="text-gray-600 font-medium">{selectedMember.role}</p>
            <div
              className="text-gray-700 mt-4 overflow-y-auto max-h-40 pr-4 text-justify"
              dangerouslySetInnerHTML={{ __html: selectedMember.description }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Staff;
