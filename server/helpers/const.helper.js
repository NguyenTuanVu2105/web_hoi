const ApiConst = {};
// Auth
ApiConst.LOGIN = "/api/login";
ApiConst.FORGET_PASSWORD = "/api/forgetpassword";
ApiConst.RESET_PASSWORD = "/api/newpassword";
ApiConst.CHANGE_PASSWORD = "/api/user/edit/password";
ApiConst.CHECK_TOKEN = "/api/token/check";

// Admin
ApiConst.ADMIN_GET_CLUB_ALL = "/api/information/club/all";
ApiConst.ADMIN_EDIT_PROFILE_MEMBER = "/api/admin/edit/member/information";
ApiConst.ADMIN_VIEW_PROFILE_MEMBER = "/api/admin/view/member/information?id=";
ApiConst.ADMIN_EDIT_AVATAR_MEMBER = "/api/admin/upload/avatar";
ApiConst.ADMIN_EDIT_ROLES = "/api/admin/edit/roles";
ApiConst.ADMIN_GET_ROLES = "/api/admin/view/roles?userId=";
ApiConst.ADMIN_GET_ACTIVITY = "/api/admin/activity/view?id=";
ApiConst.ADMIN_GET_LEARN_AND_ACTIVITY = "/api/admin/la/view?id=";
ApiConst.ADMIN_EDIT_LEARN_AND_ACTIVITY = "/api/admin/la/edit";
ApiConst.ADMIN_POST_MEMBER = "/api/admin/information/add";
ApiConst.ADMIN_GET_TABLE_MEMBER = "/api/admin/view/member";
ApiConst.GET_POSITION = "/api/admin/position/view";
ApiConst.GET_SPECIALIZED = "/api/admin/specialized/view";

// Association
ApiConst.GET_ASSOCIATION = "/api/admin/view/association";
ApiConst.EDIT_ASSOCIATION = "/api/admin/update/association";
ApiConst.GET_PDF = "/api/introduction";
ApiConst.EDIT_PDF = "/api/update/introduction";
ApiConst.EDIT_PDF_HISTORY = "/api/update/history";
ApiConst.EDIT_LINK_TEST = "/api/update/link-test";
ApiConst.GET_LINK_TEST = "/api/link-test";
ApiConst.GET_LEADER_ALL = "/api/association/leader/all";

// Background
ApiConst.GET_SLIDE_SHOW_BACKGROUND = "/api/slideshowbackground";
ApiConst.GET_ALL_BACKGROUND = "/api/viewbackground";
ApiConst.EDIT_BACKGROUND = "/api/editbackground";
ApiConst.GET_ONE_BACKGROUND = "/api/one/background?backgroundId=";
ApiConst.GET_BACKGROUND = "/api/background/";
ApiConst.DELETE_BACKGROUND = "/api/deletebackground";
ApiConst.UPLOAD_BACKGROUND = "/api/upload/background";

// Profile
ApiConst.GET_MEMBER_PROFILE = "/api/user/information/member";
ApiConst.EDIT_MEMBER_PROFILE = "/api/user/information/edit";
ApiConst.GET_AVATAR = "/api/avatar/";
ApiConst.UPLOAD_AVATAR = "/api/upload/avatar";
ApiConst.GET_LEARN_AND_ACTIVITY = "/api/learnactivity/view";
ApiConst.EDIT_LEARN_AND_ACTIVITY = "/api/learnactivity/edit";
ApiConst.GET_ACTIVITY = "/api/activity/view";

// Unit
ApiConst.GET_UNIT_ALL = "/api/branch/club/all";
ApiConst.GET_UNIT_DETAIL = "/api/information/branch?machihoi=";
ApiConst.EDIT_UNIT = "/api/admin/edit/branch";
ApiConst.POST_UNIT = "/api/admin/add/branch";
ApiConst.EDIT_CLUB = "/api/admin/edit/club";
ApiConst.GET_CLUB = "/api/information/club?madoi=";
ApiConst.POST_CLUB = "/api/admin/add/club";

module.exports = ApiConst;
