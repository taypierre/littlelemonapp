import React from 'react';
import image from 'images/littlelemonlogo.png';

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <img src={image} alt="Little Lemon Logo" />
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order-online">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Header;