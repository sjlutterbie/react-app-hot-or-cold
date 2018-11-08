import React from 'react';
import './GuessCount.css';

export default function GuessCount(props) {
  // Props received:
  //  guessCount: number
  
  return (
    <div className="guess-count">
      <p> {props.guessCount} guesses, so far...</p>
    </div>
  );

}