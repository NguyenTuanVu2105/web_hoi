export const OrganizationalRecordsList = [
    {
        name : "HỘI MÁU",
        child : [
            {
                name : "Giới thiệu về Hội",
                href:'/introduleBlood',
                id: 'introdule'
            },
            {
                name : "Lịch sử Hội",
                href:'/HistoryBlood',
                id: 'history'
            },
            {
                name : "Lãnh đạo qua các thời kỳ",
                href : "/TeamLeader",
                id: 'teamleader'
            },
            {
                name : "Báo cáo công tác Hội",
                id: 'report'
            }
        ]
    },
    {
        name: "ĐƠN VỊ TRỰC THUỘC",
        child : [
            {
                name : "Hồ sơ đơn vị",
                href : "/SearchUnit",
                id: 'searchunit'
            },
            {
                name : "Đơn vị mới",
                href : "/AUDUnit",
                id: 'addunit'
            },
            // {
            //     name : "Tra cứu thông tin đơn vị",
            //     href : "/TableSearch"
            // },
            {
                name : "In danh sách đơn vị",
                id: 'printlist'
            }
        ]
    }
]