import Dictionary from "./Dictionary"
import './App.css';
import logo from "./logo.png";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main className="header">
          <Dictionary defaultKeyword="book" />
        </main>
        <footer className="text-center">
          Coded by Nicole Farinello, this project is{" "}
          <a href="https://github.com/nfarinello/react-dictionary">Open-Sourced</a>.
        </footer>
      </div>
    </div>
  );
}
