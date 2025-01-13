import PreviousValueTracker from "./components/PrevValue-Track";

const App = () => {
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <PreviousValueTracker />
    </div>
  );
};

export default App;
