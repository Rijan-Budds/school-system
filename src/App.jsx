import { Route, Routes, BrowserRouter} from "react-router-dom";
import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"
import Teacher from "./Components/Teacher/TeacherDashboard"
import Student from "./Components/Student/StudentDashboard"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  )
}

