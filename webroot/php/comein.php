<?
function cookie($str){
    $val = !empty($_COOKIE[$str]) ? $_COOKIE[$str] : null;
    return $val;
}
$user=cookie('us1');
if($user)
{
	session_start();
    $_SESSION['username']=$user;
    setcookie('us1',$user,time()+3600*24*90);
	$array=array("sus"=>"1","username"=>$user);
}
else
    $array=array("sus"=>"0");
echo json_encode($array);
?>