//wjsearch.js
Page({
  data: {
    wjtext: '',
    wjresult: '',
    textcount:0,
    mgtype: 1,
    ty_wj_type: 1, 
    mz_wj_type: 1, 
    xw_wj_type: 1,
    onOff: true
  },
  btnclick: function () {
    var onOff = this.data.onOff;
    this.setData({ onOff: !onOff });
  },
  bindwjInput: function (e) {
    this.setData({
      wjtext: e.detail.value,
      textcount: e.detail.value.length
    })
  },
  //违禁词查询
  wjSearch: function (e) {
    console.log(this.data.mgtype,this.data.ty_wj_type,this.data.mz_wj_type,this.data.xw_wj_type);
    wx.request({
      method: 'post',
      url: 'http://121.40.138.185:5001/wjsearch',
      data: {
        'text': this.data.wjtext,
        'mgtype': this.data.mgtype,
        'ty_wj_type': this.data.ty_wj_type,
        'mz_wj_type': this.data.mz_wj_type,
        'xw_wj_type': this.data.xw_wj_type
      },
      success: (res) => {
        console.log(res.data);
        this.setData({
          wjresult: res.data
        });
      }

    })
  },
  wjClear: function(e){
    this.setData({
      wjtext_value:'',
      wjtext:'',
      textcount: 0
    });
  },

  checkboxChange:function(e){
    console.log(e.detail.value);
    if (e.detail.value.indexOf('mgtype') != -1){
      this.setData({ mgtype:1})
    }else{
      this.setData({ mgtype: 0 })
    }
    if (e.detail.value.indexOf('ty_wj_type') != -1) {
      this.setData({ ty_wj_type: 1 })
    } else {
      this.setData({ ty_wj_type: 0 })
    }   
    if (e.detail.value.indexOf('mz_wj_type') != -1) {
      this.setData({ mz_wj_type: 1 })
    } else {
      this.setData({ mz_wj_type: 0 })
    }     
    if (e.detail.value.indexOf('xw_wj_type') != -1) {
      this.setData({ xw_wj_type: 1 })
    } else {
      this.setData({ xw_wj_type: 0 })
    }     
  },
})