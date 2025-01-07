import { useState } from "react";

const Colorize = () => {
  const [color, setColor] = useState("#6d0e0e");

  const changeColor = () => {
    console.log("changeColor");
    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(newColor);
  };
  return (
    <div className="colorizer flex flex-col items-center justify-center">
      <div
        className={`box w-52 h-52 m-4 p-4 border border-solid border-[#521d1d] rounded-lg`}
        style={{ backgroundColor: color }}
      >
        {color}
      </div>
      <button className="cursor-pointer" onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default Colorize;
