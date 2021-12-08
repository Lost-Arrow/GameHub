import React from "react";

import "../styles/loginpage.css"

export default class LoginPage extends React.Component {
  render () {
    return (
      <div className = "login">
        <div className = "container">
          <h1>Login</h1>
          <form>
            <input type = "email" placeholder = "Email" />
            <input type = "password" placeholder = "Password" />
            <br />
            <input type = "checkbox" /><span>Remember Me</span>

            <a href = "#">Forgot Password</a>
            
            <button type = "submit">Log In</button>
          </form>

          <div className = "clearfix"></div>
        </div>
      </div>
    );
  }
};
