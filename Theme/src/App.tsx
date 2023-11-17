import { useState } from "react";
import Tweet from "./component/Tweet";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div
      className={`w-full flex h-screen items-center justify-center justify-items-center  ${
        theme === "dark"
          ? "dark bg-black text-white"
          : "light bg-white text-black"
      }`}
    >
      <div className=" w-full items-center justify-center  flex flex-col border-r-0 border-gray-300 p-2">
        <button
          className="mt-auto text-2xl"
          onClick={() =>
            setTheme((theme) => (theme === "dark" ? "light" : "dark"))
          }
        >
          {theme === "dark" ? "☀️" : "🌚"}
        </button>
        <div className="flex flex-col gap-2 p-4">
          {[1, 2, 3, 4].map((e) => {
            return (
              <Tweet
                key={e}
                text="This is my tweet"
                username="simran Awasthi"
                handle="Simran"
                verified={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
