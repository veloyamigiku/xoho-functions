export const loginMenu = (params) => {
  return {
    button: [
      {
        label: 'ログイン',
        color: '#fff',
        colorHover: '#fff',
        backgroundColor: '#9c9c9c',
        backgroundColorHover: '#6c6c6c',
        url: params.url + ':' + params.port + '/login'
      },
      {
        label: '会員入会申込',
        color: '#0d47a1',
        colorHover: '#fff',
        backgroundColor: '#fff',
        backgroundColorHover: '#0d47a1',
        url: params.url + ':' + params.port + '/register'
      }
    ],
    link: {
      label: 'シネマイレージカードをお持ちで、会員情報登録・パスワード登録をする方はこちらから',
      url: params.url + ':' + params.port + '/cinemileage'
    }
  };
}
