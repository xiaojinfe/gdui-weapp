Component({
  properties: {
    prop: {
      type: String,
      value: 'index.properties'
    },
  },
  data: {
    title: '欢迎来到小金',
    message: '只是一个测试用的组件'
  },
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: () => {
          this.setData({
            flag: true,
          })
        }
      })
    }
  }
})
