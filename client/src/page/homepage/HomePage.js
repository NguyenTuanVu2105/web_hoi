import React, {  useState } from 'react'
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
    const [isLoading, setLoading] = useState(false)

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
                    setLoading
                }}>
                    <div className="content-right" >
                        <Slideshow/>
                        <Breadcrumb style={{ paddingLeft: 25, paddingTop: 10 }}>{breadcrumb}</Breadcrumb>
                        {renderRoutes(props.route.routes)}
                        <ChangePass/>
                    </div>
                </HomepageContext.Provider>
            </div>
        </div>
    )
}

export default withRouter(HomePage)
