import React from "react";
import { ButtonDemo } from "../button";

const NavigationMenu = () => {
  return (
    <div>
      <div className="h-4 bg-sky-700"></div>

      <div className="flex bg-white-900 fixed top-0 w-full justify-between px-16 border-solid pt-6 pb-6	border-1 shadow-sm bg-white border-indigo-600">
        logo
        <div className="flex gap-3 border-solid border-1 border-indigo-600">
          <ButtonDemo buttonStyle="bg-blue-500 text-white hover:bg-blue-600">
            Create a post
          </ButtonDemo>
          <ButtonDemo buttonStyle="bg-white text-black hover:bg-white-600 border border-solid border-2 border-indigo-400">
            Sign Up/Login
          </ButtonDemo>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
