<?

 if($_GET['action']=='query')
 {
	 $keyword=$_COOKIE['keyword'];
	 if($keyword!=''){
 require('sjk.php');

 $sql="SELECT id,gsname,price,datetime,img1 FROM `goods` where gsname like '%".$keyword."%' ";
 $result=mysql_query($sql,$conn)or(die);
 $count=mysql_num_rows($result);
 while($row=mysql_fetch_assoc($result))
 {
	$id=$row['id'];
	$gsname=$row['gsname'];
	$datetime=$row['datetime'];
	$price=$row['price'];
	$img1=$row['img1'];
	
	$img1='..'.'/'.'images'.'/'.$img1;
	$res=$res.'|'.$id.'|'.$gsname.'|'.$datetime.'|'.$price.'|'.$img1;
 }
 echo $count.$res;
 }
 }
?>