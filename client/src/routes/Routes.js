import HomePage from '../page/HomePage';
import ProFileLeft from "../page/ProFile";
import LearningAndActivities from "../page/learningAndActivities";
import SearchUnit from '../page/SearchUnit';
import TeamLeader from '../page/TeamLeader';
import AddUnit from '../page/AddUnit'
import OrganizationalRecords from '../page/OrganizationalRecords'
import TableSearch from '../page/TableSearch'
import signIn from '../page/signIn'
import AUDUnit from '../page/AUDUnit'
import introduleBlood from '../page/introduleBlood'
import introduleBloodDisplay from '../page/introduleBloodDisplay'

const routes = [
    {
        path: "/login",
        exact: true,
        component: signIn
    },
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
            },
            {
                path: "/TableSearch",
                exact: true,
                component: TableSearch,
            },
            {
                path: "/AUDUnit",
                exact: true,
                component: AUDUnit,
            },
            {
                path: "/introduleBlood",
                exact: true,
                component: introduleBlood,
            },
            {
                path: "/introduleBloodDisplay",
                exact: true,
                component: introduleBloodDisplay,
            },
        ]
    },
]

export default routes