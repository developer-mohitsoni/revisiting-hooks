import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prev) => prev + 1);
    console.log("Incrementing counter");
  }, []); // Increment the count once the page render
  return <>{count}</>;
};

export default Counter;
