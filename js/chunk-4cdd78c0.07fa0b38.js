(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cdd78c0"],{2267:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"img-infografica"},[i("div",{ref:"img-ref-"+t.mainId,staticClass:"img-infografica__img"},[t._t("imagen")],2),t.elements.length?i("div",{staticClass:"img-infografica__content"},[t._l(t.elements,(function(e,s){return i("div",{key:"img-infografica-btn-"+e.id,staticClass:"img-infografica__item",style:[{top:e.y},{left:e.x}],on:{mouseover:function(i){t.selected=e.id},mouseleave:function(e){t.selected=0}}},[i("div",{staticClass:"img-infografica__item__dot"})])})),t._l(t.elements,(function(e){return i("div",{directives:[{name:"child",rawName:"v-child",value:e.elm,expression:"item.elm"}],key:"img-infografica-card-"+e.id,ref:"card-ref-"+e.id,refInFor:!0,staticClass:"img-infografica__card",class:{"img-infografica__card--selected":t.selected===e.id},style:t.getCardCords(e.id),on:{mouseover:function(i){t.selected=e.id},mouseleave:function(e){t.selected=0}}})})),t.firstElement&&t.showIndicator?i("div",{staticClass:"img-infografica__indicador",style:[{top:t.firstElement.y},{left:t.firstElement.x}]},[i("div",{staticClass:"indicador--hover"})]):t._e()],2):t._e(),i("div",{staticClass:"hidden-slot"},[t._t("default")],2)])},n=[],r=(i("7db0"),i("ab14")),a={name:"ImagenInfografica",mixins:[r["a"]],data:function(){return{firstSelection:!1,showIndicator:!0}},computed:{firstElement:function(){return this.elements.length&&this.elements[0]}},watch:{selected:function(){this.showIndicator&&(this.showIndicator=!1)}},methods:{getCardCords:function(t){var e="card-ref-"+t;if(!(e in this.$refs))return[{top:0},{left:0}];var i=this.elements.find((function(e){return e.id===t})),s=this.$refs["img-ref-"+this.mainId],n={w:s.clientWidth,h:s.clientHeight},r=this.$refs[e][0],a={x:parseInt(i.x,10),y:parseInt(i.y,10),w:r.clientWidth,h:r.clientHeight},d=a.y/100*n.h,o=a.x/100*n.w,c=[];return d+a.h>n.h?c.push({bottom:0}):c.push({top:i.y}),o+a.w>n.w?c.push({right:0}):c.push({left:i.x}),c}}},d=a,o=i("2877"),c=Object(o["a"])(d,s,n,!1,null,null,null);e["default"]=c.exports},"7db0":function(t,e,i){"use strict";var s=i("23e7"),n=i("b727").find,r=i("44d2"),a="find",d=!0;a in[]&&Array(1)[a]((function(){d=!1})),s({target:"Array",proto:!0,forced:d},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(a)},ab14:function(t,e,i){"use strict";e["a"]={data:()=>({mainId:Math.floor(1e7*Math.random()),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const i={};return 0===e?i.next=t[e+1]:(e+1===t.length||(i.next=t[e+1]),i.back=t[e-1]),i}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const i=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...i}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}}}]);
//# sourceMappingURL=chunk-4cdd78c0.07fa0b38.js.map