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
      // CSS classes for guessList
      guessListClass: [],
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
    
    // Set class for guessList display
    let guessClass;

    if(Math.abs(guess - this.state.secretNumber) <= this.state.hotRange) {
      guessClass = 'hot';
    } else {
      guessClass = 'cold';
    }
    
    if(Number(guess) === this.state.secretNumber) {
      guessClass = 'win';
    }
    
    this.setState({
        guessList: [...this.state.guessList, guess],
        guessListClass: [...this.state.guessListClass, guessClass]
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
        <div className="game">
        
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
          
          <GuessList guessList={this.state.guessList}
                     guessListClass = {this.state.guessListClass}/>

        </div>
        
        <button className="new-game"
                onClick={() => this.onNewGame()}>New Game</button>
        
      </main>
    );
  }
}

export default Game;
