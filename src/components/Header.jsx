import React from 'react';
import './components.css'

const Header = () => {
  return (
    <div className="upperbuttons">
      <ul className="cuul">
        <li className="licu"><a href="/" className="top-button">HOME</a></li>
        <li className="licu"><a href="/gallery" className="top-button">GALLERY</a></li>
        <li className="licu"><a href="/contactus" className="top-button">CONTACT US</a></li>
      </ul>
    </div>
  );
};

export default Header;
