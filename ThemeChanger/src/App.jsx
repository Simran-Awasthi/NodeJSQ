import { useState, useEffect } from "react";
import React from "react";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./component/ThemeBtn";
import Card from "./component/Card";

const App = () => {
  const [theme, setTheme] = useState("light");
  const lightTheme = () => {
    setTheme("light");
  };

  const darkTheme = () => {
    setTheme("dark");
  };

  // actual change in theme

  useEffect(() => {
    // document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  return (
    <ThemeProvider value={{ theme, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <div className="flex flex-col gap-2 p-4">
              {[1, 2, 3, 4].map((e) => {
                return (
                  <Card
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
      </div>
    </ThemeProvider>
  );
};

export default App;
