<?php
	header("content-Type:application/json;charset=utf-8");
	@$uname=$_REQUEST['uname']or die('{"code":-2,"msg":"用户名不能为空"}');;
	@$upwd=$_REQUEST['upwd']or die('{"code":-2,"msg":"密码不能为空"}');;
	require('1_init.php');
	$sql="INSERT INTO s_user VALUES(null,'$uname','$upwd')";
	$result=mysqli_query($conn,$sql);
	if($result){
		echo "1";
	}else{
		echo "-1";
	}