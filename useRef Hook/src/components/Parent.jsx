import React from "react";
import Children from "./Children";

const Parent = ({ secret }) => {
  return (
    <div className="parent border-4 border-gray-700 bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-lg">
      <h1 className="font-bold text-2xl text-white text-center mb-4">{`Parent ${secret.familyName}`}</h1>
      <p>{secret.onlyParentCanSee()}</p>
      <Children secret={secret} />
    </div>
  );
};

export default Parent;
