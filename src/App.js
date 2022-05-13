import { useEffect, useState, useRef } from "react";

function App() {
  const STARTING_TIME = 10;

  const textAreaRef = useRef(null);

  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
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
    setTimeRemaining(STARTING_TIME);
    setText("");
    setWordCount(0);
    textAreaRef.current.focus();
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
      <textarea
        name="text"
        value={text}
        onChange={handleChange}
        ref={textAreaRef}
      />
      <h4>Remaining time: {timeRemaining}</h4>
      <button onClick={startGame} disabled={start}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
