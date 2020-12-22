import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import MainLayout from "../layouts";
import { MemberProfile } from "../pages/MemberRecord";
import {
  OrganizationalRecords
} from "../pages/Organizational";
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
        component: OrganizationalRecords,
      },
    ],
  },
];

export default routes;
