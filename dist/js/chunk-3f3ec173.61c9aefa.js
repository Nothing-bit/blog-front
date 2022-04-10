(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f3ec173"],{"20b3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",[a("h1",[t._v("添加新日志")]),a("el-form",{staticClass:"form",attrs:{"label-position":"top"}},[a("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"标题"}},[a("el-input",{attrs:{type:"text","show-word-limit":"",maxlength:"100"},model:{value:t.article.title,callback:function(e){t.$set(t.article,"title",e)},expression:"article.title"}})],1),a("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"简述"}},[a("el-input",{attrs:{type:"textarea",resize:"none",rows:"6","show-word-limit":"",maxlength:"300"},model:{value:t.article.summary,callback:function(e){t.$set(t.article,"summary",e)},expression:"article.summary"}})],1),a("el-form-item",{staticStyle:{width:"20%"},attrs:{label:"封面"}},[a("el-upload",{staticClass:"uploader",attrs:{action:t.uploadUrl,limit:1,"http-request":t.upload,accept:"image/jpeg,image/png"}},[t.article.pictureUrl?a("img",{staticClass:"cover",attrs:{src:t.article.pictureUrl}}):a("i",{staticClass:"el-icon-plus uploader-icon"})])],1),a("el-row",[a("el-col",{attrs:{lg:4}},[a("el-form-item",{attrs:{label:"分类"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.article.categoryId,callback:function(e){t.$set(t.article,"categoryId",e)},expression:"article.categoryId"}},t._l(t.categoryList,(function(t){return a("el-option",{key:t.id,attrs:{value:t.id,label:t.name}})})),1)],1)],1),a("el-col",{attrs:{lg:4}},[a("el-form-item",{attrs:{label:"标签"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择","allow-create":"",multiple:""},model:{value:t.article.tagList,callback:function(e){t.$set(t.article,"tagList",e)},expression:"article.tagList"}},t._l(t.tagList,(function(t){return a("el-option",{key:t.id,attrs:{value:t.name,label:t.name}})})),1)],1)],1),a("el-col",{attrs:{lg:4}},[a("el-form-item",{attrs:{label:"置顶"}},[a("el-radio-group",{model:{value:t.article.top,callback:function(e){t.$set(t.article,"top",e)},expression:"article.top"}},[a("el-radio",{attrs:{label:!0}},[t._v("是")]),a("el-radio",{attrs:{label:!1}},[t._v("否")])],1)],1)],1),a("el-col",{attrs:{lg:4}},[a("el-form-item",{attrs:{label:"隐藏"}},[a("el-radio-group",{model:{value:t.article.privated,callback:function(e){t.$set(t.article,"privated",e)},expression:"article.privated"}},[a("el-radio",{attrs:{label:!0}},[t._v("是")]),a("el-radio",{attrs:{label:!1}},[t._v("否")])],1)],1)],1)],1),a("el-form-item",{attrs:{label:"内容"}},[a("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:t.article.content,callback:function(e){t.$set(t.article,"content",e)},expression:"article.content"}})],1)],1),a("div",{staticClass:"button-container"},[a("el-button",{staticClass:"el-button--primary",on:{click:t.submit}},[t._v("提 交")]),a("el-button",{on:{click:t.back}},[t._v("返 回")])],1),a("div",{staticClass:"el-backtop animate__animated animate__rollIn",staticStyle:{bottom:"190px",right:"40px"},on:{click:t.submit}},[a("i",{staticClass:"el-icon-check"})]),a("div",{staticClass:"el-backtop animate__animated animate__rollIn",staticStyle:{bottom:"140px",right:"40px"},on:{click:t.back}},[a("i",{staticClass:"el-icon-close"})])],1)},l=[],o=a("3730"),r=a.n(o),s=a("fb3d"),n=a.n(s),c=a("bc3a"),d=a.n(c),g=a("5c96"),u={name:"ArticleAdd",data:function(){return{uploadUrl:this.baseUrl+"/admin/upload/images",editor:n.a,editorConfig:{language:"zh-cn",codeBlock:{languages:this.languages},image:{toolbar:["imageStyle:alignLeft","imageStyle:alignCenter","imageStyle:alignRight","|","resizeImage","|","imageTextAlternative","|","toggleImageCaption"],styles:["full","side","alignLeft","alignCenter","alignRight"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableCellProperties","tableProperties"]},simpleUpload:{headers:{Authorization:""},uploadUrl:this.baseUrl+"/admin/upload/images"},toolbar:{items:["undo","redo","heading","|","bold","italic","underline","strikethrough","subscript","superscript","removeFormat","|","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","imageUpload","blockQuote","insertTable","codeBlock","htmlEmbed","mediaEmbed","sourceEditing","specialCharacters","|","link","bulletedList","numberedList","todoList","|","alignment","outdent","indent","horizontalLine"],shouldNotGroupWhenFull:!0},blockToolbar:["paragraph","heading1","heading2","heading3","|","bulletedList","numberedList","|","blockQuote","uploadImage"]},article:{title:"",summary:"",content:"",traffic:0,categoryId:"",top:!1,privated:!1,pictureUrl:"",tagList:[]},categoryList:[],tagList:[],headerConfig:{headers:{Authorization:""}}}},methods:{getTagList:function(){var t=this,e=this.baseUrl+"/admin/tag/all";d.a.get(e,this.headerConfig).then((function(e){var a=e.data;if(200==a.code){var i=a.data;t.tagList=i}else Object(g["Notification"])({title:"提示",message:"获取标签列表失败！",type:"error"})}))},getCategoryList:function(){var t=this,e=this.baseUrl+"/admin/category/all";d.a.get(e,this.headerConfig).then((function(e){var a=e.data;if(200==a.code){var i=a.data;t.categoryList=i}else Object(g["Notification"])({title:"提示",message:"获取分类列表失败！",type:"error"})}))},upload:function(t){var e=this,a=t.action,i=new FormData,l=t.file;i.append("upload",l),console.log(i),d.a.post(a,i,this.headerConfig).then((function(t){var a=t.data;if(200==a.code){var i=a.url;e.article.pictureUrl=i,Object(g["Notification"])({title:"提示",message:"上传封面成功！",type:"success"})}else Object(g["Notification"])({title:"提示",message:"上传封面出错!",type:"error"})}))},submit:function(){var t=this;if(""==this.article.title)Object(g["Notification"])({title:"提示",message:"请填写标题",type:"warning"});else if(""==this.article.summary)Object(g["Notification"])({title:"提示",message:"请填写简述",type:"warning"});else if(""==this.article.categoryId)Object(g["Notification"])({title:"提示",message:"请选择分类",type:"warning"});else if(""==this.article.pictureUrl)Object(g["Notification"])({title:"提示",message:"请上传封面",type:"warning"});else if(""==this.article.content)Object(g["Notification"])({title:"提示",message:"请填写内容",type:"warning"});else if(""==this.article.tagList)Object(g["Notification"])({title:"提示",message:"请选择标签",type:"warning"});else{var e=this.baseUrl+"/admin/article";d.a.post(e,this.article,this.headerConfig).then((function(e){var a=e.data;200==a.code?(Object(g["Notification"])({title:"提示",message:"日志已成功提交！",type:"success"}),t.back()):Object(g["Notification"])({title:"提示",message:"日志提交失败！",type:"error"})}))}},back:function(){this.$router.back()},getToken:function(){var t=this.$cookies.get("zBlogAdminToken");null!=t?(this.headerConfig.headers.Authorization=t,this.editorConfig.simpleUpload.headers.Authorization=t):this.$router.push("/admin/login")}},components:{ckeditor:r.a.component},created:function(){this.getToken(),this.getCategoryList(),this.getTagList()}},m=u,p=(a("f23a"),a("2877")),b=Object(p["a"])(m,i,l,!1,null,"15b61491",null);e["default"]=b.exports},"2f87":function(t,e,a){},f23a:function(t,e,a){"use strict";a("2f87")}}]);