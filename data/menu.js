import { common } from './common';

export const menu = {
  menu1: [
    {
      label: 'トップページ',
      url: common.url,
      icon: ['fas', 'home']
    },
    {
      label: 'ログイン',
      url: common.url + '/login',
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
          url: common.url + '/theater',
          icon: ['fas', 'file-video']
        },
        {
          label: 'IMAX 劇場一覧',
          url: common.url + '/theater/type=imax',
          icon: ['far', 'file-video']
        },
        {
          label: 'MX4D 劇場一覧',
          url: common.url + '/theater/type=mx4d',
          icon: ['fas', 'compact-disc']
        },
        {
          label: 'TCX 劇場一覧',
          url: common.url + '/theater/type=tcx',
          icon: ['fas', 'truck-moving']
        },
        {
          label: 'ATMOS 劇場一覧',
          url: common.url + '/theater/type=atmos',
          icon: ['fas', 'trailer']
        },
        {
          label: 'SCREEN X 劇場一覧',
          url: common.url + '/theater/type=scx',
          icon: ['fas', 'suitcase']
        }
      ],
      [
        {
          label: '上映中作品情報',
          url: common.url + '/movie/',
          icon: ['fas', 'expand-arrows-alt']
        },
        {
          label: '公開予定作品情報',
          url: common.url + '/movie/type=new',
          icon: ['fas', 'compress-arrows-alt']
        }
      ]
    ]
  },
  info: [
    {
      label: '舞台挨拶・<br>イベント',
      url: common.url + '/event',
      icon: ['fas', 'compress-alt']
    },
    {
      label: 'プレゼント・<br>キャンペーン',
      url: common.url + '/campaign',
      icon: ['fas', 'compress']
    },
    {
      label: 'お知らせ',
      url: common.url + '/news',
      icon: ['fas', 'truck-loading']
    },
    {
      label: '購入情報の<br>確認',
      url: common.url + '/ticket',
      icon: ['fas', 'people-carry']
    }
  ],
  menu2: [
    {
      label: 'サービス案内',
      url: common.url + '/service',
      icon: ['fas', 'arrows-alt']
    },
    {
      label: 'スマートフォンアプリ',
      url: common.url+ '/app',
      icon: ['fas', 'remove-format']
    },
    {
      label: '公式SNSアカウント',
      url: common.url + '/sns',
      icon: ['fas', 'tape']
    },
    {
      label: 'ドリパス',
      url: common.url + '/dreampass',
      icon: ['fas', 'sign']
    },
    {
      label: 'ご質問・ご意見',
      url: common.url + '/help',
      icon: ['fas', 'couch']
    },
    {
      label: 'サイトマップ',
      url: common.url + '/sitemap',
      icon: ['fas', 'box-open']
    },
    {
      label: '企業情報',
      url: 'http://www.tohocinemas.co.jp/',
      icon: ['fas', 'route']
    },
    {
      label: '採用情報',
      url: common.url + '/recruit',
      icon: ['fas', 'dolly']
    }
  ]
}
