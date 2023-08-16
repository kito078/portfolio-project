import React from "react";
import Box from "../../images/j.png";
import Box2 from "../../images/c.png";

function SkillSection() {
  return (
    <div class="grid grid-cols-3 sm:grid-cols-6 gap-4 mr-7">
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box} alt="" />
        </div>
        <h5 className="font-semibold text-md mt-4 uppercase">Html</h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box} alt="" />
        </div>
        <h5 className="font-semibold text-md mt-4 uppercase">Html</h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box} alt="" />
        </div>
        <h5 className="font-semibold text-md mt-4 uppercase">Html</h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box} alt="" />
        </div>
        <h5 className="font-semibold text-md mt-4 uppercase">Html</h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box} alt="" />
        </div>
        <h5 className="font-semibold text-md mt-4 uppercase">Html</h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box} alt="" />
        </div>
        <h5 className="font-semibold text-md mt-4 uppercase">Html</h5>
      </div>
    </div>
  );
}

export default SkillSection;
