import { useNavigate } from "react-router-dom";
import "./index.css";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const goToResults = () => {
    navigate("/student/results");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="student-dashboard">
      <h2>Student Dashboard</h2>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>

      <section className="dashboard-section">
        <h3>Submit Homework</h3>
        <form className="homework-form">
          <label>
            Subject:
            <input type="text" placeholder="e.g. Math" required />
          </label>
          <label>
            Homework File:
            <input type="file" accept="application/pdf" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="dashboard-section">
        <h3>Assigned Homework</h3>
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
              <td className="status pending">Pending</td>
            </tr>
            <tr>
              <td>Science</td>
              <td>Lab Report</td>
              <td>July 9, 2025</td>
              <td className="status submitted">Submitted</td>
            </tr>
            <tr>
              <td>English</td>
              <td>Essay on Climate Change</td>
              <td>July 10, 2025</td>
              <td className="status pending">Pending</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="dashboard-section notifications">
        <h3>Notifications</h3>
        <ul>
          <li>New homework assigned: Algebra Worksheet</li>
          <li>Your Science Lab Report was accepted</li>
        </ul>
      </section>

      <button className="results-button" onClick={goToResults}>
        View Results
      </button>
    </div>
  );
}
