import React from "react";
import Build from "../../images/build.png";

function BuildSection() {
  return (
    <div className="h-64 overflow-y-scroll scrollbar-none ">
      <div className=" flex items-center justify-center">
        <div className="w-96 bg-white rounded-lg shadow-md">
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
  );
}

export default BuildSection;
