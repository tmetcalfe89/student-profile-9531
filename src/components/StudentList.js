import React from "react";
import StudentCard from "./StudentCard";
import "./StudentList.css";

function StudentList({ students }) {
  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard student={student} />
      ))}
    </div>
  );
}

export default StudentList;
