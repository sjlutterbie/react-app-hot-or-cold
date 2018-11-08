import React from 'react';
import './GuessList.css';

export default function GuessList(props) {
  // Props received:
  //  guessList: array
  
  const list = props.guessList.map((guess, index) => {
    
    return(
      <li key={index}>{guess}</li>
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