//右侧内容滚动定位
$(function(){
	var lh = $('.mht .lay_pro').height();
	var rh = $('.mht .lay_t').height();
	if(rh < lh){
		t = $('.fixed').offset().top;
		fbh = $('.footer').outerHeight(true);
		mh = $('body').height() - fbh;
		fh = $('.fixed').outerHeight(true);
		$(window).scroll(function(){
			s = $(document).scrollTop();
			if(s > t - 10){
				$('.fixed').css('position','fixed');
				if(s + fh > mh){
					$('.fixed').css('top',mh-s-fh +'px');
				}else{
					$('.fixed').css('top','5px');
					
				}
			}else{
				$('.fixed').css('position','');
			}
		});
	};
});


// 分类展开二级分类
$(function(){
	$('.sort_ul li ul').parent('li').children('.icon').addClass('sort-item');
	$('.sort-item').click(function(){
	  var $sort_ul = $(this).parent('li').children('ul');
	  if($sort_ul.is(":hidden")){
			$sort_ul.show();
			$(this).addClass('icon1');
		}else{
			$sort_ul.hide();
			$(this).removeClass('icon1');
		}
	});
});

$(function(){
	$('.slimScrollDiv').each(function(){
		var h1 = $(this).find('.div_scroll').height();
		var h2 = $(this).find('.sort_ul').height();
		if(h1 >= h2){
			$(this).addClass('hideBtn');
		};
    });
	
	$('.nav li').hover(function(){
		$(this).addClass('sel');
	},function(){
		$(this).removeClass('sel');
	});
	
	$('#nav').hover(function(){
		$(this).find(".tempWrap").css("min-height","1000px");
	},function(){
		$(this).find(".tempWrap").css("min-height","30px");
	});
	
	$('.nav_1 li').hover(function(){
		$(this).addClass('sel');
	},function(){
		$(this).removeClass('sel');
	});
	
	var Nli = $(".navScroll li").length;
	if(Nli <= 10){
		$(".navScroll .hd").hide();
	}
	
	var Nli1 = $(".navScroll1 li").length;
	if(Nli1 <= 8){
		$(".navScroll1 .hd").hide();
	}
});