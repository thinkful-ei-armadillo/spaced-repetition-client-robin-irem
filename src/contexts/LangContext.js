import React, {Component} from 'react';

const LangContext =  React.createContext({
  language: {},
  words: [],
  nextWord: '',
  wordCorrectCount: 0, 
  wordIncorrectCount: 0,
  totalScore: 0,
  setDashboard: () => {},
  setNextWord: () => {}
})

export default LangContext;

export class LangProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      language: {},
      words: [],
      nextWord: '',
      wordCorrectCount: 0, 
      wordIncorrectCount: 0,
      totalScore: 0
    }
  }
  setDashboard = (language, words) => {
    this.setState({language, words})
  }
  setNextWord = (res) => {
    this.setState({
      nextWord: res.nextWord,
      wordCorrectCount: res.wordCorrectCount,
      wordIncorrectCount: res.wordIncorrectCount,
      totalScore: res.totalScore
    });
  }
  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      nextWord: this.state.nextWord,
      wordCorrectCount: this.state.wordCorrectCount, 
      wordIncorrectCount: this.state.wordIncorrectCount,
      totalScore: this.state.totalScore,
      setDashboard: this.setDashboard,
      setNextWord: this.setNextWord
    }

    return (
        <LangContext.Provider value={value}>
          {this.props.children}
        </LangContext.Provider>
    )
  }
}