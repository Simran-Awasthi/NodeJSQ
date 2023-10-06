import React, { useEffect, useState } from "react";

const TrafficLight = ({ config }: any) => {
  const [currentColor, setCurrentColor] = useState<string>("green");
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentColor((preColor) => {
        return config[preColor]?.next || "red";
      });
    }, config[currentColor]?.duration || 0);
    return () => {
      clearInterval(timer);
    };
  }, [currentColor, config]);
  return (
    <section className="w-full h-full grid gird-col-2 gap-20 m-10 items-center justify-center">
      <div className="px-4 flex  flex-col py-4 gap-6 bg-black  rounded-md ">
        <div
          className={`" px-8 py-8 rounded-full ${
            currentColor === "red" ? "bg-red-500" : "bg-gray-200"
          } items-start justify-center"`}
        ></div>
        <div
          className={`"px-8 py-8 rounded-full ${
            currentColor === "yellow" ? "bg-yellow-500" : "bg-gray-200"
          } items-start justify-center"`}
        ></div>
        <div
          className={`"px-8 py-8 rounded-full ${
            currentColor === "green" ? "bg-green-500" : "bg-gray-200"
          } items-start justify-center"`}
        ></div>
      </div>
    </section>
  );
};

export default TrafficLight;
