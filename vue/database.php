<?php
$name = $_POST['name'];

$host = '127.0.0.1';

$user = 'root';

$password = '';

$dbName = 'lulu';

$conn = new PDO("mysql:host=$host;dbname=$dbName", $user, $password);

$sql = "INSERT INTO logo (name)
    VALUES ('$name')";
// 使用 exec() ，没有结果返回
$conn->exec($sql);
echo "新记录插入成功";
$conn = null;
?>
