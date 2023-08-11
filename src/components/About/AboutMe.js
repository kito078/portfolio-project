import React from "react";

function AboutMe() {
  return (
    <div className="mx-6 lg:mx-0 mr-12">
      <div>
        <div>
          <h3 className="text-2xl text-blue-500 mb-4 font-semibold">
            Who am i?
          </h3>
          <h3 className="text-3xl text-gray-300 font-bold mb-5">
            I'm Emma Smith, a visual UX/UI Designer and Web Developer
          </h3>
          <p className="text-gray-400 text-lg">
            {" "}
            I am a freelancer based in the United Kingdom and i have been
            building noteworthy UX/UI designs and websites for years, which
            comply with the latest design trends. I help convert a vision and an
            idea into meaningful and useful products. Having a sharp eye for
            product evolution helps me prioritize tasks, iterate fast and
            deliver faster.{" "}
          </p>
        </div>
        <div className="w-10 group-hover:w-20 transition-all duration-300">
          <hr className="border-t-2 border-gray-400 my-2" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between`">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h5 className="text-gray-300 text-lg font-bold">Name:</h5>
              <p className="text-gray-400 text-md ml-3">Emma Smith</p>
            </div>
            <div className="flex items-center justify-content-center">
              <h5 className="text-gray-300 text-lg font-bold">Age:</h5>
              <p className="text-gray-400 text-md ml-3">21</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-content-center mb-3">
              <h5 className="text-gray-300 text-lg font-bold">Name:</h5>
              <p className="text-gray-400 text-md ml-3">Emma Smith</p>
            </div>
            <div className="flex items-center justify-content-center">
              <h5 className="text-gray-300 text-lg font-bold">Age:</h5>
              <p className="text-gray-400 text-md ml-3">21</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
