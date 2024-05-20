import Dictionary from "./Dictionary"
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
        <main className='header'>
          <Dictionary />
        </main>
        <footer className='text-center'>Coded by Nicole Farinello, this project is <a href="https://github.com/nfarinello/react-dictionary">Open-Sourced</a>.</footer>
    </div>
  </div>
  );
}
