import React, { useState, useEffect } from "react";
import { FaPlus, FaFolder, FaChevronDown, FaChevronRight } from "react-icons/fa";

const Sidebar = ({ projects, addProject }) => {
  console.log("Sidebar received projects:", projects);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", description: "" });

  useEffect(() => {
    console.log("Updated projects list:", projects);
  }, [projects]);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setNewProject({ title: "", description: "" });
  };

  const handleAddProject = () => {
    if (!newProject.title.trim()) {
      alert("Project name cannot be empty!");
      return;
    }

    // ✅ Make sure project is added to the list
    addProject([...projects, newProject]); 

    closeModal();
  };

  return (
    <div className="sidebar flex flex-col min-h-screen w-64 bg-gradient-to-b from-blue-900 to-purple-800 text-white shadow-lg">
      <div className="sidebar-header flex items-center justify-between p-4 border-b border-blue-700">
        <span className="text-lg font-semibold flex items-center">
          <FaFolder className="mr-2" /> Projects
        </span>
        <button
          onClick={openModal}
          className="bg-white text-blue-700 p-2 rounded-full hover:bg-gray-300 transition"
        >
          <FaPlus className="w-5 h-5" />
        </button>
      </div>

      <div className="p-2 flex-1">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white p-2 rounded-lg transition"
        >
          <span className="flex items-center">
            <FaFolder className="mr-2" /> My Projects
          </span>
          {collapsed ? <FaChevronRight /> : <FaChevronDown />}
        </button>

        {!collapsed && (
          <ul className="overflow-y-auto flex-1 pl-4">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <li 
                  key={index} 
                  className="px-3 py-2 mb-1 rounded-lg cursor-pointer bg-purple-700 text-white hover:bg-indigo-700 hover:text-white transition"
                >
                  <strong>{project.title}</strong>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-gray-400 italic">No projects added yet</li>
            )}
          </ul>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Add New Project</h2>

            <input
              type="text"
              placeholder="Project Name"
              className="w-full p-2 mb-3 border border-gray-300 rounded text-gray-900"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            />

            <textarea
              placeholder="Project Description"
              className="w-full p-2 mb-3 border border-gray-300 rounded text-gray-900"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProject}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;













