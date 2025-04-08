import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Check if user is authenticated
    // This is a simple example - replace with your actual auth check
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
    };
    
    checkAuth();
  }, []);
  
  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/home');
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-indigo-800">
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Abstract pattern background */}
          <div className="absolute inset-0 opacity-30"></div>
        </div>
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">Mapzy</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 text-center max-w-3xl">
              Transforming student growth with AI-powered skill development and self-appraisal
            </p>
            <div className="mt-8">
              <button 
                onClick={handleGetStarted}
                className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            We're bridging the gap between academic life and career aspirations with a powerful, 
            intelligent platform that empowers students to take control of their professional journey.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 mb-20">
          <h3 className="text-2xl font-bold mb-6 text-indigo-400">The Problem We're Solving</h3>
          <p className="text-gray-300 mb-6">
            Students in higher education often struggle to track their progress, define clear upskilling roadmaps, 
            and align their academic life with career goals. Traditional self-appraisal methods (if any) are manual, 
            vague, and do not encourage a structured, self-driven development approach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-gray-700 p-6 rounded-xl">
              <div className="text-indigo-300 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
              </div>
              <h4 className="font-bold text-xl mb-2">Lack of Direction</h4>
              <p className="text-gray-400">
                Students struggle to chart clear paths toward their career goals
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <div className="text-indigo-300 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <h4 className="font-bold text-xl mb-2">Scattered Achievements</h4>
              <p className="text-gray-400">
                Accomplishments spread across platforms with no centralized record
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <div className="text-indigo-300 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h4 className="font-bold text-xl mb-2">Manual Tracking</h4>
              <p className="text-gray-400">
                Inefficient, error-prone methods for recording progress
              </p>
            </div>
          </div>
        </div>

        {/* Our Solution */}
        <h3 className="text-3xl font-bold mb-12 text-center">Our Solution</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Smart Goal Setting</h4>
                  <p className="text-gray-400">
                    Set SMART learning goals with AI assistance to create achievable milestones
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Comprehensive Tracking</h4>
                  <p className="text-gray-400">
                    Log courses, events, internships, projects, and achievements in one place
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Automated Logging</h4>
                  <p className="text-gray-400">
                    Automatically import GitHub commits, certifications, and publications
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">AI-Powered Roadmaps</h4>
                  <p className="text-gray-400">
                    Get personalized upskilling plans based on your goals and current progress
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Professional Reports</h4>
                  <p className="text-gray-400">
                    Generate self-appraisal reports for internships, placements, and personal growth
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="h-64 bg-gray-700 rounded-lg animate-pulse mb-4"></div>
                  <div className="h-8 bg-gray-700 rounded w-3/4 animate-pulse mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-4/5 animate-pulse"></div>
                  <div className="mt-6 flex justify-between">
                    <div className="h-10 bg-indigo-900 rounded w-2/5 animate-pulse"></div>
                    <div className="h-10 bg-purple-900 rounded w-2/5 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                    <div dangerouslySetInnerHTML={{ __html: feature.icon }} className="text-indigo-400 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">How It Works</h2>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-900 z-0"></div>
          
          {/* Timeline steps */}
          <div className="relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold z-20">
                  {index + 1}
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Academic Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Mapzy today and transform how you track, develop, and showcase your skills.
          </p>
          <button 
            onClick={handleGetStarted}
            className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

// Features data
const features = [
  {
    title: "Smart AI Assistant",
    description: "Chat with your personal AI career mentor who suggests personalized roadmaps and learning resources.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`
  },
  {
    title: "Auto-Tracking Integrations",
    description: "Connect GitHub, LinkedIn, and certification platforms to automatically log your achievements.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`
  },
  {
    title: "Visual Progress Dashboard",
    description: "Track your growth with intuitive charts and visualizations that highlight your improvement over time.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`
  },
  {
    title: "Smart Resume Generator",
    description: "Convert your achievements into professional resumes with AI-enhanced bullet points and formatting.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>`
  },
  {
    title: "Skill Tree Mapping",
    description: "Visualize the relationships between skills and create strategic learning paths with our skill trees.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>`
  },
  {
    title: "Achievement Gamification",
    description: "Earn badges, XP points, and climb leaderboards as you complete learning milestones and activities.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>`
  }
];

// How it works steps
const steps = [
  {
    title: "Create Your Profile",
    description: "Sign up and set your interests, current skill levels, and career aspirations."
  },
  {
    title: "Connect Your Accounts",
    description: "Link GitHub, LinkedIn, and other platforms for automatic achievement tracking."
  },
  {
    title: "Set Your Goals",
    description: "Define what you want to achieve with AI assistance to create realistic milestones."
  },
  {
    title: "Track Your Progress",
    description: "Log activities manually or let our system automatically track your accomplishments."
  },
  {
    title: "Get Personalized Insights",
    description: "Receive AI-powered recommendations for skills to develop and resources to explore."
  },
  {
    title: "Generate Reports",
    description: "Create professional self-appraisal reports for internships, jobs, or personal review."
  }
];