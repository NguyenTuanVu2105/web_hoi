export const OrganizationalRecordsList = [
    {
        key: "O-1",
        name : "HỘI MÁU",
        child : [
            {
                key:"O-11",
                name : "Giới thiệu về Hội",
                href:'/introduleBlood',
                id: 'introdule'
            },
            {
                key:"O-12",
                name : "Lịch sử Hội",
                href:'/HistoryBlood',
                id: 'history'
            },
            {
                key:"O-13",
                name : "Lãnh đạo qua các thời kỳ",
                href : "/TeamLeader",
                id: 'teamleader'
            },
            {
                key:"O-14",
                name : "Báo cáo công tác Hội",
                id: 'report'
            }
        ]
    },
    {
        key:"O-2",
        name: "ĐƠN VỊ TRỰC THUỘC",
        child : [
            {
                key:"O-21",
                name : "Hồ sơ đơn vị",
                href : "/SearchUnit",
                id: 'searchunit'
            },
            {
                key:"O-22",
                name : "In danh sách đơn vị",
                id: 'printlist'
            }
        ]
    }
]