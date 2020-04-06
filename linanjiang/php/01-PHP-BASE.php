<?php
$num = 10;

//注意点： 后端的代码不能直接运行， 只能放到服务器对应的文件夹下，通过服务器运行
//如何通过服务器运行： 通过ip地址找到服务器对应的文件夹， 然后再找到对应的文件夹运行
echo $num;

$arr = [1,2,3];
print_r($arr);

$dict = array("name"=>"lnj", "age"=>33);
print_r($dict);
echo "<br>";
echo $dict["name"]; //lnj
?>