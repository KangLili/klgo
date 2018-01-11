<?php
header('Content-Type: application/json;charset=UTF-8');

//接收客户端提交数据
@$userId = $_REQUEST['uid'] or die('{"code":-2,"msg":"用户编号不能为空"}');
@$productId = $_REQUEST['pid'] or die('{"code":-3,"msg":"产品编号不能为空"}');

require('1_init.php');

//SQL1：根据用户编号查询出他对应的购物车编号
$sql = "SELECT cid FROM s_car WHERE userId='$userId'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_row($result);

if($row===null){
	$sql = "INSERT INTO s_car VALUES(NULL,'$userId')";
	mysqli_query($conn, $sql);
	$cartId = mysqli_insert_id($conn);
}else {
	$cartId = $row[0];
}

//SQL3：查询购物车详情，对应的购物车编号+产品编号是否存在
$sql = "SELECT did,count FROM s_car_detail WHERE cartId='$cartId' AND productId='$productId'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);

if($row===null){
	$sql = "INSERT INTO s_car_detail VALUES(NULL,'$cartId','$productId','1')";
	mysqli_query($conn,$sql);
	$count = 1;
}else {
	$did = $row[0];
	$count = $row[1];
	$count++;
	$sql = "UPDATE s_car_detail SET count='$count' WHERE did='$did'";
	mysqli_query($conn,$sql);
}

echo '{"code":1, "msg":"购买成功", "count":'.$count.'}';

