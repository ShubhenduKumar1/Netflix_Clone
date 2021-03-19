import React from "react";
import "./PlanDetails.css";
function PlanDetail(props) {
  return (
    <div className="PlanInfo">
      <h4 className="plan_heading">
        {props.plan}
        <br />
        {props.quality}
      </h4>
      <button className="subscribe_button">Subscribe</button>
    </div>
  );
}

export default PlanDetail;
