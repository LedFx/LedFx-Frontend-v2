"use strict";(self.webpackChunkledfx=self.webpackChunkledfx||[]).push([[94],{"./node_modules/@mui/material/Checkbox/Checkbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Checkbox_Checkbox});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),SwitchBase=__webpack_require__("./node_modules/@mui/material/internal/SwitchBase.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CheckBoxOutlineBlank=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),CheckBox=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),IndeterminateCheckBox=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCheckboxUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiCheckbox",slot)}const Checkbox_checkboxClasses=(0,generateUtilityClasses.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),_excluded=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],CheckboxRoot=(0,styled.ZP)(SwitchBase.Z,{shouldForwardProp:prop=>(0,styled.FO)(prop)||"classes"===prop,name:"MuiCheckbox",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.indeterminate&&styles.indeterminate,styles[`size${(0,capitalize.Z)(ownerState.size)}`],"default"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`]]}})((({theme,ownerState})=>(0,esm_extends.Z)({color:(theme.vars||theme).palette.text.secondary},!ownerState.disableRipple&&{"&:hover":{backgroundColor:theme.vars?`rgba(${"default"===ownerState.color?theme.vars.palette.action.activeChannel:theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)("default"===ownerState.color?theme.palette.action.active:theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==ownerState.color&&{[`&.${Checkbox_checkboxClasses.checked}, &.${Checkbox_checkboxClasses.indeterminate}`]:{color:(theme.vars||theme).palette[ownerState.color].main},[`&.${Checkbox_checkboxClasses.disabled}`]:{color:(theme.vars||theme).palette.action.disabled}}))),defaultCheckedIcon=(0,jsx_runtime.jsx)(CheckBox,{}),defaultIcon=(0,jsx_runtime.jsx)(CheckBoxOutlineBlank,{}),defaultIndeterminateIcon=(0,jsx_runtime.jsx)(IndeterminateCheckBox,{}),Checkbox_Checkbox=react.forwardRef((function Checkbox(inProps,ref){var _icon$props$fontSize,_indeterminateIcon$pr;const props=(0,useThemeProps.Z)({props:inProps,name:"MuiCheckbox"}),{checkedIcon=defaultCheckedIcon,color="primary",icon:iconProp=defaultIcon,indeterminate=!1,indeterminateIcon:indeterminateIconProp=defaultIndeterminateIcon,inputProps,size="medium",className}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),icon=indeterminate?indeterminateIconProp:iconProp,indeterminateIcon=indeterminate?indeterminateIconProp:checkedIcon,ownerState=(0,esm_extends.Z)({},props,{color,indeterminate,size}),classes=(ownerState=>{const{classes,indeterminate,color,size}=ownerState,slots={root:["root",indeterminate&&"indeterminate",`color${(0,capitalize.Z)(color)}`,`size${(0,capitalize.Z)(size)}`]},composedClasses=(0,composeClasses.Z)(slots,getCheckboxUtilityClass,classes);return(0,esm_extends.Z)({},classes,composedClasses)})(ownerState);return(0,jsx_runtime.jsx)(CheckboxRoot,(0,esm_extends.Z)({type:"checkbox",inputProps:(0,esm_extends.Z)({"data-indeterminate":indeterminate},inputProps),icon:react.cloneElement(icon,{fontSize:null!=(_icon$props$fontSize=icon.props.fontSize)?_icon$props$fontSize:size}),checkedIcon:react.cloneElement(indeterminateIcon,{fontSize:null!=(_indeterminateIcon$pr=indeterminateIcon.props.fontSize)?_indeterminateIcon$pr:size}),ownerState,ref,className:(0,clsx.Z)(classes.root,className)},other,{classes}))}))},"./node_modules/@mui/material/Switch/Switch.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Switch_Switch});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),SwitchBase=__webpack_require__("./node_modules/@mui/material/internal/SwitchBase.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSwitchUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSwitch",slot)}const Switch_switchClasses=(0,generateUtilityClasses.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","color","edge","size","sx"],SwitchRoot=(0,styled.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.edge&&styles[`edge${(0,capitalize.Z)(ownerState.edge)}`],styles[`size${(0,capitalize.Z)(ownerState.size)}`]]}})((({ownerState})=>(0,esm_extends.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===ownerState.edge&&{marginLeft:-8},"end"===ownerState.edge&&{marginRight:-8},"small"===ownerState.size&&{width:40,height:24,padding:7,[`& .${Switch_switchClasses.thumb}`]:{width:16,height:16},[`& .${Switch_switchClasses.switchBase}`]:{padding:4,[`&.${Switch_switchClasses.checked}`]:{transform:"translateX(16px)"}}}))),SwitchSwitchBase=(0,styled.ZP)(SwitchBase.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.switchBase,{[`& .${Switch_switchClasses.input}`]:styles.input},"default"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`]]}})((({theme})=>({position:"absolute",top:0,left:0,zIndex:1,color:theme.vars?theme.vars.palette.Switch.defaultColor:`${"light"===theme.palette.mode?theme.palette.common.white:theme.palette.grey[300]}`,transition:theme.transitions.create(["left","transform"],{duration:theme.transitions.duration.shortest}),[`&.${Switch_switchClasses.checked}`]:{transform:"translateX(20px)"},[`&.${Switch_switchClasses.disabled}`]:{color:theme.vars?theme.vars.palette.Switch.defaultDisabledColor:`${"light"===theme.palette.mode?theme.palette.grey[100]:theme.palette.grey[600]}`},[`&.${Switch_switchClasses.checked} + .${Switch_switchClasses.track}`]:{opacity:.5},[`&.${Switch_switchClasses.disabled} + .${Switch_switchClasses.track}`]:{opacity:theme.vars?theme.vars.opacity.switchTrackDisabled:""+("light"===theme.palette.mode?.12:.2)},[`& .${Switch_switchClasses.input}`]:{left:"-100%",width:"300%"}})),(({theme,ownerState})=>(0,esm_extends.Z)({"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette.action.active,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==ownerState.color&&{[`&.${Switch_switchClasses.checked}`]:{color:(theme.vars||theme).palette[ownerState.color].main,"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Switch_switchClasses.disabled}`]:{color:theme.vars?theme.vars.palette.Switch[`${ownerState.color}DisabledColor`]:`${"light"===theme.palette.mode?(0,colorManipulator.$n)(theme.palette[ownerState.color].main,.62):(0,colorManipulator._j)(theme.palette[ownerState.color].main,.55)}`}},[`&.${Switch_switchClasses.checked} + .${Switch_switchClasses.track}`]:{backgroundColor:(theme.vars||theme).palette[ownerState.color].main}}))),SwitchTrack=(0,styled.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(props,styles)=>styles.track})((({theme})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:theme.transitions.create(["opacity","background-color"],{duration:theme.transitions.duration.shortest}),backgroundColor:theme.vars?theme.vars.palette.common.onBackground:`${"light"===theme.palette.mode?theme.palette.common.black:theme.palette.common.white}`,opacity:theme.vars?theme.vars.opacity.switchTrack:""+("light"===theme.palette.mode?.38:.3)}))),SwitchThumb=(0,styled.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(props,styles)=>styles.thumb})((({theme})=>({boxShadow:(theme.vars||theme).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),Switch_Switch=react.forwardRef((function Switch(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSwitch"}),{className,color="primary",edge=!1,size="medium",sx}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{color,edge,size}),classes=(ownerState=>{const{classes,edge,size,color,checked,disabled}=ownerState,slots={root:["root",edge&&`edge${(0,capitalize.Z)(edge)}`,`size${(0,capitalize.Z)(size)}`],switchBase:["switchBase",`color${(0,capitalize.Z)(color)}`,checked&&"checked",disabled&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},composedClasses=(0,composeClasses.Z)(slots,getSwitchUtilityClass,classes);return(0,esm_extends.Z)({},classes,composedClasses)})(ownerState),icon=(0,jsx_runtime.jsx)(SwitchThumb,{className:classes.thumb,ownerState});return(0,jsx_runtime.jsxs)(SwitchRoot,{className:(0,clsx.Z)(classes.root,className),sx,ownerState,children:[(0,jsx_runtime.jsx)(SwitchSwitchBase,(0,esm_extends.Z)({type:"checkbox",icon,checkedIcon:icon,ref,ownerState},other,{classes:(0,esm_extends.Z)({},classes,{root:classes.switchBase})})),(0,jsx_runtime.jsx)(SwitchTrack,{className:classes.track,ownerState})]})}))},"./node_modules/@mui/material/internal/SwitchBase.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>internal_SwitchBase});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useControlled=__webpack_require__("./node_modules/@mui/material/utils/useControlled.js"),useFormControl=__webpack_require__("./node_modules/@mui/material/FormControl/useFormControl.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSwitchBaseUtilityClass(slot){return(0,generateUtilityClass.Z)("PrivateSwitchBase",slot)}(0,generateUtilityClasses.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],SwitchBaseRoot=(0,styled.ZP)(ButtonBase.Z)((({ownerState})=>(0,esm_extends.Z)({padding:9,borderRadius:"50%"},"start"===ownerState.edge&&{marginLeft:"small"===ownerState.size?-3:-12},"end"===ownerState.edge&&{marginRight:"small"===ownerState.size?-3:-12}))),SwitchBaseInput=(0,styled.ZP)("input",{shouldForwardProp:styled.FO})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),internal_SwitchBase=react.forwardRef((function SwitchBase(props,ref){const{autoFocus,checked:checkedProp,checkedIcon,className,defaultChecked,disabled:disabledProp,disableFocusRipple=!1,edge=!1,icon,id,inputProps,inputRef,name,onBlur,onChange,onFocus,readOnly,required=!1,tabIndex,type,value}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),[checked,setCheckedState]=(0,useControlled.Z)({controlled:checkedProp,default:Boolean(defaultChecked),name:"SwitchBase",state:"checked"}),muiFormControl=(0,useFormControl.Z)();let disabled=disabledProp;muiFormControl&&void 0===disabled&&(disabled=muiFormControl.disabled);const hasLabelFor="checkbox"===type||"radio"===type,ownerState=(0,esm_extends.Z)({},props,{checked,disabled,disableFocusRipple,edge}),classes=(ownerState=>{const{classes,checked,disabled,edge}=ownerState,slots={root:["root",checked&&"checked",disabled&&"disabled",edge&&`edge${(0,capitalize.Z)(edge)}`],input:["input"]};return(0,composeClasses.Z)(slots,getSwitchBaseUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SwitchBaseRoot,(0,esm_extends.Z)({component:"span",className:(0,clsx.Z)(classes.root,className),centerRipple:!0,focusRipple:!disableFocusRipple,disabled,tabIndex:null,role:void 0,onFocus:event=>{onFocus&&onFocus(event),muiFormControl&&muiFormControl.onFocus&&muiFormControl.onFocus(event)},onBlur:event=>{onBlur&&onBlur(event),muiFormControl&&muiFormControl.onBlur&&muiFormControl.onBlur(event)},ownerState,ref},other,{children:[(0,jsx_runtime.jsx)(SwitchBaseInput,(0,esm_extends.Z)({autoFocus,checked:checkedProp,defaultChecked,className:classes.input,disabled,id:hasLabelFor?id:void 0,name,onChange:event=>{if(event.nativeEvent.defaultPrevented)return;const newChecked=event.target.checked;setCheckedState(newChecked),onChange&&onChange(event,newChecked)},readOnly,ref:inputRef,required,ownerState,tabIndex,type},"checkbox"===type&&void 0===value?{}:{value},inputProps)),checked?checkedIcon:icon]}))}))}}]);