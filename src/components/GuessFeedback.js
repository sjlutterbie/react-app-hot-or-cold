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
  
  // Extract vars from props, for convenience
  //  Note: Is there a more elegant way to do this?
  const guess = props.guess;
  const secretNumber = props.secretNumber;
  const hotRange = props.hotRange;
  const hotFeedback = props.hotFeedback;
  const coldFeedback = props.coldFeedback;
  const winFeedback = props.winFeedback;
  
  // Initiate feedback
  let feedback;
  
  // Has a guess been made?
  if (guess) {
    // Is guess within hotRange?
    ((guess >= secretNumber - hotRange) && (guess <= secretNumber + hotRange)) ?
      feedback = hotFeedback : feedback = coldFeedback;
      
    // Is guess correct?
    if(guess == secretNumber) {
      console.log('Win!');
      feedback = winFeedback;
    }
      
  } else {
    feedback = 'Ready for your guess...';
  }

  return(
    <div className="game-feedback">
      <p>{feedback}</p>
      
      <p>Dev Feedback:</p>
      <ul>
        <li>Guess: {guess}</li>
        <li>Target: {secretNumber}</li>
        <li>hotRange: {hotRange}</li>
        <li>Distance: {Math.abs(guess - secretNumber)}</li>
      </ul>
    </div>
    
  );
  
  
  
  
}