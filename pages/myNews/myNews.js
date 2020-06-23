// pages/myNews/myNews.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news_arr:
    [
      {
        text: '收到的评论'
      },
      {
        text: '收到的赞'
      },
      {
        text: '系统消息'
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