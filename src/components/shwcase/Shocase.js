import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";

function Shocase() {
  return (
    <div className="mx-8 lg:mx-0  ">
      <h1 className="leading-normal text-4xl  sm:text-5xl font-bold text-gray-300 mb-3">
        Ngqabutho Kito Ndlovu
      </h1>
      <h5 className="text-2xl font-semibold text-gray-300 mb-3">
        Front-End Developer
      </h5>
      <p className="text-gray-400 text-lg mb-20">
        I build accessible, inclusive products and digital experiences for the
        web.
      </p>

      <div className="flex items-center justify-items-center cursor-pointer  group">
        <div className="w-10 group-hover:w-20 transition-all duration-300">
          <hr className="border-t-2 border-gray-400 my-2" />
        </div>
        <span className="mb-2 ml-4 text-gray-300 uppercase text-sm">ABout</span>
      </div>
      <div className="flex items-center justify-items-center cursor-pointer group">
        <div className="w-10 group-hover:w-20 transition-all duration-300">
          <hr className="border-t-2 border-gray-600 my-2" />
        </div>
        <span className="mb-2 ml-4 text-gray-00 uppercase text-sm">
          experience
        </span>
      </div>

      <div className="flex items-center justify-items-center cursor-pointer group">
        <div className="w-10 group-hover:w-20 transition-all duration-300">
          <hr className="border-t-2 border-gray-600 my-2" />
        </div>
        <span className="mb-2 ml-4 text-gray-00 uppercase text-sm">
          projects
        </span>
      </div>
      <div>
        <div>
          <BsGithub />
        </div>
        <div>
          <BsInstagram />
        </div>
        <div>
          <FaTwitter />
        </div>
        <div>
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}

export default Shocase;
