//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    ifshow : false,
    index: 0,
    hot_arr: [{
        title: '热门板块',
        btn_text: '申请板块'
      },
      {
        title: '我收藏的板块',
        btn_text: '我收藏的板块'
      },
    ]
  },
  // 按钮事件
  issue(e) {
    let index = e.currentTarget.dataset.status,
      url2 = '/pages/releaseTopic/releaseTopic', // 发布话题
      url1 = '', //收藏的模板
      url = '/pages/applyPlate/applyPlate'; //申请模板
    wx.navigateTo({
      url: index == 2 ? url2 : index == 1 ? url1 : url,
    })
  },
  // 内容获取跳转事件
  get_content(e) {
    let index = e.currentTarget.dataset.status,
      url2 = '/pages/topicContent/topicContent',
      url1 = '/pages/experienceList/experienceList',
      url = '/pages/experienceList/experienceList';
    wx.navigateTo({
      url: index == 2 ? url2 : index == 1 ? url1 : url,
    })
  },
  //更多按钮跳转事件
  get_more(e) {
    let index = e.currentTarget.dataset.status,
      url2 = '/pages/topicList/topicList', // 发布话题
      url1 = '', //收藏的模板
      url = '/pages/plateList/plateList'; //申请模板
    wx.navigateTo({
      url: index == 2 ? url2 : index == 1 ? url1 : url,
    })
  },

  // 未登录
  goLogin(){
    wx.reLaunch({
      url: '/pages/login/login',
    })
  },

  //事件处理函数
  onLoad: function () {
    let userInfo = wx.getStorageSync('userInfo')
    // console.log(userInfo)
    if (userInfo == '') {
      this.setData({
        ifshow : true
      })
    }
  },

  get_list() {
    let url = '',
      data = '',
      method = 'get';
    app.wx_ajax(url, data, method)
      .then(res => {
        console.log(res.data)
      });
  }
})