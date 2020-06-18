//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    index: 0,
    hot_arr:
    [
      {
        title:'热门板块',
        btn_text:'申请板块'
      },
      {
        title:'我收藏的板块',
        btn_text:'我收藏的板块'
      },
    ]
  },
  issue(e){
    let index =e.currentTarget.dataset.status,
    url2 = '/pages/releaseTopic/releaseTopic',  // 发布话题
    url1 ='', //收藏的模板
    url = ''; //申请模板
    wx.navigateTo({
      url: index == 2? url2:index == 1? url1 :url,
    })
  },
  get_hot_topic(){
    let url = '/pages/topicContent/topicContent'
    wx.navigateTo({
      url,
    })
  },
  get_more(e){
    let index =e.currentTarget.dataset.status,
    url2 = '/pages/topicList/topicList',// 发布话题
    url1 ='', //收藏的模板
    url = ''; //申请模板
    wx.navigateTo({
      url: index == 2? url2:index == 1? url1 :url,
    })
  },
  //事件处理函数
  onLoad: function () {

  },
})
