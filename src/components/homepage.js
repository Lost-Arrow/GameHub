import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import LoginPage from "./loginpage";
import RegisterPage from "./registerpage"

import Play from "../resources/play.png"

import '../styles/homepage.css';

const QuickLink = (props) => {
  return (
    <li>
      <a href = {props.href} className = {props.class}>
        {props.children}
      </a>
    </li>
  )
};

const NavigationBar = (props) => {
  return (
    <div>
      <nav className = "menu-container">
        <a href = "#" className = "menu-logo">
          <img src = {Play} alt = "logo" />
        </a>

        <div className = "menu">
          <ul>
            <li> <Link to = {"#play"}>Games</Link> </li>
            <li> <Link to = {"#join"}>Join</Link> </li>
            <li> <Link to = {"#rooms"}>Rooms</Link> </li>
            <li> <Link to = {"/login"} component = {<LoginPage />}>Login</Link> </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default class HomePage extends React.Component {
  render () {
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
};
