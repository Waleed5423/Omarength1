import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-container">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>
    </div>
  );
}

export default Loader;
