<?php
 header('Content-Type:application/json;charset=utf-8');
 @$uid=$_REQUEST['uid'] or die('{"code":-2,"msg":"用户名编码不能为空"}');
 require('1_init.php');

$sql="SELECT cid FROM s_car WHERE userId=$uid";
$result=mysqli_query($conn, $sql);
$list=mysqli_fetch_assoc($result);
//var_dump($list);
$cid=$list["cid"];
$sql="SELECT pic,pname,price,did,count FROM s_product,s_car_detail WHERE productId=pid AND cartId ='$cid'";
//$sql="SELECT pid,pic,pname,price,did,count FROM s_product,s_car_detail WHERE cartId=(SELECT cid FROM s_car WHERE userId=$uid) AND pid=pid;
$result=mysqli_query($conn, $sql);
$list=mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($list);