import React from "react";
import Shocase from "../components/shwcase/Shocase";
import Feature from "../components/shwcase/Feature";
import Levels from "../components/shwcase/Levels";
import BuildSection from "../components/buildSection/BuildSection";
import Follow from "../components/follow/Follow";
import Touch from "../components/contact/Touch";
import Contact from "../components/contact/Contact";
import AboutMe from "../components/About/AboutMe";

function Home() {
  return (
    <div className="container-one ">
      <Shocase />
      <Feature />
      <Levels />
      <BuildSection />
      <Touch />
      <Contact />
      <AboutMe />
    </div>
  );
}

export default Home;
