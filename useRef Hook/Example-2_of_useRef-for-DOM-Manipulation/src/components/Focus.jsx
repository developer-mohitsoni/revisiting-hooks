import { useEffect, useRef } from "react";

const Focus = () => {
  const inputElemRef = useRef();

  useEffect(() => {
    inputElemRef.current.focus();
    inputElemRef.current.style.backgroundColor = "pink"
  }, []);
  return <input type="text" ref={inputElemRef} />;
};

export default Focus;
