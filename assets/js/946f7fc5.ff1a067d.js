"use strict";(self.webpackChunkdocusaurus_tsx=self.webpackChunkdocusaurus_tsx||[]).push([[9183],{1980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(4848),i=t(8453);const a={},s="Llama3",r={id:"recipes/llama3.1/README",title:"Llama3",description:"---",source:"@site/docs/recipes/llama3.1/README.md",sourceDirName:"recipes/llama3.1",slug:"/recipes/llama3.1/",permalink:"/eole/docs/recipes/llama3.1/",draft:!1,unlisted:!1,editUrl:"https://github.com/eole-nlp/eole/tree/main/docs/docs/recipes/llama3.1/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Llama3",permalink:"/eole/docs/recipes/llama3/"},next:{title:"Mistral",permalink:"/eole/docs/recipes/mistral/"}},l={},d=[{value:"<strong>NOTE</strong>\nTo make your life easier, run these commands from the recipe directory (here <code>recipes/llama3.1</code>).",id:"noteto-make-your-life-easier-run-these-commands-from-the-recipe-directory-here-recipesllama31",level:2},{value:"Retrieve and convert model",id:"retrieve-and-convert-model",level:2},{value:"Set environment variables",id:"set-environment-variables",level:3},{value:"Download and convert model",id:"download-and-convert-model",level:3},{value:"Inference",id:"inference",level:2},{value:"Write test prompt to text file",id:"write-test-prompt-to-text-file",level:3},{value:"Run inference",id:"run-inference",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"llama3",children:"Llama3"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.h2,{id:"noteto-make-your-life-easier-run-these-commands-from-the-recipe-directory-here-recipesllama31",children:[(0,o.jsx)(n.strong,{children:"NOTE"}),"\nTo make your life easier, run these commands from the recipe directory (here ",(0,o.jsx)(n.code,{children:"recipes/llama3.1"}),")."]}),"\n",(0,o.jsx)(n.h2,{id:"retrieve-and-convert-model",children:"Retrieve and convert model"}),"\n",(0,o.jsx)(n.h3,{id:"set-environment-variables",children:"Set environment variables"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"export EOLE_MODEL_DIR=<where_to_store_models>\nexport HF_TOKEN=<your_hf_token>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"download-and-convert-model",children:"Download and convert model"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"eole convert HF --model_dir meta-llama/Meta-Llama-3.1-8B --output $EOLE_MODEL_DIR/llama3.1-8b --token $HF_TOKEN\n"})}),"\n",(0,o.jsx)(n.h2,{id:"inference",children:"Inference"}),"\n",(0,o.jsx)(n.h3,{id:"write-test-prompt-to-text-file",children:"Write test prompt to text file"}),"\n",(0,o.jsxs)(n.p,{children:["(Example prompt inspired from this HF PR: ",(0,o.jsx)(n.a,{href:"https://github.com/huggingface/transformers/pull/24653",children:"https://github.com/huggingface/transformers/pull/24653"}),")"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"echo -e \"You are given this machine learning research paper, please read it carefully and answer the follow up question.\n\n=== BEGIN ===\n\n2306.15595v2 [cs.CL] 28 Jun 2023\n\narXiv\n\nEXTENDING CONTEXT WINDOW OF LARGE LAN-\nGUAGE MODELS VIA POSITION INTERPOLATION\n\nShouyuan Chen Sherman Wong Liangjian Chen  Yuandong Tian\nMeta Platforms Inc.\n{chenshouyuan, shermanwong, cli, yuandong}@meta . com\n\n1 INTRODUCTION\n\nLarge language models (LLMs) typically come with a pre-defined context window size. For exam-\nple, inputs to LLaMA models (Touvron et al., 2023) must be fewer than 2048 tokens. This pre-set\ncontext window limit is frequently exceeded in applications such as conducting long conversations,\nsummarizing long documents, or executing long-term planning. For these applications, LLMs with\nlonger context windows are preferred. However, training an LLM from scratch with long context\nwindows requires significant investments. This naturally leads to a question: Can we extend the\ncontext window of an existing pre-trained LLM?\n\nOne straightforward approach is to fine-tune an existing pre-trained Transformer with a longer con-\ntext window. However, empirically, we found that models trained this way adapt to long context\nwindows very slowly. After training for more than 10000 batches, the effective context window\nsaw a minimal increase, moving from 2048 to 2560 (Table 4). This suggests that such method is\ninefficient for extending to substantially longer context windows.\n\nWhile certain techniques such as ALiBi (Press et al., 2022) and LeX (Sun et al., 2022) enable length\nextrapolation of Transformers, i.e. train on short context windows and inference on longer ones,\nmany existing pre-trained LLMs, including LLaMA (Touvron et al., 2023), use positional encodings\nthat have weak extrapolation properties (e.g., RoPE (Su et al., 2021)). Therefore, the applicability\nof these techniques for extending the context window sizes of such LLMs remains limited.\n\nIn this work, we introduce Position Interpolation to enable context window extensions for certain\nexisting pre-trained LLMs, including LLaMA. The key idea is, instead of extrapolation, we directly\ndown-scale the position indices so that the maximum position index matches the previous context\nwindow limit in the pre-training stage. See Figure 1 for an illustration. In other words, to accom-\nmodate more input tokens, we interpolate the position encodings at neighboring integer positions,\nutilizing the fact that position encodings can be applied on non-integer positions, as opposed to\nextrapolating outside the trained positions, which may lead to catastrophic values. We verify our\napproach theoretically, by showing that the interpolated attention score has a much smaller upper\n\nbound (~ 600x smaller in LLaMA 7B setting) than the extrapolated one, and is thus much more\nstable. Therefore, interpolated position encodings are easier for the model to adapt.\n\nEmpirically, we found that Position Interpolation is highly effective and efficient, requiring only a\nvery short period of fine-tuning for the model to fully adapt to greatly extended context windows.\nWe present experimental results for extending the context window to up to 32768 from the initial\n2048 across 7B to 65B LLaMA models using Position Interpolation. Our results show that\n\n1. Position Interpolation can easily enable very long context windows (e.g. 32768), requiring\nonly fine-tuning for 1000 steps on the Pile (Gao et al., 2020) to achieve a good quality.\nThe cost of fine-tuning is negligible compared to the pre-training costs. This confirms\nour hypothesis that it is relatively easy for the models to adapt to interpolated position\nencodings.\n\n2. Position Interpolation generates strong models that can effectively make use of much ex-\ntended context window. We show that models extended by Position Interpolation enjoy\nsignificant perplexity gains from greatly extended context windows for text modeling, and\nwe show that the perplexity reduces graceful with the enlargement of context windows.\nWe also applied Position Interpolation in a long text summarization task, and demonstrate\ncompetitive performances.\n\n3. Position Interpolation preserves model quality relatively well for tasks within its original\ncontext window sizes. We present a variety of evaluation results for the extended LLaMA\nmodels on the original LLaMA benchmark. Compared with original LLaMA models, the\nextended LLLaM A models saw a minor degradation on several standard benchmarks within\na 2048 token limit.\n\nOur results highlight the innate ability of Transformer models to \u201cextrapolate to sequence lengths\nlonger than the ones encountered during training\u201d as hypothesized in the seminal work of Vaswani\net al. (2017). We reaffirm this hypothesis and suggest that the previously known weakness of ex-\ntrapolating to longer sequences for language modeling (Press et al., 2022) may be due to direct\n\nextrapolation of positional encodings and it can be largely mitigated by interpolating position en-\ncodings instead.\n\nConcurrent work. Right before our release, we are informed with a concurrent blogpost (Super-\nHOT kaiokendev (2023)) that also interpolates positional encoding in RoPE to extend the context\nwindow from 2K to 8K. Recently, open source community picks it up in Reddit post ! and Github\nIssues 2, which shows that fine-tuning with LoRA (Hu et al., 2021) also seems to work well. Our\npaper shows a full fine-tuning with up to 65B model work well with Position Interpolation, and we\nalso give theoretical explanations why interpolation achieves much more stable results than extrap-\nolation, by showing that the upper bound of interplated attention score is much lower than that of\nextrapolated ones.\n\n2 METHOD\n\n2.1 BACKGROUND: ROTARY POSITION EMBEDDING (ROPE)\n\nTransformer models require explicit positional information to be injected, typically in the form of\npositional encodings, to represent the order of inputs. We consider Rotary Position Embedding\n(ROPE) (Su et al., 2021), which is the position encoding used in the LLLaMA model (Touvron et al.,\n2023). Given a position index m \u20ac [0, \xa2) and an embedding vector x := [zg, 71,..., 241], Where\nd is the dimension of the attention head, RoPE defines a vector-valued complex function f{x, m) as\nfollows\n\nUsing RoPE, the self-attention score\nis only dependent on relative position m \u2014 7 through trigonometric functions. Here q and k are the\nquery and key vector for a specific attention head. At each layer, RoPE is applied on both query and\nkey embeddings for computing attention scores.\n\n2.2 DIRECT EXTRAPOLATION\n\nWhile the attention score in RoPE only depends on the relative positions, which is what we want,\nits extrapolation performance is not great . In particular, when directly extending to larger context\nwindows unseen in the training, the perplexity may shoot up to very high numbers (i.e., > 10%),\ncomparable to untrained models.\n\nIdeally, we want to see the model trained on a context window of size L = 2048 to still work\nreasonably well on longer context window, but may not have the capability to leverage information\nthat appears beyond L. For example, to answer a question located at 3000, the model trained on\nmaximal window size of I = 2048 cannot leverage evidences provided at location 0, but still\ncan leverage the evidences provided at location 2900. In contrast, in reality we see catastrophic\nbehaviors, i.e., question at location 3000 cannot be answered correctly, even if the evidences are\nlocated at location 2900.\n\nWhat is the reason behind? How could this happen if the attention score a,,,\u2014,, decays as the relative\ndistance |m \u2014 n/| increases, according to Section 3.4.3 of (Su et al., 2021), and content from very\nfar distances should not matter that much? It turns out that the upper bound derived in Section 3.4.3\nof (Su et al., 2021) may be too loose: while it indeed decays with respect to |m \u2014 nl, the bound\ncan still be quite large (i.e., the bound can be critically depends on the magnitude of v;) and thus\nvacuous. In fact, if we treat all trigonometric functions as basis functions (i.e, \xa2;(s) := #93), and\nthink about Eqn. 2 as basis expansion as the following:\n\nwhere s is the positional span between a query and a key and h; := (ga; + igaj+1){k2j \u2014 tk2j+1)\nare complex coefficients depending on q and k (here the definition of h; is exactly the same as the\ndefinition of k; in Sec 3.4.3 in RoPE (Su et al., 2021)). Now the the issue becomes clear: as shown\nin Fig. 2, a, can be small in magnitude in the range of [0, 2048], but gives huge values out of the\nregion. The underlying reason is that the trigonometric family {\xa2;} (with sufficiently large d) is\na universal approximator and can fit any arbitrary functions. Therefore, for a, there always exist\ncoefficients {h;} (i.e. key and query) that corresponds to small function values in [0, 2048] but\n\nmuch larger in regions beyond.\n\n2.3 PROPOSED APPROACH: POSITION INTERPOLATION (PI)\n\nIn Fig. 2, thanks to the smoothness of bases functions \xa2; interpolation is much more stable and will\nnot lead to wild values. Therefore, instead of extrapolate the attention score in Eqn. 3 to s > L,\nhow about we define an attention score a{s) = a(Ls/L\u2019) where L\u2019 is the longer context window?\nFormally, we replace RoPE f by {\u2019 defined as follows\n\nWe call this transformation on the position encoding Position Interpolation. In this step, we reduce\nposition indices from [0, L') to [0, L) to match the original range of indices before computing RoPE.\nConsequently, as inputs to RoPE, the maximum relative distance between any two tokens has been\nreduced from I\u2019 to L. Since we align the ranges of position indices and relative distances before\nand after extension, we mitigate the effect on attention score computation due to context window\nextensions, which can allow the model easier to adapt. To further demonstrate this is the case, in the\nfollowing theorem, we show that the interpolated attention score is well-behaved:\n\nWhile there is no close form for B(s) := 4/21 |Ag41(s)|, numerically it is at least larger than d, and for many positional difference s, B(s) is much larger than d\n(check Appendix B for the plot). Therefore, the interpolation bound is at least 2 - 294.73 ~ 600 x\nsmaller than the extrapolation bound, and thus the interpolated attention score is much more stable\nthan extrapolated one.\n\nNotably, our method of rescaling of position indices does not introduce extra weight, or modify\nthe model architecture in any way. This makes it attractive in practical applications, since most\ninfrastructure and optimization for the original model can be reused after the extension.\n\nFine-tuning. We can further fine-tune the interpolated model using the next token prediction task\nwith interpolated position encodings on the extended context window size using a pre-training cor-\npus such as the Pile (Gao et al., 2020). In the next section, we show that our fine-tuning process\nonly needs tens to hundreds thousands of examples. We also find that the result of the fine-tuning\nis not sensitive to the choice of examples. The reason may be that the model is only adapting to the\nnew context window during the fine-tuning phase, starting from a good initialization, as opposed to\nacquiring new knowledge.\n\nOther ways to reduce interpolation/extrapolation bound. From the expression of the interpola-\ntion (Eqn. 5) and extrapolation bound (Eqn. 8), a common term is max; ||, which is the maximal\nmagnitude of query/key products. If we enforce a regularization on || during LLM training, it is\npossible that the catastrophic extrapolation error can be mitigated or even resolved. In fact, if we\napply ridge regression with proper regularization to fit a curve in Fig. 2, the magnitude of extrapo-\nlated a(s) when s > L can be comparable to that within [0, L]. To our knowledge, we are not aware\nof existing LLM pre-training techniques that leverage this regularization and will leave it for future\nwork.\n\n3 EXPERIMENTS\n\nWe show Position Interpolation can effectively extend context window up to 32 times of the original\nsize, and such extension can be done with only several hundreds of training steps. We show the\nresulting models are strong LLMs with fully effective long context windows. We demonstrate its\nperformance in a number of tasks including language modeling, passkey retrieval, and long doc-\nument summarization. We also present benchmark results of the extended models on the original\nLLaMA evaluation benchmarks.\n3.1 SETUP\n\nModel Variants. We extended the pre-trained 7B, 13B, 33B and 65B LLaMA models (Touvron\net al., 2023) to various context window of sizes up to 32768, using either direct fine-tuning or\nPosition Interpoloation method. Except for rescaling the position indices for models extended with\nPosition Interpolation, we did not modify LLaMA model architectures (Touvron et al., 2023) in any\nways.\n\nTraining Procedure. We fine-tune all model variants using the next token prediction objective. We\nuse AdamW (Loshchilov & Hutter, 2019) with 5; = 0.9 and 2 = 0.95. We use a linear learning\nrate warmup of 20 steps starting from 10% of the maximum learning rate. For 7B and 13B models,\nwe set the learning rate to 2 x 1075 and for 33B and 65B models we set the learning rate to 1072. We\nset the weight decay to zero. For extending 7B, 13B and 33B models to the 8192 context window\nsize, we use 32 A100 GPUs and 64 global batch size. For all other cases we use 128 A100 GPUs and\n128 global batch size. We note that the main need of using more GPUs is memory limitation during\nfine-tuning, and it is possible to use fewer GPUs in certain cases. We train all models using PyTorch\n(Paszke et al., 2019) with Fully Sharded Data Parallel (Zhao et al., 2023) and Flash Attention (Dao\net al., 2022).\n\nIf not specified otherwise, for the Position Interpolation method, we fine-tune the models for 1000\nsteps. For the direct fine-tuning method, we use 10000 steps. We primarily fine-tune using the Pile\ntraining dataset (Gao et al., 2020). In Section 3.4 we also compared fine-tuning performance on the\nRedPajama dataset (Computer, 2023).\n\n3.2 LONG SEQUENCE LANGUAGE MODELING\n\nWe evaluate the long sequence language modeling performance of our extended models and base-\nlines on two datasets: book corpus (PG-19) (Rae et al., 2020) and cleaned Arxiv Math proof-pile\ndataset (Azerbayev et al., 2022).\n\nWe use the test splits of PG19 (Rae et al., 2020) and proof-pile (Azerbayev et al., 2022). For PG19,\nwe use the whole test split consisting of 100 documents. For the proof-pile dataset, we use a random\nsubsample of 128 documents with at least 32768 SentencePiece (Kudo & Richardson, 2018) tokens\nand truncate to the first 32768 tokens for each test document. We evaluate perplexity at various\ncontext window size by using a sliding window approach following Press et al. (2022) with stride\nS = 256.\n\nIn Table 1 and Table 2, we report the perplexity results for our models and baselines on the datasets.\nFrom the results, we found that models extended with our method enjoy a significantly improved\nperplexity from longer context window sizes. By increasing the context window size from 2048 to\n16384, we observed -0.28 and -0.5 reductions of perplexity for extending LLaMA 7B models on\nboth datasets, -0.27 and -0.48 reductions for extending LL.aMA 13B models, and -0.14 and -0.42\nreductions for extending LLaMA 33B models. For LLaMA 65B models, we observed -0.12 and\n-0.3 reductions of perplexity by extending to the 8192 context window size.\n\nIn general, we observed a consistent trend of our models achieving better perplexity with longer\ncontext windows. This indicates our models can effectively make use of the longer context windows\nto better predict next tokens in language modeling tasks. Moreover, we found this trend extends to\n32768 window size without diminishing on the PG19 dataset for LLaMA 7B and 13B models. This\nindicates that our method may enable extension to even longer context windows.\n\nIn contrast, we observed that models extended via the direct fine-tuning method has shown regres-\nsion (up to +0.48) or minor improvement (up to -0.12) on the perplexity at longer context windows.\nThis indicates that models extended this way have limited capability of making use of context win-\ndows longer than their pre-trained settings.\n\nWe saw a minor degradation of the perplexity on the original context window of 2048 for our ex-\ntended models in some cases. For example, on the Proof-pile dataset, we saw a degradation ranging\nfrom 0.01 to 0.05 across all models with extended with Position Interpolation. A small degradation\nof performance within original evaluation context window is expected since Position Interpolation\nforces position encodings in original context window to reside in a much narrower region, which\nmay negatively affect the language model\u2019s performance. We present more benchmark results on\nthe original context window size in Section 3.4.\n\nIn Table 3 we report the relationship between perplexity and the number of fine-tuning steps for\nLLaMA 7B model extending to 8192 and 16384 context window sizes using Position Interpolation\nevaluated on the PG19 dataset. We can see without fine-tuning (at step 0) the model can exhibit\ncertain language modeling capability, as indicated by < 20 perplexity for extending to 8192 context\nwindow (in contrast, the direct extrapolation method leads to > 10% perplexity). With fine-tuning,\nwe observed that the perplexity improves quickly. At 200 steps the models surpassed the original\nmodel\u2019s perplexity on 2048 context window size, indicating the models gaining ability of effectively\nusing sequences longer than the pre-training settings for language modeling. At 1000 steps, we can\nsee the models have improved steadily and achieve a significantly better perplexity.\n\n3.3 MEASURING EFFECTIVE CONTEXT WINDOW SIZE THROUGH PASSKEY RETRIEVAL\n\nWe study the effective context window size, i.e. the maximum distance of a token can effectively\nattend to during inference, of our models after extension. To measure this, we follow a synthetic\nevaluation task of passkey retrieval proposed by Mohtashami & Jaggi (2023). In this task, the models\nare asked to recover a random passkey hidden in a long document. See Figure 3 for the format of\nthe document.\n\nGiven a language model, we estimate the upper and lower bounds of effective context windows as\nfollows. Suppose the random passkey is k tokens away from the end of the input. When a model\npersistently fails to retrieve the correct passkey value across several independent attempts, it suggests\nthat the effective context window size of the model is less than k. Conversely, if a model consistently\nsucceeds in retrieving the correct passkey value, we deduce that the effective context window size\nof the model is at least k.\n\nWe evaluate the 7B and 33B LLaMA model variants that are extended via Position Interpolation or\ndirect fine-tuning. For each model, we use 32 different &\xa3 uniformly spaced in the targeted context\nwindow L\u2019 and run the above tests for 10 times for each k, where each time a random passkey of 5\nrandom digits is used. In Table 4, we report kyax as a function of the number of fine-tuning steps,\n\nWe can see that models extended via Position Interpolation all successfully attain their desired ex-\ntension objectives in terms of effective context window sizes, indicating by the effective context\nwindow size reaching maximum kp, = L/, after merely fine-tuning for 200 steps, consistently\nacross both 7B and 33B model sizes and up to 32768 context windows. In contrast, LLLaMA models\nthat are extended via direct fine-tuning only saw a minimal increase of the effective context win-\ndow size kay from 2048 to 2560, even after fine-tuning for more than 10000 steps, with no clear\nindication of an acceleration in the increase of window size.\n\n3.4 BENCHMARKS ON ORIGINAL CONTEXT WINDOW SIZE\n\nWe evaluate the models extended by Position Interpolation on several standard benchmark tasks\nwithin the original context window size of 2048. The evaluation results are listed in Table 5. From\nthe results, we saw that models extended to 8192 produce comparable results on the original bench-\nmark which is designed for a much smaller context window, with a degradation of up to 2% on\nthe benchmark tasks, for both 7B and 33B model sizes. Models extended to longer context win-\ndows regressed more on the benchmarks, but still in reasonable ranges for most tasks. We also note\nthat the choice of fine-tuning datasets does not seem to lead significant difference in the benchmark\nperformances, which may be due to the limited number of fine-tuning steps used in our method.\nThe regression on benchmark tasks is consistent with our observation on perplexity regression in\nSection 3.2.\n\n3.5 LONG DOCUMENT SUMMARIZATION\n\nIn this task, we evaluate our models\u2019 performance on the long document summarization task. In\nparticular, we consider the GovReport (Huang et al., 2021) dataset, which contains 17457 documents\nfor training and 972 documents for evaluation. Each document comes with a human generated\nsummary. We truncate all input documents to their first 15000 tokens.\n\nWe fine-tune the LL.aMA models extended with Position Interpolation with a context window of\n16384. Note the rescaling of position indices are still required during this fine-tuning step. We first\nModel Size Context Window Fine-tune on  BoolQ PIQA Race-M Race-H WinoGrande\n\nformat the raw document using the prompt template in Figure 4, and then concatenate the prompt\nwith the ground-truth summary (truncate to 1000 tokens) associated with each document. We fine-\ntune the model using the next token prediction task with the above setup for 10 epochs. The losses\nfrom the input prompt proportion of training examples are excluded during our fine-tuning.\n\nWe use a generation temperature of 0.5 and top, = 0.95 as our inference parameter to generate a\nsummarization of each document in the test set. The final output is truncated at 1000 tokens. We\nused the ROUGE-1/ROUGE-2/ROUGE-L scores (Lin, 2004) as the evaluation metrics to evaluate\nthe models\u2019 outputs vs the ground-truth summaries.\n\nIn Table 6 we report our evaluation results. We have also included results from two baselines in\nexisting SCROLLS Leaderboard (Shaham et al., 2022; Ainslie et al., 2023). In general, we have\nobtained competitive R1 score among other models with minimal tuning of hyper-parameters. This\nresult suggests our models with 16384 context window can effectively handle the long document\nsummarization task.\n\n=== END OF FILE ===\n\nQuestion: What is the paper about?\nAnswer: \" | sed ':a;N;$!ba;s/\\n/\uff5fnewline\uff60/g' > test_prompt.txt\n"})}),"\n",(0,o.jsx)(n.h3,{id:"run-inference",children:"Run inference"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"eole predict -c llama-inference.yaml -src test_prompt.txt -output test_output.txt\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);