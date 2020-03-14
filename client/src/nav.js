export const navs = [
    {
        id:"0",
        Id1: "#collapse1",
        Id2: "collapse1",
        name: "HỒ SƠ TỔ CHỨC",   
        IconID: 'icon1',     
        children: [
            {
                id: "1",
                name: "HỒ SƠ TỔ CHỨC",
                href : "/OrganizationalRecords",
            }
        ]
    },
    {
        id:"1",
        Id1: "#collapse2",
        Id2: "collapse2",
        name: "HỒ SƠ THÀNH VIÊN",
        IconID: 'icon2', 
        children: [
            {
                id: "hoso",
                name: "HỒ SƠ CÁ NHÂN",
                href: "/profile"
            }, 
            {
                id: "hoctap",
                name: "HỌC TẬP VÀ HOẠT ĐỘNG",
                href:"/learn"
            }
        ]
    },
    {
        id:"2",
        Id1: "#collapse3",
        Id2: "collapse3",
        name: "ĐÁNH GIÁ NĂNG LỰC",
        IconID: 'icon3', 
        children: [
            {
                id: "1",
                name: ""
            },

        ]
    },
    {
        id:"3",
        Id1: "#collapse4",
        Id2: "collapse4",
        name: "TỔ CHỨC SỰ KIỆN",
        IconID: 'icon4', 
        children: [
            {
                id: "1",
                name: ""
            },

        ]
    },
    {
        id:"4",
        Id1: "#collapse5",
        Id2: "collapse5",
        name: "HỌC TẬP VÀ VIỆC LÀM",
        IconID: 'icon5', 
        children: [
            {
                id: "1",
                name: ""
            },

        ]
    },
    {
        id:"5",
        Id1: "#collapse6",
        Id2: "collapse6",
        name: "Ý TƯỞNG VÀ GÓP Ý",
        IconID: 'icon6', 
        children: [
            {
                id: "1",
                name: ""
            },

        ]
    },
    {
        id:"6",
        Id1: "#collapse8",
        Id2: "collapse8",
        name: "ADMIN",
        IconID: 'icon8', 
        children: [
            {
                id: "1",
                id: "tracuu",
                name: "TRA CỨU THÀNH VIÊN",
                href: "/TableSearch"
            },
            {
                id: "2",
                name: "THÊM ĐƠN VỊ",
                href: '/AUDUnit'
            },
            {
                id: "3",
                name: "THAY ĐỔI BACKGROUND",
                href: '/ChangeBackground'
            }
        ]
    },
]