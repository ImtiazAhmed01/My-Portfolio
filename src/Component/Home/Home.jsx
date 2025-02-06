import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import SkillCard from './skillCard';
import Projects from './Projects';

const Home = () => {
    return (
        <div className='bg-black'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <SkillCard></SkillCard>
            <Projects></Projects>
        </div>
    );
};

export default Home;