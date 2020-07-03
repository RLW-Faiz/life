// pages/modal/modal.js
const app =getApp();
const util = require('../../utils/util');
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
    currentPage: 0,
    pageSize:10,
    maxSize:10,
    selected:1,
    playCord:'',
    max_count: 500,
    now_count: 0,
    titel:'',
    content:'',
    insistDay:''
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
  set_content(e){
    if(this.now_count > this.max_count)
    {}
    else{
      this.setData({
        now_count : e.detail.value.length
      })
    }
  },
  formSubmit(e) {
    let user = wx.getStorageSync('userInfo'),
    date = util.getYMD( new Date()),
    url = 'putMakeClockIn',
    data = {
      title : e.detail.value.titel,
      content : e.detail.value.content,
      insitDay : e.detail.value.insistDay,
      createTime : date,
      username : user.username
    },
    method='get';
    app.wx_ajax(url,data,method)
      .then(res =>{
        console.log(res.data)
        app.showToast('',res.data.success)
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAll();
  },
  getAll(){
    wx.showLoading({
      title: '加载中',
    })
    let that =this,
    url = 'GetAll',
    data={
      currentPage: this.data.currentPage,
      pageSize : this.data.pageSize
    },
    method = 'get';
    app.wx_ajax(url,data,method)
      .then(res=>{
        console.log(res.data)
        that.setData({
          playCord : res.data,
        })
        
        wx.hideLoading()
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
    if(this.data.currentPage+this.data.pageSize <this.data.maxSize)
    {
      this.setData({
        currentPage : this.data.currentPage+this.data.pageSize
      })
      this.getAll();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})