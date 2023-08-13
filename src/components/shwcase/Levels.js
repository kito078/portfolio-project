// import React from "react";
// import { ImArrowUpRight2 } from "react-icons/im";

// function Levels() {
//   return (
//     // <div className="flex flex-col items-center justify-items-center w-2/4 mx-auto text-center ">
//     //   <span className="flex items-center justify-items-center ">
//     //     <h3 className="text-3xl font-bold text-gray-300 ">
//     //       Level Up Your Coding Skills{" "}
//     //     </h3>
//     //     <span className="font-bold text-2xl">
//     //       <ImArrowUpRight2 className=" mt-2 ml-2" />
//     //     </span>
//     //   </span>
//     //   <p className="text-xl text-gray-400">
//     //     Whether you're looking to switch to a career in tech or to advance in
//     //     your current role, my courses give you the
//     //   </p>
//     // </div>
//     <div className="flex flex-col items-center justify-items-center w-2/4 mx-auto text-center group">
//       <span className="flex items-center justify-items-center">
//         <h3 className="text-3xl font-bold text-gray-300">
//           Level Up Your Coding Skills{" "}
//         </h3>
//         <span className="font-bold text-2xl transform transition-transform group-hover:translate-x-2">
//           <ImArrowUpRight2 className="mt-2 ml-2" />
//         </span>
//       </span>
//       <p className="text-xl text-gray-400">
//         Whether you're looking to switch to a career in tech or to advance in
//         your current role, my courses give you the
//       </p>
//     </div>
//   );
// }

// export default Levels;

import { useState } from "react"; // Import useState from React
import { ImArrowUpRight2 } from "react-icons/im";

function Levels() {
  // State to track hover state
  const [hovered, setHovered] = useState(false);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setHovered(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-items-center mb-24 w-2/4 mx-auto text-center group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="flex items-center justify-items-center">
        <h3 className="text-3xl font-bold text-gray-300">
          {/* Level Up Your Coding Skills{" "} */}
        </h3>
        <span
          className={`font-bold text-2xl transform transition-transform ${
            hovered ? "rotate-180 translate-y-2" : "rotate-0"
          }`}
        >
          <ImArrowUpRight2 className="mt-2 ml-2" />
        </span>
      </span>

      <div className="mt-4">
        {/* Content that appears when hovering */}
        {/* <p className="text-lg text-gray-500">
          Whether you're looking to switch to a career in tech or to advance in
          your current role, my courses give you the
        </p> */}
      </div>
    </div>
  );
}

export default Levels;
