import React, {useEffect, useState} from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter } from "react-router-dom";
import NavBar from './component/navbar/NavBar';
import { Breadcrumb } from "antd";
import _ from 'lodash';
import HomepageContext from "../../context/HomepageContext";
import { checkAuth } from '../../api/auth/auth';
import Slideshow from './component/header/slideshowHeader';
import Loading from './component/loading/Spin';
import ChangePass from './component/change-password/ChangePass'
import './Homepage.css'
import {getSlideShowBackground} from "../../api/base/background";
function HomePage(props) {
    if (!checkAuth()) {
        props.history.push('/login')
    }
    const [nameMap, setNameMap] = useState({})
    const [background, setBackground] = useState([])
    const [isLoading, setLoading] = useState(false)

    const fetchBackgroundData = async () => {
        const result = await getSlideShowBackground()
        if (result) {
            if (result.data.success) {
                setBackground(result.data.data)
            }
        }
    }

    useEffect(() => {
        fetchBackgroundData()
    }, [])

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
            {isLoading && <Loading/>}
                <div className="menu-left">
                    <NavBar />
                </div>
                <HomepageContext.Provider value={{
                    nameMap,
                    setNameMap,
                    isLoading,
                    setLoading,
                    background,
                    fetchBackgroundData
                }}>
                    <div className="content-right" >
                        <Slideshow background={background}/>
                        <Breadcrumb className="bread-crumb-s">{breadcrumb}</Breadcrumb>
                        {renderRoutes(props.route.routes)}
                        <ChangePass/>
                    </div>
                </HomepageContext.Provider>
            </div>
        </div>
    )
}

export default withRouter(HomePage)
