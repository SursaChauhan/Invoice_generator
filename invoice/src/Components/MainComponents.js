import React from 'react';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import './MainComponent.css';

const MainComponent = () => {
  return (
    <div className="main-container">
      <LeftComponent />
      <RightComponent />
    </div>
  );
};

export default MainComponent;
