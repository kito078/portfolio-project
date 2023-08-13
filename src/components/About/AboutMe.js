import React from "react";

function AboutMe() {
  return (
    <div className="mx-6 lg:mx-0 mr-12">
      <div>
        <div>
          <h3 className="text-2xl text-blue-500 mb-4 font-semibold">
            Who am i?
          </h3>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-300 font-bold mb-5">
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
        <div className="w-full group-hover:w-20 transition-all duration-300">
          <hr className="border-t-2 border-gray-700 my-6 " />
        </div>
        <div className="flex flex-col sm:flex-row  justify-between">
          <div>
            <div className="flex items-center mb-4">
              <h5 className="text-gray-300 text-lg font-bold">Name:</h5>
              <span className="text-gray-400 text-md ml-3 font-semibold">
                Emma Smith
              </span>
            </div>
            <div className="flex items-center justify-content-center">
              <h5 className="text-gray-300 text-lg font-bold">Age:</h5>
              <span className="text-gray-400 text-md ml-3 font-semibold">
                21
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-content-center mb-4">
              <h5 className="text-gray-300 text-lg font-bold">Email:</h5>
              <span className="text-gray-400 text-md ml-3 font-semibold">
                {" "}
                emma@example.com
              </span>
            </div>
            <div className="flex items-center justify-content-center">
              <h5 className="text-gray-300 text-lg font-bold">From:</h5>
              <span className="text-gray-400 text-md ml-3 font-semibold">
                {" "}
                Liverpool, UK
              </span>
            </div>
          </div>
        </div>
        <div>
          <button class="rounded-full bg-blue-500 py-3 px-14 my-8 text-lg">
            download cv
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
