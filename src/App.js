
import React from 'react';
import LoginPage from './pages/LoginPage';
import Testing from './pages/Testing';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<LoginPage/>} />
      <Route path="/loginpage" element={<LoginPage />} />
      </Routes>
      </Router>
  );
}

export default App;

