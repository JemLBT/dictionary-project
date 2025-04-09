import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>DICTIONARY</h1>
        <h2>a resource that lists the words of a language</h2>

        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;
