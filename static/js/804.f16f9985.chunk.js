"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[804],{804:function(e,s,t){t.r(s);var a=t(861),i=t(439),n=t(757),c=t.n(n),r=t(243),l=t(791),o=t(689),v=t(87),_=t(809),d=t(184);s.default=function(){var e,s,t=(0,l.useState)({}),n=(0,i.Z)(t,2),u=n[0],h=n[1],g=(0,o.UO)().movieId;(0,l.useEffect)((function(){m(g).then((function(e){h(e)})).catch((function(e){return console.log(e)})).finally()}),[g]);var m=function(){var e=(0,a.Z)(c().mark((function e(s){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"7140726491bb46cefd66d6c99674ef87","https://api.themoviedb.org/3",e.next=4,r.Z.get("".concat("https://api.themoviedb.org/3","/movie/").concat(s,"?api_key=").concat("7140726491bb46cefd66d6c99674ef87","&language=en-US"));case 4:return t=e.sent,e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),p=u.overview,w=u.poster_path,f=u.genres,x=u.original_title,j=u.vote_average,b=u.release_date,y="https://image.tmdb.org/t/p/w500/".concat(w),k=null!==(e=null===(s=(0,o.TH)().state)||void 0===s?void 0:s.from)&&void 0!==e?e:"/movies",P=(0,l.useRef)(k),Z=(j/10*100).toFixed(0),N=b;return(0,d.jsxs)("div",{className:_.Z.details,children:[(0,d.jsx)(v.rU,{to:P.current,children:(0,d.jsx)("button",{className:_.Z.btnBack,type:"button",children:"Go back"})}),(0,d.jsxs)("div",{className:_.Z.allOverview,children:[void 0===w?(0,d.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923",alt:"",width:"340"}):(0,d.jsx)("img",{src:y,alt:"",width:"340"}),(0,d.jsxs)("div",{className:_.Z.overview,children:[(0,d.jsxs)("span",{className:_.Z.titleMovie,children:[x," (",null===N||void 0===N?void 0:N.slice(0,4),")"]}),(0,d.jsxs)("span",{children:["Rating: ",Z,"%"]}),void 0===f?(0,d.jsx)("span",{children:"No genres"}):(0,d.jsx)("span",{children:f.map((function(e){return e.name})).join(", ")}),(0,d.jsx)("span",{children:p}),(0,d.jsxs)("ul",{className:_.Z.listCatsReviews,children:[(0,d.jsx)("li",{children:(0,d.jsx)(v.rU,{className:_.Z.catsReviews,to:"cats",children:"Cats"})}),(0,d.jsx)("li",{children:(0,d.jsx)(v.rU,{className:_.Z.catsReviews,to:"reviews",children:"Reviews"})})]})]})]}),(0,d.jsx)(o.j3,{})]})}},809:function(e,s){s.Z={titleMovie:"stylePages_titleMovie__UETkm",btnBack:"stylePages_btnBack__2dm3+",title:"stylePages_title__zP89L",searchList:"stylePages_searchList__tuuex",searchItem:"stylePages_searchItem__F+kyc",spanSearch:"stylePages_spanSearch__erXiV",details:"stylePages_details__gjL11",allOverview:"stylePages_allOverview__wBUfm",overview:"stylePages_overview__EoYGt",listCatsReviews:"stylePages_listCatsReviews__iefv+",catsReviews:"stylePages_catsReviews__zTbqS"}}}]);
//# sourceMappingURL=804.f16f9985.chunk.js.map