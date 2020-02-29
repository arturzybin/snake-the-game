!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var r,o,i={color:"#2ecc71",speed:200,currentColor:"#2ecc71",currentSpeed:200,movingDirection:"right",nextMovingDirection:"right",snakePartsList:[],newPartsQueueLength:0,defaultStartingHeadPosition:[8,9],defaultStartingBodyPartsPositions:[[8,8],[8,7],[8,6]],startingHeadPosition:[8,9],startingBodyPartsPositions:[[8,8],[8,7],[8,6]]},a={barriers:!1,poisonedPoints:!1,bonusPoints:!0,passingThroughtWalls:!1};function s(){var e=document.forms.snakeSettingsForm;!function(e){var t,n=e.elements.snakeColor,r=!0,o=!1,a=void 0;try{for(var s,d=n[Symbol.iterator]();!(r=(s=d.next()).done);r=!0){var l=s.value;l.checked&&(t=l.value)}}catch(e){o=!0,a=e}finally{try{r||null==d.return||d.return()}finally{if(o)throw a}}i.color=t}(e),function(e){var t,n=e.elements.snakeSpeed,r=!0,o=!1,a=void 0;try{for(var s,d=n[Symbol.iterator]();!(r=(s=d.next()).done);r=!0){var l=s.value;l.checked&&(t=l.value)}}catch(e){o=!0,a=e}finally{try{r||null==d.return||d.return()}finally{if(o)throw a}}i.speed=parseInt(t)}(e)}function d(){var e=document.forms.fieldSettingsForm,t=!0,n=!1,r=void 0;try{for(var o,i=e.elements[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var s=o.value;s.checked?a[s.value]=!0:a[s.value]=!1}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}function l(){var e=document.getElementById("field");e.innerHTML="",function(e){for(var t=0;t<17;t++){for(var n=document.createElement("tr"),r=0;r<17;r++){var o=document.createElement("td");o.classList.add("field-cell"),n.append(o)}n.classList.add("field-row"),e.append(n)}}(e)}function c(){for(var e=document.getElementById("field"),t=e.rows.length,n=[3,9,13],r=0;r<n.length;r++)if(1&r)for(var o=0;o<10;o++)u(e.rows[n[r]].cells[o]);else for(var i=t-1;i>=t-10;i--)u(e.rows[n[r]].cells[i])}function u(e){var t=document.createElement("div");t.classList.add("barrier"),e.append(t)}function m(){document.dispatchEvent(new CustomEvent("settingsClosed"));var e=document.getElementById("mainContainer"),t=document.getElementById("mainContainerLocker"),n=document.getElementById("settingsContainer");e.classList.remove("blured"),t.hidden="true",n.hidden="true",document.removeEventListener("keydown",v)}function v(e){"Escape"==e.code&&m()}function f(){for(var e=document.getElementById("leaderboard"),t=Array.from(e.querySelectorAll(".leader")),n=document.getElementById("usernameField").value,r=parseInt(document.getElementById("scoreWindow").textContent),o=0;o<t.length;o++){var i=t[o].querySelector(".leader-score").textContent;if("--||--"==i||parseInt(i)<r){for(var a=t.length-1;a>o;a--){var s=t[a-1].querySelector(".leader-name").textContent,d=t[a-1].querySelector(".leader-score").textContent;t[a].querySelector(".leader-name").textContent=s,t[a].querySelector(".leader-score").textContent=d}t[o].querySelector(".leader-name").textContent=n,t[o].querySelector(".leader-score").textContent=r;break}}!function(){for(var e=document.getElementById("leaderboard"),t=Array.from(e.querySelectorAll(".leader")),n=[],r=0,o=t;r<o.length;r++){var i=o[r],a=i.querySelector(".leader-name").textContent,s=i.querySelector(".leader-score").textContent;n.push([a,s])}localStorage.setItem("leaders",JSON.stringify(n))}()}function g(e){var t=document.getElementById("scoreWindow"),n=parseInt(t.textContent);n+=e,t.textContent=n}function h(){var e=document.getElementById("container").getBoundingClientRect(),t=document.documentElement.clientWidth,n=document.documentElement.clientHeight,r=t/e.width,o=n/e.height;if(!(r>1&&o>1)){var i=Math.min(r,o);document.body.style.zoom=i}}function y(){var e;(e=document.createElement("div")).classList.add("normal-point"),e.id="normalPoint",b().append(e),r=setInterval(E,15e3),document.addEventListener("normalPointEaten",p),document.addEventListener("specialPointEaten",L)}function p(){var e=document.getElementById("normalPoint");b().append(e)}function E(){if(Math.floor(101*Math.random())<=30){if(!a.poisonedPoints)return;w("poisoned")}else w("bonus")}function w(e){if(a.bonusPoints){var t=document.createElement("div");t.classList.add("special-point"),t.classList.add("".concat(e,"-point")),t.id="specialPoint";var n=document.createElement("div");n.classList.add("special-point-indicator"),b().append(t),t.append(n),setTimeout(L,4e3)}}function L(){var e=document.getElementById("specialPoint");e&&e.remove()}function b(){for(var e=document.getElementById("field"),t=0;t<200;t++){var n=e.rows[Math.floor(Math.random()*e.rows.length)],r=n.cells[Math.floor(Math.random()*n.cells.length)];if(""==r.innerHTML)return r}var o=!0,i=!1,a=void 0;try{for(var s,d=e.rows[Symbol.iterator]();!(o=(s=d.next()).done);o=!0){var l=s.value,c=!0,u=!1,m=void 0;try{for(var v,f=l.cells[Symbol.iterator]();!(c=(v=f.next()).done);c=!0){var g=v.value;if(""==g.innerHTML)return g}}catch(e){u=!0,m=e}finally{try{c||null==f.return||f.return()}finally{if(u)throw m}}}}catch(e){i=!0,a=e}finally{try{o||null==d.return||d.return()}finally{if(i)throw a}}}function B(){var e=document.getElementById("field");i.currentColor=i.color,i.currentSpeed=i.speed;var t=document.createElement("div");t.id="snakeHead",t.classList.add("snake"),t.classList.add("snake-head"),t.style.background=i.color;var n=i.startingHeadPosition[0],r=i.startingHeadPosition[1];e.rows[n].cells[r].append(t),i.snakePartsList.push(t);var o=!0,a=!1,s=void 0;try{for(var d,l=i.startingBodyPartsPositions[Symbol.iterator]();!(o=(d=l.next()).done);o=!0){var c=d.value;I(c[0],c[1])}}catch(e){a=!0,s=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw s}}}function I(e,t,n){if(!e&&0!==e){var r=function(){var e=i.snakePartsList[i.snakePartsList.length-1],t=e.closest("tr").rowIndex,n=e.closest("td").cellIndex;return[t,n]}();e=r[0],t=r[1]}var o=document.createElement("div");o.classList.add("snake"),o.classList.add("snake-body"),o.style.background=i.currentColor,field.rows[e].cells[t].append(o),i.snakePartsList.push(o),n&&(o.classList.add("new-snake-part"),setTimeout((function(){return o.classList.remove("new-snake-part")}),300))}function P(){i.snakePartsList.forEach((function(e){return e.remove()})),i.snakePartsList=[]}function k(){var e=document.getElementById("field"),t=e.rows.length,n=i.snakePartsList;n.push("fake body part");for(var r=1;r<n.length-1;r++){n[r].removeAttribute("style"),n[r].style.background=i.currentColor;var o=n[r].closest("tr").rowIndex,a=n[r].closest("td").cellIndex;(0==o||e.rows[o-1].cells[a].firstChild!=n[r+1]&&e.rows[o-1].cells[a].firstChild!=n[r-1])&&(n[r].style.borderTopWidth="2px",n[r].style.borderTopColor="#51381F"),(o==t-1||e.rows[o+1].cells[a].firstChild!=n[r+1]&&e.rows[o+1].cells[a].firstChild!=n[r-1])&&(n[r].style.borderBottomWidth="2px",n[r].style.borderBottomColor="#51381F"),(0==a||e.rows[o].cells[a-1].firstChild!=n[r+1]&&e.rows[o].cells[a-1].firstChild!=n[r-1])&&(n[r].style.borderLeftWidth="2px",n[r].style.borderLeftColor="#51381F"),(a==t-1||e.rows[o].cells[a+1].firstChild!=n[r+1]&&e.rows[o].cells[a+1].firstChild!=n[r-1])&&(n[r].style.borderRightWidth="2px",n[r].style.borderRightColor="#51381F")}n.pop()}function C(){var e=i.snakePartsList[0],t=a.passingThroughtWalls,n=document.getElementById("field").rows.length,r=e.closest("tr").rowIndex,o=e.closest("td").cellIndex;switch(i.movingDirection){case"right":++o==n&&t&&(o=0);break;case"left":-1==--o&&t&&(o=n-1);break;case"down":++r==n&&t&&(r=0);break;case"up":-1==--r&&t&&(r=n-1)}var s=document.getElementById("field");return s.rows[r]?s.rows[r].cells[o]:s.rows[r]}function x(e){var t,n,r=i.movingDirection;switch(e.detail?e.detail.code:e.code){case"ArrowRight":r="right";break;case"ArrowLeft":r="left";break;case"ArrowDown":r="down";break;case"ArrowUp":r="up"}switch(i.movingDirection){case"right":case"left":t="X";break;case"down":case"up":t="Y"}switch(r){case"right":case"left":n="X";break;case"down":case"up":n="Y"}t!=n&&(i.nextMovingDirection=r)}function S(e){var t=getComputedStyle(document.body).zoom,n=document.getElementById("cagedSnake");if(!n.hasAttribute("hidden")){l(),a.barriers&&c(),n.classList.add("dragged-caged-snake"),e.changedTouches&&(e=e.changedTouches[0]);var r=n.getBoundingClientRect(),o=e.clientX/t-r.left,s=e.clientY/t-r.top;document.addEventListener("mousemove",d),document.addEventListener("mousemove",u),document.addEventListener("mouseup",m),document.addEventListener("touchmove",d),document.addEventListener("touchmove",u),document.addEventListener("touchend",m)}function d(e){var n=document.getElementById("mainContainer").getBoundingClientRect(),r=n.left,i=n.top;e.changedTouches&&(e=e.changedTouches[0]);var a=document.getElementById("cagedSnake"),d=a.getBoundingClientRect(),l=e.clientX/t-o,c=e.clientY/t-s;l<n.left&&(l=n.left),l>n.right-d.width&&(l=n.right-d.width),c<n.top&&(c=n.top),c>n.bottom-d.height&&(c=n.bottom-d.height),a.style.left=l-r+"px",a.style.top=c-i+"px"}function u(e){e.changedTouches&&(e=e.changedTouches[0]),n.hidden=!0;var t=document.elementFromPoint(e.clientX,e.clientY);if(n.removeAttribute("hidden"),t)if(t.classList.contains("field-cell")||t.classList.contains("snake")){var r=t.closest("td");v(r)&&(B(),k(),r.addEventListener("mouseout",P))}else P()}function m(e){P(),document.removeEventListener("mousemove",d),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",m),document.removeEventListener("touchmove",d),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",m),e.changedTouches&&(e=e.changedTouches[0]);var t=document.getElementById("cagedSnake");t.hidden=!0;var n=document.elementFromPoint(e.clientX,e.clientY);t.removeAttribute("style"),t.classList.remove("dragged-caged-snake"),n.classList.contains("field-cell")&&v(n)?(A(),i.startingHeadPosition=i.defaultStartingHeadPosition,i.startingBodyPartsPositions=i.defaultStartingBodyPartsPositions):t.removeAttribute("hidden")}function v(e){document.getElementById("field");var t=e.closest("tr").rowIndex,n=e.cellIndex;i.startingHeadPosition=[t,n],n>3?(i.startingBodyPartsPositions=[[t,n-1],[t,n-2],[t,n-3]],i.movingDirection="right",i.nextMovingDirection="right"):(i.startingBodyPartsPositions=[[t,n+1],[t,n+2],[t,n+3]],i.movingDirection="left",i.nextMovingDirection="left"),B();var r=!0,o=!1,a=void 0;try{for(var s,d=i.snakePartsList[Symbol.iterator]();!(r=(s=d.next()).done);r=!0){var l=s.value;if(void 0!==l.closest("td").childNodes[1]&&!l.closest("td").childNodes[0].classList.contains("snake"))return i.startingHeadPosition=i.defaultStartingHeadPosition,i.startingBodyPartsPositions=i.defaultStartingBodyPartsPositions,P(),!1}}catch(e){o=!0,a=e}finally{try{r||null==d.return||d.return()}finally{if(o)throw a}}return P(),!0}}function A(){var e;document.getElementById("cagedSnake").hidden="true",startButton.hidden="true",scoreWindow.removeAttribute("hidden"),s(),d(),e=40,document.getElementById("scoreWindow").textContent=e,l(),a.barriers&&c(),document.addEventListener("keydown",x),Array.from(document.getElementsByClassName("arrow")).forEach((function(e){var t=new CustomEvent("arrowClick",{detail:{code:e.id}});e.onclick=function(){return x(t)},e.ontouchstart=function(e){e.preventDefault(),x(t)}})),B(),k(),o=setInterval(T,i.currentSpeed),y()}function M(){o=setInterval(T,i.currentSpeed),document.removeEventListener("settingsClosed",M)}function T(e){return i.movingDirection=i.nextMovingDirection,function(){var e=document.getElementById("field");if(i.snakePartsList.length==e.rows.length*e.rows[0].cells.length)return!0}()?(q("win"),void D()):function(){var e=i.snakePartsList,t=C(),n=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var d=a.value;if(d.closest("td")==t&&d!=e[0])return!0}}catch(e){r=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}if(1==e.length)return!0;if(!t)return!0;var l=document.getElementsByClassName("barrier"),c=!0,u=!1,m=void 0;try{for(var v,f=l[Symbol.iterator]();!(c=(v=f.next()).done);c=!0){if(v.value.closest("td")==t)return!0}}catch(e){u=!0,m=e}finally{try{c||null==f.return||f.return()}finally{if(u)throw m}}}()?(q("lose"),void D()):(i.newPartsQueueLength>0&&(I(null,null,!0),g(10),i.newPartsQueueLength--),function(){var e=C(),t=document.getElementById("normalPoint");e.contains(t)&&(i.newPartsQueueLength++,document.dispatchEvent(new CustomEvent("normalPointEaten")));var n=document.getElementById("specialPoint");if(n){var r=n.classList.contains("bonus-point")?n:null;r&&e.contains(r)&&(g(5),i.newPartsQueueLength+=3,document.dispatchEvent(new CustomEvent("specialPointEaten")));var o,a=n.classList.contains("poisoned-point")?n:null;if(a&&e.contains(a)){g(-5);for(var s=0;s<3;s++)o=void 0,1!=(o=i.snakePartsList).length&&o.pop().remove(),g(-10);document.dispatchEvent(new CustomEvent("specialPointEaten"))}}}(),function(){for(var e=document.getElementById("field"),t=i.snakePartsList,n=[],r=0;r<t.length;r++){var o=t[r].closest("tr").rowIndex,a=t[r].closest("td").cellIndex;n.push([o,a])}var s=t[0];C().append(s);for(var d=1;d<t.length;d++)e.rows[n[d-1][0]].cells[n[d-1][1]].append(t[d])}(),void k())}function D(){f(),document.getElementById("cagedSnake").removeAttribute("hidden"),document.removeEventListener("keydown",x),Array.from(document.getElementsByClassName("arrow")).forEach((function(e){e.onclick=null,e.ontouchstart=null})),clearInterval(o),o=null,clearInterval(r),i.snakePartsList=[],i.movingDirection="right",i.nextMovingDirection="right",scoreWindow.hidden="true",startButton.removeAttribute("hidden")}function q(e){var t=document.getElementById("mainContainerLocker"),n=document.getElementById("mainContainer");t.removeAttribute("hidden"),n.classList.add("blured"),e=e.toLowerCase();var r=document.getElementById("message");r.textContent=e,r.removeAttribute("hidden"),r.classList.add("animate-message"),r.classList.add("".concat(e,"-message")),setTimeout((function(){r.hidden="true",r.classList.remove("animate-message"),r.classList.remove("".concat(e,"-message")),n.classList.remove("blured"),t.hidden="true"}),1e3)}document.getElementById("settingsButton").addEventListener("click",(function(){var e=document.getElementById("mainContainer"),t=document.getElementById("mainContainerLocker"),n=document.getElementById("settingsContainer");e.classList.add("blured"),t.removeAttribute("hidden"),n.removeAttribute("hidden"),document.addEventListener("keydown",v)})),document.getElementById("closeSettingsButton").addEventListener("click",m),document.addEventListener("keydown",(function(e){if(!e.isTrusted)return;switch(e.code){case"ArrowRight":case"ArrowLeft":case"ArrowDown":case"ArrowUp":document.getElementById(e.code).classList.add("active-screen-arrow")}})),document.addEventListener("keyup",(function(e){switch(e.code){case"ArrowRight":case"ArrowLeft":case"ArrowDown":case"ArrowUp":document.getElementById(e.code).classList.remove("active-screen-arrow")}})),document.getElementById("gift").addEventListener("click",(function(){var e=document.getElementById("gift"),t=Math.floor(3*Math.random());e.src=["img/candy.png","img/cake.png","img/bear.png"][t],e.style.animation="none"})),n.d(t,"startGame",(function(){return A})),h(),window.onresize=h,l(),function(){var e=document.getElementById("leaderboard"),t=Array.from(e.querySelectorAll(".leader")),n=JSON.parse(localStorage.getItem("leaders"));if(n)for(var r=0;r<n.length;r++)t[r].querySelector(".leader-name").textContent=n[r][0],t[r].querySelector(".leader-score").textContent=n[r][1]}(),document.addEventListener("settingsClosed",d),document.addEventListener("settingsClosed",s),document.getElementById("startButton").addEventListener("click",A),document.getElementById("settingsButton").addEventListener("click",(function(){if(!o)return;clearInterval(o),o=null,document.addEventListener("settingsClosed",M)})),document.getElementById("cage").addEventListener("mousedown",S),document.getElementById("cage").addEventListener("touchstart",S)}]);