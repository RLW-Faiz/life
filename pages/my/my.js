// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 2,
    isshow: false,
    my_opeations_arr:['我的收藏','我的消息','联系客服']
  },

  go_personal_center(){
    let url = '/pages/myDetails/myDetails'
    wx.navigateTo({
      url,
    })
  },

  goAndOpen(e){
    let index =e.currentTarget.dataset.status,
    url ='/pages/myCollection/myCollection',
    url1 ='/pages/myNews/myNews';
    this.setData({
      isshow : index == 2? 'true':'',
    })
    if(index < 2)
    {
      wx.navigateTo({
        url: index == 0 ? url : url1
      })
    }
  },

  colseTip(){
    this.setData({
      isshow : false
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