(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["my-info-counter-income"],{"1d67":function(e,t,n){"use strict";var r=n("a230"),l=n("eb50"),o=n("1054"),i=n("6729"),a=n("204f"),u=1..toFixed,s=Math.floor,c=function(e,t,n){return 0===t?n:t%2===1?c(e,t-1,n*e):c(e*e,t/2,n)},f=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},m=function(e,t,n){var r=-1,l=n;while(++r<6)l+=t*e[r],e[r]=l%1e7,l=s(l/1e7)},d=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=s(r/t),r=r%t*1e7},_=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=String(e[t]);n=""===n?r:n+i.call("0",7-r.length)+r}return n},p=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){u.call({})}));r({target:"Number",proto:!0,forced:p},{toFixed:function(e){var t,n,r,a,u=o(this),s=l(e),p=[0,0,0,0,0,0],y="",h="0";if(s<0||s>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(y="-",u=-u),u>1e-21)if(t=f(u*c(2,69,1))-69,n=t<0?u*c(2,-t,1):u/c(2,t,1),n*=4503599627370496,t=52-t,t>0){m(p,0,n),r=s;while(r>=7)m(p,1e7,0),r-=7;m(p,c(10,r,1),0),r=t-1;while(r>=23)d(p,1<<23),r-=23;d(p,1<<r),m(p,1,1),d(p,2),h=_(p)}else m(p,0,n),m(p,1<<-t,0),h=_(p)+i.call("0",s);return s>0?(a=h.length,h=y+(a<=s?"0."+i.call("0",s-a)+h:h.slice(0,a-s)+"."+h.slice(a-s))):h=y+h,h}})},6729:function(e,t,n){"use strict";var r=n("eb50"),l=n("69a8"),o=n("c499");e.exports=function(e){var t=l(o(this)),n="",i=r(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},a885:function(e,t,n){},d707:function(e,t,n){"use strict";n("a885")},f30c:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-info-counter-income"},[n("div",{staticClass:"my-info-counter-income__title"},[e._v("收益计算器")]),n("div",{staticClass:"my-info-counter-income__content"},[n("div",{staticClass:"my-info-counter-income__content__tabs"},e._l(e.tabList,(function(t){return n("div",{key:t.type,class:{"my-info-counter-income__content__tabs__active":e.currentType===t.type},on:{click:function(n){e.currentType=t.type}}},[e._v(" "+e._s(t.label)+" ")])})),0),n("VanForm",{ref:"form",staticClass:"my-info-counter-income__form"},[0===e.currentType?[n("VanField",{staticClass:"my-info-counter-income__form__input",attrs:{label:"本金",type:"number","input-align":"right",placeholder:"请输入金额",rules:e.principalRules},scopedSlots:e._u([{key:"extra",fn:function(){return[e._v("元")]},proxy:!0}],null,!1,1841822212),model:{value:e.form.principal,callback:function(t){e.$set(e.form,"principal",t)},expression:"form.principal"}}),n("VanField",{staticClass:"my-info-counter-income__form__input",attrs:{label:"年化收益率",type:"number","input-align":"right",placeholder:"请输入收益率",rules:e.yieldRateRules},scopedSlots:e._u([{key:"extra",fn:function(){return[e._v("%")]},proxy:!0}],null,!1,3617376354),model:{value:e.form.yieldRate,callback:function(t){e.$set(e.form,"yieldRate",t)},expression:"form.yieldRate"}}),n("VanField",{staticClass:"my-info-counter-income__form__input",attrs:{label:"投资年限",type:"number","input-align":"right",placeholder:"请输入年限",rules:e.termRules},scopedSlots:e._u([{key:"extra",fn:function(){return[e._v("年")]},proxy:!0}],null,!1,3418785555),model:{value:e.form.term,callback:function(t){e.$set(e.form,"term",t)},expression:"form.term"}})]:e._e(),1===e.currentType?[n("VanField",{staticClass:"my-info-counter-income__form__input",attrs:{label:"买入价格",type:"number","input-align":"right",placeholder:"请输入金额",rules:e.buyRules},scopedSlots:e._u([{key:"extra",fn:function(){return[e._v("元")]},proxy:!0}],null,!1,1841822212),model:{value:e.form.buy,callback:function(t){e.$set(e.form,"buy",t)},expression:"form.buy"}}),n("VanField",{staticClass:"my-info-counter-income__form__input",attrs:{label:"卖出价格",type:"number","input-align":"right",placeholder:"请输入金额",rules:e.saleRules},scopedSlots:e._u([{key:"extra",fn:function(){return[e._v("元")]},proxy:!0}],null,!1,1841822212),model:{value:e.form.sale,callback:function(t){e.$set(e.form,"sale",t)},expression:"form.sale"}}),n("VanField",{staticClass:"my-info-counter-income__form__input",attrs:{label:"持有年限",type:"number","input-align":"right",placeholder:"请输入年限",rules:e.holdRules},scopedSlots:e._u([{key:"extra",fn:function(){return[e._v("年")]},proxy:!0}],null,!1,3418785555),model:{value:e.form.hold,callback:function(t){e.$set(e.form,"hold",t)},expression:"form.hold"}})]:e._e(),2===e.currentType?[n("VanField",{staticClass:"my-info-counter-income__form__input",attrs:{label:"投资时长",type:"number","input-align":"right",placeholder:"请输入年限",rules:e.durationRules},scopedSlots:e._u([{key:"extra",fn:function(){return[e._v("年")]},proxy:!0}],null,!1,3418785555),model:{value:e.form.duration,callback:function(t){e.$set(e.form,"duration",t)},expression:"form.duration"}}),n("VanField",{staticClass:"my-info-counter-income__form__input",attrs:{label:"年化收益率",type:"number","input-align":"right",placeholder:"请输入收益率",rules:e.annualYieldRules},scopedSlots:e._u([{key:"extra",fn:function(){return[e._v("%")]},proxy:!0}],null,!1,3617376354),model:{value:e.form.annualYield,callback:function(t){e.$set(e.form,"annualYield",t)},expression:"form.annualYield"}}),n("VanField",{staticClass:"my-info-counter-income__form__input",attrs:{label:"每月存入",type:"number","input-align":"right",placeholder:"请输入金额",rules:e.depositRules},scopedSlots:e._u([{key:"extra",fn:function(){return[e._v("元")]},proxy:!0}],null,!1,1841822212),model:{value:e.form.deposit,callback:function(t){e.$set(e.form,"deposit",t)},expression:"form.deposit"}})]:e._e(),n("div",{staticClass:"my-info-counter-income__form__bottom"},[n("div",{on:{click:e.handleCalculate}},[e._v("计算")]),n("div",{on:{click:e.handleClear}},[e._v("清空")])]),e.showResult?n("div",{staticClass:"my-info-counter-income__form__result"},[n("div",{staticClass:"my-info-counter-income__form__result__title"},[e._v("计算结果")]),e._l(e.resultList,(function(t){return n("div",{key:t.label,staticClass:"my-info-counter-income__form__result__item"},[n("span",[e._v(e._s(t.label))]),n("span",[e._v(e._s(t.value))])])}))],2):e._e()],2)],1)])},l=[],o=n("e9ff"),i=(n("e186"),n("1d67"),function(){return{principal:"",yieldRate:"",term:""}}),a=function(){return{buy:"",sale:"",hold:""}},u=function(){return{duration:"",annualYield:"",deposit:""}},s={validator:function(e){return parseFloat(e)>0},message:"请输入大于零的数"},c={validator:function(e){return/^\d+$/.test(e)},message:"请输入大于零的整数"},f={validator:function(e){return!isNaN(e)},message:"请输入数字"},m={data:function(){return{form:i(),principalRules:[{required:!0,message:"请输入本金金额"},s],yieldRateRules:[{required:!0,message:"请输入年化收益率"},f],termRules:[{required:!0,message:"请输入投资年限"},s,c],buyRules:[{required:!0,message:"请输入买入价格"},s],saleRules:[{required:!0,message:"请输入卖出价格"},s],holdRules:[{required:!0,message:"请输入持有年限"},s,c],durationRules:[{required:!0,message:"请输入投资时长"},s,c],annualYieldRules:[{required:!0,message:"请输入年化收益率"},f],depositRules:[{required:!0,message:"请输入每月存入金额"},s],tabList:[{type:0,label:"最终收益"},{type:1,label:"收益率"},{type:2,label:"定投"}],currentType:0,showResult:!1,resultList:[]}},watch:{currentType:"initForm"},mounted:function(){this.$log.log({event:"show",module_part:"102_h5_dk_jlw_0009"}),this.$log.log({event:"show",module_part:"102_h5_dk_jlw_0010"})},methods:{handleCalculate:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,l,o,i,a,u,s,c,f,m,d,_,p,y,h,v,b,g;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=["102_h5_dk_jlw_0011","102_h5_dk_jlw_0012","102_h5_dk_jlw_0013"],e.$log.log({event:"click",module_part:n[e.currentType]}),t.prev=2,t.next=5,e.$refs.form.validateAll();case 5:0===e.currentType?(r=e.form,l=r.principal,o=r.yieldRate,i=r.term,a=l*Math.pow(1+o/100,i),e.resultList=[{label:"最终收益",value:"".concat(a.toFixed(2),"元")}]):1===e.currentType?(u=e.form,s=u.buy,c=u.sale,f=u.hold,m=(c-s)/s*100,d=100*(Math.pow(c/s,1/f)-1),e.resultList=[{label:"总收益率",value:"".concat(m.toFixed(2),"%")},{label:"年化收益率",value:"".concat(d.toFixed(2),"%")}]):(_=e.form,p=_.duration,y=_.annualYield,h=_.deposit,v=12*p,b=Math.pow(1+y/100,1/12)-1,g=h*(1+b)*(Math.pow(1+b,v)-1)/b,e.resultList=[{label:"投资总收益",value:"".concat(g.toFixed(2),"元")}]),e.showResult=!0,t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](2);case 11:case"end":return t.stop()}}),t,null,[[2,9]])})))()},handleClear:function(){this.initForm(),this.showResult=!1},initForm:function(){0===this.currentType?this.form=i():1===this.currentType?this.form=a():this.form=u(),this.showResult=!1,this.$refs.form.resetValidation()}}},d=m,_=(n("d707"),n("cba8")),p=Object(_["a"])(d,r,l,!1,null,"2f6f5250",null);t["default"]=p.exports}}]);
//# sourceMappingURL=my-info-counter-income.468b7a56.js.map