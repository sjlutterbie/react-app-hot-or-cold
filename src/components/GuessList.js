'use strict';

import React from 'react';
import './GuessList.css';

export default function GuessList(props) {
  // Props received:
  //  guessList: array
  
  const list = [];
  
  props.guessList.forEach(guess => {
    
    list.push(<li>{guess}</li>);
    
  });
  
  return(
    <div className="guess-list">
      <ul>
        {list}
      </ul>
    </div>
  );
  
}