import React, { useRef, useEffect, useState } from "react";

function PreviousValueTracker() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(); // Previous value ke liye useRef

  useEffect(() => {
    prevCount.current = count; // Update the previous value
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousValueTracker;
