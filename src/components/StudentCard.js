import React from "react";
import "./StudentCard.css";

function StudentCard({
  student: { pic, firstName, lastName, email, company, skill, grades },
}) {
  const average = (...arr) =>
    arr.map((e) => +e).reduce((acc, e) => acc + e, 0) / arr.length;

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
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
