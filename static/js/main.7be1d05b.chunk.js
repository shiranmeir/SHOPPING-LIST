(this["webpackJsonpmy-shopping"]=this["webpackJsonpmy-shopping"]||[]).push([[0],{206:function(e,t,c){},252:function(e,t,c){},352:function(e,t,c){},361:function(e,t,c){},362:function(e,t,c){},363:function(e,t,c){},364:function(e,t,c){},366:function(e,t,c){},367:function(e,t,c){},368:function(e,t,c){"use strict";c.r(t);var n=c(7),r=c(0),i=c(35),a=c.n(i),s=c(101),j=c(38),d=c(43),l=c(375),b=c(377),o=(c(206),c(130),function(){Object(d.b)();var e=Object(d.c)((function(e){return e.items})).filter((function(e){return!0===e.received}));return Object(n.jsx)("div",{className:"received",children:Object(n.jsx)(l.a,{className:"received-board",children:Object(n.jsx)(b.b,{dataSource:e,bordered:!0,renderItem:function(e){return Object(n.jsx)(b.b.Item,{children:Object(n.jsxs)("div",{className:"received-list",children:[Object(n.jsx)("div",{children:e.name}),Object(n.jsx)("div",{children:e.store}),Object(n.jsxs)("div",{children:[e.price,"$"]}),Object(n.jsx)("div",{children:e.date})]})})}})})})}),u=c(1),m=c(6),O=c(372),h=c(373),x=c(376),v=c(371),f=c(56),p=(c(252),{required:"${label} is required!",types:{number:"Not a validate number!"},number:{range:"${label} must be between ${min} and ${max}"}}),N=function(){var e=Object(d.b)(),t=(Object(d.c)((function(e){return e.newItemAdded})),Object(r.useState)()),c=Object(m.a)(t,2),i=c[0],a=c[1],s=O.a.useForm(),j=Object(m.a)(s,1)[0];console.log(i);return Object(n.jsxs)(O.a,{form:j,layout:"vertical",name:"nest-messages",onFinish:function(t){var c=Object(u.a)(Object(u.a)({},t),{},{date:t.date.format("DD-MM-YYYY")});a(c),e({type:"ADD",item:c}),j.resetFields()},validateMessages:p,requiredMark:!1,children:[Object(n.jsx)(O.a.Item,{name:["name"],label:"Item Name",rules:[{required:!0}],children:Object(n.jsx)(h.a,{})}),Object(n.jsx)(O.a.Item,{name:["store"],label:"Online Store",rules:[{required:!0}],children:Object(n.jsx)(h.a,{})}),Object(n.jsx)(O.a.Item,{name:["price"],label:"Item Price",rules:[{type:"number",min:0,required:!0}],children:Object(n.jsx)(x.a,{})}),Object(n.jsx)(O.a.Item,{label:"Delivery Date",name:["date"],rules:[{required:!0}],children:Object(n.jsx)(v.a,Object(u.a)({},{rules:[{type:"object",required:!0,message:"Please select time!"}]}))}),Object(n.jsx)(O.a.Item,{children:Object(n.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})},I=c(185),g=c.n(I),y=c(370),D=(c(352),function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.items})),c=t.filter((function(e){return!1===e.received})),i=Object(r.useState)(),a=Object(m.a)(i,2),s=a[0],j=a[1];Object(r.useEffect)((function(){var e=setInterval((function(){O()}),1e4);return function(){return clearInterval(e)}}),[]);var l=c.map((function(e){return e.price})),b=l.length?l.reduce((function(e,t){return e+t})):null,o=Math.round(b*s),u=[{title:"ItemName",dataIndex:"name"},{title:"StoreName",dataIndex:"store"},{title:"ItemPrice",dataIndex:"price",render:function(e){return Object(n.jsxs)("div",{children:[e,"$"]})}},{title:"Date",dataIndex:"date"},{title:"ReceivedButton",align:"right",render:function(c){return t.length>=1?Object(n.jsx)("button",{onClick:function(){return e({type:"RECEIVED",id:c.id})},children:"Received"}):null}}],O=function(){g.a.get("https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS").then((function(e){j(e.data.rates.ILS)})).catch((function(e){console.log(e)}))};return Object(n.jsxs)("div",{className:"items-list",children:[Object(n.jsx)(y.a,{columns:u,dataSource:c,pagination:!1,showHeader:!1}),b&&Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"total",children:["Total: ",b," $ / ",o," \u20aa"]})})]})}),E=(c(361),function(){return Object(n.jsx)("div",{className:"board",children:Object(n.jsxs)(l.a,{className:"board-card",children:[Object(n.jsx)(l.a,{className:"board-list",children:Object(n.jsx)(D,{})}),Object(n.jsx)(l.a,{className:"board-form",children:Object(n.jsx)(N,{})})]})})}),S=c(9),_=(c(362),function(){Object(d.b)();var e=Object(d.c)((function(e){return e.items})).filter((function(e){return!1===e.received})).reduce((function(e,t){return e[t.store]=[].concat(Object(S.a)(e[t.store]||[]),[t]),e}),{});return Object(n.jsx)(l.a,{className:"store",children:Object.keys(e).map((function(t,c){return Object(n.jsxs)("div",{className:"store-list",children:[Object(n.jsx)("div",{className:"store-list-title",children:t}),e[t].map((function(e){return Object(n.jsxs)("div",{className:"store-list-item",children:[Object(n.jsx)("div",{children:e.name}),Object(n.jsxs)("div",{children:[e.price,"$"]})]})}))]},c)}))})}),w=c(142),k=(c(363),w.a.TabPane);function q(e){console.log(e)}var $=function(){return Object(n.jsx)("div",{className:"home",children:Object(n.jsxs)(w.a,{defaultActiveKey:"1",onChange:q,children:[Object(n.jsx)(k,{tab:"My List",children:Object(n.jsx)(E,{})},"1"),Object(n.jsx)(k,{tab:"My Stores",children:Object(n.jsx)(_,{})},"2")]})})};c(364);function M(){return Object(n.jsxs)("header",{className:"navbar",children:[Object(n.jsx)("div",{className:"navbar-title",children:"myShop."}),Object(n.jsxs)("div",{className:"navbar-links",children:[Object(n.jsx)(s.b,{className:"link",to:"/",children:"Home"}),Object(n.jsx)(s.b,{className:"link",to:"/received",children:"Received"})]})]})}c(366);var R=function(){return Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(s.a,{children:[Object(n.jsx)(M,{}),Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{path:"/received",component:o}),Object(n.jsx)(j.b,{path:"/",component:$}),Object(n.jsx)(j.b,{exact:!0,path:"/",component:$}),Object(n.jsx)(j.a,{to:"/"})]})]})})},T=c(108),L=c(374),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":var c={id:Object(L.a)(),name:t.item.name,store:t.item.store,price:t.item.price,date:t.item.date,received:!1};return Object(u.a)(Object(u.a)({},e),{},{items:e.items.concat(c)});case"RECEIVED":var n=Object(S.a)(e.items),r=e.items.findIndex((function(e){return e.id===t.id}));return n[r]=Object(u.a)(Object(u.a)({},n[r]),{},{received:!n[r].received}),Object(u.a)(Object(u.a)({},e),{},{items:n});default:return e}},C=(c(367),Object(T.b)(A,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));a.a.render(Object(n.jsx)(d.a,{store:C,children:Object(n.jsx)(R,{})}),document.getElementById("root"))}},[[368,1,2]]]);
//# sourceMappingURL=main.7be1d05b.chunk.js.map