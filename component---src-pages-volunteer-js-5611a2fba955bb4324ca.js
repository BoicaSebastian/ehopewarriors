(self.webpackChunkeHopeWarriors=self.webpackChunkeHopeWarriors||[]).push([[755],{9009:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0,e.default=void 0;var r=a(t(7294)),l=a(t(8384)),o=a(t(4030)),i=t(7791),s=function(n){return r.default.useContext(i.OptionsContext).useAutoGen?r.default.createElement(l.default,n):r.default.createElement(o.default,n)};e.default=s},8384:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0,e.default=void 0;var r=a(t(4362)),l=a(t(3246)),o=a(t(7294)),i=a(t(5697)),s=t(5444),u=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],m=function(n){var e=n.title,t=n.crumbs,a=n.crumbLabel,i=n.crumbSeparator,m=n.disableLinks,d=n.hiddenCrumbs,c=(0,l.default)(n,u);return o.default.createElement(o.default.Fragment,null,e&&o.default.createElement("span",{className:"breadcrumb__title"},e),o.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},o.default.createElement("ol",{className:"breadcrumb__list"},t.map((function(n,e){return d.includes(n.pathname)?null:o.default.createElement(o.default.Fragment,{key:e+"-"+n.pathname},!m.includes(n.pathname)&&o.default.createElement("li",{className:"breadcrumb__list__item"},o.default.createElement(s.Link,(0,r.default)({to:n.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":e===t.length-1?"page":null},c),a&&e===t.length-1?a:n.crumbLabel)),m.includes(n.pathname)&&o.default.createElement("li",{className:"breadcrumb__list__item"},o.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},c),a&&e===t.length-1?a:n.crumbLabel)),e===t.length-1?null:o.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},i))})))))};m.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},m.propTypes={title:i.default.string,crumbSeparator:i.default.oneOfType([i.default.string,i.default.element]),crumbs:i.default.arrayOf(i.default.shape({location:i.default.shape(),pathname:i.default.string.isRequired})).isRequired,crumbLabel:i.default.string,disableLinks:i.default.arrayOf(i.default.string),hiddenCrumbs:i.default.arrayOf(i.default.string)};var d=m;e.default=d},4030:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0,e.default=void 0;var r=a(t(4362)),l=a(t(3246)),o=a(t(7294)),i=a(t(5697)),s=t(5444),u=t(7791),m=a(t(7147)),d=["title","location","crumbLabel","crumbSeparator"],c=function(n){var e=n.title,t=n.location,a=n.crumbLabel,i=n.crumbSeparator,c=(0,l.default)(n,d),p=o.default.useContext(u.OptionsContext).usePathPrefix,f=(0,m.default)({location:(0,r.default)({},t,{pathname:p?t.pathname.replace(new RegExp("^"+p),""):t.pathname}),crumbLabel:a,crumbSeparator:i}).crumbs,b=void 0===f?[]:f;return o.default.createElement(o.default.Fragment,null,e&&o.default.createElement("span",{className:"breadcrumb__title"},e),o.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},o.default.createElement("ol",{className:"breadcrumb__list"},b.map((function(n,e){return o.default.createElement("li",{className:"breadcrumb__item",key:e},o.default.createElement(s.Link,(0,r.default)({to:n.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":e===b.length-1?"page":null},c),n.crumbLabel),e===b.length-1?null:o.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},n.crumbSeparator))})))))};c.defaultProps={title:"",crumbSeparator:" / "},c.propTypes={location:i.default.shape().isRequired,crumbLabel:i.default.string.isRequired,title:i.default.string,crumbSeparator:i.default.string};var p=c;e.default=p},7935:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0;var r=a(t(9009));e.Breadcrumb=r.default;var l=a(t(8384));e.AutoGenCrumb=l.default;var o=t(1492);e.BreadcrumbContext=o.BreadcrumbContext,e.BreadcrumbConsumer=o.BreadcrumbConsumer,e.BreadcrumbProvider=o.BreadcrumbProvider;var i=a(t(7147));e.useBreadcrumb=i.default},7147:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0,e.default=void 0;var r=a(t(7294)),l=t(1492),o=function(n){var e=n.location,t=n.crumbLabel,a=n.crumbSeparator,o=r.default.useContext(l.BreadcrumbContext),i=o.crumbs,s=o.updateCrumbs;return r.default.useEffect((function(){s({location:e,crumbLabel:t,crumbSeparator:a})}),[e,t,a,s]),{crumbs:i}};e.default=o},5231:function(n,e,t){"use strict";var a=t(7935);e.aG=a.Breadcrumb,a.BreadcrumbContext,a.BreadcrumbConsumer,a.BreadcrumbProvider,a.useBreadcrumb,a.AutoGenCrumb},3936:function(n,e,t){"use strict";t.d(e,{Z:function(){return b}});var a,r,l=t(5231),o=t(8837),i=t(386),s=t(567),u=t(6848),m=t(4978),d=t.p+"static/bg-page-title-2c6bb5db347e7d89cb7d7664a447a5f0.jpg",c=m.ZP.div(a||(a=(0,u.Z)(["\n    background-image: url(",");\n    background-position: bottom center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    overflow: hidden;\n    padding: 35px 0;\n    position: relative;\n    z-index: 1;\n"])),d),p=m.ZP.div(r||(r=(0,u.Z)(["\n    letter-spacing: 0;\n    padding: 77px 0;\n    text-align: center;\n    & .breadcrumb__title {\n        font-size: 38px;\n        line-height: 1.414;\n        margin-bottom: 6px;\n        font-family: ",";\n        color: #fff;\n        "," {\n            font-size: 58px;\n        }\n    }\n    & .breadcrumb {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0 0;\n        margin-bottom: 1rem;\n        list-style: none;\n        justify-content: center;\n        ol {\n            list-style: none;\n            display: flex;\n            align-items: center;\n            color: #fff;\n            padding: 0;\n            & .breadcrumb__separator {\n                margin-right: 10px;\n                margin-left: 10px;\n            }\n            .breadcrumb__link {\n                color: #fff;\n                font-size: 18px;\n                font-weight: 700;\n                margin-bottom: 8px;\n                &.breadcrumb__link__active {\n                    color: #fea444;\n                }\n            }\n        }\n    }\n"])),(0,m.R)("fonts.heading"),m.Uh.large),f=t(6958),b=function(n){n.crumbLabel;var e=n.location,t=n.title,a=n.pageContext.breadcrumb.crumbs,r=e.pathname.toLowerCase().split("/"),u=r[r.length-1].split("-");return(0,f.tZ)(c,null,(0,f.tZ)(o.Z,null,(0,f.tZ)(i.Z,null,(0,f.tZ)(s.Z,null,(0,f.tZ)(p,null,(0,f.tZ)(l.aG,{title:t,crumbs:a,crumbLabel:u.join(" "),disableLinks:["/events","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/services"]}))))))}},9207:function(n,e,t){"use strict";t.d(e,{Z:function(){return _}});t(7294);var a,r,l,o,i,s,u,m=t(6125),d=t(6848),c=t(4978),p=c.ZP.div(a||(a=(0,d.Z)(['\n    margin-bottom: 30px;\n    overflow: hidden;\n    position: relative;\n    display: flex;\n    img,\n    svg {\n        vertical-align: middle;\n    }\n    &::after {\n        bottom: -100%;\n        content: "";\n        height: 100%;\n        left: 0;\n        position: absolute;\n        width: 100%;\n        background-image: linear-gradient(\n            360deg,\n            rgba(246, 103, 57, 0.67843) 0%,\n            rgba(0, 0, 0, 0) 35%\n        );\n        transition: 0.2s;\n        -webkit-transition: 0.2s;\n        -moz-transition: 0.2s;\n        -ms-transition: 0.2s;\n        -o-transition: 0.2s;\n    }\n']))),f=c.ZP.div(r||(r=(0,d.Z)(["\n    bottom: -45px;\n    left: 0;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    z-index: 1;\n    transform: translate(-50 %, 0);\n    -webkit-transform: translate(-50 %, 0);\n    -moz-transform: translate(-50 %, 0);\n    -ms-transform: translate(-50 %, 0);\n    -o-transform: translate(-50 %, 0);\n    transition: 0.3s;\n    -webkit-transition: 0.3s;\n    -moz-transition: 0.3s;\n    -ms-transition: 0.3s;\n    -o-transition: 0.3s;\n    & a {\n        background-color: #fff;\n        border-radius: 50%;\n        color: #001d23;\n        display: inline-block;\n        font-size: 17px;\n        height: 45px;\n        line-height: 47px;\n        margin-right: 6px;\n        text-align: center;\n        width: 45px;\n        transition: 0.1s;\n        -webkit-transition: 0.1s;\n        -moz-transition: 0.1s;\n        -ms-transition: 0.1s;\n        -o-transition: 0.1s;\n    }\n"]))),b=c.ZP.div(l||(l=(0,d.Z)(["\n    margin-bottom: 30px;\n    &:hover {\n        .socialHover {\n            bottom: 30px;\n        }\n        .thumb:after {\n            bottom: 0;\n        }\n    }\n"]))),g=c.ZP.div(o||(o=(0,d.Z)([""]))),Z=c.ZP.div(i||(i=(0,d.Z)(["\n    text-align: center;\n"]))),h=c.ZP.h4(s||(s=(0,d.Z)(["\n    font-size: 24px;\n    margin-bottom: 23px;\n    transition: 0.3s;\n    -webkit-transition: 0.3s;\n    "," {\n        font-size: 20px;\n    }\n    "," {\n        font-size: 27px;\n    }\n"])),c.Uh.xlarge,c.Uh.xxlarge),x=c.ZP.h6(u||(u=(0,d.Z)(['\n    color: #909090;\n    font-family: "Roboto", sans-serif;\n    font-size: 13px;\n    font-weight: 700;\n    letter-spacing: 1px;\n    margin-bottom: 0;\n    text-transform: uppercase;\n    transition: 0.3s;\n']))),v=t(6958),_=function(n){var e=n.name,t=n.designation,a=n.images,r=(0,m.d)(a);return(0,v.tZ)(b,null,(0,v.tZ)(p,{className:"thumb"},(0,v.tZ)(m.G,{image:r,alt:e}),(0,v.tZ)(f,{className:"socialHover"},(0,v.tZ)("a",{href:"#!"},(0,v.tZ)("i",{className:"icofont-facebook"})),(0,v.tZ)("a",{href:"#!"},(0,v.tZ)("i",{className:"icofont-skype"})),(0,v.tZ)("a",{href:"#!"},(0,v.tZ)("i",{className:"icofont-twitter"})))),(0,v.tZ)(g,null,(0,v.tZ)(Z,null,(0,v.tZ)(h,null,(0,v.tZ)("a",{href:"#/"},e)),(0,v.tZ)(x,null,t))))}},5782:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return O}});var a,r,l,o,i,s,u,m,d,c=t(3603),p=t(6143),f=t(9613),b=t(4354),g=t(8719),Z=t(3936),h=t(1191),x=t(8837),v=t(386),_=t(567),k=t(8861),y=t(6848),w=t(4978),N=w.ZP.section(a||(a=(0,y.Z)(["\n    padding: 95px 0 70px;\n    "," {\n        padding: 150px 0 118px;\n    }\n"])),w.Uh.xlarge),z=w.ZP.div(r||(r=(0,y.Z)([""]))),C=t(9207),L=t(5444),P=function(){var n=(0,L.useStaticQuery)("2199181278").volunteerJson,e=n.section_title,t=(e.title,e.subTitle),a=(n.text,n.team);return(0,h.tZ)(N,null,(0,h.tZ)(x.Z,null,(0,h.tZ)(v.Z,null,(0,h.tZ)(_.Z,{lg:8,className:"m-auto"},(0,h.tZ)(k.Z,{sx:{mb:"50px"},titleStyle:!0,textCenter:!0,title:"Talented Volunteer Team of Givest.",subTitle:t}))),(0,h.tZ)(z,null,(0,h.tZ)(v.Z,null,a&&a.map((function(n,e){return(0,h.tZ)(_.Z,{lg:4,key:e},(0,h.tZ)(C.Z,{name:n.name,designation:n.designation,images:n.images.childrenImageSharp[0]}))}))))))},E=(t(7294),t(393)),B=w.ZP.div(l||(l=(0,y.Z)(['\n    .row-gutter-20 [class*="col"] {\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n    .form-group {\n        margin-bottom: 20px;\n        .form-control {\n            background-color: transparent;\n            border: 2px solid #d7d7d7;\n            border-radius: 0;\n            box-shadow: none;\n            color: #001d23;\n            height: 55px;\n            padding: 20px 20px;\n            &.textarea {\n                margin-bottom: 39px;\n                min-height: 215px;\n            }\n        }\n    }\n    .form-control {\n        display: block;\n        width: 100%;\n        padding: 0.375rem 0.75rem;\n        font-size: 1.5rem;\n        font-weight: 400;\n        line-height: 1.5;\n        color: #212529;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid #ced4da;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        border-radius: 0.25rem;\n        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    }\n']))),S=t(6958),U=function(){return(0,S.tZ)(B,null,(0,S.tZ)("form",{className:"volunteer-form-wrapper",id:"contact-form",action:"#",method:"post"},(0,S.tZ)(v.Z,{className:"row-gutter-20"},(0,S.tZ)(_.Z,{md:4},(0,S.tZ)("div",{className:"form-group",htmlFor:"blogs_name"},(0,S.tZ)("input",{className:"form-control",type:"text",name:"con_name",placeholder:"First Name"}))),(0,S.tZ)(_.Z,{md:4},(0,S.tZ)("div",{className:"form-group",htmlFor:"blogs_name"},(0,S.tZ)("input",{className:"form-control",type:"text",name:"con_name",placeholder:"Last Name"}))),(0,S.tZ)(_.Z,{md:4},(0,S.tZ)("div",{className:"form-group",htmlFor:"blogs_name"},(0,S.tZ)("input",{className:"form-control",type:"email",name:"con_email",placeholder:"Email"}))),(0,S.tZ)(_.Z,{md:4},(0,S.tZ)("div",{className:"form-group",htmlFor:"blogs_name"},(0,S.tZ)("input",{className:"form-control",type:"text",name:"con_age",placeholder:"Age"}))),(0,S.tZ)(_.Z,{md:4},(0,S.tZ)("div",{className:"form-group",htmlFor:"blogs_name"},(0,S.tZ)("input",{className:"form-control",type:"text",name:"con_religion",placeholder:"Religion"}))),(0,S.tZ)(_.Z,{md:4},(0,S.tZ)("div",{className:"form-group",htmlFor:"blogs_name"},(0,S.tZ)("input",{className:"form-control",type:"text",name:"con_phone",placeholder:"Phone"}))),(0,S.tZ)(_.Z,{md:12},(0,S.tZ)("div",{className:"form-group mb-0",htmlFor:"blogs_name"},(0,S.tZ)("textarea",{className:"form-control textarea",name:"con_message",placeholder:"Message"}))),(0,S.tZ)(_.Z,{md:12},(0,S.tZ)("div",{className:"form-group mb-0"},(0,S.tZ)(E.Z,{type:"submit",color:"gradient"},"Submit Now"))))))},F=w.ZP.section(o||(o=(0,y.Z)([""]))),R=w.ZP.div(i||(i=(0,y.Z)(["\n    background-color: #f7f7f7;\n    padding: 70px 15px;\n    "," {\n        padding: 95px 50px 100px;\n    }\n    ",' {\n        padding: 146px 100px 150px;\n    }\n    .section-title {\n        .subtitle {\n            color: #fc6539;\n            display: inline-block;\n            font-family: "Roboto", sans-serif;\n            font-size: 18px;\n            font-weight: 700;\n            line-height: 1;\n            margin: 0 0 12px;\n            padding-left: 64px;\n            position: relative;\n            &::after {\n                background-color: #001d23;\n                content: "";\n                height: 3px;\n                left: 0;\n                position: absolute;\n                top: calc(50% - 1.5px);\n                width: 43px;\n            }\n        }\n        .title {\n            margin-bottom: 17px;\n            font-size: 26px;\n            line-height: 1.25;\n            & span {\n                background: none;\n                color: transparent;\n                -webkit-text-stroke-width: 1px;\n                -webkit-text-stroke-color: #939697;\n                -webkit-text-fill-color: unset;\n            }\n            '," {\n                font-size: 30px;\n            }\n            "," {\n                font-size: 40px;\n            }\n            "," {\n                font-size: 50px;\n                padding-right: 110px;\n            }\n            "," {\n                font-size: 60px;\n                padding-right: 110px;\n            }\n        }\n    }\n"])),w.Uh.medium,w.Uh.large,w.Uh.small,w.Uh.medium,w.Uh.large,w.Uh.xlarge),G=w.ZP.div(s||(s=(0,y.Z)(["\n    margin-bottom: 44px;\n"]))),T=w.ZP.h5(u||(u=(0,y.Z)(['\n    color: #fc6539;\n    display: inline-block;\n    font-family: "Roboto", sans-serif;\n    font-size: 18px;\n    font-weight: 700;\n    line-height: 1;\n    margin: 0 0 12px;\n    padding-left: 64px;\n    position: relative;\n    &::after {\n        background-color: #001d23;\n        content: "";\n        height: 3px;\n        left: 0;\n        position: absolute;\n        top: calc(50% - 1.5px);\n        width: 43px;\n    }\n']))),A=w.ZP.h2(m||(m=(0,y.Z)(["\n    margin-bottom: 17px;\n    font-size: 26px;\n    line-height: 1.25;\n    & span {\n        background: none;\n        color: transparent;\n        -webkit-text-stroke-width: 1px;\n        -webkit-text-stroke-color: #939697;\n        -webkit-text-fill-color: unset;\n    }\n    "," {\n        font-size: 30px;\n    }\n    "," {\n        font-size: 40px;\n    }\n    "," {\n        font-size: 50px;\n        padding-right: 110px;\n    }\n    "," {\n        font-size: 60px;\n        padding-right: 110px;\n    }\n"])),w.Uh.small,w.Uh.medium,w.Uh.large,w.Uh.xlarge),I=w.ZP.p(d||(d=(0,y.Z)([""]))),M=function(){return(0,S.tZ)(F,null,(0,S.tZ)(x.Z,null,(0,S.tZ)(v.Z,null,(0,S.tZ)(_.Z,{lg:12},(0,S.tZ)(R,null,(0,S.tZ)(G,null,(0,S.tZ)(T,null,"Join With Us"),(0,S.tZ)(A,null,"If You Interest! You Can Join With Us"," ",(0,S.tZ)("span",null,"As A Volunteer.")),(0,S.tZ)(I,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500 an when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but electronic typesetting, remaining essentially unchanged.")),(0,S.tZ)(U,null))))))},O=function(n){var e=n.location,t=n.pageContext;return(0,S.tZ)(c.Z,null,(0,S.tZ)(p.Z,{title:"Volunteer",pathname:"/"}),(0,S.tZ)(Z.Z,{pageContext:t,location:e,title:"Volunteer"}),(0,S.tZ)(M,null),(0,S.tZ)(P,null),(0,S.tZ)(g.Z,null),(0,S.tZ)(b.Z,null),(0,S.tZ)(f.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-volunteer-js-5611a2fba955bb4324ca.js.map