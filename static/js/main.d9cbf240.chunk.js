(this.webpackJsonpbelajarcss=this.webpackJsonpbelajarcss||[]).push([[0],{101:function(e,a,t){},111:function(e,a,t){e.exports=t(263)},116:function(e,a,t){},148:function(e,a){},263:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(20),c=t.n(n),o=(t(116),t(264)),s=t(265),m=t(266),u=t(4),i=t(5);function d(e){return{type:"TradeJual",market:e.market}}function b(e){return{type:"TradeBeli",market:e.market}}function h(e){return{type:"TradeAll",market:e.market}}function f(e){var a=e.tipe,t=e.jumlah,r=e.harga,l=e.status;return l&&"CLICK"===l&&u.a.success("Item harga berhasil dipindahkan ke form"),{type:"setForm",tipe:a,jumlah:t,harga:r}}var g=t(103),E=t.n(g),v=t(104),p=E()("https://tradingtes.herokuapp.com"),j=localStorage.getItem("token")?Object(v.a)(localStorage.getItem("token")):null,k=t(15);function O(e){var a=e.marketData,t={},r=[];(a||[]).forEach((function(e,a){Object.keys(t).includes("x"+e.harga)||(t["x"+e.harga]={jumlah:0,harga:0,total:0}),t["x"+e.harga]={jumlah:t["x"+e.harga].jumlah+e.jumlah,total:t["x"+e.harga].total+e.total,harga:e.harga,tipe:e.tipe}}));for(var l=0,n=Object.entries(t);l<n.length;l++){var c=Object(k.a)(n[l],2),o=(c[0],c[1]);r.push({key:o})}return r}t(77);var N=function(e){var a=e.Judul,t=e.TabelTipe,r=Object(i.b)(),n=Object(i.c)((function(e){return e.TradeState[t]})).market;return l.a.useEffect((function(){var e=(j||"").id;p.on("tradeAll",(function(t){var l=JSON.parse(t).tradeAll||[],n=l.filter((function(a){return a.user?a.user.toString()===e.toString():null}));if("JUAL"===a.toUpperCase()){var c=O({marketData:l?l.filter((function(e){return"JUAL"===e.tipe.toUpperCase()})).sort((function(e,a){return a.harga-e.harga})).filter((function(e){return e.jumlah>0})).sort((function(e,a){return a.harga-e.harga})).sort((function(e,a){return a.jumlah-e.jumlah})):[]});r(d({market:c}))}else if("BELI"===a.toUpperCase()){var o=JSON.parse(t).tradeAll||[],s=O({marketData:o?o.filter((function(e){return"BELI"===e.tipe.toUpperCase()})).filter((function(e){return 0!==e.jumlah})).sort((function(e,a){return e.harga-a.harga})).filter((function(e){return e.jumlah>0})).sort((function(e,a){return e.harga-a.harga})).sort((function(e,a){return e.jumlah-a.jumlah})):[]});r(b({market:s}))}else r([d({market:[]}),b({market:[]}),h({market:[]})]);r(h({market:n}))}))}),[a,r]),l.a.createElement(o.a,{fluid:!0},l.a.createElement("div",{className:"d-block",align:"center"},l.a.createElement("section",null,l.a.createElement("h3",null,a)),l.a.createElement("aside",null,l.a.createElement("div",{className:"componentBeli overScrollBeli"},l.a.createElement("div",null,l.a.createElement("div",{className:"d-block m-2 scrolStatic"},l.a.createElement("h6",null,"TIPE")),l.a.createElement("div",{className:"d-block"},n&&n.length>0?n.map((function(e){return l.a.createElement("div",null,e.key.tipe)})):"-")),l.a.createElement("div",null,l.a.createElement("div",{className:"d-block m-2 scrolStatic"},l.a.createElement("h6",null,"JUMLAH")),l.a.createElement("div",{className:"d-block"},n&&n.length>0?n.map((function(e){return l.a.createElement("div",null,e.key.jumlah)})):"-")),l.a.createElement("div",null,l.a.createElement("div",{className:"d-block m-2 scrolStatic"},l.a.createElement("h6",null,"HARGA")),l.a.createElement("div",{className:"d-block"},n&&n.length>0?n.map((function(e,a){return"JUAL"===e.key.tipe?l.a.createElement("div",null,l.a.createElement("button",{className:"badge badge-danger",onClick:function(){return r(f({tipe:e.key.tipe,jumlah:e.key.jumlah,harga:e.key.harga,status:"CLICK"}))}},e.key.harga)):"BELI"===e.key.tipe?l.a.createElement("div",null,l.a.createElement("button",{className:"badge badge-success",onClick:function(){return r(f({tipe:e.key.tipe,jumlah:e.key.jumlah,harga:e.key.harga,status:"CLICK"}))}},e.key.harga)):null})):"-")),l.a.createElement("div",null,l.a.createElement("div",{className:"d-block m-2 scrolStatic"},l.a.createElement("h6",null,"TOTAL")),l.a.createElement("div",{className:"d-block"},n&&n.length>0?n.map((function(e){return l.a.createElement("div",null,e.key.total)})):"-"))))))},S=t(14),y=t(2),T=t(12),L=t.n(T);function U(){var e=Object(i.b)(),a=Object(i.c)((function(e){return e.storeHistory?e.storeHistory:{}})).lastJual,t=Object(i.c)((function(e){return e.UserState.setForm.beli?e.UserState.setForm.beli:{}})),r=t.harga,n=t.jumlah,c=Object(i.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).saldo,o=l.a.useState({jumlah:"",harga:""}),s=Object(k.a)(o,2),m=s[0],d=s[1],b=function(e){e.target.validity.valid&&d(Object(y.a)(Object(y.a)({},m),{},Object(S.a)({},e.target.name,e.target.value)))};return l.a.useEffect((function(){e(function(e){var a=e.tipe,t=e.jumlah,r=e.harga,l=e.status;return l&&"CLICK"===l&&u.a.success("Item harga berhasil dipindahkan ke form"),{type:"setFormBeli",tipe:a,jumlah:t,harga:r}}({tipe:"BELI",jumlah:m.jumlah,harga:m.harga}))}),[m,e]),l.a.createElement("div",{className:"d-block ml-3 mt-3"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var a=e.DataBeli;L()({url:"".concat("https://tradingtes.herokuapp.com","/tradeBuy"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(y.a)({},a)}).then((function(e){var a=e.data;u.a.success(a.message)})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,u.a.error(a)}))}({DataBeli:{jumlah:n,harga:r}})}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-4 d-block"},l.a.createElement("div",{className:"d-block mb-3"},l.a.createElement("div",{className:"d-block"},"SALDO"),l.a.createElement("div",{className:"d-block"},c||0)),l.a.createElement("div",{className:"d-block mb-1"},l.a.createElement("div",{className:"d-block"},"LAST PRICE BELI"),l.a.createElement("div",{className:"d-block"},a||0)),l.a.createElement("button",{className:"btn btn-success form-control"},"BELI")),l.a.createElement("div",{className:"col-8"},l.a.createElement("label",{for:"jumlah"},"Jumlah"),l.a.createElement("input",{type:"text",name:Object.keys(m)[0],value:n,pattern:"\\d*",onInput:b,className:"form-control"}),l.a.createElement("label",{for:"jumlah"},"Harga"),l.a.createElement("input",{type:"text",name:Object.keys(m)[1],value:r,pattern:"(\\d|\\.)*",onInput:b,className:"form-control"}),l.a.createElement("div",{className:"d-block mt-1"},"Total Bayar  : ",Number(n)*Number(r))))))}function D(){var e=Object(i.b)(),a=Object(i.c)((function(e){return e.storeHistory})).lastBeli,t=Object(i.c)((function(e){return e.UserState.setForm.jual?e.UserState.setForm.jual:{}})),r=t.harga,n=t.jumlah,c=Object(i.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).codeo,o=l.a.useState({jumlah:"",harga:""}),s=Object(k.a)(o,2),m=s[0],d=s[1],b=function(e){e.target.validity.valid&&d(Object(y.a)(Object(y.a)({},m),{},Object(S.a)({},e.target.name,e.target.value)))};return l.a.useEffect((function(){e(function(e){var a=e.tipe,t=e.jumlah,r=e.harga,l=e.status;return l&&"CLICK"===l&&u.a.success("Item harga berhasil dipindahkan ke form"),{type:"setFormJual",tipe:a,jumlah:t,harga:r}}({tipe:"JUAL",jumlah:m.jumlah,harga:m.harga}))}),[m,e]),l.a.createElement("div",{className:"d-block ml-3 mt-3"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var a=e.DataJual;L()({url:"".concat("https://tradingtes.herokuapp.com","/tradeSell"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(y.a)({},a)}).then((function(e){var a=e.data;u.a.success(a.message)})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,u.a.error(a)}))}({DataJual:{jumlah:n,harga:r}})}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-4 d-block"},l.a.createElement("div",{className:"d-block mb-3"},l.a.createElement("div",{className:"d-block"},"TOTAL"),l.a.createElement("div",{className:"d-block"},c||0," CODEO")),l.a.createElement("div",{className:"d-block mb-1"},l.a.createElement("div",{className:"d-block"},"LAST PRICE Jual"),l.a.createElement("div",{className:"d-block"},a||0)),l.a.createElement("button",{className:"btn btn-danger form-control"},"JUAL")),l.a.createElement("div",{className:"col-8"},l.a.createElement("label",{for:"jumlah"},"Jumlah"),l.a.createElement("input",{type:"text",name:Object.keys(m)[0],value:n,pattern:"\\d*",onInput:b,className:"form-control"}),l.a.createElement("label",{for:"jumlah"},"Harga"),l.a.createElement("input",{type:"text",name:Object.keys(m)[1],value:r,pattern:"(\\d|\\.)*",onInput:b,className:"form-control"}),l.a.createElement("div",{className:"d-block mt-1"},"Total Bayar : ",Number(n)*Number(r))))))}var J=t(105),B=t(106),I=new(function(){function e(){Object(J.a)(this,e),this.isLogin=!1}return Object(B.a)(e,[{key:"onLogin",value:function(e){this.isLogin=!0,e()}},{key:"onLogout",value:function(e){e(),this.isLogin=!1,localStorage.clear()}}]),e}());var w=t(6);function C(){var e=Object(w.g)();return l.a.createElement("button",{className:"btn btn-success",onClick:function(){return function(e){e.DataLogin;var a=e.history;L()({url:"".concat("https://tradingtes.herokuapp.com","/user/logout"),method:"DELETE",headers:{jwttoken:localStorage.getItem("token")}}).then((function(e){var t=e.data;I.onLogout((function(){u.a.success(t.message),localStorage.clear(),a.push("/trading")}))})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,u.a.error(a)}))}({history:e})}},"Logout")}var x=function(e){var a=e.Judul,t=Object(i.c)((function(e){return e.TradeState.TradeMe})).market;return l.a.createElement(o.a,{fluid:!0},l.a.createElement("div",{className:"d-block",align:"center"},l.a.createElement("section",null,l.a.createElement("h3",null,a)),l.a.createElement("aside",null,l.a.createElement("div",{className:"componentBeli overScrollBeli"},l.a.createElement("div",null,l.a.createElement("div",{className:"d-block m-2 scrolStatic"},l.a.createElement("h6",null,"NO")),l.a.createElement("div",{className:"d-block"},t&&t.length>0?t.map((function(e,a){return l.a.createElement("div",{className:"m-3 fontS"},a+1)})):"-")),l.a.createElement("div",null,l.a.createElement("div",{className:"d-block m-2 scrolStatic"},l.a.createElement("h6",null,"JUMLAH")),l.a.createElement("div",{className:"d-block"},t&&t.length>0?t.map((function(e){return l.a.createElement("div",{className:"m-3 fontS "},e.jumlah)})):"-")),l.a.createElement("div",null,l.a.createElement("div",{className:"d-block m-2 scrolStatic"},l.a.createElement("h6",null,"HARGA")),l.a.createElement("div",{className:"d-block"},t&&t.length>0?t.map((function(e){return l.a.createElement("div",{className:"m-3 fontS "},e.harga)})):"-")),l.a.createElement("div",null,l.a.createElement("div",{className:"d-block m-2 scrolStatic"},l.a.createElement("h6",null,"TOTAL")),l.a.createElement("div",{className:"d-block"},t&&t.length>0?t.map((function(e){return l.a.createElement("div",{className:"m-3 fontS"},e.total)})):"-")),l.a.createElement("div",null,l.a.createElement("div",{className:"d-block m-2 scrolStatic"},l.a.createElement("h6",null,"TIPE")),l.a.createElement("div",{className:"d-block"},t&&t.length>0?t.map((function(e){return l.a.createElement("div",{className:"m-3 fontS"},e.tipe)})):"-")),l.a.createElement("div",null,l.a.createElement("div",{className:"d-block m-2 scrolStatic"},l.a.createElement("h6",null,"STATUS")),l.a.createElement("div",{className:"d-block"},t&&t.length>0?t.map((function(){return l.a.createElement("div",{className:"m-3 fontS "},"PENDING")})):"-")),l.a.createElement("div",null,l.a.createElement("div",{className:"d-block m-2 scrolStatic"},l.a.createElement("h6",null,"ACTION")),l.a.createElement("div",{className:"d-block"},t&&t.length>0?t.map((function(e,a){return l.a.createElement("div",{key:a+1,className:"d-block"},l.a.createElement("button",{className:"btn btn-success p-1 m-1",onClick:function(){return function(e){var a=e.DataRefund;L()({url:"".concat("https://tradingtes.herokuapp.com","/tradePay"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:{idMd5:a}}).then((function(e){var a=e.data;u.a.success(a.message)})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,u.a.error(a)}))}({DataRefund:e._id})}},a+1," ",l.a.createElement("i",{className:"fa fa-money"})))})):"-"))))))},A=t(107);function F(){var e=Object(i.c)((function(e){return e.storeHistory})),a={labels:e.LabelNew,datasets:[{type:"line",label:"Harga Beli",data:e.DataBeli,fill:!1,backgroundColor:"green",borderColor:"green",hoverBackgroundColor:"green",hoverBorderColor:"green"},{type:"line",label:"Harga Jual",data:e.DataJual,fill:!1,backgroundColor:"red",borderColor:"red",hoverBackgroundColor:"red",hoverBorderColor:"red"}]};return l.a.createElement(A.Line,{data:a})}function H(){var e=Object(i.b)(),a=Object(i.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).username;return l.a.useEffect((function(){var a=(j||{}).id;p.emit("soketAuth",JSON.stringify({token:localStorage.getItem("token")})),p.on("infoUser".concat(a),(function(a){var t=JSON.parse(a);t.message&&u.a.success(t.message),e(function(e){return{type:"setInfoUser",User:e.User}}({User:t}))})),p.on("latestTrade",(function(a){var t,r=JSON.parse(a).latestTrade,l=r?r.filter((function(e){return e.tipeHistori?e:null})):[],n=[],c=[],o=[];l.forEach((function(e){n.push(new Date(e.createdAt).toLocaleTimeString()+" "+new Date(e.createdAt).toLocaleDateString()),"BELI"===e.tipeHistori.toUpperCase()?c.push(e.latestHarga):o.push(e.latestHarga)})),e((t={LabelNew:n,Data:r,DataBeli:c,lastBeli:c[c.length-1],DataJual:o,lastJual:o[o.length-1]},Object(y.a)({type:"setChart"},t)))}))}),[e]),l.a.createElement(o.a,{fluid:!0},l.a.createElement(s.a,null,l.a.createElement(m.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"},l.a.createElement("div",{className:"mt-1"}),l.a.createElement("div",{align:"center"},l.a.createElement("h2",null,"MARKET")))),l.a.createElement(s.a,null,l.a.createElement(m.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"},l.a.createElement("div",{className:"mt-1"}),l.a.createElement("div",{align:"center"},l.a.createElement("h2",null,a?"Hello, ".concat(a):"-"),l.a.createElement(C,null)))),l.a.createElement(s.a,null,l.a.createElement(m.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"},l.a.createElement(F,null))),l.a.createElement(s.a,null,l.a.createElement(m.a,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"},l.a.createElement(N,{Judul:"JUAL",TabelTipe:"TradeJual"})),l.a.createElement(m.a,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"},l.a.createElement(N,{Judul:"BELI",TabelTipe:"TradeBeli"}))),l.a.createElement(s.a,null,l.a.createElement(m.a,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"},l.a.createElement(U,null)),l.a.createElement(m.a,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"},l.a.createElement(D,null))),l.a.createElement(s.a,null,l.a.createElement(m.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"},l.a.createElement(x,null))))}var P=t(18);t(101);function M(){var e=Object(w.g)(),a=l.a.useState({email:"",password:""}),t=Object(k.a)(a,2),r=t[0],n=t[1],c=function(e){n(Object(y.a)(Object(y.a)({},r),{},Object(S.a)({},e.target.name,e.target.value)))};return l.a.createElement("form",{className:"posisiForm",onSubmit:function(a){a.preventDefault(),function(e){var a=e.DataLogin,t=e.history;L()({url:"".concat("https://tradingtes.herokuapp.com","/user/login"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(y.a)({},a)}).then((function(e){var a=e.data;I.onLogin((function(){u.a.success(a.message),localStorage.setItem("token",a.token),t.push("/trading/dashboard")}))})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,u.a.error(a)}))}({DataLogin:r,history:e})}},l.a.createElement("h5",{align:"center"},"Login Trade"),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("label",{for:"email"},l.a.createElement("small",null,"Email")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[0],value:Object.values(r)[0],onChange:c}),l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Password")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[1],value:Object.values(r)[1],onChange:c}),l.a.createElement("div",{className:"d-block mt-2",align:"right"},l.a.createElement(P.b,{to:"/daftar",className:"m-2"},"Daftar"),l.a.createElement("button",{className:"btn btn-outline-success"},l.a.createElement("small",null,"Login"))))))}function R(){return l.a.createElement(M,null)}function K(){var e=Object(w.g)(),a=l.a.useState({username:"",email:"",password:""}),t=Object(k.a)(a,2),r=t[0],n=t[1],c=function(e){n(Object(y.a)(Object(y.a)({},r),{},Object(S.a)({},e.target.name,e.target.value)))};return l.a.createElement("form",{className:"posisiForm",onSubmit:function(a){a.preventDefault(),function(e){var a=e.DataDaftar,t=e.history;L()({url:"".concat("https://tradingtes.herokuapp.com","/user"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(y.a)({},a)}).then((function(e){var a=e.data;u.a.success(a.message),t.push("/trading")})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,u.a.error(a)}))}({DataDaftar:r,history:e})}},l.a.createElement("h5",{align:"center"},"Daftar Trade"),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Username")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[0],value:Object.values(r)[0],onChange:c}),l.a.createElement("label",{for:"email"},l.a.createElement("small",null,"Email")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[1],value:Object.values(r)[1],onChange:c}),l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Password")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[2],value:Object.values(r)[2],onChange:c}),l.a.createElement("div",{className:"d-block mt-2",align:"right"},l.a.createElement("button",{className:"btn btn-outline-success"},l.a.createElement("small",null,"Daftar"))))))}function G(){return l.a.createElement(K,null)}var W=t(110);function $(e){var a=e.component,t=Object(W.a)(e,["component"]);return l.a.createElement(w.b,Object.assign({},t,{render:function(e){return I.isLogin?l.a.createElement(a,t):l.a.createElement(w.a,{to:{pathname:"/",state:{from:e.location}}})}}))}var _=Object(w.h)((function(){var e=Object(w.g)();return l.a.useEffect((function(){localStorage.getItem("token")?I.onLogin((function(){e.push("/trading/dashboard")})):I.onLogout((function(){e.push("/trading")}))}),[e]),l.a.createElement(w.d,null,l.a.createElement(w.b,{exact:!0,path:"/trading"},l.a.createElement(R,null)),l.a.createElement(w.b,{path:"/trading/daftar"},l.a.createElement(G,null)),l.a.createElement($,{path:"/trading/dashboard",component:H}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(262);var q=t(21),z=t(108),Q=t(109),V={TradeJual:{market:[]},TradeBeli:{market:[]},TradeMe:{market:[]}};function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TradeJual":return Object(y.a)(Object(y.a)({},e),{},{TradeJual:Object(y.a)(Object(y.a)({},e.TradeJual),{},{market:a.market})});case"TradeBeli":return Object(y.a)(Object(y.a)({},e),{},{TradeBeli:Object(y.a)(Object(y.a)({},e.TradeBeli),{},{market:a.market})});case"TradeAll":return Object(y.a)(Object(y.a)({},e),{},{TradeMe:Object(y.a)(Object(y.a)({},e.TradeMe),{},{market:a.market})});default:return Object(y.a)({},e)}}var Y={User:null,setForm:{beli:{tipe:"",jumlah:"",harga:""},jual:{tipe:"",jumlah:"",harga:""}}};function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"setInfoUser":return Object(y.a)(Object(y.a)({},e),{},{User:a.User});case"setForm":return Object(y.a)(Object(y.a)({},e),{},{setForm:Object(y.a)(Object(y.a)({},e.setForm),{},{beli:Object(y.a)(Object(y.a)({},e.setForm.beli),{},{tipe:a.tipe,jumlah:a.jumlah,harga:a.harga}),jual:Object(y.a)(Object(y.a)({},e.setForm.jual),{},{tipe:a.tipe,jumlah:a.jumlah,harga:a.harga})})});case"setFormJual":return Object(y.a)(Object(y.a)({},e),{},{setForm:Object(y.a)(Object(y.a)({},e.setForm),{},{jual:Object(y.a)(Object(y.a)({},e.setForm.jual),{},{tipe:a.tipe,jumlah:a.jumlah,harga:a.harga})})});case"setFormBeli":return Object(y.a)(Object(y.a)({},e),{},{setForm:Object(y.a)(Object(y.a)({},e.setForm),{},{beli:Object(y.a)(Object(y.a)({},e.setForm.beli),{},{tipe:a.tipe,jumlah:a.jumlah,harga:a.harga})})});default:return Object(y.a)({},e)}}var ee={Grafik:[],LabelNew:[],DataBeli:[],DataJual:[],lastJual:0,lastBeli:0};function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"setChart":return Object(y.a)(Object(y.a)({},e),{},{Grafik:a.Data,LabelNew:"object"===typeof a.LabelNew?a.LabelNew.reverse().filter((function(e,a){return a<=10?e:null})):[],DataBeli:"object"===typeof a.DataBeli?a.DataBeli.reverse().filter((function(e,a){return a<=10?e:null})):[],lastBeli:a.lastBeli,DataJual:"object"===typeof a.DataJual?a.DataJual.reverse().filter((function(e,a){return a<=10?e:null})):[],lastJual:a.lastJual});case"setDataJual":return Object(y.a)(Object(y.a)({},e),{},{DataBeli:a.Data,lastBeli:a.last});case"setDataBeli":return Object(y.a)(Object(y.a)({},e),{},{DataJual:a.Data,lastJual:a.last});default:return Object(y.a)({},e)}}function te(e){var a=e.children,t=Object(q.combineReducers)({TradeState:X,UserState:Z,storeHistory:ae}),r=Object(q.createStore)(t,Object(z.composeWithDevTools)(Object(q.applyMiddleware)(Q.reduxSoldierMiddleware)));return l.a.createElement(i.a,{store:r},a)}c.a.render(l.a.createElement(P.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(te,null,l.a.createElement(_,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,a,t){}},[[111,1,2]]]);
//# sourceMappingURL=main.d9cbf240.chunk.js.map