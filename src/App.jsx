import { useState, useEffect } from 'react';
import Card from './Card.jsx';
import gifs from './gifs.js';
import './styles/App.css';

function App() {
  const [shuffledGifs, setShuffledGifs] = useState([...gifs]);
  const [clickedGifs, setClickedGifs] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const shuffle = () => {
    setShuffledGifs((gifs) => [...gifs].sort(() => Math.random() - 0.5));
  };

  const reset = () => {
    setCurrentScore(0);
    setClickedGifs([]);
    setGameOver(false);
    shuffle();
  };

  const handleGifClick = (gifId) => {
    if (clickedGifs.includes(gifId)) {
      // lost
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setGameOver(true);
    } else {
      setClickedGifs((gifs) => [...clickedGifs, gifId]);
      setCurrentScore(currentScore + 1);
      shuffle();
    }
  };

  const handleLevelChange = (level) => {
    switch (level) {
      case 'easy':
        setShuffledGifs(gifs.slice(0, 8));
        break;
      case 'medium':
        setShuffledGifs(gifs.slice(0, 12));
        break;
      default:
        setShuffledGifs([...gifs]);
    }
    reset();
    setHighScore(0);
  };

  useEffect(() => {
    if (currentScore === shuffledGifs.length) {
      // won
      setHighScore(currentScore);
      setGameOver(true);
    }
    return () => {
      setGameOver(false);
    };
  }, [currentScore]);

  return (
    <div className="body">
      <header>
        <div className="title">
          <h1>Memory Card Game</h1>
          <p>Click on every card. Don't click on the same card twice!</p>
        </div>
        <div className="levels">
          <button
            className={shuffledGifs.length === 8 && 'depressed'}
            onClick={() => handleLevelChange('easy')}
          >
            Easy
          </button>
          <button
            className={shuffledGifs.length === 12 && 'depressed'}
            onClick={() => handleLevelChange('medium')}
          >
            Medium
          </button>
          <button
            className={shuffledGifs.length === gifs.length && 'depressed'}
            onClick={() => handleLevelChange('hard')}
          >
            Hard
          </button>
        </div>
        <div className="scoreboard">
          <div className="high-score">High Score: {highScore}</div>
          <div className="score">{currentScore}</div>
        </div>
      </header>
      <main>
        <section
          className="gifs"
          style={{ display: gameOver ? 'none' : 'flex' }}
        >
          {shuffledGifs.map((gif) => (
            <Card
              key={gif.id}
              src={gif.src}
              handleClick={() => handleGifClick(gif.id)}
            />
          ))}
        </section>
        <section
          className="game-over"
          style={{ display: gameOver ? 'flex' : 'none' }}
        >
          <div className="result">
            {currentScore === shuffledGifs.length ? 'You win!' : 'You lose!'}
          </div>
          <button className="play-again" onClick={reset}>
            Play Again
          </button>
        </section>
      </main>
      <footer>
        &copy; 2024&ensp;
        <a href="https://github.com/hannliao/memory-card">Hannah Liao</a>. All
        rights reserved.
      </footer>
    </div>
  );
}

export default App;
