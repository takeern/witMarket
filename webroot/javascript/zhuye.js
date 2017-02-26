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

function close_0(){//  g关闭注册 侧栏 登录表单
	slide_right();
	$('.loginwrapper').addClass('hidden');
	$('.zhuceform').addClass('hidden');
	$('.ss').addClass('hidden');
	$('.login').addClass('hidden');
}
