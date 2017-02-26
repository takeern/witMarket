<?
 include('sjk.php');
  $sql="SELECT `id`,`gsname`,`price`,`datetime`,`img1` FROM `goods` order by id DESC limit 0,6";
 $result=mysql_query($sql,$conn)or(die);
 
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
 $sql="SELECT `id`,`gsname`,`price`,`datetime`,`img1`  FROM `goods` WHERE type='闲置数码' order by id DESC limit 0,6";
 $result=mysql_query($sql,$conn)or(die);
 
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
 $sql="SELECT `id`,`gsname`,`price`,`datetime`,`img1`  FROM `goods` WHERE type='校园代步' order by id DESC limit 0,6";
 $result=mysql_query($sql,$conn)or(die);
 
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
 $sql="SELECT `id`,`gsname`,`price`,`datetime`,`img1`  FROM `goods` WHERE type='电器日用' order by id DESC limit 0,6";
 $result=mysql_query($sql,$conn)or(die);
 
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
  $sql="SELECT `id`,`gsname`,`price`,`datetime`,`img1`  FROM `goods` WHERE type='图书教材' order by id DESC limit 0,6";
 $result=mysql_query($sql,$conn)or(die);
 
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
  $sql="SELECT `id`,`gsname`,`price`,`datetime`,`img1`  FROM `goods` WHERE type='美妆衣物' order by id DESC limit 0,6";
 $result=mysql_query($sql,$conn)or(die);
 
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
  $sql="SELECT `id`,`gsname`,`price`,`datetime`,`img1`  FROM `goods` WHERE type='运动棋牌' order by id DESC limit 0,6";
 $result=mysql_query($sql,$conn)or(die);
 
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
  $sql="SELECT `id`,`gsname`,`price`,`datetime`,`img1`  FROM `goods` WHERE type='票券小物' order by id DESC limit 0,6";
 $result=mysql_query($sql,$conn)or(die);
 
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
 echo $res;
?>