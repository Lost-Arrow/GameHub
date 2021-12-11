import React from "react";
import { Link } from "react-router-dom";

import "../styles/loginpage.css"

export default class LoginPage extends React.Component {
  render () {
    return (
      <div className="bod">
      <div className = "LoginPage">
        <div className = "login">
          <div className = "container">
            <h1>Login</h1>
            <form>
              <input type = "email" placeholder = "Email" />
              <input type = "password" placeholder = "Password" />
              <br />
              <input type = "checkbox" /><span>Remember Me</span>

              <a href = "/login">Forgot Password</a>

              <button type = "submit">Log In</button>
            </form>

            <div className = "clearfix"></div>
          </div>
        </div>

        <div className = "register">
          <div className = "container">
            <p>Don't have an account yet?</p>
            <Link to = {"/register"}>Register</Link>
          </div>
        </div>
      </div>
      </div>
    );
  }
};
