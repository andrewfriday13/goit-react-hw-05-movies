"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[287],{573:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(87),a=n(689),s="style_trendList__uE0xO",c="style_trendItem__ooUqp",i=n(184),o=function(e){var t=e.films,n=(0,a.TH)();return(0,i.jsx)("ul",{className:s,children:t.map((function(e){var t=e.id,a=e.title,s=e.poster_path;return(0,i.jsx)("li",{children:(0,i.jsxs)(r.rU,{className:c,to:"/movies/".concat(t),state:{from:n},children:[null!==s?(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(s),alt:"Poster ".concat(a),width:"250px",height:"375px"}):(0,i.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923",alt:"Poster ".concat(a),width:"250px",height:"375px"}),(0,i.jsx)("span",{children:a})]})},t)}))})}},287:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(433),s=n(439),c=n(757),i=n.n(c),o=n(791),u=n(243),l=n(87),h=n(689),f="formStyle_formSearch__LCXQ+",m="formStyle_input__JlGm9",p="formStyle_searchBtn__dF7lk",d=n(184),_=function(e){var t=e.handleSabmit,n=e.handleChange,r=e.search;return(0,d.jsxs)("form",{onSubmit:t,className:f,children:[(0,d.jsx)("label",{children:(0,d.jsx)("input",{className:m,search:r,type:"text",onChange:n,autoComplete:"off",placeholder:"Search movies"})}),(0,d.jsx)("button",{className:p,type:"submit",children:" search"})]})},g=n(573),v=function(){var e,t=(0,o.useState)([]),n=(0,s.Z)(t,2),c=n[0],f=n[1],m=(0,o.useState)(!1),p=(0,s.Z)(m,2),v=p[0],x=p[1],j=(0,l.lr)(),b=(0,s.Z)(j,2),y=b[0],S=b[1],w=(0,o.useState)(!1),Z=(0,s.Z)(w,2),k=Z[0],C=Z[1],N=null!==(e=y.get("search"))&&void 0!==e?e:"",q=(0,o.useState)(N),P=(0,s.Z)(q,2),E=P[0],F=P[1];(0,o.useEffect)((function(){L(E).then((function(e){var t=e.results;return f((0,a.Z)(t))})).catch((function(e){return console.log(e.message)})).finally()}),[v]);var L=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"7140726491bb46cefd66d6c99674ef87",e.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("7140726491bb46cefd66d6c99674ef87","&query=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(_,{search:N,handleSabmit:function(e){e.preventDefault(),L(e.target),x(!v),document.querySelector("input").value="",C(!0)},handleChange:function(e){var t=e.target,n=t.value;if(""===n)return S();F(n),S({search:t.value})}}),k&&0===c.length&&(0,d.jsx)("p",{children:"Please, change your request"}),(0,d.jsx)(g.Z,{films:c}),(0,d.jsx)(h.j3,{})]})}}}]);
//# sourceMappingURL=287.8fb1b77e.chunk.js.map