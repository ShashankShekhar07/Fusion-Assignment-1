import React from 'react';
import './Modules.css'; 
import i1 from "./1.png";
import i2 from "./2.png";
import i3 from "./3.png";
import i4 from "./4.png";
import i5 from "./5.png";
import i6 from "./6.png";

const ModuleCard = ({ title, icon }) => {
  return (
    <div className="module-card">
      <img src={icon} alt={title} className="module-icon" />
      <p className="module-title">{title}</p>
    </div>
  );
};

const Modules = () => {
  const modules = [
    { title: 'Academics', icon: i1 },
    { title: 'Mess Management', icon: i2 },
    { title: 'Programme and Curriculum', icon: i3 },
    { title: 'Health', icon: i4 },
    { title: 'Scholarship', icon: i5 },
    { title: 'Placement Cell', icon: i6 },
  ];

  return (
    <div className="modules-container">
      <h2>Modules</h2>
      <div className="module-grid">
        {modules.map((module, index) => (
          <ModuleCard key={index} title={module.title} icon={module.icon} />
        ))}
      </div>
    </div>
  );
};

export default Modules;
