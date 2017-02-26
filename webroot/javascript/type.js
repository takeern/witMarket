// JavaScript Document
function change_header(){
	var width=$(window).width();
	if(width<1200){
		$('.searchwrapper').css('display','none');
		$('.navwrapper').css('left','85%');
	}
}
function get_type(m){//得到type商品
	$.ajax({
		type:'GET',
		url:"../php/type.php",  
		success: function(data){
			var data=jQuery.trim(data);
	        data=data.split('|');
			var z=data.length/5-1;
			var $item=$('.item');
			var $li=$('.turn1 li');
			$('.info_type span').html(data[0]);	
			$('.turn_wrapper').eq(0).css('display','block');
			for(var i=0;i<data[0]/15;i++){
				$li.eq(i).css('visibility','visible');
			}
			if(z>1)
			{ 
			var m=0;
			for(var i=0;i<z;i++){
				var k=$.trim(data[m+3]);
				 k=k.substr(0,10);
				 k=k.split('-');
				 var mydate=new Date;
				
				 n=k[1]-mydate.getMonth()-1;
			
				 if(n!=0)
				 {
					 info="一个月以前";
				 }
				 else {
					 n=k[2]-mydate.getDate();
					 if(n==0){
						 info='刚刚发布';
					 }
					 else if(n<7){
						 info='一天以前';
					 }
					 else{
						 info='一周以前';
					 }
				 }
				$('.pro_message').css('display','none');
				$('.item').eq(i).css('display','block');
				$item.eq(i).find('.item_publishtime').find('p').html(info);
				$item.eq(i).find('.item_price').find('p').html(data[m+4]);
				$item.eq(i).find('.item_name').find('p').html(data[m+2]);
				$item.eq(i).find('.item_id').find('p').html(data[m+1]).addClass('hidden');
				$item.eq(i).find('img').attr('src',data[m+5]);
				m=m+5;
			}
			}
		}
	})
	get_type1();		
}
function get_type1(){
	$.ajax({
		type:'GET',
		url:"../php/type1.php",  
		success: function(data){
			var data=jQuery.trim(data);
	        data=data.split('|');
			var z=data.length/5-1;
			var $item=$('.item');
			if(z>1)
			{ 
			var m=0;
			for(var i=15;i<z+15;i++){
				var k=$.trim(data[m+3]);
				 k=k.substr(0,10);
				 k=k.split('-');
				 var mydate=new Date;
				
				 n=k[1]-mydate.getMonth()-1;
			
				 if(n!=0)
				 {
					 info="一个月以前";
				 }
				 else {
					 n=k[2]-mydate.getDate();
					 if(n==0){
						 info='刚刚发布';
					 }
					 else if(n<7){
						 info='一天以前';
					 }
					 else{
						 info='一周以前';
					 }
				 }	
				$item.eq(i).css('display','block');
				$item.eq(i).find('.item_publishtime').find('p').html(info);
				$item.eq(i).find('.item_price').find('p').html(data[m+4]);
				$item.eq(i).find('.item_name').find('p').html(data[m+2]);
				$item.eq(i).find('.item_id').find('p').html(data[m+1]).addClass('hidden');
				$item.eq(i).find('img').attr('src',data[m+5]);
				m=m+5;
			}
			}
		}
	})
	
}
function turn_type(m){
	$('.turn_wrapper').each(function(index, element) {
        $(this).css('display','none');
    });
	$('.turn_wrapper').eq(m-1).css('display','block');
	
	var　$li=$('.turn1 li');
	
	$li.each(function(){
		$(this).css('color',"#00F");
	});
	$li.eq(m-1).css('color',"#F00");
	
	
}
