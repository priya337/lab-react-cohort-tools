import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <div className="App">
      <div className="relative z-20 pt-20">
        <Navbar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student/:studentId" element={<StudentDetailsPage />} /> {/* Singular "student" */}
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
