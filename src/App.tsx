import { SyntheticEvent, useState } from 'react';

function App() {
  const [textarea, setTextarea] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setTextarea(event.target.value);
  }

  return (
    <div className="App">
      <input value={textarea} onChange={handleChange}></input>
    </div>
  );
}

export default App;
