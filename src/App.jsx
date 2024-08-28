import { useState } from 'react';
import Card from './Card.jsx';
import gifs from './gifs.js';
import './styles/App.css';

function App() {
  function randomPlacement() {
    const randomNum = Math.floor(Math.random() * 16);
  }

  return (
    <>
      <header>
        <h1>Memory Card Game</h1>
        <p>Click on every card. Don't click on the same card twice!</p>
      </header>
      <main>
        <section className="scoreboard">
          <div className="score">Score: </div>
          <div className="high-score">High Score: </div>
        </section>
        <section className="gifs">
          {gifs.map((gif) => (
            <Card key={gif.id} src={gif.src} />
          ))}
        </section>
      </main>
      <footer>&copy; 2024 Hannah Liao. All rights reserved.</footer>
    </>
  );
}

export default App;
