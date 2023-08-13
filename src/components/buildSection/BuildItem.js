import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDesktopMac } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { toBeChecked } from "@testing-library/jest-dom/matchers";

function BuildItem({ project }) {
  const { img, title, desc, tech, git, web, pro1, pro2, pro3 } = project;

  return (
    <div className="flex flex-col lg:flex-row gap-8 sm:gap-14 mx-6 lg:mx-0 mr-11 mb-0 lg:mb-52 ">
      <div className="main-container h-64 overflow-y-scroll scrollbar-none relative rounded-b-xl">
        <div className="flex items-center justify-center">
          <div className="w-3/ bg-white rounded-lg shadow-md relative">
            <div className="overlay">
              {/* This is the overlay content */}
              <div className="flex justify-center items-center mt-32">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
              </div>
            </div>
            <div className="mb-4">
              <img src={img} alt="Your Image" className="w-full h-auto" />
            </div>
            {/* <p className="text-gray-700 text-sm">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
   est ut urna cursus accumsan.
 </p> */}
          </div>
        </div>
      </div>
      <div className="mr-2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-300 mb-3 md:mb-4">
          {title}
        </h1>
        <div className=" ml-  ">
          <span className="text-sm sm:text-lg leading-normal text-gray-400">
            {" "}
            {desc}
          </span>
          <h5 className="text-blue-500 text-md md:text-lg font-semibold">
            {tech}
          </h5>
        </div>
        <div className="space-x-4 text-gray-300 font-semibold text-md sm:text-lg mt-4">
          <span>{pro1}</span>
          <span>{pro2}</span>
          <span>{pro3}</span>
        </div>
        <div className="flex mt-4">
          <Link to={git} target="_blank">
            <BsGithub className="text-3xl mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
          </Link>
          <Link to={web} target="_blank">
            <MdOutlineDesktopMac className="text-3xl mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BuildItem;
