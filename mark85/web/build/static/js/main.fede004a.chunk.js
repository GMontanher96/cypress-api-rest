(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(n,e,t){n.exports=t.p+"static/media/logo.fc82b1a9.svg"},60:function(n,e,t){n.exports=t.p+"static/media/avatar.6274be57.svg"},62:function(n,e,t){n.exports=t(89)},89:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(51),i=t.n(o),c=t(11),l=t(2),s=t(3);function u(){var n=Object(l.a)(['\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box\n  }\n\n  *:focus {\n    outline: 0;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  body {\n    background-color: #121214;\n    color: #fff;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font-family: "Roboto Slab", serif;\n    font-size: 16px;\n  }\n\n  .form-input {\n    margin-top: 8px;\n    width: 100%;\n  }\n\n  .alert {\n    text-align: left;\n    margin: 0px 0px 10px 10px !important;\n  }\n\n  .alert-error {\n    color: #c53030 !important;\n  }\n\n  h1, h2, h3, h4, h5, h6, strong {\n    font-weight: 500;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  ul {\n    list-style: none;\n  }\n']);return u=function(){return n},n}var d=Object(s.a)(u()),m=t(20),p=t(18),f=t(7),b=t.n(f),g=t(14),v=t(5),x=t(55),h=t.n(x).a.create({baseURL:"http://localhost:3333"}),E=Object(a.createContext)({}),O=function(n){var e=n.children,t=Object(a.useState)((function(){var n=localStorage.getItem("@Mark85:token"),e=localStorage.getItem("@Mark85:user");return n&&e?(h.defaults.headers.authorization="".concat(n),{token:n,user:JSON.parse(e)}):{}})),o=Object(v.a)(t,2),i=o[0],c=o[1],l=Object(a.useCallback)(function(){var n=Object(g.a)(b.a.mark((function n(e){var t,a,r,o,i,l;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.email,a=e.password,n.next=3,h.post("sessions",{email:t,password:a});case 3:r=n.sent,o=r.data,i=o.user,l=o.token,localStorage.setItem("@Mark85:token",l),localStorage.setItem("@Mark85:user",JSON.stringify(i)),h.defaults.headers.authorization="".concat(l),c({user:i,token:l});case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[]),s=Object(a.useCallback)((function(){localStorage.removeItem("@Mark85:token"),localStorage.removeItem("@Mark85:user"),c({})}),[]),u=Object(a.useCallback)((function(n){localStorage.setItem("@Mark85:user",JSON.stringify(n)),c({token:i.token,user:n})}),[c,i.token]);return r.a.createElement(E.Provider,{value:{user:i.user,signIn:l,signOut:s,updateUser:u}},e)};function y(){return Object(a.useContext)(E)}var j=function(n){var e=n.isPrivate,t=void 0!==e&&e,a=n.component,o=Object(p.a)(n,["isPrivate","component"]),i=y().user;return r.a.createElement(m.b,Object.assign({},o,{render:function(n){var e=n.location;return t===!!i?r.a.createElement(a,null):r.a.createElement(m.a,{to:{pathname:t?"/":"/tasks",state:{form:e}}})}}))},k=t(6),w=t(23),S=t(8);function N(){var n=Object(l.a)(["\n\n  .notice {\n    text-align: left;\n    margin-bottom: 1rem;\n    align-items: center;\n    display: flex;\n    width: 100%;\n    padding: 1rem;\n    border-radius: 10px;\n\n    svg {\n      margin-right: 0.5rem;\n      font-size: 4rem;\n    }\n  }\n\n  .info {\n    background: #ebf8ff;\n    color: #3172b7;\n  }\n\n  .error {\n    background: #fddede;\n    color: #c53030;\n  }\n\n  .success {\n    background: #e6fffa;\n    color: #2e656a;\n  }\n\n"]);return N=function(){return n},n}var C=s.c.div(N()),z=function(n){n.children;var e=n.display,t=n.message,a=n.type;Object(p.a)(n,["children","display","message","type"]);return r.a.createElement("div",null,e&&r.a.createElement(C,{className:"notice-container"},r.a.createElement("div",{className:"notice ".concat(a)},r.a.createElement(k.a,null)," ",r.a.createElement("p",null,t))))};function I(n){var e={};return n.inner.forEach((function(n){e[n.path]=n.message})),e}var M=t(25),F=t.n(M),q=t(31);function _(){var n=Object(l.a)(['\n  position: relative;\n\n  span {\n    width: 160px;\n    background: #404596;\n    color: #121214;\n    padding: 8px;\n    border-radius: 4px;\n    font-size: 14px;\n    font-weight: 500;\n    visibility: hidden;\n    text-align: center;\n    opacity: 0;\n    transition: opacity 0.4s;\n\n    position: absolute;\n    bottom: calc(100% + 12px);\n    left: 50%;\n    transform: translateX(-50%);\n\n    &::before {\n      content: "";\n      position: absolute;\n      top: 100%;\n      left: 50%;\n      transform: translateX(-50%);\n      border-style: solid;\n      border-color: #404596 transparent;\n      border-width: 6px 6px 0 6px;\n    }\n  }\n\n  &:hover span {\n    opacity: 1;\n    visibility: visible;\n  }\n']);return _=function(){return n},n}var J=s.c.div(_()),R=function(n){var e=n.title,t=n.className,a=n.children;return r.a.createElement(J,{className:t},a,r.a.createElement("span",null,e))};function P(){var n=Object(l.a)(["\n  height: 20px;\n  margin-left: 16px;\n  svg {\n    margin: 0;\n  }\n\n  span {\n    background: #c53030;\n    color: #f4ede8;\n\n    &::before {\n      border-color: #c53030 transparent;\n    }\n  }\n"]);return P=function(){return n},n}function D(){var n=Object(l.a)(["\n      color: #404596;\n    "]);return D=function(){return n},n}function B(){var n=Object(l.a)(["\n      color: #404596;\n      border-color: #404596;\n    "]);return B=function(){return n},n}function T(){var n=Object(l.a)(["\n      border-color: #c53030;\n    "]);return T=function(){return n},n}function V(){var n=Object(l.a)(["\n  background: #1e1c23;\n  border-radius: 10px;\n  padding: 16px;\n  width: 100%;\n\n  border: 2px solid #25242f;\n  color: #666360;\n\n  display: flex;\n  align-items: center;\n\n  & + .disabled {\n    background: #000;\n  }\n\n  & + div {\n    margin-top: 8px;\n  }\n\n  ","\n\n  ","\n\n  ","\n\n  input {\n    flex: 1;\n    background: transparent;\n    border: 0;\n    color: #f4ede8;\n\n    &::placeholder {\n      color: #666360;\n    }\n  }\n\n  input[disabled] {\n    color: #666360;\n  }\n\n  svg {\n    margin-right: 16px;\n  }\n"]);return V=function(){return n},n}var L=s.c.div(V(),(function(n){return n.isErrored&&Object(s.b)(T())}),(function(n){return n.isFocused&&Object(s.b)(B())}),(function(n){return n.isField&&Object(s.b)(D())})),U=(Object(s.c)(R)(P()),function(n){var e=n.name,t=n.containerStyle,o=void 0===t?{}:t,i=n.icon,c=Object(p.a)(n,["name","containerStyle","icon"]),l=Object(a.useRef)(null),s=Object(a.useState)(!1),u=Object(v.a)(s,2),d=u[0],m=u[1],f=Object(a.useState)(!1),b=Object(v.a)(f,2),g=b[0],x=b[1],h=Object(q.c)(e),E=h.fieldName,O=h.defaultValue,y=h.error,j=h.registerField,k=Object(a.useCallback)((function(){m(!0)}),[]),w=Object(a.useCallback)((function(){var n;m(!1),x(!!(null===(n=l.current)||void 0===n?void 0:n.value))}),[]);return Object(a.useEffect)((function(){j({name:E,ref:l.current,path:"value"})}),[E,j]),r.a.createElement("div",{className:"form-input"},r.a.createElement(L,{style:o,isErrored:!!y,isField:g,isFocused:d,"data-testid":"input-container"},i&&r.a.createElement(i,{size:20}),r.a.createElement("input",Object.assign({onFocus:k,onBlur:w,defaultValue:O,name:E,ref:l},c))),y&&r.a.createElement("div",{className:"alert"},r.a.createElement("small",{className:"alert-error"},y)))});function X(){var n=Object(l.a)(["\n    animation: "," 2s infinite ease-in-out;\n    animation-delay: -1s;\n  "]);return X=function(){return n},n}function H(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.9);\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  ","\n"]);return H=function(){return n},n}function A(){var n=Object(l.a)(["\n    animation: "," 2s infinite ease-in-out;\n  "]);return A=function(){return n},n}function G(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.9);\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  ","\n"]);return G=function(){return n},n}function K(){var n=Object(l.a)(["\n  0%, 100% { -webkit-transform: scale(0.0) }\n  50% { -webkit-transform: scale(1.0) }\n"]);return K=function(){return n},n}function Q(){var n=Object(l.a)(["\n  width: 25px;\n  height: 25px;\n  display: block;\n  position: relative;\n  margin: 0 auto;\n"]);return Q=function(){return n},n}var W=s.c.i(Q()),Y=Object(s.d)(K()),Z=s.c.i(G(),Object(s.b)(A(),Y)),$=s.c.i(H(),Object(s.b)(X(),Y)),nn=function(){return r.a.createElement(W,null,r.a.createElement(Z,null),r.a.createElement($,null))},en=t(13);function tn(){var n=Object(l.a)(["\n  background: #404596;\n  color: #ccc;\n  font-weight: 500;\n  margin-top: 16px;\n  border-radius: 10px;\n  border: 0;\n  padding: 0 16px;\n  height: 56px;\n  width: 100%;\n  transition: background 0.2s;\n\n  &:hover {\n    background: ",";\n  }\n"]);return tn=function(){return n},n}var an=s.c.button(tn(),Object(en.a)(.2,"#404596")),rn=function(n){var e=n.loading,t=n.children,a=Object(p.a)(n,["loading","children"]);return r.a.createElement(an,Object.assign({type:"button"},a),e?r.a.createElement(nn,null):t)};function on(){var n=Object(l.a)(["\n  flex: 1;\n  background-size: cover;\n"]);return on=function(){return n},n}function cn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  form {\n    margin: 80px 0;\n    width: 340px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    h1 {\n      margin-bottom: 24px;\n    }\n\n    a {\n      color: #f4ede8;\n      margin-top: 24px;\n      transition: color 0.2s;\n\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n\n  > a {\n    color: #404596;\n    display: flex;\n    align-items: center;\n    transition: color 0.2s;\n\n    &:hover {\n      color: ",";\n    }\n\n    svg {\n      margin-right: 8px;\n    }\n  }\n"]);return cn=function(){return n},n}function ln(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]);return ln=function(){return n},n}function sn(){var n=Object(l.a)(["\n  height: 100vh;\n\n  display: flex;\n  align-items: stretch;\n"]);return sn=function(){return n},n}var un=s.c.div(sn()),dn=s.c.div(ln()),mn=s.c.div(cn(),Object(en.a)(.2,"#f4ede8"),Object(en.a)(.2,"#404596")),pn=s.c.div(on()),fn=function(){var n=Object(a.useRef)(null),e=Object(a.useState)(!1),t=Object(v.a)(e,2),o=t[0],i=t[1],l=y().signIn,s=Object(m.g)(),u=Object(a.useState)({display:!1}),d=Object(v.a)(u,2),p=d[0],f=d[1],x=Object(a.useCallback)(function(){var e=Object(g.a)(b.a.mark((function e(t){var a,r,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,null===(a=n.current)||void 0===a||a.setErrors({}),r=S.b().shape({email:S.c().email("Digite um e-mail v\xe1lido").required("Informe seu e-mail"),password:S.c().required("Informe sua senha")}),e.next=5,r.validate(t,{abortEarly:!1});case 5:return i(!0),e.next=8,l({email:t.email,password:t.password});case 8:i(!1),s.push("/tasks"),e.next=20;break;case 12:if(e.prev=12,e.t0=e.catch(0),i(!1),!(e.t0 instanceof S.a)){e.next=19;break}return c=I(e.t0),null===(o=n.current)||void 0===o||o.setErrors(c),e.abrupt("return");case 19:f({display:!0,type:"error",message:"Ocorreu um erro ao fazer login, verifique suas credenciais."});case 20:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}(),[l,s]);return r.a.createElement(un,null,r.a.createElement(dn,null,r.a.createElement(mn,null,r.a.createElement("img",{src:F.a,alt:"Mark85"}),r.a.createElement(w.a,{ref:n,onSubmit:x},r.a.createElement("h1",null,"Fa\xe7a seu login"),r.a.createElement(z,{display:p.display,message:p.message,type:p.type}),r.a.createElement(U,{name:"email",icon:k.e,type:"text",placeholder:"E-mail"}),r.a.createElement(U,{name:"password",icon:k.c,type:"password",placeholder:"Senha"}),r.a.createElement(rn,{loading:o,type:"submit"},"Entrar")),r.a.createElement(c.b,{to:"signup"},r.a.createElement(k.d,null),"Criar conta"))),r.a.createElement(pn,null))};function bn(){var n=Object(l.a)(["\n  flex: 1;\n  background-size: cover;\n"]);return bn=function(){return n},n}function gn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  form {\n    margin: 80px 0;\n    width: 340px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    h1 {\n      margin-bottom: 24px;\n    }\n\n    a {\n      color: #f4ede8;\n      margin-top: 24px;\n      transition: color 0.2s;\n\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n\n  > a {\n    color: #f4ede8;\n    display: flex;\n    align-items: center;\n    transition: color 0.2s;\n\n    &:hover {\n      color: ",";\n    }\n\n    svg {\n      margin-right: 8px;\n    }\n  }\n"]);return gn=function(){return n},n}function vn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n\n  width: 100%;\n"]);return vn=function(){return n},n}function xn(){var n=Object(l.a)(["\n  height: 100vh;\n\n  display: flex;\n  align-items: stretch;\n"]);return xn=function(){return n},n}var hn=s.c.div(xn()),En=s.c.div(vn()),On=s.c.div(gn(),Object(en.a)(.2,"#f4ede8"),Object(en.a)(.2,"#f4ede8")),yn=s.c.div(bn()),jn=function(){var n=Object(a.useRef)(null),e=Object(a.useState)(!1),t=Object(v.a)(e,2),o=t[0],i=t[1],l=Object(a.useState)({display:!1}),s=Object(v.a)(l,2),u=s[0],d=s[1],m=Object(a.useCallback)(function(){var e=Object(g.a)(b.a.mark((function e(t){var a,r,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,null===(a=n.current)||void 0===a||a.setErrors({}),r=S.b().shape({name:S.c().required("Informe seu nome completo"),email:S.c().email("Digite um e-mail v\xe1lido").required("Informe seu e-email"),password:S.c().min(6,"Informe uma senha com pelo menos 6 digitos")}),e.next=5,r.validate(t,{abortEarly:!1});case 5:i(!0),h.post("/users",t).then((function(n){i(!1),d({display:!0,type:"success",message:"Boas vindas ao Mark85, o seu gerenciador de tarefas."})})).catch((function(n){"Duplicated email!"===n.response.data.message&&d({display:!0,type:"error",message:"Oops! J\xe1 existe um cadastro com e-mail informado."}),i(!1)})),e.next=17;break;case 9:if(e.prev=9,e.t0=e.catch(0),!(e.t0 instanceof S.a)){e.next=16;break}return i(!1),c=I(e.t0),null===(o=n.current)||void 0===o||o.setErrors(c),e.abrupt("return");case 16:d({display:!0,type:"error",message:"Ocorreu um erro ao fazer cadastro, verifique seu dados."});case 17:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),[]);return r.a.createElement(hn,null,r.a.createElement(yn,null),r.a.createElement(En,null,r.a.createElement(On,null,r.a.createElement("img",{src:F.a,alt:"Mark85"}),r.a.createElement(w.a,{ref:n,onSubmit:m},r.a.createElement("h1",null,"Fa\xe7a seu cadastro"),r.a.createElement(z,{display:u.display,message:u.message,type:u.type}),r.a.createElement(U,{name:"name",icon:k.h,type:"text",placeholder:"Nome"}),r.a.createElement(U,{name:"email",icon:k.e,type:"text",placeholder:"E-mail"}),r.a.createElement(U,{name:"password",icon:k.c,type:"password",placeholder:"Senha"}),r.a.createElement(rn,{loading:o,type:"submit"},"Cadastrar")),r.a.createElement(c.b,{to:"/"},r.a.createElement(k.b,null),"Voltar para login"))))},kn=(t(88),t(91)),wn=t(92);function Sn(){var n=Object(l.a)(["\nmargin-top: 16px;\n  display: flex;\n  align-items: center;\n\n  & + div {\n    margin-top: 16px;\n  }\n\n  div {\n    background: #202024;\n    padding: 16px 24px;\n    border-radius: 10px;\n\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n    flex: 1;\n\n    .item-toggle,\n    .item-toggle-selected {\n      grid-area: toggle;\n      width: 32px;\n      height: 32px;\n      cursor: pointer;\n      border-radius: 999px;\n    }\n\n    .item-toggle {\n      border: 2px solid #6668eb;\n      background: none;\n    }\n    \n    .item-toggle-selected {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #b6b7b9;\n      border: 3px solid #121214;;\n      background: #121214;\n    }\n\n    .task-todo,\n    .task-done {\n      margin-left: 24px;\n      color: #ccc;\n      font-size: 20px;\n    }\n\n    .task-done {\n      text-decoration-line: line-through;\n      color: #85888b;\n    }\n\n    .tags {\n      gap: 0.5rem;\n      padding: 0 !important;\n      span {\n        padding: 8px 15px 8px 15px;\n        border-radius: 8px;\n        background: #404596;\n        color: #ccc;\n      }\n    }\n\n    .task-remove {\n      grid-area: delete;\n      display: flex;\n      background-color: transparent;\n      border: 0;\n      color: #85888b;\n      cursor: pointer;\n      transition: color 0.2s;\n    }\n    \n    .task-remove:hover {\n      color: #e25858;\n    }\n  }\n"]);return Sn=function(){return n},n}function Nn(){var n=Object(l.a)(["\n  margin-top: 28px;\n\n  .top {\n    display: flex;\n    align-items: center;\n\n    h1 {\n      margin-left: 8px;\n    }\n\n    a {\n      margin-left: auto;\n    }\n\n    button {\n      margin-top: 0px !important;\n    }\n\n  }\n\n  > strong {\n    color: #999591;\n    font-size: 20px;\n    line-height: 26px;\n    display: block;\n    border-bottom: 1px solid #3e3b47;\n    padding-bottom: 16px;\n    margin-bottom: 16px;\n  }\n\n  > p {\n    color: #999591;\n    font-weight: 400;\n  }\n"]);return Nn=function(){return n},n}function Cn(){var n=Object(l.a)(['\n  flex: 1;\n\n  p {\n    margin-top: 32px;\n    color: #404596;\n    font-weight: 500;\n\n    display: flex;\n    align-items: center;\n\n    span {\n      display: flex;\n      align-items: center;\n    }\n\n    span + span::before {\n      content: "";\n      width: 1px;\n      height: 12px;\n      background: #404596;\n      margin: 0 8px;\n    }\n  }\n']);return Cn=function(){return n},n}function zn(){var n=Object(l.a)(["\n  max-width: 800px;\n  margin: 10px auto;\n\n  display: flex;\n"]);return zn=function(){return n},n}function In(){var n=Object(l.a)(["\n  max-width: 800px;\n  margin: 0 auto;\n\n  display: flex;\n  align-items: center;\n\n  > img {\n    width: 200px;\n  }\n  \n  div {\n    display: flex;\n    align-items: center;\n    margin-left: auto;\n\n    gap: 10px;\n\n    small {\n      vertical-align: middle;\n      font-size: 0.8rem;\n      color: #ccc;\n    }\n\n    button {\n      border: 0;\n      background: transparent;\n\n      svg {\n        margin-top: -3px;\n        color: #803f42;\n        vertical-align: middle;  \n      }\n    }\n  }\n\n"]);return In=function(){return n},n}function Mn(){var n=Object(l.a)(["\n  padding: 32px 0;\n  background: #202024;\n"]);return Mn=function(){return n},n}function Fn(){var n=Object(l.a)([""]);return Fn=function(){return n},n}var qn=s.c.div(Fn()),_n=s.c.header(Mn()),Jn=s.c.div(In()),Rn=s.c.main(zn()),Pn=s.c.div(Cn()),Dn=s.c.section(Nn()),Bn=s.c.div(Sn()),Tn=function(){var n=y(),e=n.user,t=n.signOut,o=Object(a.useState)(!1),i=Object(v.a)(o,2),l=i[0],s=i[1],u=Object(a.useState)([]),d=Object(v.a)(u,2),m=d[0],p=d[1],f=function(){var n=Object(g.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:h.get("/tasks").then((function(n){p(n.data)}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){f()}),[]),r.a.createElement(qn,null,r.a.createElement(_n,null,r.a.createElement(Jn,null,r.a.createElement("img",{src:F.a,alt:"Mark85"}),r.a.createElement("div",null,r.a.createElement("small",null,"Ol\xe1, ",e.name.split(" ")[0]),r.a.createElement("button",{type:"button",className:"signout",onClick:t},r.a.createElement(k.g,{color:"#803f42"}))))),r.a.createElement(Rn,null,r.a.createElement(Pn,null,r.a.createElement(Dn,null,r.a.createElement("div",{className:"top"},r.a.createElement("h1",null,"Minhas tarefas"),r.a.createElement(c.b,{to:"/create"},r.a.createElement(rn,{loading:l,type:"button",onClick:function(){return s(!0)}},r.a.createElement(k.f,null)))),0===m.length&&r.a.createElement("p",null,"Nenhuma tarefa cadastrada"),m.map((function(n){return r.a.createElement(Bn,{key:n._id},r.a.createElement("div",{className:"task-item"},r.a.createElement("button",{className:n.is_done?"item-toggle-selected":"item-toggle",onClick:function(){return function(n){h.put("/tasks/".concat(n._id,"/").concat(n.is_done?"todo":"done")).then((function(n){f()}))}(n)}},n.is_done?r.a.createElement(kn.a,{size:24}):null),r.a.createElement("strong",{className:n.is_done?"task-done":"task-todo"},n.name),r.a.createElement("div",{className:"tags"},n.tags.map((function(n){return r.a.createElement("span",{key:n},n)}))),r.a.createElement("button",{className:"task-remove",onClick:function(){return e=n._id,void h.delete("/tasks/"+e).then((function(n){f()}));var e}},r.a.createElement(wn.a,{size:24}))))}))))))},Vn=t(61);function Ln(){var n=Object(l.a)(["\n  margin-bottom: 32px;\n  position: relative;\n  align-self: center;\n\n  img {\n    width: 186px;\n    height: 186px;\n    border-radius: 50%;\n  }\n\n  label {\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n    width: 48px;\n    height: 48px;\n    background: #404596;\n    border-radius: 50%;\n    border: 0;\n    cursor: pointer;\n    transition: background 0.2s;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    input {\n      display: none;\n    }\n\n    svg {\n      width: 20px;\n      height: 20px;\n      color: #312e28;\n    }\n\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return Ln=function(){return n},n}function Un(){var n=Object(l.a)(["\n  width: 100%;\n  margin: -176px auto 0;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  form {\n    margin: 80px 0;\n    width: 340px;\n\n    display: flex;\n    flex-direction: column;\n\n    h1 {\n      margin-bottom: 24px;\n      font-size: 20px;\n      text-align: center;\n    }\n\n    div:nth-child(5) {\n      margin-top: 24px;\n    }\n\n    .rti--container {\n      margin-top: 0.7rem !important;\n      --rti-bg: #202024 !important;\n      padding: 16px;\n      border: 2px solid #202024 !important;\n\n      --rti-border: #202024 !important;\n      --rti-main: #404596 !important;\n      --rti-radius: 10px !important;\n      --rti-s: 0.5rem !important; /* spacing */\n      --rti-tag: #404596 !important;\n      --rti-tag-remove: #e53e3e !important;\n\n      --rti-tag-padding: 0.5rem !important;\n\n      input {\n        background: #202024 !important;\n        color: #ccc;\n      }\n\n      .rti--tag {\n        color: #ccc !important;\n      }\n    }\n\n    .rti--container:focus-within {\n      border-color: var(--rti-main);\n      box-shadow: none;\n      border: 2px solid #404596 !important;\n    }\n\n    em {\n      margin-left: 5px;\n      margin-top: 0.5rem;\n      color: #666360;\n      font-size: 0.8rem;\n    }\n\n    .rti--tag button {\n      color: #ccc !important;\n    }\n\n    a {\n      color: #f4ede8;\n      margin-top: 24px;\n      transition: color 0.2s;\n\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n"]);return Un=function(){return n},n}function Xn(){var n=Object(l.a)(["\n  > header {\n    height: 144px;\n    background: #202024;\n\n    display: flex;\n    align-items: center;\n\n    div {\n      width: 100%;\n      max-width: 1120px;\n      margin: 0 auto;\n\n      svg {\n        color: #999591;\n        width: 24px;\n        height: 24px;\n      }\n    }\n  }\n"]);return Xn=function(){return n},n}var Hn=s.c.div(Xn()),An=s.c.div(Un(),Object(en.a)(.2,"#f4ede8")),Gn=s.c.div(Ln(),Object(en.a)(.2,"#404596")),Kn=t(60),Qn=t.n(Kn),Wn=function(){var n=Object(a.useRef)(null),e=Object(a.useState)(!1),t=Object(v.a)(e,2),o=t[0],i=t[1],l=Object(m.g)(),s=Object(a.useState)([]),u=Object(v.a)(s,2),d=u[0],p=u[1],f=Object(a.useState)({display:!1}),x=Object(v.a)(f,2),E=x[0],O=x[1],y=Object(a.useCallback)(function(){var e=Object(g.a)(b.a.mark((function e(t){var a,r,o,c,s,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,null===(a=n.current)||void 0===a||a.setErrors({}),r=S.b().shape({name:S.c().required("Campo obrigat\xf3rio")}),e.next=5,r.validate(t,{abortEarly:!1});case 5:i(!0),d.length>3&&(i(!1),O({display:!0,type:"error",message:"Oops! Limite de tags atingido."})),o=t.name,c={name:o,tags:d},h.post("/tasks",c).then((function(n){i(!1),l.push("/tasks")})).catch((function(n){"Duplicated task!"===n.response.data.message&&O({display:!0,type:"error",message:"Oops! Tarefa duplicada."}),i(!1)})),e.next=21;break;case 12:if(e.prev=12,e.t0=e.catch(0),!(e.t0 instanceof S.a)){e.next=19;break}return i(!1),u=I(e.t0),null===(s=n.current)||void 0===s||s.setErrors(u),e.abrupt("return");case 19:i(!1),O({display:!0,type:"error",message:"Erro ao tentar cadastrar! Tente novamente."});case 21:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}(),[l,d]);return r.a.createElement(Hn,null,r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement(c.b,{to:"/tasks"},r.a.createElement(k.b,null)))),r.a.createElement(An,null,r.a.createElement(w.a,{ref:n,onSubmit:y},r.a.createElement(Gn,null,r.a.createElement("img",{src:Qn.a,alt:"Nova tarefa"})),r.a.createElement("h1",null,"Cadastrar Tarefa"),r.a.createElement(z,{display:E.display,message:E.message,type:E.type}),r.a.createElement(U,{name:"name",type:"text",placeholder:"Nome da tarefa"}),r.a.createElement(Vn.a,{value:d,onChange:p,name:"tags",placeHolder:"Informe at\xe9 3 tags"}),r.a.createElement("em",null,"pressione enter para adicionar a tag"),r.a.createElement(rn,{loading:o,type:"submit"},"Cadastrar"))))},Yn=function(){return r.a.createElement(m.d,null,r.a.createElement(j,{path:"/",exact:!0,component:fn}),r.a.createElement(j,{path:"/signup",component:jn}),r.a.createElement(j,{path:"/tasks",component:Tn,isPrivate:!0}),r.a.createElement(j,{path:"/create",component:Wn,isPrivate:!0}))},Zn=function(n){var e=n.children;return r.a.createElement(O,null,e)},$n=function(){return r.a.createElement(c.a,null,r.a.createElement(Zn,null,r.a.createElement(Yn,null)),r.a.createElement(d,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($n,null)),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.fede004a.chunk.js.map