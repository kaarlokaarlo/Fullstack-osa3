(this["webpackJsonposa2.b"]=this["webpackJsonposa2.b"]||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(14),r=t(2),l=t(13),o=t.n(l),u=(t(20),t(0)),c=t.n(u),i=function(e){var n=e.add,t=e.newC,a=e.handle;return c.a.createElement("form",{onSubmit:n},c.a.createElement("div",null,"filter shown with"),c.a.createElement("input",{value:t,onChange:a}))},m=function(e){var n=e.add,t=e.newN,a=e.handle,r=e.newNu,l=e.handleNu;return c.a.createElement("form",{onSubmit:n},c.a.createElement("div",null,"name:"),c.a.createElement("input",{value:t,onChange:a}),c.a.createElement("div",null,c.a.createElement("div",null,"number:"),c.a.createElement("input",{value:r,onChange:l}),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add"))))},d=function(e){var n=e.id,t=e.name,a=e.handleClick;return c.a.createElement("button",{name:t,id:n,onClick:a},"delete")},s=function(e){var n=e.pers,t=e.newC,a=e.handleClick;return""!==t?n.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())})).map((function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("p",null,e.name," ",e.number,c.a.createElement(d,{name:e.name,id:e.id,handleClick:a})))})):n.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("p",null," ",e.name," ",e.number,c.a.createElement(d,{name:e.name,id:e.id,handleClick:a})))}))},f=t(3),b=t.n(f),h="/api/persons",v=function(){return b.a.get(h)},p=function(e){return b.a.post(h,e)},E=function(e){var n=h+e;return b.a.delete(n).then((function(e){return e.data}))},w=function(e,n){var t=h+e;return b.a.put(t,n)},g=function(){var e=Object(u.useState)([]),n=Object(r.a)(e,2),t=n[0],l=n[1],o=Object(u.useState)(""),d=Object(r.a)(o,2),f=d[0],b=d[1],h=Object(u.useState)(""),g=Object(r.a)(h,2),C=g[0],j=g[1],O=Object(u.useState)(""),k=Object(r.a)(O,2),y=k[0],S=k[1],L=Object(u.useState)(null),N=Object(r.a)(L,2),x=N[0],T=N[1],D=Object(u.useState)(!1),I=Object(r.a)(D,2),A=I[0],B=I[1];Object(u.useEffect)((function(){v().then((function(e){l(e.data)}))}),[]);return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement((function(e){var n=e.message,t=e.style,a={color:"green",fontSize:"20px",background:"lightgray",borderStyle:"solid",padding:"10px",borderRadius:"5px",marginBottom:"10px"};return console.log(t),t&&(console.log("ddddasssss"),a.color="red"),null===n?null:c.a.createElement("div",{style:a},c.a.createElement("br",null),c.a.createElement("em",null,n))}),{message:x,style:A}),c.a.createElement(i,{add:function(e){e.preventDefault(),S("")},handle:function(e){S(e.target.value)},newC:y}),c.a.createElement("h2",null,"Add a new"),c.a.createElement(m,{add:function(e){e.preventDefault();var n={name:f,number:C};if(t.map((function(e){return e.name.toLowerCase()})).includes(n.name.toLowerCase())){if(!C.isEmpty&&window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one? "))){var r=t.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})),o=r.id,u=Object(a.a)({},r,{number:n.number});console.log(u),w(o,u).then((function(e){console.log(e.data),l(t.map((function(n){return n.id!==o?n:e.data}))),T("Updated ".concat(r.name,"'s number")),b(""),j(""),setTimeout((function(){T(null)}),5e3)})).catch((function(e){T("Information of ".concat(r.name," has already been removed from server"),1),B(!0),setTimeout((function(){T(null),B(!1)}),5e3)}))}}else p(n).then((function(e){l(t.concat(e.data)),T("Added ".concat(n.name)),b(""),j(""),setTimeout((function(){T(null)}),5e3)}))},newN:f,handle:function(e){b(e.target.value)},newNu:C,handleNu:function(e){j(e.target.value)}}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(s,{handleClick:function(e){if(window.confirm("Delete "+e.target.name+"?")){var n=e.target;E(e.target.id).then((function(e){var a=t.filter((function(e){return e.id!=n.id}));l(a),T("Deleted ".concat(n.name)),setTimeout((function(){T(null)}),5e3)})).catch((function(e){T("Information of ".concat(n.name," has already been removed from server")),B(!0),setTimeout((function(){T(null),B(!1)}),5e3)}))}},pers:t,newC:y}))};n.default=g;o.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e7938311.chunk.js.map