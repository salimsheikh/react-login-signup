import React, { useState } from "react";
import "./auth-style.css";
import user_icon from "../assets/images/icons/person.png";
import email_icon from "../assets/images/icons/email.png";
import password_icon from "../assets/images/icons/password.png";

const SignupPage = () => {
  const [action, setAction] = useState("login");
  return (
    <div className="container">
      <div className="login-container">
        <div className="header">
          <div className="text">{action === "login" ? "Login" : "Sign Up"}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email ID" />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>

          {action === "signup" ? (
            <div></div>
          ) : (
            <div className="forgot-password">
              Lost Password?
              <span>Click here</span>
            </div>
          )}

          <div className="submit-container">
            <div
              className={action === "login" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("signup");
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "signup" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("login");
              }}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
