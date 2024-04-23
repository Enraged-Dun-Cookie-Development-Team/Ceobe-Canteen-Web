import {
  faBilibili,
  faGithub,
  faAndroid,
  faApple,
  faWindows,
  faLinux,
  faChrome,
  faEdge,
  faFirefoxBrowser,
  faAppStore,
} from "@fortawesome/free-brands-svg-icons";

import CeobeIcon from "@/assets/ceobe.png";
import PluginZipIcon from "@/assets/plugin-zip.png";

import type { CeobeLink } from "./types";

export const ceobe_links: CeobeLink[] = [
  {
    name: "小刻官网",
    url: "https://www.ceobecanteen.top/",
    desc: "小刻食堂的官网！哒哒哒~",
    cover: CeobeIcon,
  },
  {
    name: "Bilibili",
    url: "https://space.bilibili.com/1723599428",
    desc: "小刻食堂的B站账号空间",
    cover: {
      icon: faBilibili,
      color: "#00aeec",
    },
  },
  {
    name: "Github",
    url: "https://github.com/Enraged-Dun-Cookie-Development-Team",
    desc: "小刻食堂的 Github 组织",
    cover: {
      icon: faGithub,
    },
  },
  {
    name: "安卓下载",
    url: "https://ceobe.lanzn.com/s/ceobe",
    desc: "小刻食堂安卓版下载链接",
    cover: {
      icon: faAndroid,
      color: "#16b413",
    },
  },
  {
    name: "IOS下载",
    url: "https://apps.apple.com/cn/app/%E5%B0%8F%E5%88%BB%E9%A3%9F%E5%A0%82/id1629917304",
    desc: "小刻食堂IOS版下载链接",
    cover: {
      icon: faApple,
    },
  },
  {
    name: "Windows下载",
    url: "https://ceobe.lanzn.com/s/ceobe",
    desc: "小刻食堂Windows版下载链接",
    cover: {
      icon: faWindows,
      color: "#00a1f1",
    },
  },
  {
    name: "Linux下载",
    url: "https://ceobe.lanzn.com/s/ceobe",
    desc: "小刻食堂Linux版(Debian系)下载链接",
    cover: {
      icon: faLinux,
    },
  },
  {
    name: "MacOS下载",
    url: "https://ceobe.lanzn.com/s/ceobe",
    desc: "小刻食堂MacOS版下载链接",
    cover: {
      icon: faAppStore,
      color: "#8362e4",
    },
  },
  {
    name: "Chrome插件下载",
    url: "https://chrome.google.com/webstore/detail/%E8%B9%B2%E9%A5%BC-%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E8%B9%B2%E9%A5%BC%E5%99%A8-arknights-cook/gblmdllhbodefkmimbcjpflhjneagkkd?hl=zh-CN",
    desc: "前往Chrome插件商店下载小刻食堂",
    cover: {
      icon: faChrome,
      color: "#ffb83d",
    },
  },
  {
    name: "Edge插件下载",
    url: "https://microsoftedge.microsoft.com/addons/detail/%E5%B0%8F%E5%88%BB%E9%A3%9F%E5%A0%82-%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E8%B9%B2%E9%A5%BC%E5%99%A8-arknight/jimmfliacfpeabcifcghmdankmdnmfmn?hl=zh-CN",
    desc: "前往Edge插件商店下载小刻食堂",
    cover: {
      icon: faEdge,
      color: "#0078d7",
    },
  },
  {
    name: "Firefox插件端下载",
    url: "https://addons.mozilla.org/zh-CN/firefox/addon/%E5%B0%8F%E5%88%BB%E9%A3%9F%E5%A0%82-%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E8%B9%B2%E9%A5%BC%E5%99%A8-arknights-cookies/",
    desc: "前往Firefox插件端商店下载小刻食堂",
    cover: {
      icon: faFirefoxBrowser,
      color: "#ff7139",
    },
  },
  {
    name: "通用浏览器插件端下载",
    url: "https://ceobe.lanzn.com/s/ceobe",
    desc: "小刻食堂通用浏览器插件(Zip压缩包)下载链接",
    cover: PluginZipIcon,
  },
];
