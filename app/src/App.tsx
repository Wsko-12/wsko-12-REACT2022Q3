import Header from 'components/Header/Header';
import About from 'pages/about/About';
import Main from 'pages/main/Main';
import Page404 from 'pages/page404/Page404';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
