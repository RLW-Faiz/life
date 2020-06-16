// pages/modal/modal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:1,
    head_item:[
      {
        title:'我的打卡',
        iconUrl:'',
        idx:0,
      },
      {
        title:'所有打卡',
        iconUrl:'',
        idx:1,
      },
      {
        title:'发起打卡',
        iconUrl:'',
        idx:2,
      },
    ],
    selected:1,
  },
  changeTitle(e){
    this.setData({
      selected : e.currentTarget.dataset.select
    })
  },
  gotoDetail(){
    wx.navigateTo({
      url: '/pages/cardDetail/cardDetails',
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