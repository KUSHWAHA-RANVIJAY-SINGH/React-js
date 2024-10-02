import React, { useState } from "react";

const App = () => {
  const [semester, setSemester] = useState("");
  const [subjects, setSubjects] = useState([]);

  const fetchSubjects = async (semester) => {
    // Fetch subjects based on the selected semester
    // Replace this with your actual API call
    const subjectsData = {
      sem1: [
        { code: "SUB101", name: "Math", credits: 3 },
        { code: "SUB102", name: "Bilogy", credits: 4 },
      ],
      sem2: [
        { code: "SUB201", name: "Hindi", credits: 3 },
        { code: "SUB202", name: "English", credits: 4 },
      ],
    };
    return subjectsData[semester] || [];
  };

  return (
    <div>
      <h1>Select Semester</h1>
      <select
        value={semester}
        onChange={async (e) => {
          setSemester(e.target.value);
          setSubjects(await fetchSubjects(e.target.value));
        }}
      >
        <option value="">Select</option>
        <option value="sem1">Semester 1</option>
        <option value="sem2">Semester 2</option>
      </select>
      {semester && (
        <table>
          <thead>
            <tr>
              <th>Subject Code</th>
              <th>Subject Name</th>
              <th>Credits</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.code}>
                <td>{subject.code}</td>
                <td>{subject.name}</td>
                <td>{subject.credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
