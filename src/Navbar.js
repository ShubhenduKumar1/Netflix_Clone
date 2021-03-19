import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Nav.css";

function Navbar() {
  const history = useHistory();
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`Navbar_content ${show && "nav_black"}`}>
      <div className="logo_image">
        <img
          onClick={() => {
            history.push("/");
          }}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="NetflixLogo"
        />
        <img
          onClick={() => {
            history.push("/profile");
          }}
          className="nav_avtar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7DAUxmpoOjffahuqaSfqvc3w6Pa1kJjKeOA&usqp=CAU"
          alt="NetflixAvtar"
        />
      </div>
    </div>
  );
}

export default Navbar;
