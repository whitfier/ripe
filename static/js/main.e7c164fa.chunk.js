(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,n){e.exports=n(283)},176:function(e,t,n){},283:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),i=n.n(o),c=(n(176),n(75)),s=n(76),d=n(81),l=n(77),u=n(82),m=n(38),h=n.n(m),f=n(39),p=n.n(f),g=n(10),w=n(32),v=n.n(w),b=n(34),y=n.n(b),E=n(33),k=n.n(E),j=n(31),S=n.n(j),x=n(20),O=n.n(x),P=n(25),L=n.n(P),I=n(79),N=function(e){return r.a.createElement(S.a,{badgeContent:"#".concat(e.index+1),color:"primary"},r.a.createElement(v.a,{style:{maxWidth:800}},!!e.data.preview&&r.a.createElement(I.a,{image:e.data.preview.images[0].source.url,style:{width:400*e.data.preview.images[0].source.width/e.data.preview.images[0].source.height,height:400,marginLeft:"auto",marginRight:"auto"}}),r.a.createElement(k.a,{style:{maxHeight:400,overflow:"scroll"}},r.a.createElement(L.a,{gutterBottom:!0,variant:"headline",component:"h2"},e.data.title),r.a.createElement(L.a,{component:"p"},e.data.selftext)),r.a.createElement(y.a,null,r.a.createElement(O.a,{size:"small",color:"primary",href:e.data.url},"Source"),r.a.createElement(O.a,{size:"small",color:"primary",href:"https://www.reddit.com".concat(e.data.permalink)},"Comments"))))},R=n(51),C=n(35),A=n.n(C),B=n(36),D=n.n(B),K=n(37),W=n.n(K),F=n(24),M=n(80),T=n.n(M),z=Object(g.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},search:Object(R.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(F.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(F.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(R.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:240,"&:focus":{width:400}})}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(A.a,{position:"absolute",color:"primary"},r.a.createElement(D.a,null,r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(T.a,null)),r.a.createElement(W.a,{placeholder:"Enter a subreddit...",disableUnderline:!0,classes:{root:t.inputRoot,input:t.inputInput},onKeyPress:function(t){"Enter"===t.key&&e.onSubmit(t.target.value)}})),r.a.createElement("div",{className:t.grow}))))}),J=50,U=Object(g.createMuiTheme)({palette:{primary:{main:"#ff4500"}}}),G=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={subreddit:"all",posts:[],before:null,after:null,index:0,loading:!0},n.removeStickied=function(e){return e.filter(function(e){return!e.data.stickied})},n.fetchFirstPage=function(){n.setState({loading:!0}),fetch("https://www.reddit.com/r/".concat(n.state.subreddit,".json?limit=").concat(J)).then(function(e){return e.json()}).then(function(e){return n.setState({posts:n.removeStickied(e.data.children),before:e.data.before,after:e.data.after,index:0,loading:!1})})},n.fetchNextPage=function(){var e=n.state,t=e.subreddit,a=e.after;n.setState({loading:!0}),fetch("https://www.reddit.com/r/".concat(t,".json?limit=").concat(J,"&count=").concat(J,"&after=").concat(a)).then(function(e){return e.json()}).then(function(e){return n.setState({posts:n.removeStickied(e.data.children),before:e.data.before,after:e.data.after,loading:!1})})},n.fetchPrevPage=function(){var e=n.state,t=e.subreddit,a=e.before;null!==a&&(n.setState({loading:!0}),fetch("https://www.reddit.com/r/".concat(t,".json?limit=").concat(J,"&count=").concat(J,"&before=").concat(a)).then(function(e){return e.json()}).then(function(e){return n.setState({posts:n.removeStickied(e.data.children),before:e.data.before,after:e.data.after,loading:!1})}))},n.onKeyDown=function(e){var t=n.state,a=t.posts,r=t.index;if(!(t.loading||"ArrowLeft"===e.key&&0===r)){var o=r%J;"ArrowRight"===e.key?(n.setState({index:r+1}),o===a.length-1&&n.fetchNextPage()):"ArrowLeft"===e.key&&(n.setState({index:r-1}),0===o&&n.fetchPrevPage())}},n.onSearch=function(e){return n.setState({subreddit:e},function(){return n.fetchFirstPage()})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown,!1),this.fetchFirstPage()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown,!1)}},{key:"render",value:function(){var e=this.state,t=e.posts,n=e.index,a=e.loading,o=t[n%J];return r.a.createElement(g.MuiThemeProvider,{theme:U},r.a.createElement(z,{onSubmit:this.onSearch}),r.a.createElement(h.a,{style:{height:"100vh"},container:!0,justify:"center",alignItems:"center"},a?r.a.createElement(p.a,null):r.a.createElement(N,{key:o.data.id,data:o.data,index:n})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[171,2,1]]]);
//# sourceMappingURL=main.e7c164fa.chunk.js.map