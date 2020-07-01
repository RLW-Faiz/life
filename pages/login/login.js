// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: '',
    input_arr: ['用户名', '密码', '验证码'],
    input_value: ['user_name', 'user_pwd', 'code']
  },

  go_add(e) {
    let index = e.currentTarget.dataset.status,
      url = "/pages/register/register",
      url1 = "/pages/forgetPassword/forgetPassword";
    wx.navigateTo({
      url: index == 1 ? url : url1
    })
  },

  formSubmit(e) {
    if(e.detail.value.code != this.data.code)
    {
      app.showToast('验证码错误', 'none');
      this.getCode();
      return;
    }
      
    let url = 'login',
      data = {
        username: e.detail.value.user_name,
        password: e.detail.value.user_pwd
      },
      method = 'get';
    app.wx_ajax(url, data, method)
      .then(res => {
        if(res.data != 'loginError')
        {
          app.showToast('登录成功', res.data.result);
          wx.setStorageSync('userInfo', res.data.user)
          wx.switchTab({
            url: '/pages/index/index',
          })
        }
        else
        {
          app.showToast('用户名或者密码错误', 'none')
        }
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCode()
  },

  getCode() {
    let that = this,
      url = 'verificationCode',
      data = '',
      method = 'get';
    app.wx_ajax(url, data, method)
      .then(res => {
        console.log()
        that.setData({
          code: res.data.code
        })
      })
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