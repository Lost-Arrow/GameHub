import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/homepage';
import LoginPage from './components/loginpage';
import RegisterPage from './components/registerpage';

export default class App extends React.Component {
  render () {
    return (
      <div className = "app">
        <BrowserRouter>
          <Routes>
            <Route exact path = "/" element = {<HomePage />} />
            <Route exact path = "/login" element = {<LoginPage />} />
            <Route exact path = "/register" element = {<RegisterPage />} />
            {/* <Route exact path = "/game/chess" element = {<div />} />
            <Route exact path = "/game/snake" element = {<div />} />
            <Route exact path = "/game/dinojump" element = {<div />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
};
