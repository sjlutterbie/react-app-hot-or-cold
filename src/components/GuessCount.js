import React from 'react';
import './GuessCount.css';

export default function GuessCount(props) {
  // Props received:
  //  guessCount: number
  //  guess: number
  //  secretNumber: number
  
  let feedback = `${props.guessCount} guesses, so far...`;
  
  if (Number(props.guess) === props.secretNumber) {
    feedback = `It took you ${props.guessCount} guesses!`;
  }
  
  
  return (
    <div className="guess-count">
      <p>{feedback}</p>
    </div>
  );

}