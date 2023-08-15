import React from "react";

function Feature() {
  return (
    <div
      className="flex flex-col items-center justify-items-center mt-20"
      id="projects"
    >
      <div className="flex items-center justify-items-center cursor-pointer group">
        <div className="w-14 ">
          <hr className="border-t-2 border-gray-600 my-2" />
        </div>
        <span className="mb-4 ml-4 text-gray-00 uppercase text-sm">
          01 / 03
        </span>
      </div>
      <h3 className="text-gray-300 text-4xl md:text-6xl font-bold mb-6">
        projects updates
      </h3>
    </div>
  );
}

export default Feature;
