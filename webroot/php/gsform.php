<?
   date_default_timezone_set("PRC"); 
   error_reporting(E_ALL^E_NOTICE);
   $i=0;
   function makeurl($m){
	   $am=explode('//',$m);
	   $vmg=implode('\\\\',$am);
	   return $vmg;
   }
   function makenames(){
		   $ctime=getdate();
		   return '\\'.$ctime['year'].$ctime['mon'].$ctime['mday'].$ctime['hours'].$ctime['minutes'].$ctime['seconds'].mt_rand().'.jpg';
	   }
    chdir('images');//设定当前目录文件夹为image
	$file=getcwd();//获取当前文件夹路径
	$img=array();
	echo $img;
   while($_FILES['file']['size'][$i]>1){
	 
	if ((($_FILES["file"]["type"][$i] == "image/gif")
   || ($_FILES["file"]["type"][$i] == "image/jpeg")
   || ($_FILES["file"]["type"][$i] == "image/pjpeg"))) 
   {
	   $newname=makenames();
	   $newfile=$file.$newname;
	   $img[$i]=$newfile;
	   if(file_exists($_FILES['file']['tmp_name'][$i])){
		   move_uploaded_file($_FILES['file']['tmp_name'][$i],$newfile);
	 }
   }
   $i++;
 }

	
           $gsname=$_POST['gs_name'];
		   $price=$_POST['price'];
		   $phone=$_POST['gs_phone'];
		   $qq=$_POST['gs_qq'];
		   $username=$_POST['username'];
		   $weixin=$_POST['gs_weixin'];
		   $bargain=$_POST['bargain'];
		   if($bargain==''){
	           $bargain='可以';
	           }
		   $gsde=$_POST['gs_description'];
		   $img1=$img[0];
		   echo $imgl;
		   $im=explode('\\',$img1);
		   $img1=implode('\\\\',$im);
		   echo $img1;
		   $img2=$img[1];
		   $img2=makeurl($img2);
		   $img3=$img[2];
		   $img3=makeurl($img3);
		   $img4=$img[3];
		   $img4=makeurl($img4);
		   $type=$_POST['gs_type'];
		   
		   //后面将数据插入数据库；
		   require('sjk.php');
		   mysql_query("INSERT INTO `goods` (`id`, `phone`, `bargain`, `description`, `type`, `img1`, `img2`, `img3`, `img4`, `weixi`, `qq`, `price`, `gsname`, `username`, `datetime`, `state`) VALUES (NULL, '$phone', '$bargain', '$gsde', '$type', '$img1', '$img2', '$img3', '$img4', '$weixin', '$qq', '$price', '$gsname', '$username', CURRENT_TIMESTAMP, '未售');")or die("faile");
           mysql_close($conn);
 
?>