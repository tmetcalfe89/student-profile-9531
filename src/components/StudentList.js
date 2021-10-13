import React, { useState, useEffect } from "react";
import StudentCard from "./StudentCard";
import "./StudentList.css";

function StudentList() {
  const [filters, setFilters] = useState({});
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const studentResponse = await fetch(
        "https://api.hatchways.io/assessment/students"
      );
      const studentData = await studentResponse.json();
      setStudents(
        studentData.students.map((student) => ({ ...student, tags: [] }))
      );
    };
    getStudents();
  }, []);

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

  const addTag = (index, tag) => {
    const newStudents = [...students];
    newStudents[index].tags.push(tag);
    setStudents(newStudents);
  };

  return (
    <div className="student-list-container">
      <input
        placeholder="Search by name"
        name="name"
        value={filters.name}
        onChange={updateFilter}
      />
      <input
        placeholder="Search by tag"
        name="tag"
        value={filters.tag}
        onChange={updateFilter}
      />
      <div className="student-list">
        {getFilteredStudents().map((student, index) => (
          <StudentCard student={student} addTag={(tag) => addTag(index, tag)} />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
