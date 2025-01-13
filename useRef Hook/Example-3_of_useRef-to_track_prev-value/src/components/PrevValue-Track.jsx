import React, { useRef, useEffect, useState } from "react";

function PreviousValueTracker() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(); // Previous value ke liye useRef

  useEffect(() => {
    prevCount.current = count; // Update the previous value
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <p className="text-xl font-semibold text-gray-800">
          Current Count: <span className="text-blue-600">{count}</span>
        </p>
        <p className="text-lg text-gray-600">
          Previous Count:{" "}
          <span className="text-green-600">{prevCount.current}</span>
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition duration-300"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default PreviousValueTracker;
