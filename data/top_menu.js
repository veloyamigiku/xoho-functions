export const topMenu = (params) => {
  return [
    {
      title: '上映中',
      sub: 'Now Playing',
      url: params.url + ':' + params.port + '/movie/'
    },
    {
      title: '公開予定',
      sub: 'Coming Soon',
      url: params.url + ':' + params.port + '/movie/type=new'
    },
    {
      title: '劇場を探す',
      sub: 'Theater List',
      url: params.url + ':' + params.port + '/theater'
    },
  ];
}
