// Auth
export const LOGIN = "/api/login";
export const FORGET_PASSWORD = "/api/forgetpassword";
export const RESET_PASSWORD = "/api/newpassword";
export const CHANGE_PASSWORD = "/api/user/edit/password";
export const CHECK_TOKEN = "/api/token/check";

// Admin
export const ADMIN_GET_CLUB_ALL = "/api/information/club/all";
export const ADMIN_EDIT_PROFILE_MEMBER = "/api/admin/edit/member/information";
export const ADMIN_VIEW_PROFILE_MEMBER =
  "/api/admin/view/member/information?id=";
export const ADMIN_EDIT_AVATAR_MEMBER = "/api/admin/upload/avatar";
export const ADMIN_EDIT_ROLES = "/api/admin/edit/roles";
export const ADMIN_GET_ROLES = "/api/admin/view/roles?userId=";
export const ADMIN_GET_ACTIVITY = "/api/admin/activity/view?id=";
export const ADMIN_GET_LEARN_AND_ACTIVITY = "/api/admin/la/view?id=";
export const ADMIN_EDIT_LEARN_AND_ACTIVITY = "/api/admin/la/edit";
export const ADMIN_POST_MEMBER = "/api/admin/information/add";
export const ADMIN_GET_TABLE_MEMBER = "/api/admin/view/member";
export const GET_POSITION = "/api/admin/position/view";
export const GET_SPECIALIZED = "/api/admin/specialized/view";

// Association
export const GET_ASSOCIATION = "/api/admin/view/association";
export const EDIT_ASSOCIATION = "/api/admin/update/association";
export const GET_PDF = "/api/introduction";
export const EDIT_PDF = "/api/update/introduction";
export const EDIT_PDF_HISTORY = "/api/update/history";
export const EDIT_LINK_TEST = "/api/update/link-test";
export const GET_LINK_TEST = "/api/link-test";
export const GET_LEADER_ALL = "/api/association/leader/all";

// Background
export const GET_SLIDE_SHOW_BACKGROUND = "/api/slideshowbackground";
export const GET_ALL_BACKGROUND = "/api/viewbackground";
export const EDIT_BACKGROUND = "/api/editbackground";
export const GET_ONE_BACKGROUND = "/api/one/background?backgroundId=";
export const GET_BACKGROUND = "/api/background/";
export const DELETE_BACKGROUND = "/api/deletebackground";
export const UPLOAD_BACKGROUND = "/api/upload/background";

// Profile
export const GET_MEMBER_PROFILE = "/api/user/information/member";
export const EDIT_MEMBER_PROFILE = "/api/user/information/edit";
export const GET_AVATAR = "/api/avatar/";
export const UPLOAD_AVATAR = "/api/upload/avatar";
export const GET_LEARN_AND_ACTIVITY = "/api/learnactivity/view";
export const EDIT_LEARN_AND_ACTIVITY = "/api/learnactivity/edit";
export const GET_ACTIVITY = "/api/activity/view";

// Unit
export const GET_UNIT_ALL = "/api/branch/club/all";
export const GET_UNIT_DETAIL = "/api/information/branch?machihoi=";
export const EDIT_UNIT = "/api/admin/edit/branch";
export const POST_UNIT = "/api/admin/add/branch";
export const EDIT_CLUB = "/api/admin/edit/club";
export const GET_CLUB = "/api/information/club?madoi=";
export const POST_CLUB = "/api/admin/add/club";
