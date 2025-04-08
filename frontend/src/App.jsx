import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import LandingPage from './components/landingPage/LandingPage.jsx';
import ProfilePage from './components/profile/ProfilePage.jsx';
import SignUp from './components/signup/SignUp.jsx';
import AboutPage from './components/aboutpage/AboutPage.jsx';
import Feedback from './components/feedback/Feedback.jsx';
import HomePage from './components/homepage/HomePage.jsx';
import SignIn from './components/signin.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
      <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
