<?php 

$products = array(
    "nz" => array("title"=>"甜美女装",des=>"热贱人爱，花见花开",img=>"../images/1.jpg"),
    "bb"=>array("title"=>"奢华绿包",des=>"送女友一个，移送一个准",img=>"../images/2.jpg"),
    "xz" => array("title"=>"键盘拖鞋",des=>"程序员专属",img=>"../images/3.jpg")
);

$name = $_POST["name"];

$aInfo = $products[$name];
echo "|";
echo $aInfo["title"];
echo "|";
echo $aInfo["des"];
echo "|";
echo $aInfo["img"];
?>
