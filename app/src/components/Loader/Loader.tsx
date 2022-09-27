import React, { Component } from 'react';
import './loader.css';
export default class Loader extends Component {
  render() {
    return (
      <div className="loader__container">
        <div className="loader__item"></div>
      </div>
    );
  }
}
