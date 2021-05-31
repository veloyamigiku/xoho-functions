export const menu = (params) => {
  return {
    menu1: [
      {
        label: 'トップページ',
        url: params.url + ':' + params.port,
        icon: ['fas', 'home']
      },
      {
        label: 'ログイン',
        url: params.url + ':' + params.port + '/login',
        icon: ['fas', 'sign-in-alt']
      }
    ],
    search: {
      tab: [
        {
          label: '劇場を探す',
          icon: ['fas', 'map-signs'],
        },
        {
          label: '作品を探す',
          icon: ['fas', 'film'],
        }
      ],
      content: [
        [
          {
            label: 'すべての劇場',
            url: params.url + ':' + params.port + '/theater',
            icon: ['fas', 'file-video']
          },
          {
            label: 'IMAX 劇場一覧',
            url: params.url + ':' + params.port + '/theater/type=imax',
            icon: ['far', 'file-video']
          },
          {
            label: 'MX4D 劇場一覧',
            url: params.url + ':' + params.port + '/theater/type=mx4d',
            icon: ['fas', 'compact-disc']
          },
          {
            label: 'TCX 劇場一覧',
            url: params.url + ':' + params.port + '/theater/type=tcx',
            icon: ['fas', 'truck-moving']
          },
          {
            label: 'ATMOS 劇場一覧',
            url: params.url + ':' + params.port + '/theater/type=atmos',
            icon: ['fas', 'trailer']
          },
          {
            label: 'SCREEN X 劇場一覧',
            url: params.url + ':' + params.port + '/theater/type=scx',
            icon: ['fas', 'suitcase']
          }
        ],
        [
          {
            label: '上映中作品情報',
            url: params.url + ':' + params.port + '/movie/now_playing',
            icon: ['fas', 'expand-arrows-alt']
          },
          {
            label: '公開予定作品情報',
            url: params.url + ':' + params.port + '/movie/type=new',
            icon: ['fas', 'compress-arrows-alt']
          }
        ]
      ]
    },
    info: [
      {
        label: '舞台挨拶・<br>イベント',
        url: params.url + ':' + params.port + '/event',
        icon: ['fas', 'compress-alt']
      },
      {
        label: 'プレゼント・<br>キャンペーン',
        url: params.url + ':' + params.port + '/campaign',
        icon: ['fas', 'compress']
      },
      {
        label: 'お知らせ',
        url: params.url + ':' + params.port + '/news',
        icon: ['fas', 'truck-loading']
      },
      {
        label: '購入情報の<br>確認',
        url: params.url + ':' + params.port + '/ticket',
        icon: ['fas', 'people-carry']
      }
    ],
    menu2: [
      {
        label: 'サービス案内',
        url: params.url + ':' + params.port + '/service',
        icon: ['fas', 'arrows-alt']
      },
      {
        label: 'スマートフォンアプリ',
        url: params.url + ':' + params.port + '/app',
        icon: ['fas', 'remove-format']
      },
      {
        label: '公式SNSアカウント',
        url: params.url + ':' + params.port + '/sns',
        icon: ['fas', 'tape']
      },
      {
        label: 'ドリパス',
        url: params.url + ':' + params.port + '/dreampass',
        icon: ['fas', 'sign']
      },
      {
        label: 'ご質問・ご意見',
        url: params.url + ':' + params.port + '/help',
        icon: ['fas', 'couch']
      },
      {
        label: 'サイトマップ',
        url: params.url + ':' + params.port + '/sitemap',
        icon: ['fas', 'box-open']
      },
      {
        label: '企業情報',
        url: 'http://www.tohocinemas.co.jp/',
        icon: ['fas', 'route']
      },
      {
        label: '採用情報',
        url: params.url + ':' + params.port + '/recruit',
        icon: ['fas', 'dolly']
      }
    ]
  }
}