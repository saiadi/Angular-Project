<?php
include_once('config.php');
$fname=$_POST['fname'];
$password=$_POST['password'];
$query="INSERT INTO tableuser(fname, password) VALUES('$fname', $'password')";
if($con->query($query)==true){
	echo "Record added successfully";
}
else
{
	echo "Record not added";
}
?>