import Parent from "./Parent";
const Family = () => {
  return (
    <div className="family flex flex-col items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
      <Parent />
    </div>
  );
};

export default Family;
