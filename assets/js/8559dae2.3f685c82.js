"use strict";(self.webpackChunkdocusaurus_tsx=self.webpackChunkdocusaurus_tsx||[]).push([[9812],{3858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(4848),a=t(8453);const l={},o="Llama2",i={id:"recipes/llama2/README",title:"Llama2",description:"---",source:"@site/docs/recipes/llama2/README.md",sourceDirName:"recipes/llama2",slug:"/recipes/llama2/",permalink:"/eole/docs/recipes/llama2/",draft:!1,unlisted:!1,editUrl:"https://github.com/eole-nlp/eole/tree/main/docs/docs/recipes/llama2/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Recipes",permalink:"/eole/docs/recipes/"},next:{title:"Llama3",permalink:"/eole/docs/recipes/llama3/"}},s={},c=[{value:"<strong>NOTE</strong>\nTo make your life easier, run these commands from the recipe directory (here <code>recipes/llama2</code>).",id:"noteto-make-your-life-easier-run-these-commands-from-the-recipe-directory-here-recipesllama2",level:2},{value:"Retrieve and convert model",id:"retrieve-and-convert-model",level:2},{value:"Set environment variables",id:"set-environment-variables",level:3},{value:"Download and convert model",id:"download-and-convert-model",level:3},{value:"Inference",id:"inference",level:2},{value:"Write test prompt to text file",id:"write-test-prompt-to-text-file",level:3},{value:"Run inference",id:"run-inference",level:3},{value:"Finetuning",id:"finetuning",level:2},{value:"Retrieve data",id:"retrieve-data",level:3},{value:"Finetune",id:"finetune",level:3},{value:"Merge LoRa weights",id:"merge-lora-weights",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"llama2",children:"Llama2"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h2,{id:"noteto-make-your-life-easier-run-these-commands-from-the-recipe-directory-here-recipesllama2",children:[(0,r.jsx)(n.strong,{children:"NOTE"}),"\nTo make your life easier, run these commands from the recipe directory (here ",(0,r.jsx)(n.code,{children:"recipes/llama2"}),")."]}),"\n",(0,r.jsx)(n.h2,{id:"retrieve-and-convert-model",children:"Retrieve and convert model"}),"\n",(0,r.jsx)(n.h3,{id:"set-environment-variables",children:"Set environment variables"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"export EOLE_MODEL_DIR=<where_to_store_models>\nexport HF_TOKEN=<your_hf_token>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"download-and-convert-model",children:"Download and convert model"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"eole convert HF --model_dir meta-llama/Llama-2-7b-chat-hf --output $EOLE_MODEL_DIR/llama2-7b-chat-hf --token $HF_TOKEN\n"})}),"\n",(0,r.jsx)(n.h2,{id:"inference",children:"Inference"}),"\n",(0,r.jsx)(n.h3,{id:"write-test-prompt-to-text-file",children:"Write test prompt to text file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"echo -e \"<s>[INST] <<SYS>>\nYou are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe.  Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.\n<</SYS>>\nWhat are some nice places to visit in France? [/INST]\" | sed ':a;N;$!ba;s/\\n/\uff5fnewline\uff60/g' > test_prompt.txt\n"})}),"\n",(0,r.jsx)(n.h3,{id:"run-inference",children:"Run inference"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Single GPU"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"eole predict -c llama-inference.yaml -src test_prompt.txt -output test_output.txt\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Dual GPU (tensor parallelism)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"eole predict -c llama-inference-tp-2gpu.yaml -src test_prompt.txt -output test_output.txt\n"})}),"\n",(0,r.jsx)(n.h2,{id:"finetuning",children:"Finetuning"}),"\n",(0,r.jsx)(n.h3,{id:"retrieve-data",children:"Retrieve data"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[ ! -d ./data ] && mkdir ./data\n# Alpaca\nwget -P ./data https://opennmt-models.s3.amazonaws.com/llama/alpaca_clean.txt\n\n# Vicuna\nwget -P ./data https://opennmt-models.s3.amazonaws.com/llama/sharegpt.txt\n\n# Open Assisstant\nwget -P ./data https://opennmt-models.s3.amazonaws.com/llama/osst1.flattened.txt\n"})}),"\n",(0,r.jsx)(n.h3,{id:"finetune",children:"Finetune"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"eole train -c llama-finetune.yaml\n"})}),"\n",(0,r.jsx)(n.h3,{id:"merge-lora-weights",children:"Merge LoRa weights"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"eole model lora --action merge --base_model ${EOLE_MODEL_DIR}/llama2-7b-chat-hf --lora_weights ./finetune/llama2-7b-chat-hf-finetune --output ./finetune/merged\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then you can just update your inference setup to use the newly finetuned & merged model."})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(6540);const a={},l=r.createContext(a);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);