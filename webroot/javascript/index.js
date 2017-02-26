// JavaScript Document
function getgs(){//获取主页商品
	$.ajax({
			type:"POST",
			
			url:'../php/getgs.php',
			
			success: function(data){
				var data=jQuery.trim(data);
			     data=data.split('|');
				 var m=0;
				 for(var i=0;i<8;i++)
				 {
				 for(var j=0;j<6;j++)
				 {
				 $('div.item_wrapper').eq(i).find('.item').eq(j).find('.item_price').find('p').html(data[m+4]);
				 $('div.item_wrapper').eq(i).find('.item').eq(j).find('.item_name').find('p').html(data[m+2]);
				
				 var k=$.trim(data[m+3]);
				 k=k.substr(0,10);
				 k=k.split('-');
				 var mydate=new Date;
				
				 n=mydate.getMonth()+1-k[1];
			
				 if(n!=0)
				 {
					 info="一月以前";
				 }
				 else {
					 n=mydate.getDate()-k[2];
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
				 $('div.item_wrapper').eq(i).find('.item').eq(j).find('.item_publishtime').find('p').html(info);
				 $('div.item_wrapper').eq(i).find('.item').eq(j).find('.item_id').find('p').html(data[m+1]).addClass('hidden');
				 $('div.item_wrapper').eq(i).find('.item').eq(j).find('.img1').find('img').attr('src',data[m+5]);
				 m=m+5;
				 }
				 }
			
			    
			}
		})
}