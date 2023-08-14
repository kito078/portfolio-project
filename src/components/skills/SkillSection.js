import React from "react";
import Html from "../../images/j.png";

function SkillSection() {
  return (
    <div className="grid grid-rows-3 gap-4 items-center justify-center">
      <div className="flex flex-col items-center">
        <img className="w-20 mb-4" src={Html} alt="" />
        <h5 className="uppercase font-bold text-gray-300">html</h5>
      </div>
      <div className="flex flex-col items-center">
        <img className="w-20 mb-4" src={Html} alt="" />
        <h5 className="uppercase font-bold text-gray-300">html</h5>
      </div>
      <div className="flex flex-col items-center">
        <img className="w-20 mb-4" src={Html} alt="" />
        <h5 className="uppercase font-bold text-gray-300">html</h5>
      </div>
    </div>
  );
}

export default SkillSection;
