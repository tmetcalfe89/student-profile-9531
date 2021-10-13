import React, { useState, useEffect } from "react";
import StudentCard from "./StudentCard";
import useLocalStorage from "../hooks/useLocalStorage";
import "./StudentList.css";

function StudentList() {
  const [filters, setFilters] = useState({});
  const [students, setStudents] = useLocalStorage("students", []);

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
    if (students.length === 0) {
      getStudents();
    }
  }, [setStudents, students.length]);

  const updateFilter = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value.toLowerCase(),
    });
  };

  const getFilteredStudents = () => {
    return students
      .filter(
        ({ firstName, lastName }) =>
          !filters.name ||
          `${firstName} ${lastName}`.toLowerCase().includes(filters.name)
      )
      .filter(
        ({ tags }) =>
          !filters.tag ||
          tags.some((tag) => tag.toLowerCase().includes(filters.tag))
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
          <StudentCard
            student={student}
            addTag={(tag) => addTag(index, tag)}
            key={`student-card-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
