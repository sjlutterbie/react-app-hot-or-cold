import React from 'react';
import './GuessFeedback.css';

export default function GuessFeedback(props) {
  // Props received
  //  guess: Number (last element of guessListArray)
  //  secretNumber: number
  //  hotRange: number
  //  hotFeedback: string
  //  coldFeedback: string
  //  winFeedback: string
  //  onWin: callback function
  
  // Extract vars from props, for convenience
  //  Note: Is there a more elegant way to do this?
  const guess = props.guess;
  const secretNumber = props.secretNumber;
  const hotRange = props.hotRange;
  const hotFeedback = props.hotFeedback;
  const coldFeedback = props.coldFeedback;
  const winFeedback = props.winFeedback;
  const submitVisible = props.submitVisible;

  // Initiate feedback
  let feedback;
  
    // Has a guess been made?
    if (guess) {
      // Is guess within hotRange?
      ((guess >= secretNumber - hotRange) && (guess <= secretNumber + hotRange)) ?
        feedback = hotFeedback : feedback = coldFeedback;
        
      // Is guess correct?
      if(guess == secretNumber) {
        feedback = winFeedback;
        
        if(submitVisible) {
          props.onWin(guess);
        }
      }
        
    } else {
      feedback = 'Ready for your guess...';
    }
  
    return(
      <div className="game-feedback">
        <p>{feedback}</p>
      </div>
      
    );

}