(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BillDetail"],{"2a73":function(t,e,a){"use strict";a.r(e);var n,l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"billdetail"},[a("page-head",{attrs:{titleKey:"billDetailTitle",fixed:!0}}),"2"===t.renewStatus?[a("div",{staticClass:"confirm-bg-renew"}),a("div",{staticClass:"confirm-title-renew"},[a("div",{staticClass:"renew-title"},[a("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(t.renewAmount)))]),a("span",[t._v(t._s(t.$t("cn-1073")))])]),a("div",{staticClass:"renew-split"}),a("van-cell-group",{staticClass:"confirm-body-renew"},[a("van-cell",{attrs:{title:t.$t("cn-1080"),value:""+t.$t("home-unit")+t.$formatMoney(t.renewAmount),"is-link":"","arrow-direction":t.showRenewDetail?"down":""},on:{click:function(e){t.showRenewDetail=!t.showRenewDetail}}}),a("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.showRenewDetail,expression:"showRenewDetail"}],staticClass:"load-detail-renew"},[a("van-cell-group",{staticClass:"load-detail-body"},[a("van-cell",{attrs:{title:t.$t("cn-1075"),value:""+t.$t("home-unit")+t.$formatMoney(t.renewRepaymentAmount)}}),a("van-cell",{attrs:{title:t.$t("cn-1076"),value:""+t.$t("home-unit")+t.$formatMoney(t.renewFee)}})],1)],1),a("van-cell",{attrs:{title:t.$t("cn-1077"),value:t.renewDueTime}}),a("van-cell",{attrs:{title:t.$t("cn-10771"),value:""+t.$t("home-unit")+t.$formatMoney(t.renewLeftAmount)}})],1),a("div",{staticClass:"renew-split",staticStyle:{"margin-top":"10px"}}),a("div",{staticClass:"repayment-tips-renew"},[a("p",[t._v(t._s(t.$t("cn-1084")))])]),a("van-button",{staticStyle:{width:"100%"},attrs:{type:"info"},on:{click:function(e){return t.$router.push({path:"/repayment",query:{orderId:t.orderId}})}}},[t._v(t._s(t.$t("cn-1083")))])],1),a("div",{staticClass:"detail-oldDetail"},[a("van-cell",{staticStyle:{padding:"10px 20px","font-size":"13px","font-weight":"bold"},attrs:{title:t.$t("cn-1087"),"is-link":"","arrow-direction":t.showOldDetail?"down":""},on:{click:function(e){t.showOldDetail=!t.showOldDetail}}}),a("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.showOldDetail,expression:"showOldDetail"}],staticStyle:{"background-color":"#f4f4f4",padding:"0"}},[a("div",{staticClass:"confirm-title"},[a("span",[t._v(t._s(t.$t("cn-346")))]),a("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(t.loanAmount)))]),a("span",[t._v(t._s(t.$t("cn-1038")))])]),a("van-cell-group",{staticClass:"confirm-body"},[a("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:""+t.$t("home-unit")+t.$formatMoney(t.loanAmount)}}),a("van-cell",{attrs:{title:t.$t("cn-86"),value:""+t.loanPeriod+t.$t("cn-2881")}}),a("van-cell",{attrs:{title:t.$t("cn-348"),value:t.loanTime}}),t.$isNullOrEmpty(t.bankName)?t._e():a("van-cell",{attrs:{title:t.$t("cn-71"),value:t.bankName+"("+t.cardNo+")"}})],1),a("van-cell-group",{staticClass:"confirm-body confirm-warning"},[a("van-cell",{attrs:{title:t.$t("cn-73"),value:""+t.$t("home-unit")+t.$formatMoney(t.leftAmount||0),"is-link":"","arrow-direction":t.showDetail?"down":""},on:{click:function(e){t.showDetail=!t.showDetail}}}),a("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"load-detail",staticStyle:{padding:"0 0 0 20px"}},[a("van-cell-group",{staticClass:"load-detail-body"},[t.$isNullOrEmpty(t.differenceFee)?t._e():a("van-cell",{attrs:{title:t.$t("cn-300"),value:t.$t("home-unit")+t.$formatMoney(t.differenceFee||0)}}),t.$isNullOrEmpty(t.dueFee)?t._e():a("van-cell",{attrs:{title:t.$t("cn-45"),value:t.$t("home-unit")+t.$formatMoney(t.dueFee||0)}})],1)],1),t.$isNullOrEmpty(t.dueTime)?t._e():a("van-cell",{attrs:{title:t.$t("cn-75"),value:t.dueTime}}),t.$isNullOrEmpty(t.overdueDays)?t._e():a("van-cell",{attrs:{title:t.$t("cn-47"),value:""+t.overdueDays+t.$t("cn-2881")}})],1)],1)],1)]:["0"===t.orderStatus||"1"===t.orderStatus?[a("div",{staticClass:"confirm-title"},[a("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(t.loanAmount)))]),a("span",[t._v(t._s(t.$t("cn-346")))]),a("div",{staticClass:"split"}),a("h4",[t._v(t._s(t.$t("cn-1001")))])]),a("van-cell-group",{staticClass:"confirm-body"},[a("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:""+t.$t("home-unit")+t.$formatMoney(t.loanAmount)}}),a("van-cell",{attrs:{title:t.$t("cn-86"),value:""+t.loanPeriod+t.$t("cn-2881")}}),a("van-cell",{attrs:{title:t.$t("cn-348"),value:t.loanTime}}),t.$isNullOrEmpty(t.bankName)?t._e():a("van-cell",{attrs:{title:t.$t("cn-71"),value:t.bankName+"("+t.cardNo+")"}})],1)]:t._e(),"7"===t.orderStatus?[a("div",{staticClass:"confirm-title"},[a("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(t.netAmount)))]),a("span",[t._v(t._s(t.$t("cn-3462")))]),a("div",{staticClass:"split"}),a("h3",[t._v(t._s(t.paySenderName))]),a("h4",[t._v(t._s(t.$t("cn-2150")))]),a("h3",[t._v(t._s(t.userFirstName)+" "+t._s(t.userMiddleName)+" "+t._s(t.userLastName))]),a("h4",[t._v(t._s(t.$t("cn-215011")))]),a("h3",[t._v(t._s(t.offlineWithdrawCode))]),a("h4",[t._v(t._s(t.$t("cn-215012")))]),a("p",[t._v(t._s(t.$t("cn-2151"))),a("label",[t._v(t._s(t.offlineWithdrawCodeExpiredTime))]),t._v(t._s(t.$t("cn-2152")))])]),a("van-cell-group",{staticClass:"confirm-body"},[a("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:""+t.$t("home-unit")+t.$formatMoney(t.loanAmount)}}),a("van-cell",{attrs:{title:t.$t("cn-300"),value:""+t.$t("home-unit")+t.$formatMoney(t.fee)}}),a("van-cell",{attrs:{title:t.$t("cn-86"),value:""+t.loanPeriod+t.$t("cn-2881")}}),a("van-cell",{attrs:{title:t.$t("cn-348"),value:t.loanTime}}),t.$isNullOrEmpty(t.bankName)?t._e():a("van-cell",{attrs:{title:t.$t("cn-71"),value:t.bankName+"("+t.cardNo+")"}})],1)]:t._e(),"2"===t.orderStatus?[a("div",{staticClass:"confirm-title"},[a("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(t.leftAmount)))]),a("span",[t._v(t._s(t.$t("cn-34611")))]),a("div",{staticClass:"split"}),a("h3",[t._v(t._s(t.offlineRepaymentCode))]),a("h4",[t._v(t._s(t.$t("cn-2155")))])]),a("van-cell-group",{staticClass:"confirm-body"},[a("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:""+t.$t("home-unit")+t.$formatMoney(t.loanAmount)}}),a("van-cell",{attrs:{title:t.$t("cn-86"),value:""+t.loanPeriod+t.$t("cn-2881")}}),a("van-cell",{attrs:{title:t.$t("cn-348"),value:t.loanTime}}),t.$isNullOrEmpty(t.bankName)?t._e():a("van-cell",{attrs:{title:t.$t("cn-71"),value:t.bankName+"("+t.cardNo+")"}})],1),a("van-cell-group",{staticClass:"confirm-body confirm-info"},[a("van-cell",{attrs:{title:t.$t("cn-73"),value:""+t.$t("home-unit")+t.$formatMoney(t.leftAmount||0),"is-link":"","arrow-direction":t.showDetail?"down":""},on:{click:function(e){t.showDetail=!t.showDetail}}}),a("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"load-detail",staticStyle:{padding:"0 0 0 20px"}},[a("van-cell-group",{staticClass:"load-detail-body"},[a("van-cell",{attrs:{title:t.$t("cn-300"),value:t.$t("home-unit")+t.$formatMoney(t.differenceFee||0)}})],1)],1),a("van-cell",{attrs:{title:t.$t("cn-75"),value:t.dueTime}})],1),a("div",{staticClass:"billDetail-btn"},[a("van-button",{attrs:{type:"info"},on:{click:function(e){return t.$router.push({path:"/repayment",query:{orderId:t.orderId}})}}},[t._v(t._s(t.$t("cn-76")))]),"1"===t.renewStatus?a("van-button",{attrs:{plain:"",type:"info"},on:{click:function(e){return t.$router.push({path:"/renew",query:{orderId:t.orderId}})}}},[t._v(t._s(t.$t("cn-1079")))]):t._e()],1)]:t._e(),"3"===t.orderStatus?[a("div",{staticClass:"confirm-title"},[a("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(t.leftAmount)))]),a("span",[t._v(t._s(t.$t("cn-34611")))])]),a("van-cell-group",{staticClass:"confirm-body"},[a("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:""+t.$t("home-unit")+t.$formatMoney(t.loanAmount)}}),a("van-cell",{attrs:{title:t.$t("cn-86"),value:""+t.loanPeriod+t.$t("cn-2881")}}),a("van-cell",{attrs:{title:t.$t("cn-348"),value:t.loanTime}}),t.$isNullOrEmpty(t.bankName)?t._e():a("van-cell",{attrs:{title:t.$t("cn-71"),value:t.bankName+"("+t.cardNo+")"}})],1),a("van-cell-group",{staticClass:"confirm-body confirm-info"},[a("van-cell",{attrs:{title:t.$t("cn-73"),value:""+t.$t("home-unit")+t.$formatMoney(t.leftAmount||0),"is-link":"","arrow-direction":t.showDetail?"down":""},on:{click:function(e){t.showDetail=!t.showDetail}}}),a("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"load-detail",staticStyle:{padding:"0 0 0 20px"}},[a("van-cell-group",{staticClass:"load-detail-body"},[a("van-cell",{attrs:{title:t.$t("cn-300"),value:t.$t("home-unit")+t.$formatMoney(t.differenceFee||0)}})],1)],1),a("van-cell",{attrs:{title:t.$t("cn-75"),value:t.dueTime}})],1),a("div",{staticClass:"billDetail-btn"},[a("van-button",{attrs:{type:"info",disabled:""}},[t._v(t._s(t.$t("cn-342"))+"...")])],1)]:t._e(),"4"===t.orderStatus?[a("div",{staticClass:"confirm-title"},[a("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(t.leftAmount)))]),a("span",[t._v(t._s(t.$t("cn-34611")))]),a("div",{staticClass:"split"}),a("h3",[t._v(t._s(t.offlineRepaymentCode))]),a("h4",[t._v(t._s(t.$t("cn-2155")))])]),a("van-cell-group",{staticClass:"confirm-body"},[a("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:""+t.$t("home-unit")+t.$formatMoney(t.loanAmount)}}),a("van-cell",{attrs:{title:t.$t("cn-86"),value:""+t.loanPeriod+t.$t("cn-2881")}}),a("van-cell",{attrs:{title:t.$t("cn-348"),value:t.loanTime}}),t.$isNullOrEmpty(t.bankName)?t._e():a("van-cell",{attrs:{title:t.$t("cn-71"),value:t.bankName+"("+t.cardNo+")"}})],1),a("van-cell-group",{staticClass:"confirm-body confirm-warning"},[a("van-cell",{attrs:{title:t.$t("cn-73"),value:t.$t("home-unit")+t.$formatMoney(t.leftAmount||0),"is-link":"","arrow-direction":t.showDetail?"down":""},on:{click:function(e){t.showDetail=!t.showDetail}}}),a("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"load-detail",staticStyle:{padding:"0 0 0 20px"}},[a("van-cell-group",{staticClass:"load-detail-body"},[a("van-cell",{attrs:{title:t.$t("cn-300"),value:t.$t("home-unit")+t.$formatMoney(t.differenceFee||0)}}),a("van-cell",{attrs:{title:t.$t("cn-45"),value:t.$t("home-unit")+t.$formatMoney(t.dueFee||0)}})],1)],1),a("van-cell",{attrs:{title:t.$t("cn-75"),value:t.dueTime}}),a("van-cell",{attrs:{title:t.$t("cn-47"),value:""+t.overdueDays+t.$t("cn-2881")}})],1),a("div",{staticClass:"billDetail-btn"},[a("van-button",{attrs:{type:"danger"},on:{click:function(e){return t.$router.push({path:"/repayment",query:{orderId:t.orderId}})}}},[t._v(t._s(t.$t("cn-76")))]),"1"===t.renewStatus?a("van-button",{attrs:{plain:"",type:"info"},on:{click:function(e){return t.$router.push({path:"/renew",query:{orderId:t.orderId}})}}},[t._v(t._s(t.$t("cn-1079")))]):t._e()],1)]:t._e(),"5"===t.orderStatus?[a("div",{staticClass:"confirm-title"},[a("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(t.leftAmount)))]),a("span",[t._v(t._s(t.$t("cn-34611")))]),a("span",{staticClass:"ing"},[t._v(t._s("3"===t.renewStatus?t.$t("cn-1081"):t.$t("cn-344")))])]),a("van-cell-group",{staticClass:"confirm-body"},[a("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:t.$t("home-unit")+t.$formatMoney(t.loanAmount)}}),a("van-cell",{attrs:{title:t.$t("cn-86"),value:""+t.loanPeriod+t.$t("cn-2881")}}),a("van-cell",{attrs:{title:t.$t("cn-348"),value:t.loanTime}}),t.$isNullOrEmpty(t.bankName)?t._e():a("van-cell",{attrs:{title:t.$t("cn-71"),value:t.bankName+"("+t.cardNo+")"}})],1),a("van-cell-group",{staticClass:"confirm-body"},[a("van-cell",{attrs:{title:t.$t("cn-95"),value:t.$t("home-unit")+t.$formatMoney(t.repaymentAmount||0),"is-link":"","arrow-direction":t.showDetail?"down":""},on:{click:function(e){t.showDetail=!t.showDetail}}}),a("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"load-detail",staticStyle:{padding:"0 0 0 20px"}},[a("van-cell-group",{staticClass:"load-detail-body"},[a("van-cell",{attrs:{title:t.$t("cn-300"),value:t.$t("home-unit")+t.$formatMoney(t.differenceFee||0)}}),a("van-cell",{attrs:{title:t.$t("cn-45"),value:t.$t("home-unit")+t.$formatMoney(t.dueFee||0)}})],1)],1),t.$isNullOrEmpty(t.dueTime)?t._e():a("van-cell",{attrs:{title:t.$t("cn-75"),value:t.dueTime}}),t.$isNullOrEmpty(t.overdueDays)?t._e():a("van-cell",{attrs:{title:t.$t("cn-47"),value:""+t.overdueDays+t.$t("cn-2881")}}),t.$isNullOrEmpty(t.repaymentTime)?t._e():a("van-cell",{attrs:{title:t.$t("cn-2156"),value:t.repaymentTime}})],1)]:t._e(),"6"===t.orderStatus?[a("div",{staticClass:"confirm-title"},[a("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(t.leftAmount)))]),a("span",[t._v(t._s(t.$t("cn-34611")))]),a("span",{staticClass:"ing"},[t._v(t._s(t.$t("cn-345")))])]),a("van-cell-group",{staticClass:"confirm-body"},[a("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:t.$t("home-unit")+t.$formatMoney(t.loanAmount)}}),a("van-cell",{attrs:{title:t.$t("cn-86"),value:t.loanPeriod}}),a("van-cell",{attrs:{title:t.$t("cn-348"),value:t.loanTime}}),t.$isNullOrEmpty(t.bankName)?t._e():a("van-cell",{attrs:{title:t.$t("cn-71"),value:t.bankName+"("+t.cardNo+")"}})],1)]:t._e(),"99"===t.orderStatus?[a("div",{staticClass:"confirm-bg"}),a("div",{staticClass:"confirm-title"},[a("span",[t._v(t._s(t.$t("cn-346")))]),a("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(2e5)))]),a("span",[t._v("借款金额")])]),a("van-cell-group",{staticClass:"confirm-body"},[a("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:"2000"}}),a("van-cell",{attrs:{title:t.$t("cn-86"),value:"50天"}}),a("van-cell",{attrs:{title:t.$t("cn-348"),value:"2019-11-11"}}),a("van-cell",{attrs:{title:t.$t("cn-349"),value:"2019-11-12"}}),a("van-cell",{attrs:{title:t.$t("cn-71"),value:"招商银行"}})],1),a("van-cell-group",{staticClass:"confirm-body confirm-info"},[a("van-cell",{attrs:{title:"总计代还",value:"20001","is-link":"","arrow-direction":t.showDetail?"down":""},on:{click:function(e){t.showDetail=!t.showDetail}}}),a("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"load-detail",staticStyle:{padding:"0 0 0 20px"}},[a("van-cell-group",{staticClass:"load-detail-body"},[a("van-cell",{attrs:{title:"服务费",value:"200"}})],1)],1),a("van-cell",{attrs:{title:"到期时间",value:"2019-11-19"}})],1),a("div",{staticClass:"billDetail-btn"},[a("van-button",{attrs:{type:"info"}},[t._v("立即还款")]),a("van-button",{attrs:{plain:"",type:"info"}},[t._v("查看协议")])],1)]:t._e()]],2)},i=[],s=(a("b0c0"),a("ac1f"),a("5319"),a("2fa7")),o=(a("b342"),a("ad06")),r=(a("3ec1"),a("7744")),c=(a("47e2"),a("2241")),u=(a("2a53"),a("34e9")),d=(a("c625"),a("b650")),m=a("a474"),v=(n={},Object(s["a"])(n,d["a"].name,d["a"]),Object(s["a"])(n,u["a"].name,u["a"]),Object(s["a"])(n,c["a"].Component.name,c["a"].Component),Object(s["a"])(n,r["a"].name,r["a"]),Object(s["a"])(n,o["a"].name,o["a"]),n),$={name:"BillDetail",components:v,props:{},data:function(){return{showOldDetail:!0,showRenewDetail:!0,renewDeadlineTime:"- -",renewAmount:"- -",renewFee:"- -",renewDueTime:"- -",renewLeftAmount:"- -",renewRepaymentAmount:"- -",offlineWithdrawCode:"- -",paySenderName:"- -",userFirstName:"- -",userMiddleName:"- -",userLastName:"- -",offlineWithdrawCodeExpiredTime:"- -",offlineRepaymentCode:"- -",offlineRepaymentCodeExpiredTime:"- -",showDetail:!0,orderStatus:"",loanAmount:"",netAmount:"",loanPeriod:"",fee:"",discountAmount:"",differenceFee:"",loanTime:"",netTime:"",dueTime:"",leftAmount:"",cardNo:"",bankName:"",iconUrl:"",repaymentAmount:"",repaymentTime:"",dueFee:"",overdueDays:"",renewStatus:"",orderId:""}},computed:{},watch:{},created:function(){this.orderId=this.$route.query.orderId,this.renewStatus=this.$route.query.renewStatus,this.$isNullOrEmpty(this.orderId)&&this.$toast(this.$t("cn-351")),"2"===this.renewStatus&&this.getRenewDetail(),this.getOrderDetail()},mounted:function(){},destroyed:function(){},methods:{getRenewDetail:function(){var t=this;Object(m["v"])({userGid:localStorage.getItem("userGid"),orderId:this.orderId}).then((function(e){if("0000"===e.code){var a=e.data;t.renewDeadlineTime=a.renewDeadlineTime,t.renewAmount=a.renewAmount,t.renewRepaymentAmount=a.repaymentAmount,t.renewFee=a.renewFee,t.renewDueTime=a.renewDueTime,t.renewLeftAmount=a.renewLeftAmount}else t.$toast(e.message)})).catch((function(){t.$toast(t.$t("cn-1044"))}))},getOrderDetail:function(){var t=this;Object(m["f"])({userGid:localStorage.getItem("userGid"),orderId:this.orderId}).then((function(e){if("0000"===e.code){var a=e.data;if(t.orderStatus=a.orderStatus,t.loanAmount=a.loanAmount,t.netAmount=a.netAmount,t.loanPeriod=a.loanPeriod,t.fee=a.fee,t.discountAmount=a.discountAmount,t.loanTime=a.loanTime,t.netTime=a.netTime,t.dueTime=a.dueTime,t.leftAmount=a.leftAmount,t.cardNo=a.cardNo,t.bankName=a.bankName,t.iconUrl=a.iconUrl,t.repaymentAmount=a.repaymentAmount,t.repaymentTime=a.repaymentTime,t.dueFee=a.dueFee,t.overdueDays=a.overdueDays,t.paySenderName=a.paySenderName,t.userFirstName=a.userFirstName,t.userMiddleName=a.userMiddleName,t.userLastName=a.userLastName,t.offlineWithdrawCode=a.offlineWithdrawCode,t.offlineWithdrawCodeExpiredTime=a.offlineWithdrawCodeExpiredTime,t.offlineRepaymentCode=a.offlineRepaymentCode,t.offlineRepaymentCodeExpiredTime=a.offlineRepaymentCodeExpiredTime,t.$isNullOrEmpty(t.discountAmount))t.differenceFee=t.fee;else{var n=(a.discountAmount||"").replace(/,/g,""),l=a.fee.replace(/,/g,"");t.differenceFee=t.accSub(l,n)}}else t.$toast(e.message)})).catch((function(){t.$toast(t.$t("cn-1044"))}))},showDialog:function(t){var e="",a="";1===t?a="Kasama sa halaga ng pautang ang bayad sa plano ng proteksyon ng borrower:50₱":2===t?(e="Paglalarawan ng overdue fee",a="Ang mga bayarin sa overdue ay kinakalkula batay sa bilang ng mga overdue na araw, at 2% ng prinsipal na dapat bayaran ay sisingilin bilang overdue fee para sa bawat araw na overdue."):(e="Mga detalye ng komprehensibong interes at gastos",a="1.Kabilang sa mga komprehensibong rate ng interes ang: interes at iba pang mga bayarin"),c["a"].alert({title:e,confirmButtonText:this.$t("cn-434"),cancelButtonText:this.$t("cn-1051"),message:a}).then((function(){}))}}},f=$,p=(a("6f4d"),a("2877")),h=Object(p["a"])(f,l,i,!1,null,"12cc134f",null);e["default"]=h.exports},"6f4d":function(t,e,a){"use strict";var n=a("cf57"),l=a.n(n);l.a},cf57:function(t,e,a){}}]);