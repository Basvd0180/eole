"use strict";(self.webpackChunkdocusaurus_tsx=self.webpackChunkdocusaurus_tsx||[]).push([[2444],{5377:e=>{e.exports=JSON.parse('{"docusaurus-plugin-content-docs":{"default":{"loadedVersions":[{"versionName":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","path":"/eole/docs","tagsPath":"/eole/docs/tags","editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs","editUrlLocalized":"https://github.com/eole-nlp/eole/tree/main/docs/i18n/en/docusaurus-plugin-content-docs/current","isLast":true,"routePriority":-1,"sidebarFilePath":"/home/runner/work/eole/eole/docs/docusaurus_tsx/sidebars.ts","contentPath":"/home/runner/work/eole/eole/docs/docusaurus_tsx/docs","contentPathLocalized":"/home/runner/work/eole/eole/docs/docusaurus_tsx/i18n/en/docusaurus-plugin-content-docs/current","docs":[{"id":"concepts/command_line","title":"Command Line","description":"Recap of command line utilities and how to call them.","source":"@site/docs/concepts/command_line.md","sourceDirName":"concepts","slug":"/concepts/command_line","permalink":"/eole/docs/concepts/command_line","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/concepts/command_line.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Recap of command line utilities and how to call them."},"sidebar":"tutorialSidebar","previous":{"title":"Configuration","permalink":"/eole/docs/concepts/config"},"next":{"title":"Dataset Weighting","permalink":"/eole/docs/concepts/weighting"}},{"id":"concepts/config","title":"Configuration","description":"Crash course on Eole configuration.","source":"@site/docs/concepts/config.md","sourceDirName":"concepts","slug":"/concepts/config","permalink":"/eole/docs/concepts/config","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/concepts/config.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Crash course on Eole configuration."},"sidebar":"tutorialSidebar","previous":{"title":"Key Concepts","permalink":"/eole/docs/category/key-concepts"},"next":{"title":"Command Line","permalink":"/eole/docs/concepts/command_line"}},{"id":"concepts/transforms","title":"Data Transforms","description":"Recap of available on-the-fly data transforms.","source":"@site/docs/concepts/transforms.md","sourceDirName":"concepts","slug":"/concepts/transforms","permalink":"/eole/docs/concepts/transforms","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/concepts/transforms.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"description":"Recap of available on-the-fly data transforms."},"sidebar":"tutorialSidebar","previous":{"title":"Dataset Weighting","permalink":"/eole/docs/concepts/weighting"},"next":{"title":"Frequently Asked Questions","permalink":"/eole/docs/category/frequently-asked-questions"}},{"id":"concepts/weighting","title":"Dataset Weighting","description":"How to weight datasets to under/oversample on the fly.","source":"@site/docs/concepts/weighting.md","sourceDirName":"concepts","slug":"/concepts/weighting","permalink":"/eole/docs/concepts/weighting","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/concepts/weighting.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"description":"How to weight datasets to under/oversample on the fly."},"sidebar":"tutorialSidebar","previous":{"title":"Command Line","permalink":"/eole/docs/concepts/command_line"},"next":{"title":"Data Transforms","permalink":"/eole/docs/concepts/transforms"}},{"id":"contributing","title":"Contributors","description":"EOLE is a community developed project and we love developer contributions.","source":"@site/docs/contributing.md","sourceDirName":".","slug":"/contributing","permalink":"/eole/docs/contributing","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/contributing.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Translation WMT17 en-de","permalink":"/eole/docs/recipes/wmt17/"}},{"id":"FAQ/custom_transforms","title":"How can I create custom on-the-fly data transforms?","description":"The code is easily extendable with custom transforms inheriting from the Transform base class.","source":"@site/docs/FAQ/custom_transforms.md","sourceDirName":"FAQ","slug":"/FAQ/custom_transforms","permalink":"/eole/docs/FAQ/custom_transforms","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/FAQ/custom_transforms.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Frequently Asked Questions","permalink":"/eole/docs/category/frequently-asked-questions"},"next":{"title":"Do you support multi-gpu?","permalink":"/eole/docs/FAQ/distributed"}},{"id":"FAQ/distributed","title":"Do you support multi-gpu?","description":"First you need to make sure you export CUDAVISIBLEDEVICES=0,1,2,3.","source":"@site/docs/FAQ/distributed.md","sourceDirName":"FAQ","slug":"/FAQ/distributed","permalink":"/eole/docs/FAQ/distributed","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/FAQ/distributed.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"How can I create custom on-the-fly data transforms?","permalink":"/eole/docs/FAQ/custom_transforms"},"next":{"title":"How can I ensemble Models at inference?","permalink":"/eole/docs/FAQ/ensemble_decoding"}},{"id":"FAQ/ensemble_decoding","title":"How can I ensemble Models at inference?","description":"You can specify several models in the onmttranslate command line: -model model1seed1 model2_seed2","source":"@site/docs/FAQ/ensemble_decoding.md","sourceDirName":"FAQ","slug":"/FAQ/ensemble_decoding","permalink":"/eole/docs/FAQ/ensemble_decoding","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/FAQ/ensemble_decoding.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Do you support multi-gpu?","permalink":"/eole/docs/FAQ/distributed"},"next":{"title":"How to use gradient checkpointing when dealing with a big model ?","permalink":"/eole/docs/FAQ/gradient_checkpointing"}},{"id":"FAQ/gradient_checkpointing","title":"How to use gradient checkpointing when dealing with a big model ?","description":"* use_ckpting: [\\"ffn\\", \\"mha\\", \\"lora\\"]","source":"@site/docs/FAQ/gradient_checkpointing.md","sourceDirName":"FAQ","slug":"/FAQ/gradient_checkpointing","permalink":"/eole/docs/FAQ/gradient_checkpointing","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/FAQ/gradient_checkpointing.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"How can I ensemble Models at inference?","permalink":"/eole/docs/FAQ/ensemble_decoding"},"next":{"title":"How to use LoRa and 8bit loading to finetune a big model ?","permalink":"/eole/docs/FAQ/lora"}},{"id":"FAQ/lora","title":"How to use LoRa and 8bit loading to finetune a big model ?","description":"Cf paper: LoRa","source":"@site/docs/FAQ/lora.md","sourceDirName":"FAQ","slug":"/FAQ/lora","permalink":"/eole/docs/FAQ/lora","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/FAQ/lora.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"How to use gradient checkpointing when dealing with a big model ?","permalink":"/eole/docs/FAQ/gradient_checkpointing"},"next":{"title":"Performance tips","permalink":"/eole/docs/FAQ/performance"}},{"id":"FAQ/performance","title":"Performance tips","description":"* use fp16","source":"@site/docs/FAQ/performance.md","sourceDirName":"FAQ","slug":"/FAQ/performance","permalink":"/eole/docs/FAQ/performance","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/FAQ/performance.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"How to use LoRa and 8bit loading to finetune a big model ?","permalink":"/eole/docs/FAQ/lora"},"next":{"title":"Position encoding: Absolute vs Relative vs Rotary Embeddings vs Alibi","permalink":"/eole/docs/FAQ/position_encoding"}},{"id":"FAQ/position_encoding","title":"Position encoding: Absolute vs Relative vs Rotary Embeddings vs Alibi","description":"The basic feature is absolute position encoding stemming from the original Transformer Paper.","source":"@site/docs/FAQ/position_encoding.md","sourceDirName":"FAQ","slug":"/FAQ/position_encoding","permalink":"/eole/docs/FAQ/position_encoding","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/FAQ/position_encoding.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Performance tips","permalink":"/eole/docs/FAQ/performance"},"next":{"title":"How do I use Pretrained embeddings (e.g. GloVe)?","permalink":"/eole/docs/FAQ/pretrained_embeddings"}},{"id":"FAQ/pretrained_embeddings","title":"How do I use Pretrained embeddings (e.g. GloVe)?","description":"This is handled in the initial steps of the onmt_train execution.","source":"@site/docs/FAQ/pretrained_embeddings.md","sourceDirName":"FAQ","slug":"/FAQ/pretrained_embeddings","permalink":"/eole/docs/FAQ/pretrained_embeddings","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/FAQ/pretrained_embeddings.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Position encoding: Absolute vs Relative vs Rotary Embeddings vs Alibi","permalink":"/eole/docs/FAQ/position_encoding"},"next":{"title":"What special tokens are used?","permalink":"/eole/docs/FAQ/special_tokens"}},{"id":"FAQ/special_tokens","title":"What special tokens are used?","description":"In the v2, special tokens were different for SEQ2SEQ and LM:","source":"@site/docs/FAQ/special_tokens.md","sourceDirName":"FAQ","slug":"/FAQ/special_tokens","permalink":"/eole/docs/FAQ/special_tokens","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/FAQ/special_tokens.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"How do I use Pretrained embeddings (e.g. GloVe)?","permalink":"/eole/docs/FAQ/pretrained_embeddings"},"next":{"title":"How can I apply on-the-fly tokenization and subword regularization when training?","permalink":"/eole/docs/FAQ/tokenization"}},{"id":"FAQ/tokenization","title":"How can I apply on-the-fly tokenization and subword regularization when training?","description":"This is naturally embedded in the data configuration format introduced in OpenNMT-py 2.0. Each entry of the data configuration will have its own transforms. transforms basically is a list of functions that will be applied sequentially to the examples when read from file.","source":"@site/docs/FAQ/tokenization.md","sourceDirName":"FAQ","slug":"/FAQ/tokenization","permalink":"/eole/docs/FAQ/tokenization","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/FAQ/tokenization.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"What special tokens are used?","permalink":"/eole/docs/FAQ/special_tokens"},"next":{"title":"How do I train the Transformer model?","permalink":"/eole/docs/FAQ/transformer"}},{"id":"FAQ/transformer","title":"How do I train the Transformer model?","description":"The transformer model is very sensitive to hyperparameters. To run it","source":"@site/docs/FAQ/transformer.md","sourceDirName":"FAQ","slug":"/FAQ/transformer","permalink":"/eole/docs/FAQ/transformer","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/FAQ/transformer.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"How can I apply on-the-fly tokenization and subword regularization when training?","permalink":"/eole/docs/FAQ/tokenization"},"next":{"title":"How can I update a checkpoint\'s vocabulary?","permalink":"/eole/docs/FAQ/update_vocab"}},{"id":"FAQ/update_vocab","title":"How can I update a checkpoint\'s vocabulary?","description":"New vocabulary can be used to continue training from a checkpoint. Existing vocabulary embeddings will be mapped to the new vocabulary, and new vocabulary tokens will be initialized as usual.","source":"@site/docs/FAQ/update_vocab.md","sourceDirName":"FAQ","slug":"/FAQ/update_vocab","permalink":"/eole/docs/FAQ/update_vocab","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/FAQ/update_vocab.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"How do I train the Transformer model?","permalink":"/eole/docs/FAQ/transformer"},"next":{"title":"Can I get word alignments while translating?","permalink":"/eole/docs/FAQ/word_alignments"}},{"id":"FAQ/word_alignments","title":"Can I get word alignments while translating?","description":"Raw alignments from averaging Transformer attention heads","source":"@site/docs/FAQ/word_alignments.md","sourceDirName":"FAQ","slug":"/FAQ/word_alignments","permalink":"/eole/docs/FAQ/word_alignments","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/FAQ/word_alignments.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"How can I update a checkpoint\'s vocabulary?","permalink":"/eole/docs/FAQ/update_vocab"},"next":{"title":"Recipes","permalink":"/eole/docs/category/recipes"}},{"id":"index","title":"EOLE","description":"Documentation","source":"@site/docs/index.md","sourceDirName":".","slug":"/","permalink":"/eole/docs/","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","next":{"title":"Quickstart","permalink":"/eole/docs/quickstart"}},{"id":"main","title":"Overview","description":"This portal provides a detailed documentation of the OpenNMT-py toolkit. It describes how to use the PyTorch project and how it works.","source":"@site/docs/main.md","sourceDirName":".","slug":"/main","permalink":"/eole/docs/main","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/main.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2}},{"id":"quickstart","title":"Quickstart","description":"How to train a model from scratch","source":"@site/docs/quickstart.md","sourceDirName":".","slug":"/quickstart","permalink":"/eole/docs/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/quickstart.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"EOLE","permalink":"/eole/docs/"},"next":{"title":"Key Concepts","permalink":"/eole/docs/category/key-concepts"}},{"id":"recipes/cometkiwi/README","title":"CometKiwi","description":"---","source":"@site/docs/recipes/cometkiwi/README.md","sourceDirName":"recipes/cometkiwi","slug":"/recipes/cometkiwi/","permalink":"/eole/docs/recipes/cometkiwi/","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/recipes/cometkiwi/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Recipes","permalink":"/eole/docs/recipes/"},"next":{"title":"OpenAI GPT2","permalink":"/eole/docs/recipes/gpt2/"}},{"id":"recipes/gpt2/README","title":"OpenAI GPT2","description":"https://huggingface.co/openai-community/gpt2","source":"@site/docs/recipes/gpt2/README.md","sourceDirName":"recipes/gpt2","slug":"/recipes/gpt2/","permalink":"/eole/docs/recipes/gpt2/","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/recipes/gpt2/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"CometKiwi","permalink":"/eole/docs/recipes/cometkiwi/"},"next":{"title":"Llama2","permalink":"/eole/docs/recipes/llama2/"}},{"id":"recipes/llama2/README","title":"Llama2","description":"---","source":"@site/docs/recipes/llama2/README.md","sourceDirName":"recipes/llama2","slug":"/recipes/llama2/","permalink":"/eole/docs/recipes/llama2/","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/recipes/llama2/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"OpenAI GPT2","permalink":"/eole/docs/recipes/gpt2/"},"next":{"title":"Llama3","permalink":"/eole/docs/recipes/llama3/"}},{"id":"recipes/llama3/README","title":"Llama3","description":"---","source":"@site/docs/recipes/llama3/README.md","sourceDirName":"recipes/llama3","slug":"/recipes/llama3/","permalink":"/eole/docs/recipes/llama3/","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/recipes/llama3/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Llama2","permalink":"/eole/docs/recipes/llama2/"},"next":{"title":"Mistral","permalink":"/eole/docs/recipes/mistral/"}},{"id":"recipes/mistral/README","title":"Mistral","description":"---","source":"@site/docs/recipes/mistral/README.md","sourceDirName":"recipes/mistral","slug":"/recipes/mistral/","permalink":"/eole/docs/recipes/mistral/","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/recipes/mistral/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Llama3","permalink":"/eole/docs/recipes/llama3/"},"next":{"title":"Mixtral","permalink":"/eole/docs/recipes/mixtral/"}},{"id":"recipes/mixtral/README","title":"Mixtral","description":"---","source":"@site/docs/recipes/mixtral/README.md","sourceDirName":"recipes/mixtral","slug":"/recipes/mixtral/","permalink":"/eole/docs/recipes/mixtral/","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/recipes/mixtral/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Mistral","permalink":"/eole/docs/recipes/mistral/"},"next":{"title":"Evaluation with MMLU dataset","permalink":"/eole/docs/recipes/mmlu/"}},{"id":"recipes/mmlu/README","title":"Evaluation with MMLU dataset","description":"How to run","source":"@site/docs/recipes/mmlu/README.md","sourceDirName":"recipes/mmlu","slug":"/recipes/mmlu/","permalink":"/eole/docs/recipes/mmlu/","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/recipes/mmlu/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Mixtral","permalink":"/eole/docs/recipes/mixtral/"},"next":{"title":"Language Model Wiki-103","permalink":"/eole/docs/recipes/wiki_103/"}},{"id":"recipes/README","title":"Recipes","description":"Available Recipes","source":"@site/docs/recipes/README.md","sourceDirName":"recipes","slug":"/recipes/","permalink":"/eole/docs/recipes/","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/recipes/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Recipes","permalink":"/eole/docs/category/recipes"},"next":{"title":"CometKiwi","permalink":"/eole/docs/recipes/cometkiwi/"}},{"id":"recipes/wiki_103/README","title":"Language Model Wiki-103","description":"Step 1: Download and clean the data, prepare subword model","source":"@site/docs/recipes/wiki_103/README.md","sourceDirName":"recipes/wiki_103","slug":"/recipes/wiki_103/","permalink":"/eole/docs/recipes/wiki_103/","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/recipes/wiki_103/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Evaluation with MMLU dataset","permalink":"/eole/docs/recipes/mmlu/"},"next":{"title":"Translation WMT17 en-de","permalink":"/eole/docs/recipes/wmt17/"}},{"id":"recipes/wmt17/README","title":"Translation WMT17 en-de","description":"---","source":"@site/docs/recipes/wmt17/README.md","sourceDirName":"recipes/wmt17","slug":"/recipes/wmt17/","permalink":"/eole/docs/recipes/wmt17/","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/recipes/wmt17/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Language Model Wiki-103","permalink":"/eole/docs/recipes/wiki_103/"},"next":{"title":"Contributors","permalink":"/eole/docs/contributing"}},{"id":"reference/bibliography","title":"Bibliography","description":"Bahdanau, Dzmitry, Kyunghyun Cho, and Yoshua Bengio. 2014.","source":"@site/docs/reference/bibliography.md","sourceDirName":"reference","slug":"/reference/bibliography","permalink":"/eole/docs/reference/bibliography","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/reference/bibliography.md","tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Prediction","permalink":"/eole/docs/reference/Core API/inference"}},{"id":"reference/Config/config","title":"Configuration","description":"TODO: add some example yaml configs here","source":"@site/docs/reference/Config/config.md","sourceDirName":"reference/Config","slug":"/reference/Config/","permalink":"/eole/docs/reference/Config/","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/reference/Config/config.md","tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Eole Core API","permalink":"/eole/docs/reference/index"},"next":{"title":"Data","permalink":"/eole/docs/reference/Config/data"}},{"id":"reference/Config/data","title":"Data","description":"pydantic model eole.config.data.BaseVocabConfig[source]","source":"@site/docs/reference/Config/data.md","sourceDirName":"reference/Config","slug":"/reference/Config/data","permalink":"/eole/docs/reference/Config/data","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/reference/Config/data.md","tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Configuration","permalink":"/eole/docs/reference/Config/"},"next":{"title":"Inference","permalink":"/eole/docs/reference/Config/inference"}},{"id":"reference/Config/inference","title":"Inference","description":"pydantic model eole.config.inference.DecodingConfig[source]","source":"@site/docs/reference/Config/inference.md","sourceDirName":"reference/Config","slug":"/reference/Config/inference","permalink":"/eole/docs/reference/Config/inference","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/reference/Config/inference.md","tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Data","permalink":"/eole/docs/reference/Config/data"},"next":{"title":"Models","permalink":"/eole/docs/reference/Config/models"}},{"id":"reference/Config/models","title":"Models","description":"Base Configs","source":"@site/docs/reference/Config/models.md","sourceDirName":"reference/Config","slug":"/reference/Config/models","permalink":"/eole/docs/reference/Config/models","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/reference/Config/models.md","tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Inference","permalink":"/eole/docs/reference/Config/inference"},"next":{"title":"Main Entrypoints","permalink":"/eole/docs/reference/Config/run"}},{"id":"reference/Config/run","title":"Main Entrypoints","description":"Common Base Config","source":"@site/docs/reference/Config/run.md","sourceDirName":"reference/Config","slug":"/reference/Config/run","permalink":"/eole/docs/reference/Config/run","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/reference/Config/run.md","tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Models","permalink":"/eole/docs/reference/Config/models"},"next":{"title":"Training","permalink":"/eole/docs/reference/Config/training"}},{"id":"reference/Config/training","title":"Training","description":"pydantic model eole.config.training.OptimizerConfig[source]","source":"@site/docs/reference/Config/training.md","sourceDirName":"reference/Config","slug":"/reference/Config/training","permalink":"/eole/docs/reference/Config/training","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/reference/Config/training.md","tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Main Entrypoints","permalink":"/eole/docs/reference/Config/run"},"next":{"title":"Framework","permalink":"/eole/docs/reference/Core API/core"}},{"id":"reference/Core API/core","title":"Framework","description":"Model","source":"@site/docs/reference/Core API/0_core.md","sourceDirName":"reference/Core API","slug":"/reference/Core API/core","permalink":"/eole/docs/reference/Core API/core","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/reference/Core API/0_core.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Training","permalink":"/eole/docs/reference/Config/training"},"next":{"title":"Modules","permalink":"/eole/docs/reference/Core API/modules"}},{"id":"reference/Core API/dataloaders","title":"Data Loaders","description":"Data Iterator","source":"@site/docs/reference/Core API/1_dataloaders.md","sourceDirName":"reference/Core API","slug":"/reference/Core API/dataloaders","permalink":"/eole/docs/reference/Core API/dataloaders","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/reference/Core API/1_dataloaders.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Modules","permalink":"/eole/docs/reference/Core API/modules"},"next":{"title":"Prediction","permalink":"/eole/docs/reference/Core API/inference"}},{"id":"reference/Core API/inference","title":"Prediction","description":"Predictions","source":"@site/docs/reference/Core API/2_inference.md","sourceDirName":"reference/Core API","slug":"/reference/Core API/inference","permalink":"/eole/docs/reference/Core API/inference","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/reference/Core API/2_inference.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Data Loaders","permalink":"/eole/docs/reference/Core API/dataloaders"},"next":{"title":"Bibliography","permalink":"/eole/docs/reference/bibliography"}},{"id":"reference/Core API/modules","title":"Modules","description":"Embeddings","source":"@site/docs/reference/Core API/0_modules.md","sourceDirName":"reference/Core API","slug":"/reference/Core API/modules","permalink":"/eole/docs/reference/Core API/modules","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/reference/Core API/0_modules.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Framework","permalink":"/eole/docs/reference/Core API/core"},"next":{"title":"Data Loaders","permalink":"/eole/docs/reference/Core API/dataloaders"}},{"id":"reference/index","title":"Eole Core API","description":"Note : These sections are built via sphinx and converted into Markdown. Some layout or links might be shaky.","source":"@site/docs/reference/00_index.md","sourceDirName":"reference","slug":"/reference/index","permalink":"/eole/docs/reference/index","draft":false,"unlisted":false,"editUrl":"https://github.com/eole-nlp/eole/tree/main/docs/docs/reference/00_index.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{},"sidebar":"apiSidebar","next":{"title":"Configuration","permalink":"/eole/docs/reference/Config/"}}],"drafts":[],"sidebars":{"apiSidebar":[{"type":"doc","id":"reference/index"},{"type":"category","label":"Configuration","collapsible":true,"collapsed":true,"items":[{"type":"doc","id":"reference/Config/data"},{"type":"doc","id":"reference/Config/inference"},{"type":"doc","id":"reference/Config/models"},{"type":"doc","id":"reference/Config/run"},{"type":"doc","id":"reference/Config/training"}],"link":{"type":"doc","id":"reference/Config/config"}},{"type":"category","label":"Core API","collapsible":true,"collapsed":true,"items":[{"type":"doc","id":"reference/Core API/core"},{"type":"doc","id":"reference/Core API/modules"},{"type":"doc","id":"reference/Core API/dataloaders"},{"type":"doc","id":"reference/Core API/inference"}]},{"type":"doc","id":"reference/bibliography"}],"tutorialSidebar":[{"type":"doc","id":"index"},{"type":"doc","id":"quickstart"},{"type":"category","label":"Key Concepts","link":{"type":"generated-index","description":"\\"Some key concepts useful to understand.\\"","slug":"/category/key-concepts","permalink":"/eole/docs/category/key-concepts"},"items":[{"type":"doc","id":"concepts/config"},{"type":"doc","id":"concepts/command_line"},{"type":"doc","id":"concepts/weighting"},{"type":"doc","id":"concepts/transforms"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Frequently Asked Questions","link":{"type":"generated-index","description":"\\"Search these questions before raising issues or ask the community.\\"","slug":"/category/frequently-asked-questions","permalink":"/eole/docs/category/frequently-asked-questions"},"items":[{"type":"doc","id":"FAQ/custom_transforms"},{"type":"doc","id":"FAQ/distributed"},{"type":"doc","id":"FAQ/ensemble_decoding"},{"type":"doc","id":"FAQ/gradient_checkpointing"},{"type":"doc","id":"FAQ/lora"},{"type":"doc","id":"FAQ/performance"},{"type":"doc","id":"FAQ/position_encoding"},{"type":"doc","id":"FAQ/pretrained_embeddings"},{"type":"doc","id":"FAQ/special_tokens"},{"type":"doc","id":"FAQ/tokenization"},{"type":"doc","id":"FAQ/transformer"},{"type":"doc","id":"FAQ/update_vocab"},{"type":"doc","id":"FAQ/word_alignments"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Recipes","link":{"type":"generated-index","description":"Various recipes to help you get started.","slug":"/category/recipes","permalink":"/eole/docs/category/recipes"},"items":[{"type":"doc","id":"recipes/README"},{"type":"doc","label":"CometKiwi","id":"recipes/cometkiwi/README"},{"type":"doc","label":"OpenAI GPT2","id":"recipes/gpt2/README"},{"type":"doc","label":"Llama2","id":"recipes/llama2/README"},{"type":"doc","label":"Llama3","id":"recipes/llama3/README"},{"type":"doc","label":"Mistral","id":"recipes/mistral/README"},{"type":"doc","label":"Mixtral","id":"recipes/mixtral/README"},{"type":"doc","label":"Evaluation with MMLU dataset","id":"recipes/mmlu/README"},{"type":"doc","label":"Language Model Wiki-103","id":"recipes/wiki_103/README"},{"type":"doc","label":"Translation WMT17 en-de","id":"recipes/wmt17/README"}],"collapsed":true,"collapsible":true},{"type":"doc","id":"contributing"}]}}]}},"docusaurus-plugin-content-blog":{"default":{"blogSidebarTitle":"Recent posts","blogPosts":[],"blogListPaginated":[],"blogTags":{},"blogTagsListPath":"/eole/blog/tags"}},"docusaurus-plugin-content-pages":{"default":[{"type":"jsx","permalink":"/eole/","source":"@site/src/pages/index.tsx"},{"type":"mdx","permalink":"/eole/markdown-page","source":"@site/src/pages/markdown-page.md","title":"Markdown page example","description":"You don\'t need React to write simple standalone pages.","frontMatter":{"title":"Markdown page example"},"unlisted":false}]},"docusaurus-plugin-sitemap":{},"docusaurus-theme-classic":{},"docusaurus-plugin-debug":{},"docusaurus-lunr-search":{},"webpack-configuration-plugin":{},"docusaurus-bootstrap-plugin":{},"docusaurus-mdx-fallback-plugin":{}}')}}]);