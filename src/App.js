import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="wine" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/olesia-artibiakina-00030ab9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Olesia Artibiakina{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Olesia-Art/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://resplendent-creponne-dee3d2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
