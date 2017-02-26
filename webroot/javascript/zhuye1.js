function f(){/*  动态定位 绝对框位置 使他居中*/
	    var n=$(document).scrollTop()+280;
		$('.pm').offset({top:n-280});
		var m=$('.loginwrapper').offset({left:700,top:n});
		console.log(m);
};
function slide_left(){/*滑动效果*/
	$('.transparent_class').animate({width:230,left:1290},"slow");
}
function slide_right(){
	$('.transparent_class').animate({width:0,left:1520},"slow");
}
//  手机验证还未完成
function ac_focusout(){  //验证账号密码
    var m=/\w{6,}/g;
	var r=$(this).val();
	if(m.test(r)==false)
	{
		var eeror='请输入长度不少于6位字符';
		$(this).addClass('warming').next().html(eeror);
	}
	else{
		$(this).removeClass('warming');
	}
} //be_eeror表示填写错误  warming标记是否
function ac_focus(){  //检测删除eeror
   if($(this).hasClass('warming'))
	{
		$(this).removeClass('warming');	
		var m='&nbsp';
		$(this).next().html(m);
	}
}
function check_password(){
	if($('#new_password').val()!=$('#old_password').val())
	{
		var eerortxt='两次输入密码不一致';
		$(this).addClass('warming');
		$(this).next().html(eerortxt);
	}
}
function checkForm(){//检测表单
	var i=true;
	$('.zhuceform>input').each(function(){
		if($(this).hasClass('warming'))
		{
			i=false
		}
	})
	if(i==false)
	{
		$('#sumbit').next().html('请填写正确表单');
	}
	return i;
}
function loginform(){//提交表单
	var m=checkForm();
	if(m==true)
	{
		$.ajax({
			type:"POST",
			url:'../php/insert.php',
			data:{username:$('#username').val(),password:$('#password').val(),phone:$("#phone").val()},
			success: function(data){
			    $('.ss').removeClass('hidden');
	            $('.zhuceform').addClass('hidden');	
			}
		})
	}	
}
function checkUs(){// 检测用户名
    var m=/\w{6,}/g;
	var r=$(this).val();
	if(m.test(r)==false)
	{
		var eeror='请输入长度不少于6位字符';
		$(this).addClass('warming').next().html(eeror);
	}
	else{
	$.ajax({
		type:"GET",
		url:"../php/checkUS.php",
		data:{username:$('#username').val()},
		success: function(data){
			var data=jQuery.trim(data);
			data=data.substr(304);
			obj=eval('('+data+')');
			if(obj[0].price=='1')
			{
				var m="该用户已注册";
				$('#username').addClass('warming');
			}
			else
			{
				m="该用户名可以使用";
			}
			$('#username').next().html(m);
		}
	})
	}
}
function zhuce(){
	$('.loginwrapper').removeClass('hidden');
	$('.zhuceform').removeClass('hidden');
	$('.ss').addClass('hidden');
	$('.login').addClass('hidden');
}
function login(){
	$('.loginwrapper').removeClass('hidden');
	$('.zhuceform').addClass('hidden');
	$('.ss').addClass('hidden');
	$('.login').removeClass('hidden');
}
function login1(){  /* 提交登录表单*/
    if(!$.trim($('#username1').val()))
	{
		var m='请填写正确表单';
		$(".remind").html(m);
		return false;
	}
	if(!$.trim($('#password1').val()))
	{
		var m='请填写正确表单';
		$(".remind").html(m);
		return false;
	}
		$.ajax({
			type:"GET",
			url:"../php/login.php",
			data:{username:$('#username1').val(),password:$('#password1').val()},
			success: function(data){
				console.log(data);
			var data=jQuery.trim(data);
			data=data.substr(304);
			console.log(data);
			obj=eval('('+'['+data+']'+')');
			console.log(obj);
			if(obj[0].price=='1')
			{
				$('.loginwrapper').addClass('hidden');
				$('.menu li').eq(1).addClass('hidden');
				$('.menu li').eq(2).addClass('hidden');
				$('.menu li').eq(4).removeClass('hidden');
				$('.menu li').eq(3).removeClass('hidden').html($('#username1').val());
			}
			else
			{
				var m='账户密码错误！';
				$(".remind").html(m);
			}
			
		}
		})
	
}
function clear(){/* 清除提示文*/
	var m='';
	$("p.remind").html(m);
}
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
		}
	});		
}
function logout(){// 注销
	$.ajax({
		type:"GET",
		url:"../php/logout.php",
		data:{action:'logout'},
		success: function(data){
			    slide_right();
			    $('.menu li').eq(1).removeClass('hidden');
				$('.menu li').eq(2).removeClass('hidden');
				$('.menu li').eq(4).addClass('hidden');
				$('.menu li').eq(3).addClass('hidden').html('');
		}
	})
}
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
		  if(!$.trim(phone))
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
								  alert('上传成功');
		                            }
	                               }
	                  $('#file').ajaxSubmit(options);
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
function check_up(){
	if(!$.trim($('.menu li').eq(3).html()))
	{
		return false;
	}
	if($('.menu li').eq(3).hasClass('hidden'))
	{
		return false;
	}
	else{
		return true;
	}
}
function getgs(){//获取主页商品
	$.ajax({
			type:"POST",
			
			url:'../php/getgs.php',
			
			success: function(data){
				var data=jQuery.trim(data);
			     data=data.substr(304);
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
				 $('div.item_wrapper').eq(i).find('.item').eq(j).find('.item_publishtime').find('p').html(info);
				 $('div.item_wrapper').eq(i).find('.item').eq(j).find('.item_id').find('p').html(data[m+1]).addClass('hidden');
				 $('div.item_wrapper').eq(i).find('.item').eq(j).find('.img1').find('img').attr('src',data[m+5]);
				 m=m+5;
				 }
				 }
			
			    
			}
		})
}
function close_0(){//  g关闭注册 侧栏 登录表单
	slide_right();
	$('.loginwrapper').addClass('hidden');
	$('.zhuceform').addClass('hidden');
	$('.ss').addClass('hidden');
	$('.login').addClass('hidden');
}
function keyword(){//set cookie存储keyword 并跳转
	if($.trim($('#search').val()))
	{
		$.ajax({
			type:"GET",
			data:{keyword:$('#search').val(),data:"keyword"},
			url:"../php/find.php",
		})
	}
}
function get_query(){
	$.ajax({
		type:"GET",
		data:{action:"query"},
		url:"../php/find.php",
		success: function(data){
			var data=jQuery.trim(data);
			data=data.substr(304);
	        data=data.split('|');
			var z=data.length/5;
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
				$('.item').eq(i).css('visibility','visible');
				$('.item').eq(i).find('.item_publishtime').find('p').html(info);
				$('.item').eq(i).find('.item_price').find('p').html(data[m+4]);
				$('.item').eq(i).find('.item_name').find('p').html(data[m+2]);
				$('.item').eq(i).find('.item_id').find('p').html(data[m+1]).addClass('hidden');
				$('.img1').find('img').attr('src',data[m+5]);
				m=m+5;
			}
			}
			else{
				$('.pro_message img').addClass("hidden");
				$('.pro_message p').removeClass('hidden');
				$('.pro_message div.publish').removeClass('hidden');
			}
		}
	})
}
function log_type(m){//上传type
    m=$('.left_nav div').eq(m).html();
    $('#type').val(m);
	$('#gs_tp_su').click();
}
function get_type(){//得到type商品
	$.ajax({
		type:'GET',
		url:"../php/type.php",
	   
		success: function(data){
			var data=jQuery.trim(data);
			data=data.substr(304);
	        data=data.split('|');
			var z=data.length/5;
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
				$('.item').eq(i).css('visibility','visible');
				$('.item').eq(i).find('.item_publishtime').find('p').html(info);
				$('.item').eq(i).find('.item_price').find('p').html(data[m+4]);
				$('.item').eq(i).find('.item_name').find('p').html(data[m+2]);
				$('.item').eq(i).find('.item_id').find('p').html(data[m+1]).addClass('hidden');
				$('.img1').find('img').attr('src',data[m+5]);
				m=m+5;
			}
			}
		}
	})
			
}
function up_id(m,n){//传递id
	var id=$('.item_wrapper').eq(m).find('.item').eq(n).find('.item_id').find('p').html();
	$('#gsid').val(id);
	$('#gssb').click();
}
function get_idgs(){//获取id商品
$.ajax({
		type:'GET',
		url:"../php/getid.php",
		success: function(data){
			var data=jQuery.trim(data);
			data=data.substr(304);
	        data=data.split('|');
			console.log(data);
		    $('.gs_header').find('span').eq(0).html(data[5]).end().eq(1).html(data[13]);
			$('.gs_img img').eq(0).attr('src',data[6]);
			$('.radiu li').eq(0).css('display','inline-block');
			$('.gs_name').html(data[13]);
			$('.gs_price').html(data[12]);
			$('.bargain').html(data[3]);
			$('.publish_time').html(data[15]);
			$('.padd_info').html(data[4]);
			if(data[7]!='..//'){
				$('.gs_img img').eq(1).attr('src',data[7]);
			    $('.radiu li').eq(1).css('display','inline-block');
				if(data[8]!='..//'){
				    $('.gs_img img').eq(2).attr('src',data[8]);
			        $('.radiu li').eq(2).css('display','inline-block');
					if(data[9]!='..//'){
				             $('.gs_img img').eq(3).attr('src',data[9]);
			                 $('.radiu li').eq(3).css('display','inline-block');
					}
				}
			}
			if(data[2]){
				$('.publisher_info div').eq(0).removeClass('hidden');
				$('.pber_ph').html(data[2]);
			}
			if(data[10]){
				$('.publisher_info div').eq(1).removeClass('hidden');
				$('.pber_wx').removeClass('hidden').html(data[10]);
			}
			if(data[11]){
				$('.publisher_info div').eq(2).removeClass('hidden');
				$('.pber_qq').removeClass('hidden').html(data[11]);
			}
		}
	})		
}
function show_img(m){
	$('.radiu li').each(function(){
		$(this).removeClass('be_in');
    });
	$('.radiu li').eq(m).addClass('be_in');
	$('.gs_img img').each(function(){
		$(this).addClass('hidden');
    });
	$('.gs_img img').eq(m).removeClass('hidden');
}