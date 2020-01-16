import HomePage from '../page/HomePage';
import ProFileLeft from "../page/ProFile";
import LearningAndActivities from "../page/learningAndActivities";

const routes = [
    {
        path: '/',
        component: HomePage,
        routes: [
            {
                path: "/profile",
                component: ProFileLeft,
                breadcrumbName: 'home',
            },
            {
                path: "/learn",
                component: LearningAndActivities,
                breadcrumbName: 'learn',
            },
        ]
    },
]

export default routes