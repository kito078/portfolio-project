import React from "react";
import Man from "../../images/kito.jpg";

function AboutMe() {
  return (
    <div className="mx-6 lg:mx-0 mr-12 flex gap-20">
      <div className="shocase__body hidden lg:block">
        <img src={Man} alt="" />
      </div>
      <div>
        <div>
          <h3 className="text-2xl text-blue-500 mb-4 font-semibold">
            Who am i?
          </h3>
          <h3 className="text-3xl md:text-3xl font-bold text-gray-300 font-bold mb-5">
            I'm Ngqabutho Kito Ndlovu, a Web Developer specializing in creating
            innovative digital experiences
          </h3>
          <span className="text-gray-400 text-sm sm:text-lg">
            {" "}
            As a frontend developer with a strong devotion to crafting elegant
            and responsive web applications, I am finding profound joy in
            transforming imaginative designs into interactive, user-friendly
            interfaces. Each project I work on is an opportunity to create
            engaging digital experiences that resonate with users and leave a
            lasting impact.{" "}
          </span>
        </div>
        <div className="w-full group-hover:w-20 transition-all duration-300">
          <hr className="border-t-2 border-gray-700 my-6 " />
        </div>
        <div className="flex flex-col sm:flex-row  justify-between mr-5">
          <div>
            <div className="flex items-center mb-4">
              <h5 className="text-gray-300 text:md sm:text-lg font-bold">
                Name:
              </h5>
              <span className="text-gray-400 text-sm md:text-md ml-3 font-semibold">
                Ngqabutho Kito Ndlovu
              </span>
            </div>
            <div className="flex items-center justify-content-center">
              <h5 className="text-gray-300 text:md sm:text-lg font-bold">
                Age:
              </h5>
              <span className="text-gray-400 text-sm md:text-md ml-6 font-semibold">
                25
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-content-center mb-4">
              <h5 className="text-gray-300 text:md sm:text-lg font-bold">
                Email:
              </h5>
              <span className="text-gray-400 text-sm md:text-md ml-3 font-semibold">
                {" "}
                kitokessian07@gmail.com
              </span>
            </div>
            <div className="flex items-center justify-content-center">
              <h5 className="text-gray-300 text:md sm:text-lg font-bold">
                From:
              </h5>
              <span className="text-gray-400 text-sm md:text-md ml-3 font-semibold">
                {" "}
                Beria JHB
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
