(self.webpackChunkeHopeWarriors=self.webpackChunkeHopeWarriors||[]).push([[539],{9009:function(n,t,e){"use strict";var a=e(8580);t.__esModule=!0,t.default=void 0;var r=a(e(7294)),l=a(e(8384)),i=a(e(4030)),o=e(7791),s=function(n){return r.default.useContext(o.OptionsContext).useAutoGen?r.default.createElement(l.default,n):r.default.createElement(i.default,n)};t.default=s},8384:function(n,t,e){"use strict";var a=e(8580);t.__esModule=!0,t.default=void 0;var r=a(e(4362)),l=a(e(3246)),i=a(e(7294)),o=a(e(5697)),s=e(5444),u=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],m=function(n){var t=n.title,e=n.crumbs,a=n.crumbLabel,o=n.crumbSeparator,m=n.disableLinks,d=n.hiddenCrumbs,c=(0,l.default)(n,u);return i.default.createElement(i.default.Fragment,null,t&&i.default.createElement("span",{className:"breadcrumb__title"},t),i.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},i.default.createElement("ol",{className:"breadcrumb__list"},e.map((function(n,t){return d.includes(n.pathname)?null:i.default.createElement(i.default.Fragment,{key:t+"-"+n.pathname},!m.includes(n.pathname)&&i.default.createElement("li",{className:"breadcrumb__list__item"},i.default.createElement(s.Link,(0,r.default)({to:n.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===e.length-1?"page":null},c),a&&t===e.length-1?a:n.crumbLabel)),m.includes(n.pathname)&&i.default.createElement("li",{className:"breadcrumb__list__item"},i.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},c),a&&t===e.length-1?a:n.crumbLabel)),t===e.length-1?null:i.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},o))})))))};m.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},m.propTypes={title:o.default.string,crumbSeparator:o.default.oneOfType([o.default.string,o.default.element]),crumbs:o.default.arrayOf(o.default.shape({location:o.default.shape(),pathname:o.default.string.isRequired})).isRequired,crumbLabel:o.default.string,disableLinks:o.default.arrayOf(o.default.string),hiddenCrumbs:o.default.arrayOf(o.default.string)};var d=m;t.default=d},4030:function(n,t,e){"use strict";var a=e(8580);t.__esModule=!0,t.default=void 0;var r=a(e(4362)),l=a(e(3246)),i=a(e(7294)),o=a(e(5697)),s=e(5444),u=e(7791),m=a(e(7147)),d=["title","location","crumbLabel","crumbSeparator"],c=function(n){var t=n.title,e=n.location,a=n.crumbLabel,o=n.crumbSeparator,c=(0,l.default)(n,d),p=i.default.useContext(u.OptionsContext).usePathPrefix,f=(0,m.default)({location:(0,r.default)({},e,{pathname:p?e.pathname.replace(new RegExp("^"+p),""):e.pathname}),crumbLabel:a,crumbSeparator:o}).crumbs,b=void 0===f?[]:f;return i.default.createElement(i.default.Fragment,null,t&&i.default.createElement("span",{className:"breadcrumb__title"},t),i.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},i.default.createElement("ol",{className:"breadcrumb__list"},b.map((function(n,t){return i.default.createElement("li",{className:"breadcrumb__item",key:t},i.default.createElement(s.Link,(0,r.default)({to:n.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===b.length-1?"page":null},c),n.crumbLabel),t===b.length-1?null:i.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},n.crumbSeparator))})))))};c.defaultProps={title:"",crumbSeparator:" / "},c.propTypes={location:o.default.shape().isRequired,crumbLabel:o.default.string.isRequired,title:o.default.string,crumbSeparator:o.default.string};var p=c;t.default=p},7935:function(n,t,e){"use strict";var a=e(8580);t.__esModule=!0;var r=a(e(9009));t.Breadcrumb=r.default;var l=a(e(8384));t.AutoGenCrumb=l.default;var i=e(1492);t.BreadcrumbContext=i.BreadcrumbContext,t.BreadcrumbConsumer=i.BreadcrumbConsumer,t.BreadcrumbProvider=i.BreadcrumbProvider;var o=a(e(7147));t.useBreadcrumb=o.default},7147:function(n,t,e){"use strict";var a=e(8580);t.__esModule=!0,t.default=void 0;var r=a(e(7294)),l=e(1492),i=function(n){var t=n.location,e=n.crumbLabel,a=n.crumbSeparator,i=r.default.useContext(l.BreadcrumbContext),o=i.crumbs,s=i.updateCrumbs;return r.default.useEffect((function(){s({location:t,crumbLabel:e,crumbSeparator:a})}),[t,e,a,s]),{crumbs:o}};t.default=i},5231:function(n,t,e){"use strict";var a=e(7935);t.aG=a.Breadcrumb,a.BreadcrumbContext,a.BreadcrumbConsumer,a.BreadcrumbProvider,a.useBreadcrumb,a.AutoGenCrumb},3936:function(n,t,e){"use strict";e.d(t,{Z:function(){return b}});var a,r,l=e(5231),i=e(8837),o=e(3448),s=e(567),u=e(6848),m=e(4978),d=e.p+"static/bg-page-title-2c6bb5db347e7d89cb7d7664a447a5f0.jpg",c=m.ZP.div(a||(a=(0,u.Z)(["\n    background-image: url(",");\n    background-position: bottom center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    overflow: hidden;\n    padding: 35px 0;\n    position: relative;\n    z-index: 1;\n"])),d),p=m.ZP.div(r||(r=(0,u.Z)(["\n    letter-spacing: 0;\n    padding: 77px 0;\n    text-align: center;\n    & .breadcrumb__title {\n        font-size: 38px;\n        line-height: 1.414;\n        margin-bottom: 6px;\n        font-family: ",";\n        color: #fff;\n        "," {\n            font-size: 58px;\n        }\n    }\n    & .breadcrumb {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0 0;\n        margin-bottom: 1rem;\n        list-style: none;\n        justify-content: center;\n        ol {\n            list-style: none;\n            display: flex;\n            align-items: center;\n            color: #fff;\n            padding: 0;\n            & .breadcrumb__separator {\n                margin-right: 10px;\n                margin-left: 10px;\n            }\n            .breadcrumb__link {\n                color: #fff;\n                font-size: 18px;\n                font-weight: 700;\n                margin-bottom: 8px;\n                &.breadcrumb__link__active {\n                    color: #fea444;\n                }\n            }\n        }\n    }\n"])),(0,m.R)("fonts.heading"),m.Uh.large),f=e(4382),b=function(n){n.crumbLabel;var t=n.location,e=n.title,a=n.pageContext.breadcrumb.crumbs,r=t.pathname.toLowerCase().split("/"),u=r[r.length-1].split("-");return(0,f.tZ)(c,null,(0,f.tZ)(i.Z,null,(0,f.tZ)(o.Z,null,(0,f.tZ)(s.Z,null,(0,f.tZ)(p,null,(0,f.tZ)(l.aG,{title:e,crumbs:a,crumbLabel:u.join(" "),disableLinks:["/events","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/services"]}))))))}},9207:function(n,t,e){"use strict";e.d(t,{Z:function(){return _}});e(7294);var a,r,l,i,o,s,u,m=e(6125),d=e(6848),c=e(4978),p=c.ZP.div(a||(a=(0,d.Z)(['\n    margin-bottom: 30px;\n    overflow: hidden;\n    position: relative;\n    display: flex;\n    img,\n    svg {\n        vertical-align: middle;\n    }\n    &::after {\n        bottom: -100%;\n        content: "";\n        height: 100%;\n        left: 0;\n        position: absolute;\n        width: 100%;\n        background-image: linear-gradient(\n            360deg,\n            rgba(246, 103, 57, 0.67843) 0%,\n            rgba(0, 0, 0, 0) 35%\n        );\n        transition: 0.2s;\n        -webkit-transition: 0.2s;\n        -moz-transition: 0.2s;\n        -ms-transition: 0.2s;\n        -o-transition: 0.2s;\n    }\n']))),f=c.ZP.div(r||(r=(0,d.Z)(["\n    bottom: -45px;\n    left: 0;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    z-index: 1;\n    transform: translate(-50 %, 0);\n    -webkit-transform: translate(-50 %, 0);\n    -moz-transform: translate(-50 %, 0);\n    -ms-transform: translate(-50 %, 0);\n    -o-transform: translate(-50 %, 0);\n    transition: 0.3s;\n    -webkit-transition: 0.3s;\n    -moz-transition: 0.3s;\n    -ms-transition: 0.3s;\n    -o-transition: 0.3s;\n    & a {\n        background-color: #fff;\n        border-radius: 50%;\n        color: #001d23;\n        display: inline-block;\n        font-size: 17px;\n        height: 45px;\n        line-height: 47px;\n        margin-right: 6px;\n        text-align: center;\n        width: 45px;\n        transition: 0.1s;\n        -webkit-transition: 0.1s;\n        -moz-transition: 0.1s;\n        -ms-transition: 0.1s;\n        -o-transition: 0.1s;\n    }\n"]))),b=c.ZP.div(l||(l=(0,d.Z)(["\n    margin-bottom: 30px;\n    &:hover {\n        .socialHover {\n            bottom: 30px;\n        }\n        .thumb:after {\n            bottom: 0;\n        }\n    }\n"]))),g=c.ZP.div(i||(i=(0,d.Z)([""]))),x=c.ZP.div(o||(o=(0,d.Z)(["\n    text-align: center;\n"]))),Z=c.ZP.h4(s||(s=(0,d.Z)(["\n    font-size: 24px;\n    margin-bottom: 23px;\n    transition: 0.3s;\n    -webkit-transition: 0.3s;\n    "," {\n        font-size: 20px;\n    }\n    "," {\n        font-size: 27px;\n    }\n"])),c.Uh.xlarge,c.Uh.xxlarge),h=c.ZP.h6(u||(u=(0,d.Z)(['\n    color: #909090;\n    font-family: "Roboto", sans-serif;\n    font-size: 13px;\n    font-weight: 700;\n    letter-spacing: 1px;\n    margin-bottom: 0;\n    text-transform: uppercase;\n    transition: 0.3s;\n']))),v=e(4382),_=function(n){var t=n.name,e=n.designation,a=n.images,r=(0,m.d)(a);return(0,v.tZ)(b,null,(0,v.tZ)(p,{className:"thumb"},(0,v.tZ)(m.G,{image:r,alt:t}),(0,v.tZ)(f,{className:"socialHover"},(0,v.tZ)("a",{href:"#!"},(0,v.tZ)("i",{className:"icofont-facebook"})),(0,v.tZ)("a",{href:"#!"},(0,v.tZ)("i",{className:"icofont-linkedin"})),(0,v.tZ)("a",{href:"#!"},(0,v.tZ)("i",{className:"icofont-twitter"})))),(0,v.tZ)(g,null,(0,v.tZ)(x,null,(0,v.tZ)(Z,null,(0,v.tZ)("a",{className:"member-name",href:"#/"},t)),(0,v.tZ)(h,null,e))))}},7754:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return X}});var a,r,l,i,o,s,u,m,d,c,p,f,b,g,x,Z,h=e(7803),v=e(4615),_=e(9613),k=e(4354),w=e(8719),P=e(1191),N=e(8837),y=e(3448),C=e(567),z=e(8861),L=e(5444),E=(e(7294),e(6848)),U=e(4978),B=U.ZP.div(a||(a=(0,E.Z)(["\n    background-color: #fc6539;\n    height: calc(100% - 5%);\n    margin-top: 20px;\n    padding: 62px 25px 48px;\n    position: relative;\n    z-index: 1;\n    "," {\n        padding: 62px 35px 48px 43px;\n    }\n    & .img-line-shape {\n        margin-bottom: 34px;\n    }\n    & .bg-line-shape {\n        left: 0;\n        position: absolute !important;\n        top: 0;\n        width: 100%;\n        z-index: -1;\n    }\n    &.bg-color2 {\n        background-color: rgb(254, 164, 68);\n        margin-top: 20px;\n        height: calc(100% - 5%);\n    }\n    &.bg-color3 {\n        background-color: #fc6539;\n        margin-top: 20px;\n        height: calc(100% - 5%);\n    }\n"])),U.Uh.large),S=U.ZP.h3(r||(r=(0,E.Z)(['\n    color: #fff;\n    font-size: 38px;\n    margin-bottom: 59px;\n    padding-left: 28px;\n    position: relative;\n    &::before {\n        background-color: rgba(255, 255, 255, 0.15);\n        border-radius: 50%;\n        content: "";\n        height: 82.5px;\n        left: -1px;\n        position: absolute;\n        top: 50%;\n        width: 82.5px;\n        transform: translate(0, -50%);\n        -webkit-transform: translate(0, -50%);\n        -moz-transform: translate(0, -50%);\n        -ms-transform: translate(0, -50%);\n        -o-transform: translate(0, -50%);\n    }\n']))),R=U.ZP.p(l||(l=(0,E.Z)(["\n    color: #fff;\n    margin-bottom: 14px;\n    font-size: 14px;\n"]))),G=(U.ZP.p(i||(i=(0,E.Z)(["\n    color: #fff;\n    font-family: ",";\n    font-size: 14px;\n"])),(0,U.R)("fonts.heading")),e(4382)),T=function(n){var t=n.title,e=n.text1,a=n.text2,r=n.text3,l=n.text4,i=n.text5,o=n.text6,s=n.text7,u=n.VerientClassName;return(0,G.tZ)(B,{className:""+u},(0,G.tZ)(S,null,t),(0,G.tZ)(R,null,e),(0,G.tZ)(R,null,a),(0,G.tZ)(R,null,r),(0,G.tZ)(R,null,l),(0,G.tZ)(R,null,i),(0,G.tZ)(R,null,o),(0,G.tZ)(R,null,s))},V=e(6125),O=U.ZP.section(o||(o=(0,E.Z)(["\n    padding: 46px 0 0px;\n    "," {\n        padding: 48px 0 08px;\n    }\n    "," {\n        padding: 88px 0 92px;\n    }\n    "," {\n        padding: 88px 0 92px;\n    }\n    ",' {\n        padding: 146px 0 15px;\n    }\n\n    position: relative;\n\n    &:before {\n        background-color: #f7f7f7;\n        bottom: 0;\n        content: "";\n        height: 100%;\n        left: 0;\n        position: absolute;\n        width: calc(50% - 315px);\n        z-index: -1;\n    }\n    & .img-one {\n    }\n'])),U.Uh.small,U.Uh.medium,U.Uh.large,U.Uh.xlarge),A=U.ZP.div(s||(s=(0,E.Z)(['\n    margin-top: 25px;\n    position: relative;\n\n    .row > [class*="col-"] {\n        padding-right: 0;\n        padding-left: 0;\n    }\n    .row.m-0 {\n        margin: 0 !important;\n    }\n    .img-two {\n        margin-left: 0px;\n        '," {\n            margin-left: 0px;\n        }\n        "," {\n            margin-left: 0px;\n        }\n        "," {\n            margin-left: -23px;\n        }\n    }\n"])),U.Uh.small,U.Uh.large,U.Uh.xlarge),M=U.ZP.div(u||(u=(0,E.Z)([""]))),q=U.ZP.p(m||(m=(0,E.Z)(['\n    color: #464444;\n    font-family: "Yeseva One", cursive;\n    font-size: 22px;\n    line-height: 1.364;\n    margin-bottom: 26px;\n    margin-right: -10px;\n    position: relative;\n    &:before {\n        background-color: #fc6539;\n        content: "";\n        height: 75px;\n        left: -29px;\n        position: absolute;\n        top: 7px;\n        width: 4px;\n    }\n']))),H=U.ZP.div(d||(d=(0,E.Z)(["\n    padding-left: 0px;\n    "," {\n        padding-left: 70px;\n    }\n"])),U.Uh.large),j=(U.ZP.div(c||(c=(0,E.Z)(["\n    "," {\n        margin-top: 44px;\n        padding-left: 40px;\n    }\n"])),U.Uh.large),U.ZP.div(p||(p=(0,E.Z)(["\n    background-color: #fc6539;\n    padding: 62px 25px 48px;\n    position: relative;\n    z-index: 1;\n    "," {\n        padding: 62px 35px 48px 43px;\n    }\n    & .img-line-shape {\n        margin-bottom: 34px;\n    }\n    & .bg-line-shape {\n        left: 0;\n        position: absolute !important;\n        top: 0;\n        width: 100%;\n        z-index: -1;\n    }\n"])),U.Uh.large),U.ZP.h3(f||(f=(0,E.Z)(['\n    color: #fff;\n    font-size: 38px;\n    margin-bottom: 59px;\n    padding-left: 28px;\n    position: relative;\n    &::before {\n        background-color: rgba(255, 255, 255, 0.15);\n        border-radius: 50%;\n        content: "";\n        height: 82.5px;\n        left: -1px;\n        position: absolute;\n        top: 50%;\n        width: 82.5px;\n        transform: translate(0, -50%);\n        -webkit-transform: translate(0, -50%);\n        -moz-transform: translate(0, -50%);\n        -ms-transform: translate(0, -50%);\n        -o-transform: translate(0, -50%);\n    }\n']))),U.ZP.p(b||(b=(0,E.Z)(["\n    color: #fff;\n    margin-bottom: 14px;\n    font-size: 14px;\n"]))),U.ZP.p(g||(g=(0,E.Z)(["\n    color: #fff;\n    font-family: ",";\n    font-size: 14px;\n"])),(0,U.R)("fonts.heading")),e(5093)),F=function(){var n=(0,L.useStaticQuery)("3983316587").aboutUsJson,t=n.section_title,e=t.title,a=t.subTitle,r=n.image1,l=(n.content1,n.content2),i=n.content3,o=n.content4,s=n.mission,u=(0,V.d)(r),m=(0,j.useTranslation)().t;return(0,P.tZ)(O,null,(0,P.tZ)(N.Z,null,(0,P.tZ)(y.Z,null,(0,P.tZ)(C.Z,{lg:9},(0,P.tZ)(z.Z,{sx:{mb:"30px"},showImage:!1,title:e,subTitle:a}))),(0,P.tZ)(y.Z,null,(0,P.tZ)(C.Z,{lg:4,xl:4},(0,P.tZ)(A,null,(0,P.tZ)(M,null,(0,P.tZ)(V.G,{image:u,className:"img-one",alt:"Image-Givest"})))),(0,P.tZ)(C.Z,{lg:8,xl:8},(0,P.tZ)(H,null,(0,P.tZ)(q,null,m("about_us_our_story_title")),(0,P.tZ)("p",null,l),(0,P.tZ)("p",null,i),(0,P.tZ)("p",null,o))),(0,P.tZ)(C.Z,null,(0,P.tZ)(y.Z,null,s.map((function(n){return(0,P.tZ)(C.Z,{className:"about-cols",lg:4,md:7,sm:4,key:n.id},(0,P.tZ)(T,{title:n.title,text1:n.text1,text2:n.text2,text3:n.text3,text4:n.text4,text5:n.text5,text6:n.text6,text7:n.text7,VerientClassName:n.VerientClassName}))})))))))},I=e(3936),J=e(393),Q=U.ZP.section(x||(x=(0,E.Z)(["\n    padding: 95px 0 70px;\n    "," {\n        padding: 150px 0 118px;\n    }\n    & .container {\n        max-width: 1676px;\n    }\n"])),U.Uh.xlarge),W=U.ZP.div(Z||(Z=(0,E.Z)(["\n    text-align: center;\n    "," {\n        text-align: left;\n    }\n"])),U.Uh.xlarge),Y=e(9207),D=e(1784),K=function(){var n=(0,L.useStaticQuery)("1118532507").volunteerJson,t=n.section_title,e=t.title,a=t.subTitle,r=n.text,l=n.team;return(0,P.tZ)(Q,null,(0,P.tZ)(N.Z,null,(0,P.tZ)(y.Z,null,(0,P.tZ)(C.Z,{lg:{span:6,offset:3},xl:{span:4,offset:0}},(0,P.tZ)(W,{sx:{mb:"60px"}},(0,P.tZ)(z.Z,{sx:{mb:"50px"},titleStyle:!0,title:e,subTitle:a}),(0,P.tZ)("div",{className:"desc"},(0,P.tZ)("p",null,r),(0,P.tZ)(J.Z,{sx:{mt:"30px"},color:"gradient",path:"/volunteer"},"Join Now"," ",(0,P.tZ)("i",{className:"flaticon-right-arrow"}))))),(0,P.tZ)(C.Z,{xl:8},(0,P.tZ)("div",{className:"team-member-items"},(0,P.tZ)(D.Z,{layout:{nav:"testimonial-slider-navigation",dots:"testimonial-dots-style"},effect:!0,autoPlay:!0,slidesPerView:1,spaceBetween:30,breakpoints:{320:{slidesPerView:1},480:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:3}}},l&&l.map((function(n,t){return(0,P.tZ)(D.o,{key:t},(0,P.tZ)(Y.Z,{name:n.name,designation:n.designation,images:n.images.childrenImageSharp[0]}))}))))))))},X=function(n){var t=n.location,e=n.pageContext;return(0,G.tZ)(h.Z,null,(0,G.tZ)(v.Z,{title:"About us",pathname:"/"}),(0,G.tZ)(I.Z,{pageContext:e,location:t,title:"About Us"}),(0,G.tZ)(F,null),(0,G.tZ)(K,null),(0,G.tZ)(w.Z,null),(0,G.tZ)(k.Z,null),(0,G.tZ)(_.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-about-us-js-850a4327f015711524a4.js.map