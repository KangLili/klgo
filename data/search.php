<?php
 header('Content-Type:text/html;charset=utf-8');
 $kw=$_REQUEST['kw'];
 require('1_init.php');
 $sql="SELECT * FROM s_product WHERE pname LIKE '%$kw%'";
 $result=mysqli_query($conn,$sql);
 $html="";
 while(true){
  $row=mysqli_fetch_assoc($result);
  if($row==NULL){
    break;
  }
  $html .= "<li>$row[pname]</li>";

 }
 echo $html;
