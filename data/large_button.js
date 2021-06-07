export const largeButton = (params, pageType) => {

  const nowPlaying = {
    title: '上映中作品一覧',
    url: params.url + ':' + params.port + '/movie/now_playing'
  };
  
  const comingSoon = {
    title: '公開予定作品一覧',
    url: params.url + ':' + params.port + '/movie/coming_soon'
  };
  
  const theater = {
    title: '劇場一覧はこちら',
    url: params.url + ':' + params.port + '/theater'
  };

  switch (pageType) {
    case 'now_playing':
      return [
        comingSoon,
        theater
      ];
    case 'coming_soon':
      return [
        nowPlaying
      ];
    case 'theater':
      return [
        nowPlaying
      ];
    default:
      return [
        comingSoon,
        theater
      ];
  }

}
