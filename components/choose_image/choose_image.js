// components/choose_image/choose_image.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    max_content:{
      type:Number,
      value:1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    max_count : 1,
    img_num: 0,
    imageSrc:'',
    img_arr:[],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    delete_item(e){
      let arr_index = e.currentTarget.dataset.index,
      img_arr = this.data.img_arr;

      img_arr.splice(arr_index,1);

      this.setData({
        img_arr : img_arr,
        img_num : this.data.img_num-1
      })

      this.send_img_num()
    },

    getImage(){
      this.data.img_num <this.data.max_count?this.chooseImage():app.showToast('超出上限','none')
    },

    chooseImage(){
      let that = this
      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album'],
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths;
          let img_num = that.data.img_num;
          
          that.setData({
            img_arr :  that.data.img_arr.concat(tempFilePaths),
            img_num : that.data.img_num+1
          })
          that.send_img_num()
          
        }
      })
    },

    send_img_num(){
      let that = this;
      that.triggerEvent('img_num',{img_num: that.data.img_num})
    },
  }
})
