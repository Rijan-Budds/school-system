import React from "react";
import "./index.css";

export default function TeacherDashboard() {
  // Dummy data for homework submissions
  const submittedHomeworks = [
    {
      id: 1,
      student: "Alice",
      subject: "Math",
      title: "Algebra Worksheet",
      submittedOn: "July 5, 2025",
      fileLink: "#",
      status: "Pending",
    },
    {
      id: 2,
      student: "Bob",
      subject: "Science",
      title: "Lab Report",
      submittedOn: "July 6, 2025",
      fileLink: "#",
      status: "Graded",
    },
  ];

  const handleMarkHomework = (id) => {
    alert(`Mark homework with ID: ${id} (implement grading logic here)`);
  };

  const handleCreateResult = () => {
    alert("Redirect or open create results page (implement later)");
  };

  return (
    <div className="teacher-dashboard">
      <h2>Teacher Dashboard</h2>
      <p>
        Teachers can mark the homework submitted by students and create results.
      </p>

      <section className="dashboard-section">
        <h3>Submitted Homework</h3>
        <table className="submitted-homework-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Subject</th>
              <th>Title</th>
              <th>Submitted On</th>
              <th>File</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {submittedHomeworks.map((hw) => (
              <tr key={hw.id}>
                <td>{hw.student}</td>
                <td>{hw.subject}</td>
                <td>{hw.title}</td>
                <td>{hw.submittedOn}</td>
                <td>
                  <a href={hw.fileLink} target="_blank" rel="noopener noreferrer">
                    View File
                  </a>
                </td>
                <td className={hw.status.toLowerCase()}>{hw.status}</td>
                <td>
                  {hw.status === "Pending" && (
                    <button
                      className="mark-button"
                      onClick={() => handleMarkHomework(hw.id)}
                    >
                      Mark
                    </button>
                  )}
                  {hw.status === "Graded" && <span>Graded</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <button className="create-results-button" onClick={handleCreateResult}>
        Create/View Results
      </button>
    </div>
  );
}
