import HomePage from '../page/HomePage';
import ProFileLeft from "../page/ProFile";
import LearningAndActivities from "../page/learningAndActivities";

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
        ]
    },
]

export default routes