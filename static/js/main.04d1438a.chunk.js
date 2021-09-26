(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={contactList:"ContactList_contactList__3S57V",list:"ContactList_list__2K4PC",button:"ContactList_button__2RElj"}},17:function(t,e,n){t.exports={filter:"Filter_filter__1__jF",input:"Filter_input__3K0YO"}},23:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},28:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),i=n(10),o=n.n(i),s=(n(28),n(3)),u=n(20),l=n(4),b=n(21),d=n.n(b),j=n(5),m=n(22),f=n.n(m),O=n(12),p=n(18),h=n(2),C=n(8),_=n.n(C),x=Object(l.b)("addContact",(function(t){return{payload:{name:t.name,number:t.number,id:_()()}}})),g=Object(l.b)("deleteContact"),v=Object(l.b)("filterContacts"),y=n(23),A=Object(l.c)(Object(p.a)(y),(a={},Object(O.a)(a,x,(function(t,e){return[].concat(Object(p.a)(t),[e.payload])})),Object(O.a)(a,g,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),a)),N=Object(l.c)("",Object(O.a)({},v,(function(t,e){return e.payload}))),k=Object(h.b)({items:A,filter:N}),F={key:"contacts",storage:f.a,blacklist:["filter"]},L=Object(j.g)(F,k),w=Object(l.a)({reducer:{contacts:L},middleware:function(t){return t({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}}).concat(d.a)},devTools:!1}),z=Object(j.h)(w),S=n(19),Z=n(6),J=n.n(Z),q=n(1),B=function(){var t=Object(c.useState)(""),e=Object(S.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),i=Object(S.a)(r,2),o=i[0],u=i[1],l=_.a.generate(),b=_.a.generate(),d=Object(s.c)((function(t){return t.contacts.items})),j=Object(s.b)(),m=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":u(c);break;default:return void console.error()}},f=function(){a(""),u("")};return Object(q.jsxs)("form",{className:J.a.form,children:[Object(q.jsxs)("label",{className:J.a.label,children:["Name",Object(q.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,id:l,onChange:m,className:J.a.input}),Object(q.jsxs)("label",{children:["Number",Object(q.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:o,id:b,onChange:m,className:J.a.input})]})]}),Object(q.jsx)("button",{type:"button",onClick:function(){if(d.find((function(t){return t.name===n})))return alert("".concat(n," is already in contacts")),void f();j(x({name:n,number:o})),f()},className:J.a.button,children:"Add contact"})]})},P=n(17),E=n.n(P),I=function(){var t=Object(s.b)();return Object(q.jsxs)("label",{className:E.a.filter,children:["Find contacts by name",Object(q.jsx)("input",{className:E.a.input,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(e){return t(v(e.target.value))}})]})},K=n(13),M=n.n(K),T=function(){var t=Object(s.b)(),e=Object(s.c)((function(t){var e=t.contacts,n=e.filter,a=e.items,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))}));return Object(q.jsx)("ul",{className:M.a.contactList,children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return a.length>0&&c.length>0&&Object(q.jsxs)("li",{className:M.a.list,children:[a,": ",c,Object(q.jsx)("button",{className:M.a.button,type:"button",onClick:function(){t(g(n))},children:"Delete"})]},n)}))})};var D=function(){return Object(q.jsxs)("div",{children:[Object(q.jsx)("h2",{children:"Phonebook"}),Object(q.jsx)(B,{}),Object(q.jsx)("h2",{children:"Contacts"}),Object(q.jsx)(I,{}),Object(q.jsx)(T,{})]})},R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};o.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(s.a,{store:w,children:Object(q.jsx)(u.a,{loading:null,persistor:z,children:Object(q.jsx)(D,{})})})}),document.getElementById("root")),R()},6:function(t,e,n){t.exports={form:"ContactForm_form__2IUqW",label:"ContactForm_label__3cSwc",input:"ContactForm_input__2u7Lv",button:"ContactForm_button__1xr6L"}}},[[45,1,2]]]);
//# sourceMappingURL=main.04d1438a.chunk.js.map