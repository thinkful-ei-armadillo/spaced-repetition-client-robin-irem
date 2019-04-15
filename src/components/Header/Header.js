import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'
import logo from '../../Images/logo.jpg';

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div className='logout-container'>
        <span>
          {this.context.user.name}
        </span>
        <nav className='navlinks'>
          <Link
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to='/login' className='navlinks'>Login </Link>
        {' '}
        <Link to='/register'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <div>
        <img src={logo} className='logo' alt='logo of the site' />
        <h1 className='brand'>
          <Link to='/'>
            Spaced repetition
          </Link>
        </h1>
        </div>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      
      </header>
    );
  }
}

export default Header
