<?php

// echo 666;
// $name = $_GET['name'];
// $age = $_GET['age'];
// $arr = array("name"=>$name, "age"=>$age);
// echo json_encode($arr);

// $rws_post = $GLOBALS["HTTP_RAW_POST_DATA"];
// $mypost = json_decode($rws_post,true);
// $teacher = $_POST['teacher'] ;
// $age = $_POST['age'];
// $arr = array("name"=>$teacher, "age"=>$age);
// $data = json_encode($arr,true);

$rws_post = $GLOBALS["HTTP_RAW_POST_DATA"];
$mypost = json_decode($rws_post);
$teacher = (string)$mypost->teacher;
$age = (string)$mypost->age;
$arr = array("name"=>$teacher, "age"=>$age);
$data = json_encode($arr);
echo $data;
?>