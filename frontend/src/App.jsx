import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import HomePage from './components/homepage/HomePage.jsx';
import Profile from './components/profile/Profile.jsx';
import SignUp from './components/signup/SignUp.jsx';
import AboutPage from './components/aboutpage/AboutPage.jsx';
import Feedback from './components/feedback/Feedback.jsx';
import Cors from 'cors';

const cors = Cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'HEAD'],
});

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
