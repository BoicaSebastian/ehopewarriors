(self.webpackChunkeHopeWarriors=self.webpackChunkeHopeWarriors||[]).push([[539],{5105:function(n){"use strict";n.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/dde054210abb261b9326ec86aae118ec/120b7/line5.png","srcSet":"/static/dde054210abb261b9326ec86aae118ec/52f3c/line5.png 88w,\\n/static/dde054210abb261b9326ec86aae118ec/345c2/line5.png 175w,\\n/static/dde054210abb261b9326ec86aae118ec/120b7/line5.png 350w","sizes":"(min-width: 350px) 350px, 100vw"},"sources":[{"srcSet":"/static/dde054210abb261b9326ec86aae118ec/54a8c/line5.webp 88w,\\n/static/dde054210abb261b9326ec86aae118ec/9a919/line5.webp 175w,\\n/static/dde054210abb261b9326ec86aae118ec/f5adc/line5.webp 350w","type":"image/webp","sizes":"(min-width: 350px) 350px, 100vw"}]},"width":350,"height":361}')},2781:function(n){"use strict";n.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/77fb199522b6d10b088445c57ce37a58/6b8c9/line-s1.png","srcSet":"/static/77fb199522b6d10b088445c57ce37a58/b0734/line-s1.png 17w,\\n/static/77fb199522b6d10b088445c57ce37a58/dc169/line-s1.png 35w,\\n/static/77fb199522b6d10b088445c57ce37a58/6b8c9/line-s1.png 69w","sizes":"(min-width: 69px) 69px, 100vw"},"sources":[{"srcSet":"/static/77fb199522b6d10b088445c57ce37a58/a5053/line-s1.webp 17w,\\n/static/77fb199522b6d10b088445c57ce37a58/fab8e/line-s1.webp 35w,\\n/static/77fb199522b6d10b088445c57ce37a58/21bbc/line-s1.webp 69w","type":"image/webp","sizes":"(min-width: 69px) 69px, 100vw"}]},"width":69,"height":22}')},9009:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0,e.default=void 0;var r=a(t(7294)),i=a(t(8384)),l=a(t(4030)),s=t(7791),o=function(n){return r.default.useContext(s.OptionsContext).useAutoGen?r.default.createElement(i.default,n):r.default.createElement(l.default,n)};e.default=o},8384:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0,e.default=void 0;var r=a(t(4362)),i=a(t(3246)),l=a(t(7294)),s=a(t(5697)),o=t(5444),c=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],u=function(n){var e=n.title,t=n.crumbs,a=n.crumbLabel,s=n.crumbSeparator,u=n.disableLinks,d=n.hiddenCrumbs,m=(0,i.default)(n,c);return l.default.createElement(l.default.Fragment,null,e&&l.default.createElement("span",{className:"breadcrumb__title"},e),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},t.map((function(n,e){return d.includes(n.pathname)?null:l.default.createElement(l.default.Fragment,{key:e+"-"+n.pathname},!u.includes(n.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement(o.Link,(0,r.default)({to:n.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":e===t.length-1?"page":null},m),a&&e===t.length-1?a:n.crumbLabel)),u.includes(n.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},m),a&&e===t.length-1?a:n.crumbLabel)),e===t.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},s))})))))};u.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},u.propTypes={title:s.default.string,crumbSeparator:s.default.oneOfType([s.default.string,s.default.element]),crumbs:s.default.arrayOf(s.default.shape({location:s.default.shape(),pathname:s.default.string.isRequired})).isRequired,crumbLabel:s.default.string,disableLinks:s.default.arrayOf(s.default.string),hiddenCrumbs:s.default.arrayOf(s.default.string)};var d=u;e.default=d},4030:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0,e.default=void 0;var r=a(t(4362)),i=a(t(3246)),l=a(t(7294)),s=a(t(5697)),o=t(5444),c=t(7791),u=a(t(7147)),d=["title","location","crumbLabel","crumbSeparator"],m=function(n){var e=n.title,t=n.location,a=n.crumbLabel,s=n.crumbSeparator,m=(0,i.default)(n,d),p=l.default.useContext(c.OptionsContext).usePathPrefix,b=(0,u.default)({location:(0,r.default)({},t,{pathname:p?t.pathname.replace(new RegExp("^"+p),""):t.pathname}),crumbLabel:a,crumbSeparator:s}).crumbs,f=void 0===b?[]:b;return l.default.createElement(l.default.Fragment,null,e&&l.default.createElement("span",{className:"breadcrumb__title"},e),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},f.map((function(n,e){return l.default.createElement("li",{className:"breadcrumb__item",key:e},l.default.createElement(o.Link,(0,r.default)({to:n.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":e===f.length-1?"page":null},m),n.crumbLabel),e===f.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},n.crumbSeparator))})))))};m.defaultProps={title:"",crumbSeparator:" / "},m.propTypes={location:s.default.shape().isRequired,crumbLabel:s.default.string.isRequired,title:s.default.string,crumbSeparator:s.default.string};var p=m;e.default=p},7935:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0;var r=a(t(9009));e.Breadcrumb=r.default;var i=a(t(8384));e.AutoGenCrumb=i.default;var l=t(1492);e.BreadcrumbContext=l.BreadcrumbContext,e.BreadcrumbConsumer=l.BreadcrumbConsumer,e.BreadcrumbProvider=l.BreadcrumbProvider;var s=a(t(7147));e.useBreadcrumb=s.default},7147:function(n,e,t){"use strict";var a=t(8580);e.__esModule=!0,e.default=void 0;var r=a(t(7294)),i=t(1492),l=function(n){var e=n.location,t=n.crumbLabel,a=n.crumbSeparator,l=r.default.useContext(i.BreadcrumbContext),s=l.crumbs,o=l.updateCrumbs;return r.default.useEffect((function(){o({location:e,crumbLabel:t,crumbSeparator:a})}),[e,t,a,o]),{crumbs:s}};e.default=l},5231:function(n,e,t){"use strict";var a=t(7935);e.aG=a.Breadcrumb,a.BreadcrumbContext,a.BreadcrumbConsumer,a.BreadcrumbProvider,a.useBreadcrumb,a.AutoGenCrumb},3936:function(n,e,t){"use strict";t.d(e,{Z:function(){return f}});var a,r,i=t(5231),l=t(8837),s=t(386),o=t(567),c=t(6848),u=t(4978),d=t.p+"static/bg-page-title-2c6bb5db347e7d89cb7d7664a447a5f0.jpg",m=u.ZP.div(a||(a=(0,c.Z)(["\n    background-image: url(",");\n    background-position: bottom center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    overflow: hidden;\n    padding: 35px 0;\n    position: relative;\n    z-index: 1;\n"])),d),p=u.ZP.div(r||(r=(0,c.Z)(["\n    letter-spacing: 0;\n    padding: 77px 0;\n    text-align: center;\n    & .breadcrumb__title {\n        font-size: 38px;\n        line-height: 1.414;\n        margin-bottom: 6px;\n        font-family: ",";\n        color: #fff;\n        "," {\n            font-size: 58px;\n        }\n    }\n    & .breadcrumb {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0 0;\n        margin-bottom: 1rem;\n        list-style: none;\n        justify-content: center;\n        ol {\n            list-style: none;\n            display: flex;\n            align-items: center;\n            color: #fff;\n            padding: 0;\n            & .breadcrumb__separator {\n                margin-right: 10px;\n                margin-left: 10px;\n            }\n            .breadcrumb__link {\n                color: #fff;\n                font-size: 18px;\n                font-weight: 700;\n                margin-bottom: 8px;\n                &.breadcrumb__link__active {\n                    color: #fea444;\n                }\n            }\n        }\n    }\n"])),(0,u.R)("fonts.heading"),u.Uh.large),b=t(6958),f=function(n){n.crumbLabel;var e=n.location,t=n.title,a=n.pageContext.breadcrumb.crumbs,r=e.pathname.toLowerCase().split("/"),c=r[r.length-1].split("-");return(0,b.tZ)(m,null,(0,b.tZ)(l.Z,null,(0,b.tZ)(s.Z,null,(0,b.tZ)(o.Z,null,(0,b.tZ)(p,null,(0,b.tZ)(i.aG,{title:t,crumbs:a,crumbLabel:c.join(" "),disableLinks:["/events","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/services"]}))))))}},9207:function(n,e,t){"use strict";t.d(e,{Z:function(){return w}});t(7294);var a,r,i,l,s,o,c,u=t(6125),d=t(6848),m=t(4978),p=m.ZP.div(a||(a=(0,d.Z)(['\n    margin-bottom: 30px;\n    overflow: hidden;\n    position: relative;\n    display: flex;\n    img,\n    svg {\n        vertical-align: middle;\n    }\n    &::after {\n        bottom: -100%;\n        content: "";\n        height: 100%;\n        left: 0;\n        position: absolute;\n        width: 100%;\n        background-image: linear-gradient(\n            360deg,\n            rgba(246, 103, 57, 0.67843) 0%,\n            rgba(0, 0, 0, 0) 35%\n        );\n        transition: 0.2s;\n        -webkit-transition: 0.2s;\n        -moz-transition: 0.2s;\n        -ms-transition: 0.2s;\n        -o-transition: 0.2s;\n    }\n']))),b=m.ZP.div(r||(r=(0,d.Z)(["\n    bottom: -45px;\n    left: 0;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    z-index: 1;\n    transform: translate(-50 %, 0);\n    -webkit-transform: translate(-50 %, 0);\n    -moz-transform: translate(-50 %, 0);\n    -ms-transform: translate(-50 %, 0);\n    -o-transform: translate(-50 %, 0);\n    transition: 0.3s;\n    -webkit-transition: 0.3s;\n    -moz-transition: 0.3s;\n    -ms-transition: 0.3s;\n    -o-transition: 0.3s;\n    & a {\n        background-color: #fff;\n        border-radius: 50%;\n        color: #001d23;\n        display: inline-block;\n        font-size: 17px;\n        height: 45px;\n        line-height: 47px;\n        margin-right: 6px;\n        text-align: center;\n        width: 45px;\n        transition: 0.1s;\n        -webkit-transition: 0.1s;\n        -moz-transition: 0.1s;\n        -ms-transition: 0.1s;\n        -o-transition: 0.1s;\n    }\n"]))),f=m.ZP.div(i||(i=(0,d.Z)(["\n    margin-bottom: 30px;\n    &:hover {\n        .socialHover {\n            bottom: 30px;\n        }\n        .thumb:after {\n            bottom: 0;\n        }\n    }\n"]))),g=m.ZP.div(l||(l=(0,d.Z)([""]))),x=m.ZP.div(s||(s=(0,d.Z)(["\n    text-align: center;\n"]))),Z=m.ZP.h4(o||(o=(0,d.Z)(["\n    font-size: 24px;\n    margin-bottom: 23px;\n    transition: 0.3s;\n    -webkit-transition: 0.3s;\n    "," {\n        font-size: 20px;\n    }\n    "," {\n        font-size: 27px;\n    }\n"])),m.Uh.xlarge,m.Uh.xxlarge),h=m.ZP.h6(c||(c=(0,d.Z)(['\n    color: #909090;\n    font-family: "Roboto", sans-serif;\n    font-size: 13px;\n    font-weight: 700;\n    letter-spacing: 1px;\n    margin-bottom: 0;\n    text-transform: uppercase;\n    transition: 0.3s;\n']))),v=t(6958),w=function(n){var e=n.name,t=n.designation,a=n.images,r=(0,u.d)(a);return(0,v.tZ)(f,null,(0,v.tZ)(p,{className:"thumb"},(0,v.tZ)(u.G,{image:r,alt:e}),(0,v.tZ)(b,{className:"socialHover"},(0,v.tZ)("a",{href:"#!"},(0,v.tZ)("i",{className:"icofont-facebook"})),(0,v.tZ)("a",{href:"#!"},(0,v.tZ)("i",{className:"icofont-skype"})),(0,v.tZ)("a",{href:"#!"},(0,v.tZ)("i",{className:"icofont-twitter"})))),(0,v.tZ)(g,null,(0,v.tZ)(x,null,(0,v.tZ)(Z,null,(0,v.tZ)("a",{href:"#/"},e)),(0,v.tZ)(h,null,t))))}},7754:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return $}});var a,r,i,l,s,o,c,u,d,m,p,b,f,g,x,Z,h=t(7803),v=t(6143),w=t(9613),_=t(4354),k=t(8719),P=t(1191),N=t(8837),y=t(386),z=t(567),C=t(8861),S=t(5444),L=(t(7294),t(6125)),E=t(6848),U=t(4978),B=U.ZP.div(a||(a=(0,E.Z)(["\n    background-color: #fc6539;\n    padding: 62px 25px 48px;\n    position: relative;\n    z-index: 1;\n    "," {\n        padding: 62px 35px 48px 43px;\n    }\n    & .img-line-shape {\n        margin-bottom: 34px;\n    }\n    & .bg-line-shape {\n        left: 0;\n        position: absolute !important;\n        top: 0;\n        width: 100%;\n        z-index: -1;\n    }\n    &.bg-color2 {\n        background-color: rgb(254, 164, 68);\n    }\n"])),U.Uh.large),G=U.ZP.h3(r||(r=(0,E.Z)(['\n    color: #fff;\n    font-size: 38px;\n    margin-bottom: 59px;\n    padding-left: 28px;\n    position: relative;\n    &::before {\n        background-color: rgba(255, 255, 255, 0.15);\n        border-radius: 50%;\n        content: "";\n        height: 82.5px;\n        left: -1px;\n        position: absolute;\n        top: 50%;\n        width: 82.5px;\n        transform: translate(0, -50%);\n        -webkit-transform: translate(0, -50%);\n        -moz-transform: translate(0, -50%);\n        -ms-transform: translate(0, -50%);\n        -o-transform: translate(0, -50%);\n    }\n']))),O=U.ZP.p(i||(i=(0,E.Z)(["\n    color: #fff;\n    margin-bottom: 14px;\n    font-size: 14px;\n"]))),R=U.ZP.p(l||(l=(0,E.Z)(["\n    color: #fff;\n    font-family: ",";\n    font-size: 14px;\n"])),(0,U.R)("fonts.heading")),V=t(6958),T=function(n){var e=n.title,a=n.text1,r=n.text2,i=n.VerientClassName;return(0,V.tZ)(B,{className:""+i},(0,V.tZ)(G,null,e),(0,V.tZ)(L.S,{className:"img-line-shape",src:"../../data/images/shape/line-s1.png",alt:"Image-Givest",__imageData:t(2781)}),(0,V.tZ)(O,null,a),(0,V.tZ)(R,null,r),(0,V.tZ)(L.S,{className:"bg-line-shape",src:"../../data/images/shape/line5.png",alt:"Image-Givest",__imageData:t(5105)}))},A=U.ZP.section(s||(s=(0,E.Z)(["\n    padding: 46px 0 0px;\n    "," {\n        padding: 48px 0 08px;\n    }\n    "," {\n        padding: 88px 0 92px;\n    }\n    "," {\n        padding: 88px 0 92px;\n    }\n    ",' {\n        padding: 146px 0 15px;\n    }\n\n    position: relative;\n\n    &:before {\n        background-color: #f7f7f7;\n        bottom: 0;\n        content: "";\n        height: 100%;\n        left: 0;\n        position: absolute;\n        width: calc(50% - 315px);\n        z-index: -1;\n    }\n    & .img-one {\n    }\n'])),U.Uh.small,U.Uh.medium,U.Uh.large,U.Uh.xlarge),I=U.ZP.div(o||(o=(0,E.Z)(['\n    margin-top: 25px;\n    position: relative;\n\n    .row > [class*="col-"] {\n        padding-right: 0;\n        padding-left: 0;\n    }\n    .row.m-0 {\n        margin: 0 !important;\n    }\n    .img-two {\n        margin-left: 0px;\n        '," {\n            margin-left: 0px;\n        }\n        "," {\n            margin-left: 0px;\n        }\n        "," {\n            margin-left: -23px;\n        }\n    }\n"])),U.Uh.small,U.Uh.large,U.Uh.xlarge),J=U.ZP.div(c||(c=(0,E.Z)([""]))),M=U.ZP.p(u||(u=(0,E.Z)(['\n    color: #464444;\n    font-family: "Yeseva One", cursive;\n    font-size: 22px;\n    line-height: 1.364;\n    margin-bottom: 26px;\n    margin-right: -10px;\n    position: relative;\n    &:before {\n        background-color: #fc6539;\n        content: "";\n        height: 75px;\n        left: -29px;\n        position: absolute;\n        top: 7px;\n        width: 4px;\n    }\n']))),q=U.ZP.div(d||(d=(0,E.Z)(["\n    padding-left: 0px;\n    "," {\n        padding-left: 70px;\n    }\n"])),U.Uh.large),H=U.ZP.div(m||(m=(0,E.Z)(["\n    "," {\n        margin-top: 44px;\n        padding-left: 40px;\n    }\n"])),U.Uh.large),j=(U.ZP.div(p||(p=(0,E.Z)(["\n    background-color: #fc6539;\n    padding: 62px 25px 48px;\n    position: relative;\n    z-index: 1;\n    "," {\n        padding: 62px 35px 48px 43px;\n    }\n    & .img-line-shape {\n        margin-bottom: 34px;\n    }\n    & .bg-line-shape {\n        left: 0;\n        position: absolute !important;\n        top: 0;\n        width: 100%;\n        z-index: -1;\n    }\n"])),U.Uh.large),U.ZP.h3(b||(b=(0,E.Z)(['\n    color: #fff;\n    font-size: 38px;\n    margin-bottom: 59px;\n    padding-left: 28px;\n    position: relative;\n    &::before {\n        background-color: rgba(255, 255, 255, 0.15);\n        border-radius: 50%;\n        content: "";\n        height: 82.5px;\n        left: -1px;\n        position: absolute;\n        top: 50%;\n        width: 82.5px;\n        transform: translate(0, -50%);\n        -webkit-transform: translate(0, -50%);\n        -moz-transform: translate(0, -50%);\n        -ms-transform: translate(0, -50%);\n        -o-transform: translate(0, -50%);\n    }\n']))),U.ZP.p(f||(f=(0,E.Z)(["\n    color: #fff;\n    margin-bottom: 14px;\n    font-size: 14px;\n"]))),U.ZP.p(g||(g=(0,E.Z)(["\n    color: #fff;\n    font-family: ",";\n    font-size: 14px;\n"])),(0,U.R)("fonts.heading")),function(){var n=(0,S.useStaticQuery)("2544500892").aboutUsJson,e=n.section_title,t=e.title,a=e.subTitle,r=n.image1,i=n.content1,l=n.content2,s=n.content3,o=n.mission,c=(0,L.d)(r);return(0,P.tZ)(A,null,(0,P.tZ)(N.Z,null,(0,P.tZ)(y.Z,null,(0,P.tZ)(z.Z,{lg:9},(0,P.tZ)(C.Z,{sx:{mb:"30px"},showImage:!1,title:t,subTitle:a}))),(0,P.tZ)(y.Z,null,(0,P.tZ)(z.Z,{lg:4,xl:4},(0,P.tZ)(I,null,(0,P.tZ)(J,null,(0,P.tZ)(L.G,{image:c,className:"img-one",alt:"Image-Givest"})))),(0,P.tZ)(z.Z,{lg:8,xl:8},(0,P.tZ)(q,null,(0,P.tZ)(M,null,i),(0,P.tZ)("p",null,l),(0,P.tZ)("p",{className:"mb-0"},s)),(0,P.tZ)(H,null,(0,P.tZ)(y.Z,null,o.map((function(n){return(0,P.tZ)(z.Z,{lg:6,md:6,sm:6,key:n.id},(0,P.tZ)(T,{title:n.title,text1:n.text1,text2:n.text2,VerientClassName:n.VerientClassName}))}))))))))}),F=t(3936),D=t(393),Q=U.ZP.section(x||(x=(0,E.Z)(["\n    padding: 95px 0 70px;\n    "," {\n        padding: 150px 0 118px;\n    }\n    & .container {\n        max-width: 1676px;\n    }\n"])),U.Uh.xlarge),W=U.ZP.div(Z||(Z=(0,E.Z)(["\n    text-align: center;\n    "," {\n        text-align: left;\n    }\n"])),U.Uh.xlarge),Y=t(9207),K=t(1784),X=function(){var n=(0,S.useStaticQuery)("1118532507").volunteerJson,e=n.section_title,t=e.title,a=e.subTitle,r=n.text,i=n.team;return(0,P.tZ)(Q,null,(0,P.tZ)(N.Z,null,(0,P.tZ)(y.Z,null,(0,P.tZ)(z.Z,{lg:{span:6,offset:3},xl:{span:4,offset:0}},(0,P.tZ)(W,{sx:{mb:"60px"}},(0,P.tZ)(C.Z,{sx:{mb:"50px"},titleStyle:!0,title:t,subTitle:a}),(0,P.tZ)("div",{className:"desc"},(0,P.tZ)("p",null,r),(0,P.tZ)(D.Z,{sx:{mt:"30px"},color:"gradient",path:"/volunteer"},"Join Now"," ",(0,P.tZ)("i",{className:"flaticon-right-arrow"}))))),(0,P.tZ)(z.Z,{xl:8},(0,P.tZ)("div",{className:"team-member-items"},(0,P.tZ)(K.Z,{layout:{nav:"testimonial-slider-navigation",dots:"testimonial-dots-style"},effect:!0,autoPlay:!0,slidesPerView:1,spaceBetween:30,breakpoints:{320:{slidesPerView:1},480:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:3}}},i&&i.map((function(n,e){return(0,P.tZ)(K.o,{key:e},(0,P.tZ)(Y.Z,{name:n.name,designation:n.designation,images:n.images.childrenImageSharp[0]}))}))))))))},$=function(n){var e=n.location,t=n.pageContext;return(0,V.tZ)(h.Z,null,(0,V.tZ)(v.Z,{title:"About us",pathname:"/"}),(0,V.tZ)(F.Z,{pageContext:t,location:e,title:"About Us"}),(0,V.tZ)(j,null),(0,V.tZ)(X,null),(0,V.tZ)(k.Z,null),(0,V.tZ)(_.Z,null),(0,V.tZ)(w.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-about-us-js-3d928c2f4079cd85da9f.js.map