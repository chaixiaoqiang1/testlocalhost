// 公共JS
//头部搜索选项框
function changeId(idName,obj){
	document.getElementById("leid").id="";
	obj.id="leid";
	obj.blur();
	document.getElementById("top_search_type").value=idName;
	document.getElementById("top_search_key").focus();
}
//取消空格
function trim(str){   
    str = str.replace(/^(\s|\u00A0)+/,'');   
    for(var i=str.length-1; i>=0; i--){   
        if(/\S/.test(str.charAt(i))){   
            str = str.substring(0, i+1);   
            break;   
        }   
    }   
    return str;
}
//搜索
function topSearch()
{
    var val=trim(document.getElementById("top_search_key").value.replace(/-|\/| |　|'/g,""));
    if(val=="" || val=="请输入您要搜索的关键字！")
    {
        alert("请输入您要搜索的关键字！")
        document.getElementById("top_search_key").focus();
        return false;
    }

    var searchType=document.getElementById("top_search_type").value;
    if(searchType==0)//产品
    {
        window.parent.location.href="/chanpin--0-0-"+encodeURIComponent(val)+".html";
    }
    else if(searchType==1)//公司
    {
        window.parent.location.href="/company-all-0-0-"+encodeURIComponent(val)+".html";
    }
    else if(searchType==2)//求购
    {
        window.parent.location.href="/qiugou-0-0-"+encodeURIComponent(val)+".html";
    }
    else if(searchType==3)//行情
    {
        window.parent.location.href="/jiage-0-0-"+encodeURIComponent(val)+".html";
    }
    else if(searchType==4)//新闻
    {
        window.parent.location.href="/nlist-0-"+encodeURIComponent(val)+".html";
    }
    return false;
}
//所有分类展开/合并
(function($){
	$.fn.hoverForIE6=function(option){
		var s=$.extend({current:"hover",delay:10},option||{});
		$.each(this,function(){
			var timer1=null,timer2=null,flag=false;
			$(this).bind("mouseover",function(){
				if (flag){
					clearTimeout(timer2);
				}else{
					var _this=$(this);
					timer1=setTimeout(function(){
						_this.addClass(s.current);
						flag=true;
					},s.delay);
				}
			}).bind("mouseout",function(){
				if (flag){
					var _this=$(this);timer2=setTimeout(function(){
						_this.removeClass(s.current);
						flag=false;
					},s.delay);
				}else{
					clearTimeout(timer1);
				}
			})
		})
	}
})(jQuery);
$(".allsort").hoverForIE6({current:"allsorthover",delay:200});
$(".allsort .item").hoverForIE6({delay:150});
//返回顶部
(function() {
    var $backToTopTxt = "", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
        .text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
            $("html, body").animate({ scrollTop: 0 }, 120);
    }), $backToTopFun = function() {
        var st = $(document).scrollTop(), winh = $(window).height();
        (st > 0)? $backToTopEle.show(): $backToTopEle.hide();
        if (!window.XMLHttpRequest) {
            $backToTopEle.css("top", st + winh - 166);
        }
    };
    $(window).bind("scroll", $backToTopFun);
    $(function() { $backToTopFun(); });
})();