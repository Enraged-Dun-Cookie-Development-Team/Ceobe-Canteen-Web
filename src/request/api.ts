import { post, get } from './http'

// 桌面端下载地址
export const version_desktop = (p?:any) => get('/canteen/operate/version/desktop', p);

// app下载地址
export const version_app = (p?:any) => get('/canteen/operate/version/app', p);
