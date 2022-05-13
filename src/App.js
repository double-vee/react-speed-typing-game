import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(5);

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

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    }
  }, [timeRemaining]);

  return (
    <div className="container">
      <h1>How fast do you type?</h1>
      <textarea name="text" value={text} onChange={handleChange} />
      <h4>Remaining time: {timeRemaining}</h4>
      <button>Start</button>
      <h1>Word count: </h1>
    </div>
  );
}

export default App;
