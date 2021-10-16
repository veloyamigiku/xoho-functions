export const area = {
  1: {
    name: '東北地区',
    sub: 'TOHOKU AREA'
  },
  2: {
    name: '関東地区',
    sub: 'KANTO AREA'
  },
  3: {
    name: '中部地区',
    sub: 'CHUBU AREA'
  },
  4: {
    name: '関西地区',
    sub: 'KANSAI AREA'
  },
  5: {
    name: '中国地区',
    sub: 'CHUGOKU AREA'
  },
  6: {
    name: '四国地区',
    sub: 'SHIKOKU AREA'
  },
  7: {
    name: '九州地区',
    sub: 'KYUSYU AREA'
  }
};

export const prefecture = {
  1: {
    name: '青森県',
    sub: 'AOMORI'
  },
  2: {
    name: '秋田県',
    sub: 'AKITA'
  },
  3: {
    name: '宮城県',
    sub: 'MIYAGI'
  },
  4: {
    name: '東京都',
    sub: 'TOKYO'
  },
  5: {
    name: '千葉県',
    sub: 'CHIBA'
  },
  6: {
    name: '神奈川県',
    sub: 'KANAGAWA'
  },
  7: {
    name: '埼玉県',
    sub: 'SAITAMA'
  },
  8: {
    name: '栃木県',
    sub: 'TOCHIGI'
  },
  9: {
    name: '茨城県',
    sub: 'IBARAKI'
  },
  10: {
    name: '山梨県',
    sub: 'YAMANASHI'
  },
  11: {
    name: '愛知県',
    sub: 'AICHI'
  },
  12: {
    name: '静岡県',
    sub: 'SHIZUOKA'
  },
  13: {
    name: '岐阜県',
    sub: 'GIFU'
  },
  14: {
    name: '富山県',
    sub: 'TOYAMA'
  },
  15: {
    name: '長野県',
    sub: 'NAGANO'
  },
  16: {
    name: '大阪府',
    sub: 'OSAKA'
  },
  17: {
    name: '京都府',
    sub: 'KYOTO'
  },
  18: {
    name: '兵庫県',
    sub: 'HYOGO'
  },
  19: {
    name: '奈良県',
    sub: 'NARA'
  },
  20: {
    name: '岡山県',
    sub: 'OKAYAMA'
  },
  21: {
    name: '広島県',
    sub: 'HIROSHIMA'
  },
  22: {
    name: '高知県',
    sub: 'KOCHI'
  },
  23: {
    name: '愛媛県',
    sub: 'EHIME'
  },
  24: {
    name: '福岡県',
    sub: 'FUKUOKA'
  },
  25: {
    name: '長崎県',
    sub: 'NAGASAKI'
  },
  26: {
    name: '熊本県',
    sub: 'KUMAMOTO'
  },
  27: {
    name: '大分県',
    sub: 'OITA'
  },
  28: {
    name: '鹿児島県',
    sub: 'KAGOSHIMA'
  }
};

export const type = {
  1: {
    name: 'IMAX',
    title: 'IMAX劇場一覧',
    sub: '最高級のプレミアムシアター',
    option: 'IMAX®とは？',
    icon: ['fas', 'adjust']
  },
  2: {
    name: 'MX4D',
    title: 'MX4D劇場一覧',
    sub: 'アトラクション型4Dシアター',
    option: 'MX4D®とは？',
    icon: ['fas', 'air-freshener']
  },
  3: {
    name: 'TCX',
    title: 'TCX劇場一覧',
    sub: '独自規格の巨大スクリーン',
    option: 'TCX®とは？',
    icon: ['fas', 'allergies']
  },
  4: {
    name: 'ATMOS',
    title: 'DOLBY ATMOS劇場一覧',
    sub: '立体音響システム',
    option: 'DOLBY ATMOSとは？',
    icon: ['fas', 'ambulance']
  },
  5: {
    name: 'SCREEN X',
    title: '',
    sub: '',
    option: '',
    icon: null
  },
  6: {
    name: 'IMAXレーザー',
    title: 'IMAXレーザー劇場一覧',
    sub: '最高級のプレミアムシアター',
    option: 'IMAX®レーザーとは？',
    icon: ['fas', 'american-sign-language-interpreting']
  }
};

