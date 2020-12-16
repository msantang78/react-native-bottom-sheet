(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(3),r=(n(0),n(89));const a={id:"methods",title:"Methods",slug:"/methods",hide_table_of_contents:!0},c={unversionedId:"methods",id:"methods",isDocsHomePage:!1,title:"Methods",description:"These methods are accessable using the bottom sheet reference.",source:"@site/docs/methods.md",slug:"/methods",permalink:"/react-native-bottom-sheet/methods",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/methods.md",version:"current",sidebar:"packages",previous:{title:"Props",permalink:"/react-native-bottom-sheet/props"},next:{title:"Hooks",permalink:"/react-native-bottom-sheet/hooks"}},i=[{value:"<code>snapTo</code>",id:"snapto",children:[]},{value:"<code>expand</code>",id:"expand",children:[]},{value:"<code>collapse</code>",id:"collapse",children:[]},{value:"<code>close</code>",id:"close",children:[]}],s={rightToc:i};function p({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"These methods are accessable using the bottom sheet reference."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import BottomSheet from '@gorhom/bottom-sheet';\n\nconst App = () => {\n  const bottomSheetRef = useRef<BottomSheet>(null);\n\n  const close = () => bottomSheetRef.current.close()\n\n  return (\n    <BottomSheet ref={bottomSheetRef}>\n  )\n}\n\n")),Object(r.b)("h3",{id:"snapto"},Object(r.b)("inlineCode",{parentName:"h3"},"snapTo")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"type snapTo = (index: number) => void;\n")),Object(r.b)("p",null,"Animate the sheet to one of the provided point from ",Object(r.b)("inlineCode",{parentName:"p"},"snapPoints"),"."),Object(r.b)("h3",{id:"expand"},Object(r.b)("inlineCode",{parentName:"h3"},"expand")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"type expand = () => void;\n")),Object(r.b)("p",null,"Animate the sheet to the maximum provided point from ",Object(r.b)("inlineCode",{parentName:"p"},"snapPoints"),"."),Object(r.b)("h3",{id:"collapse"},Object(r.b)("inlineCode",{parentName:"h3"},"collapse")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"type collapse = () => void;\n")),Object(r.b)("p",null,"Animate the sheet to the minimum provided point from ",Object(r.b)("inlineCode",{parentName:"p"},"snapPoints"),"."),Object(r.b)("h3",{id:"close"},Object(r.b)("inlineCode",{parentName:"h3"},"close")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"type close = () => void;\n")),Object(r.b)("p",null,"Close the sheet."))}p.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=o,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||a;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);