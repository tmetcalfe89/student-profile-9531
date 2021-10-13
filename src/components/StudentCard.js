import React, { useRef, useState } from "react";
import TestScores from "./TestScores";
import TagList from "./TagList";
import "./StudentCard.css";

function StudentCard({
  student: { pic, firstName, lastName, email, company, skill, grades, tags },
  addTag,
}) {
  console.log(addTag);
  const tagInputRef = useRef(null);

  const [expanded, setExpanded] = useState(false);
  const [tagInput, setTagInput] = useState("");

  const average = (...arr) =>
    arr.map((e) => +e).reduce((acc, e) => acc + e, 0) / arr.length;

  const toggleExpanded = () => setExpanded(!expanded);

  const submitTag = (e) => {
    e.preventDefault();
    addTag(tagInputRef.current.value);
    setTagInput("");
  };

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
          {tags.length > 0 && <TagList tags={tags} />}
          <form onSubmit={submitTag}>
            <input
              placeholder="Add a tag"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              ref={tagInputRef}
            />
          </form>
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
