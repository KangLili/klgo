<?php
 //$conn=mysqli_connect('127.0.0.1','root','','sp',3306);
 $conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
 $sql="set names utf8";
 mysqli_query($conn,$sql);
?>