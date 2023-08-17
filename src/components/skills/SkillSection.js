import React from "react";
import Box from "../../images/h.jpg";
import Box2 from "../../images/c.jpg";
import Box3 from "../../images/b.jpg";
import Box4 from "../../images/t.jpg";
import Box5 from "../../images/j.jpg";
import Box6 from "../../images/g.jpg";
import Box7 from "../../images/r.jpg";

function SkillSection() {
  return (
    <div class="grid grid-cols-3 sm:grid-cols-6 gap-4 mr-7 mb-40">
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20 " src={Box} alt="" />
        </div>
        <h5 className="font-semibold text-sm sm:text-md mt-4 uppercase">
          Html
        </h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20 " src={Box2} alt="" />
        </div>
        <h5 className="font-semibold text-sm sm:text-md mt-4 uppercase">css</h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box3} alt="" />
        </div>
        <h5 className="font-semibold text-sm sm:text-md mt-4 uppercase">
          bootstrap
        </h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box4} alt="" />
        </div>
        <h5 className="font-semibold text-sm sm:text-md mt-12 text-center uppercase">
          tailwind css
        </h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box5} alt="" />
        </div>
        <h5 className="font-semibold text-sm sm:text-md mt-4 uppercase">
          javascript
        </h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box6} alt="" />
        </div>
        <h5 className="font-semibold text-sm sm:text-md mt-4 uppercase">git</h5>
      </div>
      <div class="flex flex-col items-center p-4 ">
        <div>
          <img className="w-20" src={Box7} alt="" />
        </div>
        <h5 className="font-semibold text-sm sm:text-md mt-4 uppercase">
          reactjs
        </h5>
      </div>
    </div>
  );
}

export default SkillSection;
