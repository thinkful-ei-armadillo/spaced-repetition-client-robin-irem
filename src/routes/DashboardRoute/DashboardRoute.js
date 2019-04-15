import React, { Component } from 'react';
import LanguageApiService from '../../services/lang-api-service';
import LangContext from '../../contexts/LangContext';
import Button from '../../components/Button/Button';
import './DashboardRoute.css'

class DashboardRoute extends Component {
  static contextType = LangContext;

  componentDidMount(){
    
    LanguageApiService.getAllWords()
      .then(res => {
        const {language, words} = res;
        this.context.setDashboard(language, words)})
      .then(() => console.log(this.context.state))
  }
  render() {
    const {language, words = []} = this.context;
    return (
      <section>
        <h2>{language.name}</h2>
         <h2>Total Score: {language.total_score}</h2>
          <div className="list-container">
          <h2>Word To Practice</h2>
          <table>
            <tr className='word-list-info-row'>
              <td>Word</td>
              <td>Correct</td>
              <td>Incorrect</td>
            </tr>
          {words.map((word,i) => (
          <tr key={i}>
            <td id={word.language_id}>{word.original}</td>
            <td>{word.correct_count}</td>
            <td>{word.incorrect_count}</td>
          </tr>
          ))}
          </table>
         </div>
        <Button className={'start'}>Start Practicing</Button>
      </section>
    );
  }
}

export default DashboardRoute
