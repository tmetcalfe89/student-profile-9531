import React, { useState } from "react";
import TestScores from "./TestScores";
import "./StudentCard.css";

function StudentCard({
  student: { pic, firstName, lastName, email, company, skill, grades },
}) {
  const [expanded, setExpanded] = useState(false);

  const average = (...arr) =>
    arr.map((e) => +e).reduce((acc, e) => acc + e, 0) / arr.length;

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="student-card">
      <div className="profile-pic">
        <img src={pic} alt="Profile" />
      </div>
      <div className="data">
        <h1>
          {firstName} {lastName}
        </h1>
        <div className="details">
          <div>Email: {email}</div>
          <div>Company: {company}</div>
          <div>Skill: {skill}</div>
          <div>Average: {average(...grades)}%</div>
          {expanded && <TestScores scores={grades} />}
        </div>
      </div>
      <button className="plus" onClick={toggleExpanded}>
        +
      </button>
    </div>
  );
}

export default StudentCard;
