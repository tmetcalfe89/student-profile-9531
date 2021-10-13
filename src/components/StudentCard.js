import React from "react";

function StudentCard({
  student: { pic, firstName, lastName, email, company, skill, grades },
}) {
  const average = (...arr) =>
    arr.map((e) => +e).reduce((acc, e) => acc + e, 0) / arr.length;

  return (
    <div>
      <img src={pic} alt="Profile" />
      <h1>
        {firstName} {lastName}
      </h1>
      <div>Email: {email}</div>
      <div>Company: {company}</div>
      <div>Skill: {skill}</div>
      <div>Average: {average(...grades)}%</div>
    </div>
  );
}

export default StudentCard;
