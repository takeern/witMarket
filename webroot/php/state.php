<?
require('sjk.php');
$us=$_GET['user'];

  $res='';
  $sql="select id,datetime,gsname,price,state from goods where username='$us' order by id DESC  limit 0,35";
  $result=mysql_query($sql,$conn);
  while($row=mysql_fetch_assoc($result)){
	  $res=$res.'|'.$row['id'].'|'.$row['datetime'].'|'.$row['gsname'].'|'.'￥'.$row['price'].'|'.$row['state'];
  }
  echo $res;
?>