import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const AppLayout = ({ children }) => {
    return (
        <div className="bg-white flex flex-col min-h-screen">
            <Navbar />
            <div className="w-screen flex container mx-auto flex-1" style={{ height: 'calc(100vh - 56px)' }}>
                <div className="w-[250px] h-full">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <div className="flex">
                        {children}
                    </div>
                </div>
            </div>

            {/* Footer Section - Full Width */}
            <footer className="bg-gray-900 text-white py-4 text-center w-full">
                <p className="text-sm">&copy; 2025 PromaTech Solutions. All rights reserved.</p>
                <p className="text-xs mt-1">
                    Contact us: <a href="mailto:support@promatech.com" className="text-blue-400 hover:underline">support@promatech.com</a>
                </p>
            </footer>
        </div>
    )
}

export default AppLayout
