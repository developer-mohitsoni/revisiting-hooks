import { useEffect, useState } from "react";

const Greetings = ({ randomMax }) => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * randomMax) + 1
  );

  const [greetings, setGreetings] = useState("");

  //! Example:- 5

  useEffect(() => {
    console.log("Greeting.js: useEffect()");
  }, []); // Run only first render

  useEffect(() => {
    // Storing the random number in localstorage using useEffect Hook
    window.localStorage.setItem("random", randomNumber);

    if (randomMax === randomNumber) {
      window.localStorage.setItem("jackpot", true);
    } else {
      window.localStorage.setItem("jackpot", false);
    }
    switch (randomNumber) {
      case 1:
        setGreetings("Hello");
        break;
      case 2:
        setGreetings("Howdy");
        break;
      case 3:
        setGreetings("Hi");
        break;
      case 4:
        setGreetings("Hey");
        break;
      case 5:
        setGreetings("Yo");
        break;
      default:
        setGreetings("Salutations");
        break;
    }
  }, [randomNumber, randomMax]);
  return (
    <div className="greeting">
      <h1 className="font-bold text-3xl">Random Greeting</h1>
      <h2 className="message font-bold text-5xl bg-yellow-400 px-24 mt-5 py-24">
        {" "}
        {greetings}
      </h2>
    </div>
  );
};

export default Greetings;
