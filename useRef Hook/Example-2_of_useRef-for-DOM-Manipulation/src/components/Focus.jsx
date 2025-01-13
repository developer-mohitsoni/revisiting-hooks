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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <div className="mb-4">
          <input
            ref={inputElemRef}
            type="text"
            placeholder="Type something..."
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
        </div>
        <button
          onClick={handleFocus}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition duration-300"
        >
          Focus Input
        </button>
      </div>
    </div>
  );
};

export default Focus;
