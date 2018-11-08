import React from 'react';
import './GameForm.css';

export default class GameForm extends React.Component {
  constructor(props) {
    super(props);
    
  // Props received:
  //  minGuess: Number
  //  maxGuess: Number
  //  submitAction: function(val)
    
  }

  
  onSubmit(event) {
    event.preventDefault();
  
    const guess = this.guessInput.value;
    
    // Execute callback
    this.props.submitAction(guess);

    // Reset form
    this.guessInput.value ='';

  }
  
  render() {
  
    return (
   
      <form className="game-form" onSubmit={(e) => this.onSubmit(e)}>
          {this.props.submitVisible && 
            <div className="form-elements">
              <input type="number"
                     min={this.props.minGuess}
                     max={this.props.maxGuess}
                     ref={input => this.guessInput = input} required />
              <input type="submit" value="Guess!"/>
            </div>
          }
      </form>
    
    );    
  }
 
}
