import React from 'react';
import './Sidebar.css';
import logoIcon from './logo.png';  // Replace with the path to your logo image
import dashboardIcon from './dashboard_icon.png';  // Replace with the actual path to your icon images
import modulesIcon from './modules_icon.png';
import registrationIcon from './registration_icon.png';
import coursesIcon from './courses_icon.png';
import dropSemesterIcon from './drop_semester_icon.png';
import resultIcon from './result_icon.png';
import noticeIcon from './notice_icon.png';
import scheduleIcon from './schedule_icon.png';
import logoutIcon from './logout_icon.png';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logoIcon} alt="Logo" className="logo" />
      </div>
      <div className="menu">
        <div className="menu-item active">
          <img src={dashboardIcon} alt="Dashboard Icon" className="icon" />
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <img src={modulesIcon} alt="Modules Icon" className="icon" />
          <span>Modules</span>
        </div>
        <div className="menu-item">
          <img src={registrationIcon} alt="Registration Icon" className="icon" />
          <span>Registration</span>
        </div>
        <div className="menu-item">
          <img src={coursesIcon} alt="Courses Icon" className="icon" />
          <span>Courses</span>
        </div>
        <div className="menu-item">
          <img src={dropSemesterIcon} alt="Drop Semester Icon" className="icon" />
          <span>Drop Semester</span>
        </div>
        <div className="menu-item">
          <img src={resultIcon} alt="Result Icon" className="icon" />
          <span>Result</span>
        </div>
        <div className="menu-item">
          <img src={noticeIcon} alt="Notice Icon" className="icon" />
          <span>Notice</span>
        </div>
        <div className="menu-item">
          <img src={scheduleIcon} alt="Schedule Icon" className="icon" />
          <span>Schedule</span>
        </div>
      </div>
      <div className="logout">
        <img src={logoutIcon} alt="Logout Icon" className="icon" />
        <span>Logout</span>
      </div>
    </div>
  );
}

