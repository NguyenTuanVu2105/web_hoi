import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import MainLayout from "../layouts";
import { MemberProfile } from "../pages/MemberRecord";

const routes = [
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/cap-nhat-mat-khau/:token",
    exact: true,
    component: ResetPassword,
  },
  {
    component: MainLayout,
    routes: [
      {
        path: "/",
        exact: true,
        component: MemberProfile,
      },
    ],
  },
];

export default routes;
