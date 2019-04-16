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
      head: '',
    }
  }
  setDashboard = (language, words) => {
    this.setState({language, words})
  }

  setNextWord = (head) => {
    console.log(head)
    this.setState({head})
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      head: this.state.head,
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