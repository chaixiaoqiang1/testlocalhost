//--------------------------------banner js---------------------------------------//
!function(a){a.fn.slide=function(b){return a.fn.slide.defaults={type:"slide",effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"swing",startFun:null,endFun:null,switchLoad:null,playStateCell:".playState",mouseOverStop:!0,defaultPlay:!0,returnDefault:!1},this.each(function(){var c=a.extend({},a.fn.slide.defaults,b),d=a(this),e=c.effect,f=a(c.prevCell,d),g=a(c.nextCell,d),h=a(c.pageStateCell,d),i=a(c.playStateCell,d),j=a(c.titCell,d),k=j.size(),l=a(c.mainCell,d),m=l.children().size(),n=c.switchLoad,o=a(c.targetCell,d),p=parseInt(c.defaultIndex),q=parseInt(c.delayTime),r=parseInt(c.interTime);parseInt(c.triggerTime);var Q,t=parseInt(c.scroll),u=parseInt(c.vis),v="false"==c.autoPlay||0==c.autoPlay?!1:!0,w="false"==c.opp||0==c.opp?!1:!0,x="false"==c.autoPage||0==c.autoPage?!1:!0,y="false"==c.pnLoop||0==c.pnLoop?!1:!0,z="false"==c.mouseOverStop||0==c.mouseOverStop?!1:!0,A="false"==c.defaultPlay||0==c.defaultPlay?!1:!0,B="false"==c.returnDefault||0==c.returnDefault?!1:!0,C=0,D=0,E=0,F=0,G=c.easing,H=null,I=null,J=null,K=c.titOnClassName,L=j.index(d.find("."+K)),M=p=-1==L?p:L,N=p,O=p,P=m>=u?0!=m%t?m%t:t:0,R="leftMarquee"==e||"topMarquee"==e?!0:!1,S=function(){a.isFunction(c.startFun)&&c.startFun(p,k,d,a(c.titCell,d),l,o,f,g)},T=function(){a.isFunction(c.endFun)&&c.endFun(p,k,d,a(c.titCell,d),l,o,f,g)},U=function(){j.removeClass(K),A&&j.eq(N).addClass(K)};if("menu"==c.type)return A&&j.removeClass(K).eq(p).addClass(K),j.hover(function(){Q=a(this).find(c.targetCell);var b=j.index(a(this));I=setTimeout(function(){switch(p=b,j.removeClass(K).eq(p).addClass(K),S(),e){case"fade":Q.stop(!0,!0).animate({opacity:"show"},q,G,T);break;case"slideDown":Q.stop(!0,!0).animate({height:"show"},q,G,T)}},c.triggerTime)},function(){switch(clearTimeout(I),e){case"fade":Q.animate({opacity:"hide"},q,G);break;case"slideDown":Q.animate({height:"hide"},q,G)}}),B&&d.hover(function(){clearTimeout(J)},function(){J=setTimeout(U,q)}),void 0;if(0==k&&(k=m),R&&(k=2),x){if(m>=u)if("leftLoop"==e||"topLoop"==e)k=0!=m%t?(0^m/t)+1:m/t;else{var V=m-u;k=1+parseInt(0!=V%t?V/t+1:V/t),0>=k&&(k=1)}else k=1;j.html("");var W="";if(1==c.autoPage||"true"==c.autoPage)for(var X=0;k>X;X++)W+="<li>"+(X+1)+"</li>";else for(var X=0;k>X;X++)W+=c.autoPage.replace("$",X+1);j.html(W);var j=j.children()}if(m>=u){l.children().each(function(){a(this).width()>E&&(E=a(this).width(),D=a(this).outerWidth(!0)),a(this).height()>F&&(F=a(this).height(),C=a(this).outerHeight(!0))});var Y=l.children(),Z=function(){for(var a=0;u>a;a++)Y.eq(a).clone().addClass("clone").appendTo(l);for(var a=0;P>a;a++)Y.eq(m-a-1).clone().addClass("clone").prependTo(l)};switch(e){case"fold":l.css({position:"relative",width:D,height:C}).children().css({position:"absolute",width:E,left:0,top:0,display:"none"});break;case"top":l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+u*C+'px"></div>').css({top:-(p*t)*C,position:"relative",padding:"0",margin:"0"}).children().css({height:F});break;case"left":l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+u*D+'px"></div>').css({width:m*D,left:-(p*t)*D,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({"float":"left",width:E});break;case"leftLoop":case"leftMarquee":Z(),l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+u*D+'px"></div>').css({width:(m+u+P)*D,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-(P+p*t)*D}).children().css({"float":"left",width:E});break;case"topLoop":case"topMarquee":Z(),l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+u*C+'px"></div>').css({height:(m+u+P)*C,position:"relative",padding:"0",margin:"0",top:-(P+p*t)*C}).children().css({height:F})}}var $=function(a){var b=a*t;return a==k?b=m:-1==a&&0!=m%t&&(b=-m%t),b},_=function(b){var c=function(c){for(var d=c;u+c>d;d++)b.eq(d).find("img["+n+"]").each(function(){var b=a(this);if(b.attr("src",b.attr(n)).removeAttr(n),l.find(".clone")[0])for(var c=l.children(),d=0;d<c.size();d++)c.eq(d).find("img["+n+"]").each(function(){a(this).attr(n)==b.attr("src")&&a(this).attr("src",a(this).attr(n)).removeAttr(n)})})};switch(e){case"fade":case"fold":case"top":case"left":case"slideDown":c(p*t);break;case"leftLoop":case"topLoop":c(P+$(O));break;case"leftMarquee":case"topMarquee":var d="leftMarquee"==e?l.css("left").replace("px",""):l.css("top").replace("px",""),f="leftMarquee"==e?D:C,g=P;if(0!=d%f){var h=Math.abs(0^d/f);g=1==p?P+h:P+h-1}c(g)}},ab=function(a){if(!A||M!=p||a||R){if(R?p>=1?p=1:0>=p&&(p=0):(O=p,p>=k?p=0:0>p&&(p=k-1)),S(),null!=n&&_(l.children()),o[0]&&(Q=o.eq(p),null!=n&&_(o),"slideDown"==e?(o.not(Q).stop(!0,!0).slideUp(q),Q.slideDown(q,G,function(){l[0]||T()})):(o.not(Q).stop(!0,!0).hide(),Q.animate({opacity:"show"},q,function(){l[0]||T()}))),m>=u)switch(e){case"fade":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,G,function(){T()}).siblings().hide();break;case"fold":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,G,function(){T()}).siblings().animate({opacity:"hide"},q,G);break;case"top":l.stop(!0,!1).animate({top:-p*t*C},q,G,function(){T()});break;case"left":l.stop(!0,!1).animate({left:-p*t*D},q,G,function(){T()});break;case"leftLoop":var b=O;l.stop(!0,!0).animate({left:-($(O)+P)*D},q,G,function(){-1>=b?l.css("left",-(P+(k-1)*t)*D):b>=k&&l.css("left",-P*D),T()});break;case"topLoop":var b=O;l.stop(!0,!0).animate({top:-($(O)+P)*C},q,G,function(){-1>=b?l.css("top",-(P+(k-1)*t)*C):b>=k&&l.css("top",-P*C),T()});break;case"leftMarquee":var c=l.css("left").replace("px","");0==p?l.animate({left:++c},0,function(){l.css("left").replace("px","")>=0&&l.css("left",-m*D)}):l.animate({left:--c},0,function(){l.css("left").replace("px","")<=-(m+P)*D&&l.css("left",-P*D)});break;case"topMarquee":var d=l.css("top").replace("px","");0==p?l.animate({top:++d},0,function(){l.css("top").replace("px","")>=0&&l.css("top",-m*C)}):l.animate({top:--d},0,function(){l.css("top").replace("px","")<=-(m+P)*C&&l.css("top",-P*C)})}j.removeClass(K).eq(p).addClass(K),M=p,y||(g.removeClass("nextStop"),f.removeClass("prevStop"),0==p&&f.addClass("prevStop"),p==k-1&&g.addClass("nextStop")),h.html("<span>"+(p+1)+"</span>/"+k)}};A&&ab(!0),B&&d.hover(function(){clearTimeout(J)},function(){J=setTimeout(function(){p=N,A?ab():"slideDown"==e?Q.slideUp(q,U):Q.animate({opacity:"hide"},q,U),M=p},300)});var bb=function(a){H=setInterval(function(){w?p--:p++,ab()},a?a:r)},cb=function(a){H=setInterval(ab,a?a:r)},db=function(){z||(clearInterval(H),bb())},eb=function(){(y||p!=k-1)&&(p++,ab(),R||db())},fb=function(){(y||0!=p)&&(p--,ab(),R||db())},gb=function(){clearInterval(H),R?cb():bb(),i.removeClass("pauseState")},hb=function(){clearInterval(H),i.addClass("pauseState")};if(v?R?(w?p--:p++,cb(),z&&l.hover(hb,gb)):(bb(),z&&d.hover(hb,gb)):(R&&(w?p--:p++),i.addClass("pauseState")),i.click(function(){i.hasClass("pauseState")?gb():hb()}),"mouseover"==c.trigger?j.hover(function(){var a=j.index(this);I=setTimeout(function(){p=a,ab(),db()},c.triggerTime)},function(){clearTimeout(I)}):j.click(function(){p=j.index(this),ab(),db()}),R){if(g.mousedown(eb),f.mousedown(fb),y){var ib,jb=function(){ib=setTimeout(function(){clearInterval(H),cb(0^r/10)},150)},kb=function(){clearTimeout(ib),clearInterval(H),cb()};g.mousedown(jb),g.mouseup(kb),f.mousedown(jb),f.mouseup(kb)}"mouseover"==c.trigger&&(g.hover(eb,function(){}),f.hover(fb,function(){}))}else g.click(eb),f.click(fb)})}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*.3*1.5),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});
//--------------------------------图片滚动 js---------------------------------------//
/*ScrollPic.js*/
var sina = { $: function (objName) { if (document.getElementById) { return eval('document.getElementById("' + objName + '")') } else { return eval('document.all.' + objName) } }, isIE: navigator.appVersion.indexOf("MSIE") != -1 ? true : false, addEvent: function (l, i, I) { if (l.attachEvent) { l.attachEvent("on" + i, I) } else { l.addEventListener(i, I, false) } }, delEvent: function (l, i, I) { if (l.detachEvent) { l.detachEvent("on" + i, I) } else { l.removeEventListener(i, I, false) } }, readCookie: function (O) { var o = "", l = O + "="; if (document.cookie.length > 0) { var i = document.cookie.indexOf(l); if (i != -1) { i += l.length; var I = document.cookie.indexOf(";", i); if (I == -1) I = document.cookie.length; o = unescape(document.cookie.substring(i, I)) } }; return o }, writeCookie: function (i, l, o, c) { var O = "", I = ""; if (o != null) { O = new Date((new Date).getTime() + o * 3600000); O = "; expires=" + O.toGMTString() }; if (c != null) { I = ";domain=" + c }; document.cookie = i + "=" + escape(l) + O + I }, readStyle: function (I, l) { if (I.style[l]) { return I.style[l] } else if (I.currentStyle) { return I.currentStyle[l] } else if (document.defaultView && document.defaultView.getComputedStyle) { var i = document.defaultView.getComputedStyle(I, null); return i.getPropertyValue(l) } else { return null } } };

