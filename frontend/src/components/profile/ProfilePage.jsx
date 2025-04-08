import { useState, useEffect } from 'react';
import { Award, Book, Code, FileCheck, BarChart2, GitPullRequest, Calendar, Clock, Award as AwardIcon } from 'lucide-react';

// This would be shared across components to ensure consistent avatar display
export const ProfileAvatar = ({ user, size = "lg" }) => {
  // Determine image dimensions based on size prop
  const dimensions = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-32 h-32",
  }[size] || "w-32 h-32";

  // Border styles
  const borderStyles = {
    sm: "border-2",
    md: "border-2",
    lg: "border-4",
  }[size] || "border-4";

  // Default avatar URL - silhouette in a circle
  const defaultAvatarUrl = "/api/placeholder/150/150"; // Placeholder for silhouette image

  return (
    <div className="relative">
      {user.profileImage ? (
        <img 
          src={user.profileImage} 
          alt={user.name} 
          className={`${dimensions} rounded-full ${borderStyles} border-indigo-600 object-cover`}
        />
      ) : (
        <div className={`${dimensions} rounded-full ${borderStyles} border-indigo-600 bg-gray-700 flex items-center justify-center overflow-hidden`}>
          {/* Default avatar with silhouette */}
          <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
        </div>
      )}
      
      {/* Level badge - only show on large avatars */}
      {size === "lg" && (
        <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
          {user.level}
        </div>
      )}
    </div>
  );
};

// This is a mock implementation of the profile button for the navbar
export const ProfileButton = ({ user, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors"
    >
      <ProfileAvatar user={user} size="sm" />
      <span className="text-sm hidden md:block">{user.name}</span>
    </button>
  );
};

