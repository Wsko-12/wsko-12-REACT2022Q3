import HeaderNav from 'components/Header/HeaderNav/HeaderNav';
import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="wrapper header__wrapper">
        <HeaderNav />
      </div>
    </div>
  );
}
