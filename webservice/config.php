<?php
define('BASE_PATH', 'http://127.0.0.1/project1/webservice');
define('DB_HOST', '127.0.0.1');
define('DB_NAME', 'roots');
define('DB_USERNAME', 'registration');
define('DB_PASSWORD', 'registration');
$con = new mysqli(DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD);
if(mysqli_connect_error()){
	echo('Failed to connect'.mysqli_connect_error());
}
exit();


?>