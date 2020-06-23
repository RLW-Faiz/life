// pages/applyPlate/applyPlate.js
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title_inp: '',
    max_num: 1500,
    now_num: 0,
  },
  content_inp(e){
    if(e.detail.value.length <this.data.max_num)
    {
      this.setData({
        now_num : e.detail.value.length
      })
    }
  },
  title_inp(e){
    this.setData({
      title_inp: e.detail.value
    })
  },
  share(){
    if(this.data){
      app.showToast('成功','success')
    }
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