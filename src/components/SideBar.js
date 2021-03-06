import React from 'react'
import { Link } from 'react-router-dom'
import { FaFolder, FaLinux } from 'react-icons/fa'
import '../styles/Sidebar.css'
const SideBar = () => {
    return (
        <div className='sidebar'>
            <header className="sidebar-header">Projects</header>
            <div className='sidebar-list'>
                <Link to="/filesystem" style={{ all: "unset" }}>
                    <div className='sidebar-list-item'>
                        <FaFolder />
                        <div style={{ marginLeft: "10px" }}>FileSystem</div>
                    </div>
                </Link>
                <Link to="/filesystem" style={{ all: "unset" }}>
                    <div className='sidebar-list-item'>
                        <FaLinux />
                        <div style={{ marginLeft: "10px" }}>Scheduler</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default SideBar;