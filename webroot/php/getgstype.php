<?
session_start();
$type=$_GET['type'];
setcookie('type',$type,time()+60);
header('location:../html/type.html');
?>