webpackJsonp([39],{"/Ff6":function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,".modifychange{margin:5px}",""])},"/W/R":function(t,e,s){"use strict";function a(t){s("07wY")}Object.defineProperty(e,"__esModule",{value:!0});var l=s("EMlb"),r=s("QmSG"),o={components:{},data:function(){return{tableData:[],tabletotal:0,currentPage:1,pagesize:r.pagesize,STATUS_TEXT:{1:"已指派",2:"处理中",3:"待审核",4:"已完成"},STATUS_TYPE:{1:"primary",2:"success",3:"warning",4:"info"},listQuery:{limit:r.LIMIT,offset:"",pid:"",status:"",create_user__username:"",action_user__username:"",search:"",ordering:""},TaskCompleteForm:!1,TestCompleteForm:!1,updateform:{id:"",task_complete:"",test_complete:""}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(l.f)(this.listQuery).then(function(e){t.tableData=e.data.results,t.tabletotal=e.data.count})},deleteGroup:function(t){var e=this;Object(l.b)(t).then(function(t){e.$message({message:"恭喜你，删除成功",type:"success"}),e.fetchData()}).catch(function(t){e.$message.error("删除失败"),console.log(t)})},searchClick:function(){this.fetchData()},handleSizeChange:function(t){this.listQuery.limit=t,this.fetchData()},handleCurrentChange:function(t){this.listQuery.offset=(t-1)*r.LIMIT,this.fetchData()},changeStatus:function(t){this.listQuery.status=t,this.fetchData()},showAllTicket:function(){this.listQuery.create_user__username="",this.listQuery.action_user__username="",this.listQuery.pid="",this.listQuery.search="",this.listQuery.status="",this.fetchData()},handleSortChange:function(t){"ascending"===t.order?this.listQuery.ordering=t.prop:"descending"===t.order?this.listQuery.ordering="-"+t.prop:this.listQuery.ordering="",this.fetchData()},updateTaskComplete:function(t){this.TaskCompleteForm=!0,this.updateform.id=t.id,this.updateform.task_complete=t.task_complete,this.updateform.test_complete=t.test_complete},updateTestComplete:function(t){this.TestCompleteForm=!0,this.updateform.id=t.id,this.updateform.task_complete=t.task_complete,this.updateform.test_complete=t.test_complete},changeComplete:function(){var t=this;Object(l.k)(this.updateform.id,this.updateform).then(function(e){t.$message({type:"success",message:"更新成功!"}),t.TaskCompleteForm=t.TestCompleteForm=!1,t.fetchData()})}}},i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[s("el-card",[s("div",{staticClass:"head-lavel"},[s("div",{staticClass:"table-button"},[s("router-link",{attrs:{to:"addproject"}},[s("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[t._v("新建任务")])],1),t._v(" "),s("el-button",{attrs:{type:"danger",plain:"",size:"small"},on:{click:t.showAllTicket}},[t._v("全部")]),t._v(" "),s("el-button-group",{model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l([1,2,3,4],function(e){return s("el-button",{key:e,attrs:{plain:"",size:"mini",type:t.STATUS_TYPE[e]},on:{click:function(s){t.changeStatus(e)}}},[t._v("\n            "+t._s(t.STATUS_TEXT[e])+"\n          ")])}))],1),t._v(" "),s("div",{staticClass:"table-search"},[s("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{placeholder:"编号"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.pid,callback:function(e){t.$set(t.listQuery,"pid",e)},expression:"listQuery.pid"}}),t._v(" "),s("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{placeholder:"标题、内容或类型"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.search,callback:function(e){t.$set(t.listQuery,"search",e)},expression:"listQuery.search"}}),t._v(" "),s("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:t.searchClick}},[t._v("搜索")])],1)]),t._v(" "),s("div",[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"sort-change":t.handleSortChange}},[s("el-table-column",{attrs:{prop:"pid",label:"编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("router-link",{attrs:{to:"viewproject/"+e.row.id}},[s("a",{staticStyle:{color:"#257cff"}},[t._v(t._s(e.row.pid))])])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),s("el-table-column",{attrs:{prop:"type",label:"类型",width:"100"}}),t._v(" "),s("el-table-column",{attrs:{prop:"level",label:"等级",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[s("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],disabled:""},model:{value:e.row.level,callback:function(s){t.$set(e.row,"level",s)},expression:"scope.row.level"}})],1)]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"status",label:"状态",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[s("el-tag",{attrs:{type:t.STATUS_TYPE[e.row.status]}},[t._v("\n                "+t._s(t.STATUS_TEXT[e.row.status])+"\n              ")])],1)]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"task_complete",label:"任务进度"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[t._v("\n              "+t._s(e.row.task_complete)+"%\n              "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"更新进度",placement:"top"}},[s("el-button",{staticClass:"modifychange",attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(s){t.updateTaskComplete(e.row)}}})],1)],1)]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"test_complete",label:"测试进度"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[t._v("\n              "+t._s(e.row.test_complete)+"%\n              "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"更新进度",placement:"top"}},[s("el-button",{staticClass:"modifychange",attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(s){t.updateTestComplete(e.row)}}})],1)],1)]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"create_user",label:"创建人",width:"100"}}),t._v(" "),s("el-table-column",{attrs:{prop:"action_user",label:"指派人",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},t._l(e.row.action_user,function(e){return s("el-tag",{key:e},[t._v("\n                "+t._s(e)+"\n              ")])}))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"create_time",label:"创建时间",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[s("span",[t._v(t._s(t._f("parseDate")(e.row.create_time)))])])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("router-link",{attrs:{to:"editproject/"+e.row.id}},[s("el-button",{attrs:{type:"success",size:"small"}},[t._v("修改")])],1),t._v(" "),s("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(s){t.deleteGroup(e.row.id)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),s("div",{staticClass:"table-footer"},[s("div",{staticClass:"table-button"}),t._v(" "),s("div",{staticClass:"table-pagination"},[s("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pagesize,"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.tabletotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)])]),t._v(" "),s("el-dialog",{attrs:{title:"更新任务进度",visible:t.TaskCompleteForm},on:{"update:visible":function(e){t.TaskCompleteForm=e}}},[s("el-form",{attrs:{"label-width":"90px"}},[s("el-form-item",{attrs:{model:t.updateform,label:"完成百分比"}},[s("el-slider",{staticStyle:{"margin-right":"50px"},attrs:{step:10},model:{value:t.updateform.task_complete,callback:function(e){t.$set(t.updateform,"task_complete",e)},expression:"updateform.task_complete"}}),t._v(" "),s("a",[t._v(t._s(t.updateform.task_complete)+"%")])],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.changeComplete}},[t._v("确定")])],1)],1)],1),t._v(" "),s("el-dialog",{attrs:{title:"更新测试进度",visible:t.TestCompleteForm},on:{"update:visible":function(e){t.TestCompleteForm=e}}},[s("el-form",{attrs:{"label-width":"90px"}},[s("el-form-item",{attrs:{model:t.updateform,label:"完成百分比"}},[s("el-slider",{staticStyle:{"margin-right":"50px"},attrs:{step:10},model:{value:t.updateform.test_complete,callback:function(e){t.$set(t.updateform,"test_complete",e)},expression:"updateform.test_complete"}}),t._v(" "),s("a",[t._v(t._s(t.updateform.test_complete)+"%")])],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.changeComplete}},[t._v("确定")])],1)],1)],1)],1)},n=[],c={render:i,staticRenderFns:n},u=c,p=s("VU/8"),m=a,d=p(o,u,!1,m,null,null);e.default=d.exports},"07wY":function(t,e,s){var a=s("/Ff6");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("09b2e9e9",a,!0)}});