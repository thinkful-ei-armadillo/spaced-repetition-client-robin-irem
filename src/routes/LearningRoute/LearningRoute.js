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
      totalScore: '',
      results: [],
      isCorrect: false,
      guess: ''
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
        // this.setState({results: res})
        // this.setState({showResults: true})

// answer: "welcome"
// isCorrect: false
// nextWord: "hola"
// totalScore: 0
// wordCorrectCount: 0
// wordIncorrectCount: 1
      })
  }

  renderResults (){
return(
    <section>
      {this.state.isCorrect ?<h2>You were correct! :D</h2>  :  <h2>Good try, but not quite right :( </h2>}
        <p>Your total score is: {this.state.totalScore}</p>
        <p>The correct translation for ${this.context.nextWord} was ${this.state.answer} and you chose ${this.state.guess}!</p>
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
