(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),o=t.n(r),i=(t(9),t(1)),s="3a73743ddeb58b3d9608d31fc33cab8c",l="https://api.openweathermap.org/data/2.5/";var m=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),m=Object(i.a)(o,2),u=m[0],d=m[1];return c.a.createElement("div",{className:"undefined"!=typeof u.main&&u.main.temp>15?"app warm":"app"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Enter Location...",onChange:function(e){return r(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(t,"&units=metric&APPID=").concat(s)).then((function(e){return e.json()})).then((function(e){d(e),r("")}))}})),"undefined"!=typeof u.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},u.name,", ",u.sys.country),c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date)),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(u.main.temp),"\xb0C"),c.a.createElement("div",{className:"weather"},u.weather[0].main)))):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.0ee46c08.chunk.js.map