import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";
import Follow from "../follow/Follow";

function Shocase() {
  return (
    <div className="mx-6 lg:mx-0  lg:mb-60">
      <h1 className="leading-normal text-5xl  sm:text-7xl font-bold text-gray-300 mb-3">
        Ngqabutho Kito Ndlovu
      </h1>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-300 mb-3 md:my-6">
        JavaScript Mastery
      </h3>
      <p className="text-gray-400 text-2xl font-normal mb-20">
        I build accessible, inclusive products and digital experiences for the
        web.
      </p>

      <div className="flex items-center justify-items-center cursor-pointer  group">
        <div className="w-10 group-hover:w-20 transition-all duration-300">
          <hr className="border-t-2 border-gray-400 my-2" />
        </div>
        <span className="mb-2 ml-4 text-gray-300 uppercase text-md font-medium">
          ABout
        </span>
      </div>
      <div className="flex items-center justify-items-center cursor-pointer group">
        <div className="w-10 group-hover:w-20 transition-all duration-300">
          <hr className="border-t-2 border-gray-600 my-2" />
        </div>
        <span className="mb-2 ml-4 text-gray-00 uppercase text-md font-medium">
          experience
        </span>
      </div>

      <div className="flex items-center justify-items-center cursor-pointer group">
        <div className="w-10 group-hover:w-20 transition-all duration-300">
          <hr className="border-t-2 border-gray-600 my-2" />
        </div>
        <span className="mb-2 ml-4 text-gray-00 uppercase text-md font-medium">
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
  );
}

export default Shocase;
