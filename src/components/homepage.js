import React from "react";
import { Link } from "react-router-dom";

import PlayImage from "../resources/play.png";
import ChessImage from "../resources/chess.png";
import SnakeImage from "../resources/snake.png";

import '../styles/homepage.css';

const NavigationBar = () => {
  return (
    <div>
      <nav className = "menu-container">
        <a href = "/" className = "menu-logo">
          <img src = {PlayImage} alt = "logo" />
        </a>

        <div className = "menu">
          <ul>
            <li> <Link to = {"#play"}>Games</Link> </li>
            <li> <Link to = {"#join"}>Join</Link> </li>
            <li> <Link to = {"#rooms"}>Rooms</Link> </li>
            <li> <Link to = {"/login"}>Login</Link> </li>
            <li> <Link to = {"/register"}>Register</Link> </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const Hero = () => {
  return (
    <div className = "hero">
      <div className = "hero-content">
        <h1 className = "hero-title">
          Recall your childhood!
        </h1>

        <h2 className = "hero-subtitle">
          Lorem Ipsum sit amet is simply dummy text of the printing and typesetting industry.
        </h2>

        <a href = "#play" className = "btn">Play Now</a>
      </div>
    </div>
  );
};

const Card = (props) => {
  return (
    <div className = {props.name}>
      <div className = "card_image">
        <img src = {props.src} />
        
        <div className = "card_title title-black">
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

const Play = () => {
  return (
    <div id = "play">
      <div className = "heading">
        <h1 className = "div-title">Start a new Room</h1>
      </div>

      <div className = "cards-list">
        <Card name = "card 1" src = {ChessImage}>Chess</Card>
        <Card name = "card 2" src = {SnakeImage}>Snake</Card>
        <Card name = "card 3" src = {""}>Random</Card>
        <Card name = "card 4" src = {""}>Random</Card>
      </div>
    </div>
  );
};

const Join = () => {
  return (
    <div className = "join" id = "join">
      <div className = "heading">
        <h1 className = "div-title">Join a Private Room</h1>
      </div>

      <div>
        <form className = "room-number">
          <h3>Enter the room number you want to join:</h3>
          <input type = "text" className = "css-input" placeholder = "Room Code" style = {{textAlign: "center"}} />
          <button type = "" className = "btn">Join</button>
        </form>
      </div>
    </div>
  );
};

const PublicRooms = () => {
  return (
    <div>
      <div className = "heading" id = "rooms">
        <h1 className = "div-title">Join a Public Room</h1>
      </div>

      <div className = "cards-list">
        <Card name = "card 1" src = {ChessImage}>A's Room</Card>
        <Card name = "card 2" src = {ChessImage}>B's Room</Card>
        <Card name = "card 3" src = {ChessImage}>C's Room</Card>
        <Card name = "card 4" src = {ChessImage}>D's Room</Card>
        <Card name = "card 5" src = {ChessImage}>E's Room</Card>
        <Card name = "card 6" src = {ChessImage}>F's Room</Card>
        <Card name = "card 7" src = {ChessImage}>G's Room</Card>
        <Card name = "card 8" src = {ChessImage}>H's Room</Card>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className = "site-footer">
      <div className = "footer-flex">
        <div className = "about" style = {{width: "50%"}}>
          <h6>About</h6>
          <p className = "text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className = "categories">
          <ul className = "footer-links">
            <li> <a href = "/">Products</a> </li>
            <li> <a href = "/">API</a> </li>
            <li> <a href = "/">Partners</a> </li>
            <li> <a href = "/">Random</a> </li>
          </ul>
        </div>

        <div className = "quicklinks">
          <ul className = "footer-links">
            <li> <Link to = {"#play"}>Games</Link> </li>
            <li> <Link to = {"#join"}>Join</Link> </li>
            <li> <Link to = {"#rooms"}>Rooms</Link> </li>
            <li> <Link to = {"/login"}>Login</Link> </li>
            <li> <Link to = {"/register"}>Register</Link> </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default class HomePage extends React.Component {
  render () {
    return (
      <div className = "HomePage">
        <NavigationBar />
        <Hero />
        <Play />
        <Join />
        <PublicRooms />
        <Footer />
      </div>
    );
  }
};
