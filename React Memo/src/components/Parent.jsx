import { useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>

      <Child header={`I am a child`} />
    </div>
  );
};

export default Parent;
