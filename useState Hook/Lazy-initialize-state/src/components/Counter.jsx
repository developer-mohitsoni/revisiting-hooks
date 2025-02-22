import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(() => Math.floor(Math.random() * 16));

  const incrBy3 = () => {
    console.log("incrBy3");

    setCounter(counter + 3);

    setCounter((prevCounter) => prevCounter + 3);
  };

  return (
    <div>
      <div>
        <span>{counter}</span>
        <button onClick={incrBy3}> + 3</button>
      </div>
    </div>
  );
};

export default Counter;
