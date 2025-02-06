import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import SkillCard from './skillCard';

const Home = () => {
    return (
        <div className='bg-black'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <SkillCard></SkillCard>
        </div>
    );
};

export default Home;