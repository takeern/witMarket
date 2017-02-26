<?
	 $id=$_COOKIE['gsid'];
	 if($id!=''){
 require('sjk.php');
 $sql="SELECT * FROM `goods` where id='$id' ";
 $result=mysql_query($sql,$conn)or(die);
 $row=mysql_fetch_assoc($result);

	$id=$row['id'];
	$gsname=$row['gsname'];
	$phone=$row['phone'];
	$bargain=$row['bargain'];
	$type=$row['type'];
	$qq=$row['qq'];
	$weixin=$row['weixi'];
	$description=$row['description'];
	$username=$row['username'];
	$datetime=$row['datetime'];
	$price='￥'.$row['price'];
	$state=$row['state'];
	$img1=$row['img1'];
	$img1='..'.'/'.'images'.'/'.$img1;
	$img2=$row['img2'];
	$img2='..'.'/'.'images'.'/'.$img2;
	$img3=$row['img3'];
	$img3='..'.'/'.'images'.'/'.$img3;
	$img4=$row['img4'];
	$img4='..'.'/'.'images'.'/'.$img4;
	$res='|'.$id.'|'.$phone.'|'.$bargain.'|'.$description.'|'.$type.'|'.$img1.'|'.$img2.'|'.$img3.'|'.$img4.'|'.$weixin.'|'.$qq.'|'.$price.'|'.$gsname.'|'.$username.'|'.$datetime.'|'.$state;
 
 echo $res;
	 }
?>