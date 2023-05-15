import Image from "next/image";
import React from "react";

interface SkillIconProps {
  icon: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ icon }) => {
  return (
    <div className="border border-black border-1 rounded-full p-3">
      <Image src={icon} alt="" width={64} height={64} />
    </div>
  );
};
