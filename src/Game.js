import React, { Component } from 'react';
import './Game.css';

import GameForm from './components/GameForm';

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
      // Set the game range to avoid hard-coding.
      minGuess: 1,
      maxGuess: 100,
      // Set the hot/cold feedback to avoid hard-coding.
      hotFeedback: "Hot!",
      coldFeedback: "Cold..."
    };
  }
  
  submitGuess(guess) {

    this.setState({
        guessList: [...this.state.guessList, guess]
      }
    );
    
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
          <GameForm minGuess={this.state.minGuess} maxGuess={this.state.maxGuess}
            submitAction={guess => this.submitGuess(guess)}/>
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
