import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import MainLayout from "../layouts";
import { MemberProfile, LearnAndActivity } from "../pages/MemberRecord";
import {
  Dashboard,
  History,
  Leader,
  Introduction,
  UnitRecord,
  UnitDetail,
  Club,
} from "../pages/Organizational";
import {
  ManageMember,
  ManageExam,
  ManageUnit,
  ManageBackground,
} from "../pages/Admin";

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
        path: "/lich-su-hoi",
        exact: true,
        component: History,
      },
      {
        path: "/gioi-thieu-ve-hoi",
        exact: true,
        component: Introduction,
      },
      {
        path: "/lanh-dao-qua-cac-thoi-ky",
        exact: true,
        component: Leader,
      },
      {
        path: "/ho-so-don-vi",
        exact: true,
        component: UnitRecord,
      },
      {
        path: `/ho-so-chi-hoi/:machihoi`,
        exact: true,
        component: UnitDetail,
      },
      {
        path: `/ho-so-doi-mau/:madoi`,
        exact: true,
        component: Club,
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
        path: "/tra-cuu-thanh-vien",
        exact: true,
        component: ManageMember,
      },
      {
        path: `/quan-ly-de-thi`,
        exact: true,
        component: ManageExam,
      },
      {
        path: "/them-don-vi",
        exact: true,
        component: ManageUnit,
      },
      {
        path: "/thay-doi-background",
        exact: true,
        component: ManageBackground,
      },
    ],
  },
];

export default routes;
