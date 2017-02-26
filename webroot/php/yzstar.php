<?php
$yz=$_GET['yz'];
if($yz!=$_SESSION['yz'])
{
	echo '验证码错误';
}
