(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Loan"],{"0cc7":function(t,e,o){"use strict";o.r(e);var n,a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("page-head",{attrs:{titleKey:"loanTitle",fixed:!0}}),o("div",{staticClass:"loan-bg"},[o("b",[t._v(t._s(t.$formatMoney(t.leftQuota)))]),o("span",[t._v(t._s(t.$t("cn-271")))])]),o("div",{staticClass:"loan-form"},[o("van-cell-group",[o("van-field",{attrs:{type:"number",label:t.$t("cn-346"),placeholder:t.$t("cn-1037")},on:{blur:function(e){return t.amountHandle()}},model:{value:t.loanAmount,callback:function(e){t.loanAmount=e},expression:"loanAmount"}}),o("van-cell",{attrs:{"is-link":"",title:t.$t("cn-274"),value:t.loanDay},on:{click:function(e){t.showSel=!0}}}),t.vouCherList.length>0?o("van-cell",{attrs:{"is-link":"",title:t.$t("cn-1063")},on:{click:function(e){t.showVoucher=!0}}},[o("template",{slot:"default"},[t.$isNullOrEmpty(t.voucherGid)?t.unAutoSelect?o("span",{staticStyle:{color:"#F5530B"}},[t._v(t._s(t.$t("cn-1066")))]):o("span",{staticStyle:{color:"#808080"}},[t._v(t._s(t.$t("cn-1067")))]):o("span",{staticStyle:{color:"#F5530B"}},[t._v(t._s(t.$t("cn-1068"))+t._s(t.$formatMoney(t.selectedVoucher.discountAmount))+t._s(t.$t("home-unit"))+t._s(t.$t("cn-1069")))]),o("span")])],2):t._e(),o("van-cell",{staticClass:"color-red",attrs:{"is-link":"",title:t.$t("cn-278"),value:t.carName},on:{click:function(e){t.showCar=!0}}})],1)],1),o("div",{staticClass:"loan-form"},[o("van-cell-group",[o("van-cell",{attrs:{title:t.$t("cn-275"),value:t.dueTime}}),o("van-cell",{attrs:{title:t.$t("cn-1038"),value:t.$formatMoney(t.leftAmount)}}),t.$isNullOrEmpty(t.discountAmount)?o("van-cell",{attrs:{title:t.$t("cn-277"),value:t.$formatMoney(t.fee)}}):o("van-cell",{staticStyle:{color:"#f83d14"},attrs:{title:t.$t("cn-277")}},[o("p",{attrs:{slot:"default"},slot:"default"},[o("span",{staticStyle:{display:"block",color:"#f83d14"}},[t._v(t._s(t.$formatMoney(t.fee)+" - "+t.$formatMoney(t.discountAmount)+t.$t("home-unit")))]),o("span",{staticStyle:{display:"block",color:"#f83d14"}},[t._v(t._s("= "+t.$formatMoney(t.differenceFee))+t._s(t.$t("home-unit")))])])])],1)],1),o("div",{staticClass:"loan-contract"},[o("van-checkbox",{attrs:{shape:"square"},model:{value:t.isReadContract,callback:function(e){t.isReadContract=e},expression:"isReadContract"}}),t._v(" "+t._s(t.$t("cn-305"))+" "),o("b",{on:{click:function(e){t.showContract(1,t.$t("cn-306"))}}},[t._v("《"+t._s(t.$t("cn-306"))+"》")])],1),o("van-button",{staticClass:"reg-submit",attrs:{type:"info",loading:t.isSubmit,"loading-text":t.$t("cn-1043")},on:{click:t.submitHandle}},[t._v(t._s(t.$t("cn-307")))]),o("van-popup",{style:{paddingTop:"40px",paddingBottom:"45px"},attrs:{position:"bottom",closeable:""},model:{value:t.showSel,callback:function(e){t.showSel=e},expression:"showSel"}},[o("van-radio-group",{model:{value:t.loanDay,callback:function(e){t.loanDay=e},expression:"loanDay"}},[o("van-cell-group",[o("van-cell",{attrs:{title:t.$t("cn-1053"),clickable:""},on:{click:function(e){t.loanDay=t.$t("cn-1053"),t.productCode="P001",t.showSel=!1}}},[o("van-radio",{attrs:{slot:"right-icon",name:t.$t("cn-1053")},slot:"right-icon"})],1),o("van-cell",{attrs:{title:t.$t("cn-1054"),clickable:""},on:{click:function(e){t.loanDay=t.$t("cn-1054"),t.productCode="P002",t.showSel=!1}}},[o("van-radio",{attrs:{slot:"right-icon",name:t.$t("cn-1054")},slot:"right-icon"})],1)],1)],1)],1),o("van-popup",{style:{paddingTop:"40px",paddingBottom:"45px"},attrs:{position:"bottom",closeable:""},model:{value:t.showCar,callback:function(e){t.showCar=e},expression:"showCar"}},[o("van-radio-group",{model:{value:t.carName,callback:function(e){t.carName=e},expression:"carName"}},[o("van-cell-group",t._l(t.bankCardList,(function(e,n){return o("van-cell",{key:n,attrs:{title:e.bankName+"-"+e.cardNo,clickable:""},on:{click:function(o){t.carName=e.bankName+"-"+e.cardNo,t.bankCardGid=e.cardGid,t.showCar=!1}}},[o("van-radio",{attrs:{slot:"right-icon",name:e.bankName+"-"+e.cardNo},on:{click:function(o){t.bankCardGid=e.cardGid}},slot:"right-icon"})],1)})),1)],1)],1),o("van-popup",{style:{height:"80%",minHeight:"30%",paddingTop:"40px",paddingBottom:"60px"},attrs:{position:"bottom",closeable:""},model:{value:t.showVoucher,callback:function(e){t.showVoucher=e},expression:"showVoucher"}},[o("van-radio-group",{staticClass:"voucher-body",model:{value:t.voucherGid,callback:function(e){t.voucherGid=e},expression:"voucherGid"}},t._l(t.vouCherList,(function(e,n){return o("div",{key:n,staticClass:"voucher-item",on:{click:function(e){t.showVoucher=!1}}},[o("div",{class:e.disabled?"voucherItem-used":"voucherItem"},[o("p",{staticClass:"voucherLeft"},[o("b",[t._v(t._s(e.name))]),o("span",{class:e.disabled?"red":""},[t._v(t._s(t.$t("cn-1058"))+t._s(t.$formatMoney(e.loanAmountLimit))+t._s(t.$t("home-unit")))]),o("span",[t._v(t._s(e.startDate)+" - "+t._s(e.endDate)+" "+t._s(t.$t("cn-1059")))])]),o("p",{staticClass:"voucherRight"},[o("b",[t._v(t._s(t.$formatMoney(e.discountAmount))+t._s(t.$t("home-unit")))]),o("span",[t._v(t._s(t.$t("cn-1060")))])])]),e.disabled?t._e():o("div",{staticClass:"voucher-radio"},[o("van-radio",{attrs:{"icon-size":"25","checked-color":"#e40e0e",name:e.discountGid}})],1)])})),0),o("p",{staticClass:"voucher-title"},[t._v(t._s(t.$t("cn-1070")))]),o("van-button",{staticClass:"voucher-nosel",attrs:{type:"info"},on:{click:t.unUseChart}},[t._v(t._s(t.$t("cn-1071")))])],1),o("van-dialog",{attrs:{confirmButtonText:t.$t("cn-434"),cancelButtonText:t.$t("cn-1051"),title:t.contractTitle},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("div",{staticClass:"contract-model",attrs:{id:"contractBody"}},[(t.showContractType,o("p"))])])],1)},i=[],s=(o("99af"),o("d81d"),o("4e82"),o("b0c0"),o("acd8"),o("ac1f"),o("5319"),o("2fa7")),c=(o("b342"),o("ad06")),u=(o("87d0"),o("e41f")),r=(o("608d"),o("9f14")),l=(o("01bb"),o("e27c")),d=(o("9eda"),o("565f")),h=(o("c625"),o("b650")),m=(o("3ec1"),o("7744")),f=(o("2a53"),o("34e9")),p=(o("47e2"),o("2241")),v=(o("9753"),o("417e")),$=(o("6370"),o("3acc")),b=o("a474"),C=(n={},Object(s["a"])(n,$["a"].name,$["a"]),Object(s["a"])(n,v["a"].name,v["a"]),Object(s["a"])(n,p["a"].Component.name,p["a"].Component),Object(s["a"])(n,f["a"].name,f["a"]),Object(s["a"])(n,m["a"].name,m["a"]),Object(s["a"])(n,h["a"].name,h["a"]),Object(s["a"])(n,d["a"].name,d["a"]),Object(s["a"])(n,l["a"].name,l["a"]),Object(s["a"])(n,r["a"].name,r["a"]),Object(s["a"])(n,u["a"].name,u["a"]),Object(s["a"])(n,c["a"].name,c["a"]),n),g={name:"Loan",components:C,props:{},data:function(){return{loanAmount:"",loanDay:this.$t("cn-1053"),carName:this.$t("cn-1042"),isReadContract:!0,showContractType:"",contractTitle:"",show:!1,showSel:!1,showVoucher:!1,isSubmit:!1,showCar:!1,unAutoSelect:!1,productCode:"P001",bankCardList:[],vouCherList:[],canUsedVoucherList:[],selectedVoucher:{},bankCardGid:"",voucherGid:"",fee:"0",discountAmount:"0",differenceFee:"0",dueTime:"",leftAmount:"0",leftQuota:"0",totalQuota:""}},computed:{},watch:{voucherGid:function(){this.$isNullOrEmpty(this.voucherGid)||this.onChersChange(),this.onVoucherAndProductChange()},productCode:function(){this.onVoucherAndProductChange()}},created:function(){var t=this;Object(b["u"])({userGid:localStorage.getItem("userGid")}).then((function(e){if("0000"===e.code){var o=e.data;o.bankCardList&&o.bankCardList.length>0?(t.totalQuota=o.quotaInfo.totalQuota,t.leftQuota=o.quotaInfo.leftQuota,t.$nextTick((function(){t.loanAmount=(o.productInfo.leftAmount||"0").replace(/,/g,"");var e=o.discountInfoList;t.formatVoucherList(e,t.leftQuota),t.amountHandle()})),t.bankCardList=o.bankCardList,t.productCode=o.productInfo.productCode):p["a"].alert({cancelButtonText:t.$t("cn-1051"),confirmButtonText:t.$t("cn-1036"),title:t.$t("cn-1034"),message:t.$t("cn-1035")}).then((function(){t.$router.push("/addBank")}))}else t.$toast(e.message)})).catch((function(){t.$toast(t.$t("cn-1044"))}))},mounted:function(){},destroyed:function(){},methods:{onVoucherAndProductChange:function(){var t=this;if(this.$isNullOrEmpty(this.loanAmount)||!this.$isNumber(this.loanAmount))return this.dueTime="- - ",this.leftAmount="0",this.fee="0",this.discountAmount="0",this.voucherGid="",void(this.selectedVoucher={});var e=parseFloat(this.loanAmount);if(e%1e4!==0||e<5e4||e>1e7)return this.dueTime="- - ",this.leftAmount="0",this.fee="0",this.discountAmount="0",this.voucherGid="",void(this.selectedVoucher={});Object(b["m"])({userGid:localStorage.getItem("userGid"),loanAmount:this.loanAmount,productCode:this.productCode,discountGid:this.voucherGid}).then((function(e){if("0000"===e.code){var o=e.data;t.dueTime=o.dueTime,t.leftAmount="".concat(o.leftAmount).concat(t.$t("home-unit")),t.fee="".concat(o.fee).concat(t.$t("home-unit"));var n=(o.discountAmount||"").replace(/,/g,"");if(t.$isNullOrEmpty(n))n="";else{var a=o.fee.replace(/,/g,""),i=t.accSub(a,n);i<0&&(i="0",n=a),t.differenceFee=i}t.discountAmount=n}else t.$toast(e.message)})).catch((function(){t.$toast(t.$t("cn-1044"))}))},formatVoucherList:function(t,e){var o=this;e=e.replace(/,/g,"").replace(/₫/g,"");var n=[],a=[];t.map((function(t){var i=o.$getDateTime(t.endDate);if(t.endDataTimeStem=i,t.startDataTimeStem=o.$getDateTime(t.startDate),"0"===t.useStatus){var s=t.loanAmountLimit.replace(/,/g,"");parseFloat(s)>parseFloat(e)?(t.pageMsg="最低借款金额大于当前剩余可借额度",t.disabled=!0,a.push(t)):(t.pageMsg="",t.disabled=!1,n.push(t))}})),a.sort((function(t,e){return t.endDataTimeStem-e.endDataTimeStem})),n.sort((function(t,e){return t.endDataTimeStem-e.endDataTimeStem})),a.sort((function(t,e){return o.$preFormatMoney(e.discountAmount)-o.$preFormatMoney(t.discountAmount)})),n.sort((function(t,e){return o.$preFormatMoney(e.discountAmount)-o.$preFormatMoney(t.discountAmount)})),this.canUsedVoucherList=n,this.vouCherList=n.concat(a)},getBestVoucher:function(t){var e=this;if(this.unAutoSelect||this.$isNullOrEmpty(t))return"";t=parseFloat(t);var o=null;return this.canUsedVoucherList.map((function(n){var a=n.loanAmountLimit.replace(/,/g,"");e.$isNullOrEmpty(o)&&t>=parseFloat(a)&&(o=n)})),this.$isNullOrEmpty(o)?(this.voucherGid="",this.selectedVoucher={}):(this.voucherGid=o.discountGid,this.selectedVoucher=o),this.voucherGid},onChersChange:function(){var t=this,e=this.vouCherList;e.map((function(e){if(e.discountGid===t.voucherGid){t.selectedVoucher=e,t.unAutoSelect=!1;var o=(e.loanAmountLimit||"0").replace(/,/g,"");t.loanAmount=parseFloat(o)>parseFloat(t.loanAmount)?o:t.loanAmount,t.amountHandle(e.discountGid)}}))},unUseChart:function(){this.showVoucher=!1,this.voucherGid="",this.unAutoSelect=!0},showContract:function(t,e){this.showContractType=t,this.contractTitle=e,this.show=!0,this.$nextTick((function(){document.getElementById("contractBody").scrollTo(0,0)}))},submitHandle:function(){var t=this;if(!this.isSubmit){if(this.isSubmit=!0,!this.isReadContract)return this.$toast(this.$t("cn-1040")),void(this.isSubmit=!1);if(this.$isNullOrEmpty(this.loanAmount)||!this.$isNumber(this.loanAmount))return this.$toast(this.$t("cn-1037")),void(this.isSubmit=!1);var e=parseFloat(this.loanAmount);return e%1e4!==0||e<5e4||e>1e7?(this.$toast(this.$t("cn-1039")),void(this.isSubmit=!1)):this.$isNullOrEmpty(this.productCode)?(this.$toast(this.$t("cn-1041")),void(this.isSubmit=!1)):this.$isNullOrEmpty(this.bankCardGid)?(this.$toast(this.$t("cn-1042")),void(this.isSubmit=!1)):!this.$isNullOrEmpty(this.voucherGid)&&e<parseFloat(this.selectedVoucher.loanAmountLimit)?(this.$toast(this.$t("cn-1072")),void(this.isSubmit=!1)):void Object(b["l"])({userGid:localStorage.getItem("userGid"),loanAmount:this.loanAmount,productCode:this.productCode,cardGid:this.bankCardGid,discountGid:this.voucherGid}).then((function(e){if("0000"===e.code){var o=e.data;t.$router.replace({path:"/loanResult",query:{orderId:o.orderId}})}else t.$toast(e.message),t.isSubmit=!1})).catch((function(){t.$toast(t.$t("cn-1044")),t.isSubmit=!1}))}},amountHandle:function(t){var e=this;if(this.$isNullOrEmpty(this.loanAmount)||!this.$isNumber(this.loanAmount))return this.$toast(this.$t("cn-1037")),this.dueTime="- - ",this.leftAmount="0",this.fee="0",this.discountAmount="0",this.voucherGid="",void(this.selectedVoucher={});var o=parseFloat(this.loanAmount);if(o%1e4!==0||o<5e4||o>1e7)return this.$toast(this.$t("cn-1039")),this.dueTime="- - ",this.leftAmount="0",this.fee="0",this.discountAmount="0",this.voucherGid="",void(this.selectedVoucher={});var n=this.$isNullOrEmpty(t)?this.getBestVoucher(o):t;Object(b["m"])({userGid:localStorage.getItem("userGid"),loanAmount:this.loanAmount,productCode:this.productCode,discountGid:n}).then((function(t){if("0000"===t.code){var o=t.data;e.dueTime=o.dueTime,e.leftAmount="".concat(o.leftAmount).concat(e.$t("home-unit")),e.fee="".concat(o.fee).concat(e.$t("home-unit"));var a=(o.discountAmount||"").replace(/,/g,"");if(e.$isNullOrEmpty(n)||e.$isNullOrEmpty(a))a="";else{var i=o.fee.replace(/,/g,""),s=e.accSub(i,a);s<0&&(s="0",a=i),e.differenceFee=s}e.discountAmount=a}else e.$toast(t.message)})).catch((function(){e.$toast(e.$t("cn-1044"))}))}}},A=g,y=(o("9384"),o("8f44"),o("2877")),k=Object(y["a"])(A,a,i,!1,null,"23592986",null);e["default"]=k.exports},6175:function(t,e,o){},"8f44":function(t,e,o){"use strict";var n=o("6175"),a=o.n(n);a.a},9384:function(t,e,o){"use strict";var n=o("c304"),a=o.n(n);a.a},c304:function(t,e,o){}}]);