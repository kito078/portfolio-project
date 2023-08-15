import React from "react";
import Build1 from "../../images/build1.png";
import Build2 from "../../images/build2.png";
import Build3 from "../../images/build3.png";
import Build4 from "../../images/build4.png";
import Build5 from "../../images/build5.png";
import "./BuildSection.css"; // Import your CSS file

import BuildItem from "./BuildItem";

function BuildSection() {
  const projects = [
    {
      img: Build1,
      title: "ShopStore React-App",
      desc: "This is an ecommerce store built using a combination of HTML, CSS, Bootstrap, and ReactJS, designed to deliver a seamless shopping experience to users",
      tech: "This Site is Fully Responsive",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://github.com/kito078/chack-me-store",
      web: "https://chack-me-store.vercel.app/",
    },
    {
      img: Build2,
      title: "IT-Soft JS App",
      desc: "This is an IT website created through the fusion of HTML, CSS,  and ReactJS, boasting not only its technical prowess but also its responsiveness across various devices",
      tech: "This Site is Fully Responsive",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://github.com/kito078/IT-Soft",
      web: "https://dancing-fenglisu-f2dbc7.netlify.app/",
    },
    {
      img: Build3,
      title: "soHost React-App",
      desc: "This soHost-inspired website has come to life through the synergy of HTML, CSS,  bootstrap and ReactJS, delivering a seamless user experience for discovering unique accommodations.",
      tech: "This Site is Fully Responsive",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://github.com/kito078/soHost",
      web: "https://so-host.vercel.app/",
    },
    {
      img: Build4,
      title: "Buy and Sell React App",
      desc: "The Buy and Sell React App website has been crafted by merging HTML, CSS, bootstrap and ReactJS, resulting in a platform that enables seamless buying and selling experiences",
      tech: "This Site is Fully Responsive",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://github.com/United-Programmers/Buy_and_sell_react",
      web: "https://buy-and-sell-react.vercel.app/home",
    },
    {
      img: Build5,
      title: "Rebate React App",
      desc: "This ecommerce platform is constructed by integrating HTML, CSS, Bootstrap, and ReactJS, meticulously crafted to provide users with a smooth and enjoyable shopping journey.",
      tech: "This Site is Fully Responsive",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://github.com/kito078/carStore",
      web: "https://car-store-umber.vercel.app/",
    },
  ];
  return (
    <div className="">
      {projects.map((project) => (
        <BuildItem project={project} />
      ))}
    </div>
  );
}

export default BuildSection;
