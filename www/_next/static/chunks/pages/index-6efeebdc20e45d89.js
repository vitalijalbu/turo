(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{5728:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7521)}])},7521:function(e,i,t){"use strict";t.r(i),t.d(i,{__N_SSG:function(){return F},default:function(){return J}});var s=t(5893),n=t(7294),r=t(1232),l=t(9985),a=t(5117),c=t(2623),o=t(4457),d=t(7841),h=t(9602),x=t(8903),m=t(4088);let p=(0,n.forwardRef)((e,i)=>{let{description:t,value:n,image:c,...o}=e;return(0,s.jsx)("div",{ref:i,...o,children:(0,s.jsxs)(r.Z,{noWrap:!0,children:[(0,s.jsx)(l.q,{src:c}),(0,s.jsx)("div",{children:(0,s.jsx)(a.x,{children:n})})]})})}),u=()=>((0,x.c)({initialValues:{email:"",type:"hotel"},validate:{email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}}),(0,s.jsx)(c.X,{shadow:"xs",radius:"xl",p:"xl",children:(0,s.jsxs)(r.Z,{spacing:"lg",className:"search-form_box",children:[(0,s.jsx)("div",{className:"search-form_city",children:(0,s.jsx)(m.Z,{})}),(0,s.jsx)("div",{className:"search-form_type",children:(0,s.jsx)(o.Ph,{size:"md",label:"Tipologia",placeholder:"Seleziona tipo",itemComponent:p,name:"type",data:h.map(e=>({...e,value:e.title})),radius:"xl"})}),(0,s.jsx)("div",{className:"search-form_btn",children:(0,s.jsx)(d.z,{type:"primary",size:"md",children:"Cerca"})})]})}));var j=t(2445),g=t(50),f=t(4577),v=t(2870),N=t(5544),w=JSON.parse('{"a":{"_":[{"id":"17","title":"Demo listing one","content":"Demo text here"},{"id":"19","title":"Demo listing twog","postDate":"2021-12-29T10:10:00-08:00","dateCreated":"2021-12-29T10:10:00-08:00","slug":"demo-listing-two","status":"live","excerpt":"Demo text here","author":{"id":"1","fullName":"Super Admin"}},{"id":"21","title":"Demo listing three","postDate":"2021-12-29T10:10:00-08:00","dateCreated":"2021-12-29T10:10:00-08:00","slug":"demo-listing-three","status":"live","excerpt":"Demo text here","author":{"id":"1","fullName":"Super Admin"}},{"id":"23","title":"Demo listing four","postDate":"2021-12-29T10:10:00-08:00","dateCreated":"2021-12-29T10:10:00-08:00","slug":"demo-listing-four","status":"live","author":{"id":"1","fullName":"Super Admin"}}]}}'),_=t(1664),b=t.n(_),y=t(1402);let z=()=>(0,s.jsx)("section",{className:"section-content faqs",children:(0,s.jsx)(j.W,{size:"xl",children:(0,s.jsxs)(g.r,{children:[(0,s.jsx)(g.r.Col,{span:6,children:(0,s.jsx)(f.o,{ratio:16/9,children:(0,s.jsx)(v.E,{src:"https://via.placeholder.com/800x533",alt:"Panda"})})}),(0,s.jsxs)(g.r.Col,{span:6,children:[(0,s.jsx)("h3",{children:"Domande pi\xf9 frequenti"}),(0,s.jsx)(N.U,{defaultValue:"customization",children:w.a._.map((e,i)=>(0,s.jsxs)(N.U.Item,{value:e.id,children:[(0,s.jsx)(N.U.Control,{children:e.title}),(0,s.jsx)(N.U.Panel,{children:(0,s.jsx)("p",{children:e.content})})]},i))}),(0,s.jsx)(b(),{href:"/help",target:"_blank",passHref:!0,children:(0,s.jsx)(d.z,{compact:!0,className:"mt-1",component:"a",target:"_blank",rel:"noopener noreferrer",variant:"outline",rightIcon:(0,s.jsx)(y.Z,{}),children:"Vai al centro supporto"})})]})]})})});var S=t(4761),C=t(5044),Z=t(6817),D=t(9236),k=t(9814);let T=[{title:"No third parties",description:"They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves"},{title:"Secure by default",description:"Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right"},{title:"24/7 Support",description:"Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail"}];function A(e){let{title:i,description:t}=e,n=(0,S.rZ)();return(0,s.jsxs)("div",{children:[(0,s.jsx)(C.k,{variant:"light",size:40,radius:40,children:"icon"}),(0,s.jsx)(a.x,{style:{marginTop:n.spacing.sm,marginBottom:7},children:i}),(0,s.jsx)(a.x,{size:"sm",color:"dimmed",style:{lineHeight:1.6},children:t})]})}let E=(0,Z.k)(e=>({wrapper:{paddingTop:4*e.spacing.xl,paddingBottom:4*e.spacing.xl},description:{textAlign:"center",[e.fn.smallerThan("sm")]:{textAlign:"left"}}}));var W=function(e){let{title:i,description:t,data:r=T}=e,{classes:l,theme:c}=E(),o=r.map((e,i)=>(0,n.createElement)(A,{...e,key:i}));return(0,s.jsx)("section",{className:"section-content features",children:(0,s.jsxs)(j.W,{size:"xl",children:[(0,s.jsx)(D.D,{children:"Come funziona"}),(0,s.jsx)(j.W,{size:560,p:0,children:(0,s.jsx)(a.x,{size:"sm",className:l.description,children:t})}),(0,s.jsx)(k.M,{mt:60,cols:3,spacing:2*c.spacing.xl,breakpoints:[{maxWidth:980,cols:2,spacing:"xl"},{maxWidth:755,cols:1,spacing:"xl"}],children:o})]})})},B=t(8431),U=t(8687);let q=new U.GraphQLClient("https://beta.resthotels.it/api/v1");q.setHeader("Bearer","demo-token");var I=t(7297);function P(){let e=(0,I.Z)(['\nquery {\n  entries(orderBy: "postDate", section: "listings", limit: 8) {\n    id\n    title\n    postDate\n    slug\n    status\n    host: author {\n      id\n      fullName,\n    }\n  }\n}\n']);return P=function(){return e},e}function R(){let e=(0,I.Z)(['\n{\n  entries(orderBy: "postDate", section: "listings", limit: 8) {\n    id\n    title\n    postDate\n    slug\n    status\n    author {\n      id\n      fullName\n    }\n    ... on listings_hotel_Entry {\n      id\n      badge\n      totalFloors\n      pricing\n    }\n  }\n}\n']);return R=function(){return e},e}function L(){let e=(0,I.Z)(['\n{\n  users(group: "hosts") {\n    id\n    fullName\n  }\n}\n']);return L=function(){return e},e}(0,U.gql)(P());let H=(0,U.gql)(R());(0,U.gql)(L());let X=()=>{let[e,i]=(0,n.useState)([]);return console.log("✅ received-listings",e),(0,n.useEffect)(()=>{(0,U.request)("https://beta.resthotels.it/api/v1",H).then(e=>i((null==e?void 0:e.entries)||[]))},[]),(0,s.jsx)("section",{id:"spotlight-listings",className:"padding-vertical",children:(0,s.jsxs)(j.W,{size:"xl",children:[(0,s.jsx)("div",{className:"section-title",children:(0,s.jsx)(r.Z,{position:"apart",children:(0,s.jsx)(D.D,{order:1,children:"Annunci in evidenza"})})}),(0,s.jsx)(g.r,{children:e.map((e,i)=>(0,s.jsx)(g.r.Col,{md:6,lg:3,xs:6,children:(0,s.jsx)(B.Z,{data:e},i)}))})]})})};var G=t(1017);let M=()=>(0,s.jsx)("section",{className:"section-content",children:(0,s.jsxs)(j.W,{size:"xl",children:[(0,s.jsx)("div",{className:"section-title",children:(0,s.jsx)(D.D,{order:1,children:"Sfoglia annunci"})}),(0,s.jsx)(g.r,{children:h.map((e,i)=>(0,s.jsx)(g.r.Col,{span:4,children:(0,s.jsx)(G.Z,{shadow:"sm",component:"a",href:"/search?type="+e.slug,target:"_blank",children:(0,s.jsx)(G.Z.Section,{children:(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(b(),{href:"/search?type="+e.slug,children:(0,s.jsx)(v.E,{width:120,height:100,fit:"cover",src:e.image_url,alt:e.title})}),(0,s.jsx)(b(),{href:"/search?type="+e.slug,children:(0,s.jsx)(D.D,{order:3,children:e.title})})]})})})}))})]})}),O=e=>(0,s.jsx)("section",{className:"section-content",children:(0,s.jsx)(j.W,{size:"xl",children:(0,s.jsxs)("div",{className:"hero-wrapper dark overlay",style:{borderRadius:"12px"},children:[(0,s.jsx)("div",{className:"img-responsive-wrapper",children:(0,s.jsx)("div",{className:"img-responsive",children:(0,s.jsx)("div",{className:"img-wrapper",children:(0,s.jsx)("img",{src:e.imageUrl?e.imageUrl:"https://via.placeholder.com/1920x800",title:"titolo immagine",alt:"descrizione immagine"})})})}),(0,s.jsx)(j.W,{size:"xl",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"hero-text-wrapper bg-dark",children:[e.title&&(0,s.jsx)(D.D,{children:e.title}),e.subtitle&&(0,s.jsx)(a.x,{children:"Cerca i migliori annunci"}),e.primaryAction&&(0,s.jsx)(d.z,{children:e.primaryAction})]})})})})]})})}),V=e=>{let{data:i}=e,[t,r]=(0,n.useState)(!1);return console.log("received-data",{data:i}),(0,s.jsxs)("div",{className:"page",children:[(0,s.jsx)(j.W,{size:"xl",children:(0,s.jsxs)("section",{className:"hero-wrapper dark overlay",style:{borderRadius:"12px"},children:[(0,s.jsx)("div",{className:"img-responsive-wrapper",children:(0,s.jsx)("div",{className:"img-responsive",children:(0,s.jsx)("div",{className:"img-wrapper",children:(0,s.jsx)("img",{src:"https://images.unsplash.com/photo-1585418694458-dc80a5c20294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",title:"titolo immagine",alt:"descrizione immagine"})})})}),(0,s.jsx)(j.W,{size:"xl",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"hero-text-wrapper bg-dark",children:[(0,s.jsx)(D.D,{children:"La piattaforma immobiliare per ristoranti e hotel."}),(0,s.jsx)(u,{})]})})})})]})}),(0,s.jsx)(W,{}),(0,s.jsx)(M,{}),(0,s.jsx)(X,{}),(0,s.jsx)(O,{imageUrl:"https://content.loft.com.br/_next/static/images/hero-background@3x-24f8cc98fdfcb97739e347ef9a70f6bf.jpg",title:"Crea un account",subtitle:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}),(0,s.jsx)(z,{})]})};var F=!0,J=V},4088:function(e,i,t){"use strict";t.d(i,{Z:function(){return u}});var s=t(5893),n=t(7294),r=t(1232),l=t(9985),a=t(5117),c=t(2785),o=t(8945),d=t(3454);let h={jwt:window.localStorage.getItem("jwt"),user:window.localStorage.getItem("user")},x=o.Z.create({baseURL:d.env.NEXT_PUBLIC_API_BASE_URL,headers:{"Content-Type":"application/json",Authorization:"Bearer "+h.jwt}});o.Z.create({baseURL:d.env.NEXT_PUBLIC_API_BASE_URL,headers:{"Content-Type":"application/json"}});let m=e=>x.get("https://nominatim.openstreetmap.org/search?format=json&limit=5&q=".concat(e)),p=()=>{let[e,i]=(0,n.useState)(!1),[t,o]=(0,n.useState)([]),[d,h]=(0,n.useState)();async function x(e){h(e),console.log("geocity",e),await m(e).then(e=>{let{data:t}=e;i(!0),o(t),console.log("geojson",t)}).finally(()=>{i(!1)})}let p=t.map(e=>({...e,value:e.display_name})),u=(0,n.forwardRef)((e,i)=>{let{description:t,value:n,image:c,...o}=e;return(0,s.jsx)("div",{ref:i,...o,className:"autocomplete-item_grid",children:(0,s.jsxs)(r.Z,{noWrap:!0,children:[(0,s.jsx)(l.q,{src:"https://dummyimage.com/80"}),(0,s.jsx)("div",{children:(0,s.jsx)(a.x,{children:n})})]})})});return(0,s.jsx)(c.F,{size:"md",loading:e,label:"Cerca per citt\xe0",placeholder:"Inserisci citt\xe0 o localit\xe0",itemComponent:u,data:p,value:d,onChange:e=>x(e)})};var u=p},8431:function(e,i,t){"use strict";var s=t(5893);t(7294);var n=t(1017),r=t(2870),l=t(1232),a=t(7789),c=t(5117),o=t(2420);let d=e=>{var i;let{data:t}=e;return(0,s.jsxs)(n.Z,{withBorder:!0,p:"xl",component:"a",href:"/listings/".concat(t.id),children:[(0,s.jsx)(n.Z.Section,{children:(0,s.jsx)(r.E,{src:"https://via.placeholder.com/800x533",height:160,alt:"No way!"})}),(0,s.jsxs)(n.Z.Section,{children:[(0,s.jsx)(l.Z,{children:(0,s.jsx)("div",{className:"listing-card_data",children:t.badge&&(0,s.jsx)(a.C,{children:t.badge})})}),(0,s.jsx)(c.x,{mt:"xs",variant:"link",component:"a",href:"/search?location="+t.slug,size:"sm",children:t.location}),(0,s.jsx)(c.x,{weight:500,size:"lg",mt:"md",children:t.title})]}),(0,s.jsxs)(l.Z,{children:[(0,s.jsxs)("div",{className:"listing-card_data",children:[(0,s.jsx)("span",{children:(0,s.jsx)(o.Z,{})}),(0,s.jsx)("span",{children:t.totalFloors})]}),(0,s.jsxs)("div",{className:"listing-card_data",children:[(0,s.jsx)("span",{children:"icon"}),(0,s.jsx)("span",{children:"demo"})]}),(0,s.jsxs)("div",{className:"listing-card_data",children:[(0,s.jsx)("span",{children:"icon"}),(0,s.jsx)("span",{children:"demo"})]})]}),(0,s.jsx)(c.x,{color:"blue",mt:"xs",size:"md",weight:600,children:t.pricing}),(0,s.jsx)(c.x,{color:"blue",mt:"xs",size:"md",weight:600,children:null===(i=t.author)||void 0===i?void 0:i.fullName})]})};i.Z=d},9602:function(e){"use strict";e.exports=JSON.parse('[{"id":"31","title":"Ristoranti","slug":"ristoranti","image_url":"https://beta.resthotels.it/uploads/static/static-restaurant.jpeg"},{"id":"32","title":"Hotel","slug":"hotel","image_url":"https://beta.resthotels.it/uploads/static/static-hotel.jpeg"},{"id":"32","title":"Immobile commerciale","slug":"commercial","image_url":"https://beta.resthotels.it/uploads/static/static-hotel.jpeg"}]')}},function(e){e.O(0,[7038,9227,6349,688,9774,2888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);