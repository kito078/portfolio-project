import React from "react";

function About() {
  return (
    <div
      className="flex flex-col items-center justify-content-center h-48 mt-16 text-center mx-6 lg:mx-0"
      id="about"
    >
      <p className="text-gray-400 text-lg mb-4">Get to know me</p>
      <h3 className="text-gray-300 text-4xl md:text-6xl font-bold mb-7">
        About Me
      </h3>
      <hr className="border-t-4 border-blue-500  my-2 w-20" />
    </div>
  );
}

export default About;
