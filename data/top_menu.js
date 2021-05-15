import { common } from './common';

export const topMenu = [
  {
    title: '上映中',
    sub: 'Now Playing',
    url: common.url + '/movie/'
  },
  {
    title: '公開予定',
    sub: 'Coming Soon',
    url: common.url + '/movie/type=new'
  },
  {
    title: '劇場を探す',
    sub: 'Theater List',
    url: common.url + '/theater'
  },
];
