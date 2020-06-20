// pages/myDetails/myDetails.js
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_tabbar_arr:['经验','话题','打卡'],
    tabbar_selected: 0,
    isdisabled:true,
    updata_btn:'修改资料',
  },

  updata(){
    this.setData({
      isdisabled : !this.data.isdisabled,
      updata_btn : this.data.isdisabled? '保存资料':'修改资料'
    })

    if(this.data.isdisabled)
      app.showToast('修改成功','success')

  },
  change_tabbar(e){
    this.setData({
      tabbar_selected: e.currentTarget.dataset.index 
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