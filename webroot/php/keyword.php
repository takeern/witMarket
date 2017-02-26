<?
$keyword=$_GET['search1'];
setcookie('keyword',$keyword,time()+60);
//header("location:../html/query.html")
echo success;
?>