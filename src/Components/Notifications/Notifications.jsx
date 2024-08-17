import React from 'react';
import './Notifications.css';

export default function Notifications() {
  const notifications = [
    {
      title: 'Gymkhana Module',
      description: 'Hackbyte event by bitbyte club',
      link: '#',
    },
    {
      title: 'Gymkhana Module',
      description: 'Norem ipsum dolor sit amet,',
      link: '#',
    },
  ];

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <div className="notifications-list">
        {notifications.map((notification, index) => (
          <div key={index} className="notification-item">
            <h3>{notification.title}</h3>
            <p>{notification.description}</p>
            <a href={notification.link} className="see-more">
              See more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
