(this.webpackJsonpbelajarcss=this.webpackJsonpbelajarcss||[]).push([[0],{111:function(e,t){},137:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(17),c=a.n(n),o=(a(83),a(141)),s=a(142),m=a(69),i=a.n(m),u=a(15),d=i()("http://localhost:1999"),b=(localStorage.getItem("token")&&Object(u.a)(localStorage.getItem("token")),a(4));function f(e){return{type:"TradeBeli",market:e.market}}function h(e){return{type:"LiveMarket",market:e.market}}var E=a(5);function g(e){var t=e.tipe,a=e.jumlah,r=e.harga,l=e.status;return l&&"CLICK"===l&&E.a.success("Item harga berhasil dipindahkan ke form"),{type:"setForm",tipe:t,jumlah:a,harga:r}}function k(e){var t=e.tipe,a=e.jumlah,r=e.harga,l=e.status;return l&&"CLICK"===l&&E.a.success("Item harga berhasil dipindahkan ke form"),{type:"setFormJual",tipe:t,jumlah:a,harga:r}}function p(e){var t=e.tipe,a=e.jumlah,r=e.harga,l=e.status;return l&&"CLICK"===l&&E.a.success("Item harga berhasil dipindahkan ke form"),{type:"setFormBeli",tipe:t,jumlah:a,harga:r}}var v=a(8);function j(e){var t=e.marketData,a={},r=[];(t||[]).forEach((function(e){Object.keys(a).includes("x"+e.harga)||(a["x"+e.harga]={jumlah:0,harga:0,total:0}),a["x"+e.harga]={jumlah:a["x"+e.harga].jumlah+e.jumlah,total:a["x"+e.harga].total+e.total,harga:e.harga,tipe:e.tipe}}));for(var l=0,n=Object.entries(a);l<n.length;l++){var c=Object(v.a)(n[l],2),o=(c[0],c[1]);r.push({key:o})}return r}function N(e){var t=e.Judul,a=Object(b.b)(),r=Object(b.c)((function(e){return e.TradeState.TradeJual})).market,n=(localStorage.getItem("token")?Object(u.a)(localStorage.getItem("token")):{}).id;return l.a.useEffect((function(){d.on("tradeAll",(function(e){var t=JSON.parse(e).tradeAll||[],r=j({marketData:t?t.filter((function(e){return"JUAL"===e.tipe.toUpperCase()})).sort((function(e,t){return t.harga-e.harga})).filter((function(e){return e.jumlah>0})).sort((function(e,t){return t.harga-e.harga})).sort((function(e,t){return t.jumlah-e.jumlah})):[]});a(function(e){return{type:"TradeJual",market:e.market}}({market:r}),h({market:t}))}))}),[t,a,n]),l.a.createElement("div",{className:"overScroll"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("tbody",{align:"left"},r?r.length<=0?l.a.createElement("div",null,"No data"):r.flatMap((function(e){return l.a.createElement("tr",{style:{cursor:"pointer"},onClick:function(){return a(g({tipe:"JUAL",jumlah:e.key.jumlah.toString(),harga:e.key.harga.toString()}))}},l.a.createElement("td",{className:"text-danger"},e.key.harga),l.a.createElement("td",{className:"text-danger"},e.key.jumlah),l.a.createElement("td",{className:"text-danger"},e.key.total))})):null)))}var y=a(16),w=a(1);function O(e){var t=[25,50,75,100],a=e.saldo,r=e.pilih;return(a=a||0)>=0?{kurang:t[r]/100*a,percent:t[r]}:null}var S=a(9),x=a.n(S);var B=a(6);function L(){var e=Object(B.h)().crypto,t=Object(b.b)(),a=Object(b.c)((function(e){return e.storeHistory?e.storeHistory:{}})),r=a.lastJual,n=a.lastBeli,c=Object(b.c)((function(e){return e.UserState.setForm.beli?e.UserState.setForm.beli:{}})),o=c.harga,s=c.jumlah,m=Object(b.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).saldo,i=l.a.useState({jumlah:"",harga:""}),u=Object(v.a)(i,2),d=u[0],f=u[1],h=function(e){e.target.validity.valid&&f(Object(w.a)(Object(w.a)({},d),{},Object(y.a)({},e.target.name,e.target.value)))};return l.a.useEffect((function(){t(p({tipe:"BELI",jumlah:d.jumlah,harga:d.harga}))}),[d,t]),l.a.createElement("div",{className:"d-block"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),function(e){var t=e.DataBeli;x()({url:"".concat("http://localhost:1999","/tradeBuy"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(w.a)({},t)}).then((function(e){var t=e.data;E.a.success(t.message)})).catch((function(e){var t="";t=void 0===e.response?e.message:e.response.data.message,E.a.error(t)}))}({DataBeli:{jumlah:s,harga:o,symbol:e}})}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-4 d-block"},l.a.createElement("div",{className:"d-block mb-3"},l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},"Last Price Beli"),l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},n||0)),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},"Last Price Jual"),l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},r||0)),l.a.createElement("button",{className:"btn btn-outline-success form-control mt-3 p-1"},"BELI")),l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},l.a.createElement("div",{align:"right",style:{fontSize:"smaller",wordBreak:"break-word"}},"SALDO : ",m?Number(m):0)),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},l.a.createElement("label",{for:"jumlah",style:{fontSize:"smaller",wordBreak:"break-word"}},"Jumlah"))),l.a.createElement("input",{type:"text",name:Object.keys(d)[0],value:s,pattern:"\\d*\\.?\\d*",onInput:h,className:"form-control"}),l.a.createElement("label",{for:"jumlah",style:{fontSize:"smaller",wordBreak:"break-word"}},"Harga"),l.a.createElement("input",{type:"text",name:Object.keys(d)[1],value:o,pattern:"\\d*",onInput:h,className:"form-control"}),l.a.createElement("div",{className:"d-block mt-1",style:{fontSize:"smaller",wordBreak:"break-word"}},"Total Bayar : ",Number(s)*Number(o)))),l.a.createElement("div",{className:"d-flex justify-content-around",style:{fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1 p-1",onClick:function(){return t(p({tipe:"BELI",jumlah:Number(O({saldo:m,pilih:0}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"25%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1 p-1",onClick:function(){return t(p({tipe:"BELI",jumlah:Number(O({saldo:m,pilih:1}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"50%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1 p-1",onClick:function(){return t(p({tipe:"BELI",jumlah:Number(O({saldo:m,pilih:2}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"75%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1 p-1",onClick:function(){return t(p({tipe:"BELI",jumlah:Number(O({saldo:m,pilih:3}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"100%"))),l.a.createElement("br",null))}function U(){var e=Object(B.h)().crypto,t=Object(b.b)(),a=Object(b.c)((function(e){return e.storeHistory})),r=a.lastBeli,n=a.lastJual,c=Object(b.c)((function(e){return e.UserState.setForm.jual?e.UserState.setForm.jual:{}})),o=c.harga,s=c.jumlah,m=Object(b.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}}))[e.toUpperCase()],i=l.a.useState({jumlah:"",harga:""}),u=Object(v.a)(i,2),d=u[0],f=u[1],h=function(e){e.target.validity.valid&&f(Object(w.a)(Object(w.a)({},d),{},Object(y.a)({},e.target.name,e.target.value)))};return l.a.useEffect((function(){t(k({tipe:"JUAL",jumlah:d.jumlah,harga:d.harga}))}),[d,t]),l.a.createElement("div",{className:"d-block"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),function(e){var t=e.DataJual;x()({url:"".concat("http://localhost:1999","/tradeSell"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(w.a)({},t)}).then((function(e){var t=e.data;E.a.success(t.message)})).catch((function(e){var t="";t=void 0===e.response?e.message:e.response.data.message,E.a.error(t)}))}({DataJual:{jumlah:s,harga:o,symbol:e}})}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-4 d-block"},l.a.createElement("div",{className:"d-block mb-3"},l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},"Last Price Jual"),l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},n||0)),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},"Last Price Beli"),l.a.createElement("div",{className:"d-block"},l.a.createElement("small",null,r||0))),l.a.createElement("button",{className:"btn btn-outline-danger form-control mt-3 p-1"},"JUAL")),l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},l.a.createElement("div",{align:"right",style:{fontSize:"smaller",wordBreak:"break-word"}},m||0," ",e)),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},l.a.createElement("label",{for:"jumlah",style:{fontSize:"smaller",wordBreak:"break-word"}},"Jumlah"))),l.a.createElement("input",{type:"text",name:Object.keys(d)[0],value:s,pattern:"\\d*\\.?\\d*",onInput:h,className:"form-control"}),l.a.createElement("label",{for:"jumlah",style:{fontSize:"smaller",wordBreak:"break-word"}},"Harga"),l.a.createElement("input",{type:"text",name:Object.keys(d)[1],value:o,pattern:"\\d*",onInput:h,className:"form-control"}),l.a.createElement("div",{className:"d-block mt-1",style:{fontSize:"smaller",wordBreak:"break-word"}},"Total Bayar : ",Number(s)*Number(o)))),l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("button",{type:"button",className:"btn btn-outline-danger m-1 p-1",onClick:function(){return t(k({tipe:"JUAL",jumlah:Number(O({saldo:m,pilih:0}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"25%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-danger m-1 p-1",onClick:function(){return t(k({tipe:"JUAL",jumlah:Number(O({saldo:m,pilih:1}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"50%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-danger m-1 p-1",onClick:function(){return t(k({tipe:"JUAL",jumlah:Number(O({saldo:m,pilih:2}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"75%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-danger m-1 p-1",onClick:function(){return t(k({tipe:"JUAL",jumlah:Number(O({saldo:m,pilih:3}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"100%"))))}function C(e){var t=e.Judul,a=Object(b.b)(),r=Object(b.c)((function(e){return e.TradeState.TradeBeli})).market,n=(localStorage.getItem("token")?Object(u.a)(localStorage.getItem("token")):{}).id;return l.a.useEffect((function(){d.on("tradeAll",(function(e){var t=JSON.parse(e).tradeAll||[],r=j({marketData:t?t.filter((function(e){return"BELI"===e.tipe.toUpperCase()})).sort((function(e,t){return e.harga-t.harga})).filter((function(e){return e.jumlah>0})).sort((function(e,t){return e.harga-t.harga})).sort((function(e,t){return e.jumlah-t.jumlah})):[]});a([f({market:r}),h({market:t})])}))}),[t,a,n]),l.a.createElement("div",{className:"overScroll"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("tbody",{align:"left"},r?r.length<=0?l.a.createElement("div",null,"No data"):r.map((function(e){return l.a.createElement("tr",{style:{cursor:"pointer"},onClick:function(){return a(g({tipe:"BELI",jumlah:e.key.jumlah,harga:e.key.harga}))}},l.a.createElement("td",{className:"text-success"},e.key.harga),l.a.createElement("td",{className:"text-success"},e.key.jumlah),l.a.createElement("td",{className:"text-success"},e.key.total))})):null)))}function D(e){var t=e.DataRefund;x()({url:"".concat("http://localhost:1999","/tradePay"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:{idMd5:t}}).then((function(e){var t=e.data;E.a.success(t.message)})).catch((function(e){var t="";t=void 0===e.response?e.message:e.response.data.message,E.a.error(t)}))}function T(){var e=(localStorage.getItem("token")?Object(u.a)(localStorage.getItem("token")):{}).id,t=Object(b.b)(),a=Object(b.c)((function(e){return e.UserState.myOrderTrade})).market;return l.a.useEffect((function(){d.on("tradeMe".concat(e),(function(e){var a=JSON.parse(e).tradeMe;t({type:"OrderHistory",market:{market:a}.market})}))}),[t,e]),l.a.createElement("div",{className:"overScroll"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"4",className:"text-white",style:{position:"-webkit-sticky",margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("i",{className:"fa fa-history"})," ORDER HISTORY")),l.a.createElement("tr",{className:"text-white",style:{position:"-webkit-sticky",margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("td",null,"HARGA (IDR)"),l.a.createElement("td",null,"JUMLAH (CODEO)"),l.a.createElement("td",null,"TOTAL (CODEO)"),l.a.createElement("td",null,"Refunds"))),l.a.createElement("tbody",{style:{backgroundColor:"#252525"}},a&&a.length>0?a.map((function(e){return l.a.createElement("tr",{style:{fontSize:"smaller",wordBreak:"break-word"}},"JUAL"===e.tipe?l.a.createElement("td",{className:"text-danger"},l.a.createElement("b",null,e.harga)):l.a.createElement("td",{className:"text-success"},l.a.createElement("b",null,e.harga)),l.a.createElement("td",{className:"text-white",align:"right"},l.a.createElement("b",null,e.jumlah)),l.a.createElement("td",{className:"text-white",align:"right"},l.a.createElement("b",null,e.total)),l.a.createElement("td",{className:"text-white",align:"right"},"JUAL"===e.tipe?l.a.createElement("button",{className:"btn btn-outline-danger p-1",onClick:function(){return D({DataRefund:e._id})}},l.a.createElement("i",{className:"fa fa-money"})):l.a.createElement("button",{className:"btn btn-outline-success p-1",onClick:function(){return D({DataRefund:e._id})}},l.a.createElement("i",{className:"fa fa-money"}))))})):l.a.createElement("tr",null,l.a.createElement("td",{className:"text-white"},"-"),l.a.createElement("td",{className:"text-white"},"-"),l.a.createElement("td",{className:"text-white"},"-"),l.a.createElement("td",{className:"text-white"},"-")))))}function J(e){return{type:"setChartTrading",market:e.market}}var A=a(28),I=a(29),z=new(function(){function e(){Object(A.a)(this,e),this.isLogin=!1}return Object(I.a)(e,[{key:"onLogin",value:function(e){this.isLogin=!0,e()}},{key:"onLogout",value:function(e){e(),this.isLogin=!1,localStorage.clear()}}]),e}());function H(){var e=Object(B.g)();return l.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return function(e){e.DataLogin;var t=e.history;x()({url:"".concat("http://localhost:1999","/user/logout"),method:"DELETE",headers:{jwttoken:localStorage.getItem("token")}}).then((function(e){var a=e.data;z.onLogout((function(){E.a.success(a.message),localStorage.clear(),t.push("/trading")}))})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,z.onLogout((function(){localStorage.clear(),t.push("/trading")})),E.a.error(a)}))}({history:e})}},"Logout")}function P(){var e=Object(B.h)().crypto;return l.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){return function(e){var t=e.crypto;x()({url:"".concat("http://localhost:1999","/topupSaldo"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:{crypto:t}}).then((function(e){var t=e.data;E.a.success(t.message)})).catch((function(e){var t="";t=void 0===e.response?e.message:e.response.data.message,E.a.error(t)}))}({crypto:e})}},"TOPUP")}function F(){var e=Object(b.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).username;return l.a.createElement("div",{className:"row p-1"},l.a.createElement("div",{className:"col-4",style:{backgroundColor:"#2d2c31"}},l.a.createElement("div",{className:"d-block mt-3"},l.a.createElement("h6",null,"Hello ",e))),l.a.createElement("div",{className:"col-8",style:{backgroundColor:"#2d2c31"}},l.a.createElement("header",null,l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement("div",{className:"d-block p-3"},l.a.createElement(H,null)),l.a.createElement("div",{className:"d-block p-3"},l.a.createElement(P,null))))))}function M(){var e=l.a.useState(void 0),t=Object(v.a)(e,2),a=t[0],r=t[1];return l.a.useEffect((function(){d.on("trafikHariIni",(function(e){var t=JSON.parse(e);if(t){var a=t.lastPrice,l=t.highPrice,n=t.lowPrice,c=t.volume;r({lastPrice:a,highPrice:l,lowPrice:n,volume:c})}}))}),[r]),l.a.createElement("div",{className:"row p-1",style:{backgroundColor:"#252525"}},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},l.a.createElement("div",{className:"d-block mt-2"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Harga Terakhir")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,a?a.lastPrice:0)))),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},l.a.createElement("div",{className:"d-block mt-2"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Tertinggi")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,a?a.highPrice:0)))),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},l.a.createElement("div",{className:"d-block mt-2"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Volume")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,a?a.volume:0)))),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},l.a.createElement("div",{className:"d-block mt-1"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Terendah")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,a?a.lowPrice:0)))))}function R(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(M,null)))}function G(){var e=Object(b.c)((function(e){return e.storeHistory})).Grafik;return l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",{className:"text-white"},l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"3",align:"center",style:{backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},"PERDAGANGAN TERKINI")),l.a.createElement("tr",{style:{fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"JUMLAH"),l.a.createElement("td",null,"WAKTU"))),l.a.createElement("tbody",{className:"text-white"},e?e.length<=0?l.a.createElement("tr",null,l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-")):e.flatMap((function(e){return"JUAL"===e.tipeHistori.toUpperCase()?l.a.createElement("tr",null,l.a.createElement("td",{className:"text-danger",style:{fontSize:"smaller",wordBreak:"break-word"}},e.latestHarga),l.a.createElement("td",{className:"text-white",style:{fontSize:"smaller",wordBreak:"break-word"}},e.jumlahDeal?e.jumlahDeal:0),l.a.createElement("td",{className:"text-white",style:{fontSize:"smaller",wordBreak:"break-word"}},new Date(e.createdAt).toUTCString())):"BELI"===e.tipeHistori.toUpperCase()?l.a.createElement("tr",null,l.a.createElement("td",{className:"text-success",style:{fontSize:"smaller",wordBreak:"break-word"}},e.latestHarga),l.a.createElement("td",{className:"text-white",style:{fontSize:"smaller",wordBreak:"break-word"}},e.jumlahDeal?e.jumlahDeal:0),l.a.createElement("td",{className:"text-white",style:{fontSize:"smaller",wordBreak:"break-word"}},new Date(e.createdAt).toUTCString())):l.a.createElement("tr",null,l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"))})):l.a.createElement("tr",null,l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"))))}var K=a(78),W=a(76),_=a(43),Y=a.n(_),V=a(71),$=a(72),q=a.n($),Q=a(73),X=a.n(Q),Z=Object(r.createContext)("http://localhost:1999");var ee=function(e){Object(K.a)(a,e);var t=Object(W.a)(a);function a(e){var r;return Object(A.a)(this,a),(r=t.call(this,e)).state={series:[{name:"candle",data:e.data}],options:{chart:{height:"100%",type:"candlestick"},title:{text:"Trading Chart",align:"left"},annotations:{xaxis:[{x:"Oct 06 14:00",borderColor:"#606060",label:{borderColor:"#606060",style:{fontSize:"12px",color:"white",background:"red"},orientation:"horizontal",offsetY:7}}]},tooltip:{enabled:!0},xaxis:{type:"category",labels:{formatter:function(e){return X()(e).format("MMM DD HH:mm")}}},yaxis:{tooltip:{background:"black",color:"white",enabled:!0}}}},r}return Object(I.a)(a,[{key:"render",value:function(){return l.a.createElement(q.a,{options:this.state.options,style:{color:"black"},series:this.state.series,type:"candlestick",width:"100%",height:"100%"})}}]),a}(l.a.Component),te=function(){var e=l.a.useState([]),t=Object(v.a)(e,2),a=t[0],r=t[1],n=l.a.useContext(Z),c=l.a.useCallback(Object(V.a)(Y.a.mark((function e(){var t,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x()({url:"".concat(n,"/lightweightChart"),method:"GET",headers:{jwttoken:localStorage.getItem("token")}});case 3:t=e.sent,a=t.data,r(a.chart),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r([]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[r,n]);return l.a.useEffect((function(){c()}),[c]),l.a.createElement(ee,{data:a||[]})};a(137);function ae(){var e=Object(B.g)(),t=l.a.useState([]),a=Object(v.a)(t,2),r=a[0],n=a[1];return l.a.useEffect((function(){d.on("listCrypto",(function(e){var t=JSON.parse(e).ListCrypto;n(t)}))}),[n]),l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",{className:"text-white"},l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"3",align:"center",style:{backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},"LIST CRYPTO")),l.a.createElement("tr",{style:{fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("td",null,"PAIR"),l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"VOLUME"))),l.a.createElement("tbody",{className:"text-white"},r?r.length<=0?l.a.createElement("tr",null,l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-")):r.map((function(t){return l.a.createElement("tr",{style:{cursor:"pointer"},onClick:function(){return e.push(t.simbol.toString().toUpperCase().replace(/\//g,"_"))}},l.a.createElement("td",null,l.a.createElement("div",{className:"d-block text-justify",style:{fontSize:"smaller",wordBreak:"break-word"}},t.simbol)),l.a.createElement("td",null,l.a.createElement("div",{className:"d-block text-justify",style:{fontSize:"smaller",wordBreak:"break-word"}},t.hargaTerakhir)),l.a.createElement("td",null,l.a.createElement("div",{className:"d-block text-justify",style:{fontSize:"smaller",wordBreak:"break-word"}},t.volume)))})):l.a.createElement("tr",null,l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"))))}function re(){var e=Object(B.h)().crypto,t=(localStorage.getItem("token")?Object(u.a)(localStorage.getItem("token")):{}).id,a=Object(B.g)(),r=Object(b.b)();return l.a.useEffect((function(){d.emit("soketAuth",JSON.stringify({token:localStorage.getItem("token"),typeChart:e}))}),[e]),l.a.useLayoutEffect((function(){t&&(d.on("infoUser".concat(t),(function(e){var l=JSON.parse(e);l.infoUser?(r(function(e){return{type:"setInfoUser",User:e.User}}({User:l})),l.infoUser._id===t&&l.message&&E.a.success(l.message)):z.onLogout((function(){localStorage.clear(),a.push("/trading")}))})),d.on("latestTrade",(function(e){var t,a=JSON.parse(e).latestTrade,l=a?a.filter((function(e){return e.tipeHistori?e:null})).sort((function(e,t){return t.createdAt-e.createdAt})):[],n=[],c=[],o=[];l.forEach((function(e){n.push(new Date(e.createdAt).toLocaleTimeString()+" "+new Date(e.createdAt).toLocaleDateString()),"BELI"===e.tipeHistori.toUpperCase()?c.push(e.latestHarga):o.push(e.latestHarga)})),r((t={LabelNew:n,Data:a.reverse(),DataBeli:c,lastBeli:c[c.length-1],DataJual:o,lastJual:o[o.length-1]},Object(w.a)({type:"setChart"},t)))})))}),[r,t,a]),l.a.useLayoutEffect((function(){d.on("chartTerkini",(function(e){var t=JSON.parse(e).chart;r(J({market:[]})),r(J({market:!t||t.length<=0?[]:t}))}))}),[r]),l.a.createElement(o.a,{style:{fontSize:"smaller",wordBreak:"break-word"},fluid:!0},l.a.createElement(F,null),l.a.createElement(R,null),l.a.createElement(s.a,{className:"p-1"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6",style:{padding:0}},l.a.createElement(te,null)),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6",style:{backgroundColor:"#252525"}},l.a.createElement("div",{className:"row d-flex justify-content-between"},l.a.createElement("div",{className:"col-6 col-sm-12 col-xs-12 col-md-6 p-1"},l.a.createElement("table",{className:"table table-borderless",style:{margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("caption",{className:"p-1"},"Daftar Beli"),l.a.createElement("thead",null,l.a.createElement("tr",{className:"text-white"},l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"JUMLAH"),l.a.createElement("td",null,"TOTAL")))),l.a.createElement(C,{Judul:"BELI"})),l.a.createElement("div",{className:"col-6 col-sm-12 col-xs-12 col-md-6 p-1"},l.a.createElement("table",{className:"table table-borderless",style:{margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("caption",{className:"p-1"},"Daftar Jual"),l.a.createElement("tr",{className:"text-white"},l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"JUMLAH"),l.a.createElement("td",null,"TOTAL"))),l.a.createElement(N,{Judul:"JUAL"}))),l.a.createElement("div",{className:"row m-1",style:{backgroundColor:"#252525"}},l.a.createElement("div",{className:"col-6"},l.a.createElement(U,null)),l.a.createElement("div",{className:"col-6"},l.a.createElement(L,null))))),l.a.createElement("div",{className:"row",style:{height:"100%"}},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-1",style:{padding:0}},l.a.createElement(T,null)),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-1",style:{backgroundColor:"#252525",padding:0}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6"},l.a.createElement(ae,null)),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6"},l.a.createElement(G,null))))))}var le=a(10);a(68);function ne(){var e=Object(B.g)(),t=l.a.useState({email:"",password:""}),a=Object(v.a)(t,2),r=a[0],n=a[1],c=function(e){n(Object(w.a)(Object(w.a)({},r),{},Object(y.a)({},e.target.name,e.target.value)))};return l.a.createElement("form",{className:"posisiForm",onSubmit:function(t){t.preventDefault(),function(e){var t=e.DataLogin,a=e.history;x()({url:"".concat("http://localhost:1999","/user/login"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(w.a)({},t)}).then((function(e){var t=e.data;z.onLogin((function(){E.a.success(t.message),localStorage.setItem("token",t.token),a.push("/trading/CODEO")}))})).catch((function(e){var t="";t=void 0===e.response?e.message:e.response.data.message,E.a.error(t)}))}({DataLogin:r,history:e})}},l.a.createElement("h5",{align:"center"},"Login Trade"),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("label",{for:"email"},l.a.createElement("small",null,"Email")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[0],value:Object.values(r)[0],onChange:c}),l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Password")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[1],value:Object.values(r)[1],onChange:c}),l.a.createElement("div",{className:"d-block mt-2",align:"right"},l.a.createElement(le.b,{to:"/trading/daftar",className:"m-2"},"Daftar"),l.a.createElement("button",{className:"btn btn-outline-success"},l.a.createElement("small",null,"Login"))))))}function ce(){return l.a.createElement(ne,null)}function oe(){var e=Object(B.g)(),t=l.a.useState({username:"",email:"",password:""}),a=Object(v.a)(t,2),r=a[0],n=a[1],c=function(e){n(Object(w.a)(Object(w.a)({},r),{},Object(y.a)({},e.target.name,e.target.value)))};return l.a.createElement("form",{className:"posisiForm",onSubmit:function(t){t.preventDefault(),function(e){var t=e.DataDaftar,a=e.history;x()({url:"".concat("http://localhost:1999","/user"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(w.a)({},t)}).then((function(e){var t=e.data;E.a.success(t.message),a.push("/trading")})).catch((function(e){var t="";t=void 0===e.response?e.message:e.response.data.message,E.a.error(t)}))}({DataDaftar:r,history:e})}},l.a.createElement("h5",{align:"center"},"Daftar Trade"),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Username")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[0],value:Object.values(r)[0],onChange:c}),l.a.createElement("label",{for:"email"},l.a.createElement("small",null,"Email")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[1],value:Object.values(r)[1],onChange:c}),l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Password")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[2],value:Object.values(r)[2],onChange:c}),l.a.createElement("div",{className:"d-block mt-2",align:"right"},l.a.createElement(le.b,{to:"/trading"},"LOGIN"),l.a.createElement("button",{className:"btn btn-outline-success"},l.a.createElement("small",null,"DAFTAR"))))))}function se(){return l.a.createElement(oe,null)}var me=a(77);function ie(e){var t=e.component,a=Object(me.a)(e,["component"]);return l.a.createElement(B.b,Object.assign({},a,{render:function(e){return z.isLogin?l.a.createElement(t,a):l.a.createElement(B.a,{to:{pathname:"/trading",state:{from:e.location}}})}}))}var ue=Object(B.i)((function(){var e=Object(B.g)();return l.a.useEffect((function(){localStorage.getItem("token")?z.onLogin((function(){e.push("/trading/CODEO")})):z.onLogout((function(){e.push("/trading")}))}),[e]),l.a.createElement(B.d,null,l.a.createElement(B.b,{exact:!0,path:"/trading"},l.a.createElement(ce,null)),l.a.createElement(B.b,{path:"/trading/daftar"},l.a.createElement(se,null)),l.a.createElement(ie,{path:"/trading/:crypto",component:re}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(138);var de=a(18),be=a(74),fe=a(75),he={TradeJual:{market:[]},TradeBeli:{market:[]},TradeMe:{market:[]},TradeAll:{market:[]}};function Ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TradeJual":return Object(w.a)(Object(w.a)({},e),{},{TradeJual:Object(w.a)(Object(w.a)({},e.TradeJual),{},{market:t.market})});case"TradeBeli":return Object(w.a)(Object(w.a)({},e),{},{TradeBeli:Object(w.a)(Object(w.a)({},e.TradeBeli),{},{market:t.market})});case"TradeAll":return Object(w.a)(Object(w.a)({},e),{},{TradeMe:Object(w.a)(Object(w.a)({},e.TradeMe),{},{market:t.market})});case"LiveMarket":return Object(w.a)(Object(w.a)({},e),{},{TradeAll:Object(w.a)(Object(w.a)({},e.TradeAll),{},{market:t.market})});default:return Object(w.a)({},e)}}var ge={User:null,setForm:{beli:{tipe:"",jumlah:"",harga:""},jual:{tipe:"",jumlah:"",harga:""}},myOrderTrade:{market:[]}};function ke(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setInfoUser":return Object(w.a)(Object(w.a)({},e),{},{User:t.User});case"setForm":return Object(w.a)(Object(w.a)({},e),{},{setForm:Object(w.a)(Object(w.a)({},e.setForm),{},{beli:Object(w.a)(Object(w.a)({},e.setForm.beli),{},{tipe:t.tipe,jumlah:t.jumlah,harga:t.harga}),jual:Object(w.a)(Object(w.a)({},e.setForm.jual),{},{tipe:t.tipe,jumlah:t.jumlah,harga:t.harga})})});case"setFormJual":return Object(w.a)(Object(w.a)({},e),{},{setForm:Object(w.a)(Object(w.a)({},e.setForm),{},{jual:Object(w.a)(Object(w.a)({},e.setForm.jual),{},{tipe:t.tipe,jumlah:t.jumlah,harga:t.harga})})});case"setFormBeli":return Object(w.a)(Object(w.a)({},e),{},{setForm:Object(w.a)(Object(w.a)({},e.setForm),{},{beli:Object(w.a)(Object(w.a)({},e.setForm.beli),{},{tipe:t.tipe,jumlah:t.jumlah,harga:t.harga})})});case"OrderHistory":return Object(w.a)(Object(w.a)({},e),{},{myOrderTrade:Object(w.a)(Object(w.a)({},e.myOrderTrade),{},{market:t.market?t.market:[]})});default:return Object(w.a)({},e)}}var pe=10,ve={chart:[],Grafik:[],LabelNew:[],DataBeli:[],DataJual:[],lastJual:0,lastBeli:0,highPrice:0,lowPrice:0,lastPriceAll:0};function je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setChart":return Object(w.a)(Object(w.a)({},e),{},{Grafik:t.Data,LabelNew:"object"===typeof t.LabelNew?t.LabelNew.reverse().filter((function(e,t){return t<=pe?e:null})):[],DataBeli:"object"===typeof t.DataBeli?t.DataBeli.reverse().filter((function(e,t){return t<=pe?e:null})):[],lastBeli:t.lastBeli,DataJual:"object"===typeof t.DataJual?t.DataJual.reverse().filter((function(e,t){return t<=pe?e:null})):[],lastJual:t.lastJual});case"setDataJual":return Object(w.a)(Object(w.a)({},e),{},{DataBeli:t.Data,lastBeli:t.last});case"setDataBeli":return Object(w.a)(Object(w.a)({},e),{},{DataJual:t.Data,lastJual:t.last});case"setChartTrading":return Object(w.a)(Object(w.a)({},e),{},{chart:t.market});default:return Object(w.a)({},e)}}function Ne(e){var t=e.children,a=Object(de.combineReducers)({TradeState:Ee,UserState:ke,storeHistory:je}),r=Object(de.createStore)(a,Object(be.composeWithDevTools)(Object(de.applyMiddleware)(fe.reduxSoldierMiddleware)));return l.a.createElement(b.a,{store:r},t)}c.a.render(l.a.createElement(le.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ne,null,l.a.createElement(ue,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){},83:function(e,t,a){}},[[139,1,2]]]);
//# sourceMappingURL=main.fa007996.chunk.js.map