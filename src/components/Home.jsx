import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './components.css'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="second-container">
        <img className="middle-photo" src="src/assets/ssrr.jpeg" alt="sorry" />
        <h1 className="apt-name">SRI SAI RAJ RESIDENCY</h1>
      </div>

      <div className="third-container">
        <h1 className="assoc">APARTMENT OWNERS ASSOCIATION</h1>
        <h2 className="sh">MANAGEMENT COMMITTEE MEMBERS</h2>
        <h3 className="posts">
          <span className="colorTwo">PRESIDENT</span> - Akhil Pittampally
        </h3>
        <h3 className="posts">
          <span className="colorTwo">VICE PRESIDENT</span> - Sameeksha Pittampally
        </h3>
        <h3 className="posts">
          <span className="colorTwo">SECRETARY</span> - Mamatha Pittampally
        </h3>
        <h3 className="posts">
          <span className="colorTwo">TREASURER</span> - Hanumanth Rao Pittampally
        </h3>
        <h2 className="sh">APARTMENT OWNERS</h2>
        <ul>
          <li className="posts">Hanumanth Rao Pittampally</li>
          <li className="posts">Prakash Alandkar</li>
          <li className="posts">Srikanth Goud</li>
          <li className="posts">Thakur Adarsh Singh</li>
          <li className="posts">Sridhar Joshi</li>
          <li className="posts">Maddibhunshans Mohan</li>
          <li className="posts">Neeraj Shukla</li>
          <li className="posts">Avinash</li>
          <li className="posts">Chanda Srinivas</li>
          <li className="posts">Santosh Joshi</li>
          <li className="posts">Vinod</li>
          <li className="posts">Builder</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
