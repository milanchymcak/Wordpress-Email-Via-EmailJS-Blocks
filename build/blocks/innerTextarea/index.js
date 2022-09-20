!function(){"use strict";function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},e.apply(this,arguments)}var t=window.wp.element,r=window.wp.blocks,l=window.wp.i18n,a=window.wp.components,o=window.wp.blockEditor;function n(e){const[r,l]=(0,t.useState)(void 0===e.default?"#FFFF":e.default),o=(Math.random()+1).toString(36).substring(7);return(0,t.createElement)(a.BaseControl,{label:e.label,id:o,help:e.help},(0,t.createElement)(a.ColorPicker,{color:r,id:o,onChange:t=>{e.setAttributes({[e.target]:t}),l(t.toString())},copyFormat:"hex"}))}function u(){return(0,t.createElement)("hr",{className:"mchymcak-separator"})}var i=JSON.parse('{"u2":"mchymcak/emailjs-textarea"}'),b=JSON.parse('{"textarea":{"type":"string","source":"attribute","selector":"input","attribute":"value","default":"Your message ..."},"hiddenLabel":{"type":"string","source":"attribute","default":false},"name":{"type":"string","source":"attribute","selector":"textarea","attribute":"name","default":"message"},"type":{"type":"string","source":"attribute","selector":"textarea","attribute":"type","default":"text"},"label":{"type":"string","source":"attribute","selector":"label","default":"Custom Label"},"placeholder":{"type":"string","source":"attribute","selector":"textarea","attribute":"placeholder","default":"Placeholder"},"label_Color":{"type":"string","source":"attribute","selector":"div","attribute":"color","default":"#000000"},"input_Color":{"type":"string","source":"attribute","selector":"textarea","attribute":"color","default":"#000000"},"bg_Color":{"type":"string","source":"attribute","selector":"textarea","attribute":"background-color","default":"#FFFFFF"},"border_Color":{"type":"string","source":"attribute","selector":"textarea","attribute":"border-color","default":"#d8d8d8"},"border_Width":{"type":"string","source":"attribute","selector":"textarea","attribute":"border-width","default":"1px"},"uniqueID":{"type":"string","source":"attribute"}}');(0,r.registerBlockType)(i.u2,{defaultAttributes:b,edit:r=>{const i=r.clientId,{attributes:b,setAttributes:s}=r;return(0,t.useEffect)((()=>{s({uniqueID:i})}),[]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(a.PanelBody,{title:(0,l.__)("Label Settings","gutenpride")},(0,t.createElement)(a.SelectControl,{label:(0,l.__)("Hide Label","gutenpride"),value:b.hiddenLabel,options:[{label:"No",value:!1},{label:"Yes",value:!0}],onChange:e=>{s({hiddenLabel:e})},__nextHasNoMarginBottom:!0}),(0,t.createElement)(u,null),(0,t.createElement)(a.TextControl,{label:(0,l.__)("Label Content","gutenpride"),value:b.label,onChange:e=>s({label:e})}),(0,t.createElement)(u,null),(0,t.createElement)(n,{attributes:b,setAttributes:s,label:(0,l.__)("Label Text Color","gutenpride"),target:"label_Color",default:b.label_Color})),(0,t.createElement)(a.PanelBody,{title:(0,l.__)("Input Settings","gutenpride")},(0,t.createElement)(n,{attributes:b,setAttributes:s,label:(0,l.__)("Input Text Color","gutenpride"),target:"input_Color",default:b.input_Color}),(0,t.createElement)(u,null),(0,t.createElement)(a.TextControl,{label:(0,l.__)("Name Attribute","gutenpride"),value:b.name,onChange:e=>s({name:e})}),(0,t.createElement)(u,null),(0,t.createElement)(a.TextControl,{label:(0,l.__)("Type Attribute","gutenpride"),value:b.type,onChange:e=>s({type:e})}),(0,t.createElement)(u,null),(0,t.createElement)(n,{attributes:b,setAttributes:s,label:(0,l.__)("Background Color","gutenpride"),target:"bg_Color",default:b.bg_Color}),(0,t.createElement)(u,null),(0,t.createElement)(n,{attributes:b,setAttributes:s,label:(0,l.__)("Border Color","gutenpride"),target:"border_Color",default:b.border_Color}),(0,t.createElement)(u,null),(0,t.createElement)(a.RangeControl,{label:(0,l.__)("Border Width","gutenpride"),value:b.border_Width,onChange:e=>s({border_Width:e}),min:0,max:10,initialPosition:1,renderTooltipContent:e=>e+"px"}))),(0,t.createElement)("div",e({},(0,o.useBlockProps)(),{style:{color:b.label_Color}}),(0,t.createElement)(o.BlockControls,{group:"block"}),(0,t.createElement)(a.TextareaControl,{label:b.label,value:b.textarea,onChange:e=>s({textarea:e}),className:"true"===b.hiddenLabel?"hideLabel":"showLabel",style:{color:b.input_Color,backgroundColor:b.bg_Color,borderColor:b.border_Color,borderWidth:b.border_Width}})))},save:e=>{let{attributes:r}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("label",{htmlFor:r.uniqueID,style:{color:r.label_Color},className:"true"===r.hiddenLabel?"hideLabel":"showLabel"},r.label),(0,t.createElement)("textarea",{placeholder:r.textarea,id:r.uniqueID,name:r.name,type:r.type,style:{color:r.input_Color,backgroundColor:r.bg_Color,borderColor:r.border_Color,borderWidth:r.border_Width}}))}})}();