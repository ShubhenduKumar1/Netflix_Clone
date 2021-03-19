import React, { useRef } from "react";
import "./SignupScreen.css";
import { auth } from "../firebase";

function SignUpScreen() {
  // UseRef is pointing to the current value of input html
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((signInauth) => console.log(signInauth))
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signup-Screen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" className="signIn-btn" onClick={signIn}>
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
