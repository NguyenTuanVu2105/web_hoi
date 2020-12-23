import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import MainLayout from "../layouts";
import { MemberProfile, LearnAndActivity } from "../pages/MemberRecord";
import { Dashboard, History, Leader } from "../pages/Organizational";

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
      {
        path: "/ho-so-to-chuc",
        exact: true,
        component: Dashboard,
      },
      {
        path: "/ho-so-ca-nhan",
        exact: true,
        component: MemberProfile,
      },
      {
        path: "/hoc-tap-va-hoat-dong",
        exact: true,
        component: LearnAndActivity,
      },
      {
        path: "/lich-su-hoi",
        exact: true,
        component: History,
      },
      {
        path: "/lanh-dao-qua-cac-thoi-ky",
        exact: true,
        component: Leader,
      },
    ],
  },
];

export default routes;
