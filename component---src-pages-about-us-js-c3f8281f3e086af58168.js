(self.webpackChunkeHopeWarriors=self.webpackChunkeHopeWarriors||[]).push([[539],{4240:function(n){"use strict";n.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f87838","images":{"fallback":{"src":"/static/1a5d2daad5f2563caa9e04434faaa55f/223a7/3.png","srcSet":"/static/1a5d2daad5f2563caa9e04434faaa55f/1a3f4/3.png 55w,\\n/static/1a5d2daad5f2563caa9e04434faaa55f/8259c/3.png 110w,\\n/static/1a5d2daad5f2563caa9e04434faaa55f/223a7/3.png 219w","sizes":"(min-width: 219px) 219px, 100vw"},"sources":[{"srcSet":"/static/1a5d2daad5f2563caa9e04434faaa55f/00b6b/3.webp 55w,\\n/static/1a5d2daad5f2563caa9e04434faaa55f/883a7/3.webp 110w,\\n/static/1a5d2daad5f2563caa9e04434faaa55f/0bb00/3.webp 219w","type":"image/webp","sizes":"(min-width: 219px) 219px, 100vw"}]},"width":219,"height":197.00000000000003}')},9009:function(n,t,e){"use strict";var a=e(8580);t.__esModule=!0,t.default=void 0;var r=a(e(7294)),i=a(e(8384)),l=a(e(4030)),o=e(7791),s=function(n){return r.default.useContext(o.OptionsContext).useAutoGen?r.default.createElement(i.default,n):r.default.createElement(l.default,n)};t.default=s},8384:function(n,t,e){"use strict";var a=e(8580);t.__esModule=!0,t.default=void 0;var r=a(e(4362)),i=a(e(3246)),l=a(e(7294)),o=a(e(5697)),s=e(5444),u=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],c=function(n){var t=n.title,e=n.crumbs,a=n.crumbLabel,o=n.crumbSeparator,c=n.disableLinks,d=n.hiddenCrumbs,m=(0,i.default)(n,u);return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement("span",{className:"breadcrumb__title"},t),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},e.map((function(n,t){return d.includes(n.pathname)?null:l.default.createElement(l.default.Fragment,{key:t+"-"+n.pathname},!c.includes(n.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement(s.Link,(0,r.default)({to:n.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===e.length-1?"page":null},m),a&&t===e.length-1?a:n.crumbLabel)),c.includes(n.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},m),a&&t===e.length-1?a:n.crumbLabel)),t===e.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},o))})))))};c.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},c.propTypes={title:o.default.string,crumbSeparator:o.default.oneOfType([o.default.string,o.default.element]),crumbs:o.default.arrayOf(o.default.shape({location:o.default.shape(),pathname:o.default.string.isRequired})).isRequired,crumbLabel:o.default.string,disableLinks:o.default.arrayOf(o.default.string),hiddenCrumbs:o.default.arrayOf(o.default.string)};var d=c;t.default=d},4030:function(n,t,e){"use strict";var a=e(8580);t.__esModule=!0,t.default=void 0;var r=a(e(4362)),i=a(e(3246)),l=a(e(7294)),o=a(e(5697)),s=e(5444),u=e(7791),c=a(e(7147)),d=["title","location","crumbLabel","crumbSeparator"],m=function(n){var t=n.title,e=n.location,a=n.crumbLabel,o=n.crumbSeparator,m=(0,i.default)(n,d),p=l.default.useContext(u.OptionsContext).usePathPrefix,f=(0,c.default)({location:(0,r.default)({},e,{pathname:p?e.pathname.replace(new RegExp("^"+p),""):e.pathname}),crumbLabel:a,crumbSeparator:o}).crumbs,b=void 0===f?[]:f;return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement("span",{className:"breadcrumb__title"},t),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},b.map((function(n,t){return l.default.createElement("li",{className:"breadcrumb__item",key:t},l.default.createElement(s.Link,(0,r.default)({to:n.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===b.length-1?"page":null},m),n.crumbLabel),t===b.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},n.crumbSeparator))})))))};m.defaultProps={title:"",crumbSeparator:" / "},m.propTypes={location:o.default.shape().isRequired,crumbLabel:o.default.string.isRequired,title:o.default.string,crumbSeparator:o.default.string};var p=m;t.default=p},7935:function(n,t,e){"use strict";var a=e(8580);t.__esModule=!0;var r=a(e(9009));t.Breadcrumb=r.default;var i=a(e(8384));t.AutoGenCrumb=i.default;var l=e(1492);t.BreadcrumbContext=l.BreadcrumbContext,t.BreadcrumbConsumer=l.BreadcrumbConsumer,t.BreadcrumbProvider=l.BreadcrumbProvider;var o=a(e(7147));t.useBreadcrumb=o.default},7147:function(n,t,e){"use strict";var a=e(8580);t.__esModule=!0,t.default=void 0;var r=a(e(7294)),i=e(1492),l=function(n){var t=n.location,e=n.crumbLabel,a=n.crumbSeparator,l=r.default.useContext(i.BreadcrumbContext),o=l.crumbs,s=l.updateCrumbs;return r.default.useEffect((function(){s({location:t,crumbLabel:e,crumbSeparator:a})}),[t,e,a,s]),{crumbs:o}};t.default=l},5231:function(n,t,e){"use strict";var a=e(7935);t.aG=a.Breadcrumb,a.BreadcrumbContext,a.BreadcrumbConsumer,a.BreadcrumbProvider,a.useBreadcrumb,a.AutoGenCrumb},3936:function(n,t,e){"use strict";e.d(t,{Z:function(){return b}});var a,r,i=e(5231),l=e(8837),o=e(3448),s=e(567),u=e(6848),c=e(4978),d=e.p+"static/bg-page-title-2c6bb5db347e7d89cb7d7664a447a5f0.jpg",m=c.ZP.div(a||(a=(0,u.Z)(["\n    background-image: url(",");\n    background-position: bottom center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    overflow: hidden;\n    padding: 35px 0;\n    position: relative;\n    z-index: 1;\n"])),d),p=c.ZP.div(r||(r=(0,u.Z)(["\n    letter-spacing: 0;\n    padding: 77px 0;\n    text-align: center;\n    & .breadcrumb__title {\n        font-size: 38px;\n        line-height: 1.414;\n        margin-bottom: 6px;\n        font-family: ",";\n        color: #fff;\n        "," {\n            font-size: 58px;\n        }\n    }\n    & .breadcrumb {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0 0;\n        margin-bottom: 1rem;\n        list-style: none;\n        justify-content: center;\n        ol {\n            list-style: none;\n            display: flex;\n            align-items: center;\n            color: #fff;\n            padding: 0;\n            & .breadcrumb__separator {\n                margin-right: 10px;\n                margin-left: 10px;\n            }\n            .breadcrumb__link {\n                color: #fff;\n                font-size: 18px;\n                font-weight: 700;\n                margin-bottom: 8px;\n                &.breadcrumb__link__active {\n                    color: #fea444;\n                }\n            }\n        }\n    }\n"])),(0,c.R)("fonts.heading"),c.Uh.large),f=e(4382),b=function(n){n.crumbLabel;var t=n.location,e=n.title,a=n.pageContext.breadcrumb.crumbs,r=t.pathname.toLowerCase().split("/"),u=r[r.length-1].split("-");return(0,f.tZ)(m,null,(0,f.tZ)(l.Z,null,(0,f.tZ)(o.Z,null,(0,f.tZ)(s.Z,null,(0,f.tZ)(p,null,(0,f.tZ)(i.aG,{title:e,crumbs:a,crumbLabel:u.join(" "),disableLinks:["/events","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/services"]}))))))}},8861:function(n,t,e){"use strict";e.d(t,{Z:function(){return g}});e(7294);var a,r,i,l,o=e(6125),s=e(6848),u=e(4978),c=u.ZP.div(a||(a=(0,s.Z)(["\n    position: relative;\n"]))),d=u.ZP.h5(r||(r=(0,s.Z)(["\n    color: ",";\n    display: inline-block;\n    font-family: ",";\n    font-size: ",";\n    font-weight: 700;\n    line-height: 1;\n    margin: 0 0 12px;\n    padding-left: 64px;\n    position: relative;\n\n    &:after {\n        background-color: ",';\n        content: "";\n        height: 3px;\n        left: 0;\n        position: absolute;\n        top: calc(50% - 1.5px);\n        width: 43px;\n    }\n    &.line-white-color {\n        color: ',";\n        z-index: 1;\n        &:after {\n            background-color: ",";\n        }\n    }\n"])),(0,u.R)("colors.primary"),(0,u.R)("fonts.body"),(0,u.R)("fontSize.h5.0"),(0,u.R)("colors.primary"),(0,u.R)("colors.white"),(0,u.R)("colors.white")),m=u.ZP.div(i||(i=(0,s.Z)(["\n    position: relative;\n\n    .img-shape {\n        left: 50%;\n        width: 90px;\n        position: absolute !important;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        -webkit-transform: translate(-50%, -50%);\n        -moz-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n        -o-transform: translate(-50%, -50%);\n        "," {\n            width: 120px;\n        }\n        "," {\n            width: 140px;\n        }\n        "," {\n            width: 185px;\n        }\n    }\n"])),u.Uh.small,u.Uh.medium,u.Uh.large),p=u.ZP.h2(l||(l=(0,s.Z)(["\n    font-size: ",";\n    "," {\n        font-size: ",";\n    }\n    "," {\n        font-size: ",";\n    }\n    "," {\n        font-size: ",";\n    }\n    line-height: 1.25;\n    margin-bottom: 0;\n    margin-top: 0;\n    position: relative;\n    z-index: 1;\n    span {\n        background: #fea444;\n        background: ",";\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n    }\n    &.title-style {\n        margin-top: 39px;\n        position: relative;\n        z-index: 1;\n    }\n"])),(0,u.R)("fontSize.h2.0"),u.Uh.small,(0,u.R)("fontSize.h2.1"),u.Uh.medium,(0,u.R)("fontSize.h2.2"),u.Uh.large,(0,u.R)("fontSize.h2.3"),(0,u.R)("colors.gradient")),f=e(4382),b=function(n){var t=n.subTitle,a=n.title,r=n.textCenter,i=n.textWhate,l=n.titleStyle,s=n.showImage,u=n.className,b=n.sx,g=n.texttheme;return(0,f.tZ)(c,{className:u+" "+(r?"text-center":"")+" "+(i?"text-white":""),sx:b},t&&(0,f.tZ)(d,{className:"subtitle "+(g?"line-white-color":"line-theme-color")+" "},t),(0,f.tZ)(m,null,(0,f.tZ)(p,{className:"title "+(l?"title-style":"")+" "+(i?"text-white":""),dangerouslySetInnerHTML:{__html:a}}),s&&(0,f.tZ)(o.S,{className:"img-shape",src:"../../data/images/shape/3.png",alt:"eHopeWarriors-HasTech",__imageData:e(4240)})))};b.defaultProps={showImage:!0};var g=b},4027:function(n,t,e){"use strict";e.d(t,{Z:function(){return E}});var a,r,i,l,o,s,u,c,d,m=e(1191),p=e(8837),f=e(3448),b=e(567),g=e(8861),x=e(6848),h=e(4978),Z=h.ZP.section(a||(a=(0,x.Z)(["\n    padding: 95px 0 70px;\n    background-color: #001d23 !important;\n    "," {\n        padding: 100px 0 118px;\n    }\n\n    .volunteer-title {\n        h2 {\n            color: #fff;\n        }\n    }\n"])),h.Uh.xlarge),v=h.ZP.div(r||(r=(0,x.Z)([""]))),w=(e(7294),e(6125)),_=h.ZP.div(i||(i=(0,x.Z)(['\n    margin-bottom: 30px;\n    overflow: hidden;\n    position: relative;\n    display: flex;\n    img,\n    svg {\n        vertical-align: middle;\n    }\n    &::after {\n        bottom: -100%;\n        content: "";\n        height: 100%;\n        left: 0;\n        position: absolute;\n        width: 100%;\n        background-image: linear-gradient(\n            360deg,\n            rgba(246, 103, 57, 0.67843) 0%,\n            rgba(0, 0, 0, 0) 35%\n        );\n        transition: 0.2s;\n        -webkit-transition: 0.2s;\n        -moz-transition: 0.2s;\n        -ms-transition: 0.2s;\n        -o-transition: 0.2s;\n    }\n']))),k=h.ZP.div(l||(l=(0,x.Z)(["\n    bottom: -45px;\n    left: 0;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    z-index: 1;\n    transform: translate(-50 %, 0);\n    -webkit-transform: translate(-50 %, 0);\n    -moz-transform: translate(-50 %, 0);\n    -ms-transform: translate(-50 %, 0);\n    -o-transform: translate(-50 %, 0);\n    transition: 0.3s;\n    -webkit-transition: 0.3s;\n    -moz-transition: 0.3s;\n    -ms-transition: 0.3s;\n    -o-transition: 0.3s;\n    & a {\n        background-color: #fff;\n        border-radius: 50%;\n        color: #001d23;\n        display: inline-block;\n        font-size: 17px;\n        height: 45px;\n        line-height: 47px;\n        margin-right: 6px;\n        text-align: center;\n        width: 45px;\n        transition: 0.1s;\n        -webkit-transition: 0.1s;\n        -moz-transition: 0.1s;\n        -ms-transition: 0.1s;\n        -o-transition: 0.1s;\n    }\n"]))),z=h.ZP.div(o||(o=(0,x.Z)(["\n    margin-bottom: 30px;\n    &:hover {\n        .socialHover {\n            bottom: 30px;\n        }\n        .thumb:after {\n            bottom: 0;\n        }\n    }\n"]))),N=h.ZP.div(s||(s=(0,x.Z)([""]))),y=h.ZP.div(u||(u=(0,x.Z)(["\n    text-align: center;\n"]))),P=h.ZP.h4(c||(c=(0,x.Z)(["\n    font-size: 24px;\n    margin-bottom: 23px;\n    transition: 0.3s;\n    -webkit-transition: 0.3s;\n    "," {\n        font-size: 20px;\n    }\n    "," {\n        font-size: 27px;\n    }\n"])),h.Uh.xlarge,h.Uh.xxlarge),C=h.ZP.h6(d||(d=(0,x.Z)(['\n    color: #909090;\n    font-family: "Roboto", sans-serif;\n    font-size: 13px;\n    font-weight: 700;\n    letter-spacing: 1px;\n    margin-bottom: 0;\n    text-transform: uppercase;\n    transition: 0.3s;\n']))),S=e(4382),L=function(n){var t=n.firstName,e=n.lastName,a=n.designation,r=n.images,i=n.instagram,l=n.linkedin,o=n.twitter,s=(0,w.d)(r);return(0,S.tZ)(z,null,(0,S.tZ)(_,{className:"thumb"},(0,S.tZ)(w.G,{image:s,alt:t}),(0,S.tZ)(k,{className:"socialHover"},(0,S.tZ)("a",{href:i,target:"_blank"},(0,S.tZ)("i",{className:"icofont-instagram"})),l&&(0,S.tZ)("a",{href:l,target:"_blank"},(0,S.tZ)("i",{className:"icofont-linkedin"})),o&&(0,S.tZ)("a",{href:o,target:"_blank"},(0,S.tZ)("i",{className:"icofont-twitter"})))),(0,S.tZ)(N,null,(0,S.tZ)(y,null,(0,S.tZ)(P,null,(0,S.tZ)("a",{className:"member-name",href:"#/",style:{display:"block"}},t),(0,S.tZ)("a",{className:"member-name",href:"#/"},e)),(0,S.tZ)(C,null,a))))},U=e(5444),E=function(){var n=(0,U.useStaticQuery)("1296820262").volunteerJson,t=n.section_title,e=(t.title,t.subTitle),a=(n.text,n.team);return(0,m.tZ)(Z,{id:"team"},(0,m.tZ)(p.Z,null,(0,m.tZ)(f.Z,null,(0,m.tZ)(b.Z,{lg:8,className:"m-auto"},(0,m.tZ)(g.Z,{sx:{mb:"50px"},titleStyle:!0,textCenter:!0,title:"Talented Team of eHopeWarriors.",subTitle:e,className:"volunteer-title"}))),(0,m.tZ)(v,null,(0,m.tZ)(f.Z,null,a&&a.map((function(n,t){return(0,m.tZ)(b.Z,{lg:2,key:t},(0,m.tZ)(L,{firstName:n.firstName,lastName:n.lastName,designation:n.designation,instagram:n.instagram,linkedin:n.linkedin,twitter:n.twitter,images:n.images.childrenImageSharp[0]}))}))))))}},289:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return j}});var a,r,i,l,o,s,u,c,d,m,p,f,b,g,x=e(4338),h=e(4615),Z=e(8719),v=e(1191),w=e(8837),_=e(3448),k=e(567),z=e(8861),N=e(5444),y=(e(7294),e(6848)),P=e(4978),C=P.ZP.div(a||(a=(0,y.Z)(["\n    background-color: #fc6539;\n    height: calc(100% - 5%);\n    margin-top: 20px;\n    padding: 62px 25px 48px;\n    position: relative;\n    z-index: 1;\n    "," {\n        padding: 62px 35px 48px 43px;\n    }\n    & .img-line-shape {\n        margin-bottom: 34px;\n    }\n    & .bg-line-shape {\n        left: 0;\n        position: absolute !important;\n        top: 0;\n        width: 100%;\n        z-index: -1;\n    }\n    &.bg-color2 {\n        background-color: rgb(254, 164, 68);\n        margin-top: 20px;\n        height: calc(100% - 5%);\n    }\n    &.bg-color3 {\n        background-color: #fc6539;\n        margin-top: 20px;\n        height: calc(100% - 5%);\n    }\n"])),P.Uh.large),S=P.ZP.h3(r||(r=(0,y.Z)(['\n    color: #fff;\n    font-size: 38px;\n    margin-bottom: 59px;\n    padding-left: 28px;\n    position: relative;\n    &::before {\n        background-color: rgba(255, 255, 255, 0.15);\n        border-radius: 50%;\n        content: "";\n        height: 82.5px;\n        left: -1px;\n        position: absolute;\n        top: 50%;\n        width: 82.5px;\n        transform: translate(0, -50%);\n        -webkit-transform: translate(0, -50%);\n        -moz-transform: translate(0, -50%);\n        -ms-transform: translate(0, -50%);\n        -o-transform: translate(0, -50%);\n    }\n']))),L=P.ZP.p(i||(i=(0,y.Z)(["\n    color: #fff;\n    margin-bottom: 14px;\n    font-size: 14px;\n"]))),U=(P.ZP.p(l||(l=(0,y.Z)(["\n    color: #fff;\n    font-family: ",";\n    font-size: 14px;\n"])),(0,P.R)("fonts.heading")),e(4382)),E=function(n){var t=n.title,e=n.text1,a=n.text2,r=n.text3,i=n.text4,l=n.text5,o=n.text6,s=n.text7,u=n.VerientClassName;return(0,U.tZ)(C,{className:""+u},(0,U.tZ)(S,null,t),(0,U.tZ)(L,null,e),(0,U.tZ)(L,null,a),(0,U.tZ)(L,null,r),(0,U.tZ)(L,null,i),(0,U.tZ)(L,null,l),(0,U.tZ)(L,null,o),(0,U.tZ)(L,null,s))},R=e(6125),B=P.ZP.section(o||(o=(0,y.Z)(["\n    padding: 46px 0 0px;\n    "," {\n        padding: 48px 0 08px;\n    }\n    "," {\n        padding: 88px 0 92px;\n    }\n    "," {\n        padding: 88px 0 92px;\n    }\n    ",' {\n        padding: 146px 0 15px;\n    }\n\n    position: relative;\n\n    &:before {\n        background-color: #f7f7f7;\n        bottom: 0;\n        content: "";\n        height: 100%;\n        left: 0;\n        position: absolute;\n        width: calc(50% - 315px);\n        z-index: -1;\n    }\n    & .img-one {\n    }\n'])),P.Uh.small,P.Uh.medium,P.Uh.large,P.Uh.xlarge),T=P.ZP.div(s||(s=(0,y.Z)(['\n    margin-top: 25px;\n    position: relative;\n\n    .row > [class*="col-"] {\n        padding-right: 0;\n        padding-left: 0;\n    }\n    .row.m-0 {\n        margin: 0 !important;\n    }\n    .img-two {\n        margin-left: 0px;\n        '," {\n            margin-left: 0px;\n        }\n        "," {\n            margin-left: 0px;\n        }\n        "," {\n            margin-left: -23px;\n        }\n    }\n"])),P.Uh.small,P.Uh.large,P.Uh.xlarge),H=P.ZP.div(u||(u=(0,y.Z)([""]))),O=P.ZP.p(c||(c=(0,y.Z)(['\n    color: #464444;\n    font-family: "Yeseva One", cursive;\n    font-size: 22px;\n    line-height: 1.364;\n    margin-bottom: 26px;\n    margin-right: -10px;\n    position: relative;\n    &:before {\n        background-color: #fc6539;\n        content: "";\n        height: 75px;\n        left: -29px;\n        position: absolute;\n        top: 7px;\n        width: 4px;\n    }\n']))),A=P.ZP.div(d||(d=(0,y.Z)(["\n    padding-left: 0px;\n    "," {\n        padding-left: 70px;\n    }\n"])),P.Uh.large),G=(P.ZP.div(m||(m=(0,y.Z)(["\n    "," {\n        margin-top: 44px;\n        padding-left: 40px;\n    }\n"])),P.Uh.large),P.ZP.div(p||(p=(0,y.Z)(["\n    background-color: #fc6539;\n    padding: 62px 25px 48px;\n    position: relative;\n    z-index: 1;\n    "," {\n        padding: 62px 35px 48px 43px;\n    }\n    & .img-line-shape {\n        margin-bottom: 34px;\n    }\n    & .bg-line-shape {\n        left: 0;\n        position: absolute !important;\n        top: 0;\n        width: 100%;\n        z-index: -1;\n    }\n"])),P.Uh.large),P.ZP.h3(f||(f=(0,y.Z)(['\n    color: #fff;\n    font-size: 38px;\n    margin-bottom: 59px;\n    padding-left: 28px;\n    position: relative;\n    &::before {\n        background-color: rgba(255, 255, 255, 0.15);\n        border-radius: 50%;\n        content: "";\n        height: 82.5px;\n        left: -1px;\n        position: absolute;\n        top: 50%;\n        width: 82.5px;\n        transform: translate(0, -50%);\n        -webkit-transform: translate(0, -50%);\n        -moz-transform: translate(0, -50%);\n        -ms-transform: translate(0, -50%);\n        -o-transform: translate(0, -50%);\n    }\n']))),P.ZP.p(b||(b=(0,y.Z)(["\n    color: #fff;\n    margin-bottom: 14px;\n    font-size: 14px;\n"]))),P.ZP.p(g||(g=(0,y.Z)(["\n    color: #fff;\n    font-family: ",";\n    font-size: 14px;\n"])),(0,P.R)("fonts.heading")),e(5093)),I=function(){var n=(0,N.useStaticQuery)("3983316587").aboutUsJson,t=n.section_title,e=(t.title,t.subTitle),a=n.image1,r=(n.content1,n.content2),i=n.content3,l=n.content4,o=n.mission,s=(0,R.d)(a);(0,G.useTranslation)().t;return(0,v.tZ)(B,null,(0,v.tZ)(w.Z,null,(0,v.tZ)(_.Z,null,(0,v.tZ)(k.Z,{lg:9},(0,v.tZ)(z.Z,{sx:{mb:"30px"},showImage:!1,subTitle:e}))),(0,v.tZ)(_.Z,null,(0,v.tZ)(k.Z,{lg:4,xl:4},(0,v.tZ)(T,null,(0,v.tZ)(H,null,(0,v.tZ)(R.G,{image:s,className:"img-one",alt:"Image-eHopeWarriors"})))),(0,v.tZ)(k.Z,{lg:8,xl:8},(0,v.tZ)(A,null,(0,v.tZ)(O,null,(0,v.tZ)("p",null,"About our story life")),(0,v.tZ)("p",null,r),(0,v.tZ)("p",null,i),(0,v.tZ)("p",null,l))),(0,v.tZ)(k.Z,null,(0,v.tZ)(_.Z,null,o.map((function(n){return(0,v.tZ)(k.Z,{className:"about-cols",lg:4,md:7,sm:4,key:n.id},(0,v.tZ)(E,{title:n.title,text1:n.text1,text2:n.text2,text3:n.text3,text4:n.text4,text5:n.text5,text6:n.text6,text7:n.text7,VerientClassName:n.VerientClassName}))})))))))},M=e(3936),W=e(4027),q=e.p+"static/chart-e64952b4d63783d2bfbf5a629ad7b4fe.png",j=function(n){var t=n.location,e=n.pageContext;return(0,U.tZ)(x.Z,null,(0,U.tZ)(h.Z,{title:"About us",pathname:"/"}),(0,U.tZ)(M.Z,{pageContext:e,location:t,title:"About Us"}),(0,U.tZ)(I,null),(0,U.tZ)("div",{style:{textAlign:"center"}},(0,U.tZ)("img",{src:q,width:"60%"})),(0,U.tZ)("div",{className:"home-team-wrapper"},(0,U.tZ)(W.Z,null)),(0,U.tZ)(Z.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-about-us-js-c3f8281f3e086af58168.js.map