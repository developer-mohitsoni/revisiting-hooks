import React from "react";

const Child = ({ header }) => {
  console.log("Child is rendering!!!");
  return (
    <div className="child border-[1px] border-solid border-[rgb(27,3,107)] p-3 m-3 shadow-child-custom-blue">
      <h1>{header}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam magni
        voluptas quo fugiat aliquam corrupti quisquam fuga mollitia aut illum
        fugit provident tenetur cumque, neque facilis esse? Delectus, natus
        laudantium!
      </p>
    </div>
  );
};

// This component will be memoized, meaning it will only re-render when the props change.
export default React.memo(Child);

// This is rendering if it's Parent component is change or rendered. This causes performance issue.
// export default Child;

