import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      {count}
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default Counter;
