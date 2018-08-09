import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/header.css'

export class Header extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-light bg-light">
      <p className='navbar-brand'>W+</p>
        <ul>
         <button className='navbar-toggler home-button'><Link to='/'>Home</Link></button>
        </ul>
      </nav>
      <div className='jumbotron'>
      <h1>Weather Display</h1>
      <h3>Check current weather below with up-to-the-minute analytics</h3>
      </div>
      </div>
    );
  }
}

export default Header;
