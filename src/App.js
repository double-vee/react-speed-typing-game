import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [start, setStart] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const calculateWordCount = () => {
    const textToArray = text.split(" ");
    const wordsArray = textToArray.filter((word) => {
      const re = /[a-zA-Z]+/;
      return re.exec(word);
    });
    return wordsArray.length;
  };

  const startGame = () => {
    setStart(true);
    setTimeRemaining(5);
    setText("");
  };

  const endGame = () => {
    setStart(false);
    setWordCount(calculateWordCount());
  };

  useEffect(() => {
    if (start && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    }

    if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, start]);

  return (
    <div className="container">
      <h1>How fast do you type?</h1>
      <textarea name="text" value={text} onChange={handleChange} />
      <h4>Remaining time: {timeRemaining}</h4>
      <button onClick={startGame}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
