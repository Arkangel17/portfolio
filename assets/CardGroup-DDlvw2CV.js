import{a as b,b as j,_ as m,j as e,C as s,R as x}from"./colors-Cv6p-LpM.js";import{g as M,a as w,s as f,P as I,u as $,c as h,d as y,f as T,T as g,B as v,i as k,j as L,C as R,M as U}from"./App-B5SbfHFy.js";import{s as N}from"./styled-Cb0PxjCK.js";import{S as B}from"./Stack-BSWavb7L.js";function _(o){return M("MuiCard",o)}w("MuiCard",["root"]);const H=["className","raised"],P=o=>{const{classes:t}=o;return y({root:["root"]},_,t)},F=f(I,{name:"MuiCard",slot:"Root",overridesResolver:(o,t)=>t.root})(()=>({overflow:"hidden"})),D=b.forwardRef(function(t,n){const r=$({props:t,name:"MuiCard"}),{className:a,raised:c=!1}=r,d=j(r,H),i=m({},r,{raised:c}),l=P(i);return e.jsx(F,m({className:h(l.root,a),elevation:c?8:void 0,ref:n,ownerState:i},d))}),V=D;function z(o){return M("MuiCardActionArea",o)}const W=w("MuiCardActionArea",["root","focusVisible","focusHighlight"]),S=W,G=["children","className","focusVisibleClassName"],X=o=>{const{classes:t}=o;return y({root:["root"],focusHighlight:["focusHighlight"]},z,t)},q=f(T,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,t)=>t.root})(({theme:o})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${S.focusHighlight}`]:{opacity:(o.vars||o).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${S.focusVisible} .${S.focusHighlight}`]:{opacity:(o.vars||o).palette.action.focusOpacity}})),J=f("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,t)=>t.focusHighlight})(({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})),K=b.forwardRef(function(t,n){const r=$({props:t,name:"MuiCardActionArea"}),{children:a,className:c,focusVisibleClassName:d}=r,i=j(r,G),l=r,p=X(l);return e.jsxs(q,m({className:h(p.root,c),focusVisibleClassName:h(d,p.focusVisible),ref:n,ownerState:l},i,{children:[a,e.jsx(J,{className:p.focusHighlight,ownerState:l})]}))}),Q=K;function Y(o){return M("MuiCardContent",o)}w("MuiCardContent",["root"]);const Z=["className","component"],oo=o=>{const{classes:t}=o;return y({root:["root"]},Y,t)},eo=f("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),to=b.forwardRef(function(t,n){const r=$({props:t,name:"MuiCardContent"}),{className:a,component:c="div"}=r,d=j(r,Z),i=m({},r,{component:c}),l=oo(i);return e.jsx(eo,m({as:c,className:h(l.root,a),ownerState:i,ref:n},d))}),so=to;function no(o){return M("MuiCardMedia",o)}w("MuiCardMedia",["root","media","img"]);const ro=["children","className","component","image","src","style"],io=o=>{const{classes:t,isMediaComponent:n,isImageComponent:r}=o;return y({root:["root",n&&"media",r&&"img"]},no,t)},ao=f("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:n}=o,{isMediaComponent:r,isImageComponent:a}=n;return[t.root,r&&t.media,a&&t.img]}})(({ownerState:o})=>m({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},o.isMediaComponent&&{width:"100%"},o.isImageComponent&&{objectFit:"cover"})),co=["video","audio","picture","iframe","img"],lo=["picture","img"],uo=b.forwardRef(function(t,n){const r=$({props:t,name:"MuiCardMedia"}),{children:a,className:c,component:d="div",image:i,src:l,style:p}=r,u=j(r,ro),C=co.indexOf(d)!==-1,O=!C&&i?m({backgroundImage:`url("${i}")`},p):p,A=m({},r,{component:d,isMediaComponent:C,isImageComponent:lo.indexOf(d)!==-1}),E=io(A);return e.jsx(ao,m({className:h(E.root,c),as:d,role:!C&&i?"img":void 0,ref:n,style:O,ownerState:A,src:C?i||l:void 0},u,{children:a}))}),po=uo,mo=({cardProps:o,handleOpen:t})=>e.jsx(V,{elevation:2,sx:{boxShadow:`${s.Clear}`,"&:hover":{boxShadow:"0 0 20px",color:s.Blue8},borderRadius:5,width:"400px",height:"300px"},onClick:()=>t(o.id),children:e.jsxs(Q,{sx:{backgroundColor:`${s.Clear}`,color:`${s.Clear}`},children:[e.jsx(po,{component:"img",height:"170",image:o.imgPath,alt:o.imgAlt,sx:{borderColor:`${s.Clear}`,objectFit:"contain",overflow:"clip"}}),e.jsxs(so,{sx:{borderColor:`${s.Clear}`},children:[e.jsx(g,{gutterBottom:!0,variant:"h6",component:"div",color:s.Blue8,children:o.title}),e.jsx(g,{variant:"body2",color:s.Blue8,children:o.description})]})]})}),xo=N("button")({backgroundColor:"transparent",borderRadius:"20px",border:"1px solid transparent",padding:"10px","&:focus-visible, &:hover":{border:`1px solid ${s.Blue6}`}}),Co=({indexOfCurrentSlide:o,setIndexOfCurrentSlide:t,slides:n})=>e.jsx(v,{component:"div",children:e.jsx("ul",{style:{display:"flex",flexDirection:"row",listStyle:"none",margin:0,padding:0},children:n.map((r,a)=>{const c=a===o;return e.jsx("li",{children:e.jsx(xo,{"aria-current":c?"step":void 0,"aria-label":`Slide ${a+1}`,onClick:()=>t(a),children:e.jsx(v,{component:"div",sx:{backgroundColor:c?s.Light7:s.Light3,borderRadius:"10px",height:"10px",width:"10px"}})})},`slide-${a}`)})})}),ho=({text:o})=>e.jsx(g,{color:s.Text.Medium,fontWeight:"400",variant:"body1",children:o}),go=({text:o})=>e.jsx(g,{color:s.Text.Medium,fontWeight:"600",variant:"subtitle1",children:o}),fo=({src:o,height:t="auto",width:n="auto"})=>e.jsx("img",{alt:"",src:o,style:{height:t,width:n}}),vo=({slides:o,handleClose:t})=>{const[n,r]=x.useState(0),a=o[n],c=n===o.length-1,d=n===0,i=x.useRef(null);return x.useEffect(()=>{const l=p=>{i.current&&!i.current.contains(p.target)&&t()};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[i,t]),e.jsxs("div",{ref:i,children:[e.jsxs(B,{flexDirection:"column",justifyContent:"space-between",height:"528px",paddingX:"24px",children:[e.jsx(go,{text:a.title}),e.jsx(ho,{text:a.subtitle}),e.jsx(v,{component:"div",sx:{display:"flex",alignContent:"center",justifyContent:"center",width:"100%"},children:e.jsx(fo,{src:a.image,height:"auto",width:"300px"})}),e.jsx(v,{component:"div",sx:{margin:"0 auto",width:"fit-content"},children:e.jsx(Co,{indexOfCurrentSlide:n,setIndexOfCurrentSlide:r,slides:o})})]}),e.jsxs(B,{flexDirection:"row",justifyContent:"space-between",sx:{borderTop:`1px solid ${s.Borders.Divider}`,paddingBottom:"20px",paddingLeft:"16px",paddingRight:"24px",paddingTop:"20px",marginTop:"24px"},children:[e.jsx(k,{size:"small",variant:"contained",onClick:()=>{d||r(l=>l-1)},sx:{backgroundColor:`${s.Blue8}`,"&:hover":{backgroundColor:`${s.Blue8}`},"&:active":{backgroundColor:`${s.Blue8}`,boxShadow:"none",transform:"scale(0.99)"}},children:"Back"}),e.jsx(k,{size:"small",variant:"contained",sx:{backgroundColor:`${s.Blue8}`,"&:hover":{backgroundColor:`${s.Blue8}`},"&:active":{backgroundColor:`${s.Blue8}`,boxShadow:"none",transform:"scale(0.99)"}},onClick:()=>{c?t():r(l=>l+1)},children:c?"Done":"Next"})]})]})},yo=({cards:o})=>{var p;const[t,n]=x.useState(!1),[r,a]=x.useState(),c=x.useRef(null),d=u=>{n(!0),a(u)},i=x.useCallback(()=>n(!1),[]),l=((p=o.find(u=>u.id===r))==null?void 0:p.slides)||void 0;return x.useEffect(()=>{const u=C=>{c.current&&!c.current.contains(C.target)&&i()};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[c,i]),e.jsx(e.Fragment,{children:e.jsxs(R,{sx:{flexWrap:"wrap",gap:3,alignContent:"center",mt:"100px"},children:[o.map(u=>e.jsx(e.Fragment,{children:e.jsx(mo,{cardProps:u,handleOpen:()=>d(u.id)},u.id)})),e.jsx(U,{open:t,onClose:i,children:e.jsx(R,{sx:{height:"100%"},children:e.jsx(bo,{ref:c,sx:{height:700,width:600},children:l?e.jsx(vo,{slides:l,handleClose:i}):e.jsxs(R,{sx:{flexDirection:"column"},children:[e.jsx(g,{color:s.Blue8,children:"IN PROGRESS"}),e.jsx(k,{size:"small",variant:"contained",sx:{width:"50px",backgroundColor:`${s.Blue8}`,"&:hover":{backgroundColor:`${s.Blue8}`},"&:active":{backgroundColor:`${s.Blue8}`,boxShadow:"none",transform:"scale(0.99)"}},onClick:i,children:"Close"})]})})})})]})})},bo=N("div")(()=>L`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${s.Light1};
    border-radius: 8px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 0.2);
    padding: 24px;
    color: ${s.Blue8};
    border-color: ${s.Blue8} & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${s.Blue8};
      margin-bottom: 4px;
    }
  `);export{yo as C};
