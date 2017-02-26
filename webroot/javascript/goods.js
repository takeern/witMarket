// JavaScript Document
function comein(){ //
	$.ajax({
		type:"GET",
		url:"../php/comein.php",
		success: function(data){
			obj=eval('('+'['+data+']'+')');
			
			if(obj[0].sus=='1'){
				$('.loginwrapper').addClass('hidden');
				$('.menu li').eq(1).addClass('hidden');
				$('.menu li').eq(2).addClass('hidden');
				$('.menu li').eq(4).removeClass('hidden');
				$('.menu li').eq(3).removeClass('hidden').html(obj[0].username);
			}
			get_idgs()
		}
	});		
}
function get_idgs(){//获取id商品
$.ajax({
		type:'GET',
		url:"../php/getid.php",
		success: function(data){
			var k=true;
			var $wra=$('#info_wrapper div');
	 	    if(!$.trim($('.menu li').eq(4).html()))
	        {
				k=false;
			}
			if($('.menu li').eq(4).hasClass('hidden'))
	        {
				k=false;
			}
			var data=jQuery.trim(data);
	        data=data.split('|');
		    $('.gs_header').find('span').eq(0).html(data[5]).end().eq(1).html(data[13]);
			$('.gs_img img').eq(0).attr('src',data[6]);
			$('.radiu li').eq(0).css('display','inline-block');
			$('.gs_name').html(data[13]);
			$('.gs_price').html(data[12]);
			$('.bargain').html(data[3]);
			$('.publish_time').html(data[15]);
			$('.padd_info').html(data[4]);
			$('.status').html(data[16]);
			if(data[7]!='../images/'){
				$('.gs_img img').eq(1).attr('src',data[7]);
			    $('.radiu li').eq(1).css('display','inline-block');
				if(data[8]!='../images/'){
				    $('.gs_img img').eq(2).attr('src',data[8]);
			        $('.radiu li').eq(2).css('display','inline-block');
					if(data[9]!='../images/'){
				             $('.gs_img img').eq(3).attr('src',data[9]);
			                 $('.radiu li').eq(3).css('display','inline-block');
					}
				}
			}
			if(k){
				$('#info_wrapper').removeClass('hidden');
				$('.publisher_info p').addClass('hidden');
				$('.publish_time').removeClass('hidden');
			}
			if(data[2]){
				$wra.eq(0).removeClass('hidden');
				$('.pber_ph').html(data[2]);
			}
			if(data[10]){
				$wra.eq(1).removeClass('hidden');
				$('.pber_wx').removeClass('hidden').html(data[10]);
			}
			if(data[11]){
				$wra.eq(2).removeClass('hidden');
				$('.pber_qq').removeClass('hidden').html(data[11]);
			}
		}
	})		
}
function show_img(m){//轮播图片
	$('.radiu li').each(function(){
		$(this).removeClass('be_in');
    });
	$('.radiu li').eq(m).addClass('be_in');
	$('.gs_img img').each(function(){
		$(this).addClass('hidden');
    });
	$('.gs_img img').eq(m).removeClass('hidden');
}
