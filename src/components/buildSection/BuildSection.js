import React from "react";
import Build from "../../images/build.png";
import "./BuildSection.css"; // Import your CSS file

import BuildItem from "./BuildItem";

function BuildSection() {
  const projects = [
    {
      img: Build,
      title: "ToDo Full Stack App",
      desc: "This is an assignment given in JavaScript Full Stack Web DeveloperBootcamp by iNeuron, built using MongoDb, Express, React andNodeJS. This Site is Fully Responsive",
      tech: "React NodeJS Express MongoDb Tailwind CSS",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://tailwindcss.com/docs/line-height",
      web: "https://tailwindcss.com/docs/line-height",
    },
    {
      img: Build,
      title: "ToDo Full Stack App",
      desc: "This is an assignment given in JavaScript Full Stack Web DeveloperBootcamp by iNeuron, built using MongoDb, Express, React andNodeJS. This Site is Fully Responsive",
      tech: "React NodeJS Express MongoDb Tailwind CSS",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://tailwindcss.com/docs/line-height",
      web: "https://tailwindcss.com/docs/line-height",
    },
    {
      img: Build,
      title: "ToDo Full Stack App",
      desc: "This is an assignment given in JavaScript Full Stack Web DeveloperBootcamp by iNeuron, built using MongoDb, Express, React andNodeJS. This Site is Fully Responsive",
      tech: "React NodeJS Express MongoDb Tailwind CSS",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://tailwindcss.com/docs/line-height",
      web: "https://tailwindcss.com/docs/line-height",
    },
    {
      img: Build,
      title: "ToDo Full Stack App",
      desc: "This is an assignment given in JavaScript Full Stack Web DeveloperBootcamp by iNeuron, built using MongoDb, Express, React andNodeJS. This Site is Fully Responsive",
      tech: "React NodeJS Express MongoDb Tailwind CSS",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://tailwindcss.com/docs/line-height",
      web: "https://tailwindcss.com/docs/line-height",
    },
    {
      img: Build,
      title: "ToDo Full Stack App",
      desc: "This is an assignment given in JavaScript Full Stack Web DeveloperBootcamp by iNeuron, built using MongoDb, Express, React andNodeJS. This Site is Fully Responsive",
      tech: "React NodeJS Express MongoDb Tailwind CSS",
      pro1: "html5",
      pro2: "Reactjs",
      pro3: "Tailwind css",
      git: "https://tailwindcss.com/docs/line-height",
      web: "https://tailwindcss.com/docs/line-height",
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
