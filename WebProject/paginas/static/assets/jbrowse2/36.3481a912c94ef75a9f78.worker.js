this.webpackChunk([36],{2120:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(0),c=a.n(r),i=a(18),l=a(108),o=a(936),u=a(937),s=a(169),m=a(938),g=a(95),h=a(453),b=a(898),p=a(679),f=a(171),d=a(81),E=a.n(d),v=Object(l.a)((function(e){return{root:{margin:e.spacing(4)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}));t.default=Object(i.observer)((function(e){var t=v(),a=e.model,i=e.handleClose,l=a.featureHeightSetting,d=a.noSpacing,N=Object(r.useState)("".concat(l)),y=Object(n.a)(N,2),S=y[0],j=y[1],C=Object(r.useState)(d),k=Object(n.a)(C,2),O=k[0],w=k[1],B=""!==S&&!Number.isNaN(+S);return c.a.createElement(o.a,{open:!0,onClose:i},c.a.createElement(u.a,null,"Set feature height",c.a.createElement(s.a,{className:t.closeButton,onClick:i},c.a.createElement(E.a,null))),c.a.createElement(m.a,null,c.a.createElement(g.a,null,"Adjust the feature height and whether there is any spacing between features. Setting feature height to 1 and removing spacing makes the display very compact"),c.a.createElement("div",{className:t.root},c.a.createElement(g.a,null,"Enter feature height: "),c.a.createElement(h.a,{value:S,onChange:function(e){j(e.target.value)}}),c.a.createElement(b.a,{control:c.a.createElement(p.a,{checked:!!O,onChange:function(){return w((function(e){return!e}))}}),label:"Remove spacing between features in y-direction?"}),c.a.createElement(f.a,{variant:"contained",color:"primary",type:"submit",style:{marginLeft:20},disabled:!B,onClick:function(){a.setFeatureHeight(""===S||Number.isNaN(+S)?void 0:+S),a.setNoSpacing(O),i()}},"Submit"))))}))}});
//# sourceMappingURL=36.3481a912c94ef75a9f78.worker.js.map