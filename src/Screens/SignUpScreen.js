import React from "react";
import "./SignupScreen.css";

function SignUpScreen() {
  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup-Screen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button className="signIn-btn" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signup-Screen_gray">New to Netflix?</span>
          <span className="signup-Screen_link" onClick={register}>
            Sign up Now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
