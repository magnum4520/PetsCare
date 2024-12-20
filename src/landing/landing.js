import React from 'react';
import TopSection from "./TopSection/topSection";
import './landing.scss'
import {MainSection} from "./MainSection/mainSection";
import 'typeface-inter'


const Landing = () => {
    return (
        <div className="landing">
            <TopSection />
            <MainSection/>
        </div>
    )
};

export default Landing;