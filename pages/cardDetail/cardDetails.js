// pages/cardDetail/cardDetails.js
const app =getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    join_arr:['加入打卡','立即打卡','今日已经打卡'],
    join_index: 1,
    join:'加入打卡',
    ifJoin: false
  },
  join(){
    let index =this.data.join_index+1;
    if(index < 4)
    this.setData({
      join : this.data.join_arr[this.data.join_index],
      join_index : index
    })
    else
    {
      app.showToast('已完成打卡','success')
    }
    console.log(this.data.join_index)
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