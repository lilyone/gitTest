$(function(){
	/*-----H_banner--------------*/
	var timer;
	//var h_index = 4;
	timer = setInterval(function(){
//		if(h_index <=0){
//			h_index=4;
//		}
//		$("#h_banner li").eq(h_index).fadeToggle();
//		
//		h_index--;
		$("#h_banner li").first().appendTo($("#h_banner"));
	},1000)
	
	
	
	
	
	
	
	//list鼠标滑过事件
	var lists = document.getElementById("pro_list");
	var liList = lists.getElementsByTagName("li");
	var divList = lists.getElementsByTagName("div");
	for(var i=0;i<liList.length;i++){
		liList[i].index = i;
		liList[i].onmouseover =function(){
			for(var j=0;j<divList.length;j++){
				divList[j].className = "hide";
			}
			divList[this.index].className = "show";
		}
		
		liList[i].onmouseleave =function(){
			divList[this.index].className = "hide";
		}
	
		
	}
	

	var timer2;
	//bannerNavList
	$("#main_banner").on("mouseover",function(){
		//$(this).css({"background":"green","height":"30px"});		
		$(".banner_nav li a").css({"height":"30px"});
		$(".banner_nav li a.no_active").css({"background":"#fff"});
		$("#banner_nav").css({"top":"370px","height":"30px"})
		
	})
	$("#main_banner").on("mouseleave",function(){
		//$(this).css({"background":"#fff","height":"30px"});
		$("#banner_nav").css({"top":"392px","height":"8px"})
	})
	

	//好评商品
	$(".hot_buy li").on("mouseover",function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	
	
		var timer3 = setInterval(function(){
			$(".place_1").animate({
				'opacity':"0",
				'width':"30px",
				"height":"30px",
				left:"226px",
				top:"66px"
			},500).animate({
				'opacity':"1",
				'width':"10px",
				"height":"10px",
				left:"236px",
				top:"80px"
			},500)
		},1000)
	//买手力荐
	$(".place_1").on("click",function(){
		$(".biao").animate({
			"left":"229px",
			"top":"30px"
		},500)
		
	})
	$(".place_2").on("click",function(){
		$(".biao").animate({
			"left":"424px",
			"top":"18px"
		},500)
	})
	$(".place_3").on("click",function(){
		$(".biao").animate({
			"left":"614px",
			"top":"46px"
		},500)
	})
	$(".place_4").on("click",function(){
		$(".biao").animate({
			"left":"804px",
			"top":"22px"
		},500)
	})
	$(".place_5").on("click",function(){
		$(".biao").animate({
			"left":"1016px",
			"top":"36px"
		},500)
	})
	
	
	//products
	//好评商品
	$(".hot_buy li").on("mouseover",function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	
	
	
})
