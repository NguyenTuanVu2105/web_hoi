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
            // Chưa có module báo cáo công tác hội
            // {
            //     name : "Báo cáo công tác Hội",
            //     id: 'report'
            // }
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
            //Chưa có module in danh sách đơn vị
            // {
            //     name : "In danh sách đơn vị",
            //     id: 'printlist'
            // }
        ]
    }
]