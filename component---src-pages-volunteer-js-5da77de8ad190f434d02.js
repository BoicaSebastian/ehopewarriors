(self.webpackChunkeHopeWarriors=self.webpackChunkeHopeWarriors||[]).push([[755],{9009:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0,e.default=void 0;var r=a(t(7294)),o=a(t(8384)),l=a(t(4030)),i=t(7791),s=function(n){return r.default.useContext(i.OptionsContext).useAutoGen?r.default.createElement(o.default,n):r.default.createElement(l.default,n)};e.default=s},8384:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0,e.default=void 0;var r=a(t(4362)),o=a(t(3246)),l=a(t(7294)),i=a(t(5697)),s=t(5444),u=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],m=function(n){var e=n.title,t=n.crumbs,a=n.crumbLabel,i=n.crumbSeparator,m=n.disableLinks,c=n.hiddenCrumbs,d=(0,o.default)(n,u);return l.default.createElement(l.default.Fragment,null,e&&l.default.createElement("span",{className:"breadcrumb__title"},e),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},t.map((function(n,e){return c.includes(n.pathname)?null:l.default.createElement(l.default.Fragment,{key:e+"-"+n.pathname},!m.includes(n.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement(s.Link,(0,r.default)({to:n.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":e===t.length-1?"page":null},d),a&&e===t.length-1?a:n.crumbLabel)),m.includes(n.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},d),a&&e===t.length-1?a:n.crumbLabel)),e===t.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},i))})))))};m.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},m.propTypes={title:i.default.string,crumbSeparator:i.default.oneOfType([i.default.string,i.default.element]),crumbs:i.default.arrayOf(i.default.shape({location:i.default.shape(),pathname:i.default.string.isRequired})).isRequired,crumbLabel:i.default.string,disableLinks:i.default.arrayOf(i.default.string),hiddenCrumbs:i.default.arrayOf(i.default.string)};var c=m;e.default=c},4030:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0,e.default=void 0;var r=a(t(4362)),o=a(t(3246)),l=a(t(7294)),i=a(t(5697)),s=t(5444),u=t(7791),m=a(t(7147)),c=["title","location","crumbLabel","crumbSeparator"],d=function(n){var e=n.title,t=n.location,a=n.crumbLabel,i=n.crumbSeparator,d=(0,o.default)(n,c),p=l.default.useContext(u.OptionsContext).usePathPrefix,f=(0,m.default)({location:(0,r.default)({},t,{pathname:p?t.pathname.replace(new RegExp("^"+p),""):t.pathname}),crumbLabel:a,crumbSeparator:i}).crumbs,b=void 0===f?[]:f;return l.default.createElement(l.default.Fragment,null,e&&l.default.createElement("span",{className:"breadcrumb__title"},e),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},b.map((function(n,e){return l.default.createElement("li",{className:"breadcrumb__item",key:e},l.default.createElement(s.Link,(0,r.default)({to:n.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":e===b.length-1?"page":null},d),n.crumbLabel),e===b.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},n.crumbSeparator))})))))};d.defaultProps={title:"",crumbSeparator:" / "},d.propTypes={location:i.default.shape().isRequired,crumbLabel:i.default.string.isRequired,title:i.default.string,crumbSeparator:i.default.string};var p=d;e.default=p},7935:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0;var r=a(t(9009));e.Breadcrumb=r.default;var o=a(t(8384));e.AutoGenCrumb=o.default;var l=t(1492);e.BreadcrumbContext=l.BreadcrumbContext,e.BreadcrumbConsumer=l.BreadcrumbConsumer,e.BreadcrumbProvider=l.BreadcrumbProvider;var i=a(t(7147));e.useBreadcrumb=i.default},7147:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0,e.default=void 0;var r=a(t(7294)),o=t(1492),l=function(n){var e=n.location,t=n.crumbLabel,a=n.crumbSeparator,l=r.default.useContext(o.BreadcrumbContext),i=l.crumbs,s=l.updateCrumbs;return r.default.useEffect((function(){s({location:e,crumbLabel:t,crumbSeparator:a})}),[e,t,a,s]),{crumbs:i}};e.default=l},5231:function(n,e,t){"use strict";var a=t(7935);e.aG=a.Breadcrumb,a.BreadcrumbContext,a.BreadcrumbConsumer,a.BreadcrumbProvider,a.useBreadcrumb,a.AutoGenCrumb},3936:function(n,e,t){"use strict";t.d(e,{Z:function(){return b}});var a,r,o=t(5231),l=t(8837),i=t(3448),s=t(567),u=t(6848),m=t(4978),c=t.p+"static/bg-page-title-2c6bb5db347e7d89cb7d7664a447a5f0.jpg",d=m.ZP.div(a||(a=(0,u.Z)(["\n    background-image: url(",");\n    background-position: bottom center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    overflow: hidden;\n    padding: 35px 0;\n    position: relative;\n    z-index: 1;\n"])),c),p=m.ZP.div(r||(r=(0,u.Z)(["\n    letter-spacing: 0;\n    padding: 77px 0;\n    text-align: center;\n    & .breadcrumb__title {\n        font-size: 38px;\n        line-height: 1.414;\n        margin-bottom: 6px;\n        font-family: ",";\n        color: #fff;\n        "," {\n            font-size: 58px;\n        }\n    }\n    & .breadcrumb {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0 0;\n        margin-bottom: 1rem;\n        list-style: none;\n        justify-content: center;\n        ol {\n            list-style: none;\n            display: flex;\n            align-items: center;\n            color: #fff;\n            padding: 0;\n            & .breadcrumb__separator {\n                margin-right: 10px;\n                margin-left: 10px;\n            }\n            .breadcrumb__link {\n                color: #fff;\n                font-size: 18px;\n                font-weight: 700;\n                margin-bottom: 8px;\n                &.breadcrumb__link__active {\n                    color: #fea444;\n                }\n            }\n        }\n    }\n"])),(0,m.R)("fonts.heading"),m.Uh.large),f=t(4382),b=function(n){n.crumbLabel;var e=n.location,t=n.title,a=n.pageContext.breadcrumb.crumbs,r=e.pathname.toLowerCase().split("/"),u=r[r.length-1].split("-");return(0,f.tZ)(d,null,(0,f.tZ)(l.Z,null,(0,f.tZ)(i.Z,null,(0,f.tZ)(s.Z,null,(0,f.tZ)(p,null,(0,f.tZ)(o.aG,{title:t,crumbs:a,crumbLabel:u.join(" "),disableLinks:["/events","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/services"]}))))))}},9207:function(n,e,t){"use strict";t.d(e,{Z:function(){return _}});t(7294);var a,r,o,l,i,s,u,m=t(6125),c=t(6848),d=t(4978),p=d.ZP.div(a||(a=(0,c.Z)(['\n    margin-bottom: 30px;\n    overflow: hidden;\n    position: relative;\n    display: flex;\n    img,\n    svg {\n        vertical-align: middle;\n    }\n    &::after {\n        bottom: -100%;\n        content: "";\n        height: 100%;\n        left: 0;\n        position: absolute;\n        width: 100%;\n        background-image: linear-gradient(\n            360deg,\n            rgba(246, 103, 57, 0.67843) 0%,\n            rgba(0, 0, 0, 0) 35%\n        );\n        transition: 0.2s;\n        -webkit-transition: 0.2s;\n        -moz-transition: 0.2s;\n        -ms-transition: 0.2s;\n        -o-transition: 0.2s;\n    }\n']))),f=d.ZP.div(r||(r=(0,c.Z)(["\n    bottom: -45px;\n    left: 0;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    z-index: 1;\n    transform: translate(-50 %, 0);\n    -webkit-transform: translate(-50 %, 0);\n    -moz-transform: translate(-50 %, 0);\n    -ms-transform: translate(-50 %, 0);\n    -o-transform: translate(-50 %, 0);\n    transition: 0.3s;\n    -webkit-transition: 0.3s;\n    -moz-transition: 0.3s;\n    -ms-transition: 0.3s;\n    -o-transition: 0.3s;\n    & a {\n        background-color: #fff;\n        border-radius: 50%;\n        color: #001d23;\n        display: inline-block;\n        font-size: 17px;\n        height: 45px;\n        line-height: 47px;\n        margin-right: 6px;\n        text-align: center;\n        width: 45px;\n        transition: 0.1s;\n        -webkit-transition: 0.1s;\n        -moz-transition: 0.1s;\n        -ms-transition: 0.1s;\n        -o-transition: 0.1s;\n    }\n"]))),b=d.ZP.div(o||(o=(0,c.Z)(["\n    margin-bottom: 30px;\n    &:hover {\n        .socialHover {\n            bottom: 30px;\n        }\n        .thumb:after {\n            bottom: 0;\n        }\n    }\n"]))),g=d.ZP.div(l||(l=(0,c.Z)([""]))),Z=d.ZP.div(i||(i=(0,c.Z)(["\n    text-align: center;\n"]))),h=d.ZP.h4(s||(s=(0,c.Z)(["\n    font-size: 24px;\n    margin-bottom: 23px;\n    transition: 0.3s;\n    -webkit-transition: 0.3s;\n    "," {\n        font-size: 20px;\n    }\n    "," {\n        font-size: 27px;\n    }\n"])),d.Uh.xlarge,d.Uh.xxlarge),x=d.ZP.h6(u||(u=(0,c.Z)(['\n    color: #909090;\n    font-family: "Roboto", sans-serif;\n    font-size: 13px;\n    font-weight: 700;\n    letter-spacing: 1px;\n    margin-bottom: 0;\n    text-transform: uppercase;\n    transition: 0.3s;\n']))),v=t(4382),_=function(n){var e=n.name,t=n.designation,a=n.images,r=(0,m.d)(a);return(0,v.tZ)(b,null,(0,v.tZ)(p,{className:"thumb"},(0,v.tZ)(m.G,{image:r,alt:e}),(0,v.tZ)(f,{className:"socialHover"},(0,v.tZ)("a",{href:"#!"},(0,v.tZ)("i",{className:"icofont-facebook"})),(0,v.tZ)("a",{href:"#!"},(0,v.tZ)("i",{className:"icofont-linkedin"})),(0,v.tZ)("a",{href:"#!"},(0,v.tZ)("i",{className:"icofont-twitter"})))),(0,v.tZ)(g,null,(0,v.tZ)(Z,null,(0,v.tZ)(h,null,(0,v.tZ)("a",{className:"member-name",href:"#/"},e)),(0,v.tZ)(x,null,t))))}},3429:function(n,e,t){"use strict";t.d(e,{Z:function(){return g}});var a,r,o=t(1191),l=t(8837),i=t(3448),s=t(567),u=t(8861),m=t(6848),c=t(4978),d=c.ZP.section(a||(a=(0,m.Z)(["\n    padding: 95px 0 70px;\n    background-color: #001d23 !important;\n    "," {\n        padding: 100px 0 118px;\n    }\n\n    .volunteer-title {\n        h2 {\n            color: #fff;\n        }\n    }\n"])),c.Uh.xlarge),p=c.ZP.div(r||(r=(0,m.Z)([""]))),f=t(9207),b=t(5444),g=function(){var n=(0,b.useStaticQuery)("2199181278").volunteerJson,e=n.section_title,t=(e.title,e.subTitle),a=(n.text,n.team);return(0,o.tZ)(d,{id:"team"},(0,o.tZ)(l.Z,null,(0,o.tZ)(i.Z,null,(0,o.tZ)(s.Z,{lg:8,className:"m-auto"},(0,o.tZ)(u.Z,{sx:{mb:"50px"},titleStyle:!0,textCenter:!0,title:"Talented Team of eHopeWarriors.",subTitle:t,className:"volunteer-title"}))),(0,o.tZ)(p,null,(0,o.tZ)(i.Z,null,a&&a.map((function(n,e){return(0,o.tZ)(s.Z,{lg:2,key:e},(0,o.tZ)(f.Z,{name:n.name,designation:n.designation,images:n.images.childrenImageSharp[0]}))}))))))}},5604:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return U}});var a,r,o,l,i,s,u,m=t(689),c=t(4615),d=t(9613),p=t(4354),f=t(8719),b=t(3936),g=t(3429),Z=(t(7294),t(8837)),h=t(3448),x=t(567),v=t(393),_=t(6848),k=t(4978),y=k.ZP.div(a||(a=(0,_.Z)(['\n    .row-gutter-20 [class*="col"] {\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n    .form-group {\n        margin-bottom: 20px;\n        .form-control {\n            background-color: transparent;\n            border: 2px solid #d7d7d7;\n            border-radius: 0;\n            box-shadow: none;\n            color: #001d23;\n            height: 55px;\n            padding: 20px 20px;\n            &.textarea {\n                margin-bottom: 39px;\n                min-height: 215px;\n            }\n        }\n    }\n    .form-control {\n        display: block;\n        width: 100%;\n        padding: 0.375rem 0.75rem;\n        font-size: 1.5rem;\n        font-weight: 400;\n        line-height: 1.5;\n        color: #212529;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid #ced4da;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        border-radius: 0.25rem;\n        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    }\n']))),N=t(4382),w=function(){return(0,N.tZ)(y,null,(0,N.tZ)("form",{className:"volunteer-form-wrapper",id:"contact-form",action:"#",method:"post"},(0,N.tZ)(h.Z,{className:"row-gutter-20"},(0,N.tZ)(x.Z,{md:4},(0,N.tZ)("div",{className:"form-group",htmlFor:"blogs_name"},(0,N.tZ)("input",{className:"form-control",type:"text",name:"con_name",placeholder:"First Name"}))),(0,N.tZ)(x.Z,{md:4},(0,N.tZ)("div",{className:"form-group",htmlFor:"blogs_name"},(0,N.tZ)("input",{className:"form-control",type:"text",name:"con_name",placeholder:"Last Name"}))),(0,N.tZ)(x.Z,{md:4},(0,N.tZ)("div",{className:"form-group",htmlFor:"blogs_name"},(0,N.tZ)("input",{className:"form-control",type:"email",name:"con_email",placeholder:"Email"}))),(0,N.tZ)(x.Z,{md:4},(0,N.tZ)("div",{className:"form-group",htmlFor:"blogs_name"},(0,N.tZ)("input",{className:"form-control",type:"text",name:"con_age",placeholder:"Age"}))),(0,N.tZ)(x.Z,{md:4},(0,N.tZ)("div",{className:"form-group",htmlFor:"blogs_name"},(0,N.tZ)("input",{className:"form-control",type:"text",name:"con_religion",placeholder:"Religion"}))),(0,N.tZ)(x.Z,{md:4},(0,N.tZ)("div",{className:"form-group",htmlFor:"blogs_name"},(0,N.tZ)("input",{className:"form-control",type:"text",name:"con_phone",placeholder:"Phone"}))),(0,N.tZ)(x.Z,{md:12},(0,N.tZ)("div",{className:"form-group mb-0",htmlFor:"blogs_name"},(0,N.tZ)("textarea",{className:"form-control textarea",name:"con_message",placeholder:"Message"}))),(0,N.tZ)(x.Z,{md:12},(0,N.tZ)("div",{className:"form-group mb-0"},(0,N.tZ)(v.Z,{type:"submit",color:"gradient"},"Submit Now"))))))},z=k.ZP.section(r||(r=(0,_.Z)([""]))),C=k.ZP.div(o||(o=(0,_.Z)(["\n    background-color: #f7f7f7;\n    padding: 70px 15px;\n    "," {\n        padding: 95px 50px 100px;\n    }\n    ",' {\n        padding: 146px 100px 150px;\n    }\n    .section-title {\n        .subtitle {\n            color: #fc6539;\n            display: inline-block;\n            font-family: "Roboto", sans-serif;\n            font-size: 18px;\n            font-weight: 700;\n            line-height: 1;\n            margin: 0 0 12px;\n            padding-left: 64px;\n            position: relative;\n            &::after {\n                background-color: #001d23;\n                content: "";\n                height: 3px;\n                left: 0;\n                position: absolute;\n                top: calc(50% - 1.5px);\n                width: 43px;\n            }\n        }\n        .title {\n            margin-bottom: 17px;\n            font-size: 26px;\n            line-height: 1.25;\n            & span {\n                background: none;\n                color: transparent;\n                -webkit-text-stroke-width: 1px;\n                -webkit-text-stroke-color: #939697;\n                -webkit-text-fill-color: unset;\n            }\n            '," {\n                font-size: 30px;\n            }\n            "," {\n                font-size: 40px;\n            }\n            "," {\n                font-size: 50px;\n                padding-right: 110px;\n            }\n            "," {\n                font-size: 60px;\n                padding-right: 110px;\n            }\n        }\n    }\n"])),k.Uh.medium,k.Uh.large,k.Uh.small,k.Uh.medium,k.Uh.large,k.Uh.xlarge),L=k.ZP.div(l||(l=(0,_.Z)(["\n    margin-bottom: 44px;\n"]))),P=k.ZP.h5(i||(i=(0,_.Z)(['\n    color: #fc6539;\n    display: inline-block;\n    font-family: "Roboto", sans-serif;\n    font-size: 18px;\n    font-weight: 700;\n    line-height: 1;\n    margin: 0 0 12px;\n    padding-left: 64px;\n    position: relative;\n    &::after {\n        background-color: #001d23;\n        content: "";\n        height: 3px;\n        left: 0;\n        position: absolute;\n        top: calc(50% - 1.5px);\n        width: 43px;\n    }\n']))),E=k.ZP.h2(s||(s=(0,_.Z)(["\n    margin-bottom: 17px;\n    font-size: 26px;\n    line-height: 1.25;\n    & span {\n        background: none;\n        color: transparent;\n        -webkit-text-stroke-width: 1px;\n        -webkit-text-stroke-color: #939697;\n        -webkit-text-fill-color: unset;\n    }\n    "," {\n        font-size: 30px;\n    }\n    "," {\n        font-size: 40px;\n    }\n    "," {\n        font-size: 50px;\n        padding-right: 110px;\n    }\n    "," {\n        font-size: 60px;\n        padding-right: 110px;\n    }\n"])),k.Uh.small,k.Uh.medium,k.Uh.large,k.Uh.xlarge),B=k.ZP.p(u||(u=(0,_.Z)([""]))),S=function(){return(0,N.tZ)(z,null,(0,N.tZ)(Z.Z,null,(0,N.tZ)(h.Z,null,(0,N.tZ)(x.Z,{lg:12},(0,N.tZ)(C,null,(0,N.tZ)(L,null,(0,N.tZ)(P,null,"Join With Us"),(0,N.tZ)(E,null,"If You Interest! You Can Join With Us"," ",(0,N.tZ)("span",null,"As A Volunteer.")),(0,N.tZ)(B,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500 an when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but electronic typesetting, remaining essentially unchanged.")),(0,N.tZ)(w,null))))))},U=function(n){var e=n.location,t=n.pageContext;return(0,N.tZ)(m.Z,null,(0,N.tZ)(c.Z,{title:"Volunteer",pathname:"/"}),(0,N.tZ)(b.Z,{pageContext:t,location:e,title:"Volunteer"}),(0,N.tZ)(S,null),(0,N.tZ)(g.Z,null),(0,N.tZ)(f.Z,null),(0,N.tZ)(p.Z,null),(0,N.tZ)(d.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-volunteer-js-5da77de8ad190f434d02.js.map