import React, { Component } from 'react';
import LanguageApiService from '../../services/lang-api-service';
import LangContext from '../../contexts/LangContext';
import Button from '../../components/Button/Button';
import {Link} from 'react-router-dom'
import './DashboardRoute.css'

class DashboardRoute extends Component {
  static contextType = LangContext;

  componentDidMount(){
    LanguageApiService.getAllWords()
      .then(res => {
        const {language, words} = res;
        this.context.setDashboard(language, words)
      })
  }

  render() {
    const {language, words = []} = this.context;
    return (
      <section>
        <div className='summary'>
          <h2>{language.name}</h2>
          <h2 className='correct'>Total correct answers: {language.total_score}</h2>
        </div>
          <h3>Words to practice</h3>
          <div className="list-container">
          <ul>
            {words.map((word, index) => (
              <li key={index}>
                <h4>{word.original}</h4>
                <p>correct answer count: {word.correct_count}</p>
                <p>incorrect answer count: {word.incorrect_count}</p>
              </li>
            ))}
          </ul>
         </div>
         <Link to='/learn'>
          <Button className={'start'}>Start practicing</Button>
         </Link>
      </section>
    );
  }
}

export default DashboardRoute
