import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../../config.js'; // Adjust the path as necessary

const Signin = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  const[email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  
  const [errors, setErrors] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(email && password) {
        await axios.post(`${BACKEND_URL}/user/signin` , { email, password })
        .then((response) => {
            console.log(response.data);
        })
      // Redirect to home page
      navigate('/home');
    }
  };
  
  return (
    <div className="flex justify-center items-center bg-black text-purple-50">
      <div className="w-full p-8 bg-gray-900 rounded-2xl shadow-2xl border border-purple-500/30">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Welcome Back!
          </h2>
          
        </div>
        
        {/* Progress indicator
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
        </div> */}
        
        <form>
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-purple-300 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: '' }); // Clear error on change
                  }}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-purple-700 focus:ring-purple-500'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="password" className="block text-purple-300 font-medium mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value);
                      setErrors({ ...errors, password: '' }); // Clear error on change
                    }}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.password ? 'border-red-500 focus:ring-red-500' : 'border-purple-700 focus:ring-purple-500'
                    }`}
                    placeholder="Create a strong password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/30"
                >
                  Signin
                </button>
              </div>
            </div>
        </form>
        
        {/* Sign in link */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Don't have an account?{' '}
            <a href="/signup" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;