import React from 'react';
import './loader.css';
export default function Loader() {
  return (
    <div data-testid="loader" className="loader__container">
      <div className="loader__item"></div>
    </div>
  );
}
