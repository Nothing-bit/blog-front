(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-586f0c06"],{"1e75":function(t,e,a){"use strict";a("6a0c")},"3d42":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",[a("h1",[t._v("标签列表")]),a("el-divider"),a("el-row",{staticClass:"table-button-container",attrs:{gutter:10}},[a("el-col",{attrs:{lg:{span:20}}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.tag.name="",t.addDialogDisplay=!0}}},[t._v("添加")])],1),a("el-col",{attrs:{lg:{span:4}}},[a("el-input",{attrs:{placeholder:"请输入关键字"},on:{change:function(e){return t.getTagList(1)}},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tagListLoading,expression:"tagListLoading"}],attrs:{data:t.tagList,stripe:"",border:""},on:{"sort-change":t.orderTagList}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.infoList,stripe:"",border:""}},[a("el-table-column",{attrs:{width:"800",label:"标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-link",{staticStyle:{padding:"0.1rem"},on:{click:function(a){return t.updateArticle(e.row.articleId)}}},[t._v(t._s(e.row.title))])]}}],null,!0)}),a("el-table-column",{attrs:{width:"100",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(i){return[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.deleteArticleTag(i.row.title,i.row.articleId,e.row.id)}}},[t._v("删除")])]}}],null,!0)})],1)]}}])}),a("el-table-column",{attrs:{label:"id",sortable:"custom",prop:"id",width:"100",align:"center"}}),a("el-table-column",{attrs:{label:"标签名称",sortable:"custom",align:"center",prop:"name"}}),a("el-table-column",{attrs:{label:"引用次数",sortable:"custom",prop:"number",align:"center"}}),a("el-table-column",{attrs:{label:"创建时间",sortable:"custom",prop:"createBy",align:"center"}}),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.updateDialogDisplay=!0,t.tag.id=e.row.id,t.tag.name=e.row.name}}},[t._v("编辑")]),0==e.row.number?a("el-button",{staticClass:"el-button--danger",attrs:{size:"small"},on:{click:function(a){return t.deleteTag(e.row.id)}}},[t._v("删除")]):a("el-button",{staticClass:"el-button--danger",attrs:{size:"small",disabled:""}},[t._v("删除")])]}}])})],1)],1),a("el-pagination",{attrs:{total:t.total,"current-page":t.pageNum,"page-size":t.pageSize},on:{"current-change":t.getTagList}}),a("el-dialog",{attrs:{visible:t.addDialogDisplay,"close-on-click-modal":!1,width:"30%",title:"添加新标签"},on:{"update:visible":function(e){t.addDialogDisplay=e}}},[a("el-form",{staticStyle:{"text-align":"center"},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{maxLength:"25","show-word-limit":"",type:"text"},model:{value:t.tag.name,callback:function(e){t.$set(t.tag,"name",e)},expression:"tag.name"}})],1),a("el-form-item",[a("el-button",{staticClass:"el-button--primary",on:{click:t.addTag}},[t._v("提交")]),a("el-button",{on:{click:function(e){t.addDialogDisplay=!1}}},[t._v("取消")])],1)],1)],1),a("el-dialog",{attrs:{visible:t.updateDialogDisplay,"close-on-click-modal":!1,width:"30%",title:"修改标签信息"},on:{"update:visible":function(e){t.updateDialogDisplay=e}}},[a("el-form",{staticStyle:{"text-align":"center"},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}},[a("el-form-item",{attrs:{label:"id"}},[a("el-input",{attrs:{disabled:""},model:{value:t.tag.id,callback:function(e){t.$set(t.tag,"id",e)},expression:"tag.id"}})],1),a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{maxLength:"25","show-word-limit":"",type:"text"},model:{value:t.tag.name,callback:function(e){t.$set(t.tag,"name",e)},expression:"tag.name"}})],1),a("el-form-item",[a("el-button",{staticClass:"el-button--primary",on:{click:t.updateTag}},[t._v("提交")]),a("el-button",{on:{click:function(e){t.updateDialogDisplay=!1}}},[t._v("取消")])],1)],1)],1)],1)},n=[],l=a("bc3a"),o=a.n(l),r=a("5c96"),s={name:"TagList",data:function(){return{tagList:[],pageNum:1,total:0,pageSize:5,tagListLoading:!1,searchValue:"",orderProperty:"id",orderDirection:"",addDialogDisplay:!1,updateDialogDisplay:!1,tag:{id:0,name:""},headerConfig:{headers:{Authorization:""}}}},methods:{deleteArticleTag:function(t,e,a){var i=this;this.$confirm("此操作将会删除日志"+t+"对该标签的引用,并且无法恢复!","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){var t=i.baseUrl+"/admin/article/tag?articleId="+e+"&tagId="+a;o.a.delete(t,i.headerConfig).then((function(t){var e=t.data;200==e.code?(Object(r["Notification"])({title:"提示",message:"删除标签引用成功!",type:"success"}),i.getTagList(i.pageNum)):Object(r["Notification"])({title:"提示",message:"删除标签引用失败!",type:"error"})}))}))},updateArticle:function(t){this.$router.push({name:"articleUpdate",query:{id:t}})},addTag:function(){var t=this,e=this.baseUrl+"/admin/tag";o.a.post(e,this.tag,this.headerConfig).then((function(e){var a=e.data;200==a.code?(Object(r["Notification"])({title:"提示",message:"添加新标签成功!",type:"success"}),t.addDialogDisplay=!1,t.getTagList(t.pageNum)):Object(r["Notification"])({title:"提示",message:"添加新标签失败!",type:"error"})}))},updateTag:function(){var t=this,e=this.baseUrl+"/admin/tag";o.a.put(e,this.tag,this.headerConfig).then((function(e){var a=e.data;200==a.code?(Object(r["Notification"])({title:"提示",message:"修改标签成功!id:"+t.tag.id,type:"success"}),t.updateDialogDisplay=!1,t.getTagList(t.pageNum)):Object(r["Notification"])({title:"提示",message:"修改标签失败!",type:"error"})}))},deleteTag:function(t){var e=this;this.$confirm("此操作将会删除id:"+t+"的标签,并且无法恢复!","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){var a=e.baseUrl+"/admin/tag?id="+t;o.a.delete(a,e.headerConfig).then((function(a){var i=a.data;200==i.code?(Object(r["Notification"])({title:"提示",message:"删除id:"+t+"标签成功!",type:"success"}),e.getTagList(e.pageNum)):Object(r["Notification"])({title:"提示",message:"删除标签失败!",type:"error"})}))}))},orderTagList:function(t){this.pageNum=1,this.orderProperty=t.prop,this.orderDirection=t.order,this.getTagList(1)},getTagList:function(t){var e=this;this.tagListLoading=!0;var a=this.baseUrl+"/admin/tag/list?pageNum="+t+"&pageSize="+this.pageSize+"&searchValue="+this.searchValue+"&orderProperty="+this.orderProperty+"&orderDirection="+this.orderDirection;o.a.get(a,this.headerConfig).then((function(a){var i=a.data;if(200==i.code){var n=i.data;e.tagList=n.list,e.total=n.total,e.pageNum=t,e.tagListLoading=!1}else Object(r["Notification"])({title:"提示",message:"获取标签列表失败！",type:"error"})}))},getToken:function(){var t=this.$cookies.get("zBlogAdminToken");null!=t?this.headerConfig.headers.Authorization=t:this.$router.push("/admin/login")}},created:function(){this.getToken(),this.getTagList(1),document.title="Blog后台|标签列表"}},c=s,u=(a("1e75"),a("2877")),d=Object(u["a"])(c,i,n,!1,null,null,null);e["default"]=d.exports},"6a0c":function(t,e,a){}}]);