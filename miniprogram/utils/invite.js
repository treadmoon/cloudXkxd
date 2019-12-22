function getAccessToken(){
  const requestTask = wx.request({
    url: 'https://api.weixin.qq.com/cgi-bin/token', //仅为示例，并非真实的接口地址
    data: {
      grant_type:'client_credential',
      appid: 'wx8127a3ca6263fb59',
      secret: '08bf5258389e7d0350aecf5d2f037f70'
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      console.log(res.data)
    }
  })
}