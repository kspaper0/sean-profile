webpackJsonp([1],{"+ON9":function(t,e){},"10Bx":function(t,e){},"3rHv":function(t,e,a){t.exports=a.p+"static/img/project1.74d6504.gif"},"6sO/":function(t,e,a){t.exports=a.p+"static/img/project4.d1e6cc3.gif"},A5Uf:function(t,e){},B5fv:function(t,e){},GXR4:function(t,e){},JgJ5:function(t,e,a){t.exports=a.p+"static/img/photo.5eb0253.png"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/5sW"),s={name:"TheHeader",data:function(){return{logo:{title:"Shuo's Profile",src:"https://kspaper0.github.io/vuejs-essential/dist/"},navList:[{tab:"Home",link:"profile"},{tab:"Skills",link:"skills"}],activeNavIdx:0,showCollapsedNav:!1}},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("scroll",t.onScroll)})},methods:{clickActive:function(t){this.activeNavIdx=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav},onScroll:function(){var t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;this.activeNavIdx=t>500?1:0}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-inverse navbar-fixed-top",attrs:{role:"navigation"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:t.toggleNav}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"})]),t._v(" "),a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v(t._s(t.logo.title))])]),t._v(" "),a("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"navbar-collapse-content"}},[a("ul",{staticClass:"nav navbar-nav"},[t._l(t.navList,function(e,n){return a("li",{class:{active:n===t.activeNavIdx}},[a("a",{attrs:{href:"#"+e.link},on:{click:function(e){return t.clickActive(n)}}},[t._v(" "+t._s(e.tab)+" ")])])}),t._v(" "),a("li",[a("a",{attrs:{href:t.logo.src,target:"_blank"}},[t._v("Sample")])])],2)])])])},staticRenderFns:[]};var o=a("VU/8")(s,i,!1,function(t){a("U0nk")},"data-v-2f8f646c",null).exports,r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"navbar-default navbar-fixed-bottom footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-5 col-md-offset-1 col-md-4"},[t._v("\n        © "+t._s(t.person.info)+"\n        "),a("strong",[t._v(t._s(t.person.name))])]),t._v(" "),a("div",{staticClass:"col-sm-3"},[t._m(0),t._v("\n        "+t._s(t.person.phone)+"\n      ")]),t._v(" "),a("div",{staticClass:"col-sm-4"},[t._m(1),t._v(" "),a("a",{attrs:{href:"mailto:seankangaroo@gmail.com",target:"_blank"}},[t._v(t._s(t.person.email))])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("abbr",{attrs:{title:"Phone"}},[e("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("abbr",{attrs:{title:"Email"}},[e("i",{staticClass:"fa fa-envelope-o",attrs:{"aria-hidden":"true"}})])}]};var c=a("VU/8")({name:"TheFooter",data:function(){return{person:{info:"Developed with Vue by ",name:"Shuo Kang",phone:"0423 850 797",email:"seankangaroo@gmail.com"}}}},r,!1,function(t){a("nkgC")},"data-v-2cc88482",null).exports,l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper",attrs:{id:"profile"}},[e("div",{staticClass:"top"},[e("div",{staticClass:"info"},[e("span",{staticClass:"name"},[this._v("Shuo Kang")])])]),this._v(" "),e("div",{staticClass:"middle"},[e("div",{staticClass:"box"},[e("img",{attrs:{src:a("JgJ5"),alt:"icon"}})])]),this._v(" "),e("div",{staticClass:"bottom"},[e("div",{staticClass:"profile"},[e("p",[this._v("\n          Aimed at growing up into a Full Stack Developer. To achieve this goal, I keep updating myself and arming myself with new ideas. I understand app. development is actually an unceasing innovation process, and I am eager for new knowledge and enthusiastic about different programming experience. Exploring, researching and studying occupies all my period of spare time. In the end, I put a lot of my thoughts into practice. The completed projects are listed and described as follow:\n        ")])])])])}]};var d=a("VU/8")({name:"TheProfile"},l,!1,function(t){a("XLx0")},"data-v-71ea0c5c",null).exports,u=a("3rHv"),v=a.n(u),p=a("lW55"),f=a.n(p),m=a("hvyY"),h=a.n(m),_=a("6sO/"),g=a.n(_),b={name:"TheProjects",data:function(){return{projects:[{name:"Project 1",category:"Social Platform App",keyword:"K.W.: HTML5, CSS3, Linux, Apache, MySQL, PHP7, Laravel, Boostrap, SASS, etc.",color:"project1",pic:v.a,title:" A micro-blogging application is developed with the mode of MVC, which",desc:["provides feedback on validation error and unauthorised action, etc.","utilises built-in user authentication for registration and login","interacts with database for manipulating data with CRUD","supports administrators to delegate multiple roles and their permissions","sends emails for activating account and resetting password","allows legal users to manage their info., blogs, followers and followings","enables real-time communication through notification","introduces and optimises with concept of SEO"]},{name:"Project 2",category:"Backend & Frontend",keyword:"K.W.: RESTful, Less, OAuth(JWT & Passport), Javascript, Postman, Git & GitHub, etc.",color:"project2",pic:f.a,title:"This project builds API server on the backend and is used for the mobile end. On the basis of the first project, it:",desc:["strictly follows and applies the design principle of RESTful","makes the system robust, readable and extendable","structures and tests all interfaces (Unit & Integration)","develops neat and friendly UI on the mobile-side on a mobile simulator","receives all interfaces, and debugs on the simulated device","manages to login with the third party account (e.g. WeChat)","registers with verification code received from mobile phone"]},{name:"Project 3",category:"E - Commerce App",keyword:"K.W.: MySQL Transaction, Vagrant, SLB, JQuery, Vue, JMeter, Nginx, ElasticSearch, etc.",color:"project3",pic:h.a,title:"An online shopping application (B2C mode) and ebay are little alike. The system:",desc:["requires users to register, to login, and to manage address list and orders, etc.","performs multiple payment methods (i.e. coupon, crowd funding, installment & seckill)","has the payment & refund tested on sandbox provided by Alipay and notifies via email","builds a complete background management system","is capable of faceted search and offers consumers similar products","deploys hierarchical categories and aggregates breadcrumbs into search result","had chosen hosting, configured and installed under production environment","had executed script to test application performance under a heavy load"]},{name:"Project 4",category:"Bulletin Board System",keyword:"K.W.: VUE, Vuex, Vue-Router, Github Pages, ES6, NodeJS, NPM, AJAX, etc.",color:"project4",pic:g.a,title:"The development of this application adopts the most popular framework, MVVM. The single webpage is designed to:",desc:["fulfil responsive layout and enrich animation effect","satisfy user interactions (register, login & post, etc.)","control DOM component output in a dynamic way","be easily and economically hosted as a static site"]}],showMore:!1,cur:0,curWidth:0}},created:function(){this.curWidth=document.body.clientWidth||document.documentElement.clientWidth},mounted:function(){var t=this;window.onresize=function(){t.curWidth=document.body.clientWidth||document.documentElement.clientWidth}},methods:{showMoreButton:function(t){this.cur=t,this.showMore=!0}},watch:{curWidth:function(t){var e=document.getElementById("projects"),a=document.getElementById("mobile");document.getElementById("myModal");t<768?(e.style.display="none",this.showMore=!1,a.style.display=""):(a.style.display="none",e.style.display="")}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"projects",attrs:{id:"projects"}},t._l(t.projects,function(e,n){return a("div",{class:["project","animation",e.color]},[a("h3",[t._v(t._s(e.name)+":")]),t._v(" "),a("p",[t._v(t._s(e.category))]),t._v(" "),a("br"),t._v(" "),a("small",[a("em",[t._v(t._s(e.keyword))])]),t._v(" "),a("a",{staticClass:"btn btn-link info",attrs:{href:"javascripte:;"},on:{click:function(e){return t.showMoreButton(n)}}},[t._v("More")])])}),0),t._v(" "),a("Modal",{staticClass:"text-center",attrs:{id:"myModal",show:t.showMore},on:{"update:show":function(e){t.showMore=e}}},[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n      "+t._s(t.projects[t.cur].name)+" - "+t._s(t.projects[t.cur].category)+"\n    ")]),t._v(" "),a("div",[a("img",{staticClass:"img-box",attrs:{src:t.projects[t.cur].pic}})]),t._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("div",{staticClass:"text-left desc-content"},[a("p",{staticClass:"lead"},[t._v(t._s(t.projects[t.cur].title))]),t._v(" "),a("ul",t._l(t.projects[t.cur].desc,function(e,n){return a("li",[t._v(t._s(e))])}),0)])])]),t._v(" "),a("div",{staticClass:"mobile-projects",attrs:{id:"mobile"}},t._l(t.projects,function(t,e){return a("Accordion",{key:e,attrs:{project:t}})}),1)],1)},staticRenderFns:[]};var w=a("VU/8")(b,y,!1,function(t){a("okab")},"data-v-6c83bd97",null).exports,C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",t._l(t.tabContents,function(e,n){return a("li",[a("h4",[a("u",[t._v(t._s(e.title))])]),t._v(" "),a("p",[t._v(t._s(e.content))])])}),0)},staticRenderFns:[]};var k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",t._l(t.tabContents,function(e,n){return a("li",{staticClass:"soft"},[a("p",[t._v(t._s(e))])])}),0)},staticRenderFns:[]};var S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[t._l(t.tabContents,function(e,n){return a("li",[a("h4",[a("u",[t._v(t._s(e.title))])]),t._v(" "),a("p",[t._v(t._s(e.content)+"  • "+t._s(e.address))])])}),t._v(" "),t._m(0),t._v(" "),a("ul",t._l(t.hobbies,function(e,n){return a("li",{staticClass:"hobbies"},[a("p",[t._v(t._s(e))])])}),0)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h4",[e("u",[this._v("Hobbies")])])}]};var j={name:"TheSkills",data:function(){return{active:0,currentView:"tab1",tabLists:[{title:"Technical Skills",view:"tab1",color:"skill1"},{title:"Transferable Skills",view:"tab2",color:"skill2"},{title:"Others",view:"tab3",color:"skill3"}]}},methods:{toggle:function(t,e){this.active=t,this.currentView=e}},components:{tab1:a("VU/8")({name:"tab1",data:function(){return{tabContents:[{title:"Programming Languages",content:"PHP7 (Laravel), SQL, Vue, Angular, React, HTML5, CSS3, JavaScript, JQuery, AJAX, ElasticSearch "},{title:"Concepts, Tools & Others",content:"MVC, MVVM, RESTful, Responsive Layout, SEO, SLB, SASS & LESS, Apache, Bootstrap, Photoshop, Linux, JWT & Passport, Postman, Git & GitHub, Nginx, NodeJS, NPM, WordPress"}]}}},C,!1,function(t){a("u3EI")},"data-v-4f927c17",null).exports,tab2:a("VU/8")({name:"tab2",data:function(){return{tabContents:["Self-motivated and detail-orientated","Good written and verbal communication skills","Problem solving autonomously and efficiently","Fast learner and willing to study","Thriving in a team environment"]}}},k,!1,function(t){a("B5fv")},"data-v-20a926e3",null).exports,tab3:a("VU/8")({name:"tab3",data:function(){return{tabContents:[{title:"Education",content:"Master of I.T",address:"Monash University"},{title:"Experience",content:"Lead Web Developer - Tekamas Group",address:"Melbourne CBD"}],hobbies:["Sports","Fitness","Self-Study","Social contact","Movies"]}}},S,!1,function(t){a("+ON9")},"data-v-584c985c",null).exports}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skills",attrs:{id:"skills"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-3 skills-title"},[a("ul",t._l(t.tabLists,function(e,n){return a("li",{class:["skill",e.color,{active:t.active==n}],on:{click:function(a){return t.toggle(n,e.view)}}},[t._v("\n            "+t._s(e.title)+"\n          ")])}),0)]),t._v(" "),a("div",{staticClass:"col-sm-offset-2 col-sm-7 skills-content"},[a(t.currentView,{tag:"component"})],1)])])])},staticRenderFns:[]};var T={name:"App",components:{TheHeader:o,TheFooter:c,TheProfile:d,TheProjects:w,TheSkills:a("VU/8")(j,x,!1,function(t){a("Z0jw")},"data-v-de50bc66",null).exports}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("TheHeader"),this._v(" "),e("TheProfile"),this._v(" "),e("TheProjects"),this._v(" "),e("TheSkills"),this._v(" "),e("TheFooter")],1)},staticRenderFns:[]};var M=a("VU/8")(T,E,!1,function(t){a("10Bx")},null,null).exports,P=a("/ocq");n.a.use(P.a);var V=new P.a({mode:"history",routes:[]}),L=a("W3Iv"),A=a.n(L),N=a("BO1k"),W=a.n(N),I=a("d7EF"),B=a.n(I),R={name:"Modal",props:{show:{type:Boolean,default:!1}},methods:{close:function(){this.$emit("update:show",!1)}},watch:{show:function(t){var e=document.body.classList;t?e.add("modal-open"):e.remove("modal-open")}}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("、\n    "),a("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated rollOut"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal",staticStyle:{display:"block"},on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title"},[t._t("title")],2)]),t._v(" "),a("div",{staticClass:"modal-body"},[t._t("default")],2),t._v(" "),a("div",{staticClass:"modal-footer"},[t._t("desc")],2)])])])]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal-backdrop fade in",on:{click:t.close}})])],1)},staticRenderFns:[]};var F=a("VU/8")(R,U,!1,function(t){a("A5Uf")},"data-v-4cdb417c",null).exports,$={data:function(){return{isDisplay:!1}},props:{project:{type:Object,default:function(){return{}}}},methods:{toggleList:function(){this.isDisplay=!this.isDisplay}}},H={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projectsWrapper"},[a("div",{staticClass:"projectsTitle",on:{click:t.toggleList}},[a("div",{class:t.project.color},[a("span",{class:["closeIcon",{open_menu:t.isDisplay,close_menu:!t.isDisplay}]},[t._v("×")]),t._v(" "),a("span",[t._v(t._s(t.project.name)+" - "+t._s(t.project.category))])])]),t._v(" "),a("div",{class:["projectsContent",t.project.color,{maxHeight:t.isDisplay}]},[a("div",{staticClass:"contents"},[t._v(t._s(t.project.keyword))])])])},staticRenderFns:[]};var J={Modal:F,Accordion:a("VU/8")($,H,!1,function(t){a("GXR4")},"data-v-7048adb9",null).exports},O=!0,D=!1,G=void 0;try{for(var K,X=W()(A()(J));!(O=(K=X.next()).done);O=!0){var Q=K.value,Y=B()(Q,2),q=Y[0],z=Y[1];n.a.component(q,z)}}catch(t){D=!0,G=t}finally{try{!O&&X.return&&X.return()}finally{if(D)throw G}}n.a.config.productionTip=!1,new n.a({el:"#app",router:V,render:function(t){return t(M)}})},U0nk:function(t,e){},XLx0:function(t,e){},Z0jw:function(t,e){},hvyY:function(t,e,a){t.exports=a.p+"static/img/project3.1de6c82.gif"},lW55:function(t,e,a){t.exports=a.p+"static/img/project2.4df5bb9.gif"},nkgC:function(t,e){},okab:function(t,e){},u3EI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9ccf65810dd8c951cb1d.js.map