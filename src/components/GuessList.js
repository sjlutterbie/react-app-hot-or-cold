import React from 'react';
import './GuessList.css';

export default function GuessList(props) {
  // Props received:
  //  guessList: array
  //  guessListClass: array
  
  const list = props.guessList.map((guess, index) => {
    
    return(
      <li className={props.guessListClass[index]} key={index}>{guess}</li>
    );
    
  });
  
  return(
    <div className="guess-list">
      <ul>
        {list}
      </ul>
    </div>
  );
  
}