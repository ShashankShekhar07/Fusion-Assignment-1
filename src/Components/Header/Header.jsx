import React from "react";
import img1 from "./img_leftarrow_1.png";
import img2 from "./img_rightarrow_1.png"
import img3 from "./zlatan.jpg";
import './Header.css';

export default function Header() {
  return (
    <div class="header">
       <div class="header-container">
            <div class="profile-section">
              <a href="#">
                <img class="profile-image"
                  src={img3}
                />
              </a>
              <p class="profile-text">
                Student
              </p>
            </div>
            <div class="arrows">
            <img
              src={img1}
              alt="Left Arrow"
              class="arrow-left"
            />
            <img
              src={img2}
              alt="Right Arrow"
              class="arrow-right"
            />
            </div>
        </div>
            <button class="logout-button">Logout</button>
      
    </div>
  )
}