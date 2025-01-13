import Family from "./contextComponent/Family";
import {FamilyContext} from "./context/FamilyContext";
import { familySecret } from "./utils/familySecret.js";
const App = () => {
  return (
    <FamilyContext.Provider value={familySecret}>
      <div className="App min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <Family />
      </div>
    </FamilyContext.Provider>
  );
};

export default App;
