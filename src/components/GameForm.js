import React from 'react';
import './GameForm.css';

export default function GameForm(props) {

  function onSubmit(event) {
    event.preventDefault();
  

    const guess = event.target.elements.guess.value;
    
    // Execute callback
    props.submitAction(guess);

    // Reset form
    event.target.elements.guess.value = '';

  }

    return (
   
      <form className="game-form" onSubmit={(e) => onSubmit(e)}>
          {props.submitVisible && 
            <div className="form-elements">
              <input type="number"
                     min={props.minGuess}
                     max={props.maxGuess}
                     name="guess"
                     required />
              <input type="submit" value="Guess!"/>
            </div>
          }
      </form>
    
    );    

}
