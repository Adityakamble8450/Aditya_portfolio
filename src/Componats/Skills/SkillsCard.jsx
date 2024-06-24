import React, { useEffect } from "react";

const SkillsCard = ({ skill }) => {
  useEffect(() => {
    Shery.makeMagnet(".magnet-target", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }, []);
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
          className={` w-[40px] magnet-target  h-[40px]`}
        />
        <p className="text-xs text-white font-bold mt-3 opacity-80">
          {skill.Name}
        </p>
      </div>
    </div>
  );
};

export default SkillsCard;
