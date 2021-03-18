import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [Signin, setSignin] = useState(false);
  return (
    <div className="login_ScreenBg">
      <div className="nav_Logo">
        <img
          className="Login-nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="NetflixLogo"
        />

        <button className="btn signBtn " onClick={() => setSignin(true)}>
          Sign In
        </button>
        <div className="linear_gradient" />
      </div>
      <div className="loginScreen_body">
        {Signin ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited movies,TV shows and more.</h1>
            <h2>Watch anywhere, Cancel anytime</h2>
            <p>
              Ready to watch? Enter your email to create or to restart your
              membership
            </p>
            <div className="loginInput">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginGetStarted"
                  onClick={() => setSignin(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
