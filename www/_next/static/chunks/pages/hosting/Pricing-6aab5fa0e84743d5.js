(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6803],{8068:function(e,i,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hosting/Pricing",function(){return l(701)}])},701:function(e,i,l){"use strict";l.r(i);var n=l(5893);l(7294);var t=l(8903),a=l(2445),r=l(50),s=l(9236),o=l(1017),c=l(61),u=l(6176),d=l(7841),h=l(9264);let m=()=>{let e=(0,t.c)({initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return(0,n.jsx)("div",{className:"page",id:"searchPage",children:(0,n.jsx)(a.W,{size:"xl",children:(0,n.jsxs)(r.r,{gutter:"lg",children:[(0,n.jsx)(r.r.Col,{span:3,children:(0,n.jsx)("div",{className:"medium-only",children:(0,n.jsx)(h.Z,{})})}),(0,n.jsxs)(r.r.Col,{span:9,children:[(0,n.jsx)(s.D,{large:!0,children:"Impostazioni account"}),(0,n.jsx)(o.Z,{withBorder:!0,children:(0,n.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,n.jsxs)(o.Z.Section,{inheritPadding:!0,py:"md",children:[(0,n.jsx)(c.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),(0,n.jsx)(c.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),(0,n.jsx)(u.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")})]}),(0,n.jsxs)(o.Z.Section,{inheritPadding:!0,py:"md",children:[(0,n.jsx)(d.z,{type:"submit",mt:"sm",children:"Indietro"}),(0,n.jsx)(d.z,{type:"submit",mt:"sm",children:"Salva"})]})]})})]})]})})})};i.default=m},9264:function(e,i,l){"use strict";var n=l(5893);l(7294);var t=l(1664),a=l.n(t),r=l(1163),s=l(7414),o=l(9236),c=l(2470);let u=[{id:"info",title:"Informazioni",opened:!0,links:[{selected:!1,label:"Dettagli",url:"/hosting/details",icon:"text_quote"},{selected:!1,label:"Posizione",url:"/hosting/location",icon:"map_pin_ellipse"},{selected:!1,label:"Prezzo",url:"/hosting/pricing",icon:"money_euro_circle"}]},{id:"structure",title:"Struttura",links:[{selected:!1,label:"Camere",url:"/hosting/floor-plan",icon:"square_grid_2x2"}]},{id:"photos",title:"Media",links:[{label:"Fotografie",url:"/hosting/photos",icon:"photo_on_rectangle"},{label:"Pianimetria",url:"/hosting/planimetry",icon:"hammer"},{label:"Video",url:"/hosting/video",icon:"play_rectangle"},{label:"Virtual tour",url:"/hosting/virtual-tour",icon:"videocam"}]},{id:"other",title:"Altro",links:[{label:"Servizi",url:"/hosting/amenities",icon:"list_bullet"},{label:"Dettagli finanziari",url:"/hosting/financial",icon:"tag"},{label:"Pubblica annuncio",url:"/hosting/publish",icon:"tag"}]}],d=()=>{let e=(0,r.useRouter)();return(0,n.jsx)(s.x,{children:u.map((i,l)=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.D,{order:4,children:i.title},l),(0,n.jsx)("ul",{id:i.id,noHairlines:!0,noHairlinesBetween:!0,noChevron:!0,children:i.links.map((i,l)=>(!0===i.external||i.action,(0,n.jsx)(a(),{href:i.url,passHref:!0,children:(0,n.jsx)(c.O,{component:"a",label:i.label,active:e.pathname===i.slug})})))},l)]}))})};i.Z=d}},function(e){e.O(0,[7038,7,818,9774,2888,179],function(){return e(e.s=8068)}),_N_E=e.O()}]);