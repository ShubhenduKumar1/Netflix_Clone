import React from "react";
import Nav from "../Navbar";
import "./profileScreen.css";
import Plan from "./PlanDetail";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen-body">
        <h1>Edit Profile</h1>

        <div className="profileScreen-info">
          <img
            className="profile_logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7DAUxmpoOjffahuqaSfqvc3w6Pa1kJjKeOA&usqp=CAU"
            alt="NetflixAvtar"
          />

          <div className="profileScreen-details">
            <h2>{user.email}</h2>
            <div className="profileScreen-plans">
              <h3>Plans:</h3>
              <p>Renewal Date</p>
              <button onClick={() => auth.signOut()} className="signOut">
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
