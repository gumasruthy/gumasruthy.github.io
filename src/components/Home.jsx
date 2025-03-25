// Home.jsx
import frontPic from '/src/assets/frontPic.jpeg';
import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const handleDownloadResume = () => {
    // Replace with your actual resume link
    const resumeUrl = 'https://drive.google.com/file/d/1C1VNDmxhrwBBrbt5FgTwVlJbG8zfUPc6/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  return (
    <div id="home" className="home-container">
      <header className="home-header">
        <div className="home-content">
          <div className="home-text">
            <p className="greeting">Hey, there 👋</p>
            <h1>I'm <span className="highlight">Uma Sruthy Gajula</span></h1>
            <h2>Software Engineer in FinTech Services</h2>
            <p className="subtitle">
              I'm a Master's student in Computer Science at Virginia Tech. I bring with me 3 years of experience at Oracle, where I designed banking screens for clients like HSBC, PNB, and K-Banks across Hong Kong, Singapore, Malaysia, and Luxembourg. I code in C++, Java and JavaScript, and I'm comfortable with Oracle Database and PL/SQL.
            </p>
            <div className="cta-buttons">
              <button 
                className="resume-button" 
                onClick={handleDownloadResume}
                aria-label="Download Resume"
              >
                <FontAwesomeIcon icon={faDownload} className="download-icon" />
                Download Resume
              </button>
            </div>
          </div>
          <div className="home-image">
            <div className="image-wrapper">
              <img
                src={frontPic} 
                alt="Uma Sruthy Gajula"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;