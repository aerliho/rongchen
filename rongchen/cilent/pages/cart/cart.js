// pages/cart/cart.js


Page({
  data:{
    cartList: {},
    selectedAllStatus: 0
  },
  bindSelectAll: function(event){
    if(this.data.selectedAllStatus){
      this.setData({
        selectedAllStatus : 0
      });
    }else{
      this.setData({
        selectedAllStatus : 1
      });
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // var app = getApp();
    
    // this.setData({
    //   cartList: app.globalData.g_selectedproducts
    // });
    // console.log(this.data.cartList);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    var app = getApp();
    
    this.setData({
      cartList: app.globalData.g_selectedproducts
    });
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})