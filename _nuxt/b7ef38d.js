(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6],{751:function(t,e,r){"use strict";r.r(e);r(4),r(61),r(220);var l={props:{article:{type:Object,default:function(){return null}},index:{type:Number,default:function(){return null}}}},c=r(36),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-item"},[e("div",{staticClass:"post-head"},[e("div",{staticClass:"post-content p-3"},[e("h2",{staticClass:"h4 mt-5 mb-0"},[t._v("\n        "+t._s(t.article.title)+"\n      ")])]),t._v(" "),e("div",{staticClass:"post-bg"},[t.index%4==0?e("div",{staticStyle:{position:"relative",width:"100%"}},[e("img",{staticClass:"img21",staticStyle:{top:"-30px",left:"-30px"},attrs:{src:r(311)}}),t._v(" "),e("img",{staticClass:"img22",staticStyle:{right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:r(314)}})]):t.index%4==1?e("div",{staticStyle:{position:"relative",width:"100%"}},[e("img",{staticClass:"img31",staticStyle:{top:"-30px",right:"-100px"},attrs:{src:r(311)}}),t._v(" "),e("img",{staticClass:"img32",staticStyle:{top:"-30px",left:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:r(313)}})]):t.index%4==2?e("div",{staticStyle:{position:"relative",width:"100%"}},[e("img",{staticClass:"img41",staticStyle:{top:"-30px",left:"-30px"},attrs:{src:r(311)}}),t._v(" "),e("img",{staticClass:"img42",staticStyle:{transform:"rotateX(180deg)",right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))"},attrs:{src:r(314)}})]):t.index%4==3?e("div",{staticStyle:{position:"relative",width:"100%"}},[e("img",{staticClass:"img51",staticStyle:{top:"-30px",left:"-100px"},attrs:{src:r(311)}}),t._v(" "),e("img",{staticClass:"img52",staticStyle:{transform:"rotateY(180deg)",top:"-30px",right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:r(313)}})]):t._e()])]),t._v(" "),e("div",{staticClass:"post-body p-3"},[e("span",{staticClass:"post-date"},[t._v(t._s(t.$dateFormat(t.article.date)))]),t._v(" "),e("p",{staticClass:"post-summary my-2"},[t._v("\n      "+t._s(t.article.description)+"\n    ")]),t._v(" "),e("p",{staticClass:"mt-4"},[e("NuxtLink",{staticClass:"text-white post-readmore",attrs:{to:{path:"/blog/".concat(t.article.slug)}}},[t._v("\n        Read more "),e("i",{staticClass:"fa fa-arrow-right ml-2",staticStyle:{"font-size":".7rem"}})])],1)])])}),[],!1,null,null,null);e.default=component.exports},783:function(t,e,r){"use strict";r.r(e);var l={props:{articles:{type:Array,default:function(){return null}}}},c=r(36),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},t._l(t.articles,(function(article,i){return e("div",{key:article.slug,staticClass:"col-md-6 my-3"},[e("BlogArticleItem",{attrs:{article:article,index:i}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogArticleItem:r(751).default})}}]);