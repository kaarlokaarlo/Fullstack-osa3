(this["webpackJsonposa2.b"]=this["webpackJsonposa2.b"]||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(14),r=t(2),u=t(13),c=t.n(u),l=(t(20),t(0)),o=t.n(l),i=function(e){var n=e.add,t=e.newC,a=e.handle;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"filter shown with"),o.a.createElement("input",{value:t,onChange:a}))},m=function(e){var n=e.add,t=e.newN,a=e.handle,r=e.newNu,u=e.handleNu;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"name:"),o.a.createElement("input",{value:t,onChange:a}),o.a.createElement("div",null,o.a.createElement("div",null,"number:"),o.a.createElement("input",{value:r,onChange:u}),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add"))))},d=function(e){var n=e.id,t=e.name,a=e.handleClick;return o.a.createElement("button",{name:t,id:n,onClick:a},"delete")},f=function(e){var n=e.pers,t=e.newC,a=e.handleClick;return""!==t?n.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())})).map((function(e){return o.a.createElement("div",{key:e.name},o.a.createElement("p",null,e.name," ",e.number,o.a.createElement(d,{name:e.name,id:e.id,handleClick:a})))})):n.map((function(e){return o.a.createElement("div",{key:e.id},o.a.createElement("p",null," ",e.name," ",e.number,o.a.createElement(d,{name:e.name,id:e.id,handleClick:a})))}))},s=t(3),b=t.n(s),h="/api/persons/",p=function(){return b.a.get(h)},v=function(e){return b.a.post(h,e)},E=function(e){return b.a.delete("".concat(h).concat(e))},w=function(e,n){var t=h+e;return b.a.put(t,n)},g=function(){var e=Object(l.useState)([]),n=Object(r.a)(e,2),t=n[0],u=n[1],c=Object(l.useState)(""),d=Object(r.a)(c,2),s=d[0],b=d[1],h=Object(l.useState)(""),g=Object(r.a)(h,2),C=g[0],j=g[1],O=Object(l.useState)(""),k=Object(r.a)(O,2),y=k[0],S=k[1],L=Object(l.useState)(null),N=Object(r.a)(L,2),T=N[0],x=N[1],D=Object(l.useState)(!1),I=Object(r.a)(D,2),A=I[0],B=I[1];Object(l.useEffect)((function(){p().then((function(e){u(e.data)}))}),[]);return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement((function(e){var n=e.message,t={color:"green",fontSize:"20px",background:"lightgray",borderStyle:"solid",padding:"10px",borderRadius:"5px",marginBottom:"10px"};return e.style&&(t.color="red"),null===n?null:o.a.createElement("div",{style:t},o.a.createElement("br",null),o.a.createElement("em",null,n))}),{message:T,style:A}),o.a.createElement(i,{add:function(e){e.preventDefault(),S("")},handle:function(e){S(e.target.value)},newC:y}),o.a.createElement("h2",null,"Add a new"),o.a.createElement(m,{add:function(e){e.preventDefault();var n={name:s,number:C};if(t.map((function(e){return e.name.toLowerCase()})).includes(n.name.toLowerCase())){if(!C.isEmpty&&window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one? "))){var r=t.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})),c=r.id,l=Object(a.a)({},r,{number:n.number});w(c,l).then((function(e){u(t.map((function(n){return n.id!==c?n:e.data}))),x("Updated ".concat(r.name,"'s number")),b(""),j(""),setTimeout((function(){x(null)}),5e3)})).catch((function(e){x("Information of ".concat(r.name," has already been removed from server"),1),B(!0),setTimeout((function(){x(null),B(!1)}),5e3)}))}}else v(n).then((function(e){u(t.concat(e.data)),x("Added ".concat(n.name)),b(""),j(""),setTimeout((function(){x(null)}),5e3)})).catch((function(e){x(e.response.data),B(!0),setTimeout((function(){x(null),B(!1)}),5e3)}))},newN:s,handle:function(e){b(e.target.value)},newNu:C,handleNu:function(e){j(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(f,{handleClick:function(e){if(window.confirm("Delete "+e.target.name+"?")){var n=e.target;console.log(e.target.id),E(e.target.id).then((function(e){var a=t.filter((function(e){return e.id!==n.id}));u(a),x("Deleted ".concat(n.name)),setTimeout((function(){x(null)}),5e3)})).catch((function(e){x("Information of ".concat(n.name," has already been removed from server")),B(!0),setTimeout((function(){x(null),B(!1)}),5e3)}))}},pers:t,newC:y}))};n.default=g;c.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5c49d8f8.chunk.js.map