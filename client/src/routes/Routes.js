import LoginContainer from "../app/login/components/LoginContainer"
import RegisterContainer from "../app/register/components/RegisterContainer"
import Paths from "./Paths"
import App from "../App"

const routes = [
    {
        path: Paths.HomePage,
        exact: true,
        component: App
    },
    {
        path: Paths.Login,
        exact: true,
        component: App
    },
    {
        path: Paths.Register,
        exact: true,
        component: App
    },
]

export default routes