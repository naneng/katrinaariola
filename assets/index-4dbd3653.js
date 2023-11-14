import{u as T,j as e,H as L,C as p,r as o,O as v,P as u,a as S,b as j,c as J,F as k,D as P,i as H,d as z,e as U,f as q,m as c,L as Y,T as B,g as R,h as G,k as f,l as W,B as Z,n as V,R as K}from"./vendor-b8d1164c.js";/* empty css               */import"./index-4dbd3653.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function et(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function tt(t){if(t.__esModule)return t;var s=t.default;if(typeof s=="function"){var n=function r(){return this instanceof r?Reflect.construct(s,arguments,this.constructor):s.apply(this,arguments)};n.prototype=s.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var a=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:function(){return t[r]}})}),n}const b=()=>{const{progress:t}=T();return e.jsxs(L,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e.jsx("span",{className:"canvas-load"}),e.jsxs("p",{style:{fontSize:14,color:"#444ae5",fontWeight:800,marginTop:40},children:[t.toFixed(2),"%"]})]})},X=()=>{const t=S("./planet/scene.gltf");return e.jsx("primitive",{object:t.scene,scale:2.5,"position-y":0,"rotation-y":0})},_=()=>e.jsx(p,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:e.jsxs(o.Suspense,{fallback:e.jsx(b,{}),children:[e.jsx(v,{enableDamping:!0,dampingFactor:.05,autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e.jsx(X,{}),e.jsx(u,{all:!0})]})}),M=t=>{const[s]=J([t.imgUrl]);return e.jsxs(k,{speed:1.75,rotationIntensity:1,floatIntensity:2,children:[e.jsx("ambientLight",{intensity:.25}),e.jsx("directionalLight",{position:[0,0,.05]}),e.jsxs("mesh",{castShadow:!0,receiveShadow:!0,scale:2.75,children:[e.jsx("icosahedronGeometry",{args:[1,1]}),e.jsx("meshStandardMaterial",{color:"#fff8eb",polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0}),e.jsx(P,{position:[0,0,1],rotation:[2*Math.PI,0,6.3],map:s})]})]})};M.propTypes={imgUrl:j.string.isRequired};const I=({icon:t})=>e.jsxs(p,{frameloop:"demand",gl:{preserveDrawingBuffer:!0},children:[e.jsxs(o.Suspense,{fallback:e.jsx(b,{}),children:[e.jsx(v,{enableDamping:!0,dampingFactor:.05,enableZoom:!1}),e.jsx(M,{imgUrl:t})]}),e.jsx(u,{all:!0})]});I.propTypes={icon:j.string.isRequired};const C=({isMobile:t})=>{const s=S("./desktop_pc/scene.gltf");return e.jsxs("mesh",{children:[e.jsx(k,{speed:1.75,rotationIntensity:1,floatIntensity:2}),e.jsx("hemisphereLight",{intensity:.95,groundColor:"black"}),e.jsx("spotLight",{position:t?[-100,80,-10]:[-20,50,10],angle:.52,penumbra:1,intensity:4,castShadow:!0,"shadow-mapSize":1024}),e.jsx("pointLight",{intensity:1}),e.jsx("primitive",{object:s.scene,scale:t?.7:.75,position:t?[-1,-3,-2.2]:[0,-3.25,-1.5],rotation:[2*Math.PI,0,6.25]})]})};C.propTypes={isMobile:j.bool.isRequired};const $=()=>{const[t,s]=o.useState(!1);return o.useEffect(()=>{const n=window.matchMedia("(max-width: 500px)");s(n.matches);const r=a=>{s(a.matches)};return n.addEventListener("change",r),()=>{n.removeEventListener("change",r)}},[]),e.jsxs(p,{frameloop:"demand",shadows:!0,dpr:[1,2],camera:{position:[20,3,5],fov:25},gl:{preserveDrawingBuffer:!0},children:[e.jsxs(o.Suspense,{fallback:e.jsx(b,{}),children:[e.jsx(v,{enableDamping:!0,dampingFactor:.05,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2,autoRotate:!0,autoRotateSpeed:.2,reverseOrbit:!1}),e.jsx(C,{isMobile:t})]}),e.jsx(u,{all:!0})]})},ee=t=>{const s=o.useRef(),[n]=o.useState(()=>H(new Float32Array(5001),{radius:1.2}));return z((r,a)=>{s.current.rotation.x-=a/10,s.current.rotation.y-=a/15}),e.jsx("group",{rotation:[0,0,Math.PI/4],children:e.jsx(U,{ref:s,positions:n,stride:3,frustumCulled:!0,...t,children:e.jsx(q,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},te=()=>e.jsx("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:e.jsxs(p,{camera:{position:[0,0,1]},children:[e.jsx(o.Suspense,{fallback:null,children:e.jsx(ee,{})}),e.jsx(u,{all:!0})]})}),l={paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",padding:"sm:px-16 px-6 sm:py-16 py-10",heroHeadText:"font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",heroSubText:"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",sectionHeadText:"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",sectionSubText:"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"},se=()=>e.jsxs("section",{className:"relative w-full h-screen mx-auto",children:[e.jsxs("div",{className:`${l.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`,children:[e.jsxs("div",{className:"flex flex-col justify-center items-center mt-5",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-indigo-600"}),e.jsx("div",{className:"w-1 sm:h-80 h-40 violet-gradient"})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:`${l.heroHeadText} text-white`,children:["Hi, I'm ",e.jsx("span",{className:"text-indigo-600",children:"Katrina"})]}),e.jsxs("p",{className:`${l.heroSubText} mt-2 text-white-100`,children:["I develop 3D visuals, user ",e.jsx("br",{className:"sm:block hidden"}),"interfaces and web applications"]})]})]}),e.jsx($,{}),e.jsx("div",{className:"absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center",children:e.jsx("a",{href:"#about",children:e.jsx("div",{className:"w-[35px] h-[52px] rounded-3xl border-2 border-indigo-600 bg-transparent flex justify-center items-start p-2",children:e.jsx(c.div,{animate:{y:[0,24,0]},transition:{duration:1.5,repeat:1/0,repeatType:"loop"},className:"w-3 h-3 rounded-full  mb-1 blue-pink-gradient"})})})})]}),ae=""+new URL("logo-42c97228.svg",import.meta.url).href,ne=""+new URL("backend-565fc01f.png",import.meta.url).href,re=""+new URL("creator-dbbffaec.png",import.meta.url).href,oe=""+new URL("mobile-896ef2f5.png",import.meta.url).href,ie=""+new URL("web-0d05165f.png",import.meta.url).href,le=""+new URL("github-3b4e1609.png",import.meta.url).href,ce=""+new URL("menu-242d80a8.svg",import.meta.url).href,de=""+new URL("close-ad0e0ca6.svg",import.meta.url).href,me=""+new URL("css-79a7f026.png",import.meta.url).href,Ae=""+new URL("figma-184a11e6.png",import.meta.url).href,pe="data:image/png;base64,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",ue=""+new URL("html-92b76a73.png",import.meta.url).href,xe="data:image/png;base64,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",ge=""+new URL("mongodb-54000b2b.png",import.meta.url).href,he=""+new URL("nodejs-d83eb6dd.png",import.meta.url).href,fe=""+new URL("reactjs-966214a8.png",import.meta.url).href,ve=""+new URL("sql-a26ab4c4.png",import.meta.url).href,je=""+new URL("p5-b14bc790.png",import.meta.url).href,be=""+new URL("tailwind-6ece120d.png",import.meta.url).href,we=""+new URL("threejs-1d0654a8.svg",import.meta.url).href,ye=""+new URL("canva-294b1c6f.png",import.meta.url).href,Ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAAAzCAYAAACXKb3vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqrSURBVHgB7Z3xdds4D8CR793/55vg003QdIKqE3y9CaJO0HQCuxM0ncC5CZJOYN8ESSeQvgnimwBHVPSL4iMBkIIUO+HvPT07EQmCFARCFEkDFAqFQqFQKBQKhVfK2f4LIt64j/NAmu3Z2dlHKJwU7npeuY//hc656/n7QdoP7uNrRNRnl/4WCi+WXwbfF+6oAmkqKJwiseuZmnYBhRfNf6BQKLxqihMoFF45v0ChUDhp3JgOPbIFH9vceE4nZC9OoFB4AdAg8EXk3BkIlMeBQuGVU5xAofDKKU6gUHjlFCdQKLxyNE6ggkKhcJL4NwcsJRIoFF42v0oJRr8i9J6mgqfvKe/d+8kdzITToYKnU1+p7J3T4R5OnGNoX4lB++91JN2659Ax0l7Ppo/XqYLH9lmAvX2KNzpHlhPwDf3JHQ1EHhdcms59bN3xRTNhIaP8BvoFMrToaRFJRx/3Xo/vTo8tTIi/2DX0bfKr1+svV+51ggzKQwt63vnPWN06eKzXrAt8Bte/9kcsXQe9jn9O1fYH7VUD8/jq9SF7+O6O26mcwsA+9zpJ9kmH2EYufeNlDlkAcw0c1y7fT6cTOPe0TJdwg2HaA0WW7njANNb+BhmFk1EzemposW9IM5y8hW+TNlb3RDmpbRusl/v7OpY4UHbDyG4OdFxjHi0atj2Oay/0+dZoYJcDnSovM1enlmsjZK5pJs1hAZtIwnbQ6BvMp3VHDRn4sr+iHS2OvPgJOolOwKX5gPmGE6wXGjsB93lhreOItv9kpMten0sYAT46JCtaDDgDfE4ngL2Ha9GGi8QGtiz7kCVkkKjTWpC1RFtad5yjoRNAex3pBv4AieD4johjjYqR9IBOZAt3OA3Lg7Ke1Qls0A4ygPOEBm5xWpIcQYZOa0bWEqeB2jhqmAE9OCcwlYET6g4B57EFqqvaEcyk03pQ3iROQDMwWMG/B1u20A+u/Bx1Hfyfbu5PwM8toEa+cQq85QZmsA8ZN6Cbp7DzOu0GZUgDJntWrixabfUFdGh12vN36J/YO58V6OigHzwa1q+C8E5Q+/MqR6tAkrMf2NpTATNYe8CVa4cfylHyG9DbAsnr4KlOtSLvuS/nvZTQwD4r0F2jxtvnR3i834ZvYlIZDhI+vf9Q19s/oGJwx6W5RPmZbSXIaFFmg8w4A/aeulHKqhX1WirkbLCvf8XIqVHHWlG/5N4hIKdJFNFiX8cFoxuNc2iiiBaF3hd1Yy93vszYSPwC9bbwFQRQd79QmpqRkWKfl5m6/Be0oFwpdRjv5Z0j7wgemLxLhS7qwRzU3Swt8ka9QPliqXRSyKHzKW2dFJYG8qc4Aeq9U0LmS4XMFZNfo9sKEqD0Cpk1k/+TkFfVWQ7kaeyTZFaR/DdMPlMnkDyCirIB1BBukBb5xsgKdVG++Csmr2SMWgcgyWkxY/Qceyelen7P0GnPCjJARYeA8R68FXRqIAOUbWETyfec9rmO5OMciJkTaCETQe5lIL1kkDWMAPueLAYXnXDeVjUXwMtpGTl0roJMUBet5DqBKxgByh3CKkOvFYwAeVsg6gydRo3FoBwRLBLzmDmBBjJB/uJfBdK3THr1zcboQzcK1yvVkXxcL1spyz5HngZGgorxhkAeTXSSOxA1LGfDlPGQmH60Lfgy7lLKwOe3z1UgzyxOINu7IW/464S0RAUGIB92xUKuNpJeHSUh7xCzo61AORumnJAT+IA8DRiAsoOqB2kXQtoKDBB0ejhIewz2uQmkH+UEVKsIRy502DHnfjv4u2bSXhuuQeBC2zry/9E9IUR+DMSjfUWpIVUWd412KWsfOPw89S2TZNjZ1Ey6eytb8DrF6k+OSKvT97nsEw2isiHPvZT4cPUTF3H8BUb4+QnbyOkq0sgWDV8x58Y42pCsHdhg1u6e78y5N4PvFZNuTp3OI98PuQUjBPskKjBE4wQ6mA8udLG8SYgfzLlRSzMZqtgJy2XP3og6sMG63bXyOKe7BVs4narB92OxT/XjubOF/0tpJo8EEkMk7sJ3YEsHMyI8L3Zgzw+wwSqi2NMp01XMOWudLOR1YIt1HaMc285CUScwwdrv2Rr5xHkN7dTBSCawzw5m4mS2F8OUVx06TAdXFMx9M8UeaTpIw7qd5m53DRavP63rVcFMHJsT4J6rfgNbKubc72CM7yl2GbrkkmKUOyM5GrTyOJ0qsKVSpptTp9mc5bE5gb+ZczXY8gbmh1s1aR3p1JH/d4H/ccatHoRSwskbDmJ1mTJy4GyhG3w/FvvswJBTigS4d+xJ4ONegHPDvdr6CEYgv2HHvwYM/eBtzBG8Mw51uet4H/meIiOHmjnXDb4fi32avok4NiewZc7VaLcfXNLuRgJdQtotc85Sp4sMHWKGRQ6gAQMSjZub60BzOWqw0amBeCi/O9j88xbiWNon51C2k+2ajMqNRjNlp0yB5OZN38BIULfstg7kU9eBKVuaF34JI0F5amtstR47fRZt1g6sMaEdkZ/+rG53QaeWKWOdqJPF2gHJPptAnui0YUgBj8cJcPOmiVE9JvKrAffUgXzqOgjlc/O8o2vGlbIlA5L2O8zOq9BNWoPfBPJIaw2WMAKU9604D+SRVkOOtU9pOXgVyPPinIC0cCRrk0ove4066kBedR0EHaSeusXp9hOoBBmNkD93Y9YLQW7L5N1MpNNSkHsTySdFc1PaZ/J+ApACHokT8OmlaIBQX3zse8gN6qkDMpLqIOgjrWNvMcGQsO8xW0HmlVKW5EjWmOCkULclWwN83SRSbEG7VXzFyNDslpRqn1K7txjfWehFOgHV5hg+DfVe3HPuEtP3qK/H1kFoD2391shvc1WjLrppUflMj7qbjuTRjVQx9btEXR1F54Sy09zr1DA60Y22RJ0trBQ6bRRyWuTtM0WnhtFllBM4G1YKwiO39BtuoybPMMrQSOf7SJ4a+t1ctQxHk/e7ueYOZr0//EmonDpwYP+8SfXT6phbP8rzNmUNB/YDlOJmmwP5w1H9CvQTZyjfe81oN2Ofkk6ptkA/zdVIifyNfQdpdc21zy9OpxXEdbmGyBshl+8MtDCe7Q5GgnE2Qj5N2JULF37VVnUQ6iftvTeWKfe7G0uLaY8V6j0UR3ANCeA8vzuwUugxKhLQzBOY5p2kAufEKFT8DLZQff5wxzd4ZvzyYYoiOrCngz4CyJpY4nse67bfs4XE6ISiBXe8hemu2zdNBDDE60/X7xam4TMXAVhx9AuIvCOgx5EOxrOF3vimumjJDBzBn2AH3ShJN1kI47YnyAGTYaseASI60aPKR0OdOugfSbLmaFAbu+MPY522XifVYK4ZGH8cGD0pgwl1Ul+v0SBLi+ls8CDER/51WD1VHYT6UXh5jXnsf2U3K/xX6NZg/s/RkW70eDF6wlFApxbzaK11wv76rTBfpw3m/Uaj2cAgecLQooUu4Se6YkrGJppkyfYNRcc7iA/MUA9Lc/VvQ7/7jv2NHpvY8e0wjLauAwc+Tq8l/SqI17GDvteg9QDXk00nHeB1o7anqa3kcEI30X5no5/tD/2egJPp5q8l6fRG0ImuKbVV0CaMdSJ9akGnDp7aaQcZYP/m4F3onP/5Mhb9yGGhEMD3pEMD383hjDhOQaczu01JC4VCYRz/AEVnJPBfIHDtAAAAAElFTkSuQmCC",Ee=""+new URL("temple-0c492213.png",import.meta.url).href,Se=""+new URL("lewagon-1c4b7fd5.png",import.meta.url).href,ke=""+new URL("moody-d46b64e4.png",import.meta.url).href,Be=""+new URL("temperatureconverter-228f07e0.png",import.meta.url).href,Re=""+new URL("bookclub-fb62d25e.png",import.meta.url).href,Me=""+new URL("tictactoe-ec41f0d4.png",import.meta.url).href,N=[{id:"about",title:"About"},{id:"work",title:"Work"},{id:"contact",title:"Contact"}],Ie=[{title:"Web Developer",icon:ie},{title:"UI UX",icon:oe},{title:"Backend Developer",icon:ne},{title:"3D Content Creator",icon:re}],Ce=[{name:"HTML 5",icon:ue},{name:"CSS 3",icon:me},{name:"JavaScript",icon:xe},{name:"React JS",icon:fe},{name:"p5",icon:je},{name:"sql",icon:ve},{name:"Tailwind CSS",icon:be},{name:"Node JS",icon:he},{name:"MongoDB",icon:ge},{name:"Three JS",icon:we},{name:"git",icon:pe},{name:"figma",icon:Ae},{name:"canva",icon:ye}],De=[{title:"Web Developer Intern",company_name:"Hardboot Inc.",icon:Ne,iconBg:"#250657",date:"May 2023 - Sep 2023",points:["Prepared website low-fidelity wireframes and high-fidelity mockups for developers and project managers.","Created branding and logos incorporating desired visual elements using Figma.","Engaged with personnel to turn mock-ups, wireframes and conceptual drawings into functional web pages in Wordpress.","Brainstormed and executed strategies to increase business and drive profit growth.","Maintained consistent style across platforms and browsers through skilled handling of CSS changes.","Designed and implemented new features and functionality for WordPress themes."]},{title:"Fullstack Web Developer Graduate",company_name:"Le Wagon",icon:Se,iconBg:"#FFF",date:"Jul 2018 - Sep 2018",points:["Completed a rigorous 9-week coding bootcamp focused on Ruby on Rails, HTML, CSS, Bootstrap, JavaScript, JQuery, SQL, Git, GitHub, and Heroku.","Developed deployed a clone of AirBnB and a Rails prototype of the OllieBoard app.","Collaborated with a diverse team to design, test and debug, and ship production-ready web applications.","Gained hands-on experience in UX/UI design, mockup building, and web hosting.","Coordinated concepts, libraries and style guides for development team.","Managed back end server logic protocols and database connections.","Tested and validated programs to enhance applications and improve performance."]},{title:"Web Specialist",company_name:"Temple University Campus Recreation",icon:Ee,iconBg:"#250657",date:"Aug 2008 - Dec 2010",points:["Managed and maintained department website to match various team specifications ensuring up-to- date contents and active links.","Designed layouts, graphics, icons, logos and created and/or incorporated color scheme based on internal website requests.","Researched and evaluated new design trends.","Performed software and hardware installations and updates for office computers associated devises."]}],Oe=[{name:"Moody",description:"Interactive app that allows user to change background and font color.",tags:[{name:"react",color:"blue-text-gradient"},{name:"lodash",color:"green-text-gradient"},{name:"yup",color:"pink-text-gradient"}],image:ke,source_code_link:"https://naneng.github.io/moody/"},{name:"Book Club",description:"A book repo that allows user to search and favorite books.",tags:[{name:"react",color:"blue-text-gradient"},{name:"lodash",color:"green-text-gradient"},{name:"css",color:"pink-text-gradient"}],image:Re,source_code_link:"https://naneng.github.io/book-club/"},{name:"TicTacToe",description:"Tictactoe game app that displays player turns and movements",tags:[{name:"react",color:"blue-text-gradient"},{name:"css",color:"pink-text-gradient"}],image:Me,source_code_link:"https://naneng.github.io/tictactoe/"},{name:"Temperature Converter",description:"Web application that enables users to convert temperature degrees from celsius to fahrenheit.",tags:[{name:"react",color:"blue-text-gradient"},{name:"javascript",color:"pink-text-gradient"}],image:Be,source_code_link:"https://naneng.github.io/temperature-converter/"}],Qe=()=>{const[t,s]=o.useState(""),[n,r]=o.useState(!1);return e.jsx("nav",{className:`${l.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`,children:e.jsxs("div",{className:"w-full flex justify-between items-center max-w-7xl mx-auto",children:[e.jsxs(Y,{to:"/",className:"flex items-center gap-2",onClick:()=>{s(""),window.scrollTo(0,0)},children:[e.jsx("img",{src:ae,alt:"logo",className:"w-9 h-9 object-contain"}),e.jsx("p",{className:"text-white text-[18px] font-bold cursor-pointer",children:"Katrina Ariola"})]}),e.jsx("ul",{className:"list-none hidden sm:flex flex-row gap-10",children:N.map(a=>e.jsx("li",{className:`${t===a.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`,onClick:()=>s(a.title),children:e.jsx("a",{href:`#${a.id}`,children:a.title})},a.id))}),e.jsxs("div",{className:"sm:hidden flex flex-1 justify-end items-center",children:[e.jsx("img",{src:n?de:ce,alt:"menu",className:"w-[28px] h-28px] object-contain cursor-pointer",onClick:()=>r(!n)}),e.jsx("div",{className:`${n?"flex":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,children:e.jsx("ul",{className:"list-none flex justify-end items-start flex-col gap-4",children:N.map(a=>e.jsx("li",{className:`${t===a.title?"text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`,onClick:()=>{r(!n),s(a.title)},children:e.jsx("a",{href:`#${a.id}`,children:a.title})},a.id))})})]})]})})},w=t=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:t}}}),x=(t,s,n,r)=>({hidden:{x:t==="left"?100:t==="right"?-100:0,y:t==="up"?100:t==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:s,delay:n,duration:r,ease:"easeOut"}}}),E=(t,s,n,r)=>({hidden:{x:t==="left"?"-100%":t==="right"?"100%":0,y:t==="up"||t==="down"?"100%":0},show:{x:0,y:0,transition:{type:s,delay:n,duration:r,ease:"easeOut"}}}),Fe=(t,s)=>({hidden:{},show:{transition:{staggerChildren:t,delayChildren:s||0}}}),A=(t,s)=>{function n(){return e.jsxs(c.section,{variants:Fe(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${l.padding} max-w-7xl mx-auto relative z-0`,children:[e.jsx("span",{className:"hash-span",id:s,children:" "}),e.jsx(t,{})]})}return n},Te=({index:t,title:s,icon:n})=>e.jsx(B,{options:{max:45,scale:1,speed:450},className:"xs:w-[250px] w-full",children:e.jsx(c.div,{variants:x("right","spring",t*.5,.75),className:"w-full blue-pink-gradient p-[1px] rounded-[20px] shadow-card",children:e.jsxs("div",{className:"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col",children:[e.jsx("img",{src:n,alt:"web-developer",className:"w-16 h-16 object-contain"}),e.jsx("h3",{className:"text-white text-[20px] font-bold text-center",children:s})]})})}),Le=()=>e.jsxs(e.Fragment,{children:[e.jsxs(c.div,{variants:w(),children:[e.jsx("p",{className:l.sectionSubText,children:"Introduction"}),e.jsx("h2",{className:l.sectionHeadText,children:"Overview."})]}),e.jsx(c.p,{variants:x("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"Front-End Web Developer with a passion for creating intuitive and playful web experiences. Looking to thrive in collaborative environments, tackle complex problems where I can contribute my creative problem-solving skills and work closely with teams to cultivate positive relationships and build successful solutions."}),e.jsx("div",{className:"mt-20 flex flex-wrap gap-10",children:Ie.map((t,s)=>e.jsx(Te,{index:s,...t},t.title))})]}),Je=A(Le,"about"),Pe=()=>{const[t,s]=o.useState(!1);return o.useEffect(()=>{const n=window.matchMedia("(max-width: 768px)");s(n.matches);const r=a=>{s(a.matches)};return n.addEventListener("change",r),()=>{n.removeEventListener("change",r)}},[]),e.jsx("div",{className:"flex flex-row flex-wrap justify-center gap-10",children:Ce.map((n,r)=>t&&r<4?null:e.jsx("div",{className:"w-28 h-28",children:e.jsx(I,{icon:n.icon})},n.name))})},He=A(Pe,"tech"),ze=({experience:t})=>e.jsx(R.VerticalTimelineElement,{contentStyle:{background:"#250657",color:"#FFF"},contentArrowStyle:{borderRight:"5px solid ##250657"},date:t.date,iconStyle:{background:t.iconBg},icon:e.jsx("div",{className:"flex justify-center items-center w-full h-full",children:e.jsx("img",{src:t.icon,alt:t.company_name,className:"w-[60%] h-[60%] object-contain "})}),children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-[24px] font-bold",children:t.title}),e.jsx("p",{className:" text-secondary  pb-1 text-[16px] font-semibold",style:{margin:0},children:t.company_name}),e.jsx("ul",{className:"mt-2 list-disc ml-5 space-y-1",children:t.points.map((s,n)=>e.jsx("li",{className:"text-indigo-300 text-[12px] pl-1 tracking-tight",children:s},`experience-point-${n}`))})]})}),Ue=()=>e.jsxs(e.Fragment,{children:[e.jsxs(c.div,{variants:w(),children:[e.jsx("p",{className:l.sectionSubText,children:"What I have done so far"}),e.jsx("h2",{className:l.sectionHeadText,children:"Experience."})]}),e.jsx("div",{className:"mt-20 flex flex-col",children:e.jsx(R.VerticalTimeline,{children:De.map((t,s)=>e.jsx(ze,{experience:t},s))})})]}),qe=A(Ue,"work"),Ye=({index:t,name:s,description:n,tags:r,image:a,source_code_link:i})=>e.jsx(c.div,{variants:x("up","spring",t*.5,.75),children:e.jsxs(B,{options:{max:45,scale:1,speed:450},className:"bg-[#250657] p-5 rounded-2xl sm:w-[360px] w-full",children:[e.jsxs("div",{className:"relative w-full h-[230px]",children:[e.jsx("img",{src:a,alt:s,className:"w-full h-full object-cover rounded-2xl"}),e.jsx("div",{className:"absolute inset-0 flex justify-end m-3 card-img_hover",children:e.jsx("div",{onClick:()=>window.open(i,"_blank"),className:"violet-gradient  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:e.jsx("img",{src:le,alt:"github",className:"w-1/2 h-1/2 object-contain"})})})]}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h3",{className:"text-white font-bold text-[24px]",children:s}),e.jsx("p",{className:"mt-2 text-secondary text-[14px]",children:n})]}),e.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:r.map(d=>e.jsxs("p",{className:`text-[14px] ${d.color}`,children:["#",d.name]},`${s}-${d.name}`))})]})}),Ge=()=>e.jsxs(e.Fragment,{children:[e.jsxs(c.div,{variants:w(),children:[e.jsx("p",{className:l.sectionSubText,children:"My work"}),e.jsx("h2",{className:l.sectionHeadText,children:"Projects."})]}),e.jsx("div",{className:"w-full flex",children:e.jsx(c.p,{variants:x("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."})}),e.jsx("div",{className:"mt-20 flex flex-wrap gap-7",children:Oe.map((t,s)=>e.jsx(Ye,{index:s,...t},`project-${s}`))})]}),We=A(Ge,"works"),Ze=()=>{const t=o.useRef(),[s,n]=o.useState({name:"",email:"",message:""}),[r,a]=o.useState(!1),[i,d]=o.useState(!1),[D,y]=o.useState(!1),g=h=>{const{name:m,value:F}=h.target;n({...s,[m]:F})},O=G({name:f().required("Name is required"),email:f().email("Invalid email").required("Email is required"),message:f().required("Message is required")}),Q=h=>{h.preventDefault(),a(!0),O.validate(s).then(()=>{W.send("service_lp4pfm5","template_84txx99",{from_name:s.name,to_name:"Katrina",from_email:s.email,to_email:"kat3ariola@gmail.com",message:s.message},"HH5EwaZnD7e2OKCbF").then(()=>{a(!1),d(!0),y(!1),n({name:"",email:"",message:""})}).catch(m=>{a(!1),d(!1),y(!0),console.log(m)})}).catch(m=>{console.log(m),a(!1)})};return e.jsxs("div",{className:"xl:mt-12 xl:flex-row flex flex-col-reverse overflow-hidden",children:[e.jsxs(c.div,{variants:E("left","tween",.2,1),className:"flex-[0.75] bg-tertiary p-8 rounded-2xl",children:[e.jsx("p",{className:l.sectionSubText,children:"Get in touch"}),e.jsx("h3",{className:l.sectionHeadText,children:"Contact."}),e.jsxs("form",{ref:t,onSubmit:Q,className:"mt-12 flex flex-col gap-8",children:[e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your Name"}),e.jsx("input",{type:"text",name:"name",value:s.name,onChange:g,placeholder:"What's your name?",className:"bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your Email"}),e.jsx("input",{type:"email",name:"email",value:s.email,onChange:g,placeholder:"What's your email?",className:"bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your Message"}),e.jsx("textarea",{rows:"7",name:"message",value:s.message,onChange:g,placeholder:"What do you want to say?",className:"bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none hover:resize-y"})]}),e.jsx("button",{type:"submit",className:"bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary active:bg-primary hover:shadow-white rounded-xl",children:r?"Sending...":"Send"})]}),i&&e.jsx("div",{className:"alert success text-primary bg-[#444ae5] m-6 p-3 rounded-lg shadow-md",children:"Thank you. I will get back to you as soon as possible."}),D&&e.jsx("div",{className:"alert error text-white bg-[#bf61ff] m-6 p-3 rounded-lg shadow-md",children:"Something went wrong. Please try again."})]}),e.jsx(c.div,{variants:E("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:e.jsx(_,{})})]})},Ve=A(Ze,"contact"),Ke=()=>e.jsx(Z,{children:e.jsxs("div",{className:"relative z-0 bg-primary",children:[e.jsxs("div",{className:"bg-hero-pattern bg-cover bg-no-repeat bg-center",children:[e.jsx(Qe,{}),e.jsx(se,{})]}),e.jsx(Je,{}),e.jsx(He,{}),e.jsx(We,{}),e.jsx(qe,{}),e.jsxs("div",{className:"relative z-0",children:[e.jsx(Ve,{}),e.jsx(te,{})]})]})});V.createRoot(document.getElementById("root")).render(e.jsx(K.StrictMode,{children:e.jsx(Ke,{})}));export{tt as a,et as g};
