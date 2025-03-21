import React from "react";
import Hero from "../sections/Hero";
import Statistics from "../sections/Statistics";
import Videos from "../sections/Videos";
import Mission from "../sections/Mission";
import Projects from "../sections/Projects";
import Testimonials from "../sections/Testimonials";
import Sponsors from "../sections/Sponsors";
import BlogSection from "../sections/Blog";
import Impact from "../sections/Impact";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Statistics />
      <Videos />
      <Mission />
      <Projects />
      <Testimonials />
      <Impact />
      <BlogSection />
      <Sponsors />
    </div>
  );
};

export default Home;
