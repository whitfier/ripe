(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,n){e.exports=n(282)},176:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),i=n.n(o),c=(n(176),n(74)),s=n(75),d=n(80),l=n(76),u=n(81),m=n(37),h=n.n(m),f=n(38),p=n.n(f),w=n(10),g=n(31),v=n.n(g),b=n(33),E=n.n(b),y=n(32),k=n.n(y),j=n(23),S=n.n(j),x=n(24),I=n.n(x),O=n(78);var P=Object(w.withStyles)({card:{maxWidth:500},media:{height:300}})(function(e){var t=e.classes;return r.a.createElement(v.a,{className:t.card},!!e.data.preview&&r.a.createElement(O.a,{className:t.media,image:e.data.preview.images[0].source.url}),r.a.createElement(k.a,null,r.a.createElement(I.a,{gutterBottom:!0,variant:"headline",component:"h2"},e.data.title),r.a.createElement(I.a,{component:"p"},e.data.selftext)),r.a.createElement(E.a,null,r.a.createElement(S.a,{size:"small",color:"primary",href:e.data.url},"View Original")))}),N=n(50),L=n(34),R=n.n(L),B=n(35),C=n.n(B),D=n(36),F=n.n(D),K=n(19),W=n(79),A=n.n(W),J=Object(w.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},search:Object(N.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(K.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(K.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(N.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:240,"&:focus":{width:400}})}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(R.a,{position:"absolute",color:"primary"},r.a.createElement(C.a,null,r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(A.a,null)),r.a.createElement(F.a,{placeholder:"Enter a subreddit...",disableUnderline:!0,classes:{root:t.inputRoot,input:t.inputInput},onKeyPress:function(t){"Enter"===t.key&&e.onSubmit(t.target.value)}})),r.a.createElement("div",{className:t.grow}))))}),U=50,z=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={subreddit:"all",posts:[],before:null,after:null,postIndex:0},n.removeStickied=function(e){return e.filter(function(e){return!e.data.stickied})},n.fetchFirstPage=function(){return fetch("https://www.reddit.com/r/".concat(n.state.subreddit,".json?limit=").concat(U)).then(function(e){return e.json()}).then(function(e){return n.setState({posts:n.removeStickied(e.data.children),before:e.data.before,after:e.data.after,postIndex:0})})},n.fetchNextPage=function(){var e=n.state,t=e.subreddit,a=e.after;fetch("https://www.reddit.com/r/".concat(t,".json?limit=").concat(U,"&count=").concat(U,"&after=").concat(a)).then(function(e){return e.json()}).then(function(e){return n.setState({posts:n.removeStickied(e.data.children),before:e.data.before,after:e.data.after,postIndex:0})})},n.fetchPrevPage=function(){var e=n.state,t=e.subreddit,a=e.before;null!==a&&fetch("https://www.reddit.com/r/".concat(t,".json?limit=").concat(U,"&count=").concat(U,"&before=").concat(a)).then(function(e){return e.json()}).then(function(e){return n.setState({posts:n.removeStickied(e.data.children),before:e.data.before,after:e.data.after,postIndex:U-1})})},n.onKeyDown=function(e){var t=n.state,a=t.posts,r=t.postIndex;"ArrowRight"===e.key?r===a.length-1?n.fetchNextPage():n.setState({postIndex:r+1}):"ArrowLeft"===e.key&&(0===r?n.fetchPrevPage():n.setState({postIndex:r-1}))},n.onSearch=function(e){return n.setState({subreddit:e},function(){return n.fetchFirstPage()})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown,!1),this.fetchFirstPage()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown,!1)}},{key:"render",value:function(){var e=this.state,t=e.posts,n=e.postIndex;if(0===t.length)return r.a.createElement(h.a,null);var a=t[n];return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{onSubmit:this.onSearch}),r.a.createElement(p.a,{style:{height:"100vh"},container:!0,justify:"center",alignItems:"center"},r.a.createElement(P,{key:a.data.id,data:a.data})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[171,2,1]]]);
//# sourceMappingURL=main.5a69c7e9.chunk.js.map