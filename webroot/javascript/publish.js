// JavaScript Document
function close_pre(){   // 打开预览
	$('.content').removeClass('hidden');
	$('.preview').addClass('hidden');
	$('.add_info').addClass('hidden');
}
function open_pre(){   //关闭预览
	$('.content').addClass('hidden');
	$('.preview').removeClass('hidden');
	$('.add_info').removeClass('hidden');
}
function readAsDataURL(i,m){  //预览图像     
		  var file = i[0]; 
        if(!/image\/\w+/.test(file.type)){  
             alert('该文件不是图像');
			 return false;
        }  
        var reader = new FileReader(); 
        reader.readAsDataURL(file);
		reader.onload=function(e){  
             $('.addimg').eq(m).children('img').attr('src',this.result);     
   }
   if($('.file').eq(m).val()!="")
   {
	   $('.file').eq(m+1).removeAttr('disabled');
	   $('.addimg').eq(m+1).children('img').removeClass('hidden');
   }
}  
function img(i){
	$('.file').eq(i).click();
}
function ajaxfile(){//ajax上传表单
   //验证登录状态
   $('#user1').val($('.menu li').eq(3).html());
   
   var m=check_up();
   if(m==true)
   {
   var i=true;
   if(!$.trim($('#goods_name').val()))
   {
	    $('#goods_name').next().html('请填写商品名称');
		i=false;
   }
	  if(!$.trim($('#goods_price').val()))
	   {
		  $('#goods_price').next().html("请填写商品价格");
		  i=false;
	   }
         var price=document.getElementById('goods_price').value;
         if(isNaN(price))
		 {
			  $('#goods_price').next().html("请填写商品价格");
		      i=false;
	     }
			 var phone=$('#gs_phone').val();
			 var re=/^1[3|4|5|8]\d{9}$/;
		  if($.trim(phone))
		  {
		   if(!re.test(phone))
		   {
			   $('#gs_phone').next().html("请填写正确手机号");
			  i=false;
			}
		  }
			if(!$.trim($('#gs_qq').val()))
            {
	                $('#gs_qq').next().html('请填写QQ号');
		           i=false;
            }
			   var qq=$('#gs_qq').val();
			  var re=/^[1-9][0-9]{4,}$/;
			  if(!re.test(qq)){
					   $('#gs_qq').next().html('填写正确QQ');
					   i=false;
				   }
				  if($('#file1').val()=="")
				  {
					  i=false;
					  $('.upload_img').next().html('请上传照片');
				  }
				   if(i==true){
	                 var options={
		                      type:"POST",
		                      url:"../gsform.php",
		                      success:function(data){
								  $('#file').clearForm();
								  alert('上传成功(若已发售，在我的发布中更改发售状态)');
		                            }
	                               }
	                  $('#file').ajaxSubmit(options);
					  $('.gs_sub').unbind('click');
	                  return false;
				   }
   }
   else{
	   alert('请先登录');}
	  return false;
}
function closeupimg(){
	$('.upimg').addClass('hidden');
}
function cleartxt(n){//清除提示文
	var m='&nbsp';
	$('.gs_sub').next().html(m);
    $(n).next('span').html(m);
}
function check_pre(){
	var i=true;
   if(!$.trim($('#goods_name').val()))
   {
	    $('#goods_name').next().html('请填写商品名称');
		i=false;
   }
	  if(!$.trim($('#goods_price').val()))
	   {
		  $('#goods_price').next().html("请填写商品价格");
		  i=false;
	   }
         var price=document.getElementById('goods_price').value;
         if(isNaN(price))
		 {
			  $('#goods_price').next().html("请填写商品价格");
		      i=false;
	     }
			 var phone=$('#gs_phone').val();
			 var re=/^1[3|4|5|8]\d{9}$/;
		   if(!re.test(phone))
		   {
			   $('#gs_phone').next().html("请填写正确手机号");
			  i=false;
			}
			if(!$.trim($('#gs_qq').val()))
            {
	                $('#gs_qq').next().html('请填写QQ号');
		           i=false;
            }
			   var qq=$('#gs_qq').val();
			  var re=/^[1-9][0-9]{4,}$/;
			  if(!re.test(qq)){
					   $('#gs_qq').next().html('填写正确QQ');
				   }
				   if(i==true){
					    open_pre();
					   preview();
					
				   }
}
function preview(){// 预览表单
	$('.gs_header span').eq(0).html($('#goods_type').val()).end().eq(1).html($('#goods_name').val());
	price="￥"+$('#goods_price').val();
	$('h2.gs_price').html(price);
	$('h1.gs_name').html($('#goods_name').val());
	$('span.bargain').html($('input.bargain').val());
	if($.trim($('#gs_phone')))
	{
		$('span.pber_ph').html($('#gs_phone').val()).show();
		
	}
	else{
		$('.publisher_info div').eq(0).hide();
	}
	if($.trim($('#goods_weixin').val())){
		$('.pber_wx').html($('#goods_weixin').val()).show();
	}
	else{
		$('.publisher_info div').eq(1).hide();
	}
	$('.pber_qq').html($('#gs_qq').val());
	var mydata=new Date();
	$('.publish_time span').html(mydata.toLocaleString());
	$('p.padd_info').html($('#gs_des').val());
}
function check_up(){//检测是否登录
	if(!$.trim($('.menu li').eq(4).html()))
	{
		return false;
	}
	if($('.menu li').eq(4).hasClass('hidden'))
	{
		return false;
	}
	else{
		return true;
	}
}