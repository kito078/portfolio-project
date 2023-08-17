import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Follow() {
  return (
    <div className="sticky top-32">
      <div className="absolute right-0 top-0">
        <div className="writing-mode-vertical">
          <h5 className="text-white transform rotate-180 origin-center whitespace-nowrap">
            follow me
          </h5>
        </div>
        <div className="flex">
          <div className="border-l-2 border-gray-400 h-14 my-2 mt-7 ml-2"></div>
        </div>
        <div>
          <div className="">
            <Link to="https://github.com/kito078" target="_blank">
              <BsGithub className="text-lg my-7 mr-5 text-gray-400 cursor-pointer hover:text-gray-200" />
            </Link>
            <Link to="https://twitter.com/KKessian" target="_blank">
              <FaTwitter className="text-lg my-7 mr-5 text-gray-400 cursor-pointer hover:text-gray-200" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/ngqabutho-kito-kessian-269675209/"
              target="_blank"
            >
              <FaLinkedin className="text-lg my-7 mr-5 text-gray-400 cursor-pointer hover:text-gray-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    // <div className="sticky">
    //   <div className="absolute right-0 top-16">
    //     <div class="writing-mode-vertical">
    //       <h5 class="text-white transform rotate-180 origin-center whitespace-nowrap">
    //         follow me
    //       </h5>
    //     </div>
    //     <div class="flex">
    //       <div class="border-l-2 border-gray-400 h-14 my-2 mt-7 ml-2"></div>
    //     </div>
    //     <div>
    //       <div className="">
    //         <div>
    //           <BsGithub className="text-lg my-7 mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
    //         </div>
    //         <div>
    //           <FaTwitter className="text-lg my-7 mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
    //         </div>
    //         <div>
    //           <FaLinkedin className="text-lg my-7 mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Follow;
