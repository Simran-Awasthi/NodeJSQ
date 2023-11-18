import React, { useState } from "react";
import useTheme from "../context/Theme";

const ThemeBtn = () => {
  const { theme, lightTheme, darkTheme } = useTheme();

  return (
    <div
      className={`w-full h-screen flex ${
        theme === "dark"
          ? "dark bg-neutral-800 text-white"
          : "light bg-white text-black"
      }`}
    >
      <div className="h-full bg-zinc-50 dark:bg-neutral-900 w-full max-w-[80px] flex flex-col border-r-0 border-gray-300 p-2">
        <button
          className="mt-auto text-2xl"
          onClick={() => (theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️" : "🌚"}
        </button>
      </div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        Toggle Theme
      </span>
    </div>
  );
};

export default ThemeBtn;
