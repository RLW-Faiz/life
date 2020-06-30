//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },

  // ajax
  
  wx_ajax: function (url,data='',method) {

    // 地址
    const APIURL = '';

    return new Promise(function (resolve, reject) {
      wx.request({
        url: APIURL + url,
        data,
        method,

        success(res) {
          //跟服务器通信是否正常
          switch(res.statusCode)
          {
            case 200 : 
              resolve(res.data);
              break;
            case 400 : 
              wx.showToast({
                title:res.data.msg,
                icon:'none',
                duration: 1500
              })
              resolve();
              break;
            case 500 : 
              wx.showToast({
                title:res.data.msg,
                icon:'none',
                duration: 1500
              })
              resolve();
              break;
            default:
              wx.showToast({
                title:res.data.msg,
                icon:'none',
                duration: 1500
              })
          }
        },

        fail(e) {
          wx.showToast({
            title:'网络异常',
            icon:'none',
            duration: 1500
          })
          reject(e)
        }
      });
    })
  },

  //显示消息提示框 
  showToast(title, icon) {
    wx.showToast({
      title,
      icon,
      duration: 1500
    })
  },

})