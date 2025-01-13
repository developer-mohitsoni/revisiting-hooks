import { useState, useRef, useEffect } from "react";

const Counter = () => {
  const countRef = useRef(0); // Value re-render ke bina persist rahegi
  const [searchTerm, setSearchTerm] = useState("");

  // const increment = () => {
  //   countRef.current += 1; // Value update ho rahi hai, but re-render nahi hoga
  //   console.log("Current count:", countRef.current);
  // };

  useEffect(() => {
    countRef.current = countRef.current + 1;
    console.log("Incrementing counter");
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Search Term
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Type something..."
          />
        </div>
        <p className="text-gray-700">
          <span className="font-medium">Counter:</span> {countRef.current}
        </p>
      </div>

      {/* <button onClick={increment}>Increment</button> */}
    </div>
  );
};

export default Counter;
