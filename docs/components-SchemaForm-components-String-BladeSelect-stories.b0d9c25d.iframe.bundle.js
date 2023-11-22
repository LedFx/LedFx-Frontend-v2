"use strict";(self.webpackChunkledfx=self.webpackChunkledfx||[]).push([[281],{"./src/components/SchemaForm/components/String/BladeSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{String:()=>String,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _String$parameters,_String$parameters2,_String$parameters2$d,_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),_BladeSelect__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/SchemaForm/components/String/BladeSelect.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI Components/SchemaForm/Components",component:_BladeSelect__WEBPACK_IMPORTED_MODULE_0__.Z,argTypes:{type:{control:!1}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{style:{maxWidth:800},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{children:Story()})})],parameters:{options:{showPanel:!0,panelPosition:"bottom"}}},String=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_BladeSelect__WEBPACK_IMPORTED_MODULE_0__.Z,{...args})).bind({});String.args={disabled:!1,schema:{default:"UDP",enum:["UDP","DDP","E131"],title:"Sync Mode",type:"string"},model:{},model_id:"",onChange:void 0,index:0,required:!1,wrapperStyle:void 0,selectStyle:void 0,textStyle:void 0,menuItemStyle:void 0,hideDesc:!1,children:void 0},String.parameters={...String.parameters,docs:{...null===(_String$parameters=String.parameters)||void 0===_String$parameters?void 0:_String$parameters.docs,source:{originalSource:"args => <BladeSelect {...args} />",...null===(_String$parameters2=String.parameters)||void 0===_String$parameters2||null===(_String$parameters2$d=_String$parameters2.docs)||void 0===_String$parameters2$d?void 0:_String$parameters2$d.source}}};const __namedExportsOrder=["String"]},"./src/components/SchemaForm/components/BladeFrame.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Root=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.ZP)("div")((_ref=>{let{theme}=_ref;return{minWidth:"23.5%",padding:"16px 1.2rem 6px 1.2rem",border:"1px solid",borderColor:theme.palette.divider,borderRadius:"10px",position:"relative",display:"flex",alignItems:"center",height:"auto",margin:"0.5rem 0","@media (max-width: 580px)":{width:"100% !important",margin:"0.5rem 0"},"& > label":{top:"-0.75rem",display:"flex",alignItems:"center",left:"1rem",padding:"0 0.3rem",position:"absolute",fontVariant:"all-small-caps",fontSize:"0.9rem",letterSpacing:"0.1rem",color:theme.palette.text.secondary,backgroundColor:theme.palette.background.paper,boxSizing:"border-box"}}})),BladeFrame=_ref2=>{let{index,title,children,full=!1,style={width:"unset",order:0},required=!1,variant="outlined",className,disabled,labelStyle={}}=_ref2;return"outlined"===variant?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Root,{className:className||"",style:{...style,width:full?"100%":style.width},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{style:{...labelStyle},className:"MuiFormLabel-root".concat(disabled?" Mui-disabled":"","  step-effect-").concat(index),children:[title,required?"*":""]}),children]}):children};BladeFrame.defaultProps={index:void 0,title:void 0,children:void 0,full:!1,style:{width:"unset",order:0},required:!1,variant:"outlined",className:void 0,disabled:void 0,labelStyle:void 0};const __WEBPACK_DEFAULT_EXPORT__=BladeFrame;try{BladeFrame.displayName="BladeFrame",BladeFrame.__docgenInfo={description:"",displayName:"BladeFrame",props:{title:{defaultValue:{value:"undefined"},description:"",name:"title",required:!1,type:{name:"string"}},index:{defaultValue:{value:"undefined"},description:"",name:"index",required:!1,type:{name:"number"}},full:{defaultValue:{value:"false"},description:"",name:"full",required:!1,type:{name:"boolean"}},style:{defaultValue:{value:"{\n    width: 'unset',\n    order: 0\n  }"},description:"",name:"style",required:!1,type:{name:"any"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"outlined"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"contained"'},{value:'"inherit"'}]}},className:{defaultValue:{value:"undefined"},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"undefined"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},labelStyle:{defaultValue:{value:"undefined"},description:"",name:"labelStyle",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SchemaForm/components/BladeFrame.tsx#BladeFrame"]={docgenInfo:BladeFrame.__docgenInfo,name:"BladeFrame",path:"src/components/SchemaForm/components/BladeFrame.tsx#BladeFrame"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SchemaForm/components/String/BladeSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>String_BladeSelect});var Select=__webpack_require__("./node_modules/@mui/material/Select/Select.js"),MenuItem=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),InputAdornment=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),Tooltip=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),react=__webpack_require__("./node_modules/react/index.js"),BladeIcon=__webpack_require__("./src/components/Icons/BladeIcon/BladeIcon.tsx"),BladeFrame=__webpack_require__("./src/components/SchemaForm/components/BladeFrame.tsx");const BladeSelectDefaultProps={disabled:!1,schema:{},model:{},model_id:"",onChange:void 0,index:0,required:!1,wrapperStyle:void 0,selectStyle:void 0,textStyle:void 0,menuItemStyle:void 0,hideDesc:!1,children:void 0};var ledfx=__webpack_require__("./src/api/ledfx.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BladeSelect=_ref=>{var _schema$description;let{variant="outlined",disabled=!1,schema,model,model_id,onChange,index,required=!1,wrapperStyle={margin:"0.5rem",flexBasis:"49%",width:"unset"},selectStyle={},textStyle={},menuItemStyle={},hideDesc,children,type}=_ref;const inputRef=(0,react.useRef)(null),[icon,setIcon]=(0,react.useState)("icon_name"===schema.id?model&&model_id&&model[model_id]||schema.enum&&schema.enum[0]:"");return(0,jsx_runtime.jsx)(BladeFrame.Z,{title:schema.title,className:"step-effect-".concat(index),full:!(schema.enum&&schema.enum.length&&Object.values(schema.enum).every((a=>(null==a?void 0:a.length)<20))),required,style:{...wrapperStyle,flexBasis:"Name"===schema.title?"100%":"49%"},children:"contained"===variant?schema.enum?(0,jsx_runtime.jsx)(Select.Z,{variant:"filled",disabled,style:{flexGrow:"unset",...selectStyle},defaultValue:schema.default,value:model&&model_id&&model[model_id]||schema.default||schema.enum[0],onChange:e=>onChange(model_id,e.target.value),children:children||schema.enum.map(((item,i)=>(0,jsx_runtime.jsx)(MenuItem.Z,{value:item,children:item},"".concat(i,"-").concat(i))))}):(0,jsx_runtime.jsx)(TextField.Z,{helperText:!hideDesc&&schema.description,defaultValue:model&&model_id&&model[model_id]||schema.enum&&schema.enum[0]||schema.default||"",onBlur:e=>onChange(model_id,e.target.value),style:textStyle}):schema.enum&&Array.isArray(schema.enum)?(0,jsx_runtime.jsx)(Select.Z,{disabled,style:{flexGrow:"outlined"===variant?1:"unset",...selectStyle},defaultValue:schema.default,value:model&&model_id&&model[model_id]||schema.default||schema.enum[0],onChange:e=>onChange(model_id,e.target.value),children:schema.enum.map(((item,i)=>(0,jsx_runtime.jsx)(MenuItem.Z,{value:item,style:menuItemStyle,children:item},i)))}):schema.enum&&!Array.isArray(schema.enum)?(0,jsx_runtime.jsx)(Select.Z,{disabled,style:{flexGrow:"outlined"===variant?1:"unset",...selectStyle},defaultValue:schema.default,value:model&&model_id&&schema.enum[model[model_id]]||schema.default||schema.enum[0],onChange:e=>onChange(model_id,parseInt(Object.keys(schema.enum).find((en=>schema.enum[en]===e.target.value))||"0",10)),children:Object.keys(schema.enum).map(((item,i)=>(0,jsx_runtime.jsx)(MenuItem.Z,{value:schema.enum[item],children:schema.enum[item]},i)))}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(TextField.Z,{inputRef,type:null!==(_schema$description=schema.description)&&void 0!==_schema$description&&_schema$description.includes("password")?"password":"unset",helperText:!hideDesc&&schema.description,InputProps:"icon_name"===schema.id?{startAdornment:(0,jsx_runtime.jsx)(InputAdornment.Z,{position:"start",children:(0,jsx_runtime.jsx)(BladeIcon.Z,{name:icon,style:{color:"#eee"}})})}:{},defaultValue:model&&model_id&&model[model_id]||schema.enum&&schema.enum[0]||schema.default||"",onBlur:e=>onChange(model_id,e.target.value),onChange:e=>{"icon_name"===schema.id&&setIcon(e.target.value)},style:textStyle}),"auth_token"===model_id&&"nanoleaf"===type&&(0,jsx_runtime.jsx)(Tooltip.Z,{title:void 0===model.ip_address||""===model.ip_address?"please enter ip address of nanoleaf controller":"please hold power on nanoleaf controller for 7 seconds until white leds scan left to right and then press this button to acquire auth token",children:(0,jsx_runtime.jsx)(Button.Z,{sx:{fontSize:10,height:56,color:void 0===model.ip_address||""===model.ip_address?"grey":"inherit"},onClick:async()=>{if(void 0===model.ip_address||""===model.ip_address)return;const{auth_token}=await(0,ledfx._)("/api/get_nanoleaf_token","POST",{ip_address:model.ip_address,port:model.port||16021});onChange(model_id,auth_token),inputRef.current.value=auth_token},children:"Get Token"})})]})})};BladeSelect.defaultProps=BladeSelectDefaultProps;const String_BladeSelect=BladeSelect;try{BladeSelect.displayName="BladeSelect",BladeSelect.__docgenInfo={description:"## String\n### render as `input field` or `select`\nRenders select if schema.enum is defined properly",displayName:"BladeSelect",props:{variant:{defaultValue:{value:"outlined"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"contained"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},schema:{defaultValue:null,description:"",name:"schema",required:!1,type:{name:"any"}},model:{defaultValue:null,description:"",name:"model",required:!1,type:{name:"any"}},model_id:{defaultValue:null,description:"",name:"model_id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"any"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},wrapperStyle:{defaultValue:{value:"{ margin: '0.5rem', flexBasis: '49%', width: 'unset' }"},description:"",name:"wrapperStyle",required:!1,type:{name:"CSSProperties"}},selectStyle:{defaultValue:{value:"{}"},description:"",name:"selectStyle",required:!1,type:{name:"CSSProperties"}},textStyle:{defaultValue:{value:"{}"},description:"",name:"textStyle",required:!1,type:{name:"CSSProperties"}},menuItemStyle:{defaultValue:{value:"{}"},description:"",name:"menuItemStyle",required:!1,type:{name:"CSSProperties"}},hideDesc:{defaultValue:null,description:"",name:"hideDesc",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SchemaForm/components/String/BladeSelect.tsx#BladeSelect"]={docgenInfo:BladeSelect.__docgenInfo,name:"BladeSelect",path:"src/components/SchemaForm/components/String/BladeSelect.tsx#BladeSelect"})}catch(__react_docgen_typescript_loader_error){}}}]);