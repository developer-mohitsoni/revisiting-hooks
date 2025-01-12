import Family from "./components/Family";
import { familySecret } from "./utils/familySecret";

const App = () => {
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <Family secret={familySecret} />
    </div>
  );
};

export default App;
