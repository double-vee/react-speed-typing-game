import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <h1>How fast do you type?</h1>
      <textarea name="text" value={text} onChange={handleChange} />
      <h4>Remaining time: </h4>
      <button>Start</button>
      <h1>Word count: </h1>
    </div>
  );
}

export default App;
