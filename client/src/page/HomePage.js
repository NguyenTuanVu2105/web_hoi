import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { renderRoutes } from 'react-router-config'
import { Link, withRouter } from "react-router-dom";
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
import { Breadcrumb, Input } from "antd";
import _ from 'lodash';
import HomepageContext from "../context/HomepageContext";
import { checkAuth } from '../api/auth/auth';
import Slideshow from '../Component/slideshowHeader';
import Loading from '../Component/Spin';
import ChangeInfUser from '../Component/ChangeInfUser'

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
            {isLoading && <Loading></Loading>}
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
                        {/* <Header /> */}
                        {/*<HorizontalMenu />*/}
                        <Breadcrumb style={{ paddingLeft: 25, paddingTop: 10 }}>{breadcrumb}</Breadcrumb>
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
                        {/* <ChangeInfUser/> */}
                        <div >
                            <div className="modal fade" id="modalMK" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4>Đổi mật khẩu</h4>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <input type="text" className="changePass" placeholder="Mật khẩu cũ" />
                                                <input type="text" className="changePass" placeholder="Mật khẩu mới" />
                                                <input type="text" className="changePass" placeholder="Xác nhận lại mật khẩu" />
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" className="footerButton" data-dismiss="modal">Lưu thay đổi</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </HomepageContext.Provider>
            </div>
        </div>
    )
}

export default withRouter(HomePage)
