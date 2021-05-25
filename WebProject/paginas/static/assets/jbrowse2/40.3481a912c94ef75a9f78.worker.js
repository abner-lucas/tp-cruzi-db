this.webpackChunk([40],{2147:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(9),c=t(7),s=t(4),l=t(171),o=t(952),i=t(954),p=t(953),u=t(955),m=t(108),d=t(95),g=t(18),f=t(0),h=t.n(f),b=t(951),y=t(170),k=t(453),E=t(1),v=t(22),w=Object(m.a)((function(e){return{spacing:{marginBottom:e.spacing(3)}}}));var N=Object(g.observer)((function(e){var a=e.model,t=w(),n=Object(c.getSession)(a),r="",l=a.trackName,o=a.trackData,i=a.trackAdapter,p=a.trackType,u=a.assembly;if(a.isFtp?r="Warning: JBrowse cannot access files using the ftp protocol":a.isRelativeUrl?r="Warning: one or more of your files do not provide the protocol e.g.\n          https://, please provide an absolute URL unless you are sure a\n          relative URL is intended.":a.wrongProtocol&&(r="Warning: You entered a http:// resources but we cannot access HTTP\n          resources from JBrowse when it is running on https. Please use an\n          https URL for your track, or access the JBrowse app from the http\n          protocol"),a.unsupported)return h.a.createElement(d.a,{className:t.spacing},"This version of JBrowse cannot display data of this type. It is possible, however, that there is a newer version that can display them. You can"," ",h.a.createElement(b.a,{href:"https://github.com/GMOD/jbrowse-components/releases",target:"_blank",rel:"noopener noreferrer"},"check for new releases")," ","of JBrowse or"," ",h.a.createElement(b.a,{href:"https://github.com/GMOD/jbrowse-components/issues/new",target:"_blank",rel:"noopener noreferrer"},"file an issue")," ","and add a feature request for this data type.");if(i.type===v.UNKNOWN)return h.a.createElement(h.a.Fragment,null,h.a.createElement(d.a,{className:t.spacing},"Was not able to guess the adapter type for this data, but it may be in the list below. If not, you can"," ",h.a.createElement(b.a,{href:"https://github.com/GMOD/jbrowse-components/releases",target:"_blank",rel:"noopener noreferrer"},"check for new releases")," ","of JBrowse to see if they support this data type or"," ",h.a.createElement(b.a,{href:"https://github.com/GMOD/jbrowse-components/issues/new",target:"_blank",rel:"noopener noreferrer"},"file an issue")," ","and add a feature request for this data type."),h.a.createElement(k.a,{className:t.spacing,value:i,label:"adapterType",helperText:"An adapter type",select:!0,fullWidth:!0,onChange:function(e){a.setTrackAdapter({type:e.target.value})},SelectProps:{SelectDisplayProps:{"data-testid":"adapterTypeSelect"}}},Object(E.getEnv)(n).pluginManager.getElementTypesInGroup("adapter").map((function(e){return"SNPCoverageAdapter"!==e.name&&h.a.createElement(y.a,{key:e.name,value:e.name},e.name)}))));if(!i.type)return h.a.createElement(d.a,null,"Could not recognize this data type.");if(o.uri||o.localPath||o.config){var m=null;return m=o.uri||o.localPath?"SNPCoverageAdapter"===i.type?h.a.createElement(d.a,{className:t.spacing},"Selected ",h.a.createElement("code",null,p),". Using adapter"," ",h.a.createElement("code",null,i.type)," with subadapter"," ",h.a.createElement("code",null,i.subadapter.type),". Please enter a track name and, if necessary, update the track type."):h.a.createElement(d.a,{className:t.spacing},"Using adapter ",h.a.createElement("code",null,i.type)," and guessing track type ",h.a.createElement("code",null,p),". Please enter a track name and, if necessary, update the track type."):h.a.createElement(d.a,{className:t.spacing},"Please enter a track type and track name."),h.a.createElement(h.a.Fragment,null,m,r?h.a.createElement(d.a,{style:{color:"orange"}},r):null,h.a.createElement(k.a,{className:t.spacing,label:"trackName",helperText:"A name for this track",fullWidth:!0,value:l,onChange:function(e){return a.setTrackName(e.target.value)},inputProps:{"data-testid":"trackNameInput"}}),h.a.createElement(k.a,{className:t.spacing,value:p,label:"trackType",helperText:"A track type",select:!0,fullWidth:!0,onChange:function(e){a.setTrackType(e.target.value)},SelectProps:{SelectDisplayProps:{"data-testid":"trackTypeSelect"}}},Object(E.getEnv)(n).pluginManager.getElementTypesInGroup("track").map((function(e){return h.a.createElement(y.a,{key:e.name,value:e.name},e.name)}))),h.a.createElement(k.a,{value:u,label:"assemblyName",helperText:"Assembly to which the track will be added",select:!0,fullWidth:!0,onChange:function(e){a.setAssembly(e.target.value)},SelectProps:{SelectDisplayProps:{"data-testid":"assemblyNameSelect"}}},n.assemblies.map((function(e){var a=Object(s.readConfObject)(e,"name");return h.a.createElement(y.a,{key:a,value:a},a)}))))}return h.a.createElement(h.a.Fragment,null)})),T=t(50),O=t(149),j=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column"},paper:{padding:e.spacing(1)}}}));var C=function(e){var a=e.model,t=j();return h.a.createElement("div",{className:t.root},h.a.createElement(O.a,{className:t.paper},h.a.createElement(T.FileSelector,{name:"URL",description:"",location:a.trackData,setLocation:a.setTrackData}),h.a.createElement(T.FileSelector,{name:"Index URL (optional)",description:"Automatically inferred from the URL if not supplied",location:a.indexTrackData,setLocation:a.setIndexTrackData})))},P=Object(m.a)((function(e){return{root:{marginTop:e.spacing(1)},stepper:{backgroundColor:e.palette.background.default},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},stepContent:{margin:e.spacing(1)}}})),S=["Enter track data","Confirm track type"];a.default=Object(g.observer)((function(e){var a=e.model,t=Object(f.useState)(0),m=Object(r.a)(t,2),g=m[0],b=m[1],y=P(),k=Object(c.getSession)(a),E=a.assembly,v=a.trackAdapter,w=a.trackData,T=a.trackName,O=a.trackType;function j(){if(g===S.length-1){var e="".concat(T.toLowerCase().replace(/ /g,"_"),"-").concat(Date.now()),t=k.assemblyManager.get(E);k.addTrackConf({trackId:e,type:O,name:T,assemblyNames:[E],adapter:Object(n.a)(Object(n.a)({},v),{},{sequenceAdapter:Object(s.getConf)(t,["sequence","adapter"])})}),a.view?a.view.showTrack(e):k.notify("Open a new view, or use the track selector in an existing view, to view this track","info"),a.clearData(),k.hideWidget(a)}else b(g+1)}function D(){b(g-1)}function A(){switch(g){case 0:return!(w.uri||w.localPath||w.blob);case 1:return!(T&&O&&v.type&&E);default:return!0}}return h.a.createElement("div",{className:y.root},h.a.createElement(u.a,{className:y.stepper,activeStep:g,orientation:"vertical"},S.map((function(e,t){return h.a.createElement(o.a,{key:e},h.a.createElement(p.a,null,e),h.a.createElement(i.a,null,function(e){switch(e){case 0:return h.a.createElement(C,{model:a});case 1:return h.a.createElement(N,{model:a});default:return h.a.createElement(d.a,null,"Unknown step")}}(t),h.a.createElement("div",{className:y.actionsContainer},h.a.createElement(l.a,{disabled:0===g,onClick:D,className:y.button},"Back"),h.a.createElement(l.a,{disabled:A(),variant:"contained",color:"primary",onClick:j,className:y.button,"data-testid":"addTrackNextButton"},g===S.length-1?"Add":"Next"))))}))))}))}});
//# sourceMappingURL=40.3481a912c94ef75a9f78.worker.js.map