(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5af56a90"],{"1b0a":function(t,e,n){"use strict";n("d3b7");var r=n("1c42"),i=n("3fa5"),a={getTagAll:function(t){return null!=t?new Promise((function(e,n){var i="/admin/tag/all";r["a"].get(i,{headers:{Authorization:t}}).then((function(t){return e(t)}),(function(t){return n(t)}))})):Promise.reject("no token")},deleteTag:function(t,e){return null!=t?new Promise((function(n,a){var o="/admin/tag?id="+e;r["a"].delete(o,{headers:{Authorization:t}}).then((function(){i["a"].success("删除标签成功!"),n()}),(function(t){return a(t)}))})):Promise.reject("no token")},updateTag:function(t,e){return null!=t?new Promise((function(n,a){var o="/admin/tag";r["a"].put(o,e,{headers:{Authorization:t}}).then((function(){i["a"].success("更新标签成功!"),n()}),(function(t){return a(t)}))})):Promise.reject("no token")},addTag:function(t,e){return null!=t?new Promise((function(n,a){var o="/admin/tag";r["a"].post(o,e,{headers:{Authorization:t}}).then((function(){i["a"].success("新增标签成功!"),n()}),(function(t){return a(t)}))})):Promise.reject("no token")},getTagList:function(t,e,n,i,a,o){return null!=t?new Promise((function(l,c){var u="/admin/tag/list?pageNum="+e+"&pageSize="+n+"&searchValue="+i+"&orderProperty="+a+"&orderDirection="+o;r["a"].get(u,{headers:{Authorization:t}}).then((function(t){return l(t)}),(function(t){return c(t)}))})):Promise.reject("no token")},deleteArticleTag:function(t,e,n,a){return null!=t?new Promise((function(e,o){var l="/admin/article/tag?articleId="+n+"&tagId="+a;r["a"].delete(l,{headers:{Authorization:t}}).then((function(){i["a"].success("删除标签成功!"),e()}),(function(t){return o(t)}))})):Promise.reject("no token")}};e["a"]=a},"202b":function(t,e,n){"use strict";n("d3b7"),n("498a");var r=n("1c42"),i=n("3fa5"),a={getCategoryAll:function(t){return null!=t?new Promise((function(e,n){var i="/admin/category/all";r["a"].get(i,{headers:{Authorization:t}}).then((function(t){return e(t)}),(function(t){return n(t)}))})):Promise.reject("no token")},updateCategory:function(t,e){return null!=t?new Promise((function(n,a){var o="/admin/category";r["a"].put(o,e,{headers:{Authorization:t}}).then((function(){i["a"].success("更新分类内容成功!"),n()}),(function(t){return a(t)}))})):Promise.reject("no token")},getCategoryList:function(t,e,n,i,a,o){return null!=t?new Promise((function(l,c){var u="/admin/category/list?pageNum="+e+"&pageSize="+n+"&searchValue="+i.trim()+"&orderProperty="+a+"&orderDirection="+o;r["a"].get(u,{headers:{Authorization:t}}).then((function(t){return l(t)}),(function(t){return c(t)}))})):Promise.reject("no token")},addCategory:function(t,e){if(null!=t){var n="/admin/category";return new Promise((function(a,o){r["a"].post(n,e,{headers:{Authorization:t}}).then((function(){i["a"].success("新增分类成功!"),a()}),(function(t){return o(t)}))}))}return Promise.reject("no token")},deleteCategory:function(t,e){if(null!=t){var n="/admin/category?id="+e;return new Promise((function(e,a){r["a"].delete(n,{headers:{Authorization:t}}).then((function(){i["a"].success("删除分类成功!"),e()}),(function(t){return a(t)}))}))}return Promise.reject("no token")}};e["a"]=a},"20b3":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",[n("h1",[t._v("添加新日志")]),n("el-form",{staticClass:"form",attrs:{"label-position":"top"}},[n("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"标题"}},[n("el-input",{attrs:{type:"text","show-word-limit":"",maxlength:"100"},model:{value:t.article.title,callback:function(e){t.$set(t.article,"title",e)},expression:"article.title"}})],1),n("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"简述"}},[n("el-input",{attrs:{type:"textarea",resize:"none",rows:"6","show-word-limit":"",maxlength:"300"},model:{value:t.article.summary,callback:function(e){t.$set(t.article,"summary",e)},expression:"article.summary"}})],1),n("el-form-item",{staticStyle:{width:"20%"},attrs:{label:"封面"}},[n("el-upload",{staticClass:"uploader",attrs:{action:t.uploadUrl,limit:1,"http-request":t.upload,accept:"image/jpeg,image/png"}},[t.article.pictureUrl?n("img",{staticClass:"cover",attrs:{src:t.article.pictureUrl}}):n("i",{staticClass:"el-icon-plus uploader-icon"})])],1),n("el-row",[n("el-col",{attrs:{lg:4}},[n("el-form-item",{attrs:{label:"分类"}},[n("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.article.categoryId,callback:function(e){t.$set(t.article,"categoryId",e)},expression:"article.categoryId"}},t._l(t.categoryList,(function(t){return n("el-option",{key:t.id,attrs:{value:t.id,label:t.name}})})),1)],1)],1),n("el-col",{attrs:{lg:4}},[n("el-form-item",{attrs:{label:"标签"}},[n("el-select",{attrs:{filterable:"",placeholder:"请选择","allow-create":"",multiple:""},model:{value:t.article.tagList,callback:function(e){t.$set(t.article,"tagList",e)},expression:"article.tagList"}},t._l(t.tagList,(function(t){return n("el-option",{key:t.id,attrs:{value:t.name,label:t.name}})})),1)],1)],1),n("el-col",{attrs:{lg:4}},[n("el-form-item",{attrs:{label:"置顶"}},[n("el-radio-group",{model:{value:t.article.top,callback:function(e){t.$set(t.article,"top",e)},expression:"article.top"}},[n("el-radio",{attrs:{label:!0}},[t._v("是")]),n("el-radio",{attrs:{label:!1}},[t._v("否")])],1)],1)],1),n("el-col",{attrs:{lg:4}},[n("el-form-item",{attrs:{label:"隐藏"}},[n("el-radio-group",{model:{value:t.article.privated,callback:function(e){t.$set(t.article,"privated",e)},expression:"article.privated"}},[n("el-radio",{attrs:{label:!0}},[t._v("是")]),n("el-radio",{attrs:{label:!1}},[t._v("否")])],1)],1)],1)],1),n("el-form-item",{attrs:{label:"内容"}},[n("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:t.article.content,callback:function(e){t.$set(t.article,"content",e)},expression:"article.content"}})],1)],1),n("div",{staticClass:"button-container"},[n("el-button",{staticClass:"el-button--primary",on:{click:t.submit}},[t._v("提 交")]),n("el-button",{on:{click:t.back}},[t._v("返 回")])],1),n("div",{staticClass:"el-backtop animate__animated animate__rollIn",staticStyle:{bottom:"190px",right:"40px"},on:{click:t.submit}},[n("i",{staticClass:"el-icon-check"})]),n("div",{staticClass:"el-backtop animate__animated animate__rollIn",staticStyle:{bottom:"140px",right:"40px"},on:{click:t.back}},[n("i",{staticClass:"el-icon-close"})])],1)},i=[],a=n("3730"),o=n.n(a),l=n("fb3d"),c=n.n(l),u=n("90fb"),s=n("1b0a"),d=n("202b"),f=n("df24"),m=n("6a96"),g=n("30a6"),h={name:"ArticleAdd",data:function(){return{uploadUrl:u["a"]+"/admin/upload/images",editor:c.a,editorConfig:{language:"zh-cn",codeBlock:{languages:this.languages},image:{toolbar:["imageStyle:alignLeft","imageStyle:alignCenter","imageStyle:alignRight","|","resizeImage","|","imageTextAlternative","|","toggleImageCaption"],styles:["full","side","alignLeft","alignCenter","alignRight"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableCellProperties","tableProperties"]},simpleUpload:{headers:{Authorization:"",baseURL:u["a"]},uploadUrl:u["a"]+"/admin/upload/images"},toolbar:{items:["undo","redo","heading","|","bold","italic","underline","strikethrough","subscript","superscript","removeFormat","|","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","imageUpload","blockQuote","insertTable","codeBlock","htmlEmbed","mediaEmbed","sourceEditing","specialCharacters","|","link","bulletedList","numberedList","todoList","|","alignment","outdent","indent","horizontalLine"],shouldNotGroupWhenFull:!0},blockToolbar:["paragraph","heading1","heading2","heading3","|","bulletedList","numberedList","|","blockQuote","uploadImage"]},article:{title:"",summary:"",content:"",traffic:0,categoryId:"",top:!1,privated:!1,pictureUrl:"",tagList:[]},categoryList:[],tagList:[]}},methods:{getTagList:function(){var t=this;s["a"].getTagAll(this.token).then((function(e){return t.tagList=e}),(function(t){return console.error(t)}))},getCategoryList:function(){var t=this;d["a"].getCategoryAll(this.token).then((function(e){return t.categoryList=e}),(function(t){return console.error(t)}))},upload:function(t){var e=this;f["a"].uploadCover(this.token,t).then((function(t){return e.article.pictureUrl=t.url}),(function(t){return console.error(t)}))},submit:function(){var t=this;m["a"].articleChecker(this.article)&&(console.log(this.article),f["a"].addArticle(this.token,this.article).then((function(){return t.back()}),(function(t){return console.log(t)})))},back:function(){this.$router.back()},getToken:function(){var t=this.$cookies.get(g["a"].admin);this.token=t,null!=t?this.editorConfig.simpleUpload.headers.Authorization=t:this.$router.push("/admin/login")}},components:{ckeditor:o.a.component},created:function(){this.getToken(),this.getCategoryList(),this.getTagList()}},p=h,b=(n("6f13"),n("2877")),k=Object(b["a"])(p,r,i,!1,null,"5d6bd9b4",null);e["default"]=k.exports},"6a96":function(t,e,n){"use strict";n("b0c0"),n("d3b7"),n("25f0"),n("498a");var r=n("3fa5"),i={emailChecker:function(t){var e=/^\w{3,}@\w{2,}\.(com|cn|net|com\.cn)$/;return 0!=e.test(t)||(r["a"].error("请输入格式正确的邮件地址!"),!1)},contentChecker:function(t){return t.trim().length>2},articleChecker:function(t){if(0==t.title.trim().length)r["a"].warn("请填写标题");else if(0==t.summary.trim().length)r["a"].warn("请填写内容");else if(""==t.categoryId)r["a"].warn("请选择分类");else if(0==t.pictureUrl.trim().length)r["a"].warn("请上传封面");else if(0==t.content.trim().length)r["a"].warn("请填写内容");else{if(0!=t.tagList.length)return!0;r["a"].warn("请选择标签")}return!1},categoryChecker:function(t){return 0!=t.name.trim().length||(r["a"].warn("请填写有效的分类名"),!1)},tagChecker:function(t){return 0!=t.name.trim().length||(r["a"].warn("请填写有效的标签名"),!1)},friendLinkChecker:function(t){if(0==t.name.trim().length)r["a"].warn("请填写有效的友链名称");else{if(0!=/(https?):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(t.url.trim()))return!0;r["a"].warn("请填写有效的URL路径")}return!1},newsChecker:function(t){return 0!=t.content.toString().trim().length||(r["a"].warn("请填写内容"),!1)}};e["a"]=i},"6f13":function(t,e,n){"use strict";n("c8b5")},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,a=Function.prototype,o=a.toString,l=/^\s*function ([^ (]*)/,c="name";r&&!(c in a)&&i(a,c,{configurable:!0,get:function(){try{return o.call(this).match(l)[1]}catch(t){return""}}})},c8b5:function(t,e,n){},df24:function(t,e,n){"use strict";n("d3b7"),n("ac1f"),n("5319");var r=n("1c42"),i=n("3fa5"),a=n("124d"),o=n("90fb"),l={getArticleList:function(t,e,n,i,a,o){if(null!=t){var l="/admin/article/list?pageNum="+e+"&pageSize="+n+"&searchValue="+i+"&orderProperty="+a+"&orderDirection="+o;return new Promise((function(e,n){r["a"].get(l,{headers:{Authorization:t}}).then((function(t){return e(t)}),(function(t){return n(t)}))}))}return Promise.reject("no token")},deleteArticle:function(t,e){if(null!=t){var n="/admin/article?id="+e;return new Promise((function(a,o){r["a"].delete(n,{headers:{Authorization:t}}).then((function(t){i["a"].success("id为："+e+"的日志已被成功删除！"),a(t)}),(function(t){return o(t)}))}))}return Promise.reject("no token")},addArticle:function(t,e){if(null!=t){var n="/admin/article";return e.pictureUrl=e.pictureUrl.replace(o["a"],""),e.content=a["a"].imageRemoveProxy(e.content),new Promise((function(a,o){r["a"].post(n,e,{headers:{Authorization:t}}).then((function(){i["a"].success("新增日志成功！"),a()}),(function(t){return o(t)}))}))}return Promise.reject("no token")},getArticleDetail:function(t,e){return null!=t?new Promise((function(n,i){var l="/admin/article/detail?id="+e;r["a"].get(l,{headers:{Authorization:t}}).then((function(t){t.pictureUrl=o["a"]+t.pictureUrl,t.content=a["a"].imageAddProxy(t.content),n(t)}),(function(t){return i(t)}))})):Promise.reject("no token")},uploadCover:function(t,e){if(null!=t){var n=e.action,a=new FormData,l=e.file;return a.append("upload",l),new Promise((function(e,l){r["a"].post(n,a,{headers:{Authorization:t,baseURL:o["a"]}}).then((function(t){i["a"].success("上传封面成功！"),e(t)}),(function(t){return l(t)}))}))}return Promise.reject("no token")},updateArticle:function(t,e){if(null!=t){var n="/admin/article";return e.pictureUrl=e.pictureUrl.replace(o["a"],""),e.content=a["a"].imageRemoveProxy(e.content),new Promise((function(a,o){r["a"].put(n,e,{headers:{Authorization:t}}).then((function(){i["a"].success("日志更新成功！"),a()}),(function(t){return o(t)}))}))}return Promise.reject("no token")},autoSave:function(t,e,n){if(null!=t){var o="/admin/article/content?id="+e;return n=a["a"].imageRemoveProxy(n),new Promise((function(e,a){r["a"].put(o,n,{headers:{Authorization:t,"Content-Type":"text/plain"}}).then((function(){i["a"].success("内容已成功保存到服务器！")}),(function(t){return a(t)}))}))}return Promise.reject("no token")}};e["a"]=l}}]);