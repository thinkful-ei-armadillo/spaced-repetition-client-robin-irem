import React, { Component } from 'react'
import LangContext from '../../contexts/LangContext';
import LanguageApiService from '../../services/lang-api-service';
import Button from '../../components/Button/Button';
import {Label, Input} from '../../components/Form/Form'
import './LearningRoute.css'

class LearningRoute extends Component {
  static contextType = LangContext
  constructor(){
    super()
    this.translateInput = React.createRef();
    this.state = {
      showResults:false,
      totalScore: '',
      results: {},
      isCorrect: null,
      guess: '',
      note: 'hello'
    }
  }

  componentDidMount () {
    LanguageApiService.getWord().then(res => this.context.setNextWord(res))
  }

  handleSubmit = e =>{
    e.preventDefault()
    const guess = this.translateInput.current.value;
    this.setState({guess})
    LanguageApiService.submitUserAnwer(guess)
      .then(res => {
        this.setState({results: res, showResults: true})
      })
    this.formRef.reset();
  }

  handleNextWord = results => {
    this.context.setNextWord(results)
    this.setState({showResults: false})
  }

  renderQuestion () {
    const { nextWord, wordCorrectCount, wordIncorrectCount, totalScore } = this.context
    return (
      <section className='results_container col-6'>
        <h2 className='translate-text'>Translate the word:</h2> <span className="translate-word">{nextWord}</span>
        <p>Your total score is: {totalScore}</p>
        <p>You have answered this word correctly {wordCorrectCount} times.</p>
        <p>You have answered this word incorrectly {wordIncorrectCount} times.</p>
        <form onSubmit={this.handleSubmit} ref={(ref) => this.formRef = ref}>
          <Label htmlFor='learn-guess-input'>
            What's the translation for this word?
          </Label>
          <Input  id='learn-guess-input'
            name='learn-guess-input'
            type='text'
            ref={this.translateInput} 
            placeholder='Whats the translation for this word?'
            required
          />
          <Button type='submit'>
            Submit your answer
          </Button>
         </form>
      </section>
    )
  }

  renderResults () {
    const { isCorrect, answer, totalScore} = this.state.results
    return(
      <React.Fragment>
        <section className='DisplayScore col-6'>
          {isCorrect ? <h2>You were correct! :D</h2>  :  <h2>Good try, but not quite right :(</h2>}
            <br/>
            <p>Your total score is: {totalScore}</p> 
        </section>
        <section className='DisplayFeedback col-6'>
          <p>The correct translation for {this.context.nextWord} was {answer} and you chose {this.state.guess}!</p>
          <Button onClick={()=>this.handleNextWord(this.state.results)}>
            Try another word!
          </Button>
        </section>
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.state.showResults ? this.renderResults() : this.renderQuestion()}
      </React.Fragment> 
    )
  }
}

export default LearningRoute
