(this.webpackJsonpbelajarcss=this.webpackJsonpbelajarcss||[]).push([[0],{101:function(e,a,t){},110:function(e,a,t){e.exports=t(262)},115:function(e,a,t){},147:function(e,a){},262:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),o=(t(115),t(263)),s=t(264),m=t(265),u=t(6);function i(e){return{type:"TradeJual",market:e.market}}function d(e){return{type:"TradeBeli",market:e.market}}function E(e){return{type:"TradeAll",market:e.market}}var f=t(103),b=t.n(f)()("https://tradingtes.herokuapp.com");t(77);var v=function(e){e.Data;var a=e.Judul,t=e.TabelTipe,n=Object(u.b)(),l=Object(u.c)((function(e){return e.TradeState[t]})).market;return r.a.useEffect((function(){b.on("tradeAll",(function(e){if("JUAL"===a.toUpperCase()){var t=JSON.parse(e).tradeAll,r=t?t.filter((function(e){return"JUAL"===e.tipe.toUpperCase()})).sort((function(e,a){return a.harga-e.harga})).filter((function(e){return e.jumlah>0})).sort((function(e,a){return a.jumlah-e.jumlah})):[];n(i({market:r}))}else if("BELI"===a.toUpperCase()){var l=JSON.parse(e).tradeAll,c=l?l.filter((function(e){return"BELI"===e.tipe.toUpperCase()})).filter((function(e){return 0!==e.jumlah})).sort((function(e,a){return e.harga-a.harga})).filter((function(e){return e.jumlah>0})).sort((function(e,a){return e.jumlah-a.jumlah})):[];n(d({market:c}))}else n([i({market:[]}),d({market:[]}),E({market:[]})])}))}),[a,n]),r.a.createElement(o.a,{fluid:!0},r.a.createElement("div",{className:"d-block",align:"center"},r.a.createElement("section",null,r.a.createElement("h3",null,a)),r.a.createElement("aside",null,r.a.createElement("div",{className:"componentBeli overScrollBeli"},r.a.createElement("div",null,r.a.createElement("div",{className:"d-block m-2 scrolStatic"},r.a.createElement("h6",null,"TIPE")),r.a.createElement("div",{className:"d-block"},l&&l.length>0?l.map((function(e){return r.a.createElement("div",null,e.tipe)})):"-")),r.a.createElement("div",null,r.a.createElement("div",{className:"d-block m-2 scrolStatic"},r.a.createElement("h6",null,"JUMLAH")),r.a.createElement("div",{className:"d-block"},l&&l.length>0?l.map((function(e){return r.a.createElement("div",null,e.jumlah)})):"-")),r.a.createElement("div",null,r.a.createElement("div",{className:"d-block m-2 scrolStatic"},r.a.createElement("h6",null,"HARGA")),r.a.createElement("div",{className:"d-block"},l&&l.length>0?l.map((function(e){return r.a.createElement("div",null,e.harga)})):"-")),r.a.createElement("div",null,r.a.createElement("div",{className:"d-block m-2 scrolStatic"},r.a.createElement("h6",null,"TOTAL")),r.a.createElement("div",{className:"d-block"},l&&l.length>0?l.map((function(e){return r.a.createElement("div",null,e.total)})):"-"))))))},h=t(14),g=t(2),p=t(18),k=t(12),j=t.n(k),O=t(7);function N(){var e=Object(u.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).saldo,a=r.a.useState({jumlah:"",harga:""}),t=Object(p.a)(a,2),n=t[0],l=t[1],c=function(e){e.target.validity.valid&&l(Object(g.a)(Object(g.a)({},n),{},Object(h.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"d-block ml-3 mt-3"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var a=e.DataBeli;j()({url:"".concat("https://tradingtes.herokuapp.com","/tradeBuy"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(g.a)({},a)}).then((function(e){var a=e.data;O.a.success(a.message)})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,O.a.error(a)}))}({DataBeli:n})}},r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-4 d-block"},r.a.createElement("div",{className:"d-block mb-3"},r.a.createElement("div",{className:"d-block"},"SALDO"),r.a.createElement("div",{className:"d-block"},e)),r.a.createElement("div",{className:"d-block mb-1"},r.a.createElement("div",{className:"d-block"},"LAST PRICE BELI"),r.a.createElement("div",{className:"d-block"},"0")),r.a.createElement("button",{className:"btn btn-success form-control"},"BELI")),r.a.createElement("div",{className:"col-8"},r.a.createElement("label",{for:"jumlah"},"Jumlah"),r.a.createElement("input",{type:"text",name:Object.keys(n)[0],value:Object.values(n)[0],pattern:"\\d*",onInput:c,className:"form-control"}),r.a.createElement("label",{for:"jumlah"},"Harga"),r.a.createElement("input",{type:"text",name:Object.keys(n)[1],value:Object.values(n)[1],pattern:"(\\d|\\.)*",onInput:c,className:"form-control"}),r.a.createElement("div",{className:"d-block mt-1"},"Total Bayar : ",Number(n.jumlah)*Number(n.harga))))))}function S(){var e=Object(u.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).codeo,a=r.a.useState({jumlah:"",harga:""}),t=Object(p.a)(a,2),n=t[0],l=t[1],c=function(e){e.target.validity.valid&&l(Object(g.a)(Object(g.a)({},n),{},Object(h.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"d-block ml-3 mt-3"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var a=e.DataJual;j()({url:"".concat("https://tradingtes.herokuapp.com","/tradeSell"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(g.a)({},a)}).then((function(e){var a=e.data;O.a.success(a.message)})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,O.a.error(a)}))}({DataJual:n})}},r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-4 d-block"},r.a.createElement("div",{className:"d-block mb-3"},r.a.createElement("div",{className:"d-block"},"TOTAL"),r.a.createElement("div",{className:"d-block"},e," CODEO")),r.a.createElement("div",{className:"d-block mb-1"},r.a.createElement("div",{className:"d-block"},"LAST PRICE Jual"),r.a.createElement("div",{className:"d-block"},"0")),r.a.createElement("button",{className:"btn btn-danger form-control"},"JUAL")),r.a.createElement("div",{className:"col-8"},r.a.createElement("label",{for:"jumlah"},"Jumlah"),r.a.createElement("input",{type:"text",name:Object.keys(n)[0],value:Object.values(n)[0],pattern:"\\d*",onInput:c,className:"form-control"}),r.a.createElement("label",{for:"jumlah"},"Harga"),r.a.createElement("input",{type:"text",name:Object.keys(n)[1],value:Object.values(n)[1],pattern:"(\\d|\\.)*",onInput:c,className:"form-control"}),r.a.createElement("div",{className:"d-block mt-1"},"Total Bayar : ",Number(n.jumlah)*Number(n.harga))))))}var T=t(104),y=t(105),U=new(function(){function e(){Object(T.a)(this,e),this.isLogin=!1}return Object(y.a)(e,[{key:"onLogin",value:function(e){this.isLogin=!0,e()}},{key:"onLogout",value:function(e){e(),this.isLogin=!1,localStorage.clear()}}]),e}());var L=t(4);function w(){var e=Object(L.g)();return r.a.createElement("button",{className:"btn btn-success",onClick:function(){return function(e){e.DataLogin;var a=e.history;j()({url:"".concat("https://tradingtes.herokuapp.com","/user/logout"),method:"DELETE",headers:{jwttoken:localStorage.getItem("token")}}).then((function(e){var t=e.data;U.onLogout((function(){O.a.success(t.message),localStorage.clear(),a.push("/")}))})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,O.a.error(a)}))}({history:e})}},"Logout")}var D=function(e){var a=e.Judul,t=Object(u.b)(),n=Object(u.c)((function(e){return e.TradeState.TradeMe})).market;return r.a.useEffect((function(){b.on("tradeMe",(function(e){var a=JSON.parse(e).tradeMe.sort((function(e,a){return a.harga-e.harga}));t(E({market:a}))}))}),[a,t]),r.a.createElement(o.a,{fluid:!0},r.a.createElement("div",{className:"d-block",align:"center"},r.a.createElement("section",null,r.a.createElement("h3",null,a)),r.a.createElement("aside",null,r.a.createElement("div",{className:"componentBeli overScrollBeli"},r.a.createElement("div",null,r.a.createElement("div",{className:"d-block m-2 scrolStatic"},r.a.createElement("h6",null,"NO")),r.a.createElement("div",{className:"d-block"},n&&n.length>0?n.map((function(e,a){return r.a.createElement("div",{className:"m-3 fontS"},a+1)})):"-")),r.a.createElement("div",null,r.a.createElement("div",{className:"d-block m-2 scrolStatic"},r.a.createElement("h6",null,"JUMLAH")),r.a.createElement("div",{className:"d-block"},n&&n.length>0?n.map((function(e){return r.a.createElement("div",{className:"m-3 fontS "},e.jumlah)})):"-")),r.a.createElement("div",null,r.a.createElement("div",{className:"d-block m-2 scrolStatic"},r.a.createElement("h6",null,"HARGA")),r.a.createElement("div",{className:"d-block"},n&&n.length>0?n.map((function(e){return r.a.createElement("div",{className:"m-3 fontS "},e.harga)})):"-")),r.a.createElement("div",null,r.a.createElement("div",{className:"d-block m-2 scrolStatic"},r.a.createElement("h6",null,"TOTAL")),r.a.createElement("div",{className:"d-block"},n&&n.length>0?n.map((function(e){return r.a.createElement("div",{className:"m-3 fontS"},e.total)})):"-")),r.a.createElement("div",null,r.a.createElement("div",{className:"d-block m-2 scrolStatic"},r.a.createElement("h6",null,"TIPE")),r.a.createElement("div",{className:"d-block"},n&&n.length>0?n.map((function(e){return r.a.createElement("div",{className:"m-3 fontS"},e.tipe)})):"-")),r.a.createElement("div",null,r.a.createElement("div",{className:"d-block m-2 scrolStatic"},r.a.createElement("h6",null,"STATUS")),r.a.createElement("div",{className:"d-block"},n&&n.length>0?n.map((function(){return r.a.createElement("div",{className:"m-3 fontS "},"PENDING")})):"-")),r.a.createElement("div",null,r.a.createElement("div",{className:"d-block m-2 scrolStatic"},r.a.createElement("h6",null,"ACTION")),r.a.createElement("div",{className:"d-block"},n&&n.length>0?n.map((function(e,a){return r.a.createElement("div",{key:a+1,className:"d-block"},r.a.createElement("button",{className:"btn btn-success p-1 m-1",onClick:function(){return function(e){var a=e.DataRefund;j()({url:"".concat("https://tradingtes.herokuapp.com","/tradePay"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:{idMd5:a}}).then((function(e){var a=e.data;O.a.success(a.message)})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,O.a.error(a)}))}({DataRefund:e._id})}},a+1," ",r.a.createElement("i",{className:"fa fa-money"})))})):"-"))))))},J=t(106);function x(){var e=Object(u.c)((function(e){return e.storeHistory})).Grafik,a=e?e.filter((function(e){return e.tipeHistori?e:null})):[],t=[],n=[],l=[];a.forEach((function(e){t.push(new Date(e.createdAt).toLocaleDateString()+" "+new Date(e.createdAt).toLocaleTimeString()),"BELI"===e.tipeHistori.toUpperCase()?n.push(e.latestHarga):l.push(e.latestHarga)}));var c={labels:t,datasets:[{type:"line",label:"Harga Beli",data:n,fill:!1,backgroundColor:"red",borderColor:"red",hoverBackgroundColor:"red",hoverBorderColor:"red"},{type:"line",label:"Harga Jual",data:l,fill:!1,backgroundColor:"green",borderColor:"green",hoverBackgroundColor:"green",hoverBorderColor:"green"}]};return r.a.createElement(J.Line,{data:c})}function B(){var e=Object(u.b)(),a=Object(u.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).username;return r.a.useEffect((function(){b.emit("soketAuth",JSON.stringify({token:localStorage.getItem("token")})),b.on("infoUser",(function(a){var t=JSON.parse(a);e({type:"setInfoUser",User:{User:t}.User})})),b.on("latestTrade",(function(a){var t=JSON.parse(a).latestTrade;e({type:"setChart",Data:{Data:t}.Data})}))}),[e]),r.a.createElement(o.a,{fluid:!0},r.a.createElement(s.a,null,r.a.createElement(m.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"},r.a.createElement("div",{className:"mt-1"}),r.a.createElement("div",{align:"center"},r.a.createElement("h2",null,a),r.a.createElement(w,null))),"d"),r.a.createElement(s.a,null,r.a.createElement(m.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"},r.a.createElement("div",{className:"mt-1"}),r.a.createElement("div",{align:"center"},r.a.createElement("h2",null,"MARKET")))),r.a.createElement(s.a,null,r.a.createElement(m.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"},r.a.createElement(x,null))),r.a.createElement(s.a,null,r.a.createElement(m.a,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"},r.a.createElement(v,{Judul:"JUAL",TabelTipe:"TradeJual"})),r.a.createElement(m.a,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"},r.a.createElement(v,{Judul:"BELI",TabelTipe:"TradeBeli"}))),r.a.createElement(s.a,null,r.a.createElement(m.a,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"},r.a.createElement(N,null)),r.a.createElement(m.a,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"},r.a.createElement(S,null))),r.a.createElement(s.a,null,r.a.createElement(m.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"},r.a.createElement(D,null))))}var I=t(17);t(101);function A(){var e=Object(L.g)(),a=r.a.useState({email:"",password:""}),t=Object(p.a)(a,2),n=t[0],l=t[1],c=function(e){l(Object(g.a)(Object(g.a)({},n),{},Object(h.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{className:"posisiForm",onSubmit:function(a){a.preventDefault(),function(e){var a=e.DataLogin,t=e.history;j()({url:"".concat("https://tradingtes.herokuapp.com","/user/login"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(g.a)({},a)}).then((function(e){var a=e.data;U.onLogin((function(){O.a.success(a.message),localStorage.setItem("token",a.token),t.push("/dashboard")}))})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,O.a.error(a)}))}({DataLogin:n,history:e})}},r.a.createElement("h5",{align:"center"},"Login Trade"),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-12 mt-2"},r.a.createElement("label",{for:"email"},r.a.createElement("small",null,"Email")),r.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(n)[0],value:Object.values(n)[0],onChange:c}),r.a.createElement("label",{for:"password"},r.a.createElement("small",null,"Password")),r.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(n)[1],value:Object.values(n)[1],onChange:c}),r.a.createElement("div",{className:"d-block mt-2",align:"right"},r.a.createElement(I.b,{to:"/daftar",className:"m-2"},"Daftar"),r.a.createElement("button",{className:"btn btn-outline-success"},r.a.createElement("small",null,"Login"))))))}function C(){return r.a.createElement(A,null)}function H(){var e=Object(L.g)(),a=r.a.useState({username:"",email:"",password:""}),t=Object(p.a)(a,2),n=t[0],l=t[1],c=function(e){l(Object(g.a)(Object(g.a)({},n),{},Object(h.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{className:"posisiForm",onSubmit:function(a){a.preventDefault(),function(e){var a=e.DataDaftar,t=e.history;j()({url:"".concat("https://tradingtes.herokuapp.com","/user"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(g.a)({},a)}).then((function(e){var a=e.data;O.a.success(a.message),t.push("/")})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,O.a.error(a)}))}({DataDaftar:n,history:e})}},r.a.createElement("h5",{align:"center"},"Daftar Trade"),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-12 mt-2"},r.a.createElement("label",{for:"password"},r.a.createElement("small",null,"Username")),r.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(n)[0],value:Object.values(n)[0],onChange:c}),r.a.createElement("label",{for:"email"},r.a.createElement("small",null,"Email")),r.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(n)[1],value:Object.values(n)[1],onChange:c}),r.a.createElement("label",{for:"password"},r.a.createElement("small",null,"Password")),r.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(n)[2],value:Object.values(n)[2],onChange:c}),r.a.createElement("div",{className:"d-block mt-2",align:"right"},r.a.createElement("button",{className:"btn btn-outline-success"},r.a.createElement("small",null,"Daftar"))))))}function M(){return r.a.createElement(H,null)}var P=t(109);function R(e){var a=e.component,t=Object(P.a)(e,["component"]);return r.a.createElement(L.b,Object.assign({},t,{render:function(e){return U.isLogin?r.a.createElement(a,t):r.a.createElement(L.a,{to:{pathname:"/",state:{from:e.location}}})}}))}var G=Object(L.h)((function(){var e=Object(L.g)();return r.a.useEffect((function(){localStorage.getItem("token")?U.onLogin((function(){e.push("/dashboard")})):U.onLogout((function(){e.push("/")}))}),[e]),r.a.createElement(L.d,null,r.a.createElement(L.b,{path:"/",exact:!0},r.a.createElement(C,null)),r.a.createElement(L.b,{path:"/daftar"},r.a.createElement(M,null)),r.a.createElement(R,{path:"/dashboard",component:B}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(261);var W=t(21),F=t(107),K=t(108),$={TradeJual:{market:[]},TradeBeli:{market:[]},TradeMe:{market:[]}};function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TradeJual":return Object(g.a)(Object(g.a)({},e),{},{TradeJual:Object(g.a)(Object(g.a)({},e.TradeJual),{},{market:a.market})});case"TradeBeli":return Object(g.a)(Object(g.a)({},e),{},{TradeBeli:Object(g.a)(Object(g.a)({},e.TradeBeli),{},{market:a.market})});case"TradeAll":return Object(g.a)(Object(g.a)({},e),{},{TradeMe:Object(g.a)(Object(g.a)({},e.TradeMe),{},{market:a.market})});default:return Object(g.a)({},e)}}var q={User:null};function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"setInfoUser":return Object(g.a)(Object(g.a)({},e),{},{User:a.User});default:return Object(g.a)({},e)}}var Q={Grafik:[]};function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"setChart":return Object(g.a)(Object(g.a)({},e),{},{Grafik:a.Data});default:return Object(g.a)({},e)}}function X(e){var a=e.children,t=Object(W.combineReducers)({TradeState:_,UserState:z,storeHistory:V}),n=Object(W.createStore)(t,Object(F.composeWithDevTools)(Object(W.applyMiddleware)(K.reduxSoldierMiddleware)));return r.a.createElement(u.a,{store:n},a)}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null,r.a.createElement(I.a,null,r.a.createElement(G,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,a,t){}},[[110,1,2]]]);
//# sourceMappingURL=main.5df10e15.chunk.js.map