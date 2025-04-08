import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart3, Award, Compass, GitPullRequest, CheckCircle2, PlusCircle, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [user, setUser] = useState({
    name: "Alex Johnson",
    primarySkill: "Machine Learning",
    level: 3,
    xp: 780,
    nextLevelXp: 1000,
    streak: 12,
    taskCompleted: 23,
    taskTotal: 45
  });

  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete Linear Regression Lab", category: "Practical", difficulty: "Medium", xpReward: 40, completed: true },
    { id: 2, title: "Watch Neural Networks Deep Dive", category: "Theory", difficulty: "Hard", xpReward: 50, completed: true },
    { id: 3, title: "Read Research Paper on CNNs", category: "Research", difficulty: "Hard", xpReward: 60, completed: false },
    { id: 4, title: "Implement K-Means Clustering Algorithm", category: "Practical", difficulty: "Medium", xpReward: 45, completed: false },
    { id: 5, title: "Complete TensorFlow Tutorial", category: "Practical", difficulty: "Easy", xpReward: 30, completed: false },
  ]);

  const [progressData, setProgressData] = useState([
    { name: 'Jan', xp: 120 },
    { name: 'Feb', xp: 280 },
    { name: 'Mar', xp: 390 },
    { name: 'Apr', xp: 480 },
    { name: 'May', xp: 580 },
    { name: 'Jun', xp: 650 },
    { name: 'Jul', xp: 780 }
  ]);

  const [roadmapSuggestions, setRoadmapSuggestions] = useState([
    "Introduction to Neural Networks (2 weeks)",
    "Deep Learning with PyTorch (3 weeks)",
    "Computer Vision Fundamentals (2 weeks)",
    "Natural Language Processing (3 weeks)",
    "MLOps and Deployment (2 weeks)"
  ]);

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        if (!task.completed) {
          setUser(prev => ({
            ...prev,
            xp: prev.xp + task.xpReward,
            taskCompleted: prev.taskCompleted + 1
          }));
        } else {
          setUser(prev => ({
            ...prev,
            xp: prev.xp - task.xpReward,
            taskCompleted: prev.taskCompleted - 1
          }));
        }
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const generateNewRoadmap = () => {
    setRoadmapSuggestions([
      "Advanced Machine Learning Algorithms (3 weeks)",
      "Reinforcement Learning with Python (2 weeks)",
      "Time Series Forecasting (2 weeks)",
      "ML Model Optimization (1 week)",
      "AI Ethics and Responsible ML (1 week)"
    ]);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      {/* Main content */}
      <main className="container mx-auto py-8 px-4">
        {/* Hero section with welcome and stats */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
              <p className="text-gray-400 mt-1">Your {user.primarySkill} journey continues today</p>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Level {user.level} Progress</span>
                  <span>{user.xp}/{user.nextLevelXp} XP</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full" 
                    style={{ width: `${(user.xp / user.nextLevelXp) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-0 border-l border-gray-700 pl-6 flex flex-col md:text-right">
              <div className="flex items-center mb-2">
                <GitPullRequest className="text-indigo-400 mr-2" size={18} />
                <span className="text-gray-300">Task Completion:</span>
                <span className="font-semibold ml-2">
                  {user.taskCompleted}/{user.taskTotal}
                </span>
              </div>
              <Link to="/profile"><button  
                className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition duration-300"
              >
                View Complete Profile
              </button></Link>
            </div>
          </div>
        </div>

        {/* Body content in two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tasks and progress column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tasks section */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold flex items-center">
                  <CheckCircle2 className="text-indigo-400 mr-2" size={20} />
                  Current Tasks
                </h2>
                <div className="text-sm text-gray-400">
                  {tasks.filter(t => t.completed).length}/{tasks.length} Completed
                </div>
              </div>
              
              <div className="space-y-3">
                {tasks.map(task => (
                  <div 
                    key={task.id} 
                    className={`p-4 rounded-lg border border-gray-700 ${task.completed ? 'bg-gray-700/30' : 'bg-gray-700/10'}`}
                  >
                    <div className="flex justify-between">
                      <div className="flex-1">
                        <h3 className={`font-medium flex items-center ${task.completed ? 'line-through text-gray-500' : 'text-gray-200'}`}>
                          {task.title}
                        </h3>
                        <div className="flex mt-2 text-xs">
                          <span className="bg-gray-700 rounded-full px-2 py-1 mr-2">
                            {task.category}
                          </span>
                          <span className={`rounded-full px-2 py-1 ${
                            task.difficulty === 'Easy' ? 'bg-green-900/50 text-green-300' : 
                            task.difficulty === 'Medium' ? 'bg-yellow-900/50 text-yellow-300' : 
                            'bg-red-900/50 text-red-300'
                          }`}>
                            {task.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-3 text-indigo-300 font-semibold">+{task.xpReward} XP</span>
                        <button 
                          className={`p-2 rounded-full ${
                            task.completed ? 'bg-indigo-500 text-white' : 'bg-gray-700 text-gray-400'
                          }`}
                          onClick={() => toggleTaskCompletion(task.id)}
                        >
                          <CheckCircle2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <button className="w-full py-2 mt-2 border border-dashed border-gray-600 rounded-lg text-gray-400 hover:text-gray-300 hover:border-gray-500 flex items-center justify-center">
                  <PlusCircle size={16} className="mr-2" />
                  Add Custom Task
                </button>
              </div>
            </div>
            
            {/* Progress Chart */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center">
                  <BarChart3 className="text-indigo-400 mr-2" size={20} />
                  Progress Tracking
                </h2>
                <select className="bg-gray-700 border-none rounded px-2 py-1 text-sm text-gray-300">
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                  <option>All Time</option>
                </select>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', borderColor: '#4B5563', color: '#E5E7EB' }}
                      itemStyle={{ color: '#E5E7EB' }}
                      labelStyle={{ color: '#E5E7EB' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="xp" 
                      stroke="#8B5CF6" 
                      strokeWidth={3}
                      dot={{ fill: '#8B5CF6', r: 4 }}
                      activeDot={{ r: 6, fill: '#8B5CF6' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* Roadmap and AI suggestions column */}
          <div className="space-y-6">
            {/* Roadmap Generator */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">AI Roadmap</h2>
                <button 
                  onClick={generateNewRoadmap}
                  className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-lg transition duration-300"
                >
                  Regenerate
                </button>
              </div>
              
              <div className="relative mt-6">
                <div className="absolute h-full w-0.5 bg-indigo-500 left-2"></div>
                <div className="space-y-6 pl-8">
                  {roadmapSuggestions.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-8 w-4 h-4 rounded-full bg-gray-900 border-2 border-indigo-500"></div>
                      <div className="text-gray-200 font-medium">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-400">This roadmap is generated based on your progress and goals in Machine Learning. Adjust your preferences to get customized learning paths.</p>
              </div>
            </div>
            
            {/* Skills Progress */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Skills Progress</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Machine Learning</span>
                    <span>Advanced</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Python</span>
                    <span>Expert</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Data Visualization</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Deep Learning</span>
                    <span>Beginner</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition duration-300">
                View All Skills
              </button>
            </div>
            
            {/* Achievement Highlights */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Recent Achievements</h2>
              
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-indigo-900/20 border border-indigo-800/30 rounded-lg">
                  <Award className="text-indigo-400 mr-3" size={24} />
                  <div>
                    <div className="font-medium">7-Day Streak</div>
                    <div className="text-xs text-gray-400">Consistent learning pays off!</div>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-purple-900/20 border border-purple-800/30 rounded-lg">
                  <Award className="text-purple-400 mr-3" size={24} />
                  <div>
                    <div className="font-medium">Data Scientist Path: 30%</div>
                    <div className="text-xs text-gray-400">You're making great progress!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}