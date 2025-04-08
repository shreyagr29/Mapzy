import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  const [personalInfo, setPersonalInfo] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    education: '',
  });
  
  const [selectedSkills, setSelectedSkills] = useState({
    'Artificial Intelligence': false,
    'Machine Learning': false,
    'Data Science': false,
    'Software Development': false,
    'Digital Marketing': false,
    'User Interface/User Experience Design': false,
    'Cloud Computing': false,
    'Project Management': false
  });
  
  const [errors, setErrors] = useState({});
  
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value
    });
  };
  
  const handleSkillChange = (skill) => {
    setSelectedSkills({
      ...selectedSkills,
      [skill]: !selectedSkills[skill]
    });
  };
  
  const validatePersonalInfo = () => {
    const newErrors = {};
    
    if (!personalInfo.fullName.trim())
      newErrors.fullName = 'Full name is required';
      
    if (!personalInfo.username.trim())
      newErrors.username = 'Username is required';
    else if (personalInfo.username.length < 3)
      newErrors.username = 'Username must be at least 3 characters';
    
    if (!personalInfo.email)
      newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(personalInfo.email))
      newErrors.email = 'Email is invalid';
    
    if (!personalInfo.password)
      newErrors.password = 'Password is required';
    else if (personalInfo.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    
    if (personalInfo.password !== personalInfo.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
      
    if (!personalInfo.education.trim())
      newErrors.education = 'Education information is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateSkills = () => {
    if (!Object.values(selectedSkills).some(value => value)) {
      setErrors({ skills: 'Please select at least one skill' });
      return false;
    }
    setErrors({});
    return true;
  };
  
  const handleNextStep = () => {
    if (currentStep === 1 && validatePersonalInfo()) {
      setCurrentStep(2);
    }
  };
  
  const handlePrevStep = () => {
    setCurrentStep(1);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateSkills()) {
      // Submit form data to backend
      console.log('Form submitted:', {
        personalInfo,
        selectedSkills
      });
      // Redirect to home page
      navigate('/home');
    }
  };
  
  const skillsList = [
    { key: 'Artificial Intelligence', abbreviation: 'AI' },
    { key: 'Machine Learning', abbreviation: 'ML' },
    { key: 'Data Science', abbreviation: 'DS' },
    { key: 'Software Development', abbreviation: 'SD' },
    { key: 'Digital Marketing', abbreviation: 'DM' },
    { key: 'User Interface/User Experience Design', abbreviation: 'UI/UX' },
    { key: 'Cloud Computing', abbreviation: 'CC' },
    { key: 'Project Management', abbreviation: 'PM' },
  ];
  
  return (
    <div className="flex justify-center items-center bg-black text-purple-50">
      <div className="w-full p-8 bg-gray-900 rounded-2xl shadow-2xl border border-purple-500/30">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            {currentStep === 1 ? 'Join Mapzy Journey' : 'Choose Your Skills'}
          </h2>
          <p className="text-center text-gray-400 mt-2">
            {currentStep === 1 
              ? 'Start your professional growth with us' 
              : 'Select skills you want to develop'}
          </p>
        </div>
        
        {/* Progress indicator */}
        <div className="flex mb-8 justify-center">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              currentStep === 1 ? 'bg-purple-600' : 'bg-purple-900'
            }`}>
              <span className="text-white font-bold">1</span>
            </div>
            <div className={`h-1 w-16 ${
              currentStep > 1 ? 'bg-purple-600' : 'bg-gray-700'
            }`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              currentStep === 2 ? 'bg-purple-600' : 'bg-purple-900'
            }`}>
              <span className="text-white font-bold">2</span>
            </div>
          </div>
        </div>
        
        <form>
          {currentStep === 1 ? (
            // Step 1: Personal Information
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-purple-300 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={personalInfo.fullName}
                    onChange={handlePersonalInfoChange}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-purple-700 focus:ring-purple-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="username" className="block text-purple-300 font-medium mb-2">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={personalInfo.username}
                    onChange={handlePersonalInfoChange}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.username ? 'border-red-500 focus:ring-red-500' : 'border-purple-700 focus:ring-purple-500'
                    }`}
                    placeholder="Choose a username"
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-purple-300 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={personalInfo.email}
                  onChange={handlePersonalInfoChange}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-purple-700 focus:ring-purple-500'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="education" className="block text-purple-300 font-medium mb-2">Education</label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={personalInfo.education}
                  onChange={handlePersonalInfoChange}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.education ? 'border-red-500 focus:ring-red-500' : 'border-purple-700 focus:ring-purple-500'
                  }`}
                  placeholder="Your current education or highest degree"
                />
                {errors.education && (
                  <p className="text-red-500 text-sm mt-1">{errors.education}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="password" className="block text-purple-300 font-medium mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={personalInfo.password}
                    onChange={handlePersonalInfoChange}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.password ? 'border-red-500 focus:ring-red-500' : 'border-purple-700 focus:ring-purple-500'
                    }`}
                    placeholder="Create a strong password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-purple-300 font-medium mb-2">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={personalInfo.confirmPassword}
                    onChange={handlePersonalInfoChange}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-purple-700 focus:ring-purple-500'
                    }`}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/30"
                >
                  Continue
                </button>
              </div>
            </div>
          ) : (
            // Step 2: Skills Selection
            <div>
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Select skills you're interested in:</h3>
                
                {errors.skills && (
                  <p className="text-red-500 text-sm mb-4">{errors.skills}</p>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillsList.map((skill) => (
                    <div
                      key={skill.key}
                      onClick={() => handleSkillChange(skill.key)}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 flex items-center ${
                        selectedSkills[skill.key] 
                          ? 'bg-purple-700/40 border-2 border-purple-500' 
                          : 'bg-gray-800 border border-gray-700 hover:border-purple-500/50'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-md mr-3 flex items-center justify-center border ${
                        selectedSkills[skill.key] 
                          ? 'bg-purple-600 border-purple-400' 
                          : 'border-gray-500'
                      }`}>
                        {selectedSkills[skill.key] && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-white">{skill.key}</p>
                        <p className="text-sm text-gray-400">{skill.abbreviation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="w-1/3 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg border border-gray-700 transition-colors duration-300"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-2/3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/30"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </form>
        
        {/* Sign in link */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Already have an account?{' '}
            <a href="/signin" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;