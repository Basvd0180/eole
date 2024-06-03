"use strict";(self.webpackChunkdocusaurus_tsx=self.webpackChunkdocusaurus_tsx||[]).push([[1094],{1484:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var o=i(4848),s=i(8453);const t={},r="Position encoding: Absolute vs Relative vs Rotary Embeddings vs Alibi",d={id:"FAQ/position_encoding",title:"Position encoding: Absolute vs Relative vs Rotary Embeddings vs Alibi",description:"The basic feature is absolute position encoding stemming from the original Transformer Paper.",source:"@site/docs/FAQ/position_encoding.md",sourceDirName:"FAQ",slug:"/FAQ/position_encoding",permalink:"/eole/docs/FAQ/position_encoding",draft:!1,unlisted:!1,editUrl:"https://github.com/eole-nlp/eole/tree/main/docs/docs/FAQ/position_encoding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Performance tips",permalink:"/eole/docs/FAQ/performance"},next:{title:"How do I use Pretrained embeddings (e.g. GloVe)?",permalink:"/eole/docs/FAQ/pretrained_embeddings"}},a={},l=[];function c(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"position-encoding-absolute-vs-relative-vs-rotary-embeddings-vs-alibi",children:"Position encoding: Absolute vs Relative vs Rotary Embeddings vs Alibi"}),"\n",(0,o.jsx)(n.p,{children:"The basic feature is absolute position encoding stemming from the original Transformer Paper.\nHowever, even with this, we can use SinusoidalInterleaved (default OpenNMT-py) or SinusoidalConcat (default Fairseq imported models)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"position_encoding: true"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"position_encoding_type: 'SinusoidalInterleaved'"}),"\nDo not forget to set also ",(0,o.jsx)(n.code,{children:"param_init_glorot: true"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If you prefer to use relative position encoding, we support 3 modes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:['"Shaw": ',(0,o.jsx)(n.a,{href:"https://arxiv.org/abs/1803.02155",children:"https://arxiv.org/abs/1803.02155"})," - you need to set ",(0,o.jsx)(n.code,{children:"max_relative_positions: N"})," where N > 1 (use 16, 20, 32) see paper."]}),"\n",(0,o.jsxs)(n.li,{children:['"Rope" Rotary Embeddings: ',(0,o.jsx)(n.a,{href:"https://arxiv.org/abs/2104.09864",children:"https://arxiv.org/abs/2104.09864"})," - you need to set ",(0,o.jsx)(n.code,{children:"max_relative_positions: -1"})]}),"\n",(0,o.jsxs)(n.li,{children:['"Alibi" (used by MPT-7B for example) ',(0,o.jsx)(n.a,{href:"https://arxiv.org/abs/2108.12409",children:"https://arxiv.org/abs/2108.12409"})," - you need to set ",(0,o.jsx)(n.code,{children:"max_relative_positions: -2"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In both cases, it is necessary to set ",(0,o.jsx)(n.code,{children:"position_encoding: false"})]}),"\n",(0,o.jsx)(n.p,{children:"In a nutshell, at the time if this writing (v3.1) absolute position encoding is managed in the Embeddings module, whereas\nthe relative position encoding is managed directly in the multi-head self-attention module."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var o=i(6540);const s={},t=o.createContext(s);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);