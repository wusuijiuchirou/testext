webpackJsonp([23],{"6Tfp":function(e,t){},I2LA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("mvHQ"),i=a.n(o),r=a("P9l9"),s=a("7t+N"),n=a.n(s),l={data:function(){return{filters:{name:""},api:[],total:0,page:1,listLoading:!1,sels:[],updateGroupFormVisible:!1,updateGroupForm:{firstGroup:""},updateGroupFormRules:{firstGroup:[{type:"number",required:!0,message:"请选择分组",trigger:"blur"}]},group:[],updateGroupLoading:!1,update:!0,loadSwaggerApi:!1,addLoading:!1,swaggerUrl:""}},methods:{checkMockStatus:function(e){var t=this,a=i()({project_id:Number(this.$route.params.project_id),id:Number(e.id)});n.a.ajax({type:"post",url:r.z+"/api/api/updateMock",async:!0,data:a,headers:{Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(e){t.listLoading=!1,"999999"===e.code?(t.$message.success({message:e.msg,center:!0}),t.getApiList()):t.$message.error({message:e.msg,center:!0})}})},getApiList:function(){this.listLoading=!0;var e=this,t={project_id:this.$route.params.project_id,page:e.page,name:e.filters.name};n.a.ajax({type:"get",url:r.z+"/api/api/api_list",async:!0,data:t,headers:{Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(t){e.listLoading=!1,"999999"===t.code?(e.total=t.data.total,e.api=t.data.data):e.$message.error({message:t.msg,center:!0})}})},updateGroupSubmit:function(){var e=this,t=this.sels.map(function(e){return e.id}),a=this;this.$confirm("确认修改所属分组吗？","提示",{type:"warning"}).then(function(){a.updateGroupLoading=!0;var o=i()({project_id:Number(e.$route.params.project_id),apiGroupLevelFirst_id:Number(a.updateGroupForm.firstGroup),ids:t});n.a.ajax({type:"post",url:r.z+"/api/api/update_group",async:!0,data:o,headers:{"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(e){a.updateGroupLoading=!1,"999999"===e.code?(a.$message({message:"修改成功",center:!0,type:"success"}),a.$router.push({name:"分组接口列表",params:{project_id:a.$route.params.project_id,firstGroup:a.updateGroupForm.firstGroup}})):a.$message.error({message:e.msg,center:!0}),a.updateGroupFormVisible=!1,a.getApiList()}})}).catch(function(){})},getApiGroup:function(){var e=this;n.a.ajax({type:"get",url:r.z+"/api/api/group",async:!0,data:{project_id:this.$route.params.project_id},headers:{Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(t){"999999"===t.code?(e.group=t.data,e.updateGroupForm.firstGroup=e.group[0].id):e.$message.error({message:t.msg,center:!0})}})},changeGroup:function(){this.getApiGroup(),this.updateGroupFormVisible=!0},handleDel:function(e,t){var a=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){a.listLoading=!0;var e=a;n.a.ajax({type:"post",url:r.z+"/api/api/del_api",async:!0,data:i()({project_id:Number(a.$route.params.project_id),ids:[t.id]}),headers:{"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(t){"999999"===t.code?e.$message({message:"删除成功",center:!0,type:"success"}):e.$message.error({message:t.msg,center:!0}),e.getApiList()}})}).catch(function(){})},DownloadApi:function(){n.a.ajax({type:"get",url:r.z+"/api/api/Download",async:!0,data:{project_id:this.$route.params.project_id},headers:{Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(e){"999999"===e.code&&window.open(r.z+"/api/api/download_doc?url="+e.data)}})},handleCurrentChange:function(e){this.page=e,this.getApiList()},selsChange:function(e){e.length>0?(this.sels=e,this.update=!1):this.update=!0},batchRemove:function(){var e=this,t=this.sels.map(function(e){return e.id}),a=this;this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then(function(){a.listLoading=!0,n.a.ajax({type:"post",url:r.z+"/api/api/del_api",async:!0,data:i()({project_id:Number(e.$route.params.project_id),ids:t}),headers:{"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(e){a.listLoading=!1,"999999"===e.code?a.$message({message:"删除成功",center:!0,type:"success"}):a.$message.error({message:e.msg,center:!0}),a.getApiList()}})}).catch(function(){})},addSubmit:function(){var e=this;this.addLoading=!0,console.log(this.swaggerUrl),this.swaggerUrl?n.a.ajax({type:"post",url:r.z+"/api/api/lead_swagger",async:!0,data:i()({project_id:Number(this.$route.params.project_id),url:this.swaggerUrl}),headers:{"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},success:function(t){"999999"===t.code?(e.$message({message:"添加成功",center:!0,type:"success"}),e.listLoading=!0,e.addLoading=!1,e.loadSwaggerApi=!1,e.getApiList()):(e.addLoading=!1,e.$message.error({message:"导入失败，请检查地址是否正确",center:!0})),e.getApiList()}}):this.addLoading=!1}},mounted:function(){this.getApiList()}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-col",{staticStyle:{height:"46px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.filters},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getApiList(t)}},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name","string"==typeof t?t.trim():t)},expression:"filters.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getApiList}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("router-link",{staticStyle:{"text-decoration":"none",color:"aliceblue"},attrs:{to:{name:"新增接口",params:{project_id:this.$route.params.project_id}}}},[a("el-button",{attrs:{type:"primary"}},[e._v("新增")])],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",disabled:e.update},on:{click:e.changeGroup}},[e._v("修改分组")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.DownloadApi(t)}}},[e._v("下载接口文档")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.loadSwaggerApi=!0}}},[e._v("导入接口")]),e._v(" "),a("el-dialog",{attrs:{title:"导入swagger接口",visible:e.loadSwaggerApi,"close-on-click-modal":!1},on:{"update:visible":function(t){e.loadSwaggerApi=t}}},[a("el-input",{staticStyle:{width:"90%"},attrs:{placeholder:"请输入swagger接口地址"},model:{value:e.swaggerUrl,callback:function(t){e.swaggerUrl="string"==typeof t?t.trim():t},expression:"swaggerUrl"}}),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addLoading},on:{click:e.addSubmit}},[e._v("导入")]),e._v(" "),e.swaggerUrl?e._e():a("P",{staticStyle:{color:"red",margin:"0px"}},[e._v("不能为空")])],1)],1)],1)],1),e._v(" "),a("el-dialog",{staticStyle:{width:"60%",left:"20%"},attrs:{title:"修改所属分组",visible:e.updateGroupFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.updateGroupFormVisible=t}}},[a("el-form",{ref:"updateGroupForm",attrs:{model:e.updateGroupForm,"label-width":"80px",rules:e.updateGroupFormRules}},[a("el-form-item",{attrs:{label:"分组名称",prop:"firstGroup"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.updateGroupForm.firstGroup,callback:function(t){e.$set(e.updateGroupForm,"firstGroup",t)},expression:"updateGroupForm.firstGroup"}},e._l(e.group,function(e,t){return a("el-option",{key:t+"",attrs:{label:e.name,value:e.id}})}),1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.updateGroupFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.updateGroupLoading},nativeOn:{click:function(t){return e.updateGroupSubmit(t)}}},[e._v("提交")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.api,"highlight-current-row":""},on:{"selection-change":e.selsChange}},[a("el-table-column",{attrs:{type:"selection","min-width":"5%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"接口名称","min-width":"17%",sortable:"","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-icon",{attrs:{name:"name"}}),e._v(" "),a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"基础信息",params:{api_id:t.row.id}}}},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"requestType",label:"请求方式","min-width":"11%",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"apiAddress",label:"接口地址","min-width":"19%",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"userUpdate",label:"最近更新者","min-width":"13%",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"lastUpdateTime",label:"更新日期","min-width":"15%",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"Mock","min-width":"7%"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.mockStatus?a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){return e.checkMockStatus(t.row)}}},[e._v("关闭")]):e._e(),e._v(" "),t.row.mockStatus?e._e():a("el-button",{attrs:{type:"info",size:"small"},on:{click:function(a){return e.checkMockStatus(t.row)}}},[e._v("启动")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"13%"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),a("router-link",{staticStyle:{"text-decoration":"none",color:"aliceblue"},attrs:{to:{name:"修改",params:{api_id:t.row.id}}}},[a("el-button",{attrs:{type:"info",size:"small"}},[e._v("修改")])],1)]}}])})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-button",{attrs:{type:"danger",disabled:0===this.sels.length},on:{click:e.batchRemove}},[e._v("批量删除")]),e._v(" "),a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,"page-count":e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var u=a("VU/8")(l,p,!1,function(e){a("6Tfp")},"data-v-33d9e765",null);t.default=u.exports}});
//# sourceMappingURL=23.0ca8c30892d104196714.js.map