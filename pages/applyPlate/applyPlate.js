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
    max_content: 1,
    img_num : 0
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

  get_img_num(e){
    let img_num =e.detail.img_num;
    this.setData({
      img_num
    })
  },

  // 图片上传
  uploadFile(){
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
      filePath: tempFilePaths[0],
      name: 'file',
      formData: {
        'user': 'test'
      },
      success (res){
        const data = res.data
        //do something
      }
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