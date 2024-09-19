"use strict";(self.webpackChunkdocusaurus_tsx=self.webpackChunkdocusaurus_tsx||[]).push([[3018],{3365:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(4848),r=s(8453);const i={sidebar_position:4,description:"Recap of available on-the-fly data transforms."},o="Data Transforms",a={id:"concepts/transforms",title:"Data Transforms",description:"Recap of available on-the-fly data transforms.",source:"@site/docs/concepts/transforms.md",sourceDirName:"concepts",slug:"/concepts/transforms",permalink:"/eole/docs/concepts/transforms",draft:!1,unlisted:!1,editUrl:"https://github.com/eole-nlp/eole/tree/main/docs/docs/concepts/transforms.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Recap of available on-the-fly data transforms."},sidebar:"tutorialSidebar",previous:{title:"Dataset Weighting",permalink:"/eole/docs/concepts/weighting"},next:{title:"Frequently Asked Questions",permalink:"/eole/docs/category/frequently-asked-questions"}},l={},d=[{value:"Transform Types",id:"transform-types",level:3},{value:"General purpose",id:"general-purpose",level:3},{value:"Filter examples by length",id:"filter-examples-by-length",level:4},{value:"Add custom prefix to examples",id:"add-custom-prefix-to-examples",level:4},{value:"Add custom suffix to examples",id:"add-custom-suffix-to-examples",level:4},{value:"Convert examples to uppercase",id:"convert-examples-to-uppercase",level:4},{value:"Normalize punctuation",id:"normalize-punctuation",level:4},{value:"Clean dataset",id:"clean-dataset",level:4},{value:"Context / Doc aware transform",id:"context--doc-aware-transform",level:4},{value:"Augment source segments with fuzzy matches for Neural Fuzzy Repair",id:"augment-source-segments-with-fuzzy-matches-for-neural-fuzzy-repair",level:4},{value:"Augment source and target segments with inline tags",id:"augment-source-and-target-segments-with-inline-tags",level:4},{value:"Make the model learn to use terminology",id:"make-the-model-learn-to-use-terminology",level:4},{value:"Tokenization",id:"tokenization",level:3},{value:"OpenNMT Tokenizer",id:"opennmt-tokenizer",level:4},{value:"SentencePiece",id:"sentencepiece",level:4},{value:"BPE subword-nmt",id:"bpe-subword-nmt",level:4},{value:"BART-style noise",id:"bart-style-noise",level:3},{value:"SwitchOut and sampling",id:"switchout-and-sampling",level:3},{value:"SwitchOut",id:"switchout",level:4},{value:"Drop some tokens",id:"drop-some-tokens",level:4},{value:"Mask some tokens",id:"mask-some-tokens",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"data-transforms",children:"Data Transforms"}),"\n",(0,t.jsx)(n.p,{children:"It's your lucky day! We already embedded several transforms that can be used easily."}),"\n",(0,t.jsxs)(n.p,{children:["Note: all the details about every flag and options for each transform can be found in the ",(0,t.jsx)(n.a,{href:"/eole/docs/reference/Config/transforms",children:"Transforms Config"})," section."]}),"\n",(0,t.jsx)(n.h3,{id:"transform-types",children:"Transform Types"}),"\n",(0,t.jsxs)(n.p,{children:["The concept of ",(0,t.jsx)(n.code,{children:"TransformType"})," was introduced to facilitate transparent configuration management. The underlying issue at stake is that all transforms are not meant to be used in the same concept. For instance, the ",(0,t.jsx)(n.code,{children:"filtertoolong"}),' transform is meant as a "safeguard" to limit the size of training batches. Enabling this transform when predicting can introduce some unwanted behaviours and poor results.\nFor now, the possible transform types are:']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Default"})," // ",(0,t.jsx)(n.code,{children:'"any"'}),": usable in any context (default unless specified otherwise in the transform class definition);"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Train"})," // ",(0,t.jsx)(n.code,{children:'"train"'}),": usable only in training context;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Predict"})," // ",(0,t.jsx)(n.code,{children:'"predict"'}),": usable only in prediction context."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This concept might be extended later for various needs, such as different data types, etc."}),"\n",(0,t.jsx)(n.h3,{id:"general-purpose",children:"General purpose"}),"\n",(0,t.jsx)(n.h4,{id:"filter-examples-by-length",children:"Filter examples by length"}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"filtertoolong"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.misc.FilterTooLongTransform"})]}),"\n",(0,t.jsx)(n.p,{children:"The following options can be added to the configuration :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src_seq_length"}),": maximum source sequence length;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tgt_seq_length"}),": maximum target sequence length."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"add-custom-prefix-to-examples",children:"Add custom prefix to examples"}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"prefix"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.misc.PrefixTransform"})]}),"\n",(0,t.jsxs)(n.p,{children:["For each dataset that the ",(0,t.jsx)(n.code,{children:"prefix"})," transform is applied to, you can set the additional ",(0,t.jsx)(n.code,{children:"src_prefix"})," and ",(0,t.jsx)(n.code,{children:"tgt_prefix"})," parameters in its data configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"data:\n    corpus_1:\n        path_src: toy-ende/src-train1.txt\n        path_tgt: toy-ende/tgt-train1.txt\n        transforms: [prefix]\n        weight: 1\n        src_prefix: __some_src_prefix__\n        tgt_prefix: __some_tgt_prefix__\n"})}),"\n",(0,t.jsx)(n.p,{children:"At inference if you want to use the target prefix feature to prefix your target segment with a unique prefix (as opposed to a target prefix coming from a line-by-line file)\nyou need to set your yaml file as follow (example given with a target language as in the NLLB-200 case):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'tgt_prefix: "spa_Latn" \ntgt_file_prefix: true\n'})}),"\n",(0,t.jsx)(n.h4,{id:"add-custom-suffix-to-examples",children:"Add custom suffix to examples"}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"suffix"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.misc.SuffixTransform"})]}),"\n",(0,t.jsxs)(n.p,{children:["For each dataset that the ",(0,t.jsx)(n.code,{children:"suffix"})," transform is applied to, you can set the additional ",(0,t.jsx)(n.code,{children:"src_suffix"})," and ",(0,t.jsx)(n.code,{children:"tgt_suffix"})," parameters in its data configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"data:\n    corpus_1:\n        path_src: toy-ende/src-train1.txt\n        path_tgt: toy-ende/tgt-train1.txt\n        transforms: [suffix]\n        weight: 1\n        src_suffix: __some_src_suffix__\n        tgt_suffix: __some_tgt_suffix__\n"})}),"\n",(0,t.jsx)(n.h4,{id:"convert-examples-to-uppercase",children:"Convert examples to uppercase"}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"uppercase"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.uppercase.UpperCaseTransform"})]}),"\n",(0,t.jsx)(n.p,{children:"Converts source and target (if present) examples to uppercase so the model can learn better to translate\nsentences in all caps. This transform normalizes the examples so the uppercased strings are stripped from\nany diacritics and accents. Usually this is desirable for most languages, although there are few exceptions."}),"\n",(0,t.jsx)(n.p,{children:"The following option can be added to the main configuration (same ratio for all dataset with this transform):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"upper_corpus_ratio"}),": ratio of the corpus that will be transformed to uppercase (default: 0.01);"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"normalize-punctuation",children:"Normalize punctuation"}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"normalize"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.normalize.NormalizeTransform"})]}),"\n",(0,t.jsx)(n.p,{children:"Normalizes source and target (if present) examples using the same rules as Moses punctuation normalizer."}),"\n",(0,t.jsx)(n.p,{children:"The following options can be added to the configuration of each dataset:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src_lang"}),": en, de, cz/cs, fr (default='')"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tgt_lang"}),": en, de, cz/cs, fr (default='')"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"penn"}),": Penn substitution (default=True)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"norm_quote_commas"}),": Normalize quotations and commas (default=True)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"norm_numbers"}),": Normalize numbers (default=True)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pre_replace_unicode_punct"}),": Replace unicode punct (default=False)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"post_remove_control_chars"}),": Remove control chars (default=False)"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"clean-dataset",children:"Clean dataset"}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"clean"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.clean.CleanTransform"})]}),"\n",(0,t.jsx)(n.p,{children:"Cleans source and target (if present) examples using a set of rules."}),"\n",(0,t.jsx)(n.p,{children:"The following options can be added to the configuration of each dataset:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src_eq_tgt"}),": Remove example when source=target (default=True)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"same_char"}),": Remove example if the same char is repeated 4 times (default=True)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"same_word"}),": Remove example if the same word is repeated 3 times (default=True)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"script_ok"}),": Remove example which contains chars that do not belong to these scripts (default=['Latin', 'Common'])"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"script_nok"}),": Remove example which contains chars that belong to these scripts  (default=[])"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src_tgt_ratio"}),": Remove example for which src/tgt ration is <1/ratio or >ratio (default=2)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"avg_tok_min"}),": Remove example for which the average token length is < X (default=3)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"avg_tok_max"}),": Remove example for which the average token length is > X (default=20)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"lang_id"}),": Remove example for which detected language is not in [] (default=['en', 'fr'])"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"context--doc-aware-transform",children:"Context / Doc aware transform"}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"docify"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.docify.DocifyTransform"})]}),"\n",(0,t.jsx)(n.p,{children:"Concatenates several segments into one, separated with a delimiter."}),"\n",(0,t.jsx)(n.p,{children:"Pre-requisite:"}),"\n",(0,t.jsx)(n.p,{children:'Dataset must be "Docs" separated by an empty line which will make clear a story ends at this empty line.'}),"\n",(0,t.jsx)(n.p,{children:"The following options can be added to the main configuration (same options for all dataset with this transform):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"doc_length"}),": max token to be concatenated (default=200)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"max_context"}),": number of delimiter (default=1 , ie 2 segments concatenated)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'When working with several workers, this require some precaution in order to make sure "doc" are read linearly.'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"max_context + 1"})," needs to be a multiple of ",(0,t.jsx)(n.code,{children:"stride"})," = ",(0,t.jsx)(n.code,{children:"Number of gpu x num_workers"})]}),"\n",(0,t.jsxs)(n.p,{children:["Example: ",(0,t.jsx)(n.code,{children:"max_context=1"})," and 1 GPU, then num_workers must be 2 or 4."]}),"\n",(0,t.jsx)(n.h4,{id:"augment-source-segments-with-fuzzy-matches-for-neural-fuzzy-repair",children:"Augment source segments with fuzzy matches for Neural Fuzzy Repair"}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"fuzzymatch"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.fuzzymatch.FuzzyMatchTransform"})]}),"\n",(0,t.jsxs)(n.p,{children:["Augments source segments with fuzzy matches for Neural Fuzzy Repair, as described in ",(0,t.jsx)(n.a,{href:"https://aclanthology.org/P19-1175",children:"Neural Fuzzy Repair: Integrating Fuzzy Matches into Neural Machine Translation"}),". Currently, the transform augments source segments with only a single fuzzy match.\nThe Translation Memory (TM) format should be a flat text file, with each line containing the source and the target segment separated by a delimiter. As fuzzy matching during training is computational intensive, we offer some advice to achieve good performance and minimize overhead:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Depending on your system's specs, you may have to experiment with the options ",(0,t.jsx)(n.code,{children:"bucket_size"}),", ",(0,t.jsx)(n.code,{children:"bucket_size_init"}),", and ",(0,t.jsx)(n.code,{children:"bucket_size_increment"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:["You should increase the ",(0,t.jsx)(n.code,{children:"num_workers"})," and ",(0,t.jsx)(n.code,{children:"prefetch_factor"})," so your GPU does not have to wait for the batches to be augmented with fuzzy matches;"]}),"\n",(0,t.jsx)(n.li,{children:"Try to use a sensible Translation Memory size. 200k-250k translation units should be enough for yielding a sufficient number of matches;"}),"\n",(0,t.jsxs)(n.li,{children:["Although the transform performs some basic filtering both in the TM and in the corpus for very short or very long segments, some examples may still be long enough, so you should increase a bit the ",(0,t.jsx)(n.code,{children:"src_seq_length"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:["Currently, when using ",(0,t.jsx)(n.code,{children:"n_sample"}),", examples are always processed one by one and not in batches."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following options can be added to the main configuration (valid for all datasets using this transform):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tm_path"}),": The path to the Translation Memory text file;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fuzzy_corpus_ratio"}),": Ratio of corpus to augment with fuzzy matches (default: 0.1);"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fuzzy_threshold"}),": The fuzzy matching threshold (default: 70);"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tm_delimiter"}),': The delimiter used in the flat text TM (default: "\\t");']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fuzzy_token"}),': The fuzzy token to be added with the matches (default: "\uff5ffuzzy\uff60");']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fuzzymatch_min_length"}),": Min length for TM entries and examples to match (default: 4);"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fuzzymatch_max_length"}),": Max length for TM entries and examples to match (default: 70)."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"augment-source-and-target-segments-with-inline-tags",children:"Augment source and target segments with inline tags"}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"inlinetags"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.inlinetags.InlineTagsTransform"})]}),"\n",(0,t.jsx)(n.p,{children:'Augments source and target segments with inline tags (placeholders). The transform adds 2 kind of tags, paired tags (an opening and a closing tag) and isolated (standalone) tags, and requires a tab-delimited dictionary text file with source and target terms and phrases. A dictionary with 20-30k entries is recommended. User-defined tags must include the number placeholder #, e.g. "\uff5fuser_start_tag_#\uff60".'}),"\n",(0,t.jsx)(n.p,{children:"The following options can be added to the main configuration (valid for all datasets using this transform):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tags_dictionary_path"}),": The path to the dictionary text file;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tags_corpus_ratio"}),": Ratio of corpus to augment with inline tags (default: 0.1);"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"max_tags"}),": Maximum number of tags that can be added to a single sentence. (default: 12);"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"paired_stag"}),': The format of an opening paired inline tag. Must include the character # (default: "\uff5fph_#_beg\uff60");']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"paired_etag"}),': The format of a closing paired inline tag. Must include the character # (default: "\uff5fph_#_end\uff60");']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"isolated_tag"}),': The format of an isolated inline tag. Must include the character # (default: "\uff5fph_#_std\uff60");']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src_delimiter"}),': Any special token used for augmented src sentences (default: "\uff5ffuzzy\uff60");']}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"make-the-model-learn-to-use-terminology",children:"Make the model learn to use terminology"}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"terminology"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.terminology.TerminologyTransform"})]}),"\n",(0,t.jsxs)(n.p,{children:["Augments source segments with terms so the model can learn to use user-provided terms at inference. It requires a dictionary with source and target terms, delimited with a tab. The transform uses Spacy's lemmatization facilities in order to a) solve the word inflection problem when searching for terms in any form, and b) make the model inflect correctly most target terms at inference. The lemmatization is applied at the dictionary entries and also at the source and target examples, and the term searches during training are performed on the lemmatized examples.\nThe format of a processed segment augmented with terms is as follows:\n",(0,t.jsx)(n.code,{children:"This is an \uff5fsrc_term_start\uff60 augmented \uff5ftgt_term_start\uff60 target_lemma_for_augmented \uff5ftgt_term_end\uff60 example."}),"\nThe following options can be added to the main configuration (valid for all datasets using this transform):"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"termbase_path"}),": The path to the dictionary text file;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src_spacy_language_model"}),": Name of the spacy language model for the source corpus;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tgt_spacy_language_model"}),": Name of the spacy language model for the target corpus;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"term_corpus_ratio"}),": Ratio of corpus to augment with terms # (default: 0.3);"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"term_example_ratio"}),": Max terms allowed in an example # (default: 0.2);"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src_term_stoken"}),': The source term start token # (default: "\uff5fsrc_term_start\uff60");']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tgt_term_stoken"}),': The target term start token # (default: "\uff5ftgt_term_start\uff60");']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tgt_term_etoken"}),': The target term end token # (default: "\uff5ftgt_term_end\uff60");']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"term_source_delimiter"}),': Any special token used for augmented src sentences. The default is the fuzzy token used in the FuzzyMatch transform # (default: "\uff5ffuzzy\uff60");']}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"tokenization",children:"Tokenization"}),"\n",(0,t.jsx)(n.p,{children:"Common options for the tokenization transforms are the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src_subword_model"}),": path of source side (or both if shared) subword model;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tgt_subword_model"}),": path of target side subword model;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src_subword_nbest"}),": number of candidates for subword regularization (sentencepiece), source side;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tgt_subword_nbest"}),": number of candidates for subword regularization (sentencepiece), target_side;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src_subword_alpha"}),": smoothing parameter for sentencepiece regularization / dropout probability for BPE, source side;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tgt_subword_alpha"}),": smoothing parameter for sentencepiece regularization / dropout probability for BPE, target side."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"opennmt-tokenizer",children:(0,t.jsx)(n.a,{href:"https://github.com/opennmt/Tokenizer",children:"OpenNMT Tokenizer"})}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"onmt_tokenize"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.tokenize.OnmtTokenizerTransform"})]}),"\n",(0,t.jsx)(n.p,{children:"Additional options are available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src_subword_type"}),": type of subword model for source side (from ",(0,t.jsx)(n.code,{children:'["none", "sentencepiece", "bpe"]'}),");"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tgt_subword_type"}),": type of subword model for target side (from ",(0,t.jsx)(n.code,{children:'["none", "sentencepiece", "bpe"]'}),");"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src_onmttok_kwargs"}),": additional kwargs for pyonmttok Tokenizer class, source side;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tgt_onmttok_kwargs"}),": additional kwargs for pyonmttok Tokenizer class, target side."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"sentencepiece",children:(0,t.jsx)(n.a,{href:"https://github.com/google/sentencepiece",children:"SentencePiece"})}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"sentencepiece"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.tokenize.SentencePieceTransform"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"src_subword_model"})," and ",(0,t.jsx)(n.code,{children:"tgt_subword_model"})," should be valid sentencepiece models."]}),"\n",(0,t.jsx)(n.h4,{id:"bpe-subword-nmt",children:(0,t.jsx)(n.a,{href:"https://github.com/rsennrich/subword-nmt",children:"BPE subword-nmt"})}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"bpe"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.tokenize.BPETransform"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"src_subword_model"})," and ",(0,t.jsx)(n.code,{children:"tgt_subword_model"})," should be valid BPE models."]}),"\n",(0,t.jsx)(n.h3,{id:"bart-style-noise",children:"BART-style noise"}),"\n",(0,t.jsxs)(n.p,{children:["BART-style noise is composed of several parts, as described in ",(0,t.jsx)(n.a,{href:"https://arxiv.org/abs/1910.13461",children:"BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"These different types of noise can be controlled with the following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"permute_sent_ratio"}),': proportion of sentences to permute (default boundaries are ".", "?" and "!");']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rotate_ratio"}),": proportion of inputs to permute;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"insert_ratio"}),": proportion of additional random tokens to insert;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"random_ratio"}),": proportion of tokens to replace with random;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mask_ratio"}),": proportion of words/subwords to mask;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mask_length"}),": length of masking window (from ",(0,t.jsx)(n.code,{children:'["subword", "word", "span-poisson"]'}),");"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"poisson_lambda"}),": $\\lambda$ value for Poisson distribution to sample span length (in the case of ",(0,t.jsx)(n.code,{children:"mask_length"})," set to ",(0,t.jsx)(n.code,{children:"span-poisson"}),");"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"replace_length"}),': when masking N tokens, replace with 0, 1, " "or N tokens. (set to -1 for N).']}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"switchout-and-sampling",children:"SwitchOut and sampling"}),"\n",(0,t.jsx)(n.h4,{id:"switchout",children:(0,t.jsx)(n.a,{href:"https://arxiv.org/abs/1808.07512",children:"SwitchOut"})}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"switchout"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.sampling.SwitchOutTransform"})]}),"\n",(0,t.jsx)(n.p,{children:"Options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"switchout_temperature"}),": sampling temperature for SwitchOut."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"drop-some-tokens",children:"Drop some tokens"}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"tokendrop"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.sampling.TokenDropTransform"})]}),"\n",(0,t.jsx)(n.p,{children:"Options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tokendrop_temperature"}),": sampling temperature for token deletion."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"mask-some-tokens",children:"Mask some tokens"}),"\n",(0,t.jsxs)(n.p,{children:["Transform name: ",(0,t.jsx)(n.code,{children:"tokenmask"})]}),"\n",(0,t.jsxs)(n.p,{children:["Class: ",(0,t.jsx)(n.code,{children:"eole.transforms.sampling.TokenMaskTransform"})]}),"\n",(0,t.jsx)(n.p,{children:"Options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tokenmask_temperature"}),": sampling temperature for token masking."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(6540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);