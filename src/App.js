import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import LoginBox from "./components/LoginBox";
import { FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";

const AppLayout = () => {
  const [projects, setProjects] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showKnowMore, setShowKnowMore] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-50 bg-gray-900 text-white p-4">
          <Sidebar projects={projects} />
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

          {/* Smaller & Square-Shaped Login Popup (Centered) */}
          {showLogin && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-xl w-64 h-64 flex flex-col items-center justify-center relative"
              >
                <button
                  onClick={() => setShowLogin(false)}
                  className="absolute top-2 right-3 text-gray-700 hover:text-gray-900 text-lg"
                >
                  ✖
                </button>

                <h2 className="text-lg font-semibold text-indigo-600 mt-2">🔑 Login</h2>
                <p className="text-gray-600 text-sm mb-4">Access your dashboard</p>
                <LoginBox />
              </motion.div>
            </div>
          )}

          {/* Know More Popup */}
          {showKnowMore && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-2xl w-96 h-auto flex flex-col items-center relative"
              >
                <button
                  onClick={() => setShowKnowMore(false)}
                  className="absolute top-2 right-3 text-gray-700 hover:text-gray-900 text-xl"
                >
                  ✖
                </button>

                <h2 className="text-xl font-bold text-indigo-700">🔍 About Proma</h2>
                <p className="text-gray-600 mt-2 text-center">
                  Proma is a powerful project management tool designed to help you organize your work efficiently. 
                  Stay on top of your projects, collaborate with your team, and get things done faster.
                </p>
                <ul className="list-disc text-gray-700 mt-3 text-left px-6">
                  <li>✔️ Create & manage projects</li>
                  <li>✔️ Track progress & deadlines</li>
                  <li>✔️ Collaborate with team members</li>
                </ul>
              </motion.div>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-gray-200 py-6 w-full text-center shadow-lg mt-10">
        <p className="text-md font-semibold tracking-wide">📞 Contact Us</p>
        <a href="mailto:support@example.com" className="text-red hover:text-yellow-400 transition">
          📧 support@example.com
        </a>
        <p className="text-sm mt-2 font-semibold">Follow Us:</p>
        <div className="flex justify-center space-x-3 mt-1">
          <a href="https://www.linkedin.com" className="hover:text-yellow">🔗 LinkedIn</a>
          <a href="https://www.facebook.com" className="hover:text-yellow">📘 Facebook</a>
          <a href="https://twitter.com" className="hover:text-yellow">🐦 Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;






































