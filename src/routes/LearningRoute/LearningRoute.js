import React, { Component } from 'react'
import LangContext from '../../contexts/LangContext';
import LanguageApiService from '../../services/lang-api-service'

class LearningRoute extends Component {
  static contextType = LangContext
  constructor(props){
    super()
    this.translateInput = React.createRef();
    this.state = {
      showResults:false,
      results: []
    }
  }
  componentDidMount(){
    LanguageApiService.getWord().then(res => this.context.setNextWord(res))
  }

  handleSubmit= e =>{
    e.preventDefault()
    const translateValue = this.translateInput.current.value;
    LanguageApiService.submitUserAnwer(translateValue)
      .then(res => {
        console.log(res)
        this.setState({results: res})
        this.setState({showResults: true})
      })
  }

  renderResults (){
return(
    <section>
        {if (res.isCorrect){
              return (
                <h2>You were correct! :D</h2>  
              )}
          else{
              return(
                  <h2>Good try, but not quite right :( </h2>
                    )}
        }
        <p>Your total score is: {res.totalScore}</p>
        <pThe correct translation for ${nextWord} was ${nextWord.answer} and you chose ${guess}!>
        <button>Try another word!</button>
      </section>
      )
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
         {this.state.showResults && this.renderResults}
      </section>   
      );
  }
}

export default LearningRoute