export const theater = [
  {
    name: 'おいらせ下田',
    sub: 'OIRASE SHIMODA',
    area: 1,
    prefecture: 1,
    url: '',
    type: []
  },
  {
    name: '秋田',
    sub: 'AKITA',
    area: 1,
    prefecture: 2,
    url: '',
    type: []
  },
  {
    name: '仙台',
    sub: 'SENDAI',
    area: 1,
    prefecture: 3,
    url: '',
    type: [1, 4, 3]
  },
  {
    name: '日比谷',
    sub: 'HIBIYA',
    area: 2,
    prefecture: 4,
    url: '',
    type: [1, 4, 3]
  },
  {
    name: 'シャンテ',
    sub: 'CHANTER',
    area: 2,
    prefecture: 4,
    url: '',
    type: []
  },
  {
    name: '新宿',
    sub: 'SHINJUKU',
    area: 2,
    prefecture: 4,
    url: '',
    type: [6, 4, 3, 2]
  },
  {
    name: '池袋',
    sub: 'IKEBUKURO',
    area: 2,
    prefecture: 4,
    url: '',
    type: [4, 3]
  },
  {
    name: '日本橋',
    sub: 'NIHONBASHI',
    area: 2,
    prefecture: 4,
    url: '',
    type: [4, 3]
  },
  {
    name: '上野',
    sub: 'UENO',
    area: 2,
    prefecture: 4,
    url: '',
    type: []
  },
  {
    name: '六本木ヒルズ',
    sub: 'ROPPONGI HILLS',
    area: 2,
    prefecture: 4,
    url: '',
    type: [4, 3, 2]
  },
  {
    name: '渋谷',
    sub: 'SHIBUYA',
    area: 2,
    prefecture: 4,
    url: '',
    type: []
  },
  {
    name: '西新井',
    sub: 'NISHIARAI',
    area: 2,
    prefecture: 4,
    url: '',
    type: [2]
  },
  {
    name: '南大沢',
    sub: 'MINAMIOSAWA',
    area: 2,
    prefecture: 4,
    url: '',
    type: []
  },
  {
    name: '府中',
    sub: 'FUCHU',
    area: 2,
    prefecture: 4,
    url: '',
    type: [2]
  },
  {
    name: '立川立飛',
    sub: 'TACHIKAWA TACHIHI',
    area: 2,
    prefecture: 4,
    url: '',
    type: [1, 3]
  },
  {
    name: '錦糸町（楽天地・オリナス）',
    sub: 'KINSHICHO',
    area: 2,
    prefecture: 4,
    url: '',
    type: []
  },
  {
    name: 'ららぽーと船橋',
    sub: 'LALAPORT FUNABASHI',
    area: 2,
    prefecture: 5,
    url: '',
    type: [4, 3, 2]
  },
  {
    name: '市川コルトンプラザ',
    sub: 'ICHIKAWA COLTON PLAZA',
    area: 2,
    prefecture: 5,
    url: '',
    type: []
  },
  {
    name: '柏',
    sub: 'KASHIWA',
    area: 2,
    prefecture: 5,
    url: '',
    type: [4, 3, 2]
  },
  {
    name: '八千代緑が丘',
    sub: 'YACHIYO MIDORIGAOKA',
    area: 2,
    prefecture: 5,
    url: '',
    type: []
  },
  {
    name: '流山おおたかの森',
    sub: 'NAGAREYAMA OTAKANOMORI',
    area: 2,
    prefecture: 5,
    url: '',
    type: [6]
  },
  {
    name: '市原',
    sub: 'ICHIHARA',
    area: 2,
    prefecture: 5,
    url: '',
    type: [3]
  },
  {
    name: '海老名',
    sub: 'EBINA',
    area: 2,
    prefecture: 6,
    url: '',
    type: [2]
  },
  {
    name: '小田原',
    sub: 'ODAWARA',
    area: 2,
    prefecture: 6,
    url: '',
    type: []
  },
  {
    name: '川崎',
    sub: 'KAWASAKI',
    area: 2,
    prefecture: 6,
    url: '',
    type: [2]
  },
  {
    name: 'ららぽーと横浜',
    sub: 'LALAPORT YOKOHAMA',
    area: 2,
    prefecture: 6,
    url: '',
    type: [1, 2]
  },
  {
    name: '上大岡',
    sub: 'KAMIOOKA',
    area: 2,
    prefecture: 6,
    url: '',
    type: []
  },
  {
    name: 'ららぽーと富士見',
    sub: 'LALAPORT FUJIMI',
    area: 2,
    prefecture: 7,
    url: '',
    type: [4, 3, 2]
  },
  {
    name: '宇都宮',
    sub: 'UTSUNOMIYA',
    area: 2,
    prefecture: 8,
    url: '',
    type: [2]
  },
  {
    name: 'ひたちなか',
    sub: 'HITACHINAKA',
    area: 2,
    prefecture: 9,
    url: '',
    type: []
  },
  {
    name: '水戸内原',
    sub: 'MITOUCHIHARA',
    area: 2,
    prefecture: 9,
    url: '',
    type: []
  },
  {
    name: '甲府',
    sub: 'KOFU',
    area: 2,
    prefecture: 10,
    url: '',
    type: []
  },
  {
    name: '赤池',
    sub: 'AKAIKE',
    area: 3,
    prefecture: 11,
    url: '',
    type: [4, 3, 2]
  },
  {
    name: '津島',
    sub: 'TSUSHIMA',
    area: 3,
    prefecture: 11,
    url: '',
    type: []
  },
  {
    name: '東浦',
    sub: 'HIGASHIURA',
    area: 3,
    prefecture: 11,
    url: '',
    type: []
  },
  {
    name: '木曽川',
    sub: 'KISOGAWA',
    area: 3,
    prefecture: 11,
    url: '',
    type: []
  },
  {
    name: '浜松',
    sub: 'HAMAMATSU',
    area: 3,
    prefecture: 12,
    url: '',
    type: []
  },
  {
    name: 'サンストリート浜北',
    sub: 'SUN STREET HAMAKITA',
    area: 3,
    prefecture: 12,
    url: '',
    type: []
  },
  {
    name: 'ららぽーと磐田',
    sub: 'LALAPORT IWATA',
    area: 3,
    prefecture: 12,
    url: '',
    type: []
  },
  {
    name: '岐阜',
    sub: 'GIFU',
    area: 3,
    prefecture: 13,
    url: '',
    type: []
  },
  {
    name: 'モレラ岐阜',
    sub: 'MALERA GIFU',
    area: 3,
    prefecture: 13,
    url: '',
    type: []
  },
  {
    name: 'ファボーレ富山',
    sub: 'FAVORE TOYAMA',
    area: 3,
    prefecture: 14,
    url: '',
    type: []
  },
  {
    name: '高岡',
    sub: 'TAKAOKA',
    area: 3,
    prefecture: 14,
    url: '',
    type: []
  },
  {
    name: '上田',
    sub: 'UEDA',
    area: 3,
    prefecture: 15,
    url: '',
    type: []
  },
  {
    name: '梅田',
    sub: 'UMEDA',
    area: 4,
    prefecture: 16,
    url: '',
    type: [4, 3]
  },
  {
    name: 'なんば（本館・別館）',
    sub: 'NAMBA (MAIN BUILDING/ANNEX)',
    area: 4,
    prefecture: 16,
    url: '',
    type: [1, 2]
  },
  {
    name: '泉北',
    sub: 'SENBOKU',
    area: 4,
    prefecture: 16,
    url: '',
    type: []
  },
  {
    name: '鳳',
    sub: 'OTORI',
    area: 4,
    prefecture: 16,
    url: '',
    type: [2]
  },
  {
    name: 'くずはモール',
    sub: 'KUZUHA MALL',
    area: 4,
    prefecture: 16,
    url: '',
    type: [4, 3]
  },
  {
    name: '二条',
    sub: 'NIJO',
    area: 4,
    prefecture: 17,
    url: '',
    type: [1, 2]
  },
  {
    name: '西宮OS',
    sub: 'NISHINOMIYA OS',
    area: 4,
    prefecture: 18,
    url: '',
    type: [2, 6]
  },
  {
    name: '伊丹',
    sub: 'ITAMI',
    area: 4,
    prefecture: 18,
    url: '',
    type: []
  },
  {
    name: '橿原',
    sub: 'KASHIHARA',
    area: 4,
    prefecture: 19,
    url: '',
    type: []
  },
  {
    name: '岡南',
    sub: 'KONAN',
    area: 5,
    prefecture: 20,
    url: '',
    type: [2]
  },
  {
    name: '緑井',
    sub: 'MIDORII',
    area: 5,
    prefecture: 21,
    url: '',
    type: []
  },
  {
    name: '高知',
    sub: 'KOCHI',
    area: 6,
    prefecture: 22,
    url: '',
    type: []
  },
  {
    name: '新居浜',
    sub: 'TENJIN SOLARIA PLAZA',
    area: 6,
    prefecture: 23,
    url: '',
    type: []
  },
  {
    name: '天神・ソラリア館',
    sub: 'NIIHAMA',
    area: 7,
    prefecture: 24,
    url: '',
    type: []
  },
  {
    name: '福津',
    sub: 'FUKUTSU',
    area: 7,
    prefecture: 24,
    url: '',
    type: []
  },
  {
    name: '直方',
    sub: 'NOGATA',
    area: 7,
    prefecture: 24,
    url: '',
    type: []
  },
  {
    name: '長崎',
    sub: 'NAGASAKI',
    area: 7,
    prefecture: 25,
    url: '',
    type: []
  },
  {
    name: '熊本サクラマチ',
    sub: 'KUMAMOTO SAKURAMACHI',
    area: 7,
    prefecture: 26,
    url: '',
    type: [5, 3]
  },
  {
    name: '光の森',
    sub: 'HIKARINOMORI',
    area: 7,
    prefecture: 26,
    url: '',
    type: []
  },
  {
    name: 'はません',
    sub: 'HAMASEN',
    area: 7,
    prefecture: 26,
    url: '',
    type: []
  },
  {
    name: '宇城',
    sub: 'UKI',
    area: 7,
    prefecture: 26,
    url: '',
    type: []
  },
  {
    name: '大分わさだ',
    sub: 'OITA WASADA',
    area: 7,
    prefecture: 27,
    url: '',
    type: []
  },
  {
    name: 'アミュプラザおおいた',
    sub: 'AMU PLAZA OITA',
    area: 7,
    prefecture: 27,
    url: '',
    type: [4, 3]
  },
  {
    name: '与次郎',
    sub: 'YOJIRO',
    area: 7,
    prefecture: 28,
    url: '',
    type: []
  }
];
