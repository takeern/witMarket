<?
session_start();
$gsid=$_GET['gs_id'];
setcookie('gsid',$gsid,time()+60);
header('location:../html/goods.html')
?>