Component({
  properties:{
    tab_index:{
      type:Number,
      value:1
    }
  },
  data: {
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/image/icon/customer_management.png",
      selectedIconPath: "/image/icon/customer_management_selecte.png",
      text: "首页"
    }, {
      pagePath: "/pages/modal/modal",
      iconPath: "/image/icon/home.png",
      selectedIconPath: "/image/icon/home_selecte.png",
      text: "打卡"
    }, {
      pagePath: "/pages/my/my",
      iconPath: "/image/icon/home.png",
      selectedIconPath: "/image/icon/home_selecte.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const url = e.currentTarget.dataset.path
      wx.switchTab({url})
    }
  }
})