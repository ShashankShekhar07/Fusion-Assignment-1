import React from 'react';
import './StudentInfoSection.css';
import imgCap from './cap.png';  
import imgBackpack from './backpack.png'; 
export default function StudentInfoSection() {
  return (
    <div className="student-info-container">
      <div className="info-box">
        <h1 className="student-id">22BCS226</h1>
        <div className='name'><h1 className="student-name">Shashank Shekhar</h1>
        <p className="student-details">BTech, CSE SEM -4</p></div>
      </div>
      <div className="image-box">
        {/* <img src={imgCap} alt="Graduation Cap" className="graduation-cap" /> */}
        {/* <img src={imgBackpack} alt="Backpack" className="backpack" /> */}
      </div>
    </div>
  );
}

