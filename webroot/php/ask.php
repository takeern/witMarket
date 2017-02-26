<?php
require('sjk.php');
session_start();
$yz=$_GET['patche'];
if($yz==$_SESSION['yz']){
$phone=$_GET['gs_phone'];
$bargain=$_GET['gs_bargain'];
if($bargain==''){
	$bargain='可以';
	}
$des=$_GET['gs_description'];
$type=$_GET['gs_type'];
$weixi=$_GET['gs_weixin'];
$qq=$_GET['gs_qq'];
$price=$_GET['gs_price'];
$gsname=$_GET['gs_name'];
$user=$_GET['username'];
$img1='ask.jpg';
mysql_query("INSERT INTO `goods` ( `phone`, `bargain`, `description`, `type`, `img1`, `weixi`, `qq`, `price`, `gsname`, `username`, `datetime`, `state`) VALUES ( '$phone', '$bargain', '$des', '$type', '$img1', '$weixi', '$qq', '$price', '$gsname', '$user', CURRENT_TIMESTAMP, '未售');")or die("faile");
mysql_close($conn);
}
else{
	echo '验证码错误！';
}