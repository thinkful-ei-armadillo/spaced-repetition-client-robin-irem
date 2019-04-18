import React, {Component} from 'react';

const LangContext =  React.createContext({
  language: {},
  words: [],
<<<<<<< HEAD
  nextWord: '',
  wordCorrectCount: 0, 
  wordIncorrectCount: 0,
  totalScore: 0,
=======
>>>>>>> f86f4931cc2d981ffd5d8a243241a6f7e2e2ffcb
  setDashboard: () => {},
  setNextWord: () => {}
})

export default LangContext;

export class LangProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      language: {},
<<<<<<< HEAD
      words: [],
      nextWord: '',
      wordCorrectCount: 0, 
      wordIncorrectCount: 0,
      totalScore: 0
=======
      words: [], 
      head: '',
>>>>>>> f86f4931cc2d981ffd5d8a243241a6f7e2e2ffcb
    }
  }
  setDashboard = (language, words) => {
    this.setState({language, words})
  }
<<<<<<< HEAD
  setNextWord = (res) => {
    this.setState({
      nextWord: res.nextWord,
      wordCorrectCount: res.wordCorrectCount,
      wordIncorrectCount: res.wordIncorrectCount,
      totalScore: res.totalScore
    });
  }
=======

  setNextWord = (head) => {
    console.log(head)
    this.setState({head})
  }

>>>>>>> f86f4931cc2d981ffd5d8a243241a6f7e2e2ffcb
  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
<<<<<<< HEAD
      nextWord: this.state.nextWord,
      wordCorrectCount: this.state.wordCorrectCount, 
      wordIncorrectCount: this.state.wordIncorrectCount,
      totalScore: this.state.totalScore,
      setDashboard: this.setDashboard,
      setNextWord: this.setNextWord
    }

=======
      head: this.state.head,
      setDashboard: this.setDashboard,
      setNextWord: this.setNextWord
    }
>>>>>>> f86f4931cc2d981ffd5d8a243241a6f7e2e2ffcb
    return (
        <LangContext.Provider value={value}>
          {this.props.children}
        </LangContext.Provider>
    )
  }
}