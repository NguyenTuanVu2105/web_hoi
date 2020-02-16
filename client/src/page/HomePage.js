import React, {useEffect, useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {renderRoutes} from 'react-router-config'
import {Link, withRouter} from "react-router-dom";
import NavBar from '../Component/NavBar';
// import ProFileLeft from './ProFile';
import Header from '../Component/Header';
// import HorizontalMenu from '../Component/HorizontalMenu';
// import LearningAndActivities from '../page/learningAndActivities';
// import AddUnit from '../page/AddUnit'
// import TeamLeader from '../page/TeamLeader'
// import SearchUnit from '../page/SearchUnit'
// import OrganizationalRecords from '../page/OrganizationalRecords'
// import SearchItem from '../page/SearchItem'
// import TableSearch from '../page/TableSearch'
import signIn from '../page/signIn'
import {Breadcrumb, Input} from "antd";
import _ from 'lodash';
import HomepageContext from "../context/HomepageContext";
import { checkAuth } from '../api/auth/auth';


function HomePage(props) {
    const [nameMap, setNameMap] = useState({})
    if (!checkAuth()) {
        props.history.push('/login')
    }

    const breadcrumb = _.map(nameMap, (name, url) => {
        return (
            <Breadcrumb.Item key={url}>
                <a href={url}>{name}</a>
            </Breadcrumb.Item>
        )
    })

    
    
    return (
        <div className="container-fluid">
            <div className="row homePageBlood">
                <div className="menu-left">                   
                    <NavBar/>
                </div>
                <HomepageContext.Provider value={{
                    nameMap,
                    setNameMap
                }}>
                    <div className="content-right" >
                        
                        <Header/>
                        {/*<HorizontalMenu />*/}                      
                        <Breadcrumb style={{paddingLeft:25, paddingTop:10}}>{breadcrumb}</Breadcrumb>
                        {renderRoutes(props.route.routes)}
                        {/* <LearningAndActivities /> */}
                        {/* <ProFileLeft />
                        <AddUnit/>
                        <TeamLeader/>
                        <SearchUnit/>
                        <OrganizationalRecords/> */}
                        {/* <SearchItem/> */}
                        {/* <TableSearch/> */}
                        {/* <signIn/> */}
                    </div>
                </HomepageContext.Provider>
            </div>
        </div>
    )
}

export default withRouter(HomePage)
