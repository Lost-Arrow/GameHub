import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/homepage';
import LoginPage from './components/loginpage';
import RegisterPage from './components/registerpage';

import Snake from './apps/snakejs/src/components/Snake';
import Chess from './apps/chessjs/src/components/Chess';

export default class App extends React.Component {
  render () {
    return (
      <div className = "app">
        <BrowserRouter>
          <Routes>
            <Route exact path = "/" element = {<HomePage />} />
            <Route exact path = "/login" element = {<LoginPage />} />
            <Route exact path = "/register" element = {<RegisterPage />} />
            <Route exact path = "/chess" element = {<Chess fen = "rn2kb1r/ppp1pppp/1q3n2/8/3P2b1/2N2N2/PPPBBPPP/R2QK2R b KQkq - 6 7" />} />
            <Route exact path = "/snake" element = {<Snake />} />
            {/* <Route exact path = "/game/dinojump" element = {<div />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
};
