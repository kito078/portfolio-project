import React from "react";
import Box from "../../images/h.png";
import Box2 from "../../images/c.png";
import Box3 from "../../images/b.png";
import Box4 from "../../images/t.png";
import Box5 from "../../images/j.png";
import Box6 from "../../images/g.png";
import Box7 from "../../images/r.png";

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
          <img className="w-20" src={Box2} alt="" />
        </div>
        <h5 className="font-semibold text-md mt-4 uppercase">Html</h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box3} alt="" />
        </div>
        <h5 className="font-semibold text-md mt-4 uppercase">Html</h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box4} alt="" />
        </div>
        <h5 className="font-semibold text-md mt-4 uppercase">Html</h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box5} alt="" />
        </div>
        <h5 className="font-semibold text-md mt-4 uppercase">Html</h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box6} alt="" />
        </div>
        <h5 className="font-semibold text-md mt-4 uppercase">Html</h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box7} alt="" />
        </div>
        <h5 className="font-semibold text-md mt-4 uppercase">Html</h5>
      </div>
    </div>
  );
}

export default SkillSection;
