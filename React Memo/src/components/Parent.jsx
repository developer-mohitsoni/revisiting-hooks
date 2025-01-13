import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-3 m-3 shadow-parent-custom-red border-[1px] border-solid border-[rgb(197,6,6)]">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <p className="text-gray-800 text-lg font-medium mb-4">
          You clicked <span className="text-blue-500">{count}</span> times
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition duration-300"
        >
          Click Me
        </button>

        <div className="mt-6">
          <Child header={`I am a child`} />
        </div>
      </div>
    </div>
  );
};

export default Parent;