function ScrollPic(scrollContId, arrLeftId, arrRightId, dotListId) { this.scrollContId = scrollContId; this.arrLeftId = arrLeftId; this.arrRightId = arrRightId; this.dotListId = dotListId; this.dotClassName = "dotItem"; this.dotOnClassName = "dotItemOn"; this.dotObjArr = []; this.pageWidth = 0; this.frameWidth = 0; this.speed = 10; this.space = 10; this.pageIndex = 0; this.autoPlay = true; this.autoPlayTime = 5; var _autoTimeObj, _scrollTimeObj, _state = "ready"; this.stripDiv = document.createElement("DIV"); this.listDiv01 = document.createElement("DIV"); this.listDiv02 = document.createElement("DIV"); if (!ScrollPic.childs) { ScrollPic.childs = [] }; this.ID = ScrollPic.childs.length; ScrollPic.childs.push(this); this.initialize = function () { if (!this.scrollContId) { throw new Error("必须指定scrollContId."); return }; this.scrollContDiv = sina.$(this.scrollContId); if (!this.scrollContDiv) { throw new Error("scrollContId不是正确的对象.(scrollContId = \"" + this.scrollContId + "\")"); return }; this.scrollContDiv.style.width = this.frameWidth + "px"; this.scrollContDiv.style.overflow = "hidden"; this.listDiv01.innerHTML = this.listDiv02.innerHTML = this.scrollContDiv.innerHTML; this.scrollContDiv.innerHTML = ""; this.scrollContDiv.appendChild(this.stripDiv); this.stripDiv.appendChild(this.listDiv01); this.stripDiv.appendChild(this.listDiv02); this.stripDiv.style.overflow = "hidden"; this.stripDiv.style.zoom = "1"; this.stripDiv.style.width = "32766px"; if(!+[1,]){this.listDiv01.style.styleFloat="left";this.listDiv02.style.styleFloat="left";}else{this.listDiv01.style.cssFloat="left";this.listDiv02.style.cssFloat="left";} sina.addEvent(this.scrollContDiv, "mouseover", Function("ScrollPic.childs[" + this.ID + "].stop()")); sina.addEvent(this.scrollContDiv, "mouseout", Function("ScrollPic.childs[" + this.ID + "].play()")); if (this.arrLeftId) { this.arrLeftObj = sina.$(this.arrLeftId); if (this.arrLeftObj) { sina.addEvent(this.arrLeftObj, "mousedown", Function("ScrollPic.childs[" + this.ID + "].rightMouseDown()")); sina.addEvent(this.arrLeftObj, "mouseup", Function("ScrollPic.childs[" + this.ID + "].rightEnd()")); sina.addEvent(this.arrLeftObj, "mouseout", Function("ScrollPic.childs[" + this.ID + "].rightEnd()")) } }; if (this.arrRightId) { this.arrRightObj = sina.$(this.arrRightId); if (this.arrRightObj) { sina.addEvent(this.arrRightObj, "mousedown", Function("ScrollPic.childs[" + this.ID + "].leftMouseDown()")); sina.addEvent(this.arrRightObj, "mouseup", Function("ScrollPic.childs[" + this.ID + "].leftEnd()")); sina.addEvent(this.arrRightObj, "mouseout", Function("ScrollPic.childs[" + this.ID + "].leftEnd()")) } }; if (this.dotListId) { this.dotListObj = sina.$(this.dotListId); if (this.dotListObj) { var pages = Math.round(this.listDiv01.offsetWidth / this.frameWidth + 0.4), i, tempObj; for (i = 0; i < pages; i++) { tempObj = document.createElement("span"); this.dotListObj.appendChild(tempObj); this.dotObjArr.push(tempObj); if (i == this.pageIndex) { tempObj.className = this.dotClassName } else { tempObj.className = this.dotOnClassName }; tempObj.title = "第" + (i + 1) + "页"; sina.addEvent(tempObj, "click", Function("ScrollPic.childs[" + this.ID + "].pageTo(" + i + ")")) } } }; if (this.autoPlay) { this.play() } }; this.leftMouseDown = function () { if (_state != "ready") { return }; _state = "floating"; _scrollTimeObj = setInterval("ScrollPic.childs[" + this.ID + "].moveLeft()", this.speed) }; this.rightMouseDown = function () { if (_state != "ready") { return }; _state = "floating"; _scrollTimeObj = setInterval("ScrollPic.childs[" + this.ID + "].moveRight()", this.speed) }; this.moveLeft = function () { if (this.scrollContDiv.scrollLeft + this.space >= this.listDiv01.scrollWidth) { this.scrollContDiv.scrollLeft = this.scrollContDiv.scrollLeft + this.space - this.listDiv01.scrollWidth } else { this.scrollContDiv.scrollLeft += this.space }; this.accountPageIndex() }; this.moveRight = function () { if (this.scrollContDiv.scrollLeft - this.space <= 0) { this.scrollContDiv.scrollLeft = this.listDiv01.scrollWidth + this.scrollContDiv.scrollLeft - this.space } else { this.scrollContDiv.scrollLeft -= this.space }; this.accountPageIndex() }; this.leftEnd = function () { if (_state != "floating") { return }; _state = "stoping"; clearInterval(_scrollTimeObj); var fill = this.pageWidth - this.scrollContDiv.scrollLeft % this.pageWidth; this.move(fill) }; this.rightEnd = function () { if (_state != "floating") { return }; _state = "stoping"; clearInterval(_scrollTimeObj); var fill = -this.scrollContDiv.scrollLeft % this.pageWidth; this.move(fill) }; this.move = function (num, quick) { var thisMove = num / 5; if (!quick) { if (thisMove > this.space) { thisMove = this.space }; if (thisMove < -this.space) { thisMove = -this.space } }; if (Math.abs(thisMove) < 1 && thisMove != 0) { thisMove = thisMove >= 0 ? 1 : -1 } else { thisMove = Math.round(thisMove) }; var temp = this.scrollContDiv.scrollLeft + thisMove; if (thisMove > 0) { if (this.scrollContDiv.scrollLeft + thisMove >= this.listDiv01.scrollWidth) { this.scrollContDiv.scrollLeft = this.scrollContDiv.scrollLeft + thisMove - this.listDiv01.scrollWidth } else { this.scrollContDiv.scrollLeft += thisMove } } else { if (this.scrollContDiv.scrollLeft - thisMove <= 0) { this.scrollContDiv.scrollLeft = this.listDiv01.scrollWidth + this.scrollContDiv.scrollLeft - thisMove } else { this.scrollContDiv.scrollLeft += thisMove } }; num -= thisMove; if (Math.abs(num) == 0) { _state = "ready"; if (this.autoPlay) { this.play() }; this.accountPageIndex(); return } else { this.accountPageIndex(); setTimeout("ScrollPic.childs[" + this.ID + "].move(" + num + "," + quick + ")", this.speed) } }; this.next = function () { if (_state != "ready") { return }; _state = "stoping"; this.move(this.pageWidth, true) }; this.play = function () { if (!this.autoPlay) { return }; clearInterval(_autoTimeObj); _autoTimeObj = setInterval("ScrollPic.childs[" + this.ID + "].next()", this.autoPlayTime * 1000) }; this.stop = function () { clearInterval(_autoTimeObj) }; this.pageTo = function (num) { if (_state != "ready") { return }; _state = "stoping"; var fill = num * this.frameWidth - this.scrollContDiv.scrollLeft; this.move(fill, true) }; this.accountPageIndex = function () { this.pageIndex = Math.round(this.scrollContDiv.scrollLeft / this.frameWidth); if (this.pageIndex > Math.round(this.listDiv01.offsetWidth / this.frameWidth + 0.4) - 1) { this.pageIndex = 0 }; var i; for (i = 0; i < this.dotObjArr.length; i++) { if (i == this.pageIndex) { this.dotObjArr[i].className = this.dotClassName } else { this.dotObjArr[i].className = this.dotOnClassName } } } };
//--------------------------------常见问题 js-----------------------------------//
$(function(){var ticker=$("#ticker");ticker.children().filter("div").each(function(){var dt=$(this),container=$("<div>");dt.next().appendTo(container);dt.prependTo(container);container.appendTo(ticker)});ticker.css("overflow","hidden");function animator(currentItem){var distance=currentItem.height();duration=(distance+parseInt(currentItem.css("marginTop")))/0.025;currentItem.animate({marginTop:-distance},duration,"linear",function(){currentItem.appendTo(currentItem.parent()).css("marginTop",0);animator(currentItem.parent().children(":first"))})}animator(ticker.children(":first"));ticker.mouseenter(function(){ticker.children().stop()});ticker.mouseleave(function(){animator(ticker.children(":first"))})});
//--------------------------------图片上可定位文字的跑马灯 js-----------------------------------//
(function($){$.fn.scrollbox=function(config){var defConfig={linear:false,startDelay:2,delay:3,step:5,speed:32,switchItems:1,direction:"vertical",distance:"auto",autoPlay:true,onMouseOverPause:true,paused:false,queue:null};config=$.extend(defConfig,config);config.scrollOffset=config.direction==="vertical"?"scrollTop":"scrollLeft";if(config.queue){config.queue=$("#"+config.queue)}return this.each(function(){var container=$(this),containerUL,scrollingId=null,nextScrollId=null,paused=false,backward,forward,resetClock,scrollForward,scrollBackward;if(config.onMouseOverPause){container.bind("mouseover",function(){paused=true});container.bind("mouseout",function(){paused=false})}containerUL=container.children("ul:first-child");scrollForward=function(){if(paused){return}var curLi,i,newScrollOffset,scrollDistance,theStep;curLi=containerUL.children("li:first-child");scrollDistance=config.distance!=="auto"?config.distance:config.direction==="vertical"?curLi.height():curLi.width();if(!config.linear){theStep=Math.max(3,parseInt((scrollDistance-container[0][config.scrollOffset])*0.3,10));newScrollOffset=Math.min(container[0][config.scrollOffset]+theStep,scrollDistance)}else{newScrollOffset=Math.min(container[0][config.scrollOffset]+config.step,scrollDistance)}container[0][config.scrollOffset]=newScrollOffset;if(newScrollOffset>=scrollDistance){for(i=0;i<config.switchItems;i++){if(config.queue&&config.queue.hasChildNodes()&&config.queue.getElementsByTagName("li").length>0){containerUL.append(config.queue.getElementsByTagName("li")[0]);containerUL.remove(containerUL.children("li:first-child"))}else{containerUL.append(containerUL.children("li:first-child"))}}container[0][config.scrollOffset]=0;clearInterval(scrollingId);if(config.autoPlay){nextScrollId=setTimeout(forward,config.delay*1000)}}};scrollBackward=function(){if(paused){return}var curLi,i,liLen,newScrollOffset,scrollDistance,theStep;if(container[0][config.scrollOffset]===0){liLen=containerUL.children("li").length;for(i=0;i<config.switchItems;i++){containerUL.children("li:last-child").insertBefore(containerUL.children("li:first-child"))}curLi=container.children("li:first-child");scrollDistance=config.distance!=="auto"?config.distance:config.direction==="vertical"?curLi.height():curLi.width();container[0][config.scrollOffset]=scrollDistance}if(!config.linear){theStep=Math.max(3,parseInt(container[0][config.scrollOffset]*0.3,10));newScrollOffset=Math.max(container[0][config.scrollOffset]-theStep,0)}else{newScrollOffset=Math.max(container[0][config.scrollOffset]-config.step,0)}container[0][config.scrollOffset]=newScrollOffset;if(newScrollOffset===0){clearInterval(scrollingId);if(config.autoPlay){nextScrollId=setTimeout(forward,config.delay*1000)}}};forward=function(){clearInterval(scrollingId);scrollingId=setInterval(scrollForward,config.speed)};backward=function(){clearInterval(scrollingId);scrollingId=setInterval(scrollBackward,config.speed)};resetClock=function(delay){config.delay=delay||config.delay;clearTimeout(nextScrollId);if(config.autoPlay){nextScrollId=setTimeout(forward,config.delay*1000)}};if(config.autoPlay){nextScrollId=setTimeout(forward,config.startDelay*1000)}container.bind("resetClock",function(delay){resetClock(delay)});container.bind("forward",function(){clearTimeout(nextScrollId);forward()});container.bind("backward",function(){clearTimeout(nextScrollId);backward()});container.bind("speedUp",function(speed){if(typeof speed==="undefined"){speed=Math.max(1,parseInt(config.speed/2,10))}config.speed=speed});container.bind("speedDown",function(speed){if(typeof speed==="undefined"){speed=config.speed*2}config.speed=speed})})}}(jQuery));



	function processLowerIENavigate()
{
   var isIE = document.all ? 1 : 0;
   if (isIE == 1)
   {
       if(navigator.userAgent.indexOf("MSIE7.0") > 0 || navigator.userAgent.indexOf("MSIE 8.0") > 0)
       {  
    //  var doc=document; 
           var link=document.createElement("link");
           link.setAttribute("rel", "stylesheet");
           link.setAttribute("type", "text/css");
           link.setAttribute("id", "size-stylesheet");
           link.setAttribute("href", "");
  
           var heads = document.getElementsByTagName("head");
           if(heads.length)
               heads[0].appendChild(link);
           else
               document.documentElement.appendChild(link);

           document.write("<script type='text/javascript' src='jquery.min.js'></script>");
           document.write("<script type='text/javascript' src='media_screen.js'></script>");
  
       }
   } 
}
var lowerIE8 = processLowerIENavigate();