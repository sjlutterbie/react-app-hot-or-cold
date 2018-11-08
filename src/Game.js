import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
  // Game component owns the primary state, which it passses to the
  //  sub-components as props
  
  constructor(props) {
    super(props);
    this.state = {
      // Target number is set when the game is loaded
      secretNumber: Math.floor(Math.random() * 100)+ 1,
      // Guess list is added to with each form submit
      guessList: [],
      // How close must a guess be to earn "Hot" feedback?
      hotRange: 10,
      // Set the hot/cold feedback to avoid hard-coding.
      hotFeedback: "Hot!",
      coldFeedback: "Cold..."
    };
  }

  // DEV NOTE:
  //  While building the game-form, guess-count is set to render assorted dev
  //    feedback, rather than the guess count. This will be updated as the
  //    work progresses, and wille eventually be converted to a component,
  //    itself.

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
            <p>guessList: {this.state.guessList}</p>
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
