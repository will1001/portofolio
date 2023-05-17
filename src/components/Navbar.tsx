import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-center items-center xs:space-x-5 md:space-x-10 p-5">
      <span className="cursor-pointer hover:text-[#7DE0EA] transition duration-300 ease-in-out">
        Home
      </span>
      <span className="cursor-pointer hover:text-[#7DE0EA] transition duration-300 ease-in-out">
        Projects
      </span>
      <a href="https://blog.wilirahmatm.com/" className="cursor-pointer hover:text-[#7DE0EA] transition duration-300 ease-in-out">
        Blog
      </a>
      {/* <span className="cursor-pointer hover:text-[#7DE0EA] transition duration-300 ease-in-out">
        About
      </span> */}
      <a href="https://www.upwork.com/freelancers/~010e9458891ddd920f" className="cursor-pointer bg-[#7DE0EA] text-white rounded-lg py-2 px-5">
        <span>Hire Me &#8594;</span>
      </a>
    </div>
  );
};
