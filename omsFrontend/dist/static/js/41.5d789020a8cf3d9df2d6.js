webpackJsonp([41],{"LK+4":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l={data:function(){return{ruleForm:{name:"",user:"",tel:"",desc:""},rules:{name:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}],user:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}],tel:[{required:!0,message:"请输入一个正确的内容",trigger:"change"}]}}},created:function(){},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;r.$emit("formdata",r.ruleForm),r.ruleForm={hostname:"",ip:"",other_ip:"",idc:"",asset_type:"",status:"",os:"",cpu:"",memory:"",disk:"",desc:""}})},resetForm:function(e){this.$refs[e].resetFields()}}},o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系人",prop:"user"}},[t("el-input",{model:{value:e.ruleForm.user,callback:function(r){e.$set(e.ruleForm,"user",r)},expression:"ruleForm.user"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系人电话",prop:"tel"}},[t("el-input",{model:{value:e.ruleForm.tel,callback:function(r){e.$set(e.ruleForm,"tel",r)},expression:"ruleForm.tel"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"备注",prop:"desc"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)},s=[],u={render:o,staticRenderFns:s},m=u,n=t("VU/8"),a=n(l,m,!1,null,null,null);r.default=a.exports}});