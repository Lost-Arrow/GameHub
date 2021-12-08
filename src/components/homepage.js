import React from "react";

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

const Nav = (props) => {
  return (
    <div>
      <nav className = "menu-container">
        <a href = "#" className = "menu-logo">
          <img src = {Play} alt = "logo" />
        </a>

        <div className = "menu">
          <ul>
            <QuickLink href = "#play" class = "">Games</QuickLink>
            <QuickLink href = "#joins" class = "">Join</QuickLink>
            <QuickLink href = "#rooms" class = "">Rooms</QuickLink>
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
        <Nav />
      </div>
    );
  }
};
