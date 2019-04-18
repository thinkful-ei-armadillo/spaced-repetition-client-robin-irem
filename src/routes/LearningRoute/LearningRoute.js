import React, { Component } from 'react'
import LangContext from '../../contexts/LangContext';
import LanguageApiService from '../../services/lang-api-service'

class LearningRoute extends Component {
  static contextType = LangContext
  componentDidMount(){
    LanguageApiService.getWord().then(res => this.context.setNextWord(res))
  }
  render() {
    
  const { nextWord, wordCorrectCount, wordIncorrectCount, totalScore } = this.context
  console.log(nextWord)
    return (
      <section>
        <h2>Translate the word: {nextWord}</h2>
        <p>Your total score is: {totalScore}</p>
        <p>"You have answered this word correctly {wordCorrectCount} times." </p>
        <p>"You have answered this word incorrectly {wordIncorrectCount} times."</p>
        <form>
          <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
          <input type='text' required name='learn-guess-input' placeholder='Whats the translation for this word?'/>
          <input type='button' name='submit' value='Submit your answer'/>
         </form>
      </section>
    );
  }
}

export default LearningRoute
