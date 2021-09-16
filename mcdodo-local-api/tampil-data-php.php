<?php

$data = file_get_contents("resource/menu.json");
$menu = json_decode($data, true);
$menu = $menu["Menu"];

?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
  <title>McDodo</title>
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid ms-5">
      <a class="navbar-brand" href="#">
        <img src="img/logo.png" style="width: 80px;" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">All Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Makanan</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Minuman</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Camilan</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <h1 id="header">All Menu</h1>

    <hr>

    <div class="row">
      <?php foreach ($menu as $row) : ?>
        <div class="col-md-4">
          <div class="card mb-3 mt-3">
            <img src="<?= $row["Gambar"]; ?>" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title"><?= $row["Nama"]; ?></h3>
              <p class="card-text"><?= $row["Deskripsi"]; ?></p>
              <h5 class="card-title">Rp. <?= $row["Harga"]; ?></h5>
              <a href="#" class="btn btn-primary mt-3">Pesan Sekarang</a>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

</html>