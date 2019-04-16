import React, { Component } from 'react'
import LanguageApiService from '../../services/lang-api-service';
import LangContext from '../../contexts/LangContext';
import Button from '../../components/Button/Button';

class LearningRoute extends Component {
  static contextType = LangContext;

  componentDidMount(){
    
    LanguageApiService.getHeadWord()
      .then(res => {
        this.context.setNextWord(res);
      })
  }
  render() {
    const { head } = this.context;
    return (
      <section>
        <h2>Translate the word: {head.nextWord}</h2>
        <p>Your total score is: {head.totalScore}</p>
        <p>You have answered this word correctly {head.wordCorrectCount} times. </p>
        <p>You have answered this word incorrectly {head.wordIncorrectCount} times.</p>
        <form>
          <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
          <input type='text' required name='learn-guess-input' placeholder={`type the translation of ${head.nextWord} in English`}/>
          <input type='button' name='submit' value='Submit your answer'/>
         </form>
      </section>
    );
  }
}

export default LearningRoute
