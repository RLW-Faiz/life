// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input_arr:['用户名','密码','再次输入密码','手机号码'],
    input_value:['user_name','user_pwd','user_pwd_again','user_phone']
  },

  formSubmit: function (e) {
    if(e.detail.value.user_pwd == e.detail.value.user_pwd_again)
    {
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
    }
    else{
      console.log(e.detail.value.user_pwd);
      console.log(e.detail.value.user_pwd_again);
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