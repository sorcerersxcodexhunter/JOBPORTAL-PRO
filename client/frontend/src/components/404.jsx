import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; 
import Notfound from '../assets/404.NotFound.png'; 

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-image-wrapper">
          <img 
            src={Notfound}
            alt="404 Not Found - Cartoon Animals"
            className="notfound-image animated"
          />
        </div>
        <h1 className="notfound-title gradient-text">404 - Page Not Found</h1>
        <p className="notfound-text">Oops! These animals can't find the page either.<br />Try going back to the homepage or use the search bar above.</p>
        <Link to="/" className="notfound-button">Go to Homepage</Link>
        <div className="notfound-shadow"></div>
      </div>
    </div>
  );
};

export default NotFound;
