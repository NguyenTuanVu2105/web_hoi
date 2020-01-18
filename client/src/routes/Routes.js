import HomePage from '../page/HomePage';
import ProFileLeft from "../page/ProFile";
import LearningAndActivities from "../page/learningAndActivities";
import SearchUnit from '../page/SearchUnit';
import TeamLeader from '../page/TeamLeader';
import AddUnit from '../page/AddUnit'
import OrganizationalRecords from '../page/OrganizationalRecords'

const routes = [
    {
        component: HomePage,
        routes: [
            {
                path: "/",
                exact: true,
                component: ProFileLeft,
            },
            {
                path: "/profile",
                exact: true,
                component: ProFileLeft,
            },
            {
                path: "/learn",
                exact: true,
                component: LearningAndActivities,
            },
            {
                path: "/SearchUnit",
                exact: true,
                component: SearchUnit,
            },
            {
                path: "/TeamLeader",
                exact: true,
                component: TeamLeader,
            },
            {
                path: "/OrganizationalRecords",
                exact: true,
                component: OrganizationalRecords,
            },
            {
                path: "/AddUnit",
                exact: true,
                component: AddUnit,
            }
        ]
    },
]

export default routes