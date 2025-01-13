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

export default React.memo(Child);
