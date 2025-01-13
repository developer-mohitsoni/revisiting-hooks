import { useRef, useEffect } from "react";

const Counter = () => {
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
    console.log("Incrementing counter");
  });
  return <>{countRef.current}</>;
};

export default Counter;
