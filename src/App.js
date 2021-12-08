import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomePage from './components/homepage';
import LoginPage from './components/loginpage';
import RegisterPage from './components/registerpage';

export default class App extends React.Component {
  render () {
    return (
      <div className = "app">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<HomePage />} />
            <Route path = "/login" element = {<LoginPage />} />
            <Route path = "/register" element = {<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
};
