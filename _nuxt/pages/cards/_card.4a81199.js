(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{594:function(t,e,r){"use strict";r.r(e);r(43);var o=r(9),c=r(91),n=r.n(c),d=r(369),m=r(436),h=r(444),f=r(438),l=r(441),$=r(437),C=r(443),v=r(440),D=r(439),k=r(445),w={components:{ConfirmedCasesDetailsCard:m.a,ConfirmedCasesNumberCard:h.a,ConfirmedCasesAttributesCard:f.a,ConfirmedCasesAttributesCardCity:l.a,ConfirmedCasesAttributesCardMapF:$.a,NotPublicCard:C.a,TestedNumberCard:v.a,TelephoneAdvisoryReportsNumberCard:D.a,ConsultationDeskReportsNumberCard:k.a},data:function(){var title;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況");break;case"number-of-confirmed-cases":title=this.$t("陽性患者数");break;case"attributes-of-confirmed-cases":case"attributes-of-confirmed-cases-city":case"attributes-of-confirmed-cases-mapf":case"not-public-card":title=this.$t("陽性患者の属性");break;case"number-of-tested":title=this.$t("検査実施数");break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数");break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("帰国者・接触者相談センター相談件数")}var data={Data:d,dataLoaded:!1,title:title};return data},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://cdn2.dott.dev/data.json",e.next=4,n.a.get("https://cdn2.dott.dev/data.json");case 4:r=e.sent,t.Data=r.data,t.dataLoaded=!0;case 7:return e.prev=7,e.finish(7);case 9:case"end":return e.stop()}}),e,null,[[0,,7,9]])})))()},head:function(){var t="https://fukushima-covid19.web.app",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),o="".concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、福島県とCode for Fukushimaが協力し開設した公式のサイトです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("福島県")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:o},{hid:"og:description",property:"og:description",content:o},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},y=r(12),component=Object(y.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.dataLoaded?r("div",["details-of-confirmed-cases"==this.$route.params.card?r("confirmed-cases-details-card",{attrs:{"graph-data":t.Data}}):"number-of-confirmed-cases"==this.$route.params.card?r("confirmed-cases-number-card",{attrs:{"graph-data":t.Data}}):"attributes-of-confirmed-cases"==this.$route.params.card?r("confirmed-cases-attributes-card",{attrs:{"graph-data":t.Data}}):"attributes-of-confirmed-cases-city"==this.$route.params.card?r("confirmed-cases-attributes-card-city",{attrs:{"graph-data":t.Data}}):"attributes-of-confirmed-cases-mapf"==this.$route.params.card?r("confirmed-cases-attributes-card-map-f",{attrs:{"graph-data":t.Data}}):"not-public-card"==this.$route.params.card?r("not-public-card",{attrs:{"graph-data":t.Data}}):"number-of-tested"==this.$route.params.card?r("tested-number-card",{attrs:{"graph-data":t.Data}}):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?r("telephone-advisory-reports-number-card",{attrs:{"graph-data":t.Data}}):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?r("consultation-desk-reports-number-card",{attrs:{"graph-data":t.Data}}):"predicted-number-of-toei-subway-passengers"==this.$route.params.card?r("metro-card",{attrs:{"graph-data":t.Data}}):t._e()],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);