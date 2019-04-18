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
        <span className='navlinks'>
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
      <nav role="navigation">
        <Link to='/login' className='navlinks'>Login </Link>
        {' '}
        <Link to='/register'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header role="banner">
        <div id='header-left'>
        <img src={logo} className='logo' alt='logo of the site' />
        <h1 className='brand'>
          <Link to='/'>
            Spaced repetition
          </Link>
        </h1>
        </div>
        <div id='header-right'>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        </div>
      </header>
    );
  }
}

export default Header
