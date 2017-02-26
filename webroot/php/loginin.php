<?
$_username=$_GET['username'];
$_ps=$_GET['password'];
require('sjk.php');
$sql="select us from lyb where us='$username'";
$_result=mysql_query($sql,$conn);
$row=mysql_fetch_assoc($_result);
if($row['ps']=$_ps)
{
	session_start();
    $_SESSION['username']=$_username;
 	setcookie('uesrname','$_username',time()+3600*24*365*1000);
	echo 1;
}
else
  echo 0;
?>