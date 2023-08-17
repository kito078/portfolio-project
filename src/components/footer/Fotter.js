import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Fotter() {
  return (
    <footer class="mt-28">
      <div className="w-full group-hover:w-20 transition-all duration-300">
        <hr className="border-t-2 border-gray-700 my-6 " />
      </div>
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="px-4 py-6  md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-300 sm:text-center md:text-xl font-semibold">
            © 2023 <a href="">KitoKessian</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <Link to="https://github.com/kito078" target="_blank">
              <BsGithub className="text-xl mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
            </Link>
            <Link to="https://www.instagram.com/kit.7287/" target="_blank">
              <BsInstagram className="text-xl mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
            </Link>
            <Link to="https://twitter.com/KKessian" target="_blank">
              <FaTwitter className="text-xl mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/ngqabutho-kito-kessian-269675209/"
              target="_blank"
            >
              <FaLinkedin className="text-xl mr-5 text-gray-400 cursor-pointer  hover:text-gray-200" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Fotter;
