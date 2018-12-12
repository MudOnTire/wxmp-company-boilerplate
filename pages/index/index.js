//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: 'Walters 国际洗衣',
    icons: [
      {
        "index": 0,
        "name": "领带.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/fa5b9ded70aa565f34ce.png"
      },
      {
        "index": 1,
        "name": "针织衫.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/c1e439cc2b69c8f66c7d.png"
      },
      {
        "index": 2,
        "name": "西装.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/38001dadee1992fe232b.png"
      },
      {
        "index": 3,
        "name": "真丝裙.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/9434f4faf439cba2b8a5.png"
      },
      {
        "index": 4,
        "name": "休闲外套.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/09b233cac05dbbc585fa.png"
      },
      {
        "index": 5,
        "name": "羊毛／羊绒衫.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/cbed179a99fb6c328842.png"
      },
      {
        "index": 6,
        "name": "羊绒／毛呢衣.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/c734d7708b4090f333b2.png"
      },
      {
        "index": 7,
        "name": "婚纱／礼服.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/6e71d02972b63f379889.png"
      },
      {
        "index": 8,
        "name": "毛呢裤.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/f163c73a5b55d67985ab.png"
      },
      {
        "index": 9,
        "name": "风衣.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/0cd15e18b5ee0b0805d0.png"
      },
      {
        "index": 10,
        "name": "防寒服.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/aef9eca17fac89da63e2.png"
      },
      {
        "index": 11,
        "name": "连衣裙（夏）.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/5b07ab83953405645a90.png"
      },
      {
        "index": 12,
        "name": "短裤.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/56acc03d626b8fe54bf1.png"
      },
      {
        "index": 13,
        "name": "西裤.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/e6db4a14aba4a170176f.png"
      },
      {
        "index": 14,
        "name": "休闲裤.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/eb8c3a86948d680ac6fd.png"
      },
      {
        "index": 15,
        "name": "百褶裙.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/bc413ab3d745acc98000.png"
      },
      {
        "index": 16,
        "name": "卫衣.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/6f035814d45e1a7e6c8c.png"
      },
      {
        "index": 17,
        "name": "睡衣／真丝.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/8e7e945506b99f77c6d9.png"
      },
      {
        "index": 18,
        "name": "羽绒服／棉服.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/3aa68b13b554f92c98d2.png"
      },
      {
        "index": 19,
        "name": "衬衣／马甲.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/990c9d310336046a0b12.png"
      },
      {
        "index": 20,
        "name": "T恤.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/afd26e738ea397954597.png"
      },
      {
        "index": 21,
        "name": "真丝上衣.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/38386ea6019db2985dfa.png"
      },
      {
        "index": 22,
        "name": "羊毛裙.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/fab2754587e73d2c36dd.png"
      },
      {
        "index": 23,
        "name": "旗袍／唐装.png",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/1b54373d565c810a9576.png"
      }
    ],
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
