"use strict";(self.webpackChunkdocusaurus_tsx=self.webpackChunkdocusaurus_tsx||[]).push([[9342],{4350:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(4848),t=r(8453);const i={},l="Framework",o={id:"reference/Core API/core",title:"Framework",description:"Model",source:"@site/docs/reference/Core API/0_core.md",sourceDirName:"reference/Core API",slug:"/reference/Core API/core",permalink:"/eole/docs/reference/Core API/core",draft:!1,unlisted:!1,editUrl:"https://github.com/eole-nlp/eole/tree/main/docs/docs/reference/Core API/0_core.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"apiSidebar",previous:{title:"Training",permalink:"/eole/docs/reference/Config/training"},next:{title:"Modules",permalink:"/eole/docs/reference/Core API/modules"}},a={},c=[{value:"Model",id:"model",level:2},{value:"Trainer",id:"trainer",level:2},{value:"<em>class</em> eole.trainer.Trainer(model, train_loss, valid_loss, scoring_preparator, valid_scorers, optim, trunc_size=0, norm_method=&#39;sents&#39;, accum_count=[1], accum_steps=[0], n_gpu=1, gpu_rank=1, parallel_mode=&#39;data_parallel&#39;, report_manager=None, with_align=False, model_saver=None, average_decay=0, average_every=1, earlystopper=None, dropout=[0.3], attention_dropout=[0.1], dropout_steps=[0], zero_out_prompt_loss=False, estim_loss_lambda=[1.0], estim_loss_lambda_steps=[0])[source]",id:"class-eoletrainertrainermodel-train_loss-valid_loss-scoring_preparator-valid_scorers-optim-trunc_size0-norm_methodsents-accum_count1-accum_steps0-n_gpu1-gpu_rank1-parallel_modedata_parallel-report_managernone-with_alignfalse-model_savernone-average_decay0-average_every1-earlystoppernone-dropout03-attention_dropout01-dropout_steps0-zero_out_prompt_lossfalse-estim_loss_lambda10-estim_loss_lambda_steps0source",level:3},{value:"train(train_iter, train_steps, save_checkpoint_steps=5000, valid_iter=None, valid_steps=10000)[source]",id:"traintrain_iter-train_steps-save_checkpoint_steps5000-valid_iternone-valid_steps10000source",level:4},{value:"validate(valid_iter, moving_average=None)[source]",id:"validatevalid_iter-moving_averagenonesource",level:4},{value:"<em>class</em> eole.utils.Statistics(loss=0, auxloss=0, n_batchs=0, n_sents=0, n_words=0, n_correct=0, computed_metrics={})[source]",id:"class-eoleutilsstatisticsloss0-auxloss0-n_batchs0-n_sents0-n_words0-n_correct0-computed_metricssource",level:3},{value:"accuracy()[source]",id:"accuracysource",level:4},{value:"<em>static</em> all_gather_stats(stat, max_size=4096)[source]",id:"static-all_gather_statsstat-max_size4096source",level:4},{value:"<em>static</em> all_gather_stats_list(stat_list, max_size=4096)[source]",id:"static-all_gather_stats_liststat_list-max_size4096source",level:4},{value:"elapsed_time()[source]",id:"elapsed_timesource",level:4},{value:"log_tensorboard(prefix, writer, learning_rate, patience, step)[source]",id:"log_tensorboardprefix-writer-learning_rate-patience-stepsource",level:4},{value:"output(step, num_steps, learning_rate, start)[source]",id:"outputstep-num_steps-learning_rate-startsource",level:4},{value:"ppl()[source]",id:"pplsource",level:4},{value:"update(stat, update_n_src_words=False)[source]",id:"updatestat-update_n_src_wordsfalsesource",level:4},{value:"xent()[source]",id:"xentsource",level:4},{value:"Loss",id:"loss",level:2},{value:"<em>class</em> eole.utils.loss.LossCompute(criterion, generator, lambda_coverage=0.0, lambda_align=0.0, tgt_shift_index=1, vocab=None, lm_generator=None, lm_prior_lambda=None, lm_prior_tau=None, lm_prior_model=None)[source]",id:"class-eoleutilslosslosscomputecriterion-generator-lambda_coverage00-lambda_align00-tgt_shift_index1-vocabnone-lm_generatornone-lm_prior_lambdanone-lm_prior_taunone-lm_prior_modelnonesource",level:3},{value:"forward(batch, output, attns, trunc_start=0, trunc_size=None, estim=None)[source]",id:"forwardbatch-output-attns-trunc_start0-trunc_sizenone-estimnonesource",level:4},{value:"<em>classmethod</em> from_config(config, model, vocab, train=True)[source]",id:"classmethod-from_configconfig-model-vocab-traintruesource",level:4},{value:"ignore_prompt(batch)[source]",id:"ignore_promptbatchsource",level:4},{value:"Optimizer",id:"optimizer",level:2},{value:"<em>class</em> eole.utils.Optimizer(optimizer, learning_rate, learning_rate_decay_fn=None, max_grad_norm=None)[source]",id:"class-eoleutilsoptimizeroptimizer-learning_rate-learning_rate_decay_fnnone-max_grad_normnonesource",level:3},{value:"<em>property</em> amp[source]",id:"property-ampsource",level:4},{value:"backward(loss)[source]",id:"backwardlosssource",level:4},{value:"<em>classmethod</em> from_config(model, config, checkpoint=None)[source]",id:"classmethod-from_configmodel-config-checkpointnonesource",level:4},{value:"learning_rate()[source]",id:"learning_ratesource",level:4},{value:"step()[source]",id:"stepsource",level:4},{value:"<em>property</em> training_step[source]",id:"property-training_stepsource",level:4},{value:"zero_grad(set_to_none=True)[source]",id:"zero_gradset_to_nonetruesource",level:4},{value:"<em>class</em> eole.utils.AdaFactor(params, lr=None, beta1=0.9, beta2=0.999, eps1=1e-30, eps2=0.001, cliping_threshold=1, non_constant_decay=True, enable_factorization=True, ams_grad=True, weight_decay=0)[source]",id:"class-eoleutilsadafactorparams-lrnone-beta109-beta20999-eps11e-30-eps20001-cliping_threshold1-non_constant_decaytrue-enable_factorizationtrue-ams_gradtrue-weight_decay0source",level:3},{value:"step(closure=None)[source]",id:"stepclosurenonesource",level:4},{value:"NOTE",id:"note",level:4},{value:"<em>class</em> eole.utils.FusedAdam(params, lr=0.001, bias_correction=True, betas=(0.9, 0.999), eps=1e-08, eps_inside_sqrt=False, weight_decay=0.0, max_grad_norm=0.0, amsgrad=False)[source]",id:"class-eoleutilsfusedadamparams-lr0001-bias_correctiontrue-betas09-0999-eps1e-08-eps_inside_sqrtfalse-weight_decay00-max_grad_norm00-amsgradfalsesource",level:3},{value:"step(closure=None, grads=None, output_params=None, scale=1.0, grad_norms=None)[source]",id:"stepclosurenone-gradsnone-output_paramsnone-scale10-grad_normsnonesource",level:4}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"framework",children:"Framework"}),"\n",(0,n.jsx)(s.h2,{id:"model",children:"Model"}),"\n",(0,n.jsx)(s.h2,{id:"trainer",children:"Trainer"}),"\n",(0,n.jsxs)(s.h3,{id:"class-eoletrainertrainermodel-train_loss-valid_loss-scoring_preparator-valid_scorers-optim-trunc_size0-norm_methodsents-accum_count1-accum_steps0-n_gpu1-gpu_rank1-parallel_modedata_parallel-report_managernone-with_alignfalse-model_savernone-average_decay0-average_every1-earlystoppernone-dropout03-attention_dropout01-dropout_steps0-zero_out_prompt_lossfalse-estim_loss_lambda10-estim_loss_lambda_steps0source",children:[(0,n.jsx)(s.em,{children:"class"})," eole.trainer.Trainer(model, train_loss, valid_loss, scoring_preparator, valid_scorers, optim, trunc_size=0, norm_method='sents', accum_count=[1], accum_steps=[0], n_gpu=1, gpu_rank=1, parallel_mode='data_parallel', report_manager=None, with_align=False, model_saver=None, average_decay=0, average_every=1, earlystopper=None, dropout=[0.3], attention_dropout=[0.1], dropout_steps=[0], zero_out_prompt_loss=False, estim_loss_lambda=[1.0], estim_loss_lambda_steps=[0])",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/trainer.py#L112-L616",children:"[source]"})]}),"\n",(0,n.jsxs)(s.p,{children:["Bases: ",(0,n.jsx)(s.code,{children:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"Class that controls the training process."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"model"})," (",(0,n.jsx)(s.code,{children:"eole.models.model.BaseModel"}),") \u2013 model to train"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"train_loss"})," (",(0,n.jsx)(s.code,{children:"eole.utils.loss.LossComputeBase"}),") \u2013 training loss computation"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"valid_loss"})," (",(0,n.jsx)(s.code,{children:"eole.utils.loss.LossComputeBase"}),") \u2013 training loss computation"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"scoring_preparator"})," (",(0,n.jsx)(s.code,{children:"eole.predict.utils.ScoringPreparator"}),") \u2013 preparator for the calculation of metrics via the\n_eval_handler method"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"valid_scorers"})," (",(0,n.jsx)(s.em,{children:"dict"}),") \u2013 keeps in memory the current values\nof the validation metrics"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"optim"})," (",(0,n.jsx)(s.a,{href:"#eole.utils.Optimizer",children:(0,n.jsx)(s.code,{children:"eole.utils.optimizers.Optimizer"})}),") \u2013 the optimizer responsible for update"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"trunc_size"})," (",(0,n.jsx)(s.em,{children:"int"}),") \u2013 length of truncated back propagation\nthrough time"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"accum_count"})," (",(0,n.jsx)(s.em,{children:"list"}),") \u2013 accumulate gradients this many times."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"accum_steps"})," (",(0,n.jsx)(s.em,{children:"list"}),") \u2013 steps for accum gradients changes."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"n_gpu"})," (",(0,n.jsx)(s.em,{children:"int"}),") \u2013 number of gpu."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"gpu_rank"})," (",(0,n.jsx)(s.em,{children:"int"}),") \u2013 ordinal rank of the gpu in the list."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"report_manager"})," (",(0,n.jsx)(s.code,{children:"eole.utils.ReportMgrBase"}),") \u2013 the object that creates reports, or None"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"with_align"})," (",(0,n.jsx)(s.em,{children:"bool"}),") \u2013 whether to jointly lear alignment\n(Transformer)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"model_saver"})," (",(0,n.jsx)(s.code,{children:"eole.models.ModelSaverBase"}),") \u2013 the saver is\nused to save a checkpoint.\nThus nothing will be saved if this parameter is None."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"average_decay"})," (",(0,n.jsx)(s.em,{children:"float"}),") \u2013 cf opt.average_decay"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"average_every"})," (",(0,n.jsx)(s.em,{children:"int"}),") \u2013 average model every x steps."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"earlystopper"})," (",(0,n.jsx)(s.code,{children:"eole.utils.EarlyStopping"}),") \u2013 add early\nstopping mecanism"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"dropout"})," (",(0,n.jsx)(s.em,{children:"float"}),") \u2013 dropout value in RNN or FF layers."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"attention_dropout"})," (",(0,n.jsx)(s.em,{children:"float"}),") \u2013 dropaout in attention layers."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"dropout_steps"})," (",(0,n.jsx)(s.em,{children:"list"}),") \u2013 dropout values scheduling in steps."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"zero_out_prompt_loss"})," (",(0,n.jsx)(s.em,{children:"bool"}),") \u2013 whether to zero-out the prompt loss\n(mostly for LLM finetuning)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"estim_loss_lambda"})," (",(0,n.jsx)(s.em,{children:"List"})," *[*",(0,n.jsx)(s.em,{children:"float"})," ",(0,n.jsx)(s.em,{children:"]"}),") \u2013 weight applied to estimator loss"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"estim_loss_lambda_steps"})," (",(0,n.jsx)(s.em,{children:"List"})," *[*",(0,n.jsx)(s.em,{children:"int"})," ",(0,n.jsx)(s.em,{children:"]"}),") \u2013 steps to apply to estimator values"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"traintrain_iter-train_steps-save_checkpoint_steps5000-valid_iternone-valid_steps10000source",children:["train(train_iter, train_steps, save_checkpoint_steps=5000, valid_iter=None, valid_steps=10000)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/trainer.py#L290-L382",children:"[source]"})]}),"\n",(0,n.jsxs)(s.p,{children:["The main training loop by iterating over ",(0,n.jsx)(s.code,{children:"train_iter"})," and possibly\nrunning validation on ",(0,n.jsx)(s.code,{children:"valid_iter"}),"."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"train_iter"})," \u2013 An iterator that returns the next training batch."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"train_steps"})," \u2013 Run training for this many iterations."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"save_checkpoint_steps"})," \u2013 Save a checkpoint every this many\niterations."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"valid_iter"})," \u2013 A generator that returns the next validation batch."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"valid_steps"})," \u2013 Run evaluation every this many iterations."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Returns:"}),"\ntraining loss statistics"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Return type:"}),"\n:obj:",(0,n.jsx)(s.code,{children:"nmt.Statistics"})]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"validatevalid_iter-moving_averagenonesource",children:["validate(valid_iter, moving_average=None)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/trainer.py#L384-L479",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Validate model."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsx)(s.strong,{children:"valid_iter"})," \u2013 validate data iterator"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Returns:"}),"\nvalidation loss statistics"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Return type:"}),"\n:obj:",(0,n.jsx)(s.code,{children:"nmt.Statistics"})]}),"\n"]}),"\n",(0,n.jsxs)(s.h3,{id:"class-eoleutilsstatisticsloss0-auxloss0-n_batchs0-n_sents0-n_words0-n_correct0-computed_metricssource",children:[(0,n.jsx)(s.em,{children:"class"})," eole.utils.Statistics(loss=0, auxloss=0, n_batchs=0, n_sents=0, n_words=0, n_correct=0, computed_metrics={})",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/statistics.py#L9-L176",children:"[source]"})]}),"\n",(0,n.jsxs)(s.p,{children:["Bases: ",(0,n.jsx)(s.code,{children:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"Accumulator for loss statistics.\nCurrently calculates:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"accuracy"}),"\n",(0,n.jsx)(s.li,{children:"perplexity"}),"\n",(0,n.jsx)(s.li,{children:"elapsed time"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"accuracysource",children:["accuracy()",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/statistics.py#L104-L106",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"compute accuracy"}),"\n",(0,n.jsxs)(s.h4,{id:"static-all_gather_statsstat-max_size4096source",children:[(0,n.jsx)(s.em,{children:"static"})," all_gather_stats(stat, max_size=4096)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/statistics.py#L39-L53",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Gather a Statistics object accross multiple process/nodes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"stat"}),"**(** \u2013 obj:Statistics): the statistics object to gather\naccross all processes/nodes"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"max_size"})," (",(0,n.jsx)(s.em,{children:"int"}),") \u2013 max buffer size to use"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Returns:"}),"\nStatistics, the update stats object"]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"static-all_gather_stats_liststat_list-max_size4096source",children:[(0,n.jsx)(s.em,{children:"static"})," all_gather_stats_list(stat_list, max_size=4096)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/statistics.py#L55-L81",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Gather a Statistics list accross all processes/nodes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"stat_list"})," (list([Statistics])) \u2013 list of statistics objects to\ngather accross all processes/nodes"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"max_size"})," (",(0,n.jsx)(s.em,{children:"int"}),") \u2013 max buffer size to use"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Returns:"}),"\nlist of updated stats"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Return type:"}),"\nour_stats(list([Statistics]))"]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"elapsed_timesource",children:["elapsed_time()",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/statistics.py#L119-L121",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"compute elapsed time"}),"\n",(0,n.jsxs)(s.h4,{id:"log_tensorboardprefix-writer-learning_rate-patience-stepsource",children:["log_tensorboard(prefix, writer, learning_rate, patience, step)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/statistics.py#L165-L176",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"display statistics to tensorboard"}),"\n",(0,n.jsxs)(s.h4,{id:"outputstep-num_steps-learning_rate-startsource",children:["output(step, num_steps, learning_rate, start)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/statistics.py#L123-L163",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Write out statistics to stdout."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"step"})," (",(0,n.jsx)(s.em,{children:"int"}),") \u2013 current step"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"n_batch"})," (",(0,n.jsx)(s.em,{children:"int"}),") \u2013 total batches"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"start"})," (",(0,n.jsx)(s.em,{children:"int"}),") \u2013 start time of step."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"pplsource",children:["ppl()",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/statistics.py#L115-L117",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"compute perplexity"}),"\n",(0,n.jsxs)(s.h4,{id:"updatestat-update_n_src_wordsfalsesource",children:["update(stat, update_n_src_words=False)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/statistics.py#L83-L102",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Update statistics by suming values with another Statistics object"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"stat"})," \u2013 another statistic object"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"update_n_src_words"})," (",(0,n.jsx)(s.em,{children:"bool"}),") \u2013 whether to update (sum) n_src_words\nor not"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"xentsource",children:["xent()",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/statistics.py#L108-L110",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"compute cross entropy"}),"\n",(0,n.jsx)(s.h2,{id:"loss",children:"Loss"}),"\n",(0,n.jsxs)(s.h3,{id:"class-eoleutilslosslosscomputecriterion-generator-lambda_coverage00-lambda_align00-tgt_shift_index1-vocabnone-lm_generatornone-lm_prior_lambdanone-lm_prior_taunone-lm_prior_modelnonesource",children:[(0,n.jsx)(s.em,{children:"class"})," eole.utils.loss.LossCompute(criterion, generator, lambda_coverage=0.0, lambda_align=0.0, tgt_shift_index=1, vocab=None, lm_generator=None, lm_prior_lambda=None, lm_prior_tau=None, lm_prior_model=None)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/loss.py#L20-L381",children:"[source]"})]}),"\n",(0,n.jsxs)(s.p,{children:["Bases: ",(0,n.jsx)(s.code,{children:"Module"})]}),"\n",(0,n.jsx)(s.p,{children:"Class for managing efficient loss computation. Handles\naccumulating multiple loss computations."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"criterion"})," (",(0,n.jsx)(s.code,{children:"nn. loss function"}),") \u2013 NLLoss or customed loss"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"generator"})," (",(0,n.jsx)(s.code,{children:"nn.Module"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"lambda_coverage"})," \u2013 Hyper-param to apply coverage attention if any"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"lambda_align"})," \u2013 Hyper-param for alignment loss"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"tgt_shift_index"})," (",(0,n.jsx)(s.em,{children:"int"}),") \u2013 1 for NMT, 0 for LM"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"vocab"})," \u2013 target vocab\nmodule that maps the output of the decoder to a\ndistribution over the target vocabulary."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"lm_generator"})," (",(0,n.jsx)(s.code,{children:"ctranslate2.Generator"}),") \u2013 LM Generator"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"lm_prior_lambda"})," (",(0,n.jsx)(s.em,{children:"float"}),") \u2013 weight of LM model in loss"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"lm_prior_tau"})," (",(0,n.jsx)(s.em,{children:"float"}),") \u2013 scaler for LM loss"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"forwardbatch-output-attns-trunc_start0-trunc_sizenone-estimnonesource",children:["forward(batch, output, attns, trunc_start=0, trunc_size=None, estim=None)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/loss.py#L268-L352",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Compute the forward loss, supports truncated BPTT for long\nsequences by taking a range in the decoder output sequence to\nback propagate in.\nRange is from (trunc_start, trunc_start + trunc_size).\nTruncation is an approximate efficiency trick to relieve the\nmemory required in the RNN buffers."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"batch"})," (",(0,n.jsx)(s.em,{children:"batch"}),") \u2013 batch of labeled examples"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"output"})," (",(0,n.jsx)(s.code,{children:"FloatTensor"}),") \u2013 output of decoder model ",(0,n.jsx)(s.code,{children:"(batch, tgt_len, hidden)"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"attns"})," (",(0,n.jsx)(s.em,{children:"dict"}),") \u2013 dictionary of attention weights\n",(0,n.jsx)(s.code,{children:"(batch, tgt_len, src_len)"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"trunc_start"})," (",(0,n.jsx)(s.em,{children:"int"}),") \u2013 starting position of truncation window"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"trunc_size"})," (",(0,n.jsx)(s.em,{children:"int"}),") \u2013 length of truncation window"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Returns:"}),"\nA tuple with the loss and a ",(0,n.jsx)(s.a,{href:"#eole.utils.Statistics",children:(0,n.jsx)(s.code,{children:"eole.utils.Statistics"})})," instance."]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"classmethod-from_configconfig-model-vocab-traintruesource",children:[(0,n.jsx)(s.em,{children:"classmethod"})," from_config(config, model, vocab, train=True)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/loss.py#L65-L150",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Returns a subclass which wraps around an nn.Module subclass\n(such as nn.NLLLoss) which defines the loss criterion. The LossCompute\nobject passes relevant data to a Statistics object which handles\ntraining/validation logging.\nThe Criterion and LossCompute options are triggered by opt settings."}),"\n",(0,n.jsxs)(s.h4,{id:"ignore_promptbatchsource",children:["ignore_prompt(batch)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/loss.py#L246-L266",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Mask the prompt in the target side of the batch examples in order\n: to set the loss of the prompt to zero."}),"\n",(0,n.jsx)(s.p,{children:"For finetuning on specific tasks.\nThe end of the prompt must be indicated by the DefaultTokens.MASK_BEFORE"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"placeholder."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The masks are supposed to be properly handled by the loss criterion\n: (e.g. nn.CrossEntropyLoss )."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsx)(s.strong,{children:"batch"})," \u2013 The current batch."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"optimizer",children:"Optimizer"}),"\n",(0,n.jsxs)(s.h3,{id:"class-eoleutilsoptimizeroptimizer-learning_rate-learning_rate_decay_fnnone-max_grad_normnonesource",children:[(0,n.jsx)(s.em,{children:"class"})," eole.utils.Optimizer(optimizer, learning_rate, learning_rate_decay_fn=None, max_grad_norm=None)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/optimizers.py#L269-L455",children:"[source]"})]}),"\n",(0,n.jsxs)(s.p,{children:["Bases: ",(0,n.jsx)(s.code,{children:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"Controller class for optimization. Mostly a thin\nwrapper for optim, but also useful for implementing\nrate scheduling beyond what is currently available.\nAlso implements necessary methods for training RNNs such\nas grad manipulations."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"optimizer"})," \u2013 A ",(0,n.jsx)(s.code,{children:"torch.optim.Optimizer"})," instance."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"learning_rate"})," \u2013 The initial learning rate."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"learning_rate_decay_fn"})," \u2013 An optional callable taking the current step\nas argument and return a learning rate scaling factor."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"max_grad_norm"})," \u2013 Clip gradients to this global norm."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"property-ampsource",children:[(0,n.jsx)(s.em,{children:"property"})," amp",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/optimizers.py#L372-L375",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"True if use torch amp mix precision training."}),"\n",(0,n.jsxs)(s.h4,{id:"backwardlosssource",children:["backward(loss)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/optimizers.py#L406-L420",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Wrapper for backward pass. Some optimizer requires ownership of the\nbackward pass."}),"\n",(0,n.jsxs)(s.h4,{id:"classmethod-from_configmodel-config-checkpointnonesource",children:[(0,n.jsx)(s.em,{children:"classmethod"})," from_config(model, config, checkpoint=None)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/optimizers.py#L297-L365",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Builds the optimizer from options."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"cls"})," \u2013 The ",(0,n.jsx)(s.code,{children:"Optimizer"})," class to instantiate."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"model"})," \u2013 The model to optimize."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"opt"})," \u2013 The dict of user options."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"checkpoint"})," \u2013 An optional checkpoint to load states from."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Returns:"}),"\nAn ",(0,n.jsx)(s.code,{children:"Optimizer"})," instance."]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"learning_ratesource",children:["learning_rate()",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/optimizers.py#L377-L382",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Returns the current learning rate."}),"\n",(0,n.jsxs)(s.h4,{id:"stepsource",children:["step()",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/optimizers.py#L422-L455",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Update the model parameters based on current gradients."}),"\n",(0,n.jsx)(s.p,{children:"Optionally, will employ gradient modification or update learning\nrate."}),"\n",(0,n.jsxs)(s.h4,{id:"property-training_stepsource",children:[(0,n.jsx)(s.em,{children:"property"})," training_step",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/optimizers.py#L367-L370",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"The current training step."}),"\n",(0,n.jsxs)(s.h4,{id:"zero_gradset_to_nonetruesource",children:["zero_grad(set_to_none=True)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/optimizers.py#L399-L404",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Zero the gradients of optimized parameters."}),"\n",(0,n.jsxs)(s.h3,{id:"class-eoleutilsadafactorparams-lrnone-beta109-beta20999-eps11e-30-eps20001-cliping_threshold1-non_constant_decaytrue-enable_factorizationtrue-ams_gradtrue-weight_decay0source",children:[(0,n.jsx)(s.em,{children:"class"})," eole.utils.AdaFactor(params, lr=None, beta1=0.9, beta2=0.999, eps1=1e-30, eps2=0.001, cliping_threshold=1, non_constant_decay=True, enable_factorization=True, ams_grad=True, weight_decay=0)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/optimizers.py#L462-L667",children:"[source]"})]}),"\n",(0,n.jsxs)(s.p,{children:["Bases: ",(0,n.jsx)(s.code,{children:"Optimizer"})]}),"\n",(0,n.jsxs)(s.h4,{id:"stepclosurenonesource",children:["step(closure=None)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/optimizers.py#L530-L667",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Performs a single optimization step (parameter update)."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsx)(s.strong,{children:"closure"})," (",(0,n.jsx)(s.em,{children:"Callable"}),") \u2013 A closure that reevaluates the model and\nreturns the loss. Optional for most optimizers."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"note",children:"NOTE"}),"\n",(0,n.jsxs)(s.p,{children:["Unless otherwise specified, this function should not modify the\n",(0,n.jsx)(s.code,{children:".grad"})," field of the parameters."]}),"\n",(0,n.jsxs)(s.h3,{id:"class-eoleutilsfusedadamparams-lr0001-bias_correctiontrue-betas09-0999-eps1e-08-eps_inside_sqrtfalse-weight_decay00-max_grad_norm00-amsgradfalsesource",children:[(0,n.jsx)(s.em,{children:"class"})," eole.utils.FusedAdam(params, lr=0.001, bias_correction=True, betas=(0.9, 0.999), eps=1e-08, eps_inside_sqrt=False, weight_decay=0.0, max_grad_norm=0.0, amsgrad=False)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/optimizers.py#L670-L838",children:"[source]"})]}),"\n",(0,n.jsxs)(s.p,{children:["Bases: ",(0,n.jsx)(s.code,{children:"Optimizer"})]}),"\n",(0,n.jsxs)(s.p,{children:["Implements Adam algorithm. Currently GPU-only.\n: Requires Apex to be installed via\n",(0,n.jsx)(s.code,{children:"python setup.py install --cuda_ext --cpp_ext"}),"."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"params"})," (",(0,n.jsx)(s.em,{children:"iterable"}),") \u2013 iterable of parameters to optimize or dicts defining\nparameter groups."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"lr"})," (",(0,n.jsx)(s.em,{children:"float"})," ",(0,n.jsx)(s.em,{children:","})," ",(0,n.jsx)(s.em,{children:"optional"}),") \u2013 learning rate. (default: 1e-3)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"betas"})," (",(0,n.jsx)(s.em,{children:"Tuple"})," *[*",(0,n.jsx)(s.em,{children:"float"})," ",(0,n.jsx)(s.em,{children:","})," ",(0,n.jsx)(s.em,{children:"float"})," ",(0,n.jsx)(s.em,{children:"]"})," ",(0,n.jsx)(s.em,{children:","})," ",(0,n.jsx)(s.em,{children:"optional"}),") \u2013 coefficients used for computing\nrunning averages of gradient and its square.\n(default: (0.9, 0.999))"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"eps"})," (",(0,n.jsx)(s.em,{children:"float"})," ",(0,n.jsx)(s.em,{children:","})," ",(0,n.jsx)(s.em,{children:"optional"}),") \u2013 term added to the denominator to improve\nnumerical stability. (default: 1e-8)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"weight_decay"})," (",(0,n.jsx)(s.em,{children:"float"})," ",(0,n.jsx)(s.em,{children:","})," ",(0,n.jsx)(s.em,{children:"optional"}),") \u2013 weight decay (L2 penalty) (default: 0)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"amsgrad"})," (",(0,n.jsx)(s.em,{children:"boolean"})," ",(0,n.jsx)(s.em,{children:","})," ",(0,n.jsx)(s.em,{children:"optional"}),") \u2013 whether to use the AMSGrad variant of this\nalgorithm from the paper \u2018On the Convergence of Adam and Beyond\u2019\n(default: False) NOT SUPPORTED in FusedAdam!"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"eps_inside_sqrt"})," (",(0,n.jsx)(s.em,{children:"boolean"})," ",(0,n.jsx)(s.em,{children:","})," ",(0,n.jsx)(s.em,{children:"optional"}),") \u2013 in the \u2018update parameters\u2019 step,\nadds eps to the bias-corrected second moment estimate before\nevaluating square root instead of adding it to the square root of\nsecond moment estimate as in the original paper. (default: False)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"stepclosurenone-gradsnone-output_paramsnone-scale10-grad_normsnonesource",children:["step(closure=None, grads=None, output_params=None, scale=1.0, grad_norms=None)",(0,n.jsx)(s.a,{href:"https://github.com/eole-nlp/eole/blob/master/eole/utils/optimizers.py#L723-L838",children:"[source]"})]}),"\n",(0,n.jsx)(s.p,{children:"Performs a single optimization step."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Parameters:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"closure"})," (",(0,n.jsx)(s.em,{children:"callable"})," ",(0,n.jsx)(s.em,{children:","})," ",(0,n.jsx)(s.em,{children:"optional"}),") \u2013 A closure that reevaluates the model\nand returns the loss."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"grads"})," (",(0,n.jsx)(s.em,{children:"list"})," ",(0,n.jsx)(s.em,{children:"of"})," ",(0,n.jsx)(s.em,{children:"tensors"})," ",(0,n.jsx)(s.em,{children:","})," ",(0,n.jsx)(s.em,{children:"optional"}),") \u2013 weight gradient to use for the\noptimizer update. If gradients have type torch.half, parameters\nare expected to be in type torch.float. (default: None)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"params"})," (",(0,n.jsx)(s.em,{children:"output"}),") \u2013 A reduced precision copy\nof the updated weights written out in addition to the regular\nupdated weights. Have to be of same type as gradients.\n(default: None)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"scale"})," (",(0,n.jsx)(s.em,{children:"float"})," ",(0,n.jsx)(s.em,{children:","})," ",(0,n.jsx)(s.em,{children:"optional"}),") \u2013 factor to divide gradient tensor values\nby before applying to weights. (default: 1)"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>o});var n=r(6540);const t={},i=n.createContext(t);function l(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);