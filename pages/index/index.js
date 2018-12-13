//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: 'Walters 国际洗衣',
    categories: [
      {
        "index": 1,
        "name": "西装",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/38001dadee1992fe232b.png",
        "price": "16"
      },
      {
        "index": 2,
        "name": "西裤",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/e6db4a14aba4a170176f.png",
        "price": "11"
      },
      {
        "index": 3,
        "name": "衬衣/马甲",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/990c9d310336046a0b12.png",
        "price": "10"
      },
      {
        "index": 4,
        "name": "领带",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/fa5b9ded70aa565f34ce.png",
        "price": "10"
      },
      {
        "index": 5,
        "name": "羊绒/毛呢衣",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/c734d7708b4090f333b2.png",
        "price": "35/45/50"
      },
      {
        "index": 6,
        "name": "羽绒服/棉服",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/3aa68b13b554f92c98d2.png",
        "price": "30/40/45"
      },
      {
        "index": 7,
        "name": "风衣",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/0cd15e18b5ee0b0805d0.png",
        "price": "25/35/40"
      },
      {
        "index": 8,
        "name": "针织衫",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/c1e439cc2b69c8f66c7d.png",
        "price": "15/25"
      },
      {
        "index": 9,
        "name": "羊毛/羊绒衫",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/cbed179a99fb6c328842.png"
      },
      {
        "index": 10,
        "name": "休闲外套",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/09b233cac05dbbc585fa.png",
        "price": "16"
      },
      {
        "index": 11,
        "name": "真丝上衣",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/38386ea6019db2985dfa.png",
        "price": "15"
      },
      {
        "index": 12,
        "name": "防寒服",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/aef9eca17fac89da63e2.png",
        "price": "30起"
      },
      {
        "index": 13,
        "name": "卫衣",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/6f035814d45e1a7e6c8c.png",
        "price": "15/20"
      },
      {
        "index": 14,
        "name": "T恤",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/afd26e738ea397954597.png",
        "price": "10"
      },
      {
        "index": 15,
        "name": "休闲裤",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/eb8c3a86948d680ac6fd.png",
        "price": "11"
      },
      {
        "index": 16,
        "name": "短裤",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/56acc03d626b8fe54bf1.png",
        "price": "8"
      },
      {
        "index": 17,
        "name": "百褶裙",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/bc413ab3d745acc98000.png",
        "price": "15/20/25"
      },
      {
        "index": 18,
        "name": "连衣裙（夏）",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/5b07ab83953405645a90.png",
        "price": "20/30"
      },
      {
        "index": 19,
        "name": "真丝裙",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/9434f4faf439cba2b8a5.png",
        "price": "30/25/40"
      },
      {
        "index": 20,
        "name": "羊毛裙",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/fab2754587e73d2c36dd.png",
        "price": "25/30/35"
      },
      {
        "index": 21,
        "name": "毛呢裤",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/f163c73a5b55d67985ab.png",
        "price": "20"
      },
      {
        "index": 22,
        "name": "睡衣/真丝",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/8e7e945506b99f77c6d9.png",
        "price": "30/45"
      },
      {
        "index": 23,
        "name": "婚纱/礼服",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/6e71d02972b63f379889.png",
        "price": "80-200"
      },
      {
        "index": 24,
        "name": "旗袍/唐装",
        "url": "http://lc-hK5jtX4E.cn-n1.lcfile.com/1b54373d565c810a9576.png",
        "price": "50起"
      }
    ],
    leftCates: [],
    rightCates: [],
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
    shopInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    const { categories } = this.data;
    const colCount = categories.length % 2 === 0 ? categories.length / 2 : categories.length / 2 + 1;
    const longitude = 113.105210;
    const latitude = 39.817400;
    const address = '山西怀仁市神隆生活广场美食街口威特斯洗护馆';
    this.setData({
      leftCates: categories.slice(0, colCount),
      rightCates: categories.slice(colCount),
      shopInfo: {
        address,
        longitude,
        latitude,
        markers: [{
          title: address,
          longitude,
          latitude,
          iconPath: '/static/images/marker_red.png',
          iconTapPath: '/static/images/marker_red.png',
          callout: {
            content: address,
            color: '#616263',
            fontSize: 16,
            padding: 12
          }
        }]
      }
    });
  }
})
