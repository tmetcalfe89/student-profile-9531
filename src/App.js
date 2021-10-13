import React, { useEffect, useState } from "react";
import StudentList from "./components/StudentList";

function App() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const studentResponse = await fetch(
        "https://api.hatchways.io/assessment/students"
      );
      const studentData = await studentResponse.json();
      setStudentList(studentData.students);
    };
    getStudents();
  }, []);

  return (
    <div>
      <StudentList students={studentList} />
    </div>
  );
}

export default App;
