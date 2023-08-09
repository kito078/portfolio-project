import React from "react";
import Build from "../../images/build.png";
import "./BuildSection.css"; // Import your CSS file

function BuildSection() {
  return (
    <div className="main-container h-64 overflow-y-scroll scrollbar-none relative">
      <div className="flex items-center justify-center">
        <div className="w-full bg-white rounded-lg shadow-md relative">
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
