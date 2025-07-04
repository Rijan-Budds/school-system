import { useNavigate } from "react-router-dom";
import "./index.css";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const goToResults = () => {
    navigate("/student/results");
  };

  return (
    <div className="student-dashboard">
      <h2>Student Dashboard</h2>  
      {/* the students will submit pdf files. pdf files only accepted*/}
      <section className="dashboard-section">
        <h3>Submit Homework</h3>
        <form className="homework-form">
          <label>
            Subject:
            <input type="text" placeholder="e.g. Math" required />
          </label>
          <label>
            Homework File:
            <input type="file" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="dashboard-section">
        <h3>Assigned Homework</h3>


      {/*pending will be orange color and submited will be green color. the student will also have a notification option where they will see that new assignment has been added to them. or their assignment was rejected by the teacher     */}
        <table className="assigned-homework-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Title</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Math</td>
              <td>Algebra Worksheet</td>
              <td>July 7, 2025</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Science</td>
              <td>Lab Report</td>
              <td>July 9, 2025</td>
              <td>Submitted</td>
            </tr>
            <tr>
              <td>English</td>
              <td>Essay on Climate Change</td>
              <td>July 10, 2025</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </section>

      <button className="results-button" onClick={goToResults}>
        View Results
      </button>
    </div>
  );
}
