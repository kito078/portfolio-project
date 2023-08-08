import React from "react";
import Build from "../../images/build.png";

function BuildSection() {
  return (
    <div>
      {" "}
      <div class="h-96 flex items-center justify-center ">
        <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md overflow-y-scroll">
          <div class="mb-4">
            <img src={Build} alt="Your Image" class="w-full h-auto" />
          </div>
          <p class="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            est ut urna cursus accumsan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuildSection;
