import React from "react";
import Header from "../../Components/Header/Header.jsx";
import StudentInfoSection from "../DesktopOne/StudentInfoSection";
import Sidebar from "../../Components/Sidebar1/Sidebar1.jsx";
import Notifications from "../../Components/Notifications/Notifications.jsx";
import Modules from "../../Components/Modules/Modules.jsx";
import './Home.css'

const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "white", color: "black" }} className="Home">
      <div className="Sidebar">
        <Sidebar/>
      </div>
      <div className="MainCard">
        <div className="HeadandCard">
          <Header/>
          <StudentInfoSection/>
        </div>
        <div className="Notiandmodules">
          <Modules/>
          <Notifications/>          
        </div>
      </div>
      
    </div>
  );
};

export default Home;