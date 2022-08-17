const INSTALL_CHROME = {
    name: 'Google浏览器',
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
const PC_INSTALL_HELP_LIST = [INSTALL_CHROME];

export {PC_INSTALL_HELP_LIST}