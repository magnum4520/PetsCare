import React from 'react';
import TopSection from "./TopSection/topSection";
import './landing.scss'
import {MainSection} from "./MainSection/mainSection";
import 'typeface-inter'
import {BottomSection} from "./BottomSection/bottomSection";


const Landing = () => {
    return (
        <div className="landing">
            <TopSection/>
            <MainSection/>
            <BottomSection/>
        </div>
    )
};

export default Landing;