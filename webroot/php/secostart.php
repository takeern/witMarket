<?
session_start();

$_SESSION['username']=$us;
setcookie('us1',$user,time()+3600*24*365*1000);
?>