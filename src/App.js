import { useMemo, useState } from 'react';
import './App.css';

function App() {
  let dictionary = useMemo(() => {
    return [
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
      { word: "Component", meaning: "A reusable building block in React." },
      { word: "State", meaning: "An object that stores data for a component." }
    ];

  }, []);

  const [input, setInput] = useState("");
  const [defination, setDefination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let ok = false;
    for (let i = 0; i < dictionary.length; i++) {
      if (input.toLowerCase() === dictionary[i].word.toLowerCase()) {
        setDefination(dictionary[i].meaning);
        ok = true;
        break;
      }
    }

    if (!ok) {
      setDefination("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h2>Dictionary App</h2>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} required type="text" placeholder="Search for a word..." />
        <button type="submit">Search</button>
      </form>
      <h3>Definition:</h3>
      <p>{defination}</p>
    </div>
  )
}

export default App;
