(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),l=t(2),o=function(e){var n=e.name,t=e.number,a=e.deletePerson;return r.a.createElement("div",null,n," ",t,r.a.createElement("button",{onClick:a}," Delete "),r.a.createElement("br",null))},i=function(e){var n=e.value,t=e.eventHandler;return r.a.createElement("div",null,"Filter Shown With : ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.addNewPerson,t=e.newPerson,a=e.addPerson,u=e.newNumber,c=e.addNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name : ",r.a.createElement("input",{value:t,onChange:a}),r.a.createElement("br",null),"number: ",r.a.createElement("input",{value:u,onChange:c})),r.a.createElement("button",{type:"submit"},"ADD"))},d=t(3),s=t.n(d),f="/api/persons",b=function(){return s.a.get(f).then((function(e){return e.data}))},h=function(e){return s.a.post(f,e).then((function(e){return e.data}))},v=function(e){return s.a.delete("".concat(f,"/").concat(e)).then((function(e){return console.log(e.data),e.data}))},E=function(e,n){return s.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){var n=e.messaage;return null===n?null:r.a.createElement("div",{className:"error"},n)},g=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"errorMessage"},n)},j=(t(36),function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),d=Object(l.a)(c,2),s=d[0],f=d[1],j=Object(a.useState)(""),w=Object(l.a)(j,2),O=w[0],N=w[1],P=Object(a.useState)(""),S=Object(l.a)(P,2),k=S[0],y=S[1],C=Object(a.useState)([]),D=Object(l.a)(C,2),T=D[0],A=D[1],H=Object(a.useState)(null),J=Object(l.a)(H,2),L=J[0],x=J[1],B=Object(a.useState)(null),F=Object(l.a)(B,2),I=F[0],M=F[1];Object(a.useEffect)((function(){b().then((function(e){u(e)}))}),[]);var U=t.map((function(e){return e.name})),W=0===T.length?t:T;return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{messaage:L}),r.a.createElement(g,{message:I}),r.a.createElement("div",null,r.a.createElement(i,{value:k,eventHandler:function(e){y(e.target.value);var n=t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}));0===e.target.value.length?A([]):0===n.length?A([{name:"",number:""}]):A(n)}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m,{addNewPerson:function(e){e.preventDefault();var n={name:s,number:O};if(!1===U.includes(s))h(n).then((function(e){x("Added ".concat(n.name)),setTimeout((function(){x(null)}),2e3),u(t.concat(e))})).catch((function(e){M("".concat(n.name," has already been deleted"))}));else{window.alert("".concat(s," is already added to the phonebook replace the old number with a new one"));var a=t.find((function(e){return e.name===s}));E(a.id,n).then((function(e){x("Updated ".concat(n.name)),u(t.map((function(n){return n.id!==a.id?n:e})))})).catch((function(e){M("".concat(n.name," has already been deleted")),setTimeout((function(){M(null)}),2e3)}))}f(""),N("")},newPerson:s,addPerson:function(e){f(e.target.value)},newNumber:O,addNumber:function(e){N(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement("div",null,W.map((function(e){return r.a.createElement(o,{key:e.name,name:e.name,number:e.number,deletePerson:function(){return function(e){var n=t.find((function(n){return n.id===e}));console.log("".concat(n.name," has to be deleted")),v(e).then((function(a){var r=t.filter((function(n){return n.id!==e}));x("Deleted ".concat(n.name)),setTimeout((function(){x(null)}),2e3),u(r)})).catch((function(e){M("".concat(n.name," has already been deleted"))}))}(e.id)}})}))))});c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.34056fa0.chunk.js.map