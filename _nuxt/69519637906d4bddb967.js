(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{955:function(t,e,o){"use strict";o.r(e);o(52);var s={mounted:function(){this.$store.commit("setShowMapControls",!1),this.$store.commit("setPageTitle",this.title)},computed:{showEdit:{get:function(){return this.$store.state.config.showEdit},set:function(t){this.$store.commit("setConfigOption",{option:"showEdit",value:t})}},showAllMetals:{get:function(){return this.$store.state.config.showAllMetals},set:function(t){this.$store.commit("setConfigOption",{option:"showAllMetals",value:t})}}},head:function(){return{title:"Cardinal Guild - "+this.title}},data:function(){return{title:"Settings"}}},i=o(32),a=o(81),n=o.n(a),l=o(197),c=o(899),r=o(202),u=o(193),h=o(196),d=Object(i.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"configuration-page"},[o("v-container",[o("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[o("v-card",{attrs:{color:"#4f4141"}},[o("v-card-actions",[o("table",[o("tr",[o("th",{staticStyle:{"align-text":"center"}},[t._v("\n                Island Popup Options\n              ")])]),t._v(" "),o("tr",[o("v-checkbox",{staticClass:"ma-0 pa-0",attrs:{"hide-details":"",color:"#ffe5c4",label:"Show edit button"},model:{value:t.showEdit,callback:function(e){t.showEdit=e},expression:"showEdit"}})],1),t._v(" "),o("tr",[o("v-checkbox",{staticClass:"ma-0 pa-0",attrs:{"hide-details":"",color:"#ffe5c4",label:"Show all metals"},model:{value:t.showAllMetals,callback:function(e){t.showAllMetals=e},expression:"showAllMetals"}})],1)])])],1)],1)],1)],1)},[],!1,null,null,null);d.options.__file="index.vue";e.default=d.exports;n()(d,{VCard:l.a,VCardActions:c.a,VCheckbox:r.a,VContainer:u.a,VLayout:h.a})}}]);