import HeaderNav from 'components/Header/HeaderNav/HeaderNav';
import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="wrapper header__wrapper">
          <HeaderNav />
        </div>
      </div>
    );
  }
}
