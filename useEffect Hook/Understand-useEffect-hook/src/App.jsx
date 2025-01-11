import Greetings from "./components/Greeting";

const App = () => {
  return (
    <div className="App flex items-center justify-center h-screen bg-gray-100">
      <Greetings randomMax={8} />
    </div>
  );
};

export default App;
