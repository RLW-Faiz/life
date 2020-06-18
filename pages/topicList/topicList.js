// pages/topicList/topicList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    set_title:0,
    color_arr:['#f53131','#f55858','#fdf365','#5fb0fc','#e0aaf5'],
    search_item:
    [
      {
        icon:'',
        icon_selected:'',
        text:'所有话题'
      },
      {
        icon:'',
        icon_selected:'',
        text:'热门话题'
      },
      {
        icon:'',
        icon_selected:'',
        text:'最新话题'
      },
    ]
  },
  change_title(e){
    this.setData({
      set_title : e.currentTarget.dataset.index
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