<?php
header("Content-type: text/html; charset=utf-8");
$conn=mysql_connect("sqld-hk.bcehost.com","ed649904c7c84e31ae99aa3a9ea61aae","2f3051b58a654380899d71da70f2afa0");
//mysql_query("set names 'gtf8'");
mysql_select_db("YlCTUtmXhjxXsHHwiLIO",$conn);
error_reporting(E_ALL & ~E_NOTICE);
;