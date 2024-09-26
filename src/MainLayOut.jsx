import React from 'react';
import Header from './Header';
import AboutSection from './AboutSection';
import HighlightedProjects from './HightlightedProjects';
import ContactSection from './ContactSection';
import EducationSection from './EducationSection';
import Footer from './Footer';

const MainLayOut = () => {
    return (
        <div>
           <Header></Header>
           <AboutSection></AboutSection> 
           <HighlightedProjects></HighlightedProjects>
           <EducationSection></EducationSection>
           <ContactSection></ContactSection>
           <Footer></Footer>
        </div>
    );
};

export default MainLayOut;