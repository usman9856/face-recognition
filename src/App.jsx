import './App.css';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import AdminPage from './Components/Pages/Admin';
import StudentPage from './Components/Pages/Student';
import FacultyPage from './Components/Pages/Faculty';

function App() {
  return (
 <Router>
  <Routes>
  <Route exact path="/" element={<HomePage />} />
  <Route exact path="/login" element={<Login />} />
  <Route exact path="/Singup" element={<Signup />} />
  <Route exact path="/Admin" element={<AdminPage />} />
  <Route exact path="/Student" element={<StudentPage />} />
  <Route exact path="/Faculty" element={<FacultyPage />} />
  </Routes>
 </Router>
  );
}

export default App;
