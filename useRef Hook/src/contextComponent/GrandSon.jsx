import { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

const GrandSon = () => {
  const secret = useContext(FamilyContext);
  return (
    <div className="gson border-2 border-blue-500 bg-gray-500 p-3 rounded-md shadow-sm mb-3">
      <h3 className="text-lg font-medium text-blue-300">{`GrandSon ${secret.familyName}`}</h3>
      <p>{secret.onlyGrandChildrenShouldKnow()}</p>
    </div>
  );
};

export default GrandSon;
