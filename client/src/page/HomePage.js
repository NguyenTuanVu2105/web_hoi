import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Component/NavBar';
import ProFileLeft from './ProFile';
import Header from '../Component/Header';
import HorizontalMenu from '../Component/HorizontalMenu';
import LearningAndActivities from '../page/learningAndActivities';
import AddUnit from '../page/AddUnit'
import TeamLeader from '../page/TeamLeader'
import SearchUnit from '../page/SearchUnit'

function HomePage(props) {
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 menu-left">
                    <NavBar/>
                </div>
                <div className="col-10 content-right " >
                    <Header />
                    <HorizontalMenu />
                    {/* <LearningAndActivities /> */}
                    {/* <ProFileLeft /> */}
                    {/* <AddUnit/> */}
                    <TeamLeader/>
                    <SearchUnit/>
                </div>
            </div>
        </div>
    )
}

export default HomePage
