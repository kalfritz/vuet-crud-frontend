(function(t){function e(e){for(var n,o,i=e[0],c=e[1],s=e[2],p=0,d=[];p<i.length;p++)o=i[p],u[o]&&d.push(u[o][0]),u[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==u[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},u={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),u=r("ce5b"),a=r.n(u);r("bf40");n["default"].use(a.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},iconfont:"md"});var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-list-tile",[r("v-list-tile-action",[r("v-icon",[t._v("view_list")])],1),r("v-list-tile-content",[r("v-list-tile-title",[r("router-link",{attrs:{to:{name:"Products"}}},[t._v("Products")])],1)],1)],1),r("v-list-tile",[r("v-list-tile-action",[r("v-icon",[t._v("view_list")])],1),r("v-list-tile-content",[r("v-list-tile-title",[r("router-link",{attrs:{to:{name:"Create"}}},[t._v("Create Prduct")])],1)],1)],1)],1)],1),r("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",app:""}},[r("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("v-toolbar-title",[t._v("CJs Products")])],1),r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",[r("router-view")],1)],1)],1),r("v-footer",{attrs:{color:"indigo",app:""}},[r("span",{staticClass:"white--text"},[t._v("© 2019")])])],1)},i=[],c={name:"App",data:function(){return{drawer:!1}}},s=c,l=r("2877"),p=Object(l["a"])(s,o,i,!1,null,null,null),d=p.exports,m=(r("96cf"),r("3b8d")),f=r("2f62"),v=r("f499"),h=r.n(v),b="https://vuetproducts.herokuapp.com/api/v1/products/",g={getProducts:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(b);case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),getProduct:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/").concat(e));case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),createProduct:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b),{method:"POST",headers:{"content-type":"application/json"},body:h()(e)});case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),updateProduct:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/").concat(e,"/edit"),{method:"PUT",headers:{"content-type":"application/json"},body:h()(r)});case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}},t)}));function e(e,r){return t.apply(this,arguments)}return e}(),deleteProduct:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/").concat(e),{method:"DELETE"});case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()};n["default"].use(f["a"]);var w=new f["a"].Store({state:{products:[],product:{},newProduct:{title:"",description:"",price:"",quantity:"",image:""}},getters:{getProducts:function(t){return t.products},getProduct:function(t){return t.product}},actions:{getProducts:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.getProducts();case 2:r=t.sent,e.commit("setProducts",r),console.log(r);case 5:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),getProduct:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.getProduct(r);case 2:n=t.sent,e.commit("setProduct",n),console.log(n);case 5:case"end":return t.stop()}},t)}));function e(e,r){return t.apply(this,arguments)}return e}()},mutations:{setProducts:function(t,e){t.products=e},setProduct:function(t,e){t.product=e}}}),x=r("8c4f"),y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"landing"},[r("v-btn",{attrs:{to:"/products"}},[t._v("Products")])],1)},_=[],P={name:"Landing"},j=P,R=Object(l["a"])(j,y,_,!1,null,null,null),k=R.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.products,function(e){return r("v-flex",{key:e.id,attrs:{xs12:"",md4:""}},[r("v-card",[r("v-img",{attrs:{src:e.image,"aspect-ratio":"2.75",height:"25vh"}}),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.title))]),r("div",[t._v(" "+t._s(e.description)+" ")]),r("h4",[t._v("$"+t._s(e.price))]),r("small",[t._v(t._s(e.quantity)+" in stock")])])]),r("v-card-actions",[r("v-btn",{attrs:{to:{name:"Product",params:{id:e._id}},flat:"",color:"orange"}},[t._v("View")])],1)],1)],1)}),1)},$=[],q={name:"Products",data:function(){return{products:[]}},mounted:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.getProducts();case 2:e=t.sent,this.products=e;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},E=q,F=Object(l["a"])(E,O,$,!1,null,null,null),C=F.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs8:""}},[r("v-card",[r("v-img",{attrs:{src:t.product.image,height:"60vh"}}),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.product.title))]),r("div",[t._v(t._s(t.product.description))]),r("h4",[t._v("$"+t._s(t.product.price))]),r("small",[t._v(t._s(t.product.quantity)+" in stock")])])]),r("v-card-actions",[r("v-btn",{attrs:{to:{name:"Edit",params:{id:t.product._id}},flat:"",color:"blue"}},[t._v("Edit")]),r("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.deleteProduct()}}},[t._v("Delete")])],1)],1)],1)],1)},T=[],N={name:"Product",data:function(){return{product:{}}},mounted:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.params.id,t.next=3,g.getProduct(e);case 3:r=t.sent,this.product=r;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{deleteProduct:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.params.id,t.next=3,g.deleteProduct(e);case 3:r=t.sent,console.log(r),this.$router.push({name:"Products"});case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},M=N,D=Object(l["a"])(M,S,T,!1,null,null,null),J=D.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ProductForm",{attrs:{product:t.product,onSubmit:t.submit,msg:t.msg}})},Q=[],A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("h1",[t._v(t._s(t.msg))]),r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{label:"Title",required:"","validate-on-blur":"",rules:t.titleRules},model:{value:t.product.title,callback:function(e){t.$set(t.product,"title",e)},expression:"product.title"}}),r("v-textarea",{attrs:{label:"Description",required:""},model:{value:t.product.description,callback:function(e){t.$set(t.product,"description",e)},expression:"product.description"}}),r("v-text-field",{attrs:{label:"Price",required:"",prefix:"$",rules:t.priceRules},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",e)},expression:"product.price"}}),r("v-text-field",{attrs:{label:"Quantity",required:"",rules:t.quantityRules},model:{value:t.product.quantity,callback:function(e){t.$set(t.product,"quantity",e)},expression:"product.quantity"}}),r("v-text-field",{attrs:{label:"Image",required:"",rules:t.imageRules},model:{value:t.product.image,callback:function(e){t.$set(t.product,"image",e)},expression:"product.image"}}),r("v-btn",{on:{click:t.submit}},[t._v("submit")]),r("v-btn",{on:{click:t.clear}},[t._v("clear")])],1)],1)],1)},I=[],z=(r("c5f6"),{props:["product","onSubmit","msg"],name:"ProductForm",data:function(){return{valid:!1,titleRules:[function(t){return!(!t||""===t.trim())||"Title must not be empty."}],priceRules:[function(t){return isNaN(t)?"Price must be a valid number.":!(Number(t)<=0)||"Price must be greater than $0"}],quantityRules:[function(t){return isNaN(t)?"Quantity must be a valid number.":!(Number(t)<0)||"Quantity must be 0 or greater."}],imageRules:[function(t){return!(!t||""===t.trim())||"Image must not be empty."}]}},methods:{submit:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.valid&&this.onSubmit();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),clear:function(){this.$refs.form.reset()}}}),B=z,U=Object(l["a"])(B,A,I,!1,null,null,null),V=U.exports,G={components:{ProductForm:V},data:function(){return{product:{title:"",description:"",price:"0",quantity:"0",image:""},msg:"Create a new Product"}},methods:{submit:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.createProduct(this.product);case 2:e=t.sent,this.$router.push({name:"Product",params:{id:e._id}});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},H=G,K=Object(l["a"])(H,L,Q,!1,null,null,null),W=K.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ProductForm",{attrs:{product:t.product,onSubmit:t.submit,msg:t.msg}})},Y=[],Z={components:{ProductForm:V},data:function(){return{product:{title:"",description:"",price:"0",quantity:"0",image:""},msg:"Edit Product"}},mounted:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.params.id,t.next=3,g.getProduct(e);case 3:r=t.sent,this.product=r;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{submit:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.updateProduct(this.product._id,this.product);case 2:t.sent,this.$router.push({name:"Product",params:{id:this.product._id}});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},tt=Z,et=Object(l["a"])(tt,X,Y,!1,null,null,null),rt=et.exports;n["default"].use(x["a"]);var nt=new x["a"]({routes:[{path:"/",name:"Landing",component:k},{path:"/products",name:"Products",component:C},{path:"/products/create",name:"Create",component:W},{path:"/products/edit",name:"Edit",component:rt},{path:"/products/:id",name:"Product",component:J}]});r("d5e8"),r("d1e7");n["default"].config.productionTip=!1,new n["default"]({router:nt,store:w,render:function(t){return t(d)}}).$mount("#app")}});
//# sourceMappingURL=app.68c05c16.js.map