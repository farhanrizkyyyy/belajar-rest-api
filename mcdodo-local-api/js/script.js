function showAllMenu() {
  $("#daftar-menu").empty();

  $.getJSON("resource/menu.json", function (data) {
    let menu = data.Menu;

    $.each(menu, function (i, data) {
      $("#daftar-menu").append(
        `
      <div class="col-md-4">
            <div class="card mb-3 mt-3">
              <img src="` +
          data.Gambar +
          `" class="card-img-top" alt="...">
              <div class="card-body">
                <h3 class="card-title">` +
          data.Nama +
          `</h3>
                <p class="card-text">` +
          data.Deskripsi +
          `</p>
                <h5 class="card-title">Rp. ` +
          data.Harga +
          `</h5>
                <a href="#" class="btn btn-primary mt-3">Pesan Sekarang</a>
              </div>
            </div>
          </div>
      `
      );
    });
  });
}

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();

  $("#header").html(kategori);

  if (kategori == "All Menu") {
    showAllMenu();
  } else {
    $.getJSON("resource/menu.json", function (data) {
      let menu = data.Menu;
      let content = "";

      $.each(menu, function (i, data) {
        if (data.Kategori == kategori) {
          content +=
            `<div class="col-md-4">
          <div class="card mb-3 mt-3">
            <img src="` +
            data.Gambar +
            `" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">` +
            data.Nama +
            `</h3>
              <p class="card-text">` +
            data.Deskripsi +
            `</p>
              <h5 class="card-title">Rp. ` +
            data.Harga +
            `</h5>
              <a href="#" class="btn btn-primary mt-3">Pesan Sekarang</a>
            </div>
          </div>
        </div>`;
        }
      });

      $("#daftar-menu").html(content);
    });
  }
});

showAllMenu();
