/*! For license information please see 2767.de231c80.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2767],{8617:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a="iconExternalLink_3J9K",l=function(e){var t=e.width,n=void 0===t?13.5:t,l=e.height,o=void 0===l?13.5:l;return r.createElement("svg",{width:n,height:o,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},9804:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r=n(7294),a=n(6010),l=n(5977),o=n(4973),i=n(1773),c="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,r.useRef)(null),t=(0,l.k6)().action;return(0,i.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&s(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},r.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_3WsW",d="announcementBarClose_38nx",f="announcementBarContent_3EUC",v="announcementBarCloseable_3myR";var h=function(){var e,t=(0,i.nT)(),n=t.isClosed,l=t.close,c=(0,i.LU)().announcementBar;if(!c)return null;var s=c.content,u=c.backgroundColor,h=c.textColor,b=c.isCloseable;return!s||b&&n?null:r.createElement("div",{className:m,style:{backgroundColor:u,color:h},role:"banner"},r.createElement("div",{className:(0,a.Z)(f,(e={},e[v]=b,e)),dangerouslySetInnerHTML:{__html:s}}),b?r.createElement("button",{type:"button",className:(0,a.Z)(d,"clean-btn"),onClick:l,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},b=n(2122),g=n(6979),p=n(2944),E=n(5350),Z=n(7898),_=function(e){var t=(0,l.TH)(),n=(0,r.useState)(e),a=n[0],o=n[1],c=(0,r.useRef)(!1),s=(0,r.useState)(0),u=s[0],m=s[1],d=(0,r.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,Z.Z)((function(t,n){var r=t.scrollY,a=null==n?void 0:n.scrollY;if(e)if(r<u)o(!0);else{if(c.current)return c.current=!1,void o(!1);a&&0===r&&o(!0);var l=document.documentElement.scrollHeight-u,i=window.innerHeight;a&&r>=a?o(!1):r+i<l&&o(!0)}}),[u,c]),(0,i.SL)((function(t){e&&!t.location.hash&&o(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:a}};var k=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},w=n(3783),N=n(907),y=n(7819),C=n(5537),L=n(9756),I=["width","height","className"],D=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,l=void 0===a?30:a,o=e.className,i=(0,L.Z)(e,I);return r.createElement("svg",(0,b.Z)({className:o,width:n,height:l,viewBox:"0 0 30 30","aria-hidden":"true"},i),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},T="toggle_3Zt9",S="navbarHideable_2qcr",B="navbarHidden_3yey",x="right";function A(){return(0,i.LU)().navbar.items}function U(){var e=(0,i.LU)().colorMode.disableSwitch,t=(0,E.Z)(),n=t.isDarkTheme,a=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():a()}),[a,l]),disabled:e}}function M(e){var t=e.sidebarShown,n=e.toggleSidebar;k(t);var l=A(),c=U(),s=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,l=null==(t=(0,i.g8)())?void 0:t({toggleSidebar:a}),o=(0,i.D9)(l),c=(0,r.useState)((function(){return!1})),s=c[0],u=c[1];(0,r.useEffect)((function(){l&&!o&&u(!0)}),[l,o]);var m=!!l;return(0,r.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,r.useCallback)((function(){u(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(C.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&t&&r.createElement(p.Z,{checked:c.isDarkTheme,onChange:c.toggle})),r.createElement("div",{className:(0,a.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.createElement(y.Z,(0,b.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},r.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var P=function(){var e,t,n,l,o,c,s,u=(0,i.LU)().navbar,m=u.hideOnScroll,d=u.style,f=(t=(0,w.Z)(),n="mobile"===t,l=(0,r.useState)(!1),o=l[0],c=l[1],s=(0,r.useCallback)((function(){c((function(e){return!e}))}),[]),(0,r.useEffect)((function(){"desktop"===t&&c(!1)}),[t]),{shouldRender:n,toggle:s,shown:o}),v=U(),h=(0,N.gA)(),E=_(m),Z=E.navbarRef,k=E.isNavbarVisible,L=A(),I=L.some((function(e){return"search"===e.type})),P=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:x)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:x)}))}}(L),R=P.leftItems,H=P.rightItems;return r.createElement("nav",{ref:Z,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===d,"navbar--primary":"primary"===d,"navbar-sidebar--show":f.shown},e[S]=m,e[B]=m&&!k,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==L?void 0:L.length)>0||h)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:f.toggle,onKeyDown:f.toggle},r.createElement(D,null)),r.createElement(C.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),R.map((function(e,t){return r.createElement(y.Z,(0,b.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},H.map((function(e,t){return r.createElement(y.Z,(0,b.Z)({},e,{key:t}))})),!v.disabled&&r.createElement(p.Z,{className:T,checked:v.isDarkTheme,onChange:v.toggle}),!I&&r.createElement(g.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:f.toggle}),f.shouldRender&&r.createElement(M,{sidebarShown:f.shown,toggleSidebar:f.toggle}))},R=n(6742),H=n(4996),V=n(3919),W="footerLogoLink_MyFc",z=n(8465),O=n(8617),j=["to","href","label","prependBaseUrlToHref"];function G(e){var t=e.to,n=e.href,a=e.label,l=e.prependBaseUrlToHref,o=(0,L.Z)(e,j),i=(0,H.Z)(t),c=(0,H.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(R.Z,(0,b.Z)({className:"footer__link-item"},n?{href:l?c:n}:{to:i},o),n&&!(0,V.Z)(n)?r.createElement("span",null,a,r.createElement(O.Z,null)):a)}var q=function(e){var t=e.sources,n=e.alt;return r.createElement(z.Z,{className:"footer__logo",alt:n,sources:t})};var F=function(){var e=(0,i.LU)().footer,t=e||{},n=t.copyright,l=t.links,o=void 0===l?[]:l,c=t.logo,s=void 0===c?{}:c,u={light:(0,H.Z)(s.src),dark:(0,H.Z)(s.srcDark||s.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},o&&o.length>0&&r.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(G,e))}))):null)}))),(s||n)&&r.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},s.href?r.createElement(R.Z,{href:s.href,className:W},r.createElement(q,{alt:s.alt,sources:u})):r.createElement(q,{alt:s.alt,sources:u})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},J=n(412),K=(0,i.WA)("theme"),Q="light",Y="dark",X=function(e){return e===Y?Y:Q},$=function(e){(0,i.WA)("theme").set(X(e))},ee=function(){var e=(0,i.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,l=(0,r.useState)(function(e){return J.Z.canUseDOM?X(document.documentElement.getAttribute("data-theme")):X(e)}(t)),o=l[0],c=l[1],s=(0,r.useCallback)((function(){c(Q),$(Q)}),[]),u=(0,r.useCallback)((function(){c(Y),$(Y)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",X(o))}),[o]),(0,r.useEffect)((function(){if(!n)try{var e=K.get();null!==e&&c(X(e))}catch(t){console.error(t)}}),[c]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?Y:Q)}))}),[]),{isDarkTheme:o===Y,setLightTheme:s,setDarkTheme:u}},te=n(2924);var ne=function(e){var t=ee(),n=t.isDarkTheme,a=t.setLightTheme,l=t.setDarkTheme;return r.createElement(te.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:l}},e.children)},re="docusaurus.tab.",ae=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,i.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,i._f)().forEach((function(t){if(t.startsWith(re)){var n=t.substring(re.length);e[n]=(0,i.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},le=n(9443);var oe=function(e){var t=ae(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(le.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function ie(e){var t=e.children;return r.createElement(ne,null,r.createElement(i.pl,null,r.createElement(oe,null,r.createElement(i.L5,null,r.createElement(i.Cn,null,t)))))}var ce=n(9105),se=n(2263);function ue(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(ce.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var me=n(1217);function de(){var e=(0,se.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,i.l5)();return r.createElement(ce.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function fe(e){var t=e.permalink,n=(0,se.Z)().siteConfig.url,a=function(){var e=(0,se.Z)().siteConfig.url,t=(0,l.TH)().pathname;return e+(0,H.Z)(t)}(),o=t?""+n+t:a;return r.createElement(ce.Z,null,r.createElement("meta",{property:"og:url",content:o}),r.createElement("link",{rel:"canonical",href:o}))}function ve(e){var t=(0,se.Z)(),n=t.siteConfig.favicon,a=t.i18n,l=a.currentLocale,o=a.localeConfigs,c=(0,i.LU)(),s=c.metadatas,u=c.image,m=e.title,d=e.description,f=e.image,v=e.keywords,h=e.searchMetadatas,g=(0,H.Z)(n),p=(0,i.pe)(m),E=l,Z=o[l].direction;return r.createElement(r.Fragment,null,r.createElement(ce.Z,null,r.createElement("html",{lang:E,dir:Z}),n&&r.createElement("link",{rel:"shortcut icon",href:g}),r.createElement("title",null,p),r.createElement("meta",{property:"og:title",content:p}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&r.createElement(me.Z,{image:u}),f&&r.createElement(me.Z,{image:f}),r.createElement(me.Z,{description:d,keywords:v}),r.createElement(fe,null),r.createElement(de,null),r.createElement(ue,(0,b.Z)({tag:i.HX,locale:l},h)),r.createElement(ce.Z,null,s.map((function(e,t){return r.createElement("meta",(0,b.Z)({key:"metadata_"+t},e))}))))}var he=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var be=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,o=e.pageClassName;return he(),r.createElement(ie,null,r.createElement(ve,e),r.createElement(u,null),r.createElement(h,null),r.createElement(P,null),r.createElement("div",{className:(0,a.Z)(i.kM.wrapper.main,l,o)},t),!n&&r.createElement(F,null))}},5537:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),o=n(6742),i=n(8465),c=n(4996),s=n(2263),u=n(1773),m=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.Z)().siteConfig.title,n=(0,u.LU)().navbar,d=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,b=e.titleClassName,g=(0,a.Z)(e,m),p=(0,c.Z)(v.href||"/"),E={light:(0,c.Z)(v.src),dark:(0,c.Z)(v.srcDark||v.src)};return l.createElement(o.Z,(0,r.Z)({to:p},g,v.target&&{target:v.target}),v.src&&l.createElement(i.Z,{className:h,sources:E,alt:v.alt||d||t}),null!=d&&l.createElement("b",{className:b},d))}},5525:function(e,t,n){"use strict";n.d(t,{O:function(){return b}});var r=n(2122),a=n(9756),l=n(7294),o=n(6010),i=n(6742),c=n(4996),s=n(8617),u=n(3919),m=n(7819),d=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],f=["className","isDropdownItem"],v=["className","isDropdownItem"],h=["mobile","position"];function b(e){var t,n=e.activeBasePath,o=e.activeBaseRegex,m=e.to,f=e.href,v=e.label,h=e.activeClassName,b=void 0===h?"":h,g=e.prependBaseUrlToHref,p=(0,a.Z)(e,d),E=(0,c.Z)(m),Z=(0,c.Z)(n),_=(0,c.Z)(f,{forcePrependBaseUrl:!0}),k=v&&f&&!(0,u.Z)(f),w="dropdown__link--active"===b;return l.createElement(i.Z,(0,r.Z)({},f?{href:g?_:f}:Object.assign({isNavLink:!0,activeClassName:null!=(t=p.className)&&t.includes(b)?"":b,to:E},n||o?{isActive:function(e,t){return o?new RegExp(o).test(t.pathname):t.pathname.startsWith(Z)}}:null),p),k?l.createElement("span",null,v,l.createElement(s.Z,w&&{width:12,height:12})):v)}function g(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,a.Z)(e,f),s=l.createElement(b,(0,r.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?l.createElement("li",null,s):s}function p(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,v));return l.createElement("li",{className:"menu__list-item"},l.createElement(b,(0,r.Z)({className:(0,o.Z)("menu__link",t)},n)))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,o=(e.position,(0,a.Z)(e,h)),i=n?p:g;return l.createElement(i,(0,r.Z)({},o,{activeClassName:(0,m.E)(n)}))}},6400:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),i=n(907),c=n(6010),s=n(7819),u=n(1773),m=n(8780),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,d),b=(0,i.Iw)(v),g=b.activeVersion,p=b.activeDoc,E=(0,u.J)(v).preferredVersion,Z=(0,i.yW)(v),_=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,m.uniq)([g,E,Z].filter(Boolean)),n),k=(0,s.E)(h.mobile);return l.createElement(o.Z,(0,r.Z)({exact:!0},h,{className:(0,c.Z)(h.className,(t={},t[k]=(null==p?void 0:p.sidebar)&&p.sidebar===_.sidebar,t)),activeClassName:k,label:null!=f?f:_.id,to:_.path}))}},9308:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),i=n(3154),c=n(907),s=n(1773),u=n(4973),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,b=e.dropdownItemsBefore,g=e.dropdownItemsAfter,p=(0,a.Z)(e,m),E=(0,c.Iw)(v),Z=(0,c.gB)(v),_=(0,c.yW)(v),k=(0,s.J)(v),w=k.preferredVersion,N=k.savePreferredVersionName;var y,C=(y=Z.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){N(e.name)}}})),[].concat(b,y,g)),L=null!=(t=null!=(n=E.activeVersion)?n:w)?t:_,I=f&&C?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):L.label,D=f&&C?void 0:d(L).path;return C.length<=1?l.createElement(o.Z,(0,r.Z)({},p,{mobile:f,label:I,to:D,isActive:h?function(){return!1}:void 0})):l.createElement(i.Z,(0,r.Z)({},p,{mobile:f,label:I,to:D,items:C,isActive:h?function(){return!1}:void 0}))}},7250:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),i=n(907),c=n(1773),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,i.zu)(m),v=(0,c.J)(m).preferredVersion,h=(0,i.yW)(m),b=null!=(t=null!=f?f:v)?t:h,g=null!=n?n:b.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return l.createElement(o.Z,(0,r.Z)({},d,{label:g,to:p}))}},3154:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),o=n(6010),i=n(1773),c=n(5525),s=n(7819),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,i.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,i=e.position,m=e.className,d=(0,a.Z)(e,u),f=(0,l.useRef)(null),v=(0,l.useRef)(null),h=(0,l.useState)(!1),b=h[0],g=h[1];return(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement("div",{ref:f,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":b})},l.createElement(c.O,(0,r.Z)({className:(0,o.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!b))}}),null!=(t=d.children)?t:d.label),l.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(s.Z,(0,r.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=f.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,a.Z)(e,m)),v=(0,i.be)(),h=f(n,v),b=(0,i.uR)({initialState:function(){return!h}}),g=b.collapsed,p=b.toggleCollapsed,E=b.setCollapsed;return(0,l.useEffect)((function(){h&&E(!h)}),[v,h]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":g})},l.createElement(c.O,(0,r.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),l.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return l.createElement(s.Z,(0,r.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,d),o=n?h:v;return l.createElement(o,r)}},7819:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z},E:function(){return E}});var r=n(9756),a=n(7294),l=n(5525),o=n(3154),i=n(2122),c=["width","height"],s=function(e){var t=e.width,n=void 0===t?20:t,l=e.height,o=void 0===l?20:l,s=(0,r.Z)(e,c);return a.createElement("svg",(0,i.Z)({viewBox:"0 0 20 20",width:n,height:o,"aria-hidden":"true"},s),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},u=n(2263),m=n(1773),d="iconLanguage_3vod",f=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function v(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,c=(0,r.Z)(e,f),v=(0,u.Z)().i18n,h=v.currentLocale,b=v.locales,g=v.localeConfigs,p=(0,m.l5)();function E(e){return g[e].label}var Z=b.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),_=[].concat(n,Z,l),k=t?"Languages":E(h);return a.createElement(o.Z,(0,i.Z)({},c,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(s,{className:d}),a.createElement("span",null,k)),items:_}))}var h=n(6979);function b(e){return e.mobile?null:a.createElement(h.Z,null)}var g=["type"],p={default:function(){return l.Z},localeDropdown:function(){return v},search:function(){return b},dropdown:function(){return o.Z},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};var E=function(e){return e?"menu__link--active":"navbar__link--active"};function Z(e){var t=e.type,n=(0,r.Z)(e,g),l=function(e){var t=p[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return a.createElement(l,n)}},2924:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},8465:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2122),a=n(9756),l=n(7294),o=n(6010),i=n(2389),c=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,i.Z)(),n=(0,c.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,u),b=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,b.map((function(e){return l.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,o.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},7898:function(e,t,n){"use strict";var r=n(7294),a=n(412),l=function(){return a.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(l()),a=function(){var t=l();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},5350:function(e,t,n){"use strict";var r=n(7294),a=n(2924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);