import { useState } from "react";
import "./App.css";
import List from "./components/list";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}> Clear All</button>
      </section>
    </main>
  );
}

export default App;
