"use strict";(self.webpackChunkdocusaurus_tsx=self.webpackChunkdocusaurus_tsx||[]).push([[244],{108:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=r(4848),o=r(8453);const s={},i="Llama3",l={id:"recipes/wmt22_with_llama3.1/README",title:"Llama3",description:"---",source:"@site/docs/recipes/wmt22_with_llama3.1/README.md",sourceDirName:"recipes/wmt22_with_llama3.1",slug:"/recipes/wmt22_with_llama3.1/",permalink:"/eole/docs/recipes/wmt22_with_llama3.1/",draft:!1,unlisted:!1,editUrl:"https://github.com/eole-nlp/eole/tree/main/docs/docs/recipes/wmt22_with_llama3.1/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TowerInstruct-(Llama2)",permalink:"/eole/docs/recipes/wmt22_with_TowerInstruct-llama2/"},next:{title:"Contributors",permalink:"/eole/docs/contributing"}},c={},a=[{value:"<strong>NOTE</strong>\nTo make your life easier, run these commands from the recipe directory (here <code>recipes/wmt22_with_llama3.1</code>).",id:"noteto-make-your-life-easier-run-these-commands-from-the-recipe-directory-here-recipeswmt22_with_llama31",level:2},{value:"Retrieve and convert model",id:"retrieve-and-convert-model",level:2},{value:"Set environment variables",id:"set-environment-variables",level:3},{value:"Download and convert model",id:"download-and-convert-model",level:3},{value:"Inference",id:"inference",level:2},{value:"Build the prompt for translation of newstest2022-src.en",id:"build-the-prompt-for-translation-of-newstest2022-srcen",level:3},{value:"Run inference",id:"run-inference",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"llama3",children:"Llama3"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"noteto-make-your-life-easier-run-these-commands-from-the-recipe-directory-here-recipeswmt22_with_llama31",children:[(0,t.jsx)(n.strong,{children:"NOTE"}),"\nTo make your life easier, run these commands from the recipe directory (here ",(0,t.jsx)(n.code,{children:"recipes/wmt22_with_llama3.1"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"retrieve-and-convert-model",children:"Retrieve and convert model"}),"\n",(0,t.jsx)(n.h3,{id:"set-environment-variables",children:"Set environment variables"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"export EOLE_MODEL_DIR=<where_to_store_models>\nexport HF_TOKEN=<your_hf_token>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"download-and-convert-model",children:"Download and convert model"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"eole convert HF --model_dir meta-llama/Meta-Llama-3.1-8B --output $EOLE_MODEL_DIR/llama3.1-8b --token $HF_TOKEN\n"})}),"\n",(0,t.jsx)(n.h2,{id:"inference",children:"Inference"}),"\n",(0,t.jsx)(n.h3,{id:"build-the-prompt-for-translation-of-newstest2022-srcen",children:"Build the prompt for translation of newstest2022-src.en"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"python promptize_llama3.py\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-inference",children:"Run inference"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"eole predict -c llama-instruct-inference.yaml -src newstest2022-src-prompt.en -output newstest2022-hyp.de\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then you can score newstest2022-hyp.de against newstest2022-ref.de with a scorer (sacrebleu or comet) or just use cometkiwi for reference-less score."})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);