export const footerLink = (params) => {
  return {
    link: [
      {
        label: '企業情報',
        url: 'http://www.tohocinemas.co.jp/'
      },
      {
        label: 'サイトマップ',
        url: params.url + ':' + params.port + '/info/sitemap.html'
      },
      {
        label: '個人情報の取扱いについて',
        url: params.url + ':' + params.port + '/info/privacy.html'
      },
      {
        label: '特定商取引法に基づく表記',
        url: params.url + ':' + params.port + '/info/business_deal.html'
      },
      {
        label: 'ご利用に際して',
        url: params.url + ':' + params.port + '/info/help.html'
      },
      {
        label: 'vit®利用規約',
        url: params.url + ':' + params.port + '/vit/legal_notice.html'
      }
    ],
    snsLink: [
      {
        icon: ['fab', 'youtube'],
        url: 'https://www.youtube.com/user/TOHOCINEMASmagazine'
      },
      {
        icon: ['fab', 'line'],
        url: 'https://line.me/R/ti/p/%40tohocinemas'
      },
      {
        icon: ['fab', 'twitter'],
        url: 'https://twitter.com/tohocinemas_m'
      },
      {
        icon: ['fab', 'facebook-square'],
        url: 'https://www.facebook.com/tohocinemasmagagine/'
      },
      {
        icon: ['fab', 'instagram'],
        url: 'https://www.instagram.com/tohocinemas_official/'
      }
    ]
  }
}
