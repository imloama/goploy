(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50adca5c"],{"24ca":function(t,e,a){"use strict";var r=a("47b7"),o=a.n(r);o.a},"47b7":function(t,e,a){},c621:function(t,e,a){"use strict";a.d(e,"c",function(){return o}),a.d(e,"d",function(){return i}),a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s}),a.d(e,"e",function(){return l}),a.d(e,"f",function(){return c});var r=a("b775");function o(){return Object(r["a"])({url:"/template/getList",method:"get",params:{}})}function i(){return Object(r["a"])({url:"/template/getOption",method:"get"})}function n(t){return Object(r["a"])({url:"/template/add",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/template/edit",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/template/remove",method:"post",data:{id:t}})}function c(t,e){return Object(r["a"])({url:"/template/removePackage",method:"post",data:{templateId:t,filename:e}})}},e8da:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"app-container"},[a("el-row",{staticClass:"app-bar",attrs:{type:"flex",justify:"end"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("添加")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"","highlight-current-row":"",data:t.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"描述"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"operation",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return t.handleEdit(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"模板设置",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"form",attrs:{rules:t.formRules,model:t.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"remark"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.remark,callback:function(e){t.$set(t.formData,"remark",e)},expression:"formData.remark"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"安装包",prop:"package"}},[a("el-upload",{ref:"upload",attrs:{action:t.action,"on-remove":t.handleRemove,"before-remove":t.beforeRemove,multiple:"","file-list":t.formProps.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"脚本",prop:"script"}},[a("codemirror",{attrs:{options:t.cmOptions},model:{value:t.formData.script,callback:function(e){t.$set(t.formData,"script",e)},expression:"formData.script"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{disabled:t.formProps.disabled,type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1)],1)},o=[],i=(a("28a5"),a("7f7f"),a("ac6a"),a("c621")),n=a("ed08"),s=a("8f94"),l=(a("02f0"),a("7ba3"),a("a7be"),a("1fdb"),a("4498"),{components:{codemirror:s["codemirror"]},data:function(){return{dialogVisible:!1,tableData:[],tempFormData:{},cmOptions:{tabSize:4,mode:"text/x-sh",lineNumbers:!0,line:!0,scrollbarStyle:"overlay",theme:"darcula"},formProps:{disabled:!1,fileList:[]},formData:{id:0,name:"",remark:"",package:"",script:""},formRules:{name:[{required:!0,message:"名称",trigger:"blur"}],script:[{required:!0,message:"请输入脚本",trigger:"blur"}]}}},computed:{action:function(){var t="/template/upload";return 0!==this.formData.id&&(t+="?templateId="+this.formData.id),t}},created:function(){this.storeFormData(),this.getList()},methods:{getList:function(){var t=this;Object(i["c"])().then(function(e){var a=e.data.templateList||[];a.forEach(function(t){t.createTime=Object(n["a"])(t.createTime),t.updateTime=Object(n["a"])(t.updateTime)}),t.tableData=a})},handleRemove:function(t,e){console.log(t,e)},beforeRemove:function(t,e){return Object(i["f"])(this.formData.id,t.name).then(function(t){return Promise.resolve(t)}).catch(function(t){return Promise.reject(t)})},handleAdd:function(){this.formProps.fileList=[],this.restoreFormData(),this.dialogVisible=!0},handleEdit:function(t){this.formData=Object.assign({},t),this.formProps.fileList=t.package.split(",").map(function(t){return{name:t}}),this.dialogVisible=!0},handleDelete:function(t){var e=this;this.$confirm("此操作将删除该模板, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i["e"])(t.id).then(function(t){e.$message({message:t.message,type:"success",duration:5e3}),e.getList()})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},submit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.formData.package=t.$refs.upload.uploadFiles.map(function(t){return t.name}).join(","),0===t.formData.id?t.add():t.edit()})},add:function(){var t=this;this.formProps.disabled=!0,Object(i["a"])(this.formData).then(function(e){t.getList(),t.$message({message:e.message,type:"success",duration:5e3})}).finally(function(){t.formProps.disabled=t.dialogVisible=!1})},edit:function(){var t=this;this.formProps.disabled=!0,Object(i["b"])(this.formData).then(function(e){t.getList(),t.$message({message:e.message,type:"success",duration:5e3})}).finally(function(){t.formProps.disabled=t.dialogVisible=!1})},storeFormData:function(){this.tempFormData=JSON.parse(JSON.stringify(this.formData))},restoreFormData:function(){this.formData=JSON.parse(JSON.stringify(this.tempFormData))}}}),c=l,u=(a("24ca"),a("2877")),m=Object(u["a"])(c,r,o,!1,null,null,null);e["default"]=m.exports},ed08:function(t,e,a){"use strict";a.d(e,"a",function(){return o});a("ac6a"),a("c5f6"),a("28a5"),a("a481"),a("6b54");var r=a("7618");function o(t,e){if(0===arguments.length)return null;var a,o=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(t)?a=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),a=new Date(t));var i={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},n=o.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,e){var a=i[e];return"a"===e?["日","一","二","三","四","五","六"][a]:(t.length>0&&a<10&&(a="0"+a),a||0)});return n}}}]);