import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import LoginBox from "./components/LoginBox";
import { FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";

const AppLayout = () => {
  const [projects, setProjects] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showKnowMore, setShowKnowMore] = useState(false);
  
  const addProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-50 bg-gray-900 text-white p-4">
          <Sidebar projects={projects} addProject={addProject} projectTextColor="text-white" />
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center relative">
          {/* Header (Unchanged) */}
          <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-4 px-6 shadow-lg w-full text-center">
            <div className="flex justify-center">
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <FaProjectDiagram className="text-4xl text-yellow-300 mb-2" />
              </motion.div>
            </div>
            <h1 className="text-xl font-semibold">🚀 Manage Your Projects Efficiently With</h1>
            <h2 className="text-3xl font-extrabold text-yellow-300 mt-1">Proma</h2>
          </header>

          {/* Login Button (Below Header, Right Side) */}
          <div className="w-full flex justify-end px-10 mt-4">
            <button
              onClick={() => setShowLogin(!showLogin)}
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition shadow-lg"
            >
              🔑 Login
            </button>
          </div>

          {/* Center Content - Improved Welcome Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 bg-white shadow-lg rounded-xl p-8 w-3/4 text-center border-t-4 border-indigo-600 transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-3xl font-extrabold text-gray-900">
              🚀 Welcome to <span className="text-indigo-600">Proma</span>!
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Your all-in-one project management solution. Organize, collaborate, and achieve your goals efficiently!
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md w-40">
                <h3 className="text-indigo-600 font-semibold">📌 Create</h3>
                <p className="text-gray-700 text-sm">Easily create and manage projects.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md w-40">
                <h3 className="text-indigo-600 font-semibold">📊 Track</h3>
                <p className="text-gray-700 text-sm">Monitor progress & meet deadlines.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md w-40">
                <h3 className="text-indigo-600 font-semibold">🤝 Collaborate</h3>
                <p className="text-gray-700 text-sm">Work together with your team.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowKnowMore(true)}  
              className="mt-5 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              ℹ️ Know More
            </button>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;


































