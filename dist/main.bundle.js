!function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=p.p+""+e+"."+w+".hot-update.js",t.appendChild(n)}function r(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=p.p+""+w+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}function o(e){var t=H[e];if(!t)return p;var n=function(n){return t.hot.active?(H[n]?H[n].parents.indexOf(e)<0&&H[n].parents.push(e):(m=[e],y=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),m=[]),p(n)};for(var r in p)Object.prototype.hasOwnProperty.call(p,r)&&"e"!==r&&Object.defineProperty(n,r,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(t){p[e]=t}}}(r));return n.e=function(e){function t(){D--,"prepare"===k&&(R[e]||l(e),0===D&&0===E&&f())}return"ready"===k&&c("prepare"),D++,p.e(e).then(t,function(e){throw t(),e})},n}function i(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:y!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:s,apply:d,status:function(e){if(!e)return k;x.push(e)},addStatusHandler:function(e){x.push(e)},removeStatusHandler:function(e){var t=x.indexOf(e);t>=0&&x.splice(t,1)},data:g[e]};return y=void 0,t}function c(e){k=e;for(var t=0;t<x.length;t++)x[t].call(null,e)}function a(e){return+e+""===e?+e:e}function s(e){if("idle"!==k)throw new Error("check() is only allowed in idle status");return O=e,c("check"),r(j).then(function(e){if(!e)return c("idle"),null;M={},R={},S=e.c,_=e.h,c("prepare");var t=new Promise(function(e,t){v={resolve:e,reject:t}});b={};return l(0),"prepare"===k&&0===D&&0===E&&f(),t})}function u(e,t){if(S[e]&&M[e]){M[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(b[n]=t[n]);0==--E&&0===D&&f()}}function l(e){S[e]?(M[e]=!0,E++,n(e)):R[e]=!0}function f(){c("ready");var e=v;if(v=null,e)if(O)Promise.resolve().then(function(){return d(O)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in b)Object.prototype.hasOwnProperty.call(b,n)&&t.push(a(n));e.resolve(t)}}function d(n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==k)throw new Error("apply() is only allowed in ready status");n=n||{};var o,i,s,u,l,f={},d=[],h={},y=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var v in b)if(Object.prototype.hasOwnProperty.call(b,v)){l=a(v);var O;O=b[v]?function(e){for(var t=[e],n={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var i=o.pop(),c=i.id,a=i.chain;if((u=H[c])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(u.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var s=0;s<u.parents.length;s++){var l=u.parents[s],f=H[l];if(f){if(f.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([l]),moduleId:c,parentId:l};t.indexOf(l)>=0||(f.hot._acceptedDependencies[c]?(n[l]||(n[l]=[]),r(n[l],[c])):(delete n[l],t.push(l),o.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(l):{type:"disposed",moduleId:v};var j=!1,P=!1,x=!1,E="";switch(O.chain&&(E="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+O.moduleId+E));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+E));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(j=new Error("Aborted because "+l+" is not accepted"+E));break;case"accepted":n.onAccepted&&n.onAccepted(O),P=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),x=!0;break;default:throw new Error("Unexception type "+O.type)}if(j)return c("abort"),Promise.reject(j);if(P){h[l]=b[l],r(d,O.outdatedModules);for(l in O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,l)&&(f[l]||(f[l]=[]),r(f[l],O.outdatedDependencies[l]))}x&&(r(d,[O.moduleId]),h[l]=y)}var D=[];for(i=0;i<d.length;i++)l=d[i],H[l]&&H[l].hot._selfAccepted&&D.push({module:l,errorHandler:H[l].hot._selfAccepted});c("dispose"),Object.keys(S).forEach(function(e){!1===S[e]&&t(e)});for(var R,M=d.slice();M.length>0;)if(l=M.pop(),u=H[l]){var I={},A=u.hot._disposeHandlers;for(s=0;s<A.length;s++)(o=A[s])(I);for(g[l]=I,u.hot.active=!1,delete H[l],delete f[l],s=0;s<u.children.length;s++){var C=H[u.children[s]];C&&((R=C.parents.indexOf(l))>=0&&C.parents.splice(R,1))}}var T,q;for(l in f)if(Object.prototype.hasOwnProperty.call(f,l)&&(u=H[l]))for(q=f[l],s=0;s<q.length;s++)T=q[s],(R=u.children.indexOf(T))>=0&&u.children.splice(R,1);c("apply"),w=_;for(l in h)Object.prototype.hasOwnProperty.call(h,l)&&(e[l]=h[l]);var F=null;for(l in f)if(Object.prototype.hasOwnProperty.call(f,l)&&(u=H[l])){q=f[l];var U=[];for(i=0;i<q.length;i++)if(T=q[i],o=u.hot._acceptedDependencies[T]){if(U.indexOf(o)>=0)continue;U.push(o)}for(i=0;i<U.length;i++){o=U[i];try{o(q)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:q[i],error:e}),n.ignoreErrored||F||(F=e)}}}for(i=0;i<D.length;i++){var B=D[i];l=B.module,m=[l];try{p(l)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,orginalError:e,originalError:e}),n.ignoreErrored||F||(F=t),F||(F=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||F||(F=e)}}return F?(c("fail"),Promise.reject(F)):(c("idle"),new Promise(function(e){e(d)}))}function p(t){if(H[t])return H[t].exports;var n=H[t]={i:t,l:!1,exports:{},hot:i(t),parents:(P=m,m=[],P),children:[]};return e[t].call(n.exports,n,n.exports,o(t)),n.l=!0,n.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){u(e,t),h&&h(e,t)};var y,v,b,_,O=!0,w="8454bc8bd8800464ad8a",j=1e4,g={},m=[],P=[],x=[],k="idle",E=0,D=0,R={},M={},S={},H={};p.m=e,p.c=H,p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="",p.h=function(){return w},o(2)(p.s=2)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),s=function(e){return e&&e.__esModule?e:{default:e}}(a),u=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._shape=[],e}return i(t,e),c(t,[{key:"startShape",value:function(){return this._shape.length=0,this}},{key:"fillStyle",value:function(e){return this.shape.push({type:"fillStyle",value:e}),this}},{key:"strokeStyle",value:function(e){return this.shape.push({type:"strokeStyle",value:e}),this}},{key:"fillRect",value:function(e){return this.shape.push({type:"fillRect",value:e}),this}},{key:"strokeRect",value:function(e){return this.shape.push({type:"strokeRect",value:e}),this}},{key:"setRotationPoint",value:function(e){return this.rotationPoint=e,this}},{key:"shape",get:function(){return this._shape}}]),t}(s.default);t.default=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=this;r(this,e),this.addChild=function(e,n){e.parent=t,n?t.children.splice(n,0,e):t.children.push(e)},this.removeChild=function(e){t.children=t.children.filter(function(t){return e!==t})},this.rotate=0,this.children=[]}return o(e,[{key:"x",get:function(){return this._x},set:function(e){this._x=e}},{key:"y",get:function(){return this._y},set:function(e){this._y=e}},{key:"position",get:function(){return{x:this._x,y:this._y}},set:function(e){this._x=e.x,this._y=e.y}},{key:"anchor",get:function(){return this._anchor},set:function(e){this._anchor=e}},{key:"rotate",get:function(){return+this._rotate.toFixed(4)},set:function(e){this._rotate=e}},{key:"scale",get:function(){return this._scale},set:function(e){this._scale=e}},{key:"alpha",get:function(){return this._alpha},set:function(e){this._alpha=e}}]),e}();t.default=i},function(e,t,n){"use strict";n(3);var r=n(4),o=n(5),i=n(7),c=function(e){return e&&e.__esModule?e:{default:e}}(i),a=document.querySelector("#squares").getContext("2d"),s=new c.default(a);s.render.start(),s.addRenderObject(r.g1),s.addRenderObject(r.g2),s.addRenderObject(r.g3),s.addRenderObject(o.container)},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.g3=t.g2=t.g1=void 0;var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=new o.default;i.position={x:100,y:100},i.setRotationPoint({x:150,y:150}),i.alpha=.5,i.rotate=0,i.startShape().fillStyle("#6ECDFF").fillRect([0,0,100,100]).strokeStyle("#384AC1").strokeRect([0,0,100,100]);var c=new o.default;c.position={x:150,y:150},c.setRotationPoint({x:200,y:200}),c.alpha=.5,c.rotate=0,c.startShape().fillStyle("#52FFA9").fillRect([0,0,100,100]).strokeStyle("#007D5C").strokeRect([0,0,100,100]);var a=new o.default;a.position={x:200,y:100},a.setRotationPoint({x:250,y:150}),a.alpha=.5,a.rotate=0,a.startShape().fillStyle("#FF7DCE").fillRect([0,0,100,100]).strokeStyle("#93224D").strokeRect([0,0,100,100]);!function e(){i.rotate+=.1,c.rotate+=.1,a.rotate+=.1,requestAnimationFrame(e)}(),t.g1=i,t.g2=c,t.g3=a},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.container=void 0;var o=n(6),i=r(o),c=n(0),a=(r(c),new i.default);t.container=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),a=function(e){return e&&e.__esModule?e:{default:e}}(c),s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return i(t,e),t}(a.default);t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),c=r(i),a=n(9),s=r(a),u=function e(t){var n=this;o(this,e),this.startRender=function(){n.render.start()},this.addRenderObject=function(e,t){n.scene.add(e,t),n.render.renderObjects(n.scene.sceneObjects)},this.ctx=t,this.scene=new s.default,this.render=new c.default(this.ctx)};t.default=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o),c=function e(t){r(this,e),a.call(this),this.ctx=t,this.rObjects=[],this.renderTree={}},a=function(){var e=this;this.start=function(){e.rendering=!0,e.animation()},this.stop=function(){e.rendering=!1},this.renderObjects=function(t){e.rObjects=t},this.animation=function(){e.ctx.clearRect(0,0,500,500),e.rObjects.forEach(function(t){e.renderObject(t)}),e.timeoutId=requestAnimationFrame(function(){return e.animation()})},this.renderObject=function(t){t instanceof i.default&&e.renderGeometry(t)},this.renderBaseObject=function(t){var n=e.ctx;t.rotate&&n.rotate(Math.PI/180*t.rotate),t.alpha&&(n.globalAlpha=t.alpha)},this.renderGeometry=function(t){var n=e.ctx;n.save(),t.rotationPoint?n.translate(t.rotationPoint.x,t.rotationPoint.y):t.position?n.translate(t.x,t.y):(t.position={x:0,y:0},n.translate(0,0)),e.renderBaseObject(t),t.shape.forEach(function(e){"fillStyle"===e.type&&(n[e.type]=e.value),"strokeStyle"===e.type&&(n[e.type]=e.value),"fillRect"===e.type&&n[e.type](t.rotationPoint?t.x-t.rotationPoint.x:0,t.rotationPoint?t.y-t.rotationPoint.y:0,e.value[2],e.value[3]),"strokeRect"===e.type&&n[e.type](t.rotationPoint?t.x-t.rotationPoint.x:0,t.rotationPoint?t.y-t.rotationPoint.y:0,e.value[2],e.value[3])}),n.restore()}};t.default=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function e(){var t=this;r(this,e),this.sceneObjects=[],this.add=function(e,n){n?t.sceneObjects.splice(n,0,e):t.sceneObjects.push(e)},this.remove=function(e){return t.sceneObjects=t.sceneObjects.filter(function(t){return t!==e})}};t.default=o}]);