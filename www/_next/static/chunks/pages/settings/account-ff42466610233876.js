(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{6057:function(e,t,n){"use strict";n.d(t,{D:function(){return d}});var r=n(7294),a=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))o.call(t,n)&&s(e,n,t[n]);return e};function d(e){return r.createElement("svg",c({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:16,height:16},e),r.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}},2470:function(e,t,n){"use strict";n.d(t,{O:function(){return I}});var r=n(7294),a=n(4761),l=n(8427),i=n(5851),o=n(6817),s=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))f.call(t,n)&&m(e,n,t[n]);return e},h=(e,t)=>c(e,d(t)),b=(0,o.k)((e,{color:t,variant:n,noWrap:r,childrenOffset:a,alignIcon:l})=>{let i=e.fn.variant({variant:n,color:t});return{root:h(g({display:"flex",alignItems:"center",width:"100%",padding:`8px ${e.spacing.sm}px`,userSelect:"none"},e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]})),{"&[data-active]":g({backgroundColor:i.background,color:i.color},e.fn.hover({backgroundColor:i.hover})),"&[data-disabled]":{opacity:.4,pointerEvents:"none"}}),icon:{marginRight:e.spacing.sm,display:"flex",justifyContent:"center",alignItems:"center",alignSelf:"center"===l?"center":"flex-start",paddingTop:"center"===l?void 0:4},rightSection:{marginLeft:e.spacing.sm,display:"flex",justifyContent:"center",alignItems:"center",transition:`transform 150ms ${e.transitionTimingFunction}`,"&[data-rotate]":{transform:"rotate(90deg)"}},body:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:r?"nowrap":void 0},label:{},description:{display:"block","&[data-active]":{color:"inherit"}},children:{paddingLeft:e.fn.size({size:a,sizes:e.spacing})}}}),v=n(4736),x=n(5117),y=n(6057),j=n(930),w=Object.defineProperty,O=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&E(e,n,t[n]);if(O)for(var n of O(t))N.call(t,n)&&E(e,n,t[n]);return e},P=(e,t)=>{var n={};for(var r in e)k.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&O)for(var r of O(e))0>t.indexOf(r)&&N.call(e,r)&&(n[r]=e[r]);return n};let _={variant:"light",childrenOffset:"lg"},S=(0,r.forwardRef)((e,t)=>{let n=(0,a.N4)("NavLink",_,e),{label:l,description:o,icon:s,rightSection:c,className:d,classNames:u,styles:p,unstyled:f,active:m,color:g,variant:h,noWrap:w,children:O,opened:k,defaultOpened:N,onChange:E,disableRightSectionRotation:S,childrenOffset:I,disabled:L,onClick:z}=n,R=P(n,["label","description","icon","rightSection","className","classNames","styles","unstyled","active","color","variant","noWrap","children","opened","defaultOpened","onChange","disableRightSectionRotation","childrenOffset","disabled","onClick"]),{classes:F,cx:D}=b({color:g,variant:h,noWrap:w,childrenOffset:I,alignIcon:o?"top":"center"},{name:"NavLink",classNames:u,styles:p,unstyled:f}),[T,A]=(0,i.C)({value:k,defaultValue:N,finalValue:!1,onChange:E}),B=!!O,H=e=>{B?(e.preventDefault(),null==z||z(e),A(!T)):null==z||z(e)};return r.createElement(r.Fragment,null,r.createElement(v.k,C({ref:t,className:D(F.root,d),"data-active":m||void 0,onClick:H,unstyled:f,"data-expanded":T||void 0,"data-disabled":L||void 0,disabled:L},R),s&&r.createElement("span",{className:F.icon},s),r.createElement("span",{className:F.body},r.createElement(x.x,{component:"span",size:"sm",className:F.label},l),r.createElement(x.x,{component:"span",color:"dimmed",size:"xs","data-active":m||void 0,className:F.description},o)),(B||c)&&r.createElement("span",{className:F.rightSection,"data-rotate":T&&!S||void 0},B?c||r.createElement(y.D,{width:14,height:14,style:{transform:"rotate(-90deg)"}}):c)),r.createElement(j.U,{in:T},r.createElement("div",{className:F.children},O)))});S.displayName="@mantine/core/NavLink";let I=(0,l.F)(S)},8471:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/account",function(){return n(420)}])},420:function(e,t,n){"use strict";n.r(t);var r=n(5893);n(7294);var a=n(2445),l=n(50),i=n(9236),o=n(2623),s=n(5117),c=n(9386);let d=()=>(0,r.jsx)("div",{className:"page",id:"searchPage",children:(0,r.jsx)(a.W,{size:"xl",children:(0,r.jsxs)(l.r,{gutter:"lg",children:[(0,r.jsx)(l.r.Col,{span:3,children:(0,r.jsx)("div",{className:"medium-only",children:(0,r.jsx)(c.Z,{})})}),(0,r.jsxs)(l.r.Col,{span:9,children:[(0,r.jsx)(i.D,{large:!0,children:"Il mio account"}),(0,r.jsxs)(o.X,{radius:"lg",p:"lg",withBorder:!0,children:[(0,r.jsx)(s.x,{children:"Paper is the most basic ui component"}),(0,r.jsx)(s.x,{children:"Use it to create cards, dropdowns, modals and other components that require background with shadow"})]})]})]})})});t.default=d},9386:function(e,t,n){"use strict";var r=n(5893);n(7294);var a=n(1664),l=n.n(a),i=n(1163),o=n(7414),s=n(9236),c=n(2470);let d=[{id:"account",title:"Account",links:[{exact:!0,label:"Il mio account",slug:"account",url:"/settings/account"},{exact:!0,label:"Fatturazione",slug:"billing",url:"/settings/billing"},{exact:!0,label:"Notifiche",slug:"notifications",url:"/settings/notifications"},{exact:!0,label:"Password",slug:"security",url:"/settings/security"}]},{id:"other",title:"Altro",links:[{label:"Assistenza",url:"/settings/support"},{label:"Feedback",url:"mailto:info@resthotels.it?subject=Feedback Resthotels",external:!0}]}],u=()=>{let e=(0,i.useRouter)();return(0,r.jsx)(o.x,{children:d.map((t,n)=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.D,{order:4,children:t.title},n),(0,r.jsx)("ul",{id:t.id,noHairlines:!0,noHairlinesBetween:!0,noChevron:!0,children:t.links.map((t,n)=>!0===t.external?(0,r.jsx)(l(),{href:t.url,passHref:!0,children:(0,r.jsx)(c.O,{color:"dark",variant:"filled",component:"a",label:t.label,active:e.pathname===t.slug})}):(t.action,(0,r.jsx)(c.O,{color:"dark",variant:"filled",component:"a",href:t.url,label:t.label,active:e.pathname===t.slug})))},n)]}))})};t.Z=u},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=8471)}),_N_E=e.O()}]);