import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";
import Follow from "../follow/Follow";
import Man from "../../images/man.jpg";
import Typical from "react-typical";

function Shocase() {
  const steps = ["Ngqabutho", 1000, "Ngqabutho Kito Ndlovu!", 500];
  return (
    <div
      className="mx-6 lg:mx-0  lg:mb-40 flex flex-col lg:flex-row "
      id="home"
    >
      <div>
        <div className="leading-normal text-5xl  sm:text-7xl font-bold text-gray-300 mb-3">
          <Typical steps={steps} loop={Infinity} wrapper="h1" />
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-gray-300 mb-3 md:my-6">
          Front-End Developer.
        </h3>
        <p className="text-gray-400 text-lg font-normal mb-20 mr-3">
          I am passionately dedicated to frontend development, specializing in
          creating elegant and responsive web applications
        </p>
        <div className="flex items-center justify-items-center cursor-pointer  group">
          <div className="w-10 group-hover:w-20 transition-all duration-300">
            <hr className="border-t-2 border-gray-400 my-2" />
          </div>
          <span className="mb-2 ml-4 text-gray-300 uppercase text-sm font-bold">
            ABout
          </span>
        </div>
        <div className="flex items-center justify-items-center cursor-pointer group">
          <div className="w-10 group-hover:w-20 transition-all duration-300">
            <hr className="border-t-2 border-gray-600 my-2" />
          </div>
          <span className="mb-2 ml-4 text-gray-00 uppercase text-sm font-bold">
            experience
          </span>
        </div>
        <div className="flex items-center justify-items-center cursor-pointer group">
          <div className="w-10 group-hover:w-20 transition-all duration-300">
            <hr className="border-t-2 border-gray-600 my-2" />
          </div>
          <span className="mb-2 ml-4 text-gray-00 uppercase text-sm font-bold">
            projects
          </span>
        </div>
        <div className="flex items-center justify-items-center mt-10">
          <div>
            <BsGithub className="text-2xl mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
          </div>
          <div>
            <BsInstagram className="text-2xl mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
          </div>
          <div>
            <FaTwitter className="text-2xl mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
          </div>
          <div>
            <FaLinkedin className="text-2xl mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
          </div>
        </div>
      </div>
      {/* <div className="shocase__body hidden lg:block">
        <img className="w-full" src={Man} alt="" />
      </div> */}
    </div>
  );
}

export default Shocase;
