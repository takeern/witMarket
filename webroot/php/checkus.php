
<?  header("Content-type:text/html;charst=utf-8");
  include('sjk.php');
  $us=$_GET['username'];
  $sql="select us from lyb where us='$us'";
  $result=mysql_query($sql,$conn);
  $row=mysql_fetch_assoc($result);
  if($row['us'])
  {
	 $sty='[ {price:"1", pt:"1小时前", name:"name"} , {price:"350", pt:"1小时前", name:"name"} ]';
      
	  
  }
  else
      $sty='[ {price:"0", pt:"1小时前", name:"name"} , {price:"350", pt:"1小时前", name:"name"} ]';
  echo $sty

?>
