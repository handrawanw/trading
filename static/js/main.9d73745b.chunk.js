(this.webpackJsonpbelajarcss=this.webpackJsonpbelajarcss||[]).push([[0],{100:function(e,a,t){},109:function(e,a,t){e.exports=t(262)},114:function(e,a,t){},142:function(e,a){},260:function(e,a,t){},262:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(20),c=t.n(n),o=(t(114),t(264)),s=t(265),m=t(101),u=t.n(m),i=t(18),d=u()("http://localhost:1999"),b=(localStorage.getItem("token")&&Object(i.a)(localStorage.getItem("token")),t(4));function g(e){return{type:"TradeJual",market:e.market}}function h(e){return{type:"TradeBeli",market:e.market}}function f(e){return{type:"TradeAll",market:e.market}}var E=t(11);function v(e){var a=e.marketData,t={},r=[];(a||[]).forEach((function(e){Object.keys(t).includes("x"+e.harga)||(t["x"+e.harga]={jumlah:0,harga:0,total:0}),t["x"+e.harga]={jumlah:t["x"+e.harga].jumlah+e.jumlah,total:t["x"+e.harga].total+e.total,harga:e.harga,tipe:e.tipe}}));for(var l=0,n=Object.entries(t);l<n.length;l++){var c=Object(E.a)(n[l],2),o=(c[0],c[1]);r.push({key:o})}return r}function j(e){var a=e.Judul,t=Object(b.b)(),r=Object(b.c)((function(e){return e.TradeState.TradeJual})).market,n=(localStorage.getItem("token")?Object(i.a)(localStorage.getItem("token")):{}).id;return l.a.useEffect((function(){d.on("tradeAll",(function(e){var a=JSON.parse(e).tradeAll||[],r=a.filter((function(e){return e.user?e.user.toString()===n.toString():null})),l=v({marketData:a?a.filter((function(e){return"JUAL"===e.tipe.toUpperCase()})).sort((function(e,a){return a.harga-e.harga})).filter((function(e){return e.jumlah>0})).sort((function(e,a){return a.harga-e.harga})).sort((function(e,a){return a.jumlah-e.jumlah})):[]});t([g({market:l}),f({market:r})])}))}),[a,t,n]),l.a.createElement("div",{className:"overScroll"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("tbody",{align:"left"},r?r.length<=0?l.a.createElement("div",null,"No data"):r.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",{className:"text-danger"},e.key.harga),l.a.createElement("td",{className:"text-danger"},e.key.jumlah),l.a.createElement("td",{className:"text-danger"},e.key.total))})):null)))}var p=t(15),N=t(1),O=t(5);var k=t(13),y=t.n(k);function S(){var e=Object(b.b)(),a=Object(b.c)((function(e){return e.storeHistory?e.storeHistory:{}})),t=(a.lastJual,a.highPrice,a.lowPrice,a.lastPriceAll,Object(b.c)((function(e){return e.UserState.setForm.beli?e.UserState.setForm.beli:{}}))),r=t.harga,n=t.jumlah,c=Object(b.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).saldo,o=l.a.useState({jumlah:"",harga:""}),s=Object(E.a)(o,2),m=s[0],u=s[1],i=function(e){e.target.validity.valid&&u(Object(N.a)(Object(N.a)({},m),{},Object(p.a)({},e.target.name,e.target.value)))};return l.a.useEffect((function(){e(function(e){var a=e.tipe,t=e.jumlah,r=e.harga,l=e.status;return l&&"CLICK"===l&&O.a.success("Item harga berhasil dipindahkan ke form"),{type:"setFormBeli",tipe:a,jumlah:t,harga:r}}({tipe:"BELI",jumlah:m.jumlah,harga:m.harga}))}),[m,e]),l.a.createElement("div",{className:"d-block"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var a=e.DataBeli;y()({url:"".concat("http://localhost:1999","/tradeBuy"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(N.a)({},a)}).then((function(e){var a=e.data;O.a.success(a.message)})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,O.a.error(a)}))}({DataBeli:{jumlah:n,harga:r}})}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-4 d-block"},l.a.createElement("div",{className:"d-block mb-3"},l.a.createElement("div",{className:"d-block"},"SALDO"),l.a.createElement("div",{className:"d-block"},c?Number(c)-Number(n)*Number(r):0)),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:"d-block"},"Total Bayar"),l.a.createElement("div",{className:"d-block"},Number(n)*Number(r))),l.a.createElement("button",{className:"btn btn-outline-success form-control mt-2"},"BELI")),l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("label",{for:"jumlah"},"Jumlah"),l.a.createElement("div",{align:"right"},"0 IDR")),l.a.createElement("input",{type:"text",name:Object.keys(m)[0],value:n,pattern:"\\d*",onInput:i,className:"form-control"}),l.a.createElement("label",{for:"jumlah"},"Harga"),l.a.createElement("input",{type:"text",name:Object.keys(m)[1],value:r,pattern:"(\\d|\\.)*",onInput:i,className:"form-control"}),l.a.createElement("div",{className:"d-block mt-1"},"Total Bayar : ",Number(n)*Number(r)))),l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1"},"25%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1"},"50%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1"},"75%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1"},"100%"))))}function D(){var e=Object(b.b)(),a=Object(b.c)((function(e){return e.storeHistory})).lastBeli,t=Object(b.c)((function(e){return e.UserState.setForm.jual?e.UserState.setForm.jual:{}})),r=t.harga,n=t.jumlah,c=Object(b.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).codeo,o=l.a.useState({jumlah:"",harga:""}),s=Object(E.a)(o,2),m=s[0],u=s[1],i=function(e){e.target.validity.valid&&u(Object(N.a)(Object(N.a)({},m),{},Object(p.a)({},e.target.name,e.target.value)))};return l.a.useEffect((function(){e(function(e){var a=e.tipe,t=e.jumlah,r=e.harga,l=e.status;return l&&"CLICK"===l&&O.a.success("Item harga berhasil dipindahkan ke form"),{type:"setFormJual",tipe:a,jumlah:t,harga:r}}({tipe:"JUAL",jumlah:m.jumlah,harga:m.harga}))}),[m,e]),l.a.createElement("div",{className:"d-block"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var a=e.DataJual;y()({url:"".concat("http://localhost:1999","/tradeSell"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(N.a)({},a)}).then((function(e){var a=e.data;O.a.success(a.message)})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,O.a.error(a)}))}({DataJual:{jumlah:n,harga:r}})}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-4 d-block"},l.a.createElement("div",{className:"d-block mb-3"},l.a.createElement("div",{className:"d-block"},"CODEO"),l.a.createElement("div",{className:"d-block"},c||0)),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:"d-block"},"Last Price"),l.a.createElement("div",{className:"d-block"},l.a.createElement("small",null,a||0))),l.a.createElement("button",{className:"btn btn-outline-danger form-control mt-2"},"JUAL")),l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("label",{for:"jumlah"},"Jumlah"),l.a.createElement("div",{align:"right"},"0 IDR")),l.a.createElement("input",{type:"text",name:Object.keys(m)[0],value:n,pattern:"\\d*",onInput:i,className:"form-control"}),l.a.createElement("label",{for:"jumlah"},"Harga"),l.a.createElement("input",{type:"text",name:Object.keys(m)[1],value:r,pattern:"(\\d|\\.)*",onInput:i,className:"form-control"}),l.a.createElement("div",{className:"d-block mt-1"},"Total Bayar : ",Number(n)*Number(r)))),l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1"},"25%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1"},"50%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1"},"75%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1"},"100%"))))}function w(){var e=l.a.useState(void 0),a=Object(E.a)(e,2),t=a[0],r=a[1];return l.a.useEffect((function(){d.on("trafikHariIni",(function(e){var a=JSON.parse(e),t=a.hargaTerakhir,l=a.hargaTertinggi,n=a.hargaTerendah,c=a.volume;r({hargaTerakhir:t.hargaDeal,hargaTertinggi:l.hargaDeal,hargaTerendah:n.hargaDeal,volume:c})}))}),[r]),l.a.createElement("section",{style:{height:"10%"}},l.a.createElement("div",{className:"d-flex justify-content-between mt-3"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Harga Terakhir")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,t?t.hargaTerakhir:0))),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Tertinggi")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,t?t.hargaTertinggi:0))),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Terendah")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,t?t.hargaTerendah:0))),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Volume")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,t?t.volume:0)))))}function T(e){var a=e.Judul,t=Object(b.b)(),r=Object(b.c)((function(e){return e.TradeState.TradeBeli})).market,n=(localStorage.getItem("token")?Object(i.a)(localStorage.getItem("token")):{}).id;return l.a.useEffect((function(){d.on("tradeAll",(function(e){var a=JSON.parse(e).tradeAll||[],r=a.filter((function(e){return e.user?e.user.toString()===n.toString():null})),l=v({marketData:a?a.filter((function(e){return"BELI"===e.tipe.toUpperCase()})).sort((function(e,a){return a.harga-e.harga})).filter((function(e){return e.jumlah>0})).sort((function(e,a){return a.harga-e.harga})).sort((function(e,a){return a.jumlah-e.jumlah})):[]});t([h({market:l}),f({market:r})])}))}),[a,t,n]),l.a.createElement("div",{className:"overScroll"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("tbody",{align:"left"},r?r.length<=0?l.a.createElement("div",null,"No data"):r.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",{className:"text-success"},e.key.harga),l.a.createElement("td",{className:"text-success"},e.key.jumlah),l.a.createElement("td",{className:"text-success"},e.key.total))})):null)))}function U(e){var a=e.DataRefund;y()({url:"".concat("http://localhost:1999","/tradePay"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:{idMd5:a}}).then((function(e){var a=e.data;O.a.success(a.message)})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,O.a.error(a)}))}function L(){var e=Object(b.c)((function(e){return e.TradeState.TradeMe})).market;return l.a.createElement("section",{className:"mt-3",style:{backgroundColor:"#252525"}},l.a.createElement("div",{className:"overScroll"},l.a.createElement("table",{className:"table table-borderless m-3"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"text-white"},l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"JUMLAH"),l.a.createElement("td",null,"TOTAL"),l.a.createElement("td",null,"Aksi"))),l.a.createElement("tbody",null,e&&e.length>0?e.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",{className:"text-white"},l.a.createElement("b",null,e.harga)),l.a.createElement("td",{className:"text-white"},l.a.createElement("b",null,e.jumlah)),l.a.createElement("td",{className:"text-white"},l.a.createElement("b",null,e.total)),l.a.createElement("td",{className:"text-white"},"JUAL"===e.tipe?l.a.createElement("button",{className:"btn btn-outline-danger p-1",onClick:function(){return U({DataRefund:e._id})}},l.a.createElement("i",{className:"fa fa-money"})):l.a.createElement("button",{className:"btn btn-outline-success p-1",onClick:function(){return U({DataRefund:e._id})}},l.a.createElement("i",{className:"fa fa-money"}))))})):l.a.createElement("tr",null,l.a.createElement("td",{className:"text-white"},"-"),l.a.createElement("td",{className:"text-white"},"-"),l.a.createElement("td",{className:"text-white"},"-"),l.a.createElement("td",{className:"text-white"},"-"))))))}var J=t(103);function x(){var e=Object(b.c)((function(e){return e.storeHistory})),a={labels:e.LabelNew,datasets:[{type:"line",label:"Harga Beli",data:e.DataBeli,fill:!1,backgroundColor:"green",borderColor:"green",hoverBackgroundColor:"green",hoverBorderColor:"green"},{type:"line",label:"Harga Jual",data:e.DataJual,fill:!1,backgroundColor:"red",borderColor:"red",hoverBackgroundColor:"red",hoverBorderColor:"red"}]};return l.a.createElement(J.Line,{data:a})}var B=t(104),I=t(105),A=new(function(){function e(){Object(B.a)(this,e),this.isLogin=!1}return Object(I.a)(e,[{key:"onLogin",value:function(e){this.isLogin=!0,e()}},{key:"onLogout",value:function(e){e(),this.isLogin=!1,localStorage.clear()}}]),e}());var C=t(6);function H(){var e=Object(C.g)();return l.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return function(e){e.DataLogin;var a=e.history;y()({url:"".concat("http://localhost:1999","/user/logout"),method:"DELETE",headers:{jwttoken:localStorage.getItem("token")}}).then((function(e){var t=e.data;A.onLogout((function(){O.a.success(t.message),localStorage.clear(),a.push("/trading")}))})).catch((function(e){var t="";t=void 0===e.response?e.message:e.response.data.message,A.onLogout((function(){localStorage.clear(),a.push("/trading")})),O.a.error(t)}))}({history:e})}},"Logout")}t(260);function F(){var e=(localStorage.getItem("token")?Object(i.a)(localStorage.getItem("token")):{}).id,a=Object(C.g)(),t=Object(b.b)(),r=Object(b.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).username;return l.a.useEffect((function(){d.emit("soketAuth",JSON.stringify({token:localStorage.getItem("token")})),e&&(d.on("infoUser".concat(e),(function(e){var r=JSON.parse(e);r.infoUser?(t(function(e){return{type:"setInfoUser",User:e.User}}({User:r})),r.message&&O.a.success(r.message)):A.onLogout((function(){localStorage.clear(),a.push("/trading")}))})),d.on("latestTrade",(function(e){var a,r=JSON.parse(e).latestTrade,l=r?r.filter((function(e){return e.tipeHistori?e:null})):[],n=[],c=[],o=[];l.forEach((function(e){n.push(new Date(e.createdAt).toLocaleTimeString()+" "+new Date(e.createdAt).toLocaleDateString()),"BELI"===e.tipeHistori.toUpperCase()?c.push(e.latestHarga):o.push(e.latestHarga)})),t((a={LabelNew:n,Data:r,DataBeli:c,lastBeli:c[c.length-1],DataJual:o,lastJual:o[o.length-1]},Object(N.a)({type:"setChart"},a)))})))}),[t,e,a]),l.a.createElement(o.a,{fluid:!0},l.a.createElement(s.a,null,l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"d-block m-3"},"Hello ",r)),l.a.createElement("div",{className:"col-8"},l.a.createElement("header",null,l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement("div",{className:"d-block m-3"},l.a.createElement(H,null)),l.a.createElement("div",{className:"d-block m-3"},l.a.createElement("button",{className:"btn btn-outline-success"},"Daftar")))))),l.a.createElement(s.a,null,l.a.createElement("div",{className:"col-6"},l.a.createElement(x,null),l.a.createElement(L,null)),l.a.createElement("div",{className:"col-6",style:{backgroundColor:"#252525"}},l.a.createElement(w,null),l.a.createElement("section",{style:{backgroundColor:"#252525"}},l.a.createElement("div",{className:"row d-flex justify-content-between mt-3"},l.a.createElement("div",{className:"col-6 col-sm-12 col-xs-12 col-md-6"},l.a.createElement("table",{className:"table table-borderless",style:{margin:0}},l.a.createElement("caption",null,"Daftar Beli"),l.a.createElement("thead",null,l.a.createElement("tr",{className:"text-white"},l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"JUMLAH"),l.a.createElement("td",null,"TOTAL")))),l.a.createElement(T,{Judul:"BELI"})),l.a.createElement("div",{className:"col-6 col-sm-12 col-xs-12 col-md-6"},l.a.createElement("table",{className:"table table-borderless",style:{margin:0}},l.a.createElement("caption",null,"Daftar Jual"),l.a.createElement("tr",{className:"text-white"},l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"JUMLAH"),l.a.createElement("td",null,"TOTAL"))),l.a.createElement(j,{Judul:"JUAL"})))),l.a.createElement("section",{style:{backgroundColor:"#252525"}},l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement(D,null)),l.a.createElement("div",{className:"col-6"},l.a.createElement(S,null))))))))}var P=t(14);t(100);function M(){var e=Object(C.g)(),a=l.a.useState({email:"",password:""}),t=Object(E.a)(a,2),r=t[0],n=t[1],c=function(e){n(Object(N.a)(Object(N.a)({},r),{},Object(p.a)({},e.target.name,e.target.value)))};return l.a.createElement("form",{className:"posisiForm",onSubmit:function(a){a.preventDefault(),function(e){var a=e.DataLogin,t=e.history;y()({url:"".concat("http://localhost:1999","/user/login"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(N.a)({},a)}).then((function(e){var a=e.data;A.onLogin((function(){O.a.success(a.message),localStorage.setItem("token",a.token),t.push("/trading/dashboard")}))})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,O.a.error(a)}))}({DataLogin:r,history:e})}},l.a.createElement("h5",{align:"center"},"Login Trade"),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("label",{for:"email"},l.a.createElement("small",null,"Email")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[0],value:Object.values(r)[0],onChange:c}),l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Password")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[1],value:Object.values(r)[1],onChange:c}),l.a.createElement("div",{className:"d-block mt-2",align:"right"},l.a.createElement(P.b,{to:"/trading/daftar",className:"m-2"},"Daftar"),l.a.createElement("button",{className:"btn btn-outline-success"},l.a.createElement("small",null,"Login"))))))}function R(){return l.a.createElement(M,null)}function G(){var e=Object(C.g)(),a=l.a.useState({username:"",email:"",password:""}),t=Object(E.a)(a,2),r=t[0],n=t[1],c=function(e){n(Object(N.a)(Object(N.a)({},r),{},Object(p.a)({},e.target.name,e.target.value)))};return l.a.createElement("form",{className:"posisiForm",onSubmit:function(a){a.preventDefault(),function(e){var a=e.DataDaftar,t=e.history;y()({url:"".concat("http://localhost:1999","/user"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(N.a)({},a)}).then((function(e){var a=e.data;O.a.success(a.message),t.push("/trading")})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,O.a.error(a)}))}({DataDaftar:r,history:e})}},l.a.createElement("h5",{align:"center"},"Daftar Trade"),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Username")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[0],value:Object.values(r)[0],onChange:c}),l.a.createElement("label",{for:"email"},l.a.createElement("small",null,"Email")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[1],value:Object.values(r)[1],onChange:c}),l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Password")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[2],value:Object.values(r)[2],onChange:c}),l.a.createElement("div",{className:"d-block mt-2",align:"right"},l.a.createElement(P.b,{to:"/trading"},"LOGIN"),l.a.createElement("button",{className:"btn btn-outline-success"},l.a.createElement("small",null,"DAFTAR"))))))}function W(){return l.a.createElement(G,null)}var K=t(108);function _(e){var a=e.component,t=Object(K.a)(e,["component"]);return l.a.createElement(C.b,Object.assign({},t,{render:function(e){return A.isLogin?l.a.createElement(a,t):l.a.createElement(C.a,{to:{pathname:"/",state:{from:e.location}}})}}))}var V=Object(C.h)((function(){var e=Object(C.g)();return l.a.useEffect((function(){localStorage.getItem("token")?A.onLogin((function(){e.push("/trading/dashboard")})):A.onLogout((function(){e.push("/trading")}))}),[e]),l.a.createElement(C.d,null,l.a.createElement(C.b,{exact:!0,path:"/trading"},l.a.createElement(R,null)),l.a.createElement(C.b,{path:"/trading/daftar"},l.a.createElement(W,null)),l.a.createElement(_,{path:"/trading/dashboard",component:F}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(261);var $=t(21),q=t(106),z=t(107),Q={TradeJual:{market:[]},TradeBeli:{market:[]},TradeMe:{market:[]}};function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TradeJual":return Object(N.a)(Object(N.a)({},e),{},{TradeJual:Object(N.a)(Object(N.a)({},e.TradeJual),{},{market:a.market})});case"TradeBeli":return Object(N.a)(Object(N.a)({},e),{},{TradeBeli:Object(N.a)(Object(N.a)({},e.TradeBeli),{},{market:a.market})});case"TradeAll":return Object(N.a)(Object(N.a)({},e),{},{TradeMe:Object(N.a)(Object(N.a)({},e.TradeMe),{},{market:a.market})});default:return Object(N.a)({},e)}}var Y={User:null,setForm:{beli:{tipe:"",jumlah:"",harga:""},jual:{tipe:"",jumlah:"",harga:""}}};function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"setInfoUser":return Object(N.a)(Object(N.a)({},e),{},{User:a.User});case"setForm":return Object(N.a)(Object(N.a)({},e),{},{setForm:Object(N.a)(Object(N.a)({},e.setForm),{},{beli:Object(N.a)(Object(N.a)({},e.setForm.beli),{},{tipe:a.tipe,jumlah:a.jumlah,harga:a.harga}),jual:Object(N.a)(Object(N.a)({},e.setForm.jual),{},{tipe:a.tipe,jumlah:a.jumlah,harga:a.harga})})});case"setFormJual":return Object(N.a)(Object(N.a)({},e),{},{setForm:Object(N.a)(Object(N.a)({},e.setForm),{},{jual:Object(N.a)(Object(N.a)({},e.setForm.jual),{},{tipe:a.tipe,jumlah:a.jumlah,harga:a.harga})})});case"setFormBeli":return Object(N.a)(Object(N.a)({},e),{},{setForm:Object(N.a)(Object(N.a)({},e.setForm),{},{beli:Object(N.a)(Object(N.a)({},e.setForm.beli),{},{tipe:a.tipe,jumlah:a.jumlah,harga:a.harga})})});default:return Object(N.a)({},e)}}var ee={Grafik:[],LabelNew:[],DataBeli:[],DataJual:[],lastJual:0,lastBeli:0,highPrice:0,lowPrice:0,lastPriceAll:0};function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"setChart":a.Data&&a.Data.sort((function(e,a){return a.latestHarga-e.latestHarga}));return Object(N.a)(Object(N.a)({},e),{},{Grafik:a.Data,LabelNew:"object"===typeof a.LabelNew?a.LabelNew.reverse().filter((function(e,a){return a<=10?e:null})):[],DataBeli:"object"===typeof a.DataBeli?a.DataBeli.reverse().filter((function(e,a){return a<=10?e:null})):[],lastBeli:a.lastBeli,DataJual:"object"===typeof a.DataJual?a.DataJual.reverse().filter((function(e,a){return a<=10?e:null})):[],lastJual:a.lastJual});case"setDataJual":return Object(N.a)(Object(N.a)({},e),{},{DataBeli:a.Data,lastBeli:a.last});case"setDataBeli":return Object(N.a)(Object(N.a)({},e),{},{DataJual:a.Data,lastJual:a.last});default:return Object(N.a)({},e)}}function te(e){var a=e.children,t=Object($.combineReducers)({TradeState:X,UserState:Z,storeHistory:ae}),r=Object($.createStore)(t,Object(q.composeWithDevTools)(Object($.applyMiddleware)(z.reduxSoldierMiddleware)));return l.a.createElement(b.a,{store:r},a)}c.a.render(l.a.createElement(P.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(te,null,l.a.createElement(V,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[109,1,2]]]);
//# sourceMappingURL=main.9d73745b.chunk.js.map