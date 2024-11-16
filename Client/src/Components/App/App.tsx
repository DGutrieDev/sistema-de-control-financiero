import './App.css';
import Sidebar from '../sidebar';
import { LoginPage,RegisterPage } from '../../pages/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="container">
        <Router>
            <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
