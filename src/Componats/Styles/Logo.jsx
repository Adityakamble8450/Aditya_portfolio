import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  // Remove the commented-out Sacramento import

  const Name = "Aditya";

  return (
    <Link to="/">
      <span className="font-black text-xl flex items-center">
        {Name.split("").map((letter, index) => (
          <span
            key={index}
            className={`hover:text-[#6D28D9] text-4xl font-bold hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim ${
              index + 1 === 5 ? "text-[#6D28D9]" : "text-[white]"
            }`}
            style={{ fontFamily: 'Sacramento, cursive' }} // Use Sacramento font
          >
            {letter}
          </span>
        ))}
      </span>
    </Link>
  );
};

export default Logo;
