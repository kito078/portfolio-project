import React from "react";
import Build from "../../images/build.png";
import "./BuildSection.css"; // Import your CSS file

function BuildSection() {
  return (
    <div>
      <div className="main-container h-64 overflow-y-scroll scrollbar-none relative">
        <div className="flex items-center justify-center">
          <div className="w-3/5 bg-white rounded-lg shadow-md relative">
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
        <h1>01. To Do Full Stack App</h1>
        <div>
          This is an assignment given in "JavaScript Full Stack Web Developer
          Bootcamp" by iNeuron, built using MongoDb, Express, React and NodeJS.
          This Site is Fully Responsive
        </div>
        <h5>React NodeJS Express MongoDb Tailwind CSS</h5>
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
