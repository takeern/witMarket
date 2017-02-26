// JavaScript Document
function log_ask(){
	$.ajax({
		type:'GET',
		data:$('.ask-form').serialize(),
		url:'../php/ask.php',
		beforeSend: function(){
			 $('#user1').val($('.menu li').eq(3).html());  
             var m=check_up();
			 var $input=$('.form-group');
			 var $info=$('.form_info');
			 if(m==true)
             {
                var i=true;
                if(!$.trim($('#gs_name').val()))
                {
					$info.eq(0).html('请填写商品名称');
					$input.eq(0).addClass('has-error');
		            i=false;
                }
				if(!$.trim($('#gs_price').val()))
	            {
		             $info.eq(1).html("请填写商品价格");
					 $input.eq(1).addClass('has-error');
		              i=false;
	            }
                var price=document.getElementById('gs_price').value;
                if(isNaN(price))
		        {
			       $info.eq(1).html("请填写商品价格");
				   $input.eq(1).addClass('has-error');
		           i=false;
	            }
			    var phone=$('#gs_phone').val();
			    var re=/^1[3|4|5|8]\d{9}$/;
		        if($.trim(phone))
		        {
		            if(!re.test(phone))
		            {
			           $info.eq(2).html("请填写正确手机号");
					   $input.eq(2).addClass('has-error');
			           i=false;
		          	}
		        }
			    if(!$.trim($('#gs_qq').val()))
                {
	                 $info.eq(3).html('填写正确QQ');
					 $input.eq(3).addClass('has-error');
		             i=false;
                }
			    var qq=$('#gs_qq').val();
			    var re=/^[1-9][0-9]{4,}$/;
			    if(!re.test(qq)){
					 $info.eq(3).html('填写正确QQ');
					 $input.eq(3).addClass('has-error');
					 i=false;
			    }
				return i;
			 }
			 else{
				 alert('请先登录！');
				 return false;
			 }
		},
		success:function(data){
			if(data=='验证码错误!'){
				$('.patche_img span').html(data);
			}
			else{
			$('.but').unbind('click');
			alert('发布成功！');
			}
		}
	})
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
function cleartxt(n){//清除提示文
	var m='&nbsp';
	$('.form-group').eq(n).removeClass('has-error');
	$('.form_info').eq(n).html(m);
}