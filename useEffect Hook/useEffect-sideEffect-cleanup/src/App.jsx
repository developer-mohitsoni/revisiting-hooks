import { Link } from "react-router-dom";
import Greetings from "./components/Greeting";

const App = () => {
  return (
    <div className="App flex items-center justify-center h-screen bg-gray-100">
      <Greetings randomMax={8} />
      <div className="about-page bg-gray-200 p-5 rounded-lg text-center mt-5 cursor-pointer">
        <Link to={"/about"}>
          <div>Go to About Page</div>
        </Link>
      </div>
    </div>
  );
};

export default App;
