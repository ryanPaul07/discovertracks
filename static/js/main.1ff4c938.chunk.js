(this.webpackJsonpplaylist_app=this.webpackJsonpplaylist_app||[]).push([[0],{20:function(e,t,a){e.exports=a(29)},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),c=a.n(o),l=a(9),i=a.n(l),s=a(11),u=a(13),m=a(14),d=a(18),p=a(15),f=a(19),h=["user-read-private","user-read-email","user-top-read","playlist-read-collaborative","playlist-modify-public","playlist-read-private","playlist-modify-private"].join("%20"),v=a(4),b="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("c231d1d8ddc44ce58a6e6528b19247fd","&redirect_uri=").concat("http://ryanPaul07.github.io/discovertracks","&scope=").concat(h,"&response_type=token&show_dialog=true");var g=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{show:!0,size:"md","aria-labelledby":"contained-modal-title-vcenter"},n.a.createElement(v.a.Body,null,n.a.createElement("center",null,n.a.createElement("a",{style:{color:"#1DB954"},href:b,role:"button"},"Login to Spotify")," to access website features"))))};a(10);var E=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{show:!0,size:"lg","aria-labelledby":"contained-modal-title-vcenter"},n.a.createElement(v.a.Header,null,n.a.createElement(v.a.Title,null,"Token has expired")),n.a.createElement(v.a.Body,null,"Please click the",n.a.createElement("a",{style:{color:"#1DB954"},href:"https://discoversongs.herokuapp.com/",target:"_blank",rel:"noopener noreferrer",role:"button"}," link "),"to access the website again!")))};var y=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{show:!0,size:"lg","aria-labelledby":"contained-modal-title-vcenter"},n.a.createElement(v.a.Header,null,n.a.createElement(v.a.Title,null,"Not Enough Data")),n.a.createElement(v.a.Body,null,"Looks like there is not enough data to create a playlist. Listen to some songs at",n.a.createElement("a",{style:{color:"#1DB954"},href:"https://www.spotify.com",target:"_blank",rel:"noopener noreferrer",role:"button"}," Spotify "),"and come back to find a curated playlist for you.")))},k=a(8);var w=function(e){var t=Object(r.useState)(!0),a=Object(k.a)(t,2),o=a[0],c=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{show:o,onHide:function(){return c(!1)},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},n.a.createElement(v.a.Header,{closeButton:!0},n.a.createElement(v.a.Title,null,"Welcome")),n.a.createElement(v.a.Body,null,"This website will allow you to discover new music, based on",n.a.createElement("a",{style:{color:"#1DB954"},href:"https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/",target:"_blank",rel:"noopener noreferrer",role:"button"}," Spotify's Personalization API Endpoint"),". Each track will also have a unique mashups of gifs based on",n.a.createElement("a",{style:{color:"#1DB954"},href:"https://www.tumblr.com/docs/en/api/v2",target:"_blank",rel:"noopener noreferrer",role:"button"}," Tumblr's Blog /posts API Endpoint"),". If you would like to learn more about this website or some of my other projects, check out my",n.a.createElement("a",{style:{color:"rgb(247, 55, 95)"},href:"https://github.com/ryanPaul07",target:"_blank",rel:"noopener noreferrer",role:"button"}," Github!"))))};var j=function(e){var t=Object(r.createRef)(),a=Object(r.createRef)(),o=Object(r.useState)("1.25rem"),c=Object(k.a)(o,2),l=c[0],i=c[1],s=Object(r.useState)("not-selected"),u=Object(k.a)(s,2),m=u[0],d=u[1];Object(r.useEffect)((function(){new ResizeObserver((function(e){if(e[0].contentRect.height>100){var t=e[0].contentRect.height-100;p(t)}})).observe(t.current),!1===e.selected&&(d("not-selected"),a.current.pause(),a.current.currentTime=0)}),[t,a,e.selected,e.id]);var p=function(e){i(e>25?"0.90rem":"1.00rem")};return n.a.createElement("div",{className:"trackArray"},n.a.createElement("div",null,n.a.createElement("img",{src:e.imageArt.url,alt:"album art",width:"100",height:"100",style:{borderRadius:"7px"}})),n.a.createElement("div",{className:m,ref:t,onClick:function(){return function(t){var r=a.current;e.UpdateSelected(e.id),d(t),r.pause(),r.currentTime=0,r.play()}("selected")},onMouseEnter:function(){return function(t){e.selected||d(t)}("not-selected")}},n.a.createElement("div",{style:{fontSize:"".concat(l)}},n.a.createElement("center",null,e.songName)),n.a.createElement("h6",null,n.a.createElement("em",null,n.a.createElement("center",null,e.artistName))),n.a.createElement("audio",{ref:a,src:e.sound})))};var _,O,R=function(e){return e.tracks.map((function(t){return n.a.createElement(j,{imageArt:t.image,songName:t.songName,artistName:t.artistsName,sound:t.previewURL,id:t.id,selected:t.selected,UpdateSelected:e.updateSelected,key:t.id})}))},S=[];var N=function(e){var t=Object(r.useState)(""),a=Object(k.a)(t,2),o=a[0],c=a[1],l=Object(r.useRef)(),i=Object(r.useRef)();return Object(r.useEffect)((function(){if(0!==e.video.length){for(var t=0;t<S.length;t++)clearTimeout(S[t]);e.video[0].previewVideo.forEach((function(e,t){S.push(setTimeout((function(){_=e.video,O=e.originURL,i.current.style.backgroundImage="url(".concat(_,")"),void 0!==e.originBlog?(c(e.originBlog),l.current.href=O):(c("?"),l.current.href="https://www.google.com/searchbyimage?safe=off&image_url=".concat(_))}),5e3*t))})),S.push(setTimeout((function(){e.ReachedEnd(e.video[0].id),i.current.style.backgroundImage="url(null)",l.current.href="/",c("")}),3e4))}}),[l,i,e]),n.a.createElement("div",{ref:i,className:"videoOpt",style:{backgroundImage:"url(/)"}},n.a.createElement("div",{className:"urlBlogSource"},n.a.createElement("a",{ref:l,target:"_blank",rel:"noopener noreferrer",href:"/"},o)))};var T=function(e){var t=e.tracks.filter((function(e){return!0===e.selected}));if(t)return n.a.createElement(N,{video:t,ReachedEnd:e.ReachedEnd})},B=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{}),x="nkn7Ap61zV5X3To1whaK6KRpI5Ru2hcURK86s4HvPNe0em3pYj",D=(a(28),a(17)),z=null,A=Object(r.createRef)(),I=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={expired_token:!1,spotify_login:!1,initialLoad:!1,notEnoughData:!1,tracks:[]},a.retrieveSpotifyData=Object(s.a)(i.a.mark((function e(){var t,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/me/top/tracks?limit=5",{headers:{Authorization:"Bearer "+z}});case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,401===t.status?a.setState({expired_token:!0}):0!==r.items.length&&(n=r.items.filter((function(e){return null!=e.preview_url}))).length>1?(a.setState({tracks:n.map((function(e,t){return{id:t,artistsName:e.artists[0].name,songName:e.name,previewURL:e.preview_url,previewVideo:[],videoTime:0,image:e.album.images[1],selected:!1}}))}),a.retrieveTumblrData()):a.setState({notEnoughData:!0});case 7:case"end":return e.stop()}}),e)}))),a.retrieveTumblrData=Object(s.a)(i.a.mark((function e(){var t,r,n,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tumblr.com/v2/blog/bimir.tumblr.com/posts/photo?limit=100&api_key=".concat(x,"&offset=0"));case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,n=r.response.posts.filter((function(e){return"photo"===e.type})),o=6*a.state.tracks.length,c=0,a.setState({tracks:a.state.tracks.map((function(e,t){for(;c<o;c++)if(e.previewVideo.push({video:n[c].photos[0].original_size.url,originBlog:n[c].source_title,originURL:n[c].source_url}),c%6===5){c++;break}return e}))}),a.setState({initialLoad:!0});case 11:case"end":return e.stop()}}),e)}))),a.UpdateSelected=function(e){a.setState({tracks:a.state.tracks.map((function(t){return t.id===e?t.selected=!0:t.selected=!1,t}))})},a.ReachedEnd=function(e){a.setState({tracks:a.state.tracks.map((function(t){return t.id===e&&(t.selected=!1),t}))})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){(z=B.access_token)&&(this.retrieveSpotifyData(),this.setState({spotify_login:!0}))}},{key:"render",value:function(){var e=this.state.spotify_login;return this.state.expired_token?(console.log("The provided token has expired, if you would like to learn more check out https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow"),n.a.createElement("div",{className:"App"},n.a.createElement("div",{style:{backgroundColor:"#312533",height:"100vh"}},n.a.createElement(E,null)))):this.state.notEnoughData?n.a.createElement("div",{className:"App"},n.a.createElement("div",{style:{backgroundColor:"#312533",height:"100vh"}},n.a.createElement(y,null))):n.a.createElement("div",{ref:A,className:"App"},e?n.a.createElement("div",{className:"mainView"},n.a.createElement(w,null),n.a.createElement("div",{className:"Tracks"},n.a.createElement(D.a,{fluid:!0},n.a.createElement(R,{tracks:this.state.tracks,updateSelected:this.UpdateSelected})),this.state.initialLoad&&n.a.createElement("div",{className:"mailToView"},n.a.createElement("div",{className:"mailTo"},n.a.createElement("a",{href:"mailto:discovertracks@gmail.com?subject=Website (Recommendations/Issues)&body=<Email me any Tumblr blogs you would like to be featured next/ Or any issues/recommendations you have for this website.>"},"Recommendations")))),n.a.createElement("div",{className:"Video"},n.a.createElement(T,{tracks:this.state.tracks,ReachedEnd:this.ReachedEnd}))):n.a.createElement("div",{style:{backgroundColor:"#312533",height:"100vh"}},n.a.createElement(g,{login:this.login})))}}]),t}(r.Component);c.a.render(n.a.createElement(I,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1ff4c938.chunk.js.map