"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[294],{3294:function(e,s,a){a.r(s),a.d(s,{default:function(){return B}});var n=a(364),r=a(7781),t=a(6341),i=a(8683),c=a(1523),g=a(5705),m=a(132),u=(a(2791),"Message_message_title__fB2W6"),_="Message_message__gtVfI",l="Message_message_dialogs__fh6c1",o="Message_message_person__RaGgd",h="Message_chat__EpsGM",d="Message_chat_message__bCgie",f="Message_chat_text__VbfzS",x="Message_chat_by__4l+A2",j="Message_chat_area__n0vyC",C="Message_chat_send__-BJTJ",v=a(184),M=function(e){var s=e.by,a=e.message;return(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("div",{className:x,children:s}),(0,v.jsx)("div",{className:f,children:a})]})},b=function(e){var s=e.messageUserChat,a=e.formik,n=s.map((function(e){return(0,v.jsx)(M,{by:e.sendBy,message:e.text},e.id)}));return(0,v.jsxs)("div",{className:h,children:[n,(0,v.jsxs)("form",{onSubmit:a.handleSubmit,children:[(0,v.jsx)("textarea",{className:j,name:"message",cols:70,rows:3,value:a.values.message,onChange:a.handleChange,placeholder:"\u041c\u0435\u0441\u0442\u043e \u0434\u043b\u044f \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"}),(0,v.jsx)("button",{className:C,type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})},N=function(e){var s=e.sendMessageCreator,a=e.messageUserChat,n=(0,g.TA)({initialValues:{message:""},validationSchema:m.Ry({message:m.Z_().min(1,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 1 \u0441\u0438\u043c\u0432\u043e\u043b").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")}),onSubmit:function(e){s(e.message),e.message=""}});return(0,v.jsx)(b,{messageUserChat:a,formik:n})},U=function(e){var s=e.id,a=e.userName;return(0,v.jsx)(c.OL,{to:"/message/".concat(s),className:o,children:a},s)},p=function(e){var s=e.messageUserData,a=e.messageUserChat,n=e.sendMessageCreator,r=s.map((function(e){return(0,v.jsx)(U,(0,i.Z)({},e),e.id)}));return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:_,children:[(0,v.jsx)("h1",{className:u,children:"\u041c\u043e\u0438 \u0447\u0430\u0442\u044b"}),(0,v.jsx)("div",{className:l,children:r})]}),(0,v.jsx)(N,{messageUserChat:a,sendMessageCreator:n})]})},k=a(9271),y=a(1595),w=function(e){return{isAuth:(0,y.yr)(e)}},S=function(e){return e.messagesPage.messageUserChat},A=function(e){return e.messagesPage.messageUserData},B=(0,r.qC)((0,n.$j)((function(e){return{messageUserData:A(e),messageUserChat:S(e)}}),{sendMessageCreator:t.X}),(function(e){return(0,n.$j)(w)((function(s){return s.isAuth?(0,v.jsx)(e,(0,i.Z)({},s)):(0,v.jsx)(k.l_,{to:"/login"})}))}))(p)}}]);
//# sourceMappingURL=294.12787158.chunk.js.map