<?php

// $mahasiswa = [
//   "Nama" => "Farhan Rizky Fauzi Setiawan",
//   "Nim" => "1197050041",
//   "Jurusan" => "Teknik Informatika"
// ];

// $data = json_encode($mahasiswa);

$connect = new PDO("mysql:host=localhost; dbname=e-ticket", "root", "");

$db = $connect->prepare("SELECT * FROM orders");
$db->execute();

$orders = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($orders);

echo $data;
