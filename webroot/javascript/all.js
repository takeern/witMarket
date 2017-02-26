function change_header(){
	var width=$(window).width();
	if(width<1200){
		$('.searchwrapper').css('display','none');
		$('.navwrapper').css('left','80%');
	}
}
function slide_left(){/*滑动效果*/
  
    var wid=$(document).width();
	var hei=$(document).height();
	$('.pm').css('height',hei);
	$('.transparent_class').animate({width:230,left:wid-230},"slow");
	get_state();
}
function slide_right(){
	var wid=$(document).width();
	$('.transparent_class').animate({width:0,left:wid},"slow");
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
	if(!$.trim($('#patche1').val())){
		var m='验证码错误';
		$('#checkpic1').next().html(m)
	}
	if(i==false)
	{
		$('#sumbit').next().html('请填写正确表单');
	}
	return i;
}
function loginform(){//提交注册表单
	var m=checkForm();
	if(m==true)
	{
		$.ajax({
			type:"POST",
			url:'../php/insert.php',
			data:{username:$('#username').val(),password:$('#old_password').val(),phone:$("#phone").val(),yz:$('#patche1').val()},
			success: function(data){
				if($.trim(data)){
					var info='验证码错误！';
					$('#checkpic1').next().html(info);
					return false;
				}
			    $('.ss').removeClass('hidden');
	            $('.zhuceform').addClass('hidden');	
				
			}
		})
	}	
}
function get_gs_info(){
	var k=true;
	if(!$.trim($('.menu li').eq(4).html()))
   {
	   k=false;
   }
	if($('.menu li').eq(4).hasClass('hidden'))
	{
	    k=false;
	}
	if(k){
		$('#info_wrapper').removeClass('hidden');
				$('.publisher_info p').addClass('hidden');
				$('.publish_time').removeClass('hidden');
	}
}
function changing(){//验证码 
    document.getElementById('checkpic').src="../php/yz.php?"+Math.random();
}
function changing1(){//验证码 
    document.getElementById('checkpic1').src="../php/yz.php?"+Math.random();
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
		url:"../php/checkus.php",
		data:{username:$('#username').val()},
		success: function(data){
			var data=jQuery.trim(data);
			if(data.length>304)
				  {
			      data=data.substr(304);
				  }
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
	if(!$.trim($('#patche').val())){
		var m='验证码错误';
		$('#checkpic').next().html(m);
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
			data:{username:$('#username1').val(),password:$('#password1').val(),yz:$('#patche').val()},
			success: function(data){
			if(data=='验证码错误！'){
				$('.remind').html(data);
				return false;
			}
			var data=jQuery.trim(data);
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
				get_gs_info();
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

function close_0(){//  g关闭注册 侧栏 登录表单
	slide_right();
	$('.pub').addClass('hidden');
	$('.loginwrapper').addClass('hidden');
	$('.zhuceform').addClass('hidden');
	$('.ss').addClass('hidden');
	$('.login').addClass('hidden');
}
function log_type(m){//上传type
    m=$('.left_nav div').eq(m).html();
    $('#type').val(m);
	$('#gs_tp_su').click();
}
function up_id(m,n){//传递id
	var id=$('.item_wrapper').eq(m).find('.item').eq(n).find('.item_id').find('p').html();
	$('#gsid').val(id);
	$('#gssb').click();
}
function get_state(){//获取商品发售状态
     $.ajax({
		 type:'GET',
		 data:{user:$("nav.menu li").eq(3).html()},
		 url:"../php/state.php",
		 success: function(data){
			var data=jQuery.trim(data);
	        data=data.split('|');
		    m=data.length-1;
			page=m/35;
			for(var i=0;i<page;i++){
				$('.turn li').eq(i).css('visibility','visible');
			}
			var n=1;
			var $pub=$('.pub_list');
			for(var j=0;j<6;j++){
			    for(var i=0;i<7;i++){
					$pub.eq(j).find('div').eq(i).removeClass('hidden');
					$pub.eq(j).find('div').eq(i).find('span').eq(5).html(data[n]);
					$pub.eq(j).find('div').eq(i).find('span').eq(0).html(data[n+1]);
					$pub.eq(j).find('div').eq(i).find('span').eq(1).html(data[n+2]);
					$pub.eq(j).find('div').eq(i).find('span').eq(2).html(data[n+3]);
					if(data[n+4]=='未售'){
						$pub.eq(j).find('div').eq(i).find('span').eq(4).css('background-color','#F00');
					}
					else{
						$pub.eq(j).find('div').eq(i).find('span').eq(3).css('background-color','#F00');
					}
					n=n+5;
					if(n>=m){
					break;
				}
			    }
				if(n>=m){
					break;
				}
			}
		 }
	 })
}
function change_state(i,j,m){//改变商品出售状态
	if(m==1){//改成未售
	    $('.pub_list').eq(i).find('div').eq(j).find('span').eq(4).css('background-color','#F00');
		$('.pub_list').eq(i).find('div').eq(j).find('span').eq(3).css('background-color','#999');
		var m='未售';
	}
	else{
		 $('.pub_list').eq(i).find('div').eq(j).find('span').eq(3).css('background-color','#F00');
		$('.pub_list').eq(i).find('div').eq(j).find('span').eq(4).css('background-color','#999');
		var m='已售';
	}
	var id=$('.pub_list').eq(j).find('div').eq(i).find('span').eq(5).html();
	$.ajax({
		type:'GET',
		url:"../php/change_state.php",
		data:{data:m,id:id},
		success: function(){
			var k='商品已改为'+m;
			alert(k);
		}
	})
}
function turn(m){
	$('.pub_list').each(function(){
		$(this).addClass('hidden');
    })
	$('.pub_list').eq(m).removeClass('hidden');
	$('.turn li').each(function(){
		$(this).css('border','1px solid #e1e2e3');
	})
	$('.turn li').eq(m).css('border','0px');
}
function show_state(){
	$('.pub').removeClass('hidden');
}
function query(){
	var data=$('.search').val();
	$('#query-a').click();
	data1=jQuery.trim(data);
      if(data){
		  $.ajax({
			  url:'../php/keyword.php',
			  data:{search1:data1},
			  type:"GET",
			  success: function(data){
				  var data=jQuery.trim(data);
				  console.log(data);
				  if(data.length>304)
				  {
			      data=data.substr(304);
				  }
				  if(data!='success'){
					 return false;
				  }
				  else{
					  return true;
				  }
			  }
		  });
	  }
	  else{
		  alert("请填写搜索内容！");
		  return false;
		  }
}
