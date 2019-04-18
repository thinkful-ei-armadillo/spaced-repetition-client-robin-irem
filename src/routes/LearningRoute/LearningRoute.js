import React, { Component } from 'react'
import LangContext from '../../contexts/LangContext';
import LanguageApiService from '../../services/lang-api-service'

class LearningRoute extends Component {
  static contextType = LangContext
  constructor(props){
    super()
    this.translateInput = React.createRef();
  }
  componentDidMount(){
    LanguageApiService.getWord().then(res => this.context.setNextWord(res))
  }

  handleSubmit= e =>{
    e.preventDefault()
    const translateValue = this.translateInput.current.value;
    LanguageApiService.submitUserAnwer(translateValue)
      .then(res => console.log(res))
  }
  render() {
    
  const { nextWord, wordCorrectCount, wordIncorrectCount, totalScore } = this.context
    return (
      <section>
        <h2>Translate the word: {nextWord}</h2>
        <p>Your total score is: {totalScore}</p>
        <p>"You have answered this word correctly {wordCorrectCount} times." </p>
        <p>"You have answered this word incorrectly {wordIncorrectCount} times."</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
          <input type='text' required name='learn-guess-input' ref={this.translateInput} placeholder='Whats the translation for this word?'/>
          <input type='submit' name='submit' value='Submit your answer'/>
         </form>
      </section>
//DisplayScore p
      //total score , h2 `Good try, but not quite right :(`,
      // .DisplayFeedback p'`The correct translation for ${languageHeadFixture.nextWord} was ${incorrectFixture.answer} and you chose ${guess}!`
    // 'have.text',
   // `Try another word!`,
//button

   //corect
    //h2 `You were correct! :D`,
   // .DisplayScore p `Your total score is: ${incorrectFixture.totalScore}`,
    // DisplayFeedback p `The correct translation for ${languageHeadFixture.nextWord} was ${incorrectFixture.answer} and you chose ${guess}!`

      );
  }
}

export default LearningRoute
