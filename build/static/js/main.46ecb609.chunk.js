(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{40:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(16),a=t.n(c),r=t(17),u=t(3),o=t(2),i=t(5),s=t.n(i),l="http://localhost:3001/api/persons",d=function(){return s.a.get(l).then((function(e){return e.data}))},j=function(e){return s.a.post(l,e).then((function(e){return e.data}))},b=function(e,n){return s.a.put("".concat(l,"/").concat(e),n).then((function(e){return console.log(e.data),e.data}))},f=function(e){return s.a.delete("".concat(l,"/").concat(e.id)).then((function(e){return e.data}))},h=(t(40),t(0)),m=function(e){var n=e.search,t=e.func;return Object(h.jsx)("input",{value:n,onChange:t})},O=function(e){var n=e.addPerson,t=e.newName,c=e.handlenewName,a=e.newNumber,r=e.handleNewNumber;return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:t,onChange:c})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:a,onChange:r})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},v=function(e){var n=e.person,t=e.remove;return Object(h.jsxs)("div",{children:[n.name,": ",n.number," ",Object(h.jsx)("button",{onClick:t,children:"Delete"})]})},p=function(e){var n=e.personsView,t=e.removePerson;return Object(h.jsx)("div",{children:n.map((function(e){return Object(h.jsx)(v,{person:e,remove:function(){return t(e)}},e.id)}))})},w=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"good",children:n})},x=function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)(Object(r.a)(t)),i=Object(u.a)(a,2),s=i[0],l=i[1],v=Object(o.useState)(""),x=Object(u.a)(v,2),g=x[0],N=x[1],y=Object(o.useState)(""),S=Object(u.a)(y,2),P=S[0],k=S[1],C=Object(o.useState)(""),D=Object(u.a)(C,2),E=D[0],T=D[1],J=Object(o.useState)(null),V=Object(u.a)(J,2),B=V[0],F=V[1];Object(o.useEffect)((function(){d().then((function(e){c(e),l(e)}))}),[]),console.log("render",t.length,"persons");return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(w,{message:B}),Object(h.jsx)("label",{htmlFor:"name",children:"filter shown with"}),Object(h.jsx)(m,{search:E,func:function(e){e.preventDefault();var n=t.filter((function(n){return n.name.includes(e.target.value)}));l(n),T(e.target.value)}}),Object(h.jsx)("h2",{children:"add a new"}),Object(h.jsx)(O,{addPerson:function(e){e.preventDefault();var n=!1,a={name:g,number:P},r=s.find((function(e){return e.name===g}));t.forEach((function(e){e.name===a.name&&(window.confirm("".concat(a.name," is already added to phonebook, replace the old number with a new one?"))&&(a.id=e.id,b(r.id,a).then(void d().then((function(e){c(e),l(e)})),F("'".concat(a.name,"''s nubmer was replaced succesfully")),setTimeout((function(){F(null)}),5e3))),n=!0)})),!0!==n&&j(a).then((function(e){c(t.concat(e)),l(t.concat(e)),N(""),k(""),F("'".concat(a.name,"' was added successfully")),setTimeout((function(){F(null)}),5e3)}))},newName:g,handlenewName:function(e){N(e.target.value)},newNumber:P,handleNewNumber:function(e){k(e.target.value)}}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(p,{personsView:s,removePerson:function(e){window.confirm("Do you really want do delete ".concat(e.name," ?"))&&f(e).then((function(){return l(s.filter((function(n){return n.id!==e.id})))}),F("Person '".concat(e.name,"' was deleted succesfully")),setTimeout((function(){F(null)}),5e3))}})]})};a.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.46ecb609.chunk.js.map