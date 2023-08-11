import React from "react";
import Build from "../../images/build.png";
import "./BuildSection.css"; // Import your CSS file
import { MdOutlineDesktopMac } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

function BuildSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-14 lg:mb-60">
      <div className="main-container h-64 overflow-y-scroll scrollbar-none relative">
        <div className="flex items-center justify-center">
          <div className="w-3/ bg-white rounded-lg shadow-md relative">
            <div className="overlay">
              {/* This is the overlay content */}
              <h2 className="text-white text-2xl">Overlay Content</h2>
            </div>
            <div className="mb-4">
              <img src={Build} alt="Your Image" className="w-full h-auto" />
            </div>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              est ut urna cursus accumsan.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-gray-300 text-3xl font-bold mb-6">
          01. To Do Full Stack App
        </h1>
        <div className=" ml-  ">
          <p className="text-lg text-gray-400">
            {" "}
            This is an assignment given in "JavaScript Full Stack Web Developer
            Bootcamp" by iNeuron, built using MongoDb, Express, React and
            NodeJS. This Site is Fully Responsive
          </p>
          <h5 className="text-blue-500 text-lg font-semibold">
            React NodeJS Express MongoDb Tailwind CSS
          </h5>
        </div>
        <div className="space-x-4 text-gray-300 mt-4">
          <span>html5</span>
          <span>Reactjs</span>
          <span>Tailwind css</span>
        </div>
        <div className="flex mt-4">
          <BsGithub className="text-3xl mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
          <MdOutlineDesktopMac className="text-3xl mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
        </div>
      </div>
    </div>
  );
}

export default BuildSection;

//  <div className="h-64 overflow-y-scroll scrollbar-none ">
//       <div className=" flex items-center justify-center">
//         <div className="w-96 bg-white rounded-lg shadow-md">
//           <div className="mb-4">
//             <img src={Build} alt="Your Image" className="w-full h-auto" />
//           </div>
//           <p className="text-gray-700 text-sm">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
//             est ut urna cursus accumsan.
//           </p>
//         </div>
//       </div>
//     </div>
