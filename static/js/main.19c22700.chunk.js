(this["webpackJsonpfurniture-finder"]=this["webpackJsonpfurniture-finder"]||[]).push([[0],{26:function(e,t,n){e.exports=n(51)},31:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),i=n.n(c),l=(n(31),n(2)),o=n(5),u=n.n(o),s=n(19),m=n(4),d=n(20),p=n.n(d),f=n(21);function v(){var e=Object(f.a)(["\n  width: 330px;\n  min-height: 80px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 3px 3px 5px 6px #ccc;\n  padding: 0 0.5rem;\n  margin: 0 0 1rem 0;\n  .title-price {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n    span {\n      color: #ffa118;\n    }\n  }\n  .description {\n    span {\n      color: #7aade1;\n    }\n  }\n  .delivery-days {\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  }\n"]);return v=function(){return e},e}var h=n(22).a.div(v()),y=function(e){var t,n=e.product;return r.a.createElement(h,null,r.a.createElement("div",{className:"title-price"},r.a.createElement("h3",null,n.name),r.a.createElement("span",null,"number"===typeof(t=n.price)?"IDR ".concat(t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")):t)),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,function(e,t){var n=t&&t>0?t:114;if(e.length<=n)return e;var a=e.substring(0,n);return"".concat(a.substring(0,a.lastIndexOf(" ")),"...")}(n.description)),r.a.createElement("span",null,n.furniture_style.join(", "))),r.a.createElement("div",{className:"delivery-days"},n.delivery_time," days"))};n(50);var b=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),o=Object(m.a)(i,2),d=o[0],f=o[1],v=Object(a.useState)({text:"",style:[],deliveryTime:[]}),h=Object(m.a)(v,2),b=h[0],g=h[1];Object(a.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://www.mocky.io/v2/5c9105cb330000112b649af8").then((function(e){c(e.data),f(e.data.products)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var E=function(e){var t=b.style;if(e.target.checked)t.push(e.target.name),g(Object(l.a)({},b,{style:t}));else{var n=t.indexOf(e.target.name);n>-1&&t.splice(n,1),g(Object(l.a)({},b,{style:t}))}},x=function(e){var t=b.deliveryTime;if(e.target.checked)t.push(e.target.value),g(Object(l.a)({},b,{deliveryTime:t}));else{var n=t.indexOf(e.target.value);n>-1&&t.splice(n,1),g(Object(l.a)({},b,{deliveryTime:t}))}},w=d.filter((function(e){return e.furniture_style.some((function(e){var t=!1;return b.style.length>0?b.style.forEach((function(n){n===e&&(t=!0)})):t=!0,t}))}));if(b.deliveryTime.length>0){var k=w.filter((function(e){return b.deliveryTime.some((function(t){return parseInt(t)>parseInt(e.delivery_time)}))}));w=k}return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header-menu"},r.a.createElement("input",{type:"text",placeholder:"Search Furniture",onChange:function(e){var t=e.target.value.toLowerCase();g(Object(l.a)({},b,{text:t}));var a=n.products.filter((function(e){return e.name.toLowerCase().includes(t)}));f(a)}}),r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"checkbox-styles"},n&&n.furniture_styles.map((function(e){return r.a.createElement("label",{key:e,htmlFor:e},e,r.a.createElement("input",{type:"checkbox",name:e,onChange:E}))}))),r.a.createElement("div",{className:"delivery-time-dropdown"},r.a.createElement("label",null,"1 week",r.a.createElement("input",{onChange:x,type:"checkbox",name:"oneweek",value:"7"})),r.a.createElement("label",null,"2 weeks",r.a.createElement("input",{onChange:x,type:"checkbox",name:"twoweeks",value:"14"})),r.a.createElement("label",null,"1 month",r.a.createElement("input",{onChange:x,type:"checkbox",name:"onemonth",value:"30"})),r.a.createElement("label",null,"2 months",r.a.createElement("input",{onChange:x,type:"checkbox",name:"twomonths",value:"60"}))))),r.a.createElement("div",{className:"product-container"},n&&w.map((function(e){return r.a.createElement(y,{key:e.name,product:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.19c22700.chunk.js.map