import React, { useState } from "react";
import StudentCard from "./StudentCard";
import "./StudentList.css";

function StudentList({ students }) {
  const [filters, setFilters] = useState({});

  const updateFilter = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const getFilteredStudents = () => {
    return students.filter(
      ({ firstName, lastName }) =>
        !filters.name ||
        `${firstName} ${lastName}`.toLowerCase().includes(filters.name)
    );
  };

  return (
    <div className="student-list-container">
      <input
        placeholder="Search by name"
        name="name"
        value={filters.name}
        onChange={updateFilter}
      />
      <div className="student-list">
        {getFilteredStudents().map((student) => (
          <StudentCard student={student} />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
