(this.webpackJsonpbelajarcss=this.webpackJsonpbelajarcss||[]).push([[0],{109:function(e,a){},133:function(e,a,t){},135:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(17),c=t.n(n),o=(t(81),t(137)),s=t(138),m=t(68),i=t.n(m),u=t(16),d=i()("https://tradingtes.herokuapp.com"),b=(localStorage.getItem("token")&&Object(u.a)(localStorage.getItem("token")),t(4));function g(e){return{type:"TradeBeli",market:e.market}}function f(e){return{type:"LiveMarket",market:e.market}}var h=t(5);function E(e){var a=e.tipe,t=e.jumlah,r=e.harga,l=e.status;return l&&"CLICK"===l&&h.a.success("Item harga berhasil dipindahkan ke form"),{type:"setFormJual",tipe:a,jumlah:t,harga:r}}function k(e){var a=e.tipe,t=e.jumlah,r=e.harga,l=e.status;return l&&"CLICK"===l&&h.a.success("Item harga berhasil dipindahkan ke form"),{type:"setFormBeli",tipe:a,jumlah:t,harga:r}}var p=t(13);function v(e){var a=e.marketData,t={},r=[];(a||[]).forEach((function(e){Object.keys(t).includes("x"+e.harga)||(t["x"+e.harga]={jumlah:0,harga:0,total:0}),t["x"+e.harga]={jumlah:t["x"+e.harga].jumlah+e.jumlah,total:t["x"+e.harga].total+e.total,harga:e.harga,tipe:e.tipe}}));for(var l=0,n=Object.entries(t);l<n.length;l++){var c=Object(p.a)(n[l],2),o=(c[0],c[1]);r.push({key:o})}return r}function j(e){var a=e.Judul,t=Object(b.b)(),r=Object(b.c)((function(e){return e.TradeState.TradeJual})).market,n=(localStorage.getItem("token")?Object(u.a)(localStorage.getItem("token")):{}).id;return l.a.useEffect((function(){d.on("tradeAll",(function(e){var a=JSON.parse(e).tradeAll||[],r=v({marketData:a?a.filter((function(e){return"JUAL"===e.tipe.toUpperCase()})).sort((function(e,a){return a.harga-e.harga})).filter((function(e){return e.jumlah>0})).sort((function(e,a){return a.harga-e.harga})).sort((function(e,a){return a.jumlah-e.jumlah})):[]});t(function(e){return{type:"TradeJual",market:e.market}}({market:r}),f({market:a}))}))}),[a,t,n]),l.a.createElement("div",{className:"overScroll"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("tbody",{align:"left"},r?r.length<=0?l.a.createElement("div",null,"No data"):r.flatMap((function(e){return l.a.createElement("tr",{style:{cursor:"pointer"},onClick:function(){return t(E({tipe:"JUAL",jumlah:e.key.jumlah.toString(),harga:e.key.harga.toString()}))}},l.a.createElement("td",{className:"text-danger"},e.key.harga),l.a.createElement("td",{className:"text-danger"},e.key.jumlah),l.a.createElement("td",{className:"text-danger"},e.key.total))})):null)))}var N=t(8),O=t(1);function w(e){var a=[25,50,75,100],t=e.saldo,r=e.pilih;return(t=t||0)>=0?{kurang:a[r]/100*t,percent:a[r]}:null}var y=t(10),S=t.n(y);function B(){var e=Object(b.b)(),a=Object(b.c)((function(e){return e.storeHistory?e.storeHistory:{}})),t=a.lastJual,r=a.lastBeli,n=Object(b.c)((function(e){return e.UserState.setForm.beli?e.UserState.setForm.beli:{}})),c=n.harga,o=n.jumlah,s=Object(b.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).saldo,m=l.a.useState({jumlah:"",harga:""}),i=Object(p.a)(m,2),u=i[0],d=i[1],g=function(e){e.target.validity.valid&&d(Object(O.a)(Object(O.a)({},u),{},Object(N.a)({},e.target.name,e.target.value)))};return l.a.useEffect((function(){e(k({tipe:"BELI",jumlah:u.jumlah,harga:u.harga}))}),[u,e]),l.a.createElement("div",{className:"d-block"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var a=e.DataBeli;S()({url:"".concat("https://tradingtes.herokuapp.com","/tradeBuy"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(O.a)({},a)}).then((function(e){var a=e.data;h.a.success(a.message)})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,h.a.error(a)}))}({DataBeli:{jumlah:o,harga:c}})}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-4 d-block"},l.a.createElement("div",{className:"d-block mb-3"},l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},"Last Price Beli"),l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},r||0)),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},"Last Price Jual"),l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},t||0)),l.a.createElement("button",{className:"btn btn-outline-success form-control mt-3 p-1"},"BELI")),l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},l.a.createElement("div",{align:"right",style:{fontSize:"smaller",wordBreak:"break-word"}},"SALDO : ",s?Number(s):0)),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},l.a.createElement("label",{for:"jumlah",style:{fontSize:"smaller",wordBreak:"break-word"}},"Jumlah"))),l.a.createElement("input",{type:"text",name:Object.keys(u)[0],value:o,pattern:"\\d*\\.?\\d*",onInput:g,className:"form-control"}),l.a.createElement("label",{for:"jumlah",style:{fontSize:"smaller",wordBreak:"break-word"}},"Harga"),l.a.createElement("input",{type:"text",name:Object.keys(u)[1],value:c,pattern:"\\d*",onInput:g,className:"form-control"}),l.a.createElement("div",{className:"d-block mt-1",style:{fontSize:"smaller",wordBreak:"break-word"}},"Total Bayar : ",Number(o)*Number(c)))),l.a.createElement("div",{className:"d-flex justify-content-around",style:{fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1 p-1",onClick:function(){return e(k({tipe:"BELI",jumlah:Number(w({saldo:s,pilih:0}).kurang)/Number(c?""===c?"1":c:"1"),harga:c}))}},"25%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1 p-1",onClick:function(){return e(k({tipe:"BELI",jumlah:Number(w({saldo:s,pilih:1}).kurang)/Number(c?""===c?"1":c:"1"),harga:c}))}},"50%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1 p-1",onClick:function(){return e(k({tipe:"BELI",jumlah:Number(w({saldo:s,pilih:2}).kurang)/Number(c?""===c?"1":c:"1"),harga:c}))}},"75%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success m-1 p-1",onClick:function(){return e(k({tipe:"BELI",jumlah:Number(w({saldo:s,pilih:3}).kurang)/Number(c?""===c?"1":c:"1"),harga:c}))}},"100%"))),l.a.createElement("br",null))}function x(){var e=Object(b.b)(),a=Object(b.c)((function(e){return e.storeHistory})),t=a.lastBeli,r=a.lastJual,n=Object(b.c)((function(e){return e.UserState.setForm.jual?e.UserState.setForm.jual:{}})),c=n.harga,o=n.jumlah,s=Object(b.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).codeo,m=l.a.useState({jumlah:"",harga:""}),i=Object(p.a)(m,2),u=i[0],d=i[1],g=function(e){e.target.validity.valid&&d(Object(O.a)(Object(O.a)({},u),{},Object(N.a)({},e.target.name,e.target.value)))};return l.a.useEffect((function(){e(E({tipe:"JUAL",jumlah:u.jumlah,harga:u.harga}))}),[u,e]),l.a.createElement("div",{className:"d-block"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var a=e.DataJual;S()({url:"".concat("https://tradingtes.herokuapp.com","/tradeSell"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(O.a)({},a)}).then((function(e){var a=e.data;h.a.success(a.message)})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,h.a.error(a)}))}({DataJual:{jumlah:o,harga:c}})}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-4 d-block"},l.a.createElement("div",{className:"d-block mb-3"},l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},"Last Price Jual"),l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},r||0)),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:"d-block",style:{fontSize:"smaller",wordBreak:"break-word"}},"Last Price Beli"),l.a.createElement("div",{className:"d-block"},l.a.createElement("small",null,t||0))),l.a.createElement("button",{className:"btn btn-outline-danger form-control mt-3 p-1"},"JUAL")),l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},l.a.createElement("div",{align:"right",style:{fontSize:"smaller",wordBreak:"break-word"}},s||0," CODEO")),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},l.a.createElement("label",{for:"jumlah",style:{fontSize:"smaller",wordBreak:"break-word"}},"Jumlah"))),l.a.createElement("input",{type:"text",name:Object.keys(u)[0],value:o,pattern:"\\d*\\.?\\d*",onInput:g,className:"form-control"}),l.a.createElement("label",{for:"jumlah",style:{fontSize:"smaller",wordBreak:"break-word"}},"Harga"),l.a.createElement("input",{type:"text",name:Object.keys(u)[1],value:c,pattern:"\\d*",onInput:g,className:"form-control"}),l.a.createElement("div",{className:"d-block mt-1",style:{fontSize:"smaller",wordBreak:"break-word"}},"Total Bayar : ",Number(o)*Number(c)))),l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("button",{type:"button",className:"btn btn-outline-danger m-1 p-1",onClick:function(){return e(E({tipe:"JUAL",jumlah:Number(w({saldo:s,pilih:0}).kurang)/Number(c?""===c?"1":c:"1"),harga:c}))}},"25%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-danger m-1 p-1",onClick:function(){return e(E({tipe:"JUAL",jumlah:Number(w({saldo:s,pilih:1}).kurang)/Number(c?""===c?"1":c:"1"),harga:c}))}},"50%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-danger m-1 p-1",onClick:function(){return e(E({tipe:"JUAL",jumlah:Number(w({saldo:s,pilih:2}).kurang)/Number(c?""===c?"1":c:"1"),harga:c}))}},"75%"),l.a.createElement("button",{type:"button",className:"btn btn-outline-danger m-1 p-1",onClick:function(){return e(E({tipe:"JUAL",jumlah:Number(w({saldo:s,pilih:3}).kurang)/Number(c?""===c?"1":c:"1"),harga:c}))}},"100%"))))}function L(e){var a=e.Judul,t=Object(b.b)(),r=Object(b.c)((function(e){return e.TradeState.TradeBeli})).market,n=(localStorage.getItem("token")?Object(u.a)(localStorage.getItem("token")):{}).id;return l.a.useEffect((function(){d.on("tradeAll",(function(e){var a=JSON.parse(e).tradeAll||[],r=v({marketData:a?a.filter((function(e){return"BELI"===e.tipe.toUpperCase()})).sort((function(e,a){return e.harga-a.harga})).filter((function(e){return e.jumlah>0})).sort((function(e,a){return e.harga-a.harga})).sort((function(e,a){return e.jumlah-a.jumlah})):[]});t([g({market:r}),f({market:a})])}))}),[a,t,n]),l.a.createElement("div",{className:"overScroll"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("tbody",{align:"left"},r?r.length<=0?l.a.createElement("div",null,"No data"):r.map((function(e){return l.a.createElement("tr",{style:{cursor:"pointer"},onClick:function(){return t(k({tipe:"BELI",jumlah:e.key.jumlah,harga:e.key.harga}))}},l.a.createElement("td",{className:"text-success"},e.key.harga),l.a.createElement("td",{className:"text-success"},e.key.jumlah),l.a.createElement("td",{className:"text-success"},e.key.total))})):null)))}function D(e){var a=e.DataRefund;S()({url:"".concat("https://tradingtes.herokuapp.com","/tradePay"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:{idMd5:a}}).then((function(e){var a=e.data;h.a.success(a.message)})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,h.a.error(a)}))}function U(){var e=(localStorage.getItem("token")?Object(u.a)(localStorage.getItem("token")):{}).id,a=Object(b.b)(),t=Object(b.c)((function(e){return e.UserState.myOrderTrade})).market;return l.a.useEffect((function(){d.on("tradeMe".concat(e),(function(e){var t=JSON.parse(e).tradeMe;a({type:"OrderHistory",market:{market:t}.market})}))}),[a,e]),l.a.createElement("div",{className:"overScroll"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"4",className:"text-white",style:{position:"-webkit-sticky",margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("i",{className:"fa fa-history"})," ORDER HISTORY")),l.a.createElement("tr",{className:"text-white",style:{position:"-webkit-sticky",margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("td",null,"HARGA (IDR)"),l.a.createElement("td",null,"JUMLAH (CODEO)"),l.a.createElement("td",null,"TOTAL (CODEO)"),l.a.createElement("td",null,"Refunds"))),l.a.createElement("tbody",{style:{backgroundColor:"#252525"}},t&&t.length>0?t.map((function(e){return l.a.createElement("tr",{style:{fontSize:"smaller",wordBreak:"break-word"}},"JUAL"===e.tipe?l.a.createElement("td",{className:"text-danger"},l.a.createElement("b",null,e.harga)):l.a.createElement("td",{className:"text-success"},l.a.createElement("b",null,e.harga)),l.a.createElement("td",{className:"text-white",align:"right"},l.a.createElement("b",null,e.jumlah)),l.a.createElement("td",{className:"text-white",align:"right"},l.a.createElement("b",null,e.total)),l.a.createElement("td",{className:"text-white",align:"right"},"JUAL"===e.tipe?l.a.createElement("button",{className:"btn btn-outline-danger p-1",onClick:function(){return D({DataRefund:e._id})}},l.a.createElement("i",{className:"fa fa-money"})):l.a.createElement("button",{className:"btn btn-outline-success p-1",onClick:function(){return D({DataRefund:e._id})}},l.a.createElement("i",{className:"fa fa-money"}))))})):l.a.createElement("tr",null,l.a.createElement("td",{className:"text-white"},"-"),l.a.createElement("td",{className:"text-white"},"-"),l.a.createElement("td",{className:"text-white"},"-"),l.a.createElement("td",{className:"text-white"},"-")))))}var T=t(28),J=t(29),A=new(function(){function e(){Object(T.a)(this,e),this.isLogin=!1}return Object(J.a)(e,[{key:"onLogin",value:function(e){this.isLogin=!0,e()}},{key:"onLogout",value:function(e){e(),this.isLogin=!1,localStorage.clear()}}]),e}()),C=t(6);function I(){var e=Object(C.g)();return l.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return function(e){e.DataLogin;var a=e.history;S()({url:"".concat("https://tradingtes.herokuapp.com","/user/logout"),method:"DELETE",headers:{jwttoken:localStorage.getItem("token")}}).then((function(e){var t=e.data;A.onLogout((function(){h.a.success(t.message),localStorage.clear(),a.push("/trading")}))})).catch((function(e){var t="";t=void 0===e.response?e.message:e.response.data.message,A.onLogout((function(){localStorage.clear(),a.push("/trading")})),h.a.error(t)}))}({history:e})}},"Logout")}function z(){return l.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){S()({url:"".concat("https://tradingtes.herokuapp.com","/topupSaldo"),method:"POST",headers:{jwttoken:localStorage.getItem("token")}}).then((function(e){var a=e.data;h.a.success(a.message)})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,h.a.error(a)}))}},"TOPUP")}function H(){var e=Object(b.c)((function(e){return e.UserState.User&&e.UserState.User.infoUser?e.UserState.User.infoUser:{}})).username;return l.a.createElement("div",{className:"row p-1"},l.a.createElement("div",{className:"col-4",style:{backgroundColor:"#2d2c31"}},l.a.createElement("div",{className:"d-block mt-3"},l.a.createElement("h6",null,"Hello ",e))),l.a.createElement("div",{className:"col-8",style:{backgroundColor:"#2d2c31"}},l.a.createElement("header",null,l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement("div",{className:"d-block p-3"},l.a.createElement(I,null)),l.a.createElement("div",{className:"d-block p-3"},l.a.createElement(z,null))))))}function P(){var e=l.a.useState(void 0),a=Object(p.a)(e,2),t=a[0],r=a[1];return l.a.useEffect((function(){d.on("trafikHariIni",(function(e){var a=JSON.parse(e);if(a){var t=a.lastPrice,l=a.highPrice,n=a.lowPrice,c=a.volume;r({lastPrice:t,highPrice:l,lowPrice:n,volume:c})}}))}),[r]),l.a.createElement("div",{className:"row p-1",style:{backgroundColor:"#252525"}},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},l.a.createElement("div",{className:"d-block mt-2"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Harga Terakhir")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,t?t.lastPrice:0)))),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},l.a.createElement("div",{className:"d-block mt-2"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Tertinggi")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,t?t.highPrice:0)))),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},l.a.createElement("div",{className:"d-block mt-2"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Volume")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,t?t.volume:0)))),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},l.a.createElement("div",{className:"d-block mt-1"},l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,"Terendah")),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",null,t?t.lowPrice:0)))))}function F(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(P,null)))}function R(){var e=Object(b.c)((function(e){return e.storeHistory})).Grafik;return l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",{className:"text-white"},l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"3",align:"center",style:{backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},"PERDAGANGAN TERKINI")),l.a.createElement("tr",{style:{fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"JUMLAH"),l.a.createElement("td",null,"WAKTU"))),l.a.createElement("tbody",{className:"text-white"},e?e.length<=0?l.a.createElement("tr",null,l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-")):e.reverse().flatMap((function(e){return"JUAL"===e.tipeHistori.toUpperCase()?l.a.createElement("tr",null,l.a.createElement("td",{className:"text-danger",style:{fontSize:"smaller",wordBreak:"break-word"}},e.latestHarga),l.a.createElement("td",{className:"text-white",style:{fontSize:"smaller",wordBreak:"break-word"}},e.jumlahDeal?e.jumlahDeal:0),l.a.createElement("td",{className:"text-white",style:{fontSize:"smaller",wordBreak:"break-word"}},new Date(e.createdAt).toLocaleTimeString()+" "+new Date(e.createdAt).toLocaleDateString())):"BELI"===e.tipeHistori.toUpperCase()?l.a.createElement("tr",null,l.a.createElement("td",{className:"text-success",style:{fontSize:"smaller",wordBreak:"break-word"}},e.latestHarga),l.a.createElement("td",{className:"text-white",style:{fontSize:"smaller",wordBreak:"break-word"}},e.jumlahDeal?e.jumlahDeal:0),l.a.createElement("td",{className:"text-white",style:{fontSize:"smaller",wordBreak:"break-word"}},new Date(e.createdAt).toLocaleTimeString()+" "+new Date(e.createdAt).toLocaleDateString())):l.a.createElement("tr",null,l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"))})):l.a.createElement("tr",null,l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"),l.a.createElement("td",{style:{fontSize:"smaller",wordBreak:"break-word"}},"-"))))}var M=t(75),G=t(73),V=t(70),W=t.n(V),K=[{time:"2018-10-19",open:180.34,high:180.99,low:170.57,close:172.85},{time:"2018-10-22",open:180.82,high:181.4,low:177.56,close:178.75},{time:"2018-10-23",open:180.34,high:182.19,low:170.57,close:179.85},{time:"2018-10-24",open:180.82,high:181.4,low:177.56,close:180.75}],_=function(e){Object(M.a)(t,e);var a=Object(G.a)(t);function t(e){var r,l;return Object(T.a)(this,t),(l=a.call(this,e)).state={options:(r={alignLabels:!0,timeScale:{rightOffset:15,barSpacing:10,fixLeftEdge:!0,lockVisibleTimeRangeOnResize:!0,rightBarStaysOnScroll:!0,borderVisible:!1,borderColor:"#fff000",visible:!0,timeVisible:!0,secondsVisible:!1},position:"right",mode:6,autoScale:!1,invertScale:!0},Object(N.a)(r,"alignLabels",!1),Object(N.a)(r,"borderVisible",!1),Object(N.a)(r,"borderColor","#555ffd"),Object(N.a)(r,"scaleMargins",{top:.3,bottom:.25}),r),candlestickSeries:[{data:K}]},l}return Object(J.a)(t,[{key:"render",value:function(){var e;return l.a.createElement(W.a,(e={options:this.state.options,darkTheme:!0,autoWidth:!0,autoHeight:!0,candlestickSeries:this.state.candlestickSeries},Object(N.a)(e,"autoWidth",!0),Object(N.a)(e,"height",320),e))}}]),t}(r.Component);t(133);function Y(){var e=(localStorage.getItem("token")?Object(u.a)(localStorage.getItem("token")):{}).id,a=Object(C.g)(),t=Object(b.b)();return l.a.useEffect((function(){d.emit("soketAuth",JSON.stringify({token:localStorage.getItem("token")})),e&&(d.on("infoUser".concat(e),(function(r){var l=JSON.parse(r);l.infoUser?(t(function(e){return{type:"setInfoUser",User:e.User}}({User:l})),l.infoUser._id===e&&l.message&&h.a.success(l.message)):A.onLogout((function(){localStorage.clear(),a.push("/trading")}))})),d.on("latestTrade",(function(e){var a,r=JSON.parse(e).latestTrade,l=r?r.filter((function(e){return e.tipeHistori?e:null})):[],n=[],c=[],o=[];l.forEach((function(e){n.push(new Date(e.createdAt).toLocaleTimeString()+" "+new Date(e.createdAt).toLocaleDateString()),"BELI"===e.tipeHistori.toUpperCase()?c.push(e.latestHarga):o.push(e.latestHarga)})),t((a={LabelNew:n,Data:r,DataBeli:c,lastBeli:c[c.length-1],DataJual:o,lastJual:o[o.length-1]},Object(O.a)({type:"setChart"},a)))})))}),[t,e,a]),l.a.createElement(o.a,{style:{fontSize:"smaller",wordBreak:"break-word"},fluid:!0},l.a.createElement(H,null),l.a.createElement(F,null),l.a.createElement(s.a,{className:"p-1"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6",style:{padding:0}},l.a.createElement(_,null)),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6",style:{backgroundColor:"#252525"}},l.a.createElement("div",{className:"row d-flex justify-content-between"},l.a.createElement("div",{className:"col-6 col-sm-12 col-xs-12 col-md-6 p-1"},l.a.createElement("table",{className:"table table-borderless",style:{margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("caption",{className:"p-1"},"Daftar Beli"),l.a.createElement("thead",null,l.a.createElement("tr",{className:"text-white"},l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"JUMLAH"),l.a.createElement("td",null,"TOTAL")))),l.a.createElement(L,{Judul:"BELI"})),l.a.createElement("div",{className:"col-6 col-sm-12 col-xs-12 col-md-6 p-1"},l.a.createElement("table",{className:"table table-borderless",style:{margin:0,backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("caption",{className:"p-1"},"Daftar Jual"),l.a.createElement("tr",{className:"text-white"},l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"JUMLAH"),l.a.createElement("td",null,"TOTAL"))),l.a.createElement(j,{Judul:"JUAL"}))),l.a.createElement("div",{className:"row m-1",style:{backgroundColor:"#252525"}},l.a.createElement("div",{className:"col-6"},l.a.createElement(x,null)),l.a.createElement("div",{className:"col-6"},l.a.createElement(B,null))))),l.a.createElement("div",{className:"row",style:{height:"100%"}},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-1",style:{padding:0}},l.a.createElement(U,null)),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-1",style:{backgroundColor:"#252525",padding:0}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",{className:"text-white"},l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"3",align:"center",style:{backgroundColor:"#2d2c31",fontSize:"smaller",wordBreak:"break-word"}},"LIST CRYPTO")),l.a.createElement("tr",{style:{fontSize:"smaller",wordBreak:"break-word"}},l.a.createElement("td",null,"PAIR"),l.a.createElement("td",null,"HARGA"),l.a.createElement("td",null,"VOLUME"))),l.a.createElement("tbody",{className:"text-white"},l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("div",{className:"d-block text-justify",style:{fontSize:"smaller",wordBreak:"break-word"}},"BTC/CODEO")),l.a.createElement("td",null,l.a.createElement("div",{className:"d-block text-justify",style:{fontSize:"smaller",wordBreak:"break-word"}},"12,123,101")),l.a.createElement("td",null,l.a.createElement("div",{className:"d-block text-justify",style:{fontSize:"smaller",wordBreak:"break-word"}},"123,123,456,789,101")))))),l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6"},l.a.createElement(R,null))))))}var $=t(15);t(67);function q(){var e=Object(C.g)(),a=l.a.useState({email:"",password:""}),t=Object(p.a)(a,2),r=t[0],n=t[1],c=function(e){n(Object(O.a)(Object(O.a)({},r),{},Object(N.a)({},e.target.name,e.target.value)))};return l.a.createElement("form",{className:"posisiForm",onSubmit:function(a){a.preventDefault(),function(e){var a=e.DataLogin,t=e.history;S()({url:"".concat("https://tradingtes.herokuapp.com","/user/login"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(O.a)({},a)}).then((function(e){var a=e.data;A.onLogin((function(){h.a.success(a.message),localStorage.setItem("token",a.token),t.push("/trading/dashboard")}))})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,h.a.error(a)}))}({DataLogin:r,history:e})}},l.a.createElement("h5",{align:"center"},"Login Trade"),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("label",{for:"email"},l.a.createElement("small",null,"Email")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[0],value:Object.values(r)[0],onChange:c}),l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Password")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[1],value:Object.values(r)[1],onChange:c}),l.a.createElement("div",{className:"d-block mt-2",align:"right"},l.a.createElement($.b,{to:"/trading/daftar",className:"m-2"},"Daftar"),l.a.createElement("button",{className:"btn btn-outline-success"},l.a.createElement("small",null,"Login"))))))}function Q(){return l.a.createElement(q,null)}function X(){var e=Object(C.g)(),a=l.a.useState({username:"",email:"",password:""}),t=Object(p.a)(a,2),r=t[0],n=t[1],c=function(e){n(Object(O.a)(Object(O.a)({},r),{},Object(N.a)({},e.target.name,e.target.value)))};return l.a.createElement("form",{className:"posisiForm",onSubmit:function(a){a.preventDefault(),function(e){var a=e.DataDaftar,t=e.history;S()({url:"".concat("https://tradingtes.herokuapp.com","/user"),method:"POST",headers:{jwttoken:localStorage.getItem("token")},data:Object(O.a)({},a)}).then((function(e){var a=e.data;h.a.success(a.message),t.push("/trading")})).catch((function(e){var a="";a=void 0===e.response?e.message:e.response.data.message,h.a.error(a)}))}({DataDaftar:r,history:e})}},l.a.createElement("h5",{align:"center"},"Daftar Trade"),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Username")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[0],value:Object.values(r)[0],onChange:c}),l.a.createElement("label",{for:"email"},l.a.createElement("small",null,"Email")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[1],value:Object.values(r)[1],onChange:c}),l.a.createElement("label",{for:"password"},l.a.createElement("small",null,"Password")),l.a.createElement("input",{type:"text",className:"form-control",name:Object.keys(r)[2],value:Object.values(r)[2],onChange:c}),l.a.createElement("div",{className:"d-block mt-2",align:"right"},l.a.createElement($.b,{to:"/trading"},"LOGIN"),l.a.createElement("button",{className:"btn btn-outline-success"},l.a.createElement("small",null,"DAFTAR"))))))}function Z(){return l.a.createElement(X,null)}var ee=t(74);function ae(e){var a=e.component,t=Object(ee.a)(e,["component"]);return l.a.createElement(C.b,Object.assign({},t,{render:function(e){return A.isLogin?l.a.createElement(a,t):l.a.createElement(C.a,{to:{pathname:"/trading",state:{from:e.location}}})}}))}var te=Object(C.h)((function(){var e=Object(C.g)();return l.a.useEffect((function(){localStorage.getItem("token")?A.onLogin((function(){e.push("/trading/dashboard")})):A.onLogout((function(){e.push("/trading")}))}),[e]),l.a.createElement(C.d,null,l.a.createElement(C.b,{exact:!0,path:"/trading"},l.a.createElement(Q,null)),l.a.createElement(C.b,{path:"/trading/daftar"},l.a.createElement(Z,null)),l.a.createElement(ae,{path:"/trading/dashboard",component:Y}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(134);var re=t(18),le=t(71),ne=t(72),ce={TradeJual:{market:[]},TradeBeli:{market:[]},TradeMe:{market:[]},TradeAll:{market:[]}};function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TradeJual":return Object(O.a)(Object(O.a)({},e),{},{TradeJual:Object(O.a)(Object(O.a)({},e.TradeJual),{},{market:a.market})});case"TradeBeli":return Object(O.a)(Object(O.a)({},e),{},{TradeBeli:Object(O.a)(Object(O.a)({},e.TradeBeli),{},{market:a.market})});case"TradeAll":return Object(O.a)(Object(O.a)({},e),{},{TradeMe:Object(O.a)(Object(O.a)({},e.TradeMe),{},{market:a.market})});case"LiveMarket":return Object(O.a)(Object(O.a)({},e),{},{TradeAll:Object(O.a)(Object(O.a)({},e.TradeAll),{},{market:a.market})});default:return Object(O.a)({},e)}}var se={User:null,setForm:{beli:{tipe:"",jumlah:"",harga:""},jual:{tipe:"",jumlah:"",harga:""}},myOrderTrade:{market:[]}};function me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"setInfoUser":return Object(O.a)(Object(O.a)({},e),{},{User:a.User});case"setForm":return Object(O.a)(Object(O.a)({},e),{},{setForm:Object(O.a)(Object(O.a)({},e.setForm),{},{beli:Object(O.a)(Object(O.a)({},e.setForm.beli),{},{tipe:a.tipe,jumlah:a.jumlah,harga:a.harga}),jual:Object(O.a)(Object(O.a)({},e.setForm.jual),{},{tipe:a.tipe,jumlah:a.jumlah,harga:a.harga})})});case"setFormJual":return Object(O.a)(Object(O.a)({},e),{},{setForm:Object(O.a)(Object(O.a)({},e.setForm),{},{jual:Object(O.a)(Object(O.a)({},e.setForm.jual),{},{tipe:a.tipe,jumlah:a.jumlah,harga:a.harga})})});case"setFormBeli":return Object(O.a)(Object(O.a)({},e),{},{setForm:Object(O.a)(Object(O.a)({},e.setForm),{},{beli:Object(O.a)(Object(O.a)({},e.setForm.beli),{},{tipe:a.tipe,jumlah:a.jumlah,harga:a.harga})})});case"OrderHistory":return Object(O.a)(Object(O.a)({},e),{},{myOrderTrade:Object(O.a)(Object(O.a)({},e.myOrderTrade),{},{market:a.market?a.market:[]})});default:return Object(O.a)({},e)}}var ie={Grafik:[],LabelNew:[],DataBeli:[],DataJual:[],lastJual:0,lastBeli:0,highPrice:0,lowPrice:0,lastPriceAll:0};function ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"setChart":return Object(O.a)(Object(O.a)({},e),{},{Grafik:a.Data,LabelNew:"object"===typeof a.LabelNew?a.LabelNew.reverse().filter((function(e,a){return a<=10?e:null})):[],DataBeli:"object"===typeof a.DataBeli?a.DataBeli.reverse().filter((function(e,a){return a<=10?e:null})):[],lastBeli:a.lastBeli,DataJual:"object"===typeof a.DataJual?a.DataJual.reverse().filter((function(e,a){return a<=10?e:null})):[],lastJual:a.lastJual});case"setDataJual":return Object(O.a)(Object(O.a)({},e),{},{DataBeli:a.Data,lastBeli:a.last});case"setDataBeli":return Object(O.a)(Object(O.a)({},e),{},{DataJual:a.Data,lastJual:a.last});default:return Object(O.a)({},e)}}function de(e){var a=e.children,t=Object(re.combineReducers)({TradeState:oe,UserState:me,storeHistory:ue}),r=Object(re.createStore)(t,Object(le.composeWithDevTools)(Object(re.applyMiddleware)(ne.reduxSoldierMiddleware)));return l.a.createElement(b.a,{store:r},a)}c.a.render(l.a.createElement($.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(de,null,l.a.createElement(te,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,a,t){},76:function(e,a,t){e.exports=t(135)},81:function(e,a,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.73436309.chunk.js.map