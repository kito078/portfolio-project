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
      title: "ToDo Full Stack App",
      desc: "This is an assignment given in JavaScript Full Stack Web DeveloperBootcamp by iNeuron, built using MongoDb, Express, React andNodeJS. This Site is Fully Responsive",
      tech: "React NodeJS Express MongoDb Tailwind CSS",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://github.com/kito078/chack-me-store",
      web: "https://chack-me-store.vercel.app/",
    },
    {
      img: Build2,
      title: "ToDo Full Stack App",
      desc: "This is an assignment given in JavaScript Full Stack Web DeveloperBootcamp by iNeuron, built using MongoDb, Express, React andNodeJS. This Site is Fully Responsive",
      tech: "React NodeJS Express MongoDb Tailwind CSS",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://github.com/kito078/IT-Soft",
      web: "https://dancing-fenglisu-f2dbc7.netlify.app/",
    },
    {
      img: Build3,
      title: "ToDo Full Stack App",
      desc: "This is an assignment given in JavaScript Full Stack Web DeveloperBootcamp by iNeuron, built using MongoDb, Express, React andNodeJS. This Site is Fully Responsive",
      tech: "React NodeJS Express MongoDb Tailwind CSS",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://github.com/kito078/soHost",
      web: "https://so-host.vercel.app/",
    },
    {
      img: Build4,
      title: "ToDo Full Stack App",
      desc: "This is an assignment given in JavaScript Full Stack Web DeveloperBootcamp by iNeuron, built using MongoDb, Express, React andNodeJS. This Site is Fully Responsive",
      tech: "React NodeJS Express MongoDb Tailwind CSS",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://github.com/United-Programmers/Buy_and_sell_react",
      web: "https://buy-and-sell-react.vercel.app/home",
    },
    {
      img: Build5,
      title: "ToDo Full Stack App",
      desc: "This is an assignment given in JavaScript Full Stack Web DeveloperBootcamp by iNeuron, built using MongoDb, Express, React andNodeJS. This Site is Fully Responsive",
      tech: "React NodeJS Express MongoDb Tailwind CSS",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://github.com/kito078/carStore",
      web: "https://car-store-umber.vercel.app/",
    },
  ];
  return (
    <div>
      {projects.map((project) => (
        <BuildItem project={project} />
      ))}
    </div>
  );
}

export default BuildSection;
