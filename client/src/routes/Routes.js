import HomePage from '../page/homepage/HomePage';
import ProFileLeft from "../page/member/infomation/Profile";
import LearningAndActivities from "../page/member/learning-activity/LearningAndActivities";
import UnitProfile from '../page/organization/component/unit/UnitProfile';
import TeamLeader from '../page/organization/component/leader/TeamLeader';
import AddUnit from '../page/organization/component/unit/UnitDetail'
import OrganizationalProfile from '../page/organization/OrganizationalProfile'
import TableSearch from '../page/admin/search-member/MemberSearch'
import signIn from '../page/login/Login'
import AddUnitClub from '../page/admin/add-unit/AddUnitClub'
import introduleBlood from '../page/organization/component/introduce/IntroduceBlood'
import introduleBloodDisplay from '../page/organization/component/introduce/component/IntroduleBloodDisplay'
import HistoryBlood from '../page/organization/component/history/HistoryBlood'
import ChangeBackground from '../page/admin/change-background/ChangeBackground'
import ChiHoi from '../page/ChiHoi'
import ResetPassword from '../page/reset-password/ResetPassword'
import TestUnit from "../page/member/Test/index"
const routes = [
    {
        path: "/login",
        exact: true,
        component: signIn
    },
    {
        path: "/cap-nhat-mat-khau/:token",
        exact: true,
        component: ResetPassword
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
                path: "/ho-so-ca-nhan",
                exact: true,
                component: ProFileLeft,
            },
            {
                path: "/hoc-tap-va-hoat-dong",
                exact: true,
                component: LearningAndActivities,
            },
            {
                path: "/ho-so-don-vi",
                exact: true,
                component: UnitProfile,
            },
            {
                
                path: "/lanh-dao-qua-cac-thoi-ky",
                exact: true,
                component: TeamLeader,
            },
            {
                path: "/ho-so-to-chuc",
                exact: true,
                component: OrganizationalProfile,
            },
            {
                path: `/ho-so-doi-mau/:madoi`,
                exact: true,
                component: AddUnit,
            },
            {
                path: "/tra-cuu-thanh-vien",
                exact: true,
                component: TableSearch,
            },
            {
                path: "/them-don-vi",
                exact: true,
                component: AddUnitClub,
            },
            {
                path: "/gioi-thieu-ve-hoi",
                exact: true,
                component: introduleBlood,
            },
            {
                path: "/gioi-thieu-ve-hoi-chi-tiet",
                exact: true,
                component: introduleBloodDisplay,
            },
            {
                path: "/lich-su-hoi",
                exact: true,
                component: HistoryBlood,
            },
            {
                path: "/thay-doi-background",
                exact: true,
                component: ChangeBackground,
            },
            {
                path: `/ho-so-chi-hoi/:machihoi`,
                exact: true,
                component: ChiHoi,
            },
            {
                path: `/kiem-tra-danh-gia`,
                exact: true,
                component: TestUnit,
            }
        ]
    },
]

export default routes