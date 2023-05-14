import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-center space-x-10 p-5">
      <span className="cursor-pointer">Home</span>
      <span className="cursor-pointer">Projects</span>
      <span className="cursor-pointer">Blog</span>
      <span className="cursor-pointer">About</span>
      <span className="cursor-pointer">Contact</span>
    </div>
  );
};
