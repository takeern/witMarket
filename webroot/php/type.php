<? /* 取得type 商品  */
if(isset($_COOKIE['type']))
{
	 $type=$_COOKIE['type'];
	 if($type!=''){
 require('sjk.php');
 $sql="SELECT id,gsname,price,datetime,img1 FROM `goods` where type='$type' order by id DESC LIMIT 0,90";
   if($type=='最新发布'){
	  $sql='SELECT id,gsname,price,datetime,img1 FROM `goods` order by id DESC LIMIT 0,90 ';
   }
 $result=mysql_query($sql,$conn)or(die);
 $count=mysql_num_rows($result);
 $i=0;
 while($row=mysql_fetch_assoc($result))
 {
	$id=$row['id'];
	$gsname=$row['gsname'];
	$datetime=$row['datetime'];
	$price=$row['price'];
	$img1=$row['img1'];
	$img1='..'.'/'.'images'.'/'.$img1;
	$res=$res.'|'.$id.'|'.$gsname.'|'.$datetime.'|'.$price.'|'.$img1;
	$i++;
	if($i==15){
		break ;
	}	
 }
 echo $count.$res;
 
	 }
	;
}
else{
echo 0;
}
?>