import { useState } from "react";

const useGame = (wordSolution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]); 
  const [isCorrect, setIsCorrect] = useState(false);

  const formatUserGuess = () => {
    let solutionArray = [...wordSolution];
    const changeUserGuess = [...currentGuess].map((l) => ({
      key: l,
      color: "grey",
    }));

    // Finds any green letters
    changeUserGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        changeUserGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    // Finds any yellow letters
    changeUserGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        changeUserGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null; // Mark as used
      }
    });

    return changeUserGuess;
  };

  const addNewGuess = (changeUserGuess) => {
    if (currentGuess === wordSolution) {
      setIsCorrect(true);
    }

    setGuesses((previousGuesses) => {
      const newUserAttempts = [...previousGuesses];
      newUserAttempts[turn] = changeUserGuess;
      return newUserAttempts;
    });

    setHistory((prevHistory) => [...prevHistory, currentGuess]); 
    setTurn((prevTurn) => prevTurn + 1);
    setCurrentGuess('');
  };

  const handleKeyUp = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) {
        console.log("All guesses have been used");
        return;
      }

      if (history.includes(currentGuess)) {
        console.log("You have already guessed that word!");
        return;
      }

      if (currentGuess.length !== wordSolution.length) {
        console.log(`Word must be ${wordSolution.length} chars long`);
        return;
      }

      const formatted = formatUserGuess();
      addNewGuess(formatted);
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (/^[A-Za-z]$/.test(key) && currentGuess.length < wordSolution.length) {
      setCurrentGuess((prev) => prev + key);
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useGame;

