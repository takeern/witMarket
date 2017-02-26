
<? require('sjk.php');
session_start();
$yz=$_POST['yz'];

if($yz==$_SESSION['yz']){
$us=$_POST['username'];

$ps=$_POST['password'];

$phone=$_POST["phone"];

mysql_query("INSERT INTO `lyb`(`us`, `ps`, `phone`)values('$us','$ps','$phone')")or die("faile");
mysql_close($conn);
}
else{
	echo '0';
}
?>
