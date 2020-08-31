//index.js
//获取应用实例
import Toast from "../../dist/toast/toast";
const app = getApp()

Page({
  data: {
    active: 0,
    radio: '1',
    index: 0,
    commericePrice: '',//贷款总额
    limtyear: 20,//贷款年限
    commericeWay: '旧版基准利率',//利率方式
    basePR: '4.9',//基准利率
    show: false,//sheet显示与隐藏
    actions: [],
    type: '',//sheet类型
    toggleBusiness: false,//切换计算方式显示
    houseTotalPrice: '',//商业贷款房屋总价
    houseTotalPrice1: '',//组合贷款房屋总价
    downPayRatio: 30,//首付比例
    firstPayMoney: '0.00',//首付金额
    totalFundLoans: '',//公积金贷款总额
    interestFunLoan: 3.25,//基准利率
    loanPrice: '',//贷款总额
    title: '',//sheet面板标题
    toggleProfit: false,//切换利率方式下显示
    lprValue: 4.75,//LPR
    bpValue: '',//基点
    hideImg: true,//go图标显示隐藏
    toggleBtn: false,//切换计算按钮,
    timeFlag: 1
  },
  goSheet(e){
    console.log(e.target.id)
    switch (e.target.id) {
      case 'year':
       this.setData({
         title: '贷款年限',
         type: 'year',
         actions:[
           {
             name: '30'
           },
           {
             name: '29'
           },
           {
             name: '28'
           },
           {
             name: '27'
           },
           {
             name: '26'
           },
           {
             name: '25'
           },
           {
             name: '24'
           },
           {
             name: '23'
           },
           {
             name: '22'
           },
           {
             name: '21'
           },
           {
             name: '20'
           },
           {
             name: '19'
           },
           {
             name: '18'
           },
           {
             name: '17'
           },
           {
             name: '16'
           },
           {
             name: '15'
           },
           {
             name: '14'
           },
           {
             name: '13'
           },
           {
             name: '12'
           },
           {
             name: '11'
           },
           {
             name: '10'
           },
           {
             name: '9'
           },
           {
             name: '8'
           },
           {
             name: '7'
           },
           {
             name: '6'
           },
           {
             name: '5'
           },
           {
             name: '4'
           },
           {
             name: '3'
           },
           {
             name: '2'
           },
           {
             name: '1'
           }
         ]
       });
            break;
      case 'profileRate':
        this.setData({
          title: '利率方式',
          type: 'profileRate',
          actions: [
            {
              name: '旧版基准利率'
            },
            {
              name: '最新LPR'
            }
          ]
        });
        break;
      case 'loanRate' :
        this.setData({
          title: '商业贷款利率',
          type: 'loanRate',
          actions: [
            {
              name: 3.43
            },
            {
              name: 3.68
            },
            {
              name: 3.92
            },
            {
              name: 4.17
            },
            {
              name: 4.41
            },
            {
              name: 4.66
            },
            {
              name: 5.15
            },
            {
              name: 5.39
            },
            {
              name: 5.64
            },
            {
              name: 5.88
            },
            {
              name: 6.13
            },
            {
              name: 6.37
            },
          ]
        });
        break;
      case 'firstPayRatio':
        this.setData({
          title: '首付比例',
          type: 'firstPayRatio',
          actions: [
            {
              name: 20
            },
            {
              name: 25
            },
            {
              name: 30
            },
            {
              name: 35
            },
            {
              name: 40
            },
            {
              name: 45
            },
            {
              name: 50
            },
            {
              name: 55
            },
            {
              name: 60
            },
            {
              name: 65
            },
            {
              name: 70
            },
            {
              name: 75
            },
            {
              name: 80
            },
          ]
        });
        break;
      case 'funLoan' :
        this.setData({
          title: '公积金贷款利率',
          type: 'funLoan',
          actions: [
            {
              name: 3.25
            },
            {
              name: 2.27
            },
            {
              name: 2.44
            },
            {
              name: 2.60
            },
            {
              name: 2.76
            },
            {
              name: 2.93
            },
            {
              name: 3.09
            },
            {
              name: 3.41
            },
            {
              name: 3.58
            },
            {
              name: 3.90
            },
            {
              name: 4.23
            }
          ]
        });
        break;
      default:
        break;
    }
    this.setData({ show: true });
  },
  commericePriceInput(e){
    if(e.detail.value==""){
      clearTimeout(this.timeFlag);
      this.timeFlag = setTimeout(()=>{
        this.setData({
          toggleBtn: false
        });
      },1000);
      return;
    }
    if(this.data.radio === "1"){
      clearTimeout(this.timeFlag);
      this.timeFlag=setTimeout(()=>{
        this.setData({
          commericePrice: e.detail.value,
          toggleBtn: true
        })
      },500);
    }
  },
  loanPriceInput(e){
    if(e.detail.value==="" || this.data.totalFundLoans===""){
      clearTimeout(this.timeFlag);
      this.timeFlag = setTimeout(()=>{
        this.setData({
          loanPrice: e.detail.value,
          toggleBtn: false
        });
      },1000);
      return;
    }
    if(this.data.radio === "1"){
      clearTimeout(this.timeFlag);
      this.timeFlag=setTimeout(()=>{
        this.setData({
          loanPrice: e.detail.value,
          toggleBtn: true
        })
      },500);
    }
  },
  totalFundLoansInput(e){
    if(this.data.radio==="1"){
      if(e.detail.value==="" || this.data.loanPrice===""){
        clearTimeout(this.timeFlag);
        this.timeFlag = setTimeout(()=>{
          this.setData({
            totalFundLoans: e.detail.value,
            toggleBtn: false
          });
        },1000);
        return;
      }
      console.log(e.detail.value)
      clearTimeout(this.timeFlag);
      this.timeFlag=setTimeout(()=>{
        this.setData({
          totalFundLoans: e.detail.value,
          toggleBtn: true
        })
      },500);
    }else if(this.data.radio=="2"){
      if(e.detail.value==="" || this.data.houseTotalPrice1Input===""){
        clearTimeout(this.timeFlag);
        this.timeFlag = setTimeout(()=>{
          this.setData({
            totalFundLoans: e.detail.value,
            toggleBtn: false
          });
        },1000);
        return;
      }
      clearTimeout(this.timeFlag);
      this.timeFlag=setTimeout(()=>{
        this.setData({
          totalFundLoans: e.detail.value,
          toggleBtn: true
        })
      },500);
    }
  },
  houseTotalPriceInput(e){
    if(e.detail.value==""){
      clearTimeout(this.timeFlag);
      this.timeFlag = setTimeout(()=>{
        this.setData({
          toggleBtn: false
        });
      },1000);
      return;
    }
    if(this.data.radio === "2"){
      clearTimeout(this.timeFlag);
      this.timeFlag=setTimeout(()=>{
        this.setData({
          houseTotalPrice: e.detail.value,
          toggleBtn: true
        })
      },500);
    }
  },
  houseTotalPrice1Input(e){
    if(e.detail.value==="" || this.data.totalFundLoans===""){
      clearTimeout(this.timeFlag);
      this.timeFlag = setTimeout(()=>{
        this.setData({
          houseTotalPrice1: e.detail.value,
          toggleBtn: false
        });
      },1000);
      return;
    }
    if(this.data.radio === "1"){
      clearTimeout(this.timeFlag);
      this.timeFlag=setTimeout(()=>{
        this.setData({
          houseTotalPrice1: e.detail.value,
          toggleBtn: true
        })
      },500);
    }
  },
  lprValueInput(e){
    if(e.detail.value===""){
      clearTimeout(this.timeFlag);
      this.timeFlag = setTimeout(()=>{
        this.setData({
          lprValue: '0.00'
        });
      },1000);
      return;
    }
    if(this.data.radio === "1"){
      clearTimeout(this.timeFlag);
      this.timeFlag=setTimeout(()=>{
        this.setData({
          lprValue: e.detail.value
        })
      },500);
    }
  },
  onGetUserInfo(e) {
    console.log(e.detail);
  },
  onChange(event) {
    console.log(event)
  },
  onRadioChange(event) {
    this.setData({
      toggleBusiness: event.detail== "1" ? false : true,
      radio: event.detail
    });
  },
  bindViewTap: function(e) {
    console.log(e)
    this.setData({
      index: e.target.dataset.index,
      radio: '1',
      commericePrice: '',
      limtyear: 20,
      commericeWay: '旧版基准利率',
      basePR: '4.9',
      type: '',
      toggleBusiness: false,
      houseTotalPrice: '',
      downPayRatio: 30,
      firstPayMoney: '0.00',
      totalFundLoans: '',
      interestFunLoan: 3.25,
      loanPrice: '',
      toggleProfit: false,
      lprValue: 4.75,
      bpValue: '',
      hideImg: true,
      toggleBtn: false,
    });
  },
  onClose:function(e){
    console.log(e)
    if(e.detail.detail === "" || !e.detail.detail){
      this.setData({
        show: false
      });
      return;
    }else if(e.detail.detail == "最新LPR"){
      const {lprValue} = this.data;
      //获取lpr最新数据
      this.setData({
        toggleProfit: true,
        hideImg: false,
        basePR: lprValue
      })
    }else if(e.detail.detail == "旧版基准利率"){
      this.setData({
        toggleProfit: false,
        hideImg: true,
        basePR: 4.9
      })
    }
    switch (e.detail.type) {
      case 'year':
        this.setData({
          limtyear: e.detail.detail
        });
        break;
      case 'profileRate':
        this.setData({
          commericeWay: e.detail.detail
        });
        break;
      case 'loanRate' :
        this.setData({
          basePR: e.detail.detail
        });
        break;
      case 'firstPayRatio' :
        this.setData({
          downPayRatio: e.detail.detail
        });
        break;
      case 'funLoan' :
        this.setData({
          interestFunLoan: e.detail.detail
        });
        break;
      default:
        break;
    }
    this.setData({
      show: false
    })
  },
  onLoad: function () {




  },
  computed1(){
    if(this.data.radio=="1"){
      console.log(1)
    }else if(this.data.radio=="2"){
      console.log(2)
    }
    if(this.data.hideImg){

    }else{
      if(this.data.lprValue==0||this.data.lprValue=="0"){
        Toast('LPR数值不为0');
        return;
      }
    }
  },
  computed2:function () {
    if(this.data.radio=="1"){

    }else if(this.data.radio=="2"){

    }
    if(this.data.hideImg){

    }else{
      if(this.data.lprValue==0||this.data.lprValue=="0"){
        Toast('LPR数值不为0');
        return;
      }
    }
  },
  computed3(){
    if(this.data.radio=="1"){

    }else if(this.data.radio=="2"){

    }
  }
});
