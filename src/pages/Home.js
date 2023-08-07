import React from "react";
import Shocase from "../components/shwcase/Shocase";
import Feature from "../components/shwcase/Feature";
import Levels from "../components/shwcase/Levels";

function Home() {
  return (
    <div className="container-one ">
      <Shocase />
      <Feature />
      <Levels />
    </div>
  );
}

export default Home;
