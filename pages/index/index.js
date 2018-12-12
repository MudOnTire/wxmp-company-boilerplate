//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title:'Walters 国际洗衣',
    banners: [
      {
        id: 1,
        url: "http://lc-hK5jtX4E.cn-n1.lcfile.com/b2bf2144e280b4f97e9d.jpeg"
      },
      {
        id: 5,
        url: 'http://lc-hK5jtX4E.cn-n1.lcfile.com/7659acfdb0e93ad22e3a.jpeg'
      },
      {
        id: 6,
        url: 'http://lc-hK5jtX4E.cn-n1.lcfile.com/6d92881d6ecf1b1d2d4c.jpeg'
      },
      {
        id: 2,
        url: "http://lc-hK5jtX4E.cn-n1.lcfile.com/fd1a9369e689e2afde96.jpeg"
      },
      {
        id: 3,
        url: "http://lc-hK5jtX4E.cn-n1.lcfile.com/d8bcdae05f2819922cf1.jpg"
      },
      {
        id: 4,
        url: "http://lc-hK5jtX4E.cn-n1.lcfile.com/457445abb018c3f40030.jpg"
      }
    ],
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
