(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,a){e.exports=a(397)},205:function(e,t,a){},397:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(33),o=a.n(i),c=(a(205),a(101)),l=a(102),s=a(110),d=a(103),u=a(109),m=a(45),h=a.n(m),p=a(46),f=a.n(p),w=a(11),g=a(64),v=a(42),E=a.n(v),b=a(43),y=a.n(b),x=a(44),k=a.n(x),j=a(34),S=a(105),_=a.n(S),O=Object(w.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},search:Object(g.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(j.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(g.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:240,"&:focus":{width:400}})}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{position:"absolute",color:"primary"},r.a.createElement(y.a,null,r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(_.a,null)),r.a.createElement(k.a,{placeholder:"Enter a subreddit...",disableUnderline:!0,classes:{root:t.inputRoot,input:t.inputInput},onKeyPress:function(t){"Enter"===t.key&&e.onSubmit(t.target.value)}})),r.a.createElement("div",{className:t.grow}))))}),L=a(22),P=a.n(L),R=a(24),C=a.n(R),I=a(23),z=a.n(I),B=a(13),W=a.n(B),N=a(21),A=a.n(N),D=a(106),K=a.n(D),H=function(e){return r.a.createElement(P.a,{style:{maxWidth:800,maxHeight:600,overflow:"auto"}},r.a.createElement(K.a,{url:e.url,controls:!0,playing:!0,muted:!0,style:{marginLeft:"auto",marginRight:"auto"}}),r.a.createElement(z.a,null,r.a.createElement(A.a,{gutterBottom:!0,variant:"headline",component:"h2"},e.data.title)),r.a.createElement(C.a,null,r.a.createElement(W.a,{size:"small",color:"primary",href:e.data.url},"Source"),r.a.createElement(W.a,{size:"small",color:"primary",href:"https://www.reddit.com".concat(e.data.permalink)},"Comments")))},M=a(107),T=a.n(M),J=function(e){return r.a.createElement(P.a,{style:{maxWidth:800,maxHeight:600,overflow:"auto"}},r.a.createElement(z.a,null,r.a.createElement(A.a,{gutterBottom:!0,variant:"headline",component:"h2"},e.data.title),r.a.createElement(A.a,{component:"div"},r.a.createElement(T.a,{source:e.data.selftext}))),r.a.createElement(C.a,null,r.a.createElement(W.a,{size:"small",color:"primary",href:e.data.url},"Source"),r.a.createElement(W.a,{size:"small",color:"primary",href:"https://www.reddit.com".concat(e.data.permalink)},"Comments")))},U=a(108),G=function(e){return r.a.createElement(P.a,{style:{maxWidth:800,maxHeight:600,overflow:"auto"}},r.a.createElement(U.a,{image:e.url,style:{width:400*e.data.preview.images[0].source.width/e.data.preview.images[0].source.height,height:400,marginLeft:"auto",marginRight:"auto"}}),r.a.createElement(z.a,null,r.a.createElement(A.a,{gutterBottom:!0,variant:"headline",component:"h2"},e.data.title)),r.a.createElement(C.a,null,r.a.createElement(W.a,{size:"small",color:"primary",href:e.data.url},"Source"),r.a.createElement(W.a,{size:"small",color:"primary",href:"https://www.reddit.com".concat(e.data.permalink)},"Comments")))},$=50,q=Object(w.createMuiTheme)({palette:{primary:{main:"#ff4500"}}}),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={subreddit:"all",posts:[],before:null,after:null,index:0,loading:!0},a.removeStickied=function(e){return e.filter(function(e){return!e.data.stickied})},a.fetchPage=function(e,t){var n=a.state.subreddit;a.setState({loading:!0}),fetch("https://www.reddit.com/r/".concat(n,".json?limit=").concat($,"&count=").concat($,"&before=").concat(e,"&after=").concat(t)).then(function(e){return e.json()}).then(function(e){return a.setState({posts:a.removeStickied(e.data.children),before:e.data.before,after:e.data.after,loading:!1})})},a.onKeyDown=function(e){var t=a.state,n=t.posts,r=t.index,i=t.loading,o=t.before,c=t.after;if(!(i||"ArrowLeft"===e.key&&0===r)){var l=r%$;"ArrowRight"===e.key?(a.setState({index:r+1}),l===n.length-1&&a.fetchPage(null,c)):"ArrowLeft"===e.key&&(a.setState({index:r-1}),0===l&&a.fetchPage(o,null))}},a.onSearch=function(e){return a.setState({subreddit:e,index:0},function(){return a.fetchPage(null,null)})},a.renderPost=function(e){switch(e.post_hint){case"image":return r.a.createElement(G,{data:e,url:e.url,index:a.state.index});case"hosted:video":return r.a.createElement(H,{data:e,url:e.media.reddit_video.scrubber_media_url,index:a.state.index});case"rich:video":var t="gfycat.com"===e.domain?e.preview.reddit_video_preview.scrubber_media_url:e.url;return r.a.createElement(H,{data:e,url:t,index:a.state.index});case"link":return e.preview.reddit_video_preview?r.a.createElement(H,{data:e,url:e.preview.reddit_video_preview.scrubber_media_url,index:a.state.index}):r.a.createElement(G,{data:e,url:e.preview.images[0].source.url,index:a.state.index});default:return r.a.createElement(J,{data:e,index:a.state.index})}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown,!1),this.fetchPage(null,null)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown,!1)}},{key:"render",value:function(){var e=this.state,t=e.posts,a=e.index,n=e.loading,i=t[a%$];return r.a.createElement(w.MuiThemeProvider,{theme:q},r.a.createElement(O,{onSubmit:this.onSearch}),r.a.createElement(h.a,{style:{height:"100vh"},container:!0,justify:"center",alignItems:"center"},n?r.a.createElement(f.a,null):this.renderPost(i.data)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[200,2,1]]]);
//# sourceMappingURL=main.72caa8f9.chunk.js.map