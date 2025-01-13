import { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

const GrandDaughter = () => {
  const secret = useContext(FamilyContext);
  return (
    <div className="gdaughter border-2 border-pink-500 bg-gray-500 p-3 rounded-md shadow-sm">
      <h3 className="text-lg font-medium text-pink-300">{`GrandDaughter ${secret.familyName}`}</h3>
      <p>{secret.onlyGrandChildrenShouldKnow()}</p>
    </div>
  );
};

export default GrandDaughter;
