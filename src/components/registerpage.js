import React from "react";
import { Link } from "react-router-dom";

import '../styles/registerpage.css'

export default class RegisterPage extends React.Component {
  render () {
    return (
      <div className="rebod">
      <div className = "RegisterPage">
        <div className = "register">
          <div className = "container">
            <h1>Sign Up</h1>

            <form>
              <input type = "email" placeholder = "Email" />
              <input type = "password" placeholder = "Password" />
              <input type = "password" placeholder = "Repeat Password" />
              <button type = "submit">Register</button>
            </form>

            <div className = "clearfix"></div>
          </div>
        </div>

        <div className = "login">
          <div className = "container">
            <h2>Hello there!</h2>
            <p>Already have an account?</p>
            <Link to = {"/login"}>Login</Link>
          </div>
        </div>
      </div>
        </div>
    );
  }
};
