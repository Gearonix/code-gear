var y=function(c,a){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])},y(c,a)};function h(c,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");y(c,a);function e(){this.constructor=c}c.prototype=a===null?Object.create(a):(e.prototype=a.prototype,new e)}var p=function(){return p=Object.assign||function(a){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a},p.apply(this,arguments)};function _(c,a){var e={};for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&a.indexOf(n)<0&&(e[n]=c[n]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(c);o<n.length;o++)a.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(c,n[o])&&(e[n[o]]=c[n[o]]);return e}function w(c,a,e,n){function o(t){return t instanceof e?t:new e(function(l){l(t)})}return new(e||(e=Promise))(function(t,l){function i(u){try{r(n.next(u))}catch(s){l(s)}}function f(u){try{r(n.throw(u))}catch(s){l(s)}}function r(u){u.done?t(u.value):o(u.value).then(i,f)}r((n=n.apply(c,a||[])).next())})}function b(c,a){var e={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},n,o,t,l;return l={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function i(r){return function(u){return f([r,u])}}function f(r){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,r[0]&&(e=0)),e;)try{if(n=1,o&&(t=r[0]&2?o.return:r[0]?o.throw||((t=o.return)&&t.call(o),0):o.next)&&!(t=t.call(o,r[1])).done)return t;switch(o=0,t&&(r=[r[0]&2,t.value]),r[0]){case 0:case 1:t=r;break;case 4:return e.label++,{value:r[1],done:!1};case 5:e.label++,o=r[1],r=[0];continue;case 7:r=e.ops.pop(),e.trys.pop();continue;default:if(t=e.trys,!(t=t.length>0&&t[t.length-1])&&(r[0]===6||r[0]===2)){e=0;continue}if(r[0]===3&&(!t||r[1]>t[0]&&r[1]<t[3])){e.label=r[1];break}if(r[0]===6&&e.label<t[1]){e.label=t[1],t=r;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(r);break}t[2]&&e.ops.pop(),e.trys.pop();continue}r=a.call(c,e)}catch(u){r=[6,u],o=0}finally{n=t=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}}function d(c,a,e){if(e||arguments.length===2)for(var n=0,o=a.length,t;n<o;n++)(t||!(n in a))&&(t||(t=Array.prototype.slice.call(a,0,n)),t[n]=a[n]);return c.concat(t||Array.prototype.slice.call(a))}export{p as _,_ as a,d as b,h as c,w as d,b as e};
//# sourceMappingURL=tslib.es6-0f2e948e.js.map
