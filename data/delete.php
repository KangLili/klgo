<?php
header('Content-Type: application/json');

@$did = $_REQUEST['did'] or die('{"code":-2,"msg":"购买详情记录的编号不能为空"}');

require('1_init.php');

$sql = "DELETE FROM s_car_detail WHERE did=$did";
$result = mysqli_query($conn, $sql);


echo '{"code":1, "msg":"删除成功"}';