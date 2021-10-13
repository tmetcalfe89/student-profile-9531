import { useEffect, useState } from "react";

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

  return <div></div>;
}

export default App;
