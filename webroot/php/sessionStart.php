<?
session_start();
$_SESSION['username']=$us;
setcookie('uesrname','$us',time()+3600*24*365*1000);
?>