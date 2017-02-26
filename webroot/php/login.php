<?php
require('sjk.php');
session_start();
$yz=$_GET['yz'];

if($yz==$_SESSION['yz']){
$us=$_GET['username'];
$ps=$_GET['password'];
$sql="select * from lyb where us='$us'";
$result=mysql_query($sql,$conn);
$row=mysql_fetch_assoc($result);
if($row['ps']==$ps)
{
	$sty=array("price"=>"1");
	session_start();
    $_SESSION['username']=$us;
    setcookie('us1',$us,time()+3600*24*50*1000);
}
else
    $sty=array("price"=>"0");
echo json_encode($sty);
}
else{
	echo '验证码错误！';
}