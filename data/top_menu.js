const topMenuData = [
  {
    id: "now_playing",
    title: '上映中',
    sub: 'Now Playing',
    url: '/movie/now_playing'
  },
  {
    id: "coming_soon",
    title: '公開予定',
    sub: 'Coming Soon',
    url: '/movie/coming_soon'
  },
  {
    id: 'theater',
    title: '劇場を探す',
    sub: 'Theater List',
    url: '/theater'
  }
];

export const topMenu = (params, activePage) => {
  
  var res = [];
  topMenuData.forEach(function (topMenu) {
    res.push({
      active: topMenu.id === activePage ? 1 : null,
      title: topMenu.title,
      sub: topMenu.sub,
      url: params.url + ':' + params.port + topMenu.url
    });
  });
  
  return res;
}
