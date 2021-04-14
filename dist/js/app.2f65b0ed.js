(function(e){function t(t){for(var o,a,s=t[0],i=t[1],u=t[2],l=0,b=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09aa":function(e,t,n){"use strict";n("29bc")},"29bc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"bg-green-500 text-white"},c={class:"container mx-auto"},a={class:"flex items-center"},s=Object(o["f"])("Home"),i=Object(o["f"])("Todos");function u(e,t){var n=Object(o["u"])("router-link"),u=Object(o["u"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("nav",r,[Object(o["g"])("div",c,[Object(o["g"])("div",a,[Object(o["g"])(n,{to:"/",class:"inline-block px-16 py-4 transition-colors hover:bg-green-700 duration-300"},{default:Object(o["A"])((function(){return[s]})),_:1}),Object(o["g"])(n,{to:"todos",class:"inline-block px-16 py-4 transition-colors hover:bg-green-700 duration-300"},{default:Object(o["A"])((function(){return[i]})),_:1})])])]),Object(o["g"])(u)],64)}n("09aa");const d={};d.render=u;var l=d,b=n("6c02"),p={class:"container mx-auto"},f=Object(o["g"])("h1",{class:"mt-8 text-2xl"},"The Home Page",-1);function O(e,t,n,r,c,a){return Object(o["p"])(),Object(o["d"])("div",p,[f])}var j={name:"Home"};j.render=O;var g=j,v=(n("d3b7"),n("25f0"),{class:"container mx-auto"}),x=Object(o["g"])("h1",{class:"mt-8 text-2xl"},"Todos",-1),h={class:"mt-3"},y={class:"grid lg:grid-cols-12 gap-4 sm:grid-rows"},m={class:"col-span-6 space-y-4 overflow-y-auto px-1 order-2",style:{height:"500px"}},w={class:"text-gray-500 text-sm"},k={class:"space-x-2"},T={key:0,class:"px-8 py-16 bg-white text-gray-700 shadow-md rounded text-sm"},P={class:"col-span-6 order-1"},_={class:"p-8 bg-white shadow-md rounded"},C=Object(o["g"])("h2",{class:"text-xl"},"Add a todo",-1);function S(e,t,n,r,c,a){return Object(o["p"])(),Object(o["d"])("div",v,[x,Object(o["g"])("div",h,[Object(o["g"])("div",y,[Object(o["g"])("div",m,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["t"])(e.todos,(function(t,n){return Object(o["p"])(),Object(o["d"])("div",{key:n,class:["p-8 bg-white shadow-md rounded flex items-center justify-between",{"bg-green-500":t.isDone}]},[Object(o["g"])("div",null,[Object(o["g"])("div",null,Object(o["w"])(t.text),1),Object(o["g"])("div",w,Object(o["w"])(t.createdAt.toString()),1)]),Object(o["g"])("div",k,[Object(o["g"])("button",{class:"px-2 text-red-600",title:"Remove todo",onClick:function(t){return e.deleteTask(n)}},"×",8,["onClick"]),t.isDone?(Object(o["p"])(),Object(o["d"])("button",{key:1,class:"px-2 text-orange-600",title:"Mark as undone",onClick:function(t){return e.undoneTask(n)}},"↶",8,["onClick"])):(Object(o["p"])(),Object(o["d"])("button",{key:0,class:"px-2 text-green-600",title:"Mark as done",onClick:function(t){return e.doneTask(n)}},"✓",8,["onClick"]))])],2)})),128)),0===e.todos.length?(Object(o["p"])(),Object(o["d"])("div",T," You dont have any task to do ")):Object(o["e"])("",!0)]),Object(o["g"])("div",P,[Object(o["g"])("div",_,[C,Object(o["B"])(Object(o["g"])("input",{type:"text",class:"p-2 mt-4 border rounded w-full","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.todoText=t}),onKeydown:t[2]||(t[2]=Object(o["C"])((function(){return e.addTodo&&e.addTodo.apply(e,arguments)}),["enter"]))},null,544),[[o["y"],e.todoText]])])])])])])}n("a434");var A=Object(o["h"])({name:"Todos",setup:function(){var e=Object(o["r"])([]),t=Object(o["s"])("");function n(){e.unshift({text:t.value,createdAt:(new Date).toString(),isDone:!1}),t.value=""}function r(t){confirm("Are you sure?")&&e.splice(t,1)}function c(t){e[t].isDone=!0}function a(t){e[t].isDone=!1}return{todos:e,todoText:t,addTodo:n,deleteTask:r,doneTask:c,undoneTask:a}}});A.render=S;var D=A,M=[{path:"/",name:"Home",component:g},{path:"/todos",name:"Todos",component:D}],H=Object(b["a"])({history:Object(b["b"])(""),routes:M}),J=H;n("845f");Object(o["c"])(l).use(J).mount("#app")},"845f":function(e,t,n){}});
//# sourceMappingURL=app.2f65b0ed.js.map