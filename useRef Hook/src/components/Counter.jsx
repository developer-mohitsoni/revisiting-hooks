import { useState, useRef, useEffect } from "react";

const Counter = () => {
  const countRef = useRef(0); // Value re-render ke bina persist rahegi
  // const [searchTerm, setSearchTerm] = useState("");

  const increment = () => {
    countRef.current += 1; // Value update ho rahi hai, but re-render nahi hoga
    console.log("Current count:", countRef.current);
  };
  // useEffect(() => {
  //   countRef.current = countRef.current + 1;
  //   console.log("Incrementing counter");
  // });
  return (
    <>
      {/* <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-black"  
      /> */}
      {/* {countRef.current} */}
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;
