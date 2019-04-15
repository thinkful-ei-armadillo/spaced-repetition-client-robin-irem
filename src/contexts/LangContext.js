import React, {Component} from 'react';

const LangContext =  React.createContext({
  language: {},
  words: [],
  setDashboard: () => {}
})

export default LangContext;

export class LangProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      language: {},
      words: []
    }
  }
  setDashboard = (language, words) => {
    this.setState({language, words})
  }
  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      setDashboard: this.setDashboard
    }
    console.log(this.state)
    return (
        <LangContext.Provider value={value}>
          {this.props.children}
        </LangContext.Provider>
    )
  }
}