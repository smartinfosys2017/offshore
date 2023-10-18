<?php
$servername = "localhost";
$username = "offensivelogic_root";
$password = "offensivelogic@123";
$database = "offensivelogic_offensivelogic";

try {
	$con = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
	// set the PDO error mode to exception
	$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
} catch(PDOException $e) {
	echo "Connection failed: " . $e->getMessage();
}

if (isset($_SERVER['HTTPS'])) {
	$protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
} elseif(isset( $_SERVER['HTTP_X_FORWARDED_PROTO'] ) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https'){
	$protocol = 'https';
} else {
	$protocol = 'http';
}

$BASEPATH = str_replace("init.php", "", realpath(__FILE__));
define("BASEPATH", $BASEPATH);

$url = preg_replace("#/+#", "/", $_SERVER['HTTP_HOST']);
$site_url = $protocol . "://" . $url;

define("SITEURL", $site_url);
define("UPLOADURL", SITEURL . '/uploads');
define("UPLOADS", BASEPATH . 'uploads');
?>