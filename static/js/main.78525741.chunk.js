(this.webpackJsonpbelajarcss=this.webpackJsonpbelajarcss||[]).push([[0],{107:function(e,t){},131:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(17),c=a.n(n),o=(a(79),a(136)),s=a(137),m=a(66),i=a.n(m),u=a(15),d=i()("https://tradingtes.herokuapp.com"),b=(localStorage.getItem("token")&&Object(u.a)(localStorage.getItem("token")),a(4));function f(e){return{type:"TradeBeli",market:e.market}}function g(e){return{type:"LiveMarket",market:e.market}}var h=a(5);function E(e){var t=e.tipe,a=e.jumlah,r=e.harga,l=e.status;return l&&"CLICK"===l&&h.a.success("Item harga berhasil dipindahkan ke form"),{type:"setForm",tipe:t,jumlah:a,harga:r}}function k(e){var t=e.tipe,a=e.jumlah,r=e.harga,l=e.status;return l&&"CLICK"===l&&h.a.success("Item harga berhasil dipindahkan ke form"),{type:"setFormJual",tipe:t,jumlah:a,harga:r}}function p(e){var t=e.tipe,a=e.jumlah,r=e.harga,l=e.status;return l&&"CLICK"===l&&h.a.success("Item harga berhasil dipindahkan ke form"),{type:"setFormBeli",tipe:t,jumlah:a,harga:r}}var v=a(9);function j(e){var t=e.marketData,a={},r=[];(t||[]).forEach((function(e){Object.keys(a).includes("x"+e.harga)||(a["x"+e.harga]={jumlah:0,harga:0,total:0}),a["x"+e.harga]={jumlah:a["x"+e.harga].jumlah+e.jumlah,total:a["x"+e.harga].total+e.total,harga:e.harga,tipe:e.tipe}}));for(var l=0,n=Object.entries(a);l<n.length;l++){var c=Object(v.a)(n[l],2),o=(c[0],c[1]);r.push({key:o})}return r}function N(e){var t=e.Judul,a=Object(b.b)(),r=Object(b.c)((function(e){return e.TradeState.TradeJual})).market,n=(localStorage.getItem("token")?Object(u.a)(localStorage.getItem("token")):{}).id;return l.a.useEffect((function(){d.on("tradeAll",(function(e){var t=JSON.parse(e).tradeAll||[],r=j({marketData:t?t.filter((function(e){return"JUAL"===e.tipe.toUpperCase()})).sort((function(e,t){return t.harga-e.harga})).filter((function(e){return e.jumlah>0})).sort((function(e,t){return t.harga-e.harga})).sort((function(e,t){return t.jumlah-e.jumlah})):[]});a(function(e){return{type:"TradeJual",market:e.market}}({market:r}),g({market:t}))}))}),[t,a,n]),l.a.createElement("div",{className:"overScroll"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("tbody",{align:"left"},r?r.length<=0?l.a.createElement("div",null,"No data"):r.flatMap((function(e){return l.a.createElement("tr",{style:{cursor:"pointer"},onClick:function(){return a(E({tipe:"JUAL",jumlah:e.key.jumlah.toString(),harga:e.key.harga.toString()}))}},l.a.createElement("td",{className:"text-danger"},e.key.harga),l.a.createElement("td",{className:"text-danger"},e.key.jumlah),l.a.createElement("td",{className:"text-danger"},e.key.total))})):null)))}var y=a(16),w=a(1);function O(e){var t=[25,50,75,100],a=e.saldo,r=e.pilih;return(a=a||0)>=0?{kurang:t[r]/100*a,percent:t[r]}:null}var S=a(11),B=a.n(S);var x=a(6);function L(){var e=Object(x.h)().crypto,t=Object(b.b)(),a=Object(b.c)((function(e){return e.storeHistory?e.storeHistory:{}})),r=a.lastJual,n=a.lastBeli,c=Object(b.c)((function(e){return e.UserState.setForm.beli?e.UserState.setForm.beli:{}})),o=c.harga,s=c.jumlah,m=Object(b.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).saldo,i=l.a.useState({jumlah:"",harga:""}),u=Object(v.a)(i,2),d=u[0],f=u[1],g=function(e){e.target.validity.valid&&f(Object(w.a)(Object(w.a)({},d),{},Object(y.a)({},e.target.name,e.target.value)))};return l.a.useEffect((function(){t(p({tipe:"BELI",jumlah:d.jumlah,harga:d.harga}))}),[d,t]),l.a.createElement("div",{className:"d-block"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),function(e){var t=e.DataBeli;B()({url:"".concat("https://tradingtes.herokuapp.com","/tradeBuy"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(w.a)({},t)}).then((function(e){var t=e.data;h.a.success(t.message)})).catch((function(e){var t="";t=void 0===e.response?e.message:e.response.data.message,h.a.error(t)}))}({DataBeli:{jumlah:s,harga:o,symbol:e}})}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-4 d-block"},l.a.createElement("div",{className:"d-block mb-3"},l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},"Last Price Beli"),l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},n||0)),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},"Last Price Jual"),l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},r||0)),l.a.createElement("button",{className:"btn btn-outline-success form-control mt-3 p-1"},"BELI")),l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},l.a.createElement("div",{align:"right",style:{fontSize:"smaller",wordBreak:"break-word"}},"SALDO : ",m?Number(m):0)),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},l.a.createElement("label",{for:"jumlah",style:{fontSize:"smaller",wordBreak:"break-word"}},"Jumlah"))),l.a.createElement("input",{type:"text",name:Object.keys(d)[0],value:s,pattern:"\\d*\\.?\\d*",onInput:g,className:"form-control"}),l.a.createElement("label",{for:"jumlah",style:{fontSize:"smaller",wordBreak:"break-word"}},"Harga"),l.a.createElement("input",{type:"text",name:Object.keys(d)[1],value:o,pattern:"\\d*",onInput:g,className:"form-control"}),l.a.createElement("div",{className:"d-block mt-1",style:{fontSize:"smaller",wordBreak:"break-word"}},"Total Bayar : ",Number(s)*Number(o)))),l.a.createElement("div",{className:"d-flex justify-content-around",style:{fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1 p-1",onClick:function(){return t(p({tipe:"BELI",jumlah:Number(O({saldo:m,pilih:0}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"25%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1 p-1",onClick:function(){return t(p({tipe:"BELI",jumlah:Number(O({saldo:m,pilih:1}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"50%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1 p-1",onClick:function(){return t(p({tipe:"BELI",jumlah:Number(O({saldo:m,pilih:2}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"75%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1 p-1",onClick:function(){return t(p({tipe:"BELI",jumlah:Number(O({saldo:m,pilih:3}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"100%"))),l.a.createElement("br",null))}function U(){var e=Object(x.h)().crypto,t=Object(b.b)(),a=Object(b.c)((function(e){return e.storeHistory})),r=a.lastBeli,n=a.lastJual,c=Object(b.c)((function(e){return e.UserState.setForm.jual?e.UserState.setForm.jual:{}})),o=c.harga,s=c.jumlah,m=Object(b.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).codeo,i=l.a.useState({jumlah:"",harga:""}),u=Object(v.a)(i,2),d=u[0],f=u[1],g=function(e){e.target.validity.valid&&f(Object(w.a)(Object(w.a)({},d),{},Object(y.a)({},e.target.name,e.target.value)))};return l.a.useEffect((function(){t(k({tipe:"JUAL",jumlah:d.jumlah,harga:d.harga}))}),[d,t]),l.a.createElement("div",{className:"d-block"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),function(e){var t=e.DataJual;B()({url:"".concat("https://tradingtes.herokuapp.com","/tradeSell"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(w.a)({},t)}).then((function(e){var t=e.data;h.a.success(t.message)})).catch((function(e){var t="";t=void 0===e.response?e.message:e.response.data.message,h.a.error(t)}))}({DataJual:{jumlah:s,harga:o,symbol:e}})}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-4 d-block"},l.a.createElement("div",{className:"d-block mb-3"},l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},"Last Price Jual"),l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},n||0)),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},"Last Price Beli"),l.a.createElement("div",{className:"d-block"},l.a.createElement("small",null,r||0))),l.a.createElement("button",{className:"btn btn-outline-danger form-control mt-3 p-1"},"JUAL")),l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},l.a.createElement("div",{align:"right",style:{fontSize:"smaller",wordBreak:"break-word"}},m||0," ",e)),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},l.a.createElement("label",{for:"jumlah",style:{fontSize:"smaller",wordBreak:"break-word"}},"Jumlah"))),l.a.createElement("input",{type:"text",name:Object.keys(d)[0],value:s,pattern:"\\d*\\.?\\d*",onInput:g,className:"form-control"}),l.a.createElement("label",{for:"jumlah",style:{fontSize:"smaller",wordBreak:"break-word"}},"Harga"),l.a.createElement("input",{type:"text",name:Object.keys(d)[1],value:o,pattern:"\\d*",onInput:g,className:"form-control"}),l.a.createElement("div",{className:"d-block mt-1",style:{fontSize:"smaller",wordBreak:"break-word"}},"Total Bayar : ",Number(s)*Number(o)))),l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("button",{type:"button",className:"btn btn-outline-danger m-1 p-1",onClick:function(){return t(k({tipe:"JUAL",jumlah:Number(O({saldo:m,pilih:0}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"25%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-danger m-1 p-1",onClick:function(){return t(k({tipe:"JUAL",jumlah:Number(O({saldo:m,pilih:1}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"50%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-danger m-1 p-1",onClick:function(){return t(k({tipe:"JUAL",jumlah:Number(O({saldo:m,pilih:2}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"75%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-danger m-1 p-1",onClick:function(){return t(k({tipe:"JUAL",jumlah:Number(O({saldo:m,pilih:3}).kurang)/Number(o?""===o?"1":o:"1"),harga:o}))}},"100%"))))}function T(e){var t=e.Judul,a=Object(b.b)(),r=Object(b.c)((function(e){return e.TradeState.TradeBeli})).market,n=(localStorage.getItem("token")?Object(u.a)(localStorage.getItem("token")):{}).id;return l.a.useEffect((function(){d.on("tradeAll",(function(e){var t=JSON.parse(e).tradeAll||[],r=j({marketData:t?t.filter((function(e){return"BELI"===e.tipe.toUpperCase()})).sort((function(e,t){return e.harga-t.harga})).filter((function(e){return e.jumlah>0})).sort((function(e,t){return e.harga-t.harga})).sort((function(e,t){return e.jumlah-t.jumlah})):[]});a([f({market:r}),g({market:t})])}))}),[t,a,n]),l.a.createElement("div",{className:"overScroll"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("tbody",{align:"left"},r?r.length<=0?l.a.createElement("div",null,"No data"):r.map((function(e){return l.a.createElement("tr",{style:{cursor:"pointer"},onClick:function(){return a(E({tipe:"BELI",jumlah:e.key.jumlah,harga:e.key.harga}))}},l.a.createElement("td",{className:"text-success"},e.key.harga),l.a.createElement("td",{className:"text-success"},e.key.jumlah),l.a.createElement("td",{className:"text-success"},e.key.total))})):null)))}function C(e){var t=e.DataRefund;B()({url:"".concat("https://tradingtes.herokuapp.com","/tradePay"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:{idMd5:t}}).then((function(e){var t=e.data;h.a.success(t.message)})).catch((function(e){var t="";t=void 0===e.response?e.message:e.response.data.message,h.a.error(t)}))}function D(){var e=(localStorage.getItem("token")?Object(u.a)(localStorage.getItem("token")):{}).id,t=Object(b.b)(),a=Object(b.c)((function(e){return e.UserState.myOrderTrade})).market;return l.a.useEffect((function(){d.on("tradeMe".concat(e),(function(e){var a=JSON.parse(e).tradeMe;t({type:"OrderHistory",market:{market:a}.market})}))}),[t,e]),l.a.createElement("div",{className:"overScroll"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"4",className:"text-white",style:{position:"-webkit-sticky",margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("i",{className:"fa fa-history"})," ORDER HISTORY")),l.a.createElement("tr",{className:"text-white",style:{position:"-webkit-sticky",margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("td",null,"HARGA (IDR)"),l.a.createElement("td",null,"JUMLAH (CODEO)"),l.a.createElement("td",null,"TOTAL (CODEO)"),l.a.createElement("td",null,"Refunds"))),l.a.createElement("tbody",{style:{backgroundColor:"#252525"}},a&&a.length>0?a.map((function(e){return l.a.createElement("tr",{style:{fontSize:"smaller",wordBreak:"break-word"}},"JUAL"===e.tipe?l.a.createElement("td",{className:"text-danger"},l.a.createElement("b",null,e.harga)):l.a.createElement("td",{className:"text-success"},l.a.createElement("b",null,e.harga)),l.a.createElement("td",{className:"text-white",align:"right"},l.a.createElement("b",null,e.jumlah)),l.a.createElement("td",{className:"text-white",align:"right"},l.a.createElement("b",null,e.total)),l.a.createElement("td",{className:"text-white",align:"right"},"JUAL"===e.tipe?l.a.createElement("button",{className:"btn btn-outline-danger p-1",onClick:function(){return C({DataRefund:e._id})}},l.a.createElement("i",{className:"fa fa-money"})):l.a.createElement("button",{className:"btn btn-outline-success p-1",onClick:function(){return C({DataRefund:e._id})}},l.a.createElement("i",{className:"fa fa-money"}))))})):l.a.createElement("tr",null,l.a.createElement("td",{className:"text-white"},"-"),l.a.createElement("td",{className:"text-white"},"-"),l.a.createElement("td",{className:"text-white"},"-"),l.a.createElement("td",{className:"text-white"},"-")))))}var J=a(68),z=a(69),A=new(function(){function e(){Object(J.a)(this,e),this.isLogin=!1}return Object(z.a)(e,[{key:"onLogin",value:function(e){this.isLogin=!0,e()}},{key:"onLogout",value:function(e){e(),this.isLogin=!1,localStorage.clear()}}]),e}());function I(){var e=Object(x.g)();return l.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return function(e){e.DataLogin;var t=e.history;B()({url:"".concat("https://tradingtes.herokuapp.com","/user/logout"),method:"DELETE",headers:{jwttoken:localStorage.getItem("token")}}).then((function(e){var a=e.data;A.onLogout((function(){h.a.success(a.message),localStorage.clear(),t.push("/trading")}))})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,A.onLogout((function(){localStorage.clear(),t.push("/trading")})),h.a.error(a)}))}({history:e})}},"Logout")}function H(){var e=Object(x.h)().crypto;return l.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){return function(e){var t=e.crypto;B()({url:"".concat("https://tradingtes.herokuapp.com","/topupSaldo"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:{crypto:t}}).then((function(e){var t=e.data;h.a.success(t.message)})).catch((function(e){var t="";t=void 0===e.response?e.message:e.response.data.message,h.a.error(t)}))}({crypto:e})}},"TOPUP")}function P(){var e=Object(b.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).username;return l.a.createElement("div",{className:"row p-1"},l.a.createElement("div",{className:"col-4",style:{backgroundColor:"#2d2c31"}},l.a.createElement("div",{className:"d-block mt-3"},l.a.createElement("h6",null,"Hello ",e))),l.a.createElement("div",{className:"col-8",style:{backgroundColor:"#2d2c31"}},l.a.createElement("header",null,l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement("div",{className:"d-block p-3"},l.a.createElement(I,null)),l.a.createElement("div",{className:"d-block p-3"},l.a.createElement(H,null))))))}function F(){var e=l.a.useState(void 0),t=Object(v.a)(e,2),a=t[0],r=t[1];return l.a.useEffect((function(){d.on("trafikHariIni",(function(e){var t=JSON.parse(e);if(t){var a=t.lastPrice,l=t.highPrice,n=t.lowPrice,c=t.volume;r({lastPrice:a,highPrice:l,lowPrice:n,volume:c})}}))}),[r]),l.a.createElement("div",{className:"row p-1",style:{backgroundColor:"#252525"}},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},l.a.createElement("div",{className:"d-block mt-2"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Harga Terakhir")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,a?a.lastPrice:0)))),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},l.a.createElement("div",{className:"d-block mt-2"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Tertinggi")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,a?a.highPrice:0)))),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},l.a.createElement("div",{className:"d-block mt-2"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Volume")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,a?a.volume:0)))),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},l.a.createElement("div",{className:"d-block mt-1"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Terendah")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,a?a.lowPrice:0)))))}function M(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(F,null)))}function R(){var e=Object(b.c)((function(e){return e.storeHistory})).Grafik;return l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",{className:"text-white"},l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"3",align:"center",style:{backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},"PERDAGANGAN TERKINI")),l.a.createElement("tr",{style:{fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"JUMLAH"),l.a.createElement("td",null,"WAKTU"))),l.a.createElement("tbody",{className:"text-white"},e?e.length<=0?l.a.createElement("tr",null,l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-")):e.flatMap((function(e){return"JUAL"===e.tipeHistori.toUpperCase()?l.a.createElement("tr",null,l.a.createElement("td",{className:"text-danger",style:{fontSize:"smaller",wordBreak:"break-word"}},e.latestHarga),l.a.createElement("td",{className:"text-white",style:{fontSize:"smaller",wordBreak:"break-word"}},e.jumlahDeal?e.jumlahDeal:0),l.a.createElement("td",{className:"text-white",style:{fontSize:"smaller",wordBreak:"break-word"}},new Date(e.createdAt).toUTCString())):"BELI"===e.tipeHistori.toUpperCase()?l.a.createElement("tr",null,l.a.createElement("td",{className:"text-success",style:{fontSize:"smaller",wordBreak:"break-word"}},e.latestHarga),l.a.createElement("td",{className:"text-white",style:{fontSize:"smaller",wordBreak:"break-word"}},e.jumlahDeal?e.jumlahDeal:0),l.a.createElement("td",{className:"text-white",style:{fontSize:"smaller",wordBreak:"break-word"}},new Date(e.createdAt).toUTCString())):l.a.createElement("tr",null,l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"))})):l.a.createElement("tr",null,l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"))))}var G=a(70),V=a.n(G);a(134);function K(e){var t=e.data,a={options:{position:"belowBar",alignLabels:!0,localization:{dateFormat:"yyyy-MM-dd",locale:"id-ID"},layout:{backgroundColor:"#121115",textColor:"#696969",fontSize:14,fontFamily:"Calibri"},handleScroll:{mouseWheel:!0,pressedMouseMove:!0},handleScale:{axisPressedMouseMove:!0,mouseWheel:!0,pinch:!0},crosshair:{vertLine:{color:"#606060",width:1,style:1,visible:!0,labelVisible:!1},horzLine:{color:"#606060",width:1,style:1,visible:!0,labelVisible:!0},mode:1},priceScale:{position:"left",mode:1,autoScale:!0,invertScale:!1,alignLabels:!0,borderVisible:!0,borderColor:"#24273E",scaleMargins:{top:.3,bottom:.3}},timeScale:{rightOffset:12,barSpacing:10,fixLeftEdge:!0,lockVisibleTimeRangeOnResize:!0,rightBarStaysOnScroll:!0,borderVisible:!1,borderColor:"#fff000",visible:!0,timeVisible:!0,secondsVisible:!1},watermark:{color:"rgba(112,112,112,121)",visible:!0,padding:5,text:"   "+e.TOKEN+"   ",fontSize:18,horzAlign:"left",vertAlign:"bottom"}}};return l.a.createElement(V.a,{options:a.options,from:0,to:10,darkTheme:!0,autoWidth:!0,autoHeight:!0,candlestickSeries:[{data:t}]})}a(131);function W(){var e=Object(x.g)(),t=l.a.useState([]),a=Object(v.a)(t,2),r=a[0],n=a[1];return l.a.useEffect((function(){d.on("listCrypto",(function(e){var t=JSON.parse(e).ListCrypto;n(t)}))}),[n]),l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",{className:"text-white"},l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"3",align:"center",style:{backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},"LIST CRYPTO")),l.a.createElement("tr",{style:{fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("td",null,"PAIR"),l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"VOLUME"))),l.a.createElement("tbody",{className:"text-white"},r?r.length<=0?l.a.createElement("tr",null,l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-")):r.map((function(t){return l.a.createElement("tr",{style:{cursor:"pointer"},onClick:function(){return e.push(t.simbol.toString().toUpperCase().replace(/\//g,"_"))}},l.a.createElement("td",null,l.a.createElement("div",{className:"d-block text-justify",style:{fontSize:"smaller",wordBreak:"break-word"}},t.simbol)),l.a.createElement("td",null,l.a.createElement("div",{className:"d-block text-justify",style:{fontSize:"smaller",wordBreak:"break-word"}},t.hargaTerakhir)),l.a.createElement("td",null,l.a.createElement("div",{className:"d-block text-justify",style:{fontSize:"smaller",wordBreak:"break-word"}},t.volume)))})):l.a.createElement("tr",null,l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"))))}function _(){var e=Object(x.h)().crypto,t=(localStorage.getItem("token")?Object(u.a)(localStorage.getItem("token")):{}).id,a=Object(x.g)(),r=Object(b.b)(),n=Object(b.c)((function(e){return e.storeHistory})).chart;return l.a.useEffect((function(){d.emit("soketAuth",JSON.stringify({token:localStorage.getItem("token"),typeChart:e}))}),[e]),l.a.useLayoutEffect((function(){t&&(d.on("infoUser".concat(t),(function(e){var l=JSON.parse(e);l.infoUser?(r(function(e){return{type:"setInfoUser",User:e.User}}({User:l})),l.infoUser._id===t&&l.message&&h.a.success(l.message)):A.onLogout((function(){localStorage.clear(),a.push("/trading")}))})),d.on("latestTrade",(function(e){var t,a=JSON.parse(e).latestTrade,l=a?a.filter((function(e){return e.tipeHistori?e:null})).sort((function(e,t){return t.createdAt-e.createdAt})):[],n=[],c=[],o=[];l.forEach((function(e){n.push(new Date(e.createdAt).toLocaleTimeString()+" "+new Date(e.createdAt).toLocaleDateString()),"BELI"===e.tipeHistori.toUpperCase()?c.push(e.latestHarga):o.push(e.latestHarga)})),r((t={LabelNew:n,Data:a.reverse(),DataBeli:c,lastBeli:c[c.length-1],DataJual:o,lastJual:o[o.length-1]},Object(w.a)({type:"setChart"},t)))})))}),[r,t,a]),l.a.useLayoutEffect((function(){d.on("chartTerkini",(function(e){var t=JSON.parse(e).chart.map((function(e){return{time:new Date(e.createdAt).toUTCString(),open:e.high,high:e.high,low:e.low,close:e.last,value:e.last,volume:1233333}}));r({type:"setChartTrading",market:{market:!t||t.length<=0?[]:t}.market})}))}),[r]),l.a.createElement(o.a,{style:{fontSize:"smaller",wordBreak:"break-word"},fluid:!0},l.a.createElement(P,null),l.a.createElement(M,null),l.a.createElement(s.a,{className:"p-1"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6",style:{padding:0}},l.a.createElement(K,{TOKEN:e,data:n})),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6",style:{backgroundColor:"#252525"}},l.a.createElement("div",{className:"row d-flex justify-content-between"},l.a.createElement("div",{className:"col-6 col-sm-12 col-xs-12 col-md-6 p-1"},l.a.createElement("table",{className:"table table-borderless",style:{margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("caption",{className:"p-1"},"Daftar Beli"),l.a.createElement("thead",null,l.a.createElement("tr",{className:"text-white"},l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"JUMLAH"),l.a.createElement("td",null,"TOTAL")))),l.a.createElement(T,{Judul:"BELI"})),l.a.createElement("div",{className:"col-6 col-sm-12 col-xs-12 col-md-6 p-1"},l.a.createElement("table",{className:"table table-borderless",style:{margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("caption",{className:"p-1"},"Daftar Jual"),l.a.createElement("tr",{className:"text-white"},l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"JUMLAH"),l.a.createElement("td",null,"TOTAL"))),l.a.createElement(N,{Judul:"JUAL"}))),l.a.createElement("div",{className:"row m-1",style:{backgroundColor:"#252525"}},l.a.createElement("div",{className:"col-6"},l.a.createElement(U,null)),l.a.createElement("div",{className:"col-6"},l.a.createElement(L,null))))),l.a.createElement("div",{className:"row",style:{height:"100%"}},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-1",style:{padding:0}},l.a.createElement(D,null)),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-1",style:{backgroundColor:"#252525",padding:0}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6"},l.a.createElement(W,null)),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6"},l.a.createElement(R,null))))))}var Y=a(8);a(65);function $(){var e=Object(x.g)(),t=l.a.useState({email:"",password:""}),a=Object(v.a)(t,2),r=a[0],n=a[1],c=function(e){n(Object(w.a)(Object(w.a)({},r),{},Object(y.a)({},e.target.name,e.target.value)))};return l.a.createElement("form",{className:"posisiForm",onSubmit:function(t){t.preventDefault(),function(e){var t=e.DataLogin,a=e.history;B()({url:"".concat("https://tradingtes.herokuapp.com","/user/login"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(w.a)({},t)}).then((function(e){var t=e.data;A.onLogin((function(){h.a.success(t.message),localStorage.setItem("token",t.token),a.push("/trading/CODEO")}))})).catch((function(e){var t="";t=void 0===e.response?e.message:e.response.data.message,h.a.error(t)}))}({DataLogin:r,history:e})}},l.a.createElement("h5",{align:"center"},"Login Trade"),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("label",{for:"email"},l.a.createElement("small",null,"Email")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[0],value:Object.values(r)[0],onChange:c}),l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Password")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[1],value:Object.values(r)[1],onChange:c}),l.a.createElement("div",{className:"d-block mt-2",align:"right"},l.a.createElement(Y.b,{to:"/trading/daftar",className:"m-2"},"Daftar"),l.a.createElement("button",{className:"btn btn-outline-success"},l.a.createElement("small",null,"Login"))))))}function q(){return l.a.createElement($,null)}function Q(){var e=Object(x.g)(),t=l.a.useState({username:"",email:"",password:""}),a=Object(v.a)(t,2),r=a[0],n=a[1],c=function(e){n(Object(w.a)(Object(w.a)({},r),{},Object(y.a)({},e.target.name,e.target.value)))};return l.a.createElement("form",{className:"posisiForm",onSubmit:function(t){t.preventDefault(),function(e){var t=e.DataDaftar,a=e.history;B()({url:"".concat("https://tradingtes.herokuapp.com","/user"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(w.a)({},t)}).then((function(e){var t=e.data;h.a.success(t.message),a.push("/trading")})).catch((function(e){var t="";t=void 0===e.response?e.message:e.response.data.message,h.a.error(t)}))}({DataDaftar:r,history:e})}},l.a.createElement("h5",{align:"center"},"Daftar Trade"),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Username")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[0],value:Object.values(r)[0],onChange:c}),l.a.createElement("label",{for:"email"},l.a.createElement("small",null,"Email")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[1],value:Object.values(r)[1],onChange:c}),l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Password")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[2],value:Object.values(r)[2],onChange:c}),l.a.createElement("div",{className:"d-block mt-2",align:"right"},l.a.createElement(Y.b,{to:"/trading"},"LOGIN"),l.a.createElement("button",{className:"btn btn-outline-success"},l.a.createElement("small",null,"DAFTAR"))))))}function X(){return l.a.createElement(Q,null)}var Z=a(73);function ee(e){var t=e.component,a=Object(Z.a)(e,["component"]);return l.a.createElement(x.b,Object.assign({},a,{render:function(e){return A.isLogin?l.a.createElement(t,a):l.a.createElement(x.a,{to:{pathname:"/trading",state:{from:e.location}}})}}))}var te=Object(x.i)((function(){var e=Object(x.g)();return l.a.useEffect((function(){localStorage.getItem("token")?A.onLogin((function(){e.push("/trading/CODEO")})):A.onLogout((function(){e.push("/trading")}))}),[e]),l.a.createElement(x.d,null,l.a.createElement(x.b,{exact:!0,path:"/trading"},l.a.createElement(q,null)),l.a.createElement(x.b,{path:"/trading/daftar"},l.a.createElement(X,null)),l.a.createElement(ee,{path:"/trading/:crypto",component:_}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(132);var ae=a(18),re=a(71),le=a(72),ne={TradeJual:{market:[]},TradeBeli:{market:[]},TradeMe:{market:[]},TradeAll:{market:[]}};function ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TradeJual":return Object(w.a)(Object(w.a)({},e),{},{TradeJual:Object(w.a)(Object(w.a)({},e.TradeJual),{},{market:t.market})});case"TradeBeli":return Object(w.a)(Object(w.a)({},e),{},{TradeBeli:Object(w.a)(Object(w.a)({},e.TradeBeli),{},{market:t.market})});case"TradeAll":return Object(w.a)(Object(w.a)({},e),{},{TradeMe:Object(w.a)(Object(w.a)({},e.TradeMe),{},{market:t.market})});case"LiveMarket":return Object(w.a)(Object(w.a)({},e),{},{TradeAll:Object(w.a)(Object(w.a)({},e.TradeAll),{},{market:t.market})});default:return Object(w.a)({},e)}}var oe={User:null,setForm:{beli:{tipe:"",jumlah:"",harga:""},jual:{tipe:"",jumlah:"",harga:""}},myOrderTrade:{market:[]}};function se(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setInfoUser":return Object(w.a)(Object(w.a)({},e),{},{User:t.User});case"setForm":return Object(w.a)(Object(w.a)({},e),{},{setForm:Object(w.a)(Object(w.a)({},e.setForm),{},{beli:Object(w.a)(Object(w.a)({},e.setForm.beli),{},{tipe:t.tipe,jumlah:t.jumlah,harga:t.harga}),jual:Object(w.a)(Object(w.a)({},e.setForm.jual),{},{tipe:t.tipe,jumlah:t.jumlah,harga:t.harga})})});case"setFormJual":return Object(w.a)(Object(w.a)({},e),{},{setForm:Object(w.a)(Object(w.a)({},e.setForm),{},{jual:Object(w.a)(Object(w.a)({},e.setForm.jual),{},{tipe:t.tipe,jumlah:t.jumlah,harga:t.harga})})});case"setFormBeli":return Object(w.a)(Object(w.a)({},e),{},{setForm:Object(w.a)(Object(w.a)({},e.setForm),{},{beli:Object(w.a)(Object(w.a)({},e.setForm.beli),{},{tipe:t.tipe,jumlah:t.jumlah,harga:t.harga})})});case"OrderHistory":return Object(w.a)(Object(w.a)({},e),{},{myOrderTrade:Object(w.a)(Object(w.a)({},e.myOrderTrade),{},{market:t.market?t.market:[]})});default:return Object(w.a)({},e)}}var me={chart:[],Grafik:[],LabelNew:[],DataBeli:[],DataJual:[],lastJual:0,lastBeli:0,highPrice:0,lowPrice:0,lastPriceAll:0};function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setChart":return Object(w.a)(Object(w.a)({},e),{},{Grafik:t.Data,LabelNew:"object"===typeof t.LabelNew?t.LabelNew.reverse().filter((function(e,t){return t<=10?e:null})):[],DataBeli:"object"===typeof t.DataBeli?t.DataBeli.reverse().filter((function(e,t){return t<=10?e:null})):[],lastBeli:t.lastBeli,DataJual:"object"===typeof t.DataJual?t.DataJual.reverse().filter((function(e,t){return t<=10?e:null})):[],lastJual:t.lastJual});case"setDataJual":return Object(w.a)(Object(w.a)({},e),{},{DataBeli:t.Data,lastBeli:t.last});case"setDataBeli":return Object(w.a)(Object(w.a)({},e),{},{DataJual:t.Data,lastJual:t.last});case"setChartTrading":return Object(w.a)(Object(w.a)({},e),{},{chart:t.market});default:return Object(w.a)({},e)}}function ue(e){var t=e.children,a=Object(ae.combineReducers)({TradeState:ce,UserState:se,storeHistory:ie}),r=Object(ae.createStore)(a,Object(re.composeWithDevTools)(Object(ae.applyMiddleware)(le.reduxSoldierMiddleware)));return l.a.createElement(b.a,{store:r},t)}c.a.render(l.a.createElement(Y.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(ue,null,l.a.createElement(te,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){},74:function(e,t,a){e.exports=a(133)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.78525741.chunk.js.map