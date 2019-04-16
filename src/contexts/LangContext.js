import React, {Component} from 'react';

const LangContext =  React.createContext({
  language: {},
  words: [],
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
      nextWord: ''
    }
  }
  setDashboard = (language, words) => {
    this.setState({language, words})
  }

  setNextWord = (nextWord) => {
    this.setState({nextWord})
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      nextWord: this.state.nextWord,
      setDashboard: this.setDashboard,
      setNextWord: this.setNextWord
    }
    console.log(this.state)
    return (
        <LangContext.Provider value={value}>
          {this.props.children}
        </LangContext.Provider>
    )
  }
}