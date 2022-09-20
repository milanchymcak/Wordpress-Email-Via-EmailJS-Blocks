!function(){"use strict";function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},e.apply(this,arguments)}var t=window.wp.element,l=window.wp.blocks,r=window.wp.i18n,o=window.wp.components,a=window.wp.blockEditor;const n=()=>(Math.random()+1).toString(36).substring(7);function i(e){const[l,r]=(0,t.useState)(void 0===e.default?"#fff":e.default),a=n();return(0,t.createElement)(o.BaseControl,{label:e.label,id:a,help:e.help},(0,t.createElement)(o.ColorPicker,{color:l,id:a,onChange:t=>{e.setAttributes({[e.target]:t}),r(t.toString())},copyFormat:"hex"}))}function u(){return(0,t.createElement)("hr",{className:"mchymcak-separator"})}var s=JSON.parse('{"u2":"mchymcak/emailjs-input","kG":"emailjs-block"}'),c=JSON.parse('{"hiddenLabel":{"type":"string","source":"attribute","default":false},"name":{"type":"string","source":"attribute","selector":"input","attribute":"name","default":"message"},"type":{"type":"string","source":"attribute","selector":"input","attribute":"type","default":"text"},"label":{"type":"string","source":"attribute","selector":"label","default":"Custom Label"},"placeholder":{"type":"string","source":"attribute","selector":"input","attribute":"placeholder","default":"Placeholder"},"label_Color":{"type":"string","source":"attribute","selector":"label","attribute":"color","default":"#000000"},"input_Color":{"type":"string","source":"attribute","selector":"input","attribute":"color","default":"#000000"},"bg_Color":{"type":"string","source":"attribute","selector":"input","attribute":"background-color","default":"#FFFFFF"},"border_Color":{"type":"string","source":"attribute","selector":"input","attribute":"border-color","default":"#d8d8d8"},"border_Width":{"type":"string","source":"attribute","selector":"input","attribute":"border-width","default":"1px"},"input":{"type":"string","source":"text","selector":"input","attribute":"value","default":""},"uniqueID":{"type":"string","source":"attribute"}}');(0,l.registerBlockType)(s.u2,{attributes:c,edit:l=>{const c=l.clientId,{attributes:b,setAttributes:d}=l;(0,t.useEffect)((()=>{d({uniqueID:c})}),[]);const m=n();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(o.PanelBody,{initialOpen:!1,title:(0,r.__)("Label Settings","emailjs-block")},(0,t.createElement)(o.SelectControl,{label:(0,r.__)("Hide Label","emailjs-block"),value:b.hiddenLabel,options:[{label:"No",value:!1},{label:"Yes",value:!0}],onChange:e=>{d({hiddenLabel:e})},__nextHasNoMarginBottom:!0}),(0,t.createElement)(u,null),(0,t.createElement)(o.TextControl,{label:(0,r.__)("Label Content","emailjs-block"),value:b.label,onChange:e=>d({label:e})}),(0,t.createElement)(u,null),(0,t.createElement)(i,{attributes:b,setAttributes:d,label:(0,r.__)("Label Text Color","emailjs-block"),target:"label_Color",default:b.label_Color}),(0,t.createElement)(u,null),(0,t.createElement)(i,{attributes:b,setAttributes:d,label:(0,r.__)("Background Color","emailjs-block"),target:"label_Color",default:b.bg_Color})),(0,t.createElement)(o.PanelBody,{initialOpen:!1,title:(0,r.__)("Input Settings","emailjs-block")},(0,t.createElement)(i,{attributes:b,setAttributes:d,label:(0,r.__)("Input Text Color","emailjs-block"),target:"input_Color",default:b.input_Color}),(0,t.createElement)(u,null),(0,t.createElement)(o.TextControl,{label:(0,r.__)("Name Attribute","emailjs-block"),value:b.name,onChange:e=>d({name:e})}),(0,t.createElement)(u,null),(0,t.createElement)(o.TextControl,{label:(0,r.__)("Type Attribute","emailjs-block"),value:b.type,onChange:e=>d({type:e})}),(0,t.createElement)(u,null),(0,t.createElement)(i,{attributes:b,setAttributes:d,label:(0,r.__)("Background Color","emailjs-block"),target:"bg_Color",default:b.bg_Color}),(0,t.createElement)(u,null),(0,t.createElement)(i,{attributes:b,setAttributes:d,label:(0,r.__)("Border Color","emailjs-block"),target:"border_Color",default:b.border_Color}),(0,t.createElement)(u,null),(0,t.createElement)(o.RangeControl,{label:(0,r.__)("Border Width","emailjs-block"),value:b.border_Width,onChange:e=>d({border_Width:e}),min:0,max:10,initialPosition:1,renderTooltipContent:e=>e+"px"}))),(0,t.createElement)(a.BlockControls,{group:"block"}),(0,t.createElement)("div",e({},(0,a.useBlockProps)({className:b.textAlign}),{key:s.kG+"-"+[b.id],style:{color:b.label_Color}}),(0,t.createElement)(o.BaseControl,{id:m,label:b.label,__nextHasNoMarginBottom:!0,className:"true"===b.hiddenLabel?"hideLabel":"showLabel"},(0,t.createElement)(a.RichText,{id:m,className:s.kG+"-input",allowedFormats:[],value:b.input,onChange:e=>d({input:e,placeholder:e}),placeholder:b.placeholder,style:{color:b.input_Color,backgroundColor:b.bg_Color,borderColor:b.border_Color,borderWidth:b.border_Width}}))))},save:e=>{let{attributes:l}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("label",{htmlFor:l.uniqueID,className:"true"===l.hiddenLabel?"hideLabel":"showLabel",style:{color:l.label_Color}},l.label),(0,t.createElement)(a.RichText.Content,{for:l.uniqueID,tagName:"input",type:l.type,placeholder:l.placeholder,name:l.name,style:{color:l.input_Color,backgroundColor:l.bg_Color,borderColor:l.border_Color,borderWidth:l.border_Width}}))}})}();