import React from "react";
import { BrowserRouter as Router, Route, Routes, Link ,useNavigate } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebookF, FaGithub } from "react-icons/fa";
import "../styles/Header.css";
import profileImg from "../assets/profile-photo.jpg";
import { useState } from 'react';

const user = {
  name:'Tanuja Tiwari',
  profession:'Frontend Developer Since 3 Years',
}

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>I'm a button</button>
  );
}

const HeaderFun = () => {
  return (
    <Router>
      <header className="header">
        <div className="panel-main">
          <div className="panel">
            <div className="pannelContainer">
              <a href="/">
                <img src={profileImg} alt="Profile" />
                <span>{user.name}</span>
              </a>
              <div className="profession">{user.profession}</div>
              <ul className="navigation">
                <li className="navigation__item">
                  <Link className="blog-button">About Me</Link>
                </li>
                <li className="navigation__item">
                  <a href="/skills/" title="link to Skills" className="blog-button">Skills</a>
                </li>
              </ul>
              <MyButton />
              <ul className="navigationList">
                <li className="navigationBtn">
                  <a href="http://twitter.com/anshulrohilla" title="@anshulrohilla on Twitter" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={22} color="#fff" />
                  </a>
                </li>
                <li className="navigationBtn">
                  <a href="https://www.linkedin.com/in/tanujatiwarii" title="Tanuja Tiwari on LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={22} color="#fff" />
                  </a>
                </li>
                <li className="navigationBtn">
                  <a href="https://www.facebook.com/tanujatiwari" title="Tanuja Tiwari on Facebook" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF size={22} color="#fff" />
                  </a>
                </li>
                <li className="navigationBtn">
                  <a href="https://www.github.com/tanuja-tiwari" title="Tanuja Tiwari on GitHub" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={22} color="#fff" />
                  </a>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
        <div className="panel-cover--overlay"></div>
        {/* <Routes>
          <Route path="/AboutFun" element={<AboutFun />} />
        </Routes> */}
      </header>
    </Router>
  );
};

export default HeaderFun;
