function generateShiba() {
  $("content").empty();

  $.ajax({
    url: "http://shibe.online/api/shibes",
    type: "get",
    dataType: "json",
    data: {
      count: 1,
    },
    success: function (shiba) {
      $("#content").html(
        `
        <img src="` +
          shiba +
          `" class="img-fluid">
      `
      );
    },
  });
}

$("#button-generate").on("click", function () {
  generateShiba();
});
