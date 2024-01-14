import{r as d,R as h}from"./index-c013ead5.js";import{_ as A}from"./extends-98964cd2.js";import{r as Fe}from"./index-169ee69c.js";import{j as I}from"./jsx-runtime-6eef64cc.js";var De=d.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),xe=function(t,r,n){var o=n.get(t);return o?o(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function ue(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var Se=d.forwardRef(function(e,t){var r=e.alt,n=e.color,o=e.size,i=e.weight,l=e.mirrored,a=e.children,s=e.renderPath,c=ue(e,["alt","color","size","weight","mirrored","children","renderPath"]),m=d.useContext(De),f=m.color,u=f===void 0?"currentColor":f,g=m.size,b=m.weight,S=b===void 0?"regular":b,v=m.mirrored,k=v===void 0?!1:v,$=ue(m,["color","size","weight","mirrored"]);return h.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??g,height:o??g,fill:n??u,viewBox:"0 0 256 256",transform:l||k?"scale(-1, 1)":void 0},$,c),!!r&&h.createElement("title",null,r),a,h.createElement("rect",{width:"256",height:"256",fill:"none"}),s(i??S,n??u))});Se.displayName="IconBase";const ye=Se;var T=new Map;T.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});T.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});T.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});T.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});T.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});T.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var He=function(t,r){return xe(t,r,T)},ke=d.forwardRef(function(e,t){return h.createElement(ye,Object.assign({ref:t},e,{renderPath:He}))});ke.displayName="Check";const Ve=ke;var O=new Map;O.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});O.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});O.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});O.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});O.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});O.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Ue=function(t,r){return xe(t,r,O)},Ce=d.forwardRef(function(e,t){return h.createElement(ye,Object.assign({ref:t},e,{renderPath:Ue}))});Ce.displayName="User";const Ge=Ce;function Ee(e,t=[]){let r=[];function n(i,l){const a=d.createContext(l),s=r.length;r=[...r,l];function c(f){const{scope:u,children:g,...b}=f,S=(u==null?void 0:u[e][s])||a,v=d.useMemo(()=>b,Object.values(b));return d.createElement(S.Provider,{value:v},g)}function m(f,u){const g=(u==null?void 0:u[e][s])||a,b=d.useContext(g);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${f}\` must be used within \`${i}\``)}return c.displayName=i+"Provider",[c,m]}const o=()=>{const i=r.map(l=>d.createContext(l));return function(a){const s=(a==null?void 0:a[e])||i;return d.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])}};return o.scopeName=e,[n,Ye(o,...t)]}function Ye(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=n.reduce((a,{useScope:s,scopeName:c})=>{const f=s(i)[`__scope${c}`];return{...a,...f}},{});return d.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return r.scopeName=t.scopeName,r}function le(e){const t=d.useRef(e);return d.useEffect(()=>{t.current=e}),d.useMemo(()=>(...r)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...r)},[])}const K=globalThis!=null&&globalThis.document?d.useLayoutEffect:()=>{};function qe(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function we(...e){return t=>e.forEach(r=>qe(r,t))}function Re(...e){return d.useCallback(we(...e),e)}const Ie=d.forwardRef((e,t)=>{const{children:r,...n}=e,o=d.Children.toArray(r),i=o.find(Ke);if(i){const l=i.props.children,a=o.map(s=>s===i?d.Children.count(l)>1?d.Children.only(null):d.isValidElement(l)?l.props.children:null:s);return d.createElement(ae,A({},n,{ref:t}),d.isValidElement(l)?d.cloneElement(l,void 0,a):null)}return d.createElement(ae,A({},n,{ref:t}),r)});Ie.displayName="Slot";const ae=d.forwardRef((e,t)=>{const{children:r,...n}=e;return d.isValidElement(r)?d.cloneElement(r,{...Je(n,r.props),ref:t?we(t,r.ref):r.ref}):d.Children.count(r)>1?d.Children.only(null):null});ae.displayName="SlotClone";const Ze=({children:e})=>d.createElement(d.Fragment,null,e);function Ke(e){return d.isValidElement(e)&&e.type===Ze}function Je(e,t){const r={...t};for(const n in t){const o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...a)=>{i(...a),o(...a)}:o&&(r[n]=o):n==="style"?r[n]={...o,...i}:n==="className"&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}const Xe=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],J=Xe.reduce((e,t)=>{const r=d.forwardRef((n,o)=>{const{asChild:i,...l}=n,a=i?Ie:t;return d.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),d.createElement(a,A({},l,{ref:o}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),ze="Avatar",[Qe,Mr]=Ee(ze),[et,Be]=Qe(ze),tt=d.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[o,i]=d.useState("idle");return d.createElement(et,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:i},d.createElement(J.span,A({},n,{ref:t})))}),rt="AvatarImage",nt=d.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:o=()=>{},...i}=e,l=Be(rt,r),a=at(n),s=le(c=>{o(c),l.onImageLoadingStatusChange(c)});return K(()=>{a!=="idle"&&s(a)},[a,s]),a==="loaded"?d.createElement(J.img,A({},i,{ref:t,src:n})):null}),ot="AvatarFallback",it=d.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...o}=e,i=Be(ot,r),[l,a]=d.useState(n===void 0);return d.useEffect(()=>{if(n!==void 0){const s=window.setTimeout(()=>a(!0),n);return()=>window.clearTimeout(s)}},[n]),l&&i.imageLoadingStatus!=="loaded"?d.createElement(J.span,A({},o,{ref:t})):null});function at(e){const[t,r]=d.useState("idle");return K(()=>{if(!e){r("error");return}let n=!0;const o=new window.Image,i=l=>()=>{n&&r(l)};return r("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{n=!1}},[e]),t}const st=tt,lt=nt,ct=it;function fe(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function dt({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,o]=ut({defaultProp:t,onChange:r}),i=e!==void 0,l=i?e:n,a=le(r),s=d.useCallback(c=>{if(i){const f=typeof c=="function"?c(e):c;f!==e&&a(f)}else o(c)},[i,e,o,a]);return[l,s]}function ut({defaultProp:e,onChange:t}){const r=d.useState(e),[n]=r,o=d.useRef(n),i=le(t);return d.useEffect(()=>{o.current!==n&&(i(n),o.current=n)},[n,o,i]),r}function ft(e){const t=d.useRef({value:e,previous:e});return d.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function pt(e){const[t,r]=d.useState(void 0);return K(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,a;if("borderBoxSize"in i){const s=i.borderBoxSize,c=Array.isArray(s)?s[0]:s;l=c.inlineSize,a=c.blockSize}else l=e.offsetWidth,a=e.offsetHeight;r({width:l,height:a})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}function mt(e,t){return d.useReducer((r,n)=>{const o=t[r][n];return o??r},e)}const Pe=e=>{const{present:t,children:r}=e,n=gt(t),o=typeof r=="function"?r({present:n.isPresent}):d.Children.only(r),i=Re(n.ref,o.ref);return typeof r=="function"||n.isPresent?d.cloneElement(o,{ref:i}):null};Pe.displayName="Presence";function gt(e){const[t,r]=d.useState(),n=d.useRef({}),o=d.useRef(e),i=d.useRef("none"),l=e?"mounted":"unmounted",[a,s]=mt(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return d.useEffect(()=>{const c=ee(n.current);i.current=a==="mounted"?c:"none"},[a]),K(()=>{const c=n.current,m=o.current;if(m!==e){const u=i.current,g=ee(c);e?s("MOUNT"):g==="none"||(c==null?void 0:c.display)==="none"?s("UNMOUNT"):s(m&&u!==g?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),K(()=>{if(t){const c=f=>{const g=ee(n.current).includes(f.animationName);f.target===t&&g&&Fe.flushSync(()=>s("ANIMATION_END"))},m=f=>{f.target===t&&(i.current=ee(n.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:d.useCallback(c=>{c&&(n.current=getComputedStyle(c)),r(c)},[])}}function ee(e){return(e==null?void 0:e.animationName)||"none"}const je="Checkbox",[ht,Wr]=Ee(je),[bt,$t]=ht(je),vt=d.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:o,defaultChecked:i,required:l,disabled:a,value:s="on",onCheckedChange:c,...m}=e,[f,u]=d.useState(null),g=Re(t,x=>u(x)),b=d.useRef(!1),S=f?!!f.closest("form"):!0,[v=!1,k]=dt({prop:o,defaultProp:i,onChange:c}),$=d.useRef(v);return d.useEffect(()=>{const x=f==null?void 0:f.form;if(x){const E=()=>k($.current);return x.addEventListener("reset",E),()=>x.removeEventListener("reset",E)}},[f,k]),d.createElement(bt,{scope:r,state:v,disabled:a},d.createElement(J.button,A({type:"button",role:"checkbox","aria-checked":L(v)?"mixed":v,"aria-required":l,"data-state":Ae(v),"data-disabled":a?"":void 0,disabled:a,value:s},m,{ref:g,onKeyDown:fe(e.onKeyDown,x=>{x.key==="Enter"&&x.preventDefault()}),onClick:fe(e.onClick,x=>{k(E=>L(E)?!0:!E),S&&(b.current=x.isPropagationStopped(),b.current||x.stopPropagation())})})),S&&d.createElement(yt,{control:f,bubbles:!b.current,name:n,value:s,checked:v,required:l,disabled:a,style:{transform:"translateX(-100%)"}}))}),xt="CheckboxIndicator",St=d.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...o}=e,i=$t(xt,r);return d.createElement(Pe,{present:n||L(i.state)||i.state===!0},d.createElement(J.span,A({"data-state":Ae(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),yt=e=>{const{control:t,checked:r,bubbles:n=!0,...o}=e,i=d.useRef(null),l=ft(r),a=pt(t);return d.useEffect(()=>{const s=i.current,c=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(c,"checked").set;if(l!==r&&f){const u=new Event("click",{bubbles:n});s.indeterminate=L(r),f.call(s,L(r)?!1:r),s.dispatchEvent(u)}},[l,r,n]),d.createElement("input",A({type:"checkbox","aria-hidden":!0,defaultChecked:L(r)?!1:r},o,{tabIndex:-1,ref:i,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function L(e){return e==="indeterminate"}function Ae(e){return L(e)?"indeterminate":e?"checked":"unchecked"}const kt=vt,Ct=St;var Et=Object.defineProperty,wt=Object.defineProperties,Rt=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,pe=(e,t,r)=>t in e?Et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,F=(e,t)=>{for(var r in t||(t={}))Me.call(t,r)&&pe(e,r,t[r]);if(te)for(var r of te(t))We.call(t,r)&&pe(e,r,t[r]);return e},ce=(e,t)=>wt(e,Rt(t)),re=(e,t)=>{var r={};for(var n in e)Me.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&te)for(var n of te(e))t.indexOf(n)<0&&We.call(e,n)&&(r[n]=e[n]);return r},It={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},zt={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},Bt={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},Pt={default:"Roboto, sans-serif",code:"monospace"},jt={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},At={regular:"400",medium:"500",bold:"700"},Mt={shorter:"125%",short:"140%",base:"160%",tall:"180%"},y="colors",w="sizes",p="space",Le={gap:p,gridGap:p,columnGap:p,gridColumnGap:p,rowGap:p,gridRowGap:p,inset:p,insetBlock:p,insetBlockEnd:p,insetBlockStart:p,insetInline:p,insetInlineEnd:p,insetInlineStart:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,marginBlock:p,marginBlockEnd:p,marginBlockStart:p,marginInline:p,marginInlineEnd:p,marginInlineStart:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,paddingBlock:p,paddingBlockEnd:p,paddingBlockStart:p,paddingInline:p,paddingInlineEnd:p,paddingInlineStart:p,top:p,right:p,bottom:p,left:p,scrollMargin:p,scrollMarginTop:p,scrollMarginRight:p,scrollMarginBottom:p,scrollMarginLeft:p,scrollMarginX:p,scrollMarginY:p,scrollMarginBlock:p,scrollMarginBlockEnd:p,scrollMarginBlockStart:p,scrollMarginInline:p,scrollMarginInlineEnd:p,scrollMarginInlineStart:p,scrollPadding:p,scrollPaddingTop:p,scrollPaddingRight:p,scrollPaddingBottom:p,scrollPaddingLeft:p,scrollPaddingX:p,scrollPaddingY:p,scrollPaddingBlock:p,scrollPaddingBlockEnd:p,scrollPaddingBlockStart:p,scrollPaddingInline:p,scrollPaddingInlineEnd:p,scrollPaddingInlineStart:p,fontSize:"fontSizes",background:y,backgroundColor:y,backgroundImage:y,borderImage:y,border:y,borderBlock:y,borderBlockEnd:y,borderBlockStart:y,borderBottom:y,borderBottomColor:y,borderColor:y,borderInline:y,borderInlineEnd:y,borderInlineStart:y,borderLeft:y,borderLeftColor:y,borderRight:y,borderRightColor:y,borderTop:y,borderTopColor:y,caretColor:y,color:y,columnRuleColor:y,fill:y,outline:y,outlineColor:y,stroke:y,textDecorationColor:y,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:w,minBlockSize:w,maxBlockSize:w,inlineSize:w,minInlineSize:w,maxInlineSize:w,width:w,minWidth:w,maxWidth:w,height:w,minHeight:w,maxHeight:w,flexBasis:w,gridTemplateColumns:w,gridTemplateRows:w,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Wt=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,U=()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(i=>JSON.stringify(i,Wt))(t);return o in e?e[o]:e[o]=r(t,...n)}},N=Symbol.for("sxs.internal"),de=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),me=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Lt}=Object.prototype,se=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),Nt=/\s+(?![^()]*\))/,H=e=>t=>e(...typeof t=="string"?String(t).split(Nt):[t]),ge={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:H((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:H((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:H((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:H((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:H((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:H((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},ie=/([\d.]+)([^]*)/,_t=(e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(o)?`:is(${n})`:n):n+" "+o)),r),[]):t,Tt=(e,t)=>e in Ot&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,o,i)=>n+(o==="stretch"?`-moz-available${i};${se(e)}:${n}-webkit-fill-available`:`-moz-fit-content${i};${se(e)}:${n}fit-content`)+i):String(t),Ot={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},M=e=>e?e+"-":"",Ne=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,o,i,l,a)=>l=="$"==!!i?n:(o||l=="--"?"calc(":"")+"var(--"+(l==="$"?M(t)+(a.includes("$")?"":M(r))+a.replace(/\$/g,"-"):a)+")"+(o||l=="--"?"*"+(o||"")+(i||"1")+")":"")),Ft=/\s*,\s*(?![^()]*\))/,Dt=Object.prototype.toString,V=(e,t,r,n,o)=>{let i,l,a;const s=(c,m,f)=>{let u,g;const b=S=>{for(u in S){const $=u.charCodeAt(0)===64,x=$&&Array.isArray(S[u])?S[u]:[S[u]];for(g of x){const E=/[A-Z]/.test(k=u)?k:k.replace(/-[^]/g,R=>R[1].toUpperCase()),G=typeof g=="object"&&g&&g.toString===Dt&&(!n.utils[E]||!m.length);if(E in n.utils&&!G){const R=n.utils[E];if(R!==l){l=R,b(R(g)),l=null;continue}}else if(E in ge){const R=ge[E];if(R!==a){a=R,b(R(g)),a=null;continue}}if($&&(v=u.slice(1)in n.media?"@media "+n.media[u.slice(1)]:u,u=v.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(R,W,z,D,B,P)=>{const j=ie.test(W),Y=.0625*(j?-1:1),[X,Q]=j?[D,W]:[W,D];return"("+(z[0]==="="?"":z[0]===">"===j?"max-":"min-")+X+":"+(z[0]!=="="&&z.length===1?Q.replace(ie,(Oe,ne,oe)=>Number(ne)+Y*(z===">"?1:-1)+oe):Q)+(B?") and ("+(B[0]===">"?"min-":"max-")+X+":"+(B.length===1?P.replace(ie,(Oe,ne,oe)=>Number(ne)+Y*(B===">"?-1:1)+oe):P):"")+")"})),G){const R=$?f.concat(u):[...f],W=$?[...m]:_t(m,u.split(Ft));i!==void 0&&o(he(...i)),i=void 0,s(g,W,R)}else i===void 0&&(i=[[],m,f]),u=$||u.charCodeAt(0)!==36?u:`--${M(n.prefix)}${u.slice(1).replace(/\$/g,"-")}`,g=G?g:typeof g=="number"?g&&E in Ht?String(g)+"px":String(g):Ne(Tt(E,g??""),n.prefix,n.themeMap[E]),i[0].push(`${$?`${u} `:`${se(u)}:`}${g}`)}}var v,k};b(c),i!==void 0&&o(he(...i)),i=void 0};s(e,t,r)},he=(e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,Ht={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},be=e=>String.fromCharCode(e+(e>25?39:97)),_=e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=be(r%52)+n;return be(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),Z=["themed","global","styled","onevar","resonevar","allvar","inline"],Vt=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},Ut=e=>{let t;const r=()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,l)=>{const{cssText:a}=i;let s="";if(a.startsWith("--sxs"))return"";if(o[l-1]&&(s=o[l-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const c in t.rules)if(t.rules[c].group===i)return`--sxs{--sxs:${[...t.rules[c].cache].join(" ")}}${a}`;return i.cssRules.length?`${s}${a}`:""}return a}).join("")},n=()=>{if(t){const{rules:a,sheet:s}=t;if(!s.deleteRule){for(;Object(Object(s.cssRules)[0]).type===3;)s.cssRules.splice(0,1);s.cssRules=[]}for(const c in a)delete a[c]}const o=Object(e).styleSheets||[];for(const a of o)if(Vt(a)){for(let s=0,c=a.cssRules;c[s];++s){const m=Object(c[s]);if(m.type!==1)continue;const f=Object(c[s+1]);if(f.type!==4)continue;++s;const{cssText:u}=m;if(!u.startsWith("--sxs"))continue;const g=u.slice(14,-3).trim().split(/\s+/),b=Z[g[0]];b&&(t||(t={sheet:a,reset:n,rules:{},toString:r}),t.rules[b]={group:f,index:s,cache:new Set(g)})}if(t)break}if(!t){const a=(s,c)=>({type:c,cssRules:[],insertRule(m,f){this.cssRules.splice(f,0,a(m,{import:3,undefined:1}[(m.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return s==="@media{}"?`@media{${[].map.call(this.cssRules,m=>m.cssText).join("")}}`:s}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:a("","text/css"),rules:{},reset:n,toString:r}}const{sheet:i,rules:l}=t;for(let a=Z.length-1;a>=0;--a){const s=Z[a];if(!l[s]){const c=Z[a+1],m=l[c]?l[c].index:i.cssRules.length;i.insertRule("@media{}",m),i.insertRule(`--sxs{--sxs:${a}}`,m),l[s]={group:i.cssRules[m+1],index:m,cache:new Set([a])}}Gt(l[s])}};return n(),t},Gt=e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},q=Symbol(),Yt=U(),$e=(e,t)=>Yt(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const o of r)if(o!=null)if(o[N]){n.type==null&&(n.type=o[N].type);for(const i of o[N].composers)n.composers.add(i)}else o.constructor!==Object||o.$$typeof?n.type==null&&(n.type=o):n.composers.add(qt(o,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),Zt(e,n,t)}),qt=(e,t)=>{var r=e,{variants:n,compoundVariants:o,defaultVariants:i}=r,l=re(r,["variants","compoundVariants","defaultVariants"]);const a=`${M(t.prefix)}c-${_(l)}`,s=[],c=[],m=Object.create(null),f=[];for(const b in i)m[b]=String(i[b]);if(typeof n=="object"&&n)for(const b in n){u=m,g=b,Lt.call(u,g)||(m[b]="undefined");const S=n[b];for(const v in S){const k={[b]:String(v)};String(v)==="undefined"&&f.push(b);const $=S[v],x=[k,$,!me($)];s.push(x)}}var u,g;if(typeof o=="object"&&o)for(const b of o){let S=b,{css:v}=S,k=re(S,["css"]);v=typeof v=="object"&&v||{};for(const x in k)k[x]=String(k[x]);const $=[k,v,!me(v)];c.push($)}return[a,l,s,c,m,f]},Zt=(e,t,r)=>{const[n,o,i,l]=Kt(t.composers),a=typeof t.type=="function"||t.type.$$typeof?(f=>{function u(){for(let g=0;g<u[q].length;g++){const[b,S]=u[q][g];f.rules[b].apply(S)}return u[q]=[],null}return u[q]=[],u.rules={},Z.forEach(g=>u.rules[g]={apply:b=>u[q].push([g,b])}),u})(r):null,s=(a||r).rules,c=`.${n}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,m=f=>{f=typeof f=="object"&&f||Jt;const u=f,{css:g}=u,b=re(u,["css"]),S={};for(const $ in i)if(delete b[$],$ in f){let x=f[$];typeof x=="object"&&x?S[$]=F({"@initial":i[$]},x):(x=String(x),S[$]=x!=="undefined"||l.has($)?x:i[$])}else S[$]=i[$];const v=new Set([...o]);for(const[$,x,E,G]of t.composers){r.rules.styled.cache.has($)||(r.rules.styled.cache.add($),V(x,[`.${$}`],[],e,z=>{s.styled.apply(z)}));const R=ve(E,S,e.media),W=ve(G,S,e.media,!0);for(const z of R)if(z!==void 0)for(const[D,B,P]of z){const j=`${$}-${_(B)}-${D}`;v.add(j);const Y=(P?r.rules.resonevar:r.rules.onevar).cache,X=P?s.resonevar:s.onevar;Y.has(j)||(Y.add(j),V(B,[`.${j}`],[],e,Q=>{X.apply(Q)}))}for(const z of W)if(z!==void 0)for(const[D,B]of z){const P=`${$}-${_(B)}-${D}`;v.add(P),r.rules.allvar.cache.has(P)||(r.rules.allvar.cache.add(P),V(B,[`.${P}`],[],e,j=>{s.allvar.apply(j)}))}}if(typeof g=="object"&&g){const $=`${n}-i${_(g)}-css`;v.add($),r.rules.inline.cache.has($)||(r.rules.inline.cache.add($),V(g,[`.${$}`],[],e,x=>{s.inline.apply(x)}))}for(const $ of String(f.className||"").trim().split(/\s+/))$&&v.add($);const k=b.className=[...v].join(" ");return{type:t.type,className:k,selector:c,props:b,toString:()=>k,deferredInjector:a}};return de(m,{className:n,selector:c,[N]:t,toString:()=>(r.rules.styled.cache.has(n)||m(),n)})},Kt=e=>{let t="";const r=[],n={},o=[];for(const[i,,,,l,a]of e){t===""&&(t=i),r.push(i),o.push(...a);for(const s in l){const c=l[s];(n[s]===void 0||c!=="undefined"||a.includes(c))&&(n[s]=c)}}return[t,r,n,new Set(o)]},ve=(e,t,r,n)=>{const o=[];e:for(let[i,l,a]of e){if(a)continue;let s,c=0,m=!1;for(s in i){const f=i[s];let u=t[s];if(u!==f){if(typeof u!="object"||!u)continue e;{let g,b,S=0;for(const v in u){if(f===String(u[v])){if(v!=="@initial"){const k=v.slice(1);(b=b||[]).push(k in r?r[k]:v.replace(/^@media ?/,"")),m=!0}c+=S,g=!0}++S}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!g)continue e}}}(o[c]=o[c]||[]).push([n?"cv":`${s}-${i[s]}`,l,m])}return o},Jt={},Xt=U(),Qt=(e,t)=>Xt(e,()=>(...r)=>{const n=()=>{for(let o of r){o=typeof o=="object"&&o||{};let i=_(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let a of[].concat(o["@import"]))a=a.includes('"')||a.includes("'")?a:`"${a}"`,t.sheet.insertRule(`@import ${a};`,l++);delete o["@import"]}V(o,[],[],e,l=>{t.rules.global.apply(l)})}}return""};return de(n,{toString:n})}),er=U(),tr=(e,t)=>er(e,()=>r=>{const n=`${M(e.prefix)}k-${_(r)}`,o=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];V(r,[],[],e,a=>i.push(a));const l=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(l)}return n};return de(o,{get name(){return o()},toString:o})}),rr=class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+M(this.prefix)+M(this.scale)+this.token}toString(){return this.computedValue}},nr=U(),or=(e,t)=>nr(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const o=`.${r=(r=typeof r=="string"?r:"")||`${M(e.prefix)}t-${_(n)}`}`,i={},l=[];for(const s in n){i[s]={};for(const c in n[s]){const m=`--${M(e.prefix)}${s}-${c}`,f=Ne(String(n[s][c]),e.prefix,s);i[s][c]=new rr(c,f,s,e.prefix),l.push(`${m}:${f}`)}}const a=()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const s=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(s)}return r};return ce(F({},i),{get className(){return a()},selector:o,toString:a})}),ir=U(),ar=U(),sr=e=>{const t=(r=>{let n=!1;const o=ir(r,i=>{n=!0;const l="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",a=typeof i.media=="object"&&i.media||{},s=typeof i.root=="object"?i.root||null:globalThis.document||null,c=typeof i.theme=="object"&&i.theme||{},m={prefix:l,media:a,theme:c,themeMap:typeof i.themeMap=="object"&&i.themeMap||F({},Le),utils:typeof i.utils=="object"&&i.utils||{}},f=Ut(s),u={css:$e(m,f),globalCss:Qt(m,f),keyframes:tr(m,f),createTheme:or(m,f),reset(){f.reset(),u.theme.toString()},theme:{},sheet:f,config:m,prefix:l,getCssText:f.toString,toString:f.toString};return String(u.theme=u.createTheme(c)),u});return n||o.reset(),o})(e);return t.styled=(({config:r,sheet:n})=>ar(r,()=>{const o=$e(r,n);return(...i)=>{const l=o(...i),a=l[N].type,s=h.forwardRef((c,m)=>{const f=c&&c.as||a,{props:u,deferredInjector:g}=l(c);return delete u.as,u.ref=m,g?h.createElement(h.Fragment,null,h.createElement(f,u),h.createElement(g,null)):h.createElement(f,u)});return s.className=l.className,s.displayName=`Styled.${a.displayName||a.name||a}`,s.selector=l.selector,s.toString=()=>l.selector,s[N]=l[N],s}}))(t),t},{styled:C,keyframes:_e,css:Lr,globalCss:Nr,getCssText:_r,createTheme:Tr,config:Or}=sr({themeMap:ce(F({},Le),{height:"space",width:"space"}),theme:{colors:It,fontSizes:jt,fontWeights:At,fonts:Pt,lineHeights:Mt,radii:Bt,space:zt}}),lr=C("div",{padding:"$4",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});lr.displayName="Box";var Te=C("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Te.displayName="Text";var cr=C("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});cr.displayName="Heading";var dr=C(st,{borderRadius:"$full",display:"inline-block",width:"$12",height:"$12",overflow:"hidden"}),ur=C(lt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),fr=C(ct,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function pr(e){return I.jsxs(dr,{children:[I.jsx(ur,F({},e)),I.jsx(fr,{delayMs:600,children:I.jsx(Ge,{})})]})}pr.displayName="Avatar";var mr=C("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});mr.displayName="Button";var gr=C("div",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"baseline","&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"}}),hr=C("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"regular"}),br=C("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});function $r(e){var t=e,{prefix:r}=t,n=re(t,["prefix"]);return I.jsxs(gr,{children:[!!r&&I.jsx(hr,{children:r}),I.jsx(br,F({},n))]})}$r.displayName="TextInput";var vr=C("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});vr.displayName="TextArea";var xr=C(kt,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},"&:focus":{border:"2px solid $ignite300"}}),Sr=_e({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),yr=_e({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),kr=C(Ct,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${Sr} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${yr} 200ms ease-out`}});function Cr(e){return I.jsx(xr,ce(F({},e),{children:I.jsx(kr,{asChild:!0,children:I.jsx(Ve,{weight:"bold"})})}))}Cr.displayName="Checkbox";var Er=C("div",{}),wr=C(Te,{color:"$gray200",defaultVariants:{size:"xs"}}),Rr=C("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),Ir=C("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function zr({size:e,currentStep:t=1}){return I.jsxs(Er,{children:[I.jsxs(wr,{children:["Passo ",t," de ",e]}),I.jsx(Rr,{css:{"--steps-size":e},children:Array.from({length:e},(r,n)=>n+1).map(r=>I.jsx(Ir,{active:t>=r},r))})]})}zr.displayName="MultiStep";export{pr as A,lr as B,Cr as C,cr as H,ye as I,zr as M,Te as T,vr as a,$r as b,mr as c,xe as r};
