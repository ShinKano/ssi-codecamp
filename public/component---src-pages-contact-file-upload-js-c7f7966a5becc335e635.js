(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3BJJ":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));a("91GP"),a("f3/d"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var n=a("q1tI"),l=a.n(n),r=a("+ZDr"),c=a("7oih");function i(e){for(var t=new FormData,a=0,n=Object.keys(e);a<n.length;a++){var l=n[a];t.append(l,e[l])}return t}var o=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleAttachment=function(e){var t;a.setState(((t={})[e.target.name]=e.target.files[0],t))},a.handleSubmit=function(e){e.preventDefault();var t=e.target;fetch("/",{method:"POST",body:i(Object.assign({"form-name":t.getAttribute("name")},a.state))}).then((function(){return Object(r.navigate)(t.getAttribute("action"))})).catch((function(e){return alert(e)}))},a.state={},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement(c.a,null,l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"File Upload"),l.a.createElement("form",{name:"file-upload",method:"post",action:"/contact/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"hidden",name:"form-name",value:"file-upload"}),l.a.createElement("div",{hidden:!0},l.a.createElement("label",null,"Don’t fill this out:"," ",l.a.createElement("input",{name:"bot-field",onChange:this.handleChange}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"name"},"Your name"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",name:"name",onChange:this.handleChange,id:"name",required:!0}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"file"},l.a.createElement("label",{className:"file-label"},l.a.createElement("input",{className:"file-input",type:"file",name:"attachment",onChange:this.handleAttachment}),l.a.createElement("span",{className:"file-cta"},l.a.createElement("span",{className:"file-label"},"Choose a file…"))))),l.a.createElement("div",{className:"field"},l.a.createElement("button",{className:"button is-link",type:"submit"},"Send")))))))},n}(l.a.Component)}}]);
//# sourceMappingURL=component---src-pages-contact-file-upload-js-c7f7966a5becc335e635.js.map