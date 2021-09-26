<?php
/// TIME
date_default_timezone_set('GMT');
$TIME = date("d-m-Y H:i:s"); 
$BROWSER = $_SERVER['HTTP_USER_AGENT']; 

/// COUNTRY
$PP = getenv("REMOTE_ADDR");
$J7 = simplexml_load_file("http://www.geoplugin.net/xml.gp?ip=$PP");
$COUNTRY = $J7->geoplugin_countryName ; // Country

/// VISITOR
$ip = getenv("REMOTE_ADDR");
$file = fopen("vst.txt","a");
fwrite($file,$ip."   |   ".$TIME."   |   " . $COUNTRY ."   |   ".$BROWSER."\n")  ;
/// RANDOM
$one = rand(10,1000000) . rand(10,100000);
$length = 100;
$two = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length);
function tree($length = 100) {
    return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length);
}
$randomise = tree() . $two . $one;
?>