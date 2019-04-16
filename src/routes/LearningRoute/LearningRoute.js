import React, { Component } from 'react'
import LanguageApiService from '../../services/lang-api-service';
import LangContext from '../../contexts/LangContext';
import Button from '../../components/Button/Button';

class LearningRoute extends Component {
  static contextType = LangContext;

  componentDidMount(){
    
    LanguageApiService.getHeadWord()
      .then(res => {
        const { nextWord, totalScore, wordCorrectCount, wordIncorrectCount } = res;
        console.log(totalScore);
        this.context.setNextWord(nextWord);
      })
  }
  render() {
    const { nextWord } = this.context;
    console.log(nextWord)
    return (
      <section>
        <h2>Translate the word: {nextWord} into English</h2>
        <p>Your total score is: {nextWord.totalScore}</p>
        <p>"You have answered this word correctly {nextWord.wordCorrectCount} times." </p>
        <p>"You have answered this word incorrectly {nextWord.wordIncorrectCount} times."</p>
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
