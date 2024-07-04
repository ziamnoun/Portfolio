import React from 'react';
import Header from './Header';
import AboutSection from './AboutSection';
import HighlightedProjects from './HightlightedProjects';

const MainLayOut = () => {
    return (
        <div>
           <Header></Header>
           <AboutSection></AboutSection> 
           <HighlightedProjects></HighlightedProjects>
        </div>
    );
};

export default MainLayOut;