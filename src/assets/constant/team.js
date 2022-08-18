const TEAM_LIST = [{
    coverImg: 'lzy.jpg',
    name: '蓝芷怡',
    link: [
        {
            type: "bilibili",
            value: "https://m.bilibili.com/space/297326"
        },
        {
            type: "github",
            value: "https://github.com/KazeLiu"
        }
    ],
    jobs: [
        {
            type: "founder",
            value: "创始人"
        },
        {
            type: "front",
            value: "插件开发"
        },
        {
            type: "android",
            value: "安卓开发"
        },
        {
            type: "web",
            value: "前端开发"
        }
    ]
},
    {
        coverImg: 'lwt.png',
        name: '洛梧藤',
        link: [
            {
                type: "bilibili",
                value: "https://space.bilibili.com/111144238"
            },
            {
                type: "github",
                value: "https://github.com/lwt-414"
            }
        ],
        jobs: [
            {
                type: "leader",
                value: "站长"
            },
            {
                type: "front",
                value: "插件开发"
            },
            {
                type: "application",
                value: "后台管理开发"
            },
            {
                type: "backend",
                value: "后端开发"
            }
        ]
    },
    {
        coverImg: 'ys.jpg',
        name: '云闪',
        link: [
            {
                type: "github",
                value: "https://github.com/Yun-Shan"
            }
        ],
        jobs: [
            {
                type: "front",
                value: "插件开发"
            },
            {
                type: "backend",
                value: "后端开发"
            }
        ]
    },
    {
        coverImg: 'qe.jpg',
        name: '不画涩图の企鹅',
        link: [
            {
                type: "bilibili",
                value: "https://m.bilibili.com/space/22729849"
            }
        ],
        jobs: [
            {
                type: "art",
                value: "美工"
            },
            {
                type: "ui",
                value: "UI设计"
            }
        ]
    },
    {
        coverImg: 'qxnj.jpg',
        name: '凊弦凝绝',
        link: [
            {
                type: "github",
                value: "https://github.com/Goodjooy"
            }
        ],
        jobs: [
            {
                type: "backend",
                value: "后端开发"
            }
        ]
    },
    {
        coverImg: 'chh.png',
        name: '新田rabbit',
        link: [
            {
                type: "bilibili",
                value: "https://space.bilibili.com/672914"
            }
        ],
        jobs: [
            {
                type: "spokes",
                value: "B站运营"
            }
        ]
    },
    {
        coverImg: 'mao.jpg',
        name: '98年生的猫',
        link: [
            {
                type: "personal",
                value: "https://code.felinae98.cn/"
            }
        ],
        jobs: [{
            type: "operation",
            value: "运维"
        }]
    },
    {
        coverImg: 'lx.jpg',
        name: '黎夏',
        link: [
            {
                type: "bilibili",
                value: "https://space.bilibili.com/806956"
            }
        ],
        jobs: [
            {
                type: "ui",
                value: "UI设计"
            }
        ]
    },
    {
        coverImg: 'cc.jpg',
        name: 'idealclover',
        link: [
            {
                type: "personal",
                value: "https://idealclover.top"
            },
            {
                type: "github",
                value: "https://github.com/idealclover"
            }
        ],
        jobs: [
            {
                type: "ios",
                value: "IOS开发"
            },
            {
                type: "product",
                value: "产品"
            }
        ]
    },
    {
        coverImg: 'wyx.jpg',
        name: '饼?我tm吃吃吃',
        link: [],
        jobs: [
            {
                type: "help",
                value: "数据整理"
            }
        ]
    }];

const JOBS_ICON = [{
    type: 'bilibili',
    iconName: 'fa-brands fa-bilibili'
}, {
    type: 'github',
    iconName: 'fa-brands fa-github'
}, {
    type: 'founder',
    iconName: 'mdi mdi-account-heart'
}, {
    type: 'front',
    iconName: 'mdi mdi-puzzle'
}, {
    type: 'android',
    iconName: 'mdi mdi-android'
}, {
    type: 'web',
    iconName: 'mdi mdi-web-sync'
}, {
    type: 'leader',
    iconName: 'mdi mdi-account-group'
}, {
    type: 'backend',
    iconName: 'mdi mdi-box-shadow'
}, {
    type: 'art',
    iconName: 'fa fa-palette'
}, {
    type: 'ui',
    iconName: 'fa fa-pencil'
}, {
    type: 'spokes',
    iconName: 'fa fa-microphone'
}, {
    type: 'operation',
    iconName: 'fa fa-server'
}, {
    type: 'product',
    iconName: 'mdi mdi-head-snowflake'
}, {
    type: 'ios',
    iconName: 'fa-brands fa-apple'
}, {
    type: 'help',
    iconName: 'fa fa-people-carry-box'
}, {
    type: 'personal',
    iconName: 'mdi mdi-post'
}, {
    type: 'application',
    iconName: 'mdi mdi-application-settings'
}]

export {TEAM_LIST, JOBS_ICON}