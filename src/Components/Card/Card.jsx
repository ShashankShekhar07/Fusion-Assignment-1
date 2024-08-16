import React from 'react'
import image from './zlatan.jpg'
import './Card.css'
const Card = () => {
  return (
    <div>
        <div class="card">
  <img src={image} alt="John" />
  <h1>Shashank Shekhar</h1>
  <p class="title">BTECH - 2022</p>
  <p>CSE SEM-4</p>
  <a href="#"><i class="fa fa-dribbble"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-facebook"></i></a>
  <p><button>Contact</button></p>
</div>
        </div>
)
}

export default Card