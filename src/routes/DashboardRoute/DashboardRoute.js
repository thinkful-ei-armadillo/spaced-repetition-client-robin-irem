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
         <h2>Word To Practice</h2>
         <p>list with words and how many correct and incorrect for each?</p>
         <div className="list-container">
         
         {words.map((word,i) => (<p id={word.language_id} key={i}>{word.original}  {word.translation} {word.incorrect_count} {word.correct_count}</p>))}
         </div>
        <Button className={'start'}>Start Practicing</Button>
      </section>
    );
  }
}

export default DashboardRoute
