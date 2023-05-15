import React from "react";
import { SkillIcon } from "./SkillIcon";

export const SkillSet = () => {
  return (
    <div className="flex justify-center items-center w-full h-[30vh]">
      <div className="xs:grid xs:grid-cols-3 md:flex justify-center items-center xs:gap-3 md:gap-7">
        <SkillIcon icon="/icons8-nodejs-64.svg" />
        <SkillIcon icon="/icons8-nodejs-64.svg" />
        <SkillIcon icon="/icons8-nodejs-64.svg" />
        <SkillIcon icon="/icons8-nodejs-64.svg" />
        <SkillIcon icon="/icons8-nodejs-64.svg" />
        <SkillIcon icon="/icons8-nodejs-64.svg" />
      </div>
    </div>
  );
};
