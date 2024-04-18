import{e as T,n as V,o as F,d as B,g as D,s as G,u as M}from"./App-B5SbfHFy.js";import{i as $,_ as k,y as v,x as p,F as E,d as N,G as _,a as d,b as O,j as U,H as h}from"./colors-Cv6p-LpM.js";import{s as A}from"./styled-Cb0PxjCK.js";const L=["component","direction","spacing","divider","children","className","useFlexGap"],H=$(),I=A("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function W(e){return F({props:e,name:"MuiStack",defaultTheme:H})}function q(e,s){const n=d.Children.toArray(e).filter(Boolean);return n.reduce((c,a,t)=>(c.push(a),t<n.length-1&&c.push(d.cloneElement(s,{key:`separator-${t}`})),c),[])}const z=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],J=({ownerState:e,theme:s})=>{let n=k({display:"flex",flexDirection:"column"},v({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),c=>({flexDirection:c})));if(e.spacing){const c=E(s),a=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:a}),m=p({values:e.spacing,base:a});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=N(n,v({theme:s},m,(o,r)=>e.useFlexGap?{gap:h(c,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${z(r?t[r]:e.direction)}`]:h(c,o)}}))}return n=_(s.breakpoints,n),n};function K(e={}){const{createStyledComponent:s=I,useThemeProps:n=W,componentName:c="MuiStack"}=e,a=()=>B({root:["root"]},o=>D(c,o),{}),t=s(J);return d.forwardRef(function(o,r){const i=n(o),l=T(i),{component:u="div",direction:x="column",spacing:j=0,divider:y,children:g,className:P,useFlexGap:S=!1}=l,C=O(l,L),b={direction:x,spacing:j,useFlexGap:S},R=a();return U.jsx(t,k({as:u,ownerState:b,ref:r,className:V(R.root,P)},C,{children:y?q(g,y):g}))})}const Q=K({createStyledComponent:G("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>M({props:e,name:"MuiStack"})}),w=Q;export{w as S};
