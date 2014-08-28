(function(){var c=this,rt=c._,e={},r=Array.prototype,o=Object.prototype,t=r.slice,ut=r.unshift,ft=o.toString,f=o.hasOwnProperty,y=r.forEach,p=r.map,w=r.reduce,b=r.reduceRight,k=r.filter,d=r.every,g=r.some,s=r.indexOf,nt=r.lastIndexOf,i,a,v,tt,u,h,it;o=Array.isArray;var et=Object.keys,l=Function.prototype.bind,n=function(n){return new u(n)};typeof module!="undefined"&&module.exports?(module.exports=n,n._=n):c._=n,n.VERSION="1.1.6",i=n.each=n.forEach=function(t,i,r){if(t!=null)if(y&&t.forEach===y)t.forEach(i,r);else if(n.isNumber(t.length)){for(var u=0,o=t.length;u<o;u++)if(i.call(r,t[u],u,t)===e)break}else for(u in t)if(f.call(t,u)&&i.call(r,t[u],u,t)===e)break},n.map=function(n,t,r){var u=[];return n==null?u:p&&n.map===p?n.map(t,r):(i(n,function(n,i,f){u[u.length]=t.call(r,n,i,f)}),u)},n.reduce=n.foldl=n.inject=function(t,r,u,f){var e=u!==void 0;if(t==null&&(t=[]),w&&t.reduce===w)return f&&(r=n.bind(r,f)),e?t.reduce(r,u):t.reduce(r);if(i(t,function(n,t,i){!e&&t===0?(u=n,e=!0):u=r.call(f,u,n,t,i)}),!e)throw new TypeError("Reduce of empty array with no initial value");return u},n.reduceRight=n.foldr=function(t,i,r,u){return(t==null&&(t=[]),b&&t.reduceRight===b)?(u&&(i=n.bind(i,u)),r!==void 0?t.reduceRight(i,r):t.reduceRight(i)):(t=(n.isArray(t)?t.slice():n.toArray(t)).reverse(),n.reduce(t,i,r,u))},n.find=n.detect=function(n,t,i){var r;return a(n,function(n,u,f){if(t.call(i,n,u,f))return r=n,!0}),r},n.filter=n.select=function(n,t,r){var u=[];return n==null?u:k&&n.filter===k?n.filter(t,r):(i(n,function(n,i,f){t.call(r,n,i,f)&&(u[u.length]=n)}),u)},n.reject=function(n,t,r){var u=[];return n==null?u:(i(n,function(n,i,f){t.call(r,n,i,f)||(u[u.length]=n)}),u)},n.every=n.all=function(n,t,r){var u=!0;return n==null?u:d&&n.every===d?n.every(t,r):(i(n,function(n,i,f){if(!(u=u&&t.call(r,n,i,f)))return e}),u)},a=n.some=n.any=function(t,r,u){r||(r=n.identity);var f=!1;return t==null?f:g&&t.some===g?t.some(r,u):(i(t,function(n,t,i){if(f=r.call(u,n,t,i))return e}),f)},n.include=n.contains=function(n,t){var i=!1;return n==null?i:s&&n.indexOf===s?n.indexOf(t)!=-1:(a(n,function(n){if(i=n===t)return!0}),i)},n.invoke=function(i,r){var u=t.call(arguments,2);return n.map(i,function(n){return(r.call?r||n:n[r]).apply(n,u)})},n.pluck=function(t,i){return n.map(t,function(n){return n[i]})},n.max=function(t,r,u){if(!r&&n.isArray(t))return Math.max.apply(Math,t);var f={computed:-Infinity};return i(t,function(n,t,i){t=r?r.call(u,n,t,i):n,t>=f.computed&&(f={value:n,computed:t})}),f.value},n.min=function(t,r,u){if(!r&&n.isArray(t))return Math.min.apply(Math,t);var f={computed:Infinity};return i(t,function(n,t,i){t=r?r.call(u,n,t,i):n,t<f.computed&&(f={value:n,computed:t})}),f.value},n.sortBy=function(t,i,r){return n.pluck(n.map(t,function(n,t,u){return{value:n,criteria:i.call(r,n,t,u)}}).sort(function(n,t){var i=n.criteria,r=t.criteria;return i<r?-1:i>r?1:0}),"value")},n.sortedIndex=function(t,i,r){var u,f,e;for(r||(r=n.identity),u=0,f=t.length;u<f;)e=u+f>>1,r(t[e])<r(i)?u=e+1:f=e;return u},n.toArray=function(i){return i?i.toArray?i.toArray():n.isArray(i)?i:n.isArguments(i)?t.call(i):n.values(i):[]},n.size=function(t){return n.toArray(t).length},n.first=n.head=function(n,i,r){return i!=null&&!r?t.call(n,0,i):n[0]},n.rest=n.tail=function(n,i,r){return t.call(n,i==null||r?1:i)},n.last=function(n){return n[n.length-1]},n.compact=function(t){return n.filter(t,function(n){return!!n})},n.flatten=function(t){return n.reduce(t,function(t,i){return n.isArray(i)?t.concat(n.flatten(i)):(t[t.length]=i,t)},[])},n.without=function(i){var r=t.call(arguments,1);return n.filter(i,function(t){return!n.include(r,t)})},n.uniq=n.unique=function(t,i){return n.reduce(t,function(t,r,u){return 0!=u&&(i===!0?n.last(t)==r:n.include(t,r))||(t[t.length]=r),t},[])},n.intersect=function(i){var r=t.call(arguments,1);return n.filter(n.uniq(i),function(t){return n.every(r,function(i){return n.indexOf(i,t)>=0})})},n.zip=function(){for(var r=t.call(arguments),u=n.max(n.pluck(r,"length")),f=Array(u),i=0;i<u;i++)f[i]=n.pluck(r,""+i);return f},n.indexOf=function(t,i,r){if(t==null)return-1;var u;if(r)return r=n.sortedIndex(t,i),t[r]===i?r:-1;if(s&&t.indexOf===s)return t.indexOf(i);for(r=0,u=t.length;r<u;r++)if(t[r]===i)return r;return-1},n.lastIndexOf=function(n,t){if(n==null)return-1;if(nt&&n.lastIndexOf===nt)return n.lastIndexOf(t);for(var i=n.length;i--;)if(n[i]===t)return i;return-1},n.range=function(n,t,i){arguments.length<=1&&(t=n||0,n=0),i=arguments[2]||1;for(var r=Math.max(Math.ceil((t-n)/i),0),u=0,f=Array(r);u<r;)f[u++]=n,n+=i;return f},n.bind=function(n,i){if(n.bind===l&&l)return l.apply(n,t.call(arguments,1));var r=t.call(arguments,2);return function(){return n.apply(i,r.concat(t.call(arguments)))}},n.bindAll=function(r){var u=t.call(arguments,1);return u.length==0&&(u=n.functions(r)),i(u,function(t){r[t]=n.bind(r[t],r)}),r},n.memoize=function(t,i){var r={};return i||(i=n.identity),function(){var n=i.apply(this,arguments);return f.call(r,n)?r[n]:r[n]=t.apply(this,arguments)}},n.delay=function(n,i){var r=t.call(arguments,2);return setTimeout(function(){return n.apply(n,r)},i)},n.defer=function(i){return n.delay.apply(n,[i,1].concat(t.call(arguments,1)))},v=function(n,t,i){var r;return function(){var u=this,f=arguments,e=function(){r=null,n.apply(u,f)};i&&clearTimeout(r),(i||!r)&&(r=setTimeout(e,t))}},n.throttle=function(n,t){return v(n,t,!1)},n.debounce=function(n,t){return v(n,t,!0)},n.once=function(n){var t=!1,i;return function(){return t?i:(t=!0,i=n.apply(this,arguments))}},n.wrap=function(n,i){return function(){var r=[n].concat(t.call(arguments));return i.apply(this,r)}},n.compose=function(){var n=t.call(arguments);return function(){for(var i=t.call(arguments),r=n.length-1;r>=0;r--)i=[n[r].apply(this,i)];return i[0]}},n.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},n.keys=et||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[],i;for(i in n)f.call(n,i)&&(t[t.length]=i);return t},n.values=function(t){return n.map(t,n.identity)},n.functions=n.methods=function(t){return n.filter(n.keys(t),function(i){return n.isFunction(t[i])}).sort()},n.extend=function(n){return i(t.call(arguments,1),function(t){for(var i in t)t[i]!==void 0&&(n[i]=t[i])}),n},n.defaults=function(n){return i(t.call(arguments,1),function(t){for(var i in t)n[i]==null&&(n[i]=t[i])}),n},n.clone=function(t){return n.isArray(t)?t.slice():n.extend({},t)},n.tap=function(n,t){return t(n),n},n.isEqual=function(t,i){var r,f,u;if(t===i)return!0;if(r=typeof t,r!=typeof i)return!1;if(t==i)return!0;if(!t&&i||t&&!i)return!1;if(t._chain&&(t=t._wrapped),i._chain&&(i=i._wrapped),t.isEqual)return t.isEqual(i);if(n.isDate(t)&&n.isDate(i))return t.getTime()===i.getTime();if(n.isNaN(t)&&n.isNaN(i))return!1;if(n.isRegExp(t)&&n.isRegExp(i))return t.source===i.source&&t.global===i.global&&t.ignoreCase===i.ignoreCase&&t.multiline===i.multiline;if(r!=="object"||t.length&&t.length!==i.length||(r=n.keys(t),f=n.keys(i),r.length!=f.length))return!1;for(u in t)if(!(u in i)||!n.isEqual(t[u],i[u]))return!1;return!0},n.isEmpty=function(t){if(n.isArray(t)||n.isString(t))return t.length===0;for(var i in t)if(f.call(t,i))return!1;return!0},n.isElement=function(n){return!!(n&&n.nodeType==1)},n.isArray=o||function(n){return ft.call(n)==="[object Array]"},n.isArguments=function(n){return!(!n||!f.call(n,"callee"))},n.isFunction=function(n){return!(!n||!n.constructor||!n.call||!n.apply)},n.isString=function(n){return!!(n===""||n&&n.charCodeAt&&n.substr)},n.isNumber=function(n){return!!(n===0||n&&n.toExponential&&n.toFixed)},n.isNaN=function(n){return n!==n},n.isBoolean=function(n){return n===!0||n===!1},n.isDate=function(n){return!(!n||!n.getTimezoneOffset||!n.setUTCFullYear)},n.isRegExp=function(n){return!(!n||!n.test||!n.exec||!(n.ignoreCase||n.ignoreCase===!1))},n.isNull=function(n){return n===null},n.isUndefined=function(n){return n===void 0},n.noConflict=function(){return c._=rt,this},n.identity=function(n){return n},n.times=function(n,t,i){for(var r=0;r<n;r++)t.call(i,r)},n.mixin=function(t){i(n.functions(t),function(i){it(i,n[i]=t[i])})},tt=0,n.uniqueId=function(n){var t=tt++;return n?n+t:t},n.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g},n.template=function(t,i){var r=n.templateSettings;return r="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+t.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(r.interpolate,function(n,t){return"',"+t.replace(/\\'/g,"'")+",'"}).replace(r.evaluate||null,function(n,t){return"');"+t.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",r=new Function("obj",r),i?r(i):r},u=function(n){this._wrapped=n},n.prototype=u.prototype,h=function(t,i){return i?n(t).chain():t},it=function(i,r){u.prototype[i]=function(){var i=t.call(arguments);return ut.call(i,this._wrapped),h(r.apply(n,i),this._chain)}},n.mixin(n),i(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];u.prototype[n]=function(){return t.apply(this._wrapped,arguments),h(this._wrapped,this._chain)}}),i(["concat","join","slice"],function(n){var t=r[n];u.prototype[n]=function(){return h(t.apply(this._wrapped,arguments),this._chain)}}),u.prototype.chain=function(){return this._chain=!0,this},u.prototype.value=function(){return this._wrapped}})(),function(){var r=this,v=r.Backbone,n,t,i,s,e,h;n=typeof exports!="undefined"?exports:r.Backbone={},n.VERSION="0.5.3",t=r._,t||typeof require=="undefined"||(t=require("underscore")._),i=r.jQuery||r.Zepto,n.noConflict=function(){return r.Backbone=v,this},n.emulateHTTP=!1,n.emulateJSON=!1,n.Events={bind:function(n,t,i){var r=this._callbacks||(this._callbacks={});return(r[n]||(r[n]=[])).push([t,i]),this},unbind:function(n,t){var i,r,u;if(n){if(i=this._callbacks)if(t){if(i=i[n],!i)return this;for(r=0,u=i.length;r<u;r++)if(i[r]&&t===i[r][0]){i[r]=null;break}}else i[n]=[]}else this._callbacks={};return this},trigger:function(n){var t,e,r,o,u=2,i,f;if(!(e=this._callbacks))return this;for(;u--;)if(t=u?n:"all",t=e[t])for(i=0,f=t.length;i<f;i++)(r=t[i])?(o=u?Array.prototype.slice.call(arguments,1):arguments,r[0].apply(r[1]||this,o)):(t.splice(i,1),i--,f--);return this}},n.Model=function(n,i){var r;n||(n={}),(r=this.defaults)&&(t.isFunction(r)&&(r=r.call(this)),n=t.extend({},r,n)),this.attributes={},this._escapedAttributes={},this.cid=t.uniqueId("c"),this.set(n,{silent:!0}),this._changed=!1,this._previousAttributes=t.clone(this.attributes),i&&i.collection&&(this.collection=i.collection),this.initialize(n,i)},t.extend(n.Model.prototype,n.Events,{_previousAttributes:null,_changed:!1,idAttribute:"id",initialize:function(){},toJSON:function(){return t.clone(this.attributes)},get:function(n){return this.attributes[n]},escape:function(n){var t;return(t=this._escapedAttributes[n])?t:(t=this.attributes[n],this._escapedAttributes[n]=(t==null?"":""+t).replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"))},has:function(n){return this.attributes[n]!=null},set:function(n,i){var f,e,o,r,u;if(i||(i={}),!n)return this;if(n.attributes&&(n=n.attributes),f=this.attributes,e=this._escapedAttributes,!i.silent&&this.validate&&!this._performValidation(n,i))return!1;this.idAttribute in n&&(this.id=n[this.idAttribute]),o=this._changing,this._changing=!0;for(r in n)u=n[r],t.isEqual(f[r],u)||(f[r]=u,delete e[r],this._changed=!0,i.silent||this.trigger("change:"+r,this,u,i));return o||i.silent||!this._changed||this.change(i),this._changing=!1,this},unset:function(n,t){if(!(n in this.attributes))return this;t||(t={});var i={};return(i[n]=void 0,!t.silent&&this.validate&&!this._performValidation(i,t))?!1:(delete this.attributes[n],delete this._escapedAttributes[n],n==this.idAttribute&&delete this.id,this._changed=!0,t.silent||(this.trigger("change:"+n,this,void 0,t),this.change(t)),this)},clear:function(n){n||(n={});var t,i=this.attributes,r={};for(t in i)r[t]=void 0;if(!n.silent&&this.validate&&!this._performValidation(r,n))return!1;if(this.attributes={},this._escapedAttributes={},this._changed=!0,!n.silent){for(t in i)this.trigger("change:"+t,this,void 0,n);this.change(n)}return this},fetch:function(t){t||(t={});var i=this,r=t.success;return t.success=function(n,u,f){if(!i.set(i.parse(n,f),t))return!1;r&&r(i,n)},t.error=u(t.error,i,t),(this.sync||n.sync).call(this,"read",this,t)},save:function(t,i){var r,f,e;return(i||(i={}),t&&!this.set(t,i))?!1:(r=this,f=i.success,i.success=function(n,t,u){if(!r.set(r.parse(n,u),i))return!1;f&&f(r,n,u)},i.error=u(i.error,r,i),e=this.isNew()?"create":"update",(this.sync||n.sync).call(this,e,this,i))},destroy:function(t){if(t||(t={}),this.isNew())return this.trigger("destroy",this,this.collection,t);var i=this,r=t.success;return t.success=function(n){i.trigger("destroy",i,i.collection,t),r&&r(i,n)},t.error=u(t.error,i,t),(this.sync||n.sync).call(this,"delete",this,t)},url:function(){var n=l(this.collection)||this.urlRoot||a();return this.isNew()?n:n+(n.charAt(n.length-1)=="/"?"":"/")+encodeURIComponent(this.id)},parse:function(n){return n},clone:function(){return new this.constructor(this)},isNew:function(){return this.id==null},change:function(n){this.trigger("change",this,n),this._previousAttributes=t.clone(this.attributes),this._changed=!1},hasChanged:function(n){return n?this._previousAttributes[n]!=this.attributes[n]:this._changed},changedAttributes:function(n){n||(n=this.attributes);var u=this._previousAttributes,r=!1,i;for(i in n)t.isEqual(u[i],n[i])||(r=r||{},r[i]=n[i]);return r},previous:function(n){return!n||!this._previousAttributes?null:this._previousAttributes[n]},previousAttributes:function(){return t.clone(this._previousAttributes)},_performValidation:function(n,t){var i=this.validate(n);return i?(t.error?t.error(this,i,t):this.trigger("error",this,i,t),!1):!0}}),n.Collection=function(n,i){i||(i={}),i.comparator&&(this.comparator=i.comparator),t.bindAll(this,"_onModelEvent","_removeReference"),this._reset(),n&&this.reset(n,{silent:!0}),this.initialize.apply(this,arguments)},t.extend(n.Collection.prototype,n.Events,{model:n.Model,initialize:function(){},toJSON:function(){return this.map(function(n){return n.toJSON()})},add:function(n,i){if(t.isArray(n))for(var r=0,u=n.length;r<u;r++)this._add(n[r],i);else this._add(n,i);return this},remove:function(n,i){if(t.isArray(n))for(var r=0,u=n.length;r<u;r++)this._remove(n[r],i);else this._remove(n,i);return this},get:function(n){return n==null?null:this._byId[n.id!=null?n.id:n]},getByCid:function(n){return n&&this._byCid[n.cid||n]},at:function(n){return this.models[n]},sort:function(n){if(n||(n={}),!this.comparator)throw Error("Cannot sort a set without a comparator");return this.models=this.sortBy(this.comparator),n.silent||this.trigger("reset",this,n),this},pluck:function(n){return t.map(this.models,function(t){return t.get(n)})},reset:function(n,t){return n||(n=[]),t||(t={}),this.each(this._removeReference),this._reset(),this.add(n,{silent:!0}),t.silent||this.trigger("reset",this,t),this},fetch:function(t){t||(t={});var i=this,r=t.success;return t.success=function(n,u,f){i[t.add?"add":"reset"](i.parse(n,f),t),r&&r(i,n)},t.error=u(t.error,i,t),(this.sync||n.sync).call(this,"read",this,t)},create:function(n,t){var r=this,i;return(t||(t={}),n=this._prepareModel(n,t),!n)?!1:(i=t.success,t.success=function(n,u,f){r.add(n,t),i&&i(n,u,f)},n.save(null,t),n)},parse:function(n){return n},chain:function(){return t(this.models).chain()},_reset:function(){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(t,i){if(t instanceof n.Model)t.collection||(t.collection=this);else{var r=t,t=new this.model(r,{collection:this});t.validate&&!t._performValidation(r,i)&&(t=!1)}return t},_add:function(n,t){if(t||(t={}),n=this._prepareModel(n,t),!n)return!1;var i=this.getByCid(n);if(i)throw Error(["Can't add the same model to a set twice",i.id]);return this._byId[n.id]=n,this._byCid[n.cid]=n,this.models.splice(t.at!=null?t.at:this.comparator?this.sortedIndex(n,this.comparator):this.length,0,n),n.bind("all",this._onModelEvent),this.length++,t.silent||n.trigger("add",n,this,t),n},_remove:function(n,t){return(t||(t={}),n=this.getByCid(n)||this.get(n),!n)?null:(delete this._byId[n.id],delete this._byCid[n.cid],this.models.splice(this.indexOf(n),1),this.length--,t.silent||n.trigger("remove",n,this,t),this._removeReference(n),n)},_removeReference:function(n){this==n.collection&&delete n.collection,n.unbind("all",this._onModelEvent)},_onModelEvent:function(n,t,i,r){(n=="add"||n=="remove")&&i!=this||(n=="destroy"&&this._remove(t,r),t&&n==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],this._byId[t.id]=t),this.trigger.apply(this,arguments))}}),t.each(["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","rest","last","without","indexOf","lastIndexOf","isEmpty","groupBy"],function(i){n.Collection.prototype[i]=function(){return t[i].apply(t,[this.models].concat(t.toArray(arguments)))}}),n.Router=function(n){n||(n={}),n.routes&&(this.routes=n.routes),this._bindRoutes(),this.initialize.apply(this,arguments)};var y=/:([\w\d]+)/g,p=/\*([\w\d]+)/g,w=/[-[\]{}()+?.,\\^$|#\s]/g;t.extend(n.Router.prototype,n.Events,{initialize:function(){},route:function(i,r,u){n.history||(n.history=new n.History),t.isRegExp(i)||(i=this._routeToRegExp(i)),n.history.route(i,t.bind(function(n){n=this._extractParameters(i,n),u.apply(this,n),this.trigger.apply(this,["route:"+r].concat(n))},this))},navigate:function(t,i){n.history.navigate(t,i)},_bindRoutes:function(){var t,n,i;if(this.routes){t=[];for(n in this.routes)t.unshift([n,this.routes[n]]);for(n=0,i=t.length;n<i;n++)this.route(t[n][0],t[n][1],this[t[n][1]])}},_routeToRegExp:function(n){return n=n.replace(w,"\\$&").replace(y,"([^/]*)").replace(p,"(.*?)"),RegExp("^"+n+"$")},_extractParameters:function(n,t){return n.exec(t).slice(1)}}),n.History=function(){this.handlers=[],t.bindAll(this,"checkUrl")};var f=/^#*/,b=/msie [\w.]+/,o=!1;t.extend(n.History.prototype,{interval:50,getFragment:function(n,t){if(n==null)if(this._hasPushState||t){var n=window.location.pathname,i=window.location.search;i&&(n+=i),n.indexOf(this.options.root)==0&&(n=n.substr(this.options.root.length))}else n=window.location.hash;return decodeURIComponent(n.replace(f,""))},start:function(n){if(o)throw Error("Backbone.history has already been started");this.options=t.extend({},{root:"/"},this.options,n),this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.options.pushState||!window.history||!window.history.pushState);var n=this.getFragment(),r=document.documentMode;if((r=b.exec(navigator.userAgent.toLowerCase())&&(!r||r<=7))&&(this.iframe=i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(n)),this._hasPushState?i(window).bind("popstate",this.checkUrl):"onhashchange"in window&&!r?i(window).bind("hashchange",this.checkUrl):setInterval(this.checkUrl,this.interval),this.fragment=n,o=!0,n=window.location,r=n.pathname==this.options.root,!this._wantsPushState||this._hasPushState||r)this._wantsPushState&&this._hasPushState&&r&&n.hash&&(this.fragment=n.hash.replace(f,""),window.history.replaceState({},document.title,n.protocol+"//"+n.host+this.options.root+this.fragment));else return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;if(!this.options.silent)return this.loadUrl()},route:function(n,t){this.handlers.unshift({route:n,callback:t})},checkUrl:function(){var n=this.getFragment();if(n==this.fragment&&this.iframe&&(n=this.getFragment(this.iframe.location.hash)),n==this.fragment||n==decodeURIComponent(this.fragment))return!1;this.iframe&&this.navigate(n),this.loadUrl()||this.loadUrl(window.location.hash)},loadUrl:function(n){var i=this.fragment=this.getFragment(n);return t.any(this.handlers,function(n){if(n.route.test(i))return n.callback(i),!0})},navigate:function(n,t){var i=(n||"").replace(f,""),r;this.fragment==i||this.fragment==decodeURIComponent(i)||(this._hasPushState?(r=window.location,i.indexOf(this.options.root)!=0&&(i=this.options.root+i),this.fragment=i,window.history.pushState({},document.title,r.protocol+"//"+r.host+i)):(window.location.hash=this.fragment=i,this.iframe&&i!=this.getFragment(this.iframe.location.hash))&&(this.iframe.document.open().close(),this.iframe.location.hash=i),t&&this.loadUrl(n))}}),n.View=function(n){this.cid=t.uniqueId("view"),this._configure(n||{}),this._ensureElement(),this.delegateEvents(),this.initialize.apply(this,arguments)},s=/^(\S+)\s*(.*)$/,e=["model","collection","el","id","attributes","className","tagName"],t.extend(n.View.prototype,n.Events,{tagName:"div",$:function(n){return i(n,this.el)},initialize:function(){},render:function(){return this},remove:function(){return i(this.el).remove(),this},make:function(n,t,r){return n=document.createElement(n),t&&i(n).attr(t),r&&i(n).html(r),n},delegateEvents:function(n){var f,r;if(n||(n=this.events)){t.isFunction(n)&&(n=n.call(this)),i(this.el).unbind(".delegateEvents"+this.cid);for(f in n){if(r=this[n[f]],!r)throw Error('Event "'+n[f]+'" does not exist');var u=f.match(s),e=u[1],u=u[2],r=t.bind(r,this);e+=".delegateEvents"+this.cid,u===""?i(this.el).bind(e,r):i(this.el).delegate(u,e,r)}}},_configure:function(n){var i,u,r;for(this.options&&(n=t.extend({},this.options,n)),i=0,u=e.length;i<u;i++)r=e[i],n[r]&&(this[r]=n[r]);this.options=n},_ensureElement:function(){if(this.el)t.isString(this.el)&&(this.el=i(this.el).get(0));else{var n=this.attributes||{};this.id&&(n.id=this.id),this.className&&(n["class"]=this.className),this.el=this.make(this.tagName,n)}}}),n.Model.extend=n.Collection.extend=n.Router.extend=n.View.extend=function(n,t){var i=k(this,n,t);return i.extend=this.extend,i},h={create:"POST",update:"PUT","delete":"DELETE",read:"GET"},n.sync=function(r,u,f){var e=h[r],f=t.extend({type:e,dataType:"json"},f);return f.url||(f.url=l(u)||a()),!f.data&&u&&(r=="create"||r=="update")&&(f.contentType="application/json",f.data=JSON.stringify(u.toJSON())),n.emulateJSON&&(f.contentType="application/x-www-form-urlencoded",f.data=f.data?{model:f.data}:{}),n.emulateHTTP&&(e==="PUT"||e==="DELETE")&&(n.emulateJSON&&(f.data._method=e),f.type="POST",f.beforeSend=function(n){n.setRequestHeader("X-HTTP-Method-Override",e)}),f.type==="GET"||n.emulateJSON||(f.processData=!1),i.ajax(f)};var c=function(){},k=function(n,i,r){var u;return u=i&&i.hasOwnProperty("constructor")?i.constructor:function(){return n.apply(this,arguments)},t.extend(u,n),c.prototype=n.prototype,u.prototype=new c,i&&t.extend(u.prototype,i),r&&t.extend(u,r),u.prototype.constructor=u,u.__super__=n.prototype,u},l=function(n){return!n||!n.url?null:t.isFunction(n.url)?n.url():n.url},a=function(){throw Error('A "url" property or function must be specified');},u=function(n,t,i){return function(r){n?n(t,r,i):t.trigger("error",t,r,i)}}}.call(this);var Mustache=function(){var n=function(){};return n.prototype={otag:"{{",ctag:"}}",pragmas:{},buffer:[],pragmas_implemented:{"IMPLICIT-ITERATOR":!0},context:{},render:function(n,t,i,r){if(r||(this.context=t,this.buffer=[]),!this.includes("",n)){if(r)return n;this.send(n);return}if(n=this.render_pragmas(n),n=this.render_section(n,t,i),r)return this.render_tags(n,t,i,r);this.render_tags(n,t,i,r)},send:function(n){n!=""&&this.buffer.push(n)},render_pragmas:function(n){if(!this.includes("%",n))return n;var t=this;return n.replace(RegExp(this.otag+"%([\\w-]+) ?([\\w]+=[\\w]+)?"+this.ctag),function(n,i,r){if(!t.pragmas_implemented[i])throw{message:"This implementation of mustache doesn't understand the '"+i+"' pragma"};return t.pragmas[i]={},r&&(n=r.split("="),t.pragmas[i][n[0]]=n[1]),""})},render_partial:function(n,t,i){if(n=this.trim(n),!i||i[n]===void 0)throw{message:"unknown_partial '"+n+"'"};return typeof t[n]!="object"?this.render(i[n],t,i,!0):this.render(i[n],t[n],i,!0)},render_section:function(n,t,i){if(!this.includes("#",n)&&!this.includes("^",n))return n;var r=this;return n.replace(RegExp(this.otag+"(\\^|\\#)\\s*(.+)\\s*"+this.ctag+"\n*([\\s\\S]+?)"+this.otag+"\\/\\s*\\2\\s*"+this.ctag+"\\s*","mg"),function(n,u,f,e){return(n=r.find(f,t),u=="^")?!n||r.is_array(n)&&n.length===0?r.render(e,t,i,!0):"":u=="#"?r.is_array(n)?r.map(n,function(n){return r.render(e,r.create_context(n),i,!0)}).join(""):r.is_object(n)?r.render(e,r.create_context(n),i,!0):typeof n=="function"?n.call(t,e,function(n){return r.render(n,t,i,!0)}):n?r.render(e,t,i,!0):"":void 0})},render_tags:function(n,t,i,r){for(var u=this,e=function(){return RegExp(u.otag+"(=|!|>|\\{|%)?([^\\/#\\^]+?)\\1?"+u.ctag+"+","g")},o=e(),s=function(n,r,f){switch(r){case"!":return"";case"=":return u.set_delimiters(f),o=e(),"";case">":return u.render_partial(f,t,i);case"{":return u.find(f,t);default:return u.escape(u.find(f,t))}},n=n.split("\n"),f=0;f<n.length;f++)n[f]=n[f].replace(o,s,this),r||this.send(n[f]);if(r)return n.join("\n")},set_delimiters:function(n){n=n.split(" "),this.otag=this.escape_regex(n[0]),this.ctag=this.escape_regex(n[1])},escape_regex:function(n){return arguments.callee.sRE||(arguments.callee.sRE=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","g")),n.replace(arguments.callee.sRE,"\\$1")},find:function(n,t){var n=this.trim(n),i;return(t[n]===!1||t[n]===0||t[n]?i=t[n]:(this.context[n]===!1||this.context[n]===0||this.context[n])&&(i=this.context[n]),typeof i=="function")?i.apply(t):i!==void 0?i:""},includes:function(n,t){return t.indexOf(this.otag+n)!=-1},escape:function(n){return String(n===null?"":n).replace(/&(?!\w+;)|["'<>\\]/g,function(n){switch(n){case"&":return"&amp;";case"\\":return"\\\\";case'"':return"&quot;";case"'":return"&#39;";case"<":return"&lt;";case">":return"&gt;";default:return n}})},create_context:function(n){var t,i;return this.is_object(n)?n:(t=".",this.pragmas["IMPLICIT-ITERATOR"]&&(t=this.pragmas["IMPLICIT-ITERATOR"].iterator),i={},i[t]=n,i)},is_object:function(n){return n&&typeof n=="object"},is_array:function(n){return Object.prototype.toString.call(n)==="[object Array]"},trim:function(n){return n.replace(/^\s*|\s*$/g,"")},map:function(n,t){if(typeof n.map=="function")return n.map(t);for(var r=[],u=n.length,i=0;i<u;i++)r.push(t(n[i]));return r}},{name:"mustache.js",version:"0.3.1-dev",to_html:function(t,i,r,u){var f=new n;return u&&(f.send=u),f.render(t,i,r),u?void 0:f.buffer.join("\n")}}}();(function(n){var t={},r={},i,u,f;i={createLock:function(n,i){return t[n]=i?!0:!1,this.isLocked(n)},destroyLock:function(n){return delete t[n]},lock:function(n){t[n]!==void 0&&(t[n]=!0)},unlock:function(n){t[n]!==void 0&&(t[n]=!1)},isLocked:function(n){if(typeof t[n]=="boolean")return t[n]},lockExists:function(n){return t[n]!==void 0}},u={start:function(n,t,u){if(!n)throw'cq.start: "sequenceName" not provided!';return r.hasOwnProperty(n)&&(u=!!t,t=r[n]),i.lockExists(n)||i.createLock(n),!i.isLocked(n)||u===!0?(i.lock(n),typeof t=="function"&&t(n),!0):!1},end:function(n){return i.unlock(n),i.destroyLock(n)},save:function(n,t){return r[n]=t},destroy:function(n){i.destroyLock(n),delete r[n]}},n.cq=new function(){};for(f in u)u.hasOwnProperty(f)&&(n.cq[f]=u[f])})(this);
/*!
* MinPubSub
* Copyright(c) 2011 Daniel Lamb <daniellmb.com>
* MIT Licensed
*/
this.pubsub={},function(n){var t=n.c_||{};n.publish=function(i,r){for(var u=t[i],f=u?u.length:0;f--;)u[f].apply(n,r||[])},n.subscribe=function(n,i){return t[n]||(t[n]=[]),t[n].push(i),[n,i]},n.unsubscribe=function(n){for(var i=t[n[0]],n=n[1],r=i?i.length:0;r--;)i[r]===n&&i.splice(r,1)}}(this.pubsub),function(n){var t=function(t){return function(r,u){var f=r.split("."),e=f.pop(),f=i(f,t),o=f[e];if(n(o).isFunction()&&u&&o!==u)throw'Cannot define a new function "'+r+'", because one is already defined.';return f[e]&&!n(u).isFunction()&&!n(f[e]).isFunction()?n(f[e]).extend(u):arguments.length>1&&(f[e]=u),f[e]}},i=function(t,i){return n(t).reduce(function(n,t){return n[t]=n[t]||{},n[t]},i)},r=window.extend;window.extend=t(window),window.extend.myNamespace=function(n){return n.extend=t(n),n.extend},window.extend.noConflict=function(){var n=window.extend;return window.extend=r,n}}(_)