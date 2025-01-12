import GrandDaughter from "./GrandDaughter";
import GrandSon from "./GrandSon";

const Children = () => {
  return (
    <div className="children border-2 border-orange-500 bg-gray-600 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-orange-300 mb-4">Children</h2>
      <GrandSon />
      <GrandDaughter />
    </div>
  );
};

export default Children;
