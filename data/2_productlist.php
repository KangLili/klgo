<?php
    header('Content-Type: application/json');
    @$pno = $_REQUEST['pageNum'];
    if($pno===null){
    	$pno = 1;
    }else {
    	$pno = intval($pno);
    }

    require('1_init.php');

    $output = [
    	'recordCount'=>0,
    	'pageSize'=>12,
    	'pageCount'=>0,
    	'pageNum'=>$pno,
    	'data'=>null
    ];
    $sql = "SELECT COUNT(*) FROM s_product";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_row($result);
    $output['recordCount'] = intval($row[0]);

    $output['pageCount'] = ceil( $output['recordCount'] / $output['pageSize'] );

    $start = ($output['pageNum']-1)*$output['pageSize'];
    $count = $output['pageSize'];
    $sql = "SELECT * FROM s_product LIMIT $start,$count";
    $result = mysqli_query($conn, $sql);
    $output['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);

    echo json_encode($output);
