(this.webpackJsonpdemocraflix=this.webpackJsonpdemocraflix||[]).push([[0],{14:function(e,t,c){},43:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(15),o=c.n(i),a=(c(43),c(11)),r=c(13),l=(c(14),c(23)),j=c.n(l),d=c(35),u=c(87),b=c(86),m=Object(n.createContext)({popularMovies:[],selectedMovies:[],setSelectedMovies:function(){},updateSharedMovies:function(){}}),O=c(2),h=function(e){var t=e.movie,c=Object(n.useContext)(m);return Object(O.jsxs)("div",{className:"movie-card",onClick:function(){!function(e){c.updateSharedMovies(e)}(t)},children:[Object(O.jsx)("img",{className:"movie-img",src:"https://image.tmdb.org/t/p/original".concat(t.poster_path),alt:t.original_title}),Object(O.jsx)("h3",{children:t.title}),Object(O.jsxs)("h4",{children:["Rating: ",t.vote_average]})]})},v=function(){var e=Object(n.useContext)(m);Object(n.useEffect)((function(){}),[e.selectedMovies]);return e.selectedMovies.length?Object(O.jsx)("div",{className:"choices-list",children:e.selectedMovies.map((function(e){return Object(O.jsx)(h,{movie:e})}))}):Object(O.jsx)(O.Fragment,{})},f=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"choices-container",children:[Object(O.jsx)("h1",{className:"title",children:"User Choices"}),Object(O.jsx)(v,{})]})})},p=function(){var e=Object(n.useContext)(m);return Object(O.jsx)("div",{className:"movies-list",children:e.popularMovies.map((function(e){return Object(O.jsx)(h,{movie:e},e.title)}))})},x=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"movies-container",children:[Object(O.jsx)("h1",{className:"title",children:"Today's Most Popular Movies"}),Object(O.jsx)(p,{})]})})},g=new d.w3cwebsocket("ws://127.0.0.1:8000");var M=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),o=Object(r.a)(i,2),l=o[0],d=o[1],h=Object(n.useState)(!1),v=Object(r.a)(h,2),p=v[0],M=v[1],N=Object(n.useState)("anonymous"),S=Object(r.a)(N,2),C=(S[0],S[1]);return Object(n.useEffect)((function(){g.onopen=function(){console.log("WebSocket Client Connected")},new Promise((function(e,t){j.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat("4f5b4c4ea41d8b0d1ea169b9384f0dda")).then((function(t){e(t)}))})).then((function(e){s(e.data.results)})),g.onmessage=function(e){console.log("message from websocket: ",JSON.parse(e.data)),d([].concat(Object(a.a)(l),[JSON.parse(e.data)]))}}),[l]),p?Object(O.jsx)(m.Provider,{value:{popularMovies:c,selectedMovies:l,setSelectedMovies:d,updateSharedMovies:function(e){g.send(JSON.stringify(e))}},children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("header",{className:"App-header",children:Object(O.jsx)("h1",{children:"DemocraFlix"})}),Object(O.jsx)(f,{}),Object(O.jsx)(x,{})]})}):Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("form",{className:"login-form",children:[Object(O.jsx)(u.a,{labelText:"Username",id:"username",formControlProps:{fullWidth:!0},onChange:function(e){C(e.currentTarget.id)},type:"text"}),Object(O.jsx)(b.a,{type:"button",color:"primary",className:"login-button",onClick:function(){M(!p)},children:"Log in"})]})})};o.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(M,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.782700af.chunk.js.map