(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{183:function(t,e,n){var content=n(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("24808d56",content,!0,{sourceMap:!1})},190:function(t,e,n){"use strict";var l=n(183);n.n(l).a},191:function(t,e,n){(t.exports=n(36)(!1)).push([t.i,"@media (min-width:640px){.hide-tablet-up{display:none}}@media (max-width:640px){.hide-tablet-down{display:none}}.sw-image img{width:auto;height:225px;max-height:225px}",""])},195:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{slide:0,sliding:null,images:[{id:0,path:"https://i.ytimg.com/vi/HSO_pyXrcTs/hqdefault.jpg"},{id:0,path:"https://i.pinimg.com/236x/3f/55/f4/3f55f4487cbf02bf779dd1128b346d3d--orange-sweaters-cat-sweaters.jpg"},{id:0,path:"https://img.buzzfeed.com/buzzfeed-static/static/enhanced/terminal01/2010/10/7/14/enhanced-buzz-13063-1286477213-45.jpg"}]}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},o=(n(190),n(23)),d={components:{PortfolioCarousel:Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.images,(function(image){return n("div",{key:image.id},[n("b-carousel-slide",{staticClass:"sw-image",attrs:{"img-src":image.path}})],1)})),0)],1)}),[],!1,null,null,null).exports}},r=Object(o.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("I am oils gallery")]),this._v(" "),e("PortfolioCarousel")],1)}),[],!1,null,null,null);e.default=r.exports}}]);