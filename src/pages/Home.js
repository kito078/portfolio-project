import React from "react";
import Shocase from "../components/shwcase/Shocase";
import Feature from "../components/shwcase/Feature";
import Levels from "../components/shwcase/Levels";
import BuildSection from "../components/buildSection/BuildSection";
import Follow from "../components/follow/Follow";

function Home() {
  return (
    <div className="container-one ">
      <Shocase />
      <Feature />
      <Levels />
      <BuildSection />
    </div>
  );
}

export default Home;
