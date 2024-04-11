import React, { useEffect } from "react";

const SkillsCard = ({ skill }) => {
  return (
    <div>
      <div
        title={skill.Name}
        className="w-10 mx-auto flex items-center flex-col justify-center"
      >
        <img
          src={`${skill.link}`}
          loading="lazy"
          alt={skill.Name}
          className={` w-[40px] h-[40px]`}
        />
        <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
          {skill.Name}
        </p>
      </div>
    </div>
  );
};

export default SkillsCard;
