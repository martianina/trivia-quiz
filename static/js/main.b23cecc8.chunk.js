(this["webpackJsonptrivia-quiz"]=this["webpackJsonptrivia-quiz"]||[]).push([[0],{152:function(e,t,n){e.exports={menu:"Menu_menu__35cFE",menu__title:"Menu_menu__title__1p0Fh",menu__buttonContainer:"Menu_menu__buttonContainer__2MH0R"}},153:function(e,t,n){e.exports={bar:"ProgressBar_bar__3nw9_",progressText:"ProgressBar_progressText__12_Jn",bar__progress:"ProgressBar_bar__progress__1diGu",bar__remainder:"ProgressBar_bar__remainder__3JdDE"}},181:function(e,t,n){e.exports={results:"Results_results__3sBfs",results__title:"Results_results__title__1THxs"}},182:function(e,t,n){e.exports={App:"App_App__dfiYW",App__card:"App_App__card__8QBzq"}},263:function(e,t,n){e.exports={answerGrid:"AnswerGrid_answerGrid__5w_nP"}},278:function(e,t,n){e.exports=n(305)},283:function(e,t,n){},305:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),l=n.n(o),i=(n(283),n(20)),c=n(236),u=n(330),s=n(49),m=n(237),d=function(e){var t=e.label,n=e.variant,a=e.color,o=e.onClick,l=e.style,i=e.labelStyle,u=Object(c.a)({root:Object(s.a)(Object(s.a)({},l),{},{textTransform:"none"}),label:i})();return r.a.createElement("div",null,r.a.createElement(m.a,{variant:n,classes:u,color:a,onClick:o},t))},p="#fd5660",f={padding:"0.5vh",fontSize:"clamp(10px, 1.5vh, 15px)",backgroundColor:p,color:"#FFF",fontWeight:"bold","&:hover":{backgroundColor:p,color:"#FFF",fontWeight:"bold"}},b=function(e){var t=e.size,n=e.style,a=e.label,o=e.onRestart,l=e.quizData,i=e.titleClassName,s=Object(c.a)((function(e){return{root:n}}))();return r.a.createElement("div",{className:s.root},r.a.createElement("h1",{className:i},a),l?r.a.createElement(d,{label:"RESTART",variant:"contained",color:"primary",onClick:o,style:f}):r.a.createElement(u.a,{size:t,style:{color:p}}))},v=function(e){var t=e.title,n=e.className;return r.a.createElement("div",null,r.a.createElement("h1",{className:n},t))},g=n(238),_=function(e){var t=e.label,n=e.variant,a=e.onChange,o=e.type,l=e.style,i=e.value,u=e.helperText,s=e.error,m=e.className,d=e.inputProps,p=Object(c.a)(l)();return r.a.createElement("div",null,r.a.createElement(g.a,{classes:p,className:m,error:s,label:t,variant:n,onChange:a,inputProps:{style:d},type:o,value:i,helperText:s?u:"",size:"small"}))},h=n(338),E=function(e){var t=e.options,n=e.label,a=e.variant,o=e.inputStyle,l=(e.listboxStyle,e.onChange),i=e.value,u=e.className,s=Object(c.a)(o)();return r.a.createElement("div",null,r.a.createElement(h.a,{options:t,classes:s,className:u,getOptionLabel:function(e){return e.name},onChange:l,size:"small",value:i,renderInput:function(e){return r.a.createElement(g.a,Object.assign({},e,{label:n,variant:a}))}}))},y=n(174),C=n(240),O=n(309),x=n(339),w=n(239),j=n(4);function q(e){var t=e.label,n=e.values,a=e.value,o=e.onChange,l=e.color,i=Object(j.a)({root:{color:"black","&$checked":{color:l}},checked:{}})((function(e){return r.a.createElement(x.a,e)}));return r.a.createElement(y.a,{component:"fieldset"},r.a.createElement(O.a,{component:"legend",style:{color:"black",fontSize:"11.5px"}},t),r.a.createElement(w.a,{"aria-label":"gender",name:"gender1",value:a,onChange:o},n.map((function(e){return r.a.createElement(C.a,{value:e,control:r.a.createElement(i,null),label:e.charAt(0).toUpperCase()+e.slice(1)})}))))}var S=n(152),z=n.n(S),A=[{name:"Any Difficulty",value:null},{name:"Easy",value:"easy"},{name:"Medium",value:"medium"},{name:"Hard",value:"hard"}],I=[{name:"Any Type",value:null},{name:"Multiple Choice",value:"multiple"},{name:"True / False",value:"boolean"}],k={root:{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"black"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#fd5660"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#fd5660",borderWidth:"medium"},"& .MuiInputLabel-root":{color:"black"},"&:hover .MuiInputLabel-root":{color:"#fd5660"},"& .MuiInputLabel-root.Mui-focused":{color:"#fd5660",fontWeight:"bold"}}},N={minHeight:"2px",height:"3vh",fontSize:"clamp(10px, 2vh, 15px)"},D={root:{"& .MuiAutocomplete-inputRoot .MuiOutlinedInput-notchedOutline":{borderColor:"black"},"&:hover .MuiAutocomplete-inputRoot .MuiOutlinedInput-notchedOutline":{borderColor:"#fd5660"},"& .MuiAutocomplete-inputRoot.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#fd5660",borderWidth:"medium"},"& .MuiInputLabel-root":{color:"black"},"&:hover .MuiInputLabel-root":{color:"#fd5660"},"& .MuiInputLabel-root.Mui-focused":{color:"#fd5660",fontWeight:"bold"}},inputRoot:{minHeight:"30px",height:"5vh",fontSize:"clamp(10px, 2vh, 15px)"}},M=function(e){var t=e.menuActions,n=e.menuState,o=Object(a.useState)(null),l=Object(i.a)(o,2),c=l[0],u=l[1];return Object(a.useEffect)((function(){fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(e){return u([{name:"Any Category",id:null}].concat(e.trivia_categories))}))}),[]),r.a.createElement("div",null,r.a.createElement("div",null,c?r.a.createElement("div",{className:z.a.menu},r.a.createElement("div",null,r.a.createElement(v,{className:z.a.menu__title,title:"Trivia Quiz"})),r.a.createElement("div",null,r.a.createElement(_,{label:"Number of questions",variant:"outlined",type:"number",onChange:t.changeNumberOfQuestions,style:k,inputProps:N,value:n.numberOfQuestions,helperText:"Error: Number must be an integer less than or equal to 50.",error:!n.isNumberOfQuestionsValid})),r.a.createElement("div",null,r.a.createElement(E,{options:c,label:"Category",variant:"outlined",inputStyle:D,onChange:t.changeCategory,value:n.category})),r.a.createElement("div",null,r.a.createElement(E,{options:A,label:"Difficulty",variant:"outlined",inputStyle:D,onChange:t.changeDifficulty,value:n.difficulty})),r.a.createElement("div",null,r.a.createElement(E,{options:I,label:"Question type",variant:"outlined",inputStyle:D,onChange:t.changeType,value:n.type})),r.a.createElement("div",null,r.a.createElement(q,{label:"Set time limit?",values:["yes","no"],value:n.useDuration,onChange:t.changeUseDuration,color:"#fd5660"})),"yes"===n.useDuration&&r.a.createElement("div",null,r.a.createElement(_,{label:"Time limit (in minutes)",variant:"outlined",type:"number",onChange:t.changeQuizDuration,style:k,value:n.quizDuration,helperText:"Error: Number must be greater than 0.",error:!(n.quizDuration>0),inputProps:N})),r.a.createElement("div",{className:z.a.menu__buttonContainer},r.a.createElement(d,{label:"Start",variant:"contained",onClick:t.startQuiz,style:f}))):r.a.createElement("div",null,r.a.createElement(b,{size:"10vh",label:"Menu Loading",style:{display:"flex",flexDirection:"column",alignItems:"center"}}))))},Q=n(263),T=n.n(Q),F={padding:"0.5vh",backgroundColor:"#F6F3E4",fontWeight:"bold","&:hover":{backgroundColor:"#F6F3E4",color:"black",fontWeight:"bold"}},P={padding:"0.5vh",backgroundColor:p,color:"#FFF",fontWeight:"bold","&:hover":{backgroundColor:p,color:"#FFF",fontWeight:"bold"}},R=function(e){var t=e.answers,n=e.setSelectedAnswerIndex,a=e.selectedAnswerIndex,o=t&&2===t.length;return r.a.createElement("div",{className:T.a.answerGrid},r.a.createElement(d,{label:o?t&&t[1]:t&&t[0],variant:"contained",onClick:o?function(){return n(1)}:function(){return n(0)},style:o?1===a?P:F:0===a?P:F}),r.a.createElement(d,{label:o?t&&t[0]:t&&t[1],variant:"contained",onClick:o?function(){return n(0)}:function(){return n(1)},style:o?0===a?P:F:1===a?P:F}),!o&&r.a.createElement(d,{label:t&&t[2],variant:"contained",onClick:function(){return n(2)},style:2===a?P:F}),!o&&r.a.createElement(d,{label:t&&t[3],variant:"contained",onClick:function(){return n(3)},style:3===a?P:F}))},W=n(73),B=n(177),L=n(241),H=n(264),U=n.n(H),G=function(e){var t=e.tooltipTitle,n=e.color,a=e.onClick,o=e.iconStyle,l=e.buttonStyle;return r.a.createElement(L.a,{title:t},r.a.createElement(B.a,Object(W.a)({style:l,color:n,onClick:a},"style",l),r.a.createElement(U.a,{style:o})))},J=n(265),V=n.n(J),Y=function(e){var t=e.tooltipTitle,n=e.color,a=e.onClick,o=e.iconStyle,l=e.buttonStyle;return r.a.createElement(L.a,{title:t},r.a.createElement(B.a,{style:l,color:n,onClick:a},r.a.createElement(V.a,{style:o})))},$=n(179),K=n.n($),X=function(e){var t=e.tooltipTitle,n=e.color,a=e.onClick,o=e.iconStyle,l=e.buttonStyle;return r.a.createElement(L.a,{title:t},r.a.createElement(B.a,{style:l,color:n,onClick:a},r.a.createElement(K.a,{style:o})))},Z=n(153),ee=n.n(Z),te=function(e){var t=e.value,n=e.total;return r.a.createElement("div",{className:ee.a.bar},r.a.createElement("div",{style:{"--width":"".concat(t/n*100,"%"),"--backgroundColor":t!==n?p:"#21BA45"},className:ee.a.bar__progress}),r.a.createElement("div",{className:ee.a.bar__remainder}))},ne=n(332),ae=n(336),re=n(334),oe=n(335),le=n(333),ie=function(e){var t=e.title,n=e.text,a=e.open,o=e.togglePrompt,l=e.onRestart;return r.a.createElement("div",null,r.a.createElement(ne.a,{open:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},t&&r.a.createElement(le.a,{id:"alert-dialog-title"},t),n&&r.a.createElement(re.a,null,r.a.createElement(oe.a,{id:"alert-dialog-description"},n)),r.a.createElement(ae.a,{style:{justifyContent:"center"}},r.a.createElement(m.a,{onClick:o,style:{fontWeight:"bold",color:p}},"Cancel"),r.a.createElement(m.a,{onClick:l,autoFocus:!0,style:{fontWeight:"bold",color:p}},"Yes"))))},ce=function(e){var t=e.title,n=e.text,a=e.open,o=e.togglePrompt;return r.a.createElement("div",null,r.a.createElement(ne.a,{open:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},t&&r.a.createElement(le.a,{id:"alert-dialog-title"},t),n&&r.a.createElement(re.a,null,r.a.createElement(oe.a,{id:"alert-dialog-description"},n)),r.a.createElement(ae.a,{style:{justifyContent:"center"}},r.a.createElement(m.a,{onClick:o,color:"primary",style:{fontWeight:"bold",color:p}},"OK"))))},ue=n(266),se=n.n(ue),me=n(267),de=n.n(me),pe={"&quot;":'"',"&amp;":"&","&shy;":"-","&eacute;":"\xe9","&Uuml;":"\xdc","&uuml;":"\xfc","&ldquo;":"\u2018","&rsquo;":"\u2019","&#039;":"'","&euml;":"\xeb","&rdquo;":"\u201d","&Iacute;":"\xcd","&aacute;":"\xe1","&Aacute;":"\xc1","&ntilde;":"\xf1","&pi;":"\u03c0","&ouml":"\xf6","&Ouml":"\xd6","&iacute":"\xed","&deg;":"\xb0"},fe=function(e){return function(e){for(var t=e,n=0,a=Object.entries(pe);n<a.length;n++){var r=Object(i.a)(a[n],2),o=r[0],l=r[1];t=de.a.replace(t,new RegExp(o,"g"),l)}return t}(e&&e.replace(/&#(?:x([\da-f]+)|(\d+));/gi,(function(e,t,n){return String.fromCharCode(n||+("0x"+t))})))},be=n(154),ve=n.n(be),ge=n(63),_e=n.n(ge),he=function(e){var t=e.quizData,n=e.setQuizData,o=e.setCurrentPage,l=e.restartQuiz,c=e.useDuration,u=e.quizDuration,m=e.currentPage,d=Object(a.useState)(0),f=Object(i.a)(d,2),g=f[0],_=f[1],h=Object(a.useState)(!1),E=Object(i.a)(h,2),y=E[0],C=E[1],O=Object(a.useState)(!1),x=Object(i.a)(O,2),w=x[0],j=x[1],q=Object(a.useState)(null),S=Object(i.a)(q,2),z=S[0],A=S[1],I=ve()().add(u,"minutes"),k=function(){return C(!y)},N=function(){return j(!w)},D=t&&t[g]&&t[g].selectedAnswerIndex,M=function(){t[g].selectedAnswerIndex||0===t[g].selectedAnswerIndex?T(t[g].selectedAnswerIndex):T(null),_(g-1)},Q=function(){t[g].selectedAnswerIndex||0===t[g].selectedAnswerIndex?T(t[g].selectedAnswerIndex):T(null),_(g+1)},T=function(e){return n(t.map((function(n,a){return a===g?Object(s.a)(Object(s.a)({},t[g]),{},{selectedAnswerIndex:e}):n})))};return Object(a.useEffect)((function(){if("yes"===c)var e=setInterval((function(){var t=ve()(),n=ve.a.duration(I.diff(t));n.asSeconds()>0&&"questions"===m?(console.log("Decrement"),A(n.asSeconds())):(clearInterval(e),console.log("Done"))}),1e3)}),[]),r.a.createElement("div",null,r.a.createElement("div",null,t&&t.length>0?r.a.createElement("div",{className:_e.a.questionsContainer},"yes"===c&&r.a.createElement("div",{className:_e.a.questions__countdownTimer},r.a.createElement(se.a,{seconds:60*u,showMilliseconds:!0,timeFormat:"hms",color:"".concat(z<60&&z>=10?"#f9da11":z<10?"#f90004":p),alpha:.9,size:100,fontSize:"auto",onComplete:function(){return o("results")}})),r.a.createElement("div",null,r.a.createElement(v,{className:_e.a.questions__title,title:"".concat(g+1,". ").concat(t[g]&&fe(t[g].question))})),r.a.createElement(R,{answers:t[g]&&t[g].answers.map((function(e){return fe(e)})),selectedAnswerIndex:D,setSelectedAnswerIndex:T}),r.a.createElement("div",{className:_e.a.questions__buttonsContainer},0!==g&&r.a.createElement(G,{tooltipTitle:"Go to previous question",onClick:function(){M()},iconStyle:{fontSize:"4vh",color:p}}),r.a.createElement(X,{tooltipTitle:g<t.length-1?"Go to next question":"Finish quiz",onClick:function(){g<t.length-1?D||0===D?Q():N():D||0===D?o("results"):N()},iconStyle:{fontSize:"4vh",color:p}}),r.a.createElement(Y,{tooltipTitle:"Restart Quiz",onClick:function(){return k()},iconStyle:{fontSize:"4vh",color:p}})),r.a.createElement("div",{className:_e.a.questions__progressBar},r.a.createElement(te,{value:g+1,total:t.length}))):r.a.createElement("div",{className:_e.a.questions__loadingIndicator},r.a.createElement(b,{size:"10vh",label:"".concat(t?"No Questions Available, please customize quiz and try again.":"Questions Loading"),style:{display:"flex",flexDirection:"column",alignItems:"center"},quizData:t,onRestart:function(){return l()}}))),r.a.createElement(ie,{title:"Confirmation",text:"Are you sure you want to restart the quiz?",open:y,togglePrompt:k,onRestart:l}),r.a.createElement(ce,{title:"Error",text:"Please select an answer before clicking next.",open:w,togglePrompt:N}))},Ee=n(268),ye=n(269),Ce=n.n(ye),Oe=n(72),xe=n(337),we=Object(Oe.a)({overrides:{MUIDataTable:{responsiveScroll:{maxHeight:"50vh"}}}}),je=function(e){var t=e.title,n=e.columns,a=e.data,o=n.map((function(e){return{name:e,label:e.charAt(0).toUpperCase()+e.slice(1),options:{filter:!0,sort:!0,setCellHeaderProps:function(e){return{style:{fontWeight:"bold",color:p}}}}}})),l=[];for(var i in a){var c={};for(var u in a[parseInt(i)])c=Object(s.a)(Object(s.a)({},c),{},Object(W.a)({},o[parseInt(u)].name,a[parseInt(i)][parseInt(u)]));l=l.concat(c)}return r.a.createElement(xe.a,{theme:we},r.a.createElement(Ce.a,{title:t,data:l,columns:o,options:{filter:!1,setRowProps:function(e,t){return{style:{backgroundColor:e[2]===e[3]?"#e0ffd9":"#ffe6e6"}}},responsive:"scroll"}}))},qe=n(181),Se=n.n(qe),ze=function(e){var t=e.quizData,n=e.restartQuiz,a=t.map((function(e){return[e.questionNumber,fe(e.question),fe(e.answers[e.selectedAnswerIndex]),fe(e.correctAnswer)]}));return r.a.createElement("div",{className:Se.a.results},r.a.createElement(v,{className:Se.a.results__title,title:"Final Score: ".concat(function(){var e,n=0,a=Object(Ee.a)(t);try{for(a.s();!(e=a.n()).done;){var r=e.value;r.answers[r.selectedAnswerIndex]===r.correctAnswer&&(n+=1)}}catch(o){a.e(o)}finally{a.f()}return n}(),"/").concat(t.length)}),r.a.createElement(je,{columns:["#","Question","Your Answer","Correct Answer"],data:a,title:"Overview of Results"}),r.a.createElement(d,{label:"Restart",variant:"contained",style:f,onClick:function(){return n()}}))},Ae=n(182),Ie=n.n(Ae);var ke=function(){var e=Object(a.useState)(10),t=Object(i.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)({name:"Any Category",id:null}),c=Object(i.a)(l,2),u=c[0],s=c[1],m=Object(a.useState)({name:"Any Difficulty",value:null}),d=Object(i.a)(m,2),p=d[0],f=d[1],b=Object(a.useState)({name:"Any Type",value:null}),v=Object(i.a)(b,2),g=v[0],_=v[1],h=Object(a.useState)(null),E=Object(i.a)(h,2),y=E[0],C=E[1],O=Object(a.useState)("no"),x=Object(i.a)(O,2),w=x[0],j=x[1],q=Object(a.useState)(10),S=Object(i.a)(q,2),z=S[0],A=S[1],I=Object(a.useState)("menu"),k=Object(i.a)(I,2),N=k[0],D=k[1],Q=Object(a.useState)(!1),T=Object(i.a)(Q,2),F=T[0],P=T[1],R=function(){return P(!F)},W=n>=1&&n<=50&&n%1===0,B=z>0&&W,L=function(){C(null),D("menu")},H={changeNumberOfQuestions:function(e){return o(parseFloat(e.target.value))},changeCategory:function(e,t){return s(t)},changeDifficulty:function(e,t){return f(t)},changeType:function(e,t){return _(t)},setCurrentPage:D,startQuiz:function(){B?(D("questions"),fetch("https://opentdb.com/api.php?amount=".concat(n).concat(u&&u.id?"&category=".concat(u.id):"").concat(p&&p.value?"&difficulty=".concat(p.value):"").concat(g&&g.value?"&type=".concat(g.value):"")).then((function(e){return e.json()})).then((function(e){return C(e.results.map((function(e,t){return{questionNumber:t,question:e.question,answers:e.incorrect_answers.concat(e.correct_answer).sort(),correctAnswer:e.correct_answer,selectedAnswerIndex:null}})))}))):R()},changeQuizDuration:function(e){return A(parseFloat(e.target.value))},changeUseDuration:function(e){j(e.target.value)}},U={numberOfQuestions:n,category:u,difficulty:p,type:g,isFormValid:B,useDuration:w,quizDuration:z,isNumberOfQuestionsValid:W};return r.a.createElement("div",{className:Ie.a.App},r.a.createElement("div",{className:Ie.a.App__card},"menu"===N&&r.a.createElement(M,{menuActions:H,menuState:U}),"questions"===N&&r.a.createElement(he,{quizData:y,setQuizData:C,setCurrentPage:D,restartQuiz:L,quizDuration:z,useDuration:w,currentPage:N}),"results"===N&&r.a.createElement(ze,{quizData:y,setQuizData:C,setCurrentPage:D,restartQuiz:L}),r.a.createElement(ce,{title:"Error",text:"Please fix all errors before clicking start.",open:F,togglePrompt:R})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(303);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,n){e.exports={questionsContainer:"Questions_questionsContainer__2epei",questions__buttonsContainer:"Questions_questions__buttonsContainer__2zeDi",questions__title:"Questions_questions__title__1NyzQ",questions__countdownTimer:"Questions_questions__countdownTimer__1tEUY",questions__progressBar:"Questions_questions__progressBar__2vgHV",questions__loadingIndicator:"Questions_questions__loadingIndicator__1BUom"}}},[[278,1,2]]]);
//# sourceMappingURL=main.b23cecc8.chunk.js.map