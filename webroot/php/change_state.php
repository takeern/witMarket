<?
require('sjk.php');
$id=$_GET['id'];

$value=$_GET['data'];

$sql="UPDATE `goods` SET state='$value' WHERE id='$id'";
mysql_query($sql,$conn)or(die)
?>