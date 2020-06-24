// pages/myCollection/myCollection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news_arr:
    [
      {
        img: '',
        text: '我收藏的经验'
      },
      {
        img: '',
        text: '我收藏的话题'
      }
    ],
    selected: 0
  },
  change_tab(e){
    let index = e.currentTarget.dataset.status;
    this.setData({
      selected : index 
    })
  },
  go_detail(e){
    let index =e.currentTarget.dataset.status,
    url ='/pages/shareContent/shareContent',
    url1 = '/pages/topicContent/topicContent';
    wx.navigateTo({
      url: index ==0 ? url : url1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})