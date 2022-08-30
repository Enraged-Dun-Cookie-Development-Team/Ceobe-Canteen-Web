const INSTALL_CHROME: Object = {
    name: 'Chrome',
    icon: 'chrome.png',
    help: [{
        html: '下载插件端压缩包，并解压到任意文件夹',
        image: '',
        btn: [
            {
                text: '下载插件端压缩包',
                link: 'http://www.baidu.com'
            }, {
                text: '如果已经科学上网，点击这里跳转到Chrome应用商店',
                link: 'http://www.baidu.com'
            }]
    },
        {
            html: `点击浏览器右上角<span>自定义及控制Google Chrome(三个点)</span><br/>
            选择<span>更多工具</span><br/>点击<span>扩展程序</span>`,
            image: 'chrome/1.png',
            imageWidth: 'w-50',
            flex: 'flex-between-center'
        },
        {
            html: `点击右上角，<span>打开开发者模式</span>，并点击左边的<span>加载已解压的扩展程序</span>`,
            image: 'chrome/2.png',
            flex: 'flex-around-center flex-column'
        },
        {
            html: `选择<span>添加扩展程序</span>，选择解压后的整个插件文件夹完成安装`,
            image: 'chrome/3.png',
            tag: '安装完成后解压的那些文件不要删除了哦',
            flex: 'flex-around-center flex-column'
        },
        {
            html: `还是不会？加群带你飞！`,
            flex: 'flex-around-center flex-column',
            btn: [{
                text: '现在就加入蹲饼群！',
                link: 'http://www.baidu.com'
            }]
        }
    ]
}
const INSTALL_EDGE: Object = {
    name: 'edge浏览器',
    icon: 'edge.png',
    help: [{
        html: '下载插件端压缩包，并解压到任意文件夹',
        image: '',
        btn: [
            {
                text: '下载插件端压缩包',
                link: 'https://github.com/Enraged-Dun-Cookie-Development-Team/Dun-Cookie-Vue/releases'
            }, {
                text: '点击这里跳转edge应用商店',
                link: 'https://microsoftedge.microsoft.com/addons/detail/%E5%B0%8F%E5%88%BB%E9%A3%9F%E5%A0%82-%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E8%B9%B2%E9%A5%BC%E5%99%A8-arknight/jimmfliacfpeabcifcghmdankmdnmfmn?hl=zh-CN+%E4%BD%9C%E8%80%85%EF%BC%9A%E6%B4%9B%E6%A2%A7%E8%97%A4+https%3A%2F%2Fwww.bilibili.com%2Fread%2Fcv13066589+%E5%87%BA%E5%A4%84%EF%BC%9Abilibili'
            }]
    },
        {
            html: `地址栏输入<span>edge://extensions/</span>，回车`,
            flex: 'flex-between-center'
        },
        {
            html: `点击左下角<span>打开开发者模式</span>!`,
            flex: 'flex-around-center flex-column'
        },
        {
            html: `点击已安装的扩展右边的第一个图标“加载解压缩的扩展”!`,
            flex: 'flex-around-center flex-column'
        },
        {
            html: `选择解压后的整个插件文件夹完成安装`,
            tag: '可以通过地址栏输入`edge://settings/?search=后台`找到“关闭 Google Chrome 后继续运行后台应用”，选择运行后台扩展程序的使用',
            flex: 'flex-around-center flex-column'
        },
        {
            html: `还是不会？加群带你飞！`,
            flex: 'flex-around-center flex-column',
            btn: [{
                text: '现在就加入蹲饼群！',
                link: 'http://www.baidu.com'
            }]
        }
    ]
}
const INSTALL_FIREFOX: Object = {
    name: 'Firefox浏览器',
    icon: 'firefox.png',
    help: [{
        html: `地址栏输入<span>about:addons</span>，回车`,
        flex: 'flex-between-center',
        btn: [
            {
                text: '点击这里跳转Firefox应用商店',
                link: 'https://addons.mozilla.org/zh-CN/firefox/addon/%E5%B0%8F%E5%88%BB%E9%A3%9F%E5%A0%82-%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E8%B9%B2%E9%A5%BC%E5%99%A8-arknights-cookies/'
            }]
    },
        {
            html: `点击“接受风险并继续”!`,
            flex: 'flex-around-center flex-column'
        },
        {
            html: `在搜索框输入dom.events.asyncClipboard.clipboardItem`,
            flex: 'flex-around-center flex-column'
        },
        {
            html: `双击或者点击后面双箭头切换为“true”完成`,
            tag: '安装完成后解压文件不要卸载了哦',
            flex: 'flex-around-center flex-column'
        },
        {
            html: `还是不会？加群带你飞！`,
            flex: 'flex-around-center flex-column',
            btn: [{
                text: '现在就加入蹲饼群！',
                link: 'http://www.baidu.com'
            }]
        }
    ]
}
const INSTALL_QQ: Object = {
    name: 'QQ浏览器',
    icon: 'qq.png',
    help: [{
        html: '下载插件端压缩包，并解压到任意文件夹',
        image: '',
        btn: [
            {
                text: '下载插件端压缩包',
                link: 'https://github.com/Enraged-Dun-Cookie-Development-Team/Dun-Cookie-Vue/releases'
            }]
    },
        {
            html: `地址栏输入<span>qqbrowser://extensions/manage</span>，回车`,
            flex: 'flex-between-center'
        },
        {
            html: `点击右上角，打开开发者模式，并点击“加载已解压的扩展程序”`,
            flex: 'flex-around-center flex-column'
        },
        {
            html: `添加扩展程序，选择解压后的整个插件文件夹完成安装`,
            tag: '安装完成后解压文件不要卸载了哦',
            flex: 'flex-around-center flex-column'
        },
        {
            html: `还是不会？加群带你飞！`,
            flex: 'flex-around-center flex-column',
            btn: [{
                text: '现在就加入蹲饼群！',
                link: 'http://www.baidu.com'
            }]
        }
    ]
}
const INSTALL_360: Object = {
    name: '360浏览器',
    icon: '360.png',
    help: [{
        html: '下载插件端压缩包，并解压到任意文件夹',
        image: '',
        btn: [
            {
                text: '下载插件端压缩包',
                link: 'https://github.com/Enraged-Dun-Cookie-Development-Team/Dun-Cookie-Vue/releases'
            }]
    },
        {
            html: `点击地址栏旁边扩展中心图标，点击已安装的扩展`,
            flex: 'flex-between-center'
        },
        {
            html: `点击右上角，打开开发者模式，并点击左边的“加载已解压的扩展程序”`,
            flex: 'flex-around-center flex-column'
        },
        {
            html: `添加扩展程序，选择解压后的整个插件文件夹完成安装`,
            tag: '安装完成后解压文件不要卸载了哦',
            flex: 'flex-around-center flex-column'
        },
        {
            html: `还是不会？加群带你飞！`,
            flex: 'flex-around-center flex-column',
            btn: [{
                text: '现在就加入蹲饼群！',
                link: 'http://www.baidu.com'
            }]
        }
    ]
}
const PC_INSTALL_HELP_LIST: Array<object> = [INSTALL_CHROME, INSTALL_EDGE, INSTALL_FIREFOX, INSTALL_QQ, INSTALL_360];

export {PC_INSTALL_HELP_LIST}