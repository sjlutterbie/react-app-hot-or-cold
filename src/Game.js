import React from 'react';
import './Game.css';

import GameForm from './components/GameForm';
import GuessCount from './components/GuessCount';
import GuessList from './components/GuessList';
import GuessFeedback from './components/GuessFeedback';

class Game extends React.Component {
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
      coldFeedback: "Cold...",
      winFeedback: "Correct! You win!",
      submitVisible: true
    };
  }
  
  submitGuess(guess) {

    this.setState({
        guessList: [...this.state.guessList, guess]
      }
    );
    
  }
  
  onWin(guess) {
    this.setState({
      submitVisible: false
    });
  }
  
  onNewGame() {

    // Reset state elements necessary to create new game
    this.setState({
      secretNumber: Math.floor(Math.random() * 100)+ 1,
      guessList: [],
      submitVisible: true
    });
    
  }
  
  render() {
    return (
      <main>
        <h1>Hot or cold?</h1>
        <div className="Game">
        
          <GuessFeedback guess={this.state.guessList[
                           this.state.guessList.length-1]}
                         secretNumber = {this.state.secretNumber}
                         hotRange = {this.state.hotRange}
                         hotFeedback = {this.state.hotFeedback}
                         coldFeedback = {this.state.coldFeedback}
                         winFeedback = {this.state.winFeedback}
                         onWin = {guess => this.onWin(guess)}
                         submitVisible = {this.state.submitVisible}/>
          <GameForm minGuess={this.state.minGuess}
                    maxGuess={this.state.maxGuess}
                    submitAction={guess => this.submitGuess(guess)}
                    submitVisible = {this.state.submitVisible}/>

          <GuessCount guessCount={this.state.guessList.length}/>
          
          <GuessList guessList={this.state.guessList}/>

        </div>
        
        <button className="new-game"
                onClick={() => this.onNewGame()}>New Game</button>
        
      </main>
    );
  }
}

export default Game;
