import React, { useState, useEffect } from "react";
import "./Nav.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`Navbar_content ${show && "nav_black"}`}>
      <div className="logo_image">
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="NetflixLogo"
        />
        <img
          className="nav_avtar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7DAUxmpoOjffahuqaSfqvc3w6Pa1kJjKeOA&usqp=CAU"
          alt="NetflixAvtar"
        />
      </div>
    </div>
  );
}

export default Navbar;
