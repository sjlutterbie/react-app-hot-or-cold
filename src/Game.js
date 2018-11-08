import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
  render() {
    return (
      <main>
        <h1>Hot or cold?</h1>
        <div className="Game">
          <div className="feedback-area">
            <p>[Guess a number! | Hot | Cold ]</p>
          </div>
          <form className="game-form">
            <input type="number" min="1" max="100" required/>
            <input type="submit" value="Guess!"/>
          </form>
          <div className="guess-count">
            <p>5</p>
          </div>
          <div className="guess-list">
            <ul>
              <li>43</li>
              <li>1</li>
              <li>65</li>
              <li>92</li>
              <li>34</li>
            </ul>
          </div>
        </div>
        
        <button className="new-game">New Game</button>
        
      </main>
    );
  }
}

export default Game;
