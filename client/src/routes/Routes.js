import HomePage from '../page/HomePage';
import ProFileLeft from "../page/ProFile";
import LearningAndActivities from "../page/learningAndActivities";
import SearchUnit from '../page/SearchUnit';

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
        ]
    },
]

export default routes