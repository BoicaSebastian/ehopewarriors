(self.webpackChunkeHopeWarriors=self.webpackChunkeHopeWarriors||[]).push([[182],{9009:function(e,n,t){"use strict";var a=t(8580);n.__esModule=!0,n.default=void 0;var r=a(t(7294)),l=a(t(8384)),i=a(t(4030)),u=t(7791),d=function(e){return r.default.useContext(u.OptionsContext).useAutoGen?r.default.createElement(l.default,e):r.default.createElement(i.default,e)};n.default=d},8384:function(e,n,t){"use strict";var a=t(8580);n.__esModule=!0,n.default=void 0;var r=a(t(4362)),l=a(t(3246)),i=a(t(7294)),u=a(t(5697)),d=t(5444),o=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],s=function(e){var n=e.title,t=e.crumbs,a=e.crumbLabel,u=e.crumbSeparator,s=e.disableLinks,c=e.hiddenCrumbs,m=(0,l.default)(e,o);return i.default.createElement(i.default.Fragment,null,n&&i.default.createElement("span",{className:"breadcrumb__title"},n),i.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},i.default.createElement("ol",{className:"breadcrumb__list"},t.map((function(e,n){return c.includes(e.pathname)?null:i.default.createElement(i.default.Fragment,{key:n+"-"+e.pathname},!s.includes(e.pathname)&&i.default.createElement("li",{className:"breadcrumb__list__item"},i.default.createElement(d.Link,(0,r.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":n===t.length-1?"page":null},m),a&&n===t.length-1?a:e.crumbLabel)),s.includes(e.pathname)&&i.default.createElement("li",{className:"breadcrumb__list__item"},i.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},m),a&&n===t.length-1?a:e.crumbLabel)),n===t.length-1?null:i.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},u))})))))};s.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},s.propTypes={title:u.default.string,crumbSeparator:u.default.oneOfType([u.default.string,u.default.element]),crumbs:u.default.arrayOf(u.default.shape({location:u.default.shape(),pathname:u.default.string.isRequired})).isRequired,crumbLabel:u.default.string,disableLinks:u.default.arrayOf(u.default.string),hiddenCrumbs:u.default.arrayOf(u.default.string)};var c=s;n.default=c},4030:function(e,n,t){"use strict";var a=t(8580);n.__esModule=!0,n.default=void 0;var r=a(t(4362)),l=a(t(3246)),i=a(t(7294)),u=a(t(5697)),d=t(5444),o=t(7791),s=a(t(7147)),c=["title","location","crumbLabel","crumbSeparator"],m=function(e){var n=e.title,t=e.location,a=e.crumbLabel,u=e.crumbSeparator,m=(0,l.default)(e,c),p=i.default.useContext(o.OptionsContext).usePathPrefix,b=(0,s.default)({location:(0,r.default)({},t,{pathname:p?t.pathname.replace(new RegExp("^"+p),""):t.pathname}),crumbLabel:a,crumbSeparator:u}).crumbs,f=void 0===b?[]:b;return i.default.createElement(i.default.Fragment,null,n&&i.default.createElement("span",{className:"breadcrumb__title"},n),i.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},i.default.createElement("ol",{className:"breadcrumb__list"},f.map((function(e,n){return i.default.createElement("li",{className:"breadcrumb__item",key:n},i.default.createElement(d.Link,(0,r.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":n===f.length-1?"page":null},m),e.crumbLabel),n===f.length-1?null:i.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};m.defaultProps={title:"",crumbSeparator:" / "},m.propTypes={location:u.default.shape().isRequired,crumbLabel:u.default.string.isRequired,title:u.default.string,crumbSeparator:u.default.string};var p=m;n.default=p},7935:function(e,n,t){"use strict";var a=t(8580);n.__esModule=!0;var r=a(t(9009));n.Breadcrumb=r.default;var l=a(t(8384));n.AutoGenCrumb=l.default;var i=t(1492);n.BreadcrumbContext=i.BreadcrumbContext,n.BreadcrumbConsumer=i.BreadcrumbConsumer,n.BreadcrumbProvider=i.BreadcrumbProvider;var u=a(t(7147));n.useBreadcrumb=u.default},7147:function(e,n,t){"use strict";var a=t(8580);n.__esModule=!0,n.default=void 0;var r=a(t(7294)),l=t(1492),i=function(e){var n=e.location,t=e.crumbLabel,a=e.crumbSeparator,i=r.default.useContext(l.BreadcrumbContext),u=i.crumbs,d=i.updateCrumbs;return r.default.useEffect((function(){d({location:n,crumbLabel:t,crumbSeparator:a})}),[n,t,a,d]),{crumbs:u}};n.default=i},5231:function(e,n,t){"use strict";var a=t(7935);n.aG=a.Breadcrumb,a.BreadcrumbContext,a.BreadcrumbConsumer,a.BreadcrumbProvider,a.useBreadcrumb,a.AutoGenCrumb},2918:function(e,n,t){"use strict";t.d(n,{Z:function(){return z}});var a,r,l,i,u,d,o,s,c,m,p,b,f=t(1191),g=t(5444),x=t(393),Z=t(6125),h=t(6848),_=t(4978),v=_.ZP.div(a||(a=(0,h.Z)(["\n    margin-bottom: 30px;\n"]))),k=_.ZP.div(r||(r=(0,h.Z)(["\n    overflow: hidden;\n    display: flex;\n    img {\n        width: 100%;\n        transition: 0.8s;\n        -webkit-transition: 0.8s;\n        -moz-transition: 0.8s;\n        -ms-transition: 0.8s;\n        -o-transition: 0.8s;\n    }\n"]))),y=_.ZP.div(l||(l=(0,h.Z)(["\n    background-color: #f7f7f7;\n    padding: 31px 20px 10px;\n    "," {\n        padding: 31px 10px 10px;\n    }\n    "," {\n        padding: 31px 20px 10px;\n    }\n    "," {\n        padding: 31px 10px 10px;\n    }\n    "," {\n        padding: 31px 25px 10px;\n    }\n"])),_.Uh.small,_.Uh.medium,_.Uh.large,_.Uh.xlarge),C=_.ZP.ul(i||(i=(0,h.Z)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 26px;\n"]))),w=_.ZP.li(u||(u=(0,h.Z)(["\n    background-color: #fff;\n    font-family: ",";\n    min-width: 75px;\n    min-width: 90px;\n    padding: 7px 13px 6px;\n    -webkit-transition: 0.3s;\n    -moz-transition: 0.3s;\n    -ms-transition: 0.3s;\n    -o-transition: 0.3s;\n    "," {\n        min-width: 80px;\n        padding: 7px 5px 6px;\n    }\n    "," {\n        min-width: 90px;\n        padding: 7px 13px 6px;\n    }\n"])),(0,_.R)("fonts.heading"),_.Uh.small,_.Uh.medium),L=_.ZP.span(d||(d=(0,h.Z)(["\n    color: #001d23;\n    font-size: 14px;\n    margin-bottom: 8px;\n    display: block;\n    line-height: 1;\n"]))),E=_.ZP.span(o||(o=(0,h.Z)(["\n    color: #fc6539;\n    font-size: 16px;\n    background: #fea444;\n    background: ",";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    display: block;\n    line-height: 1;\n    "," {\n        font-size: 20px;\n    }\n"])),(0,_.R)("colors.gradient"),_.Uh.xlarge),P=_.ZP.h5(s||(s=(0,h.Z)(["\n    line-height: 1.455;\n    margin-bottom: 8px;\n"]))),N=_.ZP.div(c||(c=(0,h.Z)(["\n    align-items: center;\n    background-color: #f7f7f7;\n    display: flex;\n    justify-content: space-between;\n    padding: 15px 15px 33px;\n    "," {\n        padding: 15px 10px 33px;\n    }\n    "," {\n        padding: 15px 20px 33px;\n    }\n    "," {\n        padding: 15px 10px 33px;\n    }\n    "," {\n        padding: 15px 25px 33px;\n    }\n"])),_.Uh.small,_.Uh.medium,_.Uh.large,_.Uh.xlarge),B=_.ZP.div(m||(m=(0,h.Z)([""]))),U=_.ZP.h5(p||(p=(0,h.Z)(["\n    font-family: ",";\n    font-size: 15px;\n    font-weight: 700;\n    margin-bottom: 0;\n    a {\n        display: flex;\n        align-items: center;\n    }\n"])),(0,_.R)("fonts.body")),S=_.ZP.div(b||(b=(0,h.Z)(["\n    box-shadow: 0px 3px 7px 0px rgb(252 102 57 / 8%);\n    height: 40px;\n    line-height: 45px;\n    text-align: center;\n    display: block;\n    border-radius: 50%;\n    background-color: #fff;\n    min-width: 40px;\n    margin-right: 11px;\n    width: 40px;\n"]))),z=function(e){var n=e.title,t=e.dec,a=e.adminName,r=e.image,l=e.donateInfo,i=e.adminImage,u=e.slug,d=(0,Z.d)(r),o=(0,Z.d)(i),s=l;return(0,f.tZ)(v,null,(0,f.tZ)(k,null,(0,f.tZ)(Z.G,{image:d,alt:n})),(0,f.tZ)(y,null,(0,f.tZ)(C,null,s.map((function(e,n){return(0,f.tZ)(w,{key:"donate-"+n},(0,f.tZ)(L,null,e.donateTitle),(0,f.tZ)(E,null,e.amount))}))),(0,f.tZ)(P,null,(0,f.tZ)(g.Link,{to:"/causes/"+u},n)),(0,f.tZ)("p",null,t)),(0,f.tZ)(N,null,(0,f.tZ)(B,null,(0,f.tZ)(U,null,(0,f.tZ)(g.Link,{to:"/causes/"+u},(0,f.tZ)(S,null,(0,f.tZ)(Z.G,{class:"cause-icon",image:o,alt:"Icon"})),a))),(0,f.tZ)(x.Z,{path:"/causes/"+u,size:"small",variant:"outlined",color:"light",sx:{color:"#FEA444",fontWeight:"400"}},"Donate Now"," ",(0,f.tZ)("i",{sx:{ml:"8px",fontSize:"12px !important"},className:"flaticon-right-arrow"}))))}},3936:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var a,r,l=t(5231),i=t(8837),u=t(386),d=t(567),o=t(6848),s=t(4978),c=t.p+"static/bg-page-title-2c6bb5db347e7d89cb7d7664a447a5f0.jpg",m=s.ZP.div(a||(a=(0,o.Z)(["\n    background-image: url(",");\n    background-position: bottom center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    overflow: hidden;\n    padding: 35px 0;\n    position: relative;\n    z-index: 1;\n"])),c),p=s.ZP.div(r||(r=(0,o.Z)(["\n    letter-spacing: 0;\n    padding: 77px 0;\n    text-align: center;\n    & .breadcrumb__title {\n        font-size: 38px;\n        line-height: 1.414;\n        margin-bottom: 6px;\n        font-family: ",";\n        color: #fff;\n        "," {\n            font-size: 58px;\n        }\n    }\n    & .breadcrumb {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0 0;\n        margin-bottom: 1rem;\n        list-style: none;\n        justify-content: center;\n        ol {\n            list-style: none;\n            display: flex;\n            align-items: center;\n            color: #fff;\n            padding: 0;\n            & .breadcrumb__separator {\n                margin-right: 10px;\n                margin-left: 10px;\n            }\n            .breadcrumb__link {\n                color: #fff;\n                font-size: 18px;\n                font-weight: 700;\n                margin-bottom: 8px;\n                &.breadcrumb__link__active {\n                    color: #fea444;\n                }\n            }\n        }\n    }\n"])),(0,s.R)("fonts.heading"),s.Uh.large),b=t(4382),f=function(e){e.crumbLabel;var n=e.location,t=e.title,a=e.pageContext.breadcrumb.crumbs,r=n.pathname.toLowerCase().split("/"),o=r[r.length-1].split("-");return(0,b.tZ)(m,null,(0,b.tZ)(i.Z,null,(0,b.tZ)(u.Z,null,(0,b.tZ)(d.Z,null,(0,b.tZ)(p,null,(0,b.tZ)(l.aG,{title:t,crumbs:a,crumbLabel:o.join(" "),disableLinks:["/events","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/services"]}))))))}},8112:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var a,r=t(7803),l=t(4615),i=t(9613),u=t(4354),d=t(8719),o=t(3936),s=t(1191),c=t(2918),m=t(6848),p=t(4978),b=p.ZP.section(a||(a=(0,m.Z)(["\n    padding: 48px 0 52px;\n    "," {\n        padding: 48px 0 52px;\n    }\n    "," {\n        padding: 88px 0 92px;\n    }\n    "," {\n        padding: 88px 0 92px;\n    }\n    "," {\n        padding: 148px 0 152px;\n    }\n"])),p.Uh.small,p.Uh.medium,p.Uh.large,p.Uh.xlarge),f=t(8837),g=t(386),x=t(567),Z=t(5444),h=function(){var e=(0,Z.useStaticQuery)("3719775819").allCausesJson.edges;return(0,s.tZ)(b,null,(0,s.tZ)(f.Z,null,(0,s.tZ)(g.Z,null,e&&e.map((function(e){return(0,s.tZ)(x.Z,{lg:4,md:6,sm:6,key:e.node.id},(0,s.tZ)(c.Z,{image:e.node.image,title:e.node.title,dec:e.node.dec,adminName:e.node.adminName,donateInfo:e.node.donateInfo,adminImage:e.node.adminImage,slug:e.node.fields.slug}))})))))},_=t(4382),v=function(e){var n=e.location,t=e.pageContext;return(0,_.tZ)(r.Z,null,(0,_.tZ)(l.Z,{title:"Causes",pathname:"/"}),(0,_.tZ)(o.Z,{pageContext:t,location:n,title:"Causes"}),(0,_.tZ)(h,null),(0,_.tZ)(d.Z,null),(0,_.tZ)(u.Z,null),(0,_.tZ)(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-causes-js-e1112ace9ad5c2200ce6.js.map