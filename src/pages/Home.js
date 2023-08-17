import React from "react";
import Shocase from "../components/shwcase/Shocase";
import Feature from "../components/shwcase/Feature";
import Levels from "../components/shwcase/Levels";
import BuildSection from "../components/buildSection/BuildSection";
import Follow from "../components/follow/Follow";
import Touch from "../components/contact/Touch";
import Contact from "../components/contact/Contact";
import AboutMe from "../components/About/AboutMe";
import About from "../components/About/About";
import Skills from "../components/skills/Skills";
import SkillSection from "../components/skills/SkillSection";
import Fotter from "../components/footer/Fotter";

function Home() {
  return (
    <div className="container-one ">
      <Shocase />
      <Skills />
      <SkillSection />
      <Feature />
      <Levels />
      <BuildSection />
      <Touch />
      <Contact />
      <About />
      <AboutMe />
      <Fotter />
    </div>
  );
}

export default Home;
