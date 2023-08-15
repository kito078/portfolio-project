import React from "react";
import Box from "../../images/j.png";
import Box2 from "../../images/c.png";

function SkillSection() {
  return (
    <div class="grid grid-cols-3 gap-4">
      <div class="bg-blue-200 p-4">
        <img src={Box} alt="" />
      </div>
      <div class="bg-blue-200 p-4">
        <img src={Box2} alt="" />
      </div>
      <div class="bg-green-200 p-4">Div 2</div>
      <div class="bg-yellow-200 p-4">Div 3</div>
    </div>
  );
}

export default SkillSection;
