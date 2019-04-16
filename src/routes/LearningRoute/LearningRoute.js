import React, { Component } from 'react'

class LearningRoute extends Component {
  render() {
    return (
      <section>
        <h2>Translate the word: English version</h2>
        <p>Your total score is: X</p>
        <p>"You have answered this word correctly X times." </p>
        <p>"You have answered this word incorrectly X times."</p>
        <form>
          <label for='learn-guess-input'>What's the translation for this word?</label>
          <input type='text' required name='learn-guess-input' placeholder='Whats the translation for this word?'/>
          <input type='button' name='submit' value='Submit your answer'/>
         </form>
      </section>
    );
  }
}

export default LearningRoute
