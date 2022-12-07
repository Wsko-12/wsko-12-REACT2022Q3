import Store from 'store/Store';
import Header from 'components/Header/Header';
import About from 'pages/about/About';
import CharacterPage from 'pages/characterPage/CharacterPage';
import FormPage from 'pages/form/FormPage';
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
        <Route path="/form" element={<FormPage />} />
        <Route path="/:id" element={<CharacterPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