export default function ProfilePage() {
  const [user, setUser] = useState({
    username: "alexjohnson23",
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    department: "Computer Science",
    year: "3rd Year",
    bio: "Passionate ML enthusiast focusing on computer vision and NLP applications. Currently researching transformer models for medical image analysis.",
    profileImage: null, // Set to null to demonstrate the default avatar
    level: 4,
    xp: 780,
    nextLevelXp: 1000,
    tasksCompleted: 28,
    tasksTotal: 45,
    streak: 16,
    joinedDate: "August 2023"
  });

  const [skills, setSkills] = useState([
    { name: "Machine Learning", level: 75, category: "technical" },
    { name: "Python", level: 90, category: "technical" },
    { name: "Data Visualization", level: 65, category: "technical" },
    { name: "Research Methods", level: 70, category: "soft" },
    { name: "Deep Learning", level: 60, category: "technical" },
    { name: "Public Speaking", level: 45, category: "soft" }
  ]);

  const [badges, setBadges] = useState([
    { id: 1, name: "Coding Streak", description: "Maintained a 10-day coding streak", icon: "Code", unlocked: true, date: "March 15, 2025" },
    { id: 2, name: "Research Pioneer", description: "Published first research paper", icon: "FileCheck", unlocked: true, date: "February 8, 2025" },
    { id: 3, name: "Team Player", description: "Participated in 5 group projects", icon: "Users", unlocked: true, date: "January 22, 2025" },
    { id: 4, name: "AI Specialist", description: "Completed advanced AI course track", icon: "Brain", unlocked: false },
    { id: 5, name: "Hackathon Winner", description: "Won a major hackathon", icon: "Award", unlocked: false },
    { id: 6, name: "Open Source Contributor", description: "Made 10+ open source contributions", icon: "GitPullRequest", unlocked: false }
  ]);

  const [activities, setActivities] = useState([
    { id: 1, type: "course", title: "Advanced Neural Networks", date: "April 2, 2025", xp: 120, icon: "Book" },
    { id: 2, type: "project", title: "Healthcare ML Classification System", date: "March 28, 2025", xp: 250, icon: "Code" },
    { id: 3, type: "certification", title: "TensorFlow Developer Certificate", date: "March 15, 2025", xp: 150, icon: "Award" },
    { id: 4, type: "paper", title: "Transformer Models in Medical Imaging", date: "February 10, 2025", xp: 300, icon: "FileCheck" },
    { id: 5, type: "hackathon", title: "University AI Challenge", date: "January 24, 2025", xp: 200, icon: "Award" }
  ]);

  // Function to handle profile image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImageUrl = e.target.result;
        // Update user profile image
        setUser(prev => ({
          ...prev,
          profileImage: newImageUrl
        }));
        
        // In a real app, you would also:
        // 1. Upload the image to your server/cloud storage
        // 2. Update the user profile in your database
        // 3. Update any global state or context that contains user info
        
        // For example, you might call a function like:
        // updateUserProfileImage(file).then(imageUrl => {
        //   setUser(prev => ({ ...prev, profileImage: imageUrl }));
        //   updateGlobalUserState({ ...user, profileImage: imageUrl });
        // });
      };
      reader.readAsDataURL(file);
    }
  };

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "Award": return <Award size={20} />;
      case "Book": return <Book size={20} />;
      case "Code": return <Code size={20} />;
      case "FileCheck": return <FileCheck size={20} />;
      case "GitPullRequest": return <GitPullRequest size={20} />;
      default: return <Award size={20} />;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section with Profile Image */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white">{user.name}</h1>
              <p className="text-indigo-400 mt-1">@{user.username}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-gray-400 flex items-center">
                    <span className="mr-2">🎓</span> {user.department}, {user.year}
                  </p>
                  <p className="text-gray-400 flex items-center mt-1">
                    <span className="mr-2">📧</span> {user.email}
                  </p>
                  <p className="text-gray-400 flex items-center mt-1">
                    <Calendar size={16} className="mr-2 text-gray-500" /> Joined {user.joinedDate}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 flex items-center">
                    <BarChart2 size={16} className="mr-2 text-gray-500" /> Level {user.level} Student
                  </p>
                  <p className="text-gray-400 flex items-center mt-1">
                    <FileCheck size={16} className="mr-2 text-gray-500" /> {user.tasksCompleted}/{user.tasksTotal} Tasks
                  </p>
                  <p className="text-gray-400 flex items-center mt-1">
                    <Clock size={16} className="mr-2 text-gray-500" /> {user.streak} Day Streak
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex justify-between text-sm mb-1">
                  <span>Level {user.level} Progress</span>
                  <span>{user.xp}/{user.nextLevelXp} XP</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full" 
                    style={{ width: `${(user.xp / user.nextLevelXp) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 relative group">
              <ProfileAvatar user={user} size="lg" />
              
              {/* Image upload overlay */}
              <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                <span className="text-white text-xs font-medium">Change Photo</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="font-medium text-gray-300 mb-2">Bio</h3>
            <p className="text-gray-400">{user.bio}</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Skills */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold flex items-center mb-4">
                <Code className="text-indigo-400 mr-2" size={20} />
                Skills Progress
              </h2>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gray-400">
                        {skill.level < 30 ? 'Beginner' : 
                         skill.level < 60 ? 'Intermediate' : 
                         skill.level < 85 ? 'Advanced' : 'Expert'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          skill.category === "technical" 
                            ? "bg-gradient-to-r from-blue-500 to-indigo-600" 
                            : "bg-gradient-to-r from-purple-500 to-pink-600"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 py-2 border border-indigo-600 text-indigo-400 rounded-lg hover:bg-indigo-900/30 transition duration-300">
                Add New Skill
              </button>
            </div>
            
            {/* Recent Activities */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold flex items-center mb-4">
                <Calendar className="text-indigo-400 mr-2" size={20} />
                Recent Activities
              </h2>
              
              <div className="space-y-4">
                {activities.map(activity => (
                  <div key={activity.id} className="flex items-start p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition">
                    <div className="p-2 bg-gray-700 rounded-lg text-indigo-400 mr-3">
                      {getIconComponent(activity.icon)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{activity.title}</div>
                      <div className="text-xs text-gray-400 flex justify-between mt-1">
                        <span>{activity.date}</span>
                        <span className="text-indigo-300">+{activity.xp} XP</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700/50 transition duration-300">
                View All Activities
              </button>
            </div>
          </div>
          
          {/* Right Column - Badges and Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Achievement Badges */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold flex items-center mb-4">
                <AwardIcon className="text-indigo-400 mr-2" size={20} />
                Achievement Badges
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {badges.map(badge => (
                  <div 
                    key={badge.id} 
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
                      badge.unlocked 
                        ? 'border-indigo-500/50 bg-indigo-900/20' 
                        : 'border-gray-700 bg-gray-800/50 opacity-60'
                    }`}
                  >
                    <div className={`p-3 rounded-full ${
                      badge.unlocked 
                        ? 'bg-indigo-500/30 text-indigo-300' 
                        : 'bg-gray-700 text-gray-500'
                    }`}>
                      {getIconComponent(badge.icon)}
                    </div>
                    <h3 className="mt-2 font-medium text-center">{badge.name}</h3>
                    <p className="text-xs text-gray-400 text-center mt-1">{badge.description}</p>
                    {badge.unlocked && badge.date && (
                      <span className="mt-2 text-xs text-indigo-400">Earned on {badge.date}</span>
                    )}
                    {!badge.unlocked && (
                      <span className="mt-2 text-xs text-gray-500">Locked</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Statistics and Analytics */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold flex items-center mb-4">
                <BarChart2 className="text-indigo-400 mr-2" size={20} />
                Statistics & Analytics
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-400">{user.tasksCompleted}</div>
                  <div className="text-sm text-gray-400 mt-1">Tasks Completed</div>
                </div>
                
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400">{badges.filter(b => b.unlocked).length}</div>
                  <div className="text-sm text-gray-400 mt-1">Badges Earned</div>
                </div>
                
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400">{user.streak}</div>
                  <div className="text-sm text-gray-400 mt-1">Day Streak</div>
                </div>
                
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-400">
                    {Math.round((user.tasksCompleted / user.tasksTotal) * 100)}%
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Completion Rate</div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-300 mb-3">Activity Distribution</h3>
                  <div className="flex h-4 bg-gray-700 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full" style={{ width: "35%" }}></div>
                    <div className="bg-purple-500 h-full" style={{ width: "25%" }}></div>
                    <div className="bg-blue-500 h-full" style={{ width: "20%" }}></div>
                    <div className="bg-green-500 h-full" style={{ width: "15%" }}></div>
                    <div className="bg-yellow-500 h-full" style={{ width: "5%" }}></div>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                      <span className="text-gray-400">Courses (35%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                      <span className="text-gray-400">Projects (25%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-gray-400">Certifications (20%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-400">Publications (15%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <span className="text-gray-400">Others (5%)</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-300 mb-3">Career Readiness</h3>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-indigo-900 text-indigo-300">
                          Data Science Path
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-indigo-400">
                          72%
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 mb-4">
                      <div className="w-full bg-gray-700 rounded-full">
                        <div className="bg-indigo-500 h-2 rounded-full" style={{width: "72%"}}></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-purple-900 text-purple-300">
                          Research Path
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-purple-400">
                          65%
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-700 rounded-full">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: "65%"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI-Generated Insights */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-indigo-900/50">
              <h2 className="text-xl font-bold flex items-center mb-4">
                <div className="bg-indigo-500/20 p-1 rounded text-indigo-300 mr-2">AI</div>
                Personalized Insights
              </h2>
              
              <div className="space-y-4">
                <div className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-4">
                  <h3 className="font-medium text-indigo-300">Progress Analysis</h3>
                  <p className="text-gray-300 mt-1">
                    You're making excellent progress in Machine Learning fundamentals. Based on your completion rate of 72% in the Data Science path, consider focusing next on advanced neural network architectures to round out your knowledge.
                  </p>
                </div>
                
                <div className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-4">
                  <h3 className="font-medium text-indigo-300">Next Steps Recommendation</h3>
                  <p className="text-gray-300 mt-1">
                    To strengthen your profile for ML Engineer roles, consider adding a practical project showcasing your skills in computer vision. This would complement your theoretical knowledge from recent courses.
                  </p>
                </div>
                
                <button className="w-full mt-2 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  Generate Full Career Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}