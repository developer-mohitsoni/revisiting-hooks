import { useEffect, useRef } from "react";

const Focus = () => {
  const inputElemRef = useRef(null); // DOM element ka reference banaya

  const handleFocus = () => {
    inputElemRef.current.focus(); // Directly input field pe focus karaya
    inputElemRef.current.style.backgroundColor = "pink"; // Directly input field ka background color change karya
  };
  /*
  useEffect(() => {
    inputElemRef.current.focus(); //  Directly input field pe focus karaya
  }, []);
  */
  return (
    <div>
      <div>
        <input ref={inputElemRef} type="text" placeholder="Type something..." className="text-black" />
      </div>
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default Focus;
