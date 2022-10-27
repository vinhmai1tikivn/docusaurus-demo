"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[8688],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?i.createElement(f,r(r({ref:t},u),{},{components:n})):i.createElement(f,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8062:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"production-build",title:"Creating a Production Build"},c=void 0,s={unversionedId:"production-build",id:"production-build",title:"Creating a Production Build",description:"npm run build creates a build directory with a production build of your app. Inside the build/static directory will be your JavaScript and CSS files. Each filename inside of build/static will contain a unique hash of the file contents. This hash in the file name enables long term caching techniques.",source:"@site/docs/production-build.md",sourceDirName:".",slug:"/production-build",permalink:"/docusaurus-demo/docs/production-build",draft:!1,tags:[],version:"current",frontMatter:{id:"production-build",title:"Creating a Production Build"},sidebar:"docs",previous:{title:"Measuring Performance",permalink:"/docusaurus-demo/docs/measuring-performance"},next:{title:"Running Tests",permalink:"/docusaurus-demo/docs/running-tests"}},u={},d=[{value:"Static File Caching",id:"static-file-caching",level:2},{value:"Profiling",id:"profiling",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," directory with a production build of your app. Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"build/static")," directory will be your JavaScript and CSS files. Each filename inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"build/static")," will contain a unique hash of the file contents. This hash in the file name enables ",(0,o.kt)("a",{parentName:"p",href:"#static-file-caching"},"long term caching techniques"),"."),(0,o.kt)("p",null,"When running a production build of freshly created Create React App application, there are a number of ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," files (called ",(0,o.kt)("em",{parentName:"p"},"chunks"),") that are generated and placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"build/static/js")," directory:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"main.[hash].chunk.js")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This is your ",(0,o.kt)("em",{parentName:"li"},"application")," code. ",(0,o.kt)("inlineCode",{parentName:"li"},"App.js"),", etc.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"[number].[hash].chunk.js")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"These files can either be ",(0,o.kt)("em",{parentName:"li"},"vendor")," code, or ",(0,o.kt)("a",{parentName:"li",href:"/docusaurus-demo/docs/code-splitting"},"code splitting chunks"),". ",(0,o.kt)("em",{parentName:"li"},"Vendor")," code includes modules that you've imported from within ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),". One of the potential advantages with splitting your ",(0,o.kt)("em",{parentName:"li"},"vendor")," and ",(0,o.kt)("em",{parentName:"li"},"application")," code is to enable ",(0,o.kt)("a",{parentName:"li",href:"#static-file-caching"},"long term caching techniques")," to improve application loading performance. Since ",(0,o.kt)("em",{parentName:"li"},"vendor")," code tends to change less often than the actual ",(0,o.kt)("em",{parentName:"li"},"application")," code, the browser will be able to cache them separately, and won't re-download them each time the app code changes.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"runtime-main.[hash].js")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This is a small chunk of ",(0,o.kt)("a",{parentName:"li",href:"https://webpack.js.org/configuration/optimization/#optimization-runtimechunk"},"webpack runtime")," logic which is used to load and run your application. The contents of this will be embedded in your ",(0,o.kt)("inlineCode",{parentName:"li"},"build/index.html")," file by default to save an additional network request. You can opt out of this by specifying ",(0,o.kt)("inlineCode",{parentName:"li"},"INLINE_RUNTIME_CHUNK=false")," as documented in our ",(0,o.kt)("a",{parentName:"li",href:"/docusaurus-demo/docs/advanced-configuration"},"advanced configuration"),", which will load this chunk instead of embedding it in your ",(0,o.kt)("inlineCode",{parentName:"li"},"index.html"),".")),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-demo/docs/code-splitting"},"code splitting")," to split up your application, this will create additional chunks in the ",(0,o.kt)("inlineCode",{parentName:"p"},"build/static")," folder as well."),(0,o.kt)("h2",{id:"static-file-caching"},"Static File Caching"),(0,o.kt)("p",null,"Each file inside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"build/static")," directory will have a unique hash appended to the filename that is generated based on the contents of the file, which allows you to use ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#invalidating_and_updating_cached_responses"},"aggressive caching techniques")," to avoid the browser re-downloading your assets if the file contents haven't changed. If the contents of a file changes in a subsequent build, the filename hash that is generated will be different."),(0,o.kt)("p",null,"To deliver the best performance to your users, it's best practice to specify a ",(0,o.kt)("inlineCode",{parentName:"p"},"Cache-Control")," header for ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),", as well as the files within ",(0,o.kt)("inlineCode",{parentName:"p"},"build/static"),". This header allows you to control the length of time that the browser as well as CDNs will cache your static assets. If you aren't familiar with what ",(0,o.kt)("inlineCode",{parentName:"p"},"Cache-Control")," does, see ",(0,o.kt)("a",{parentName:"p",href:"https://jakearchibald.com/2016/caching-best-practices/"},"this article")," for a great introduction."),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"Cache-Control: max-age=31536000")," for your ",(0,o.kt)("inlineCode",{parentName:"p"},"build/static")," assets, and ",(0,o.kt)("inlineCode",{parentName:"p"},"Cache-Control: no-cache")," for everything else is a safe and effective starting point that ensures your user's browser will always check for an updated ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file, and will cache all of the ",(0,o.kt)("inlineCode",{parentName:"p"},"build/static")," files for one year. Note that you can use the one year expiration on ",(0,o.kt)("inlineCode",{parentName:"p"},"build/static")," safely because the file contents hash is embedded into the filename."),(0,o.kt)("h2",{id:"profiling"},"Profiling"),(0,o.kt)("p",null,"ReactDOM automatically supports profiling in development mode for v16.5+, but since profiling adds some small\nadditional overhead it is opt-in for production mode. You can opt-in by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--profile")," flag. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build -- --profile")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn build --profile")," to enable profiling in the production build. See the ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler"},"React docs")," for details about profiling\nusing the React DevTools."))}h.isMDXComponent=!0}}]);