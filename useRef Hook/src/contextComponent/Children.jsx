import { useContext } from "react";
import GrandDaughter from "./GrandDaughter";
import GrandSon from "./GrandSon";
import { FamilyContext } from "../context/FamilyContext";

const Children = () => {
  const secret = useContext(FamilyContext);

  console.log("secret", secret);
  return (
    <div className="children border-2 border-orange-500 bg-gray-600 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-orange-300 mb-4">{`Children ${secret.familyName}`}</h2>
      <GrandSon />
      <GrandDaughter />
    </div>
  );
};

export default Children;
