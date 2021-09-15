function searchMovie() {
  $("#movie-list").empty();

  $.ajax({
    url: "http://www.omdbapi.com/",
    type: "get",
    dataType: "json",
    data: {
      apiKey: "edd447f7",
      s: $("#search-input").val(),
    },
    success: function (res) {
      if (res.Response == "True") {
        let movies = res.Search;

        $.each(movies, function (i, data) {
          $("#movie-list").append(
            `
            <div class="col-md-4">
              <div class="card mb-4" style="width: 18rem;">
                <img src="` +
              data.Poster +
              `" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">` +
              data.Title +
              `</h5>
                  <h6 class="card-subtitle mb-5 text-mutedv">` +
              data.Year +
              `</h6>
              <a href="#" class="card-link" id="see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="` +
              data.imdbID +
              `">See detail</a>
                </div>
              </div>
            </div>
          `
          );
        });

        $("#search-input").val("");
      } else {
        $("#movie-list").html(
          `
          <div class="col">
            <h1 class="text-center">` +
            res.Error +
            `</h1>
          </div>
        `
        );
      }
    },
  });
}

$("#search-button").on("click", function () {
  searchMovie();
});

$("#search-input").on("keyup", function (e) {
  if (e.which === 13) {
    searchMovie();
  }
});

$("#movie-list").on("click", "#see-detail", function (i, data) {
  $.ajax({
    url: "http://www.omdbapi.com/",
    type: "get",
    dataType: "json",
    data: {
      apiKey: "edd447f7",
      i: $(this).data("id"),
    },
    success: function (movie) {
      if (movie.Response === "True") {
        $(".modal-body").html(
          `
        <div class="container-fluid"> 
          <div class="row">
            <div class="col-md-4">
              <img src="` +
            movie.Poster +
            `" class="img-fluid">
            </div>

            <div class="col-md-8">
              <ul class="list-group">
                <li class="list-group-item"><h3>` +
            movie.Title +
            `</h3></li>
            <li class="list-group-item"><b>Released: </b>` +
            movie.Released +
            `</li>
            <li class="list-group-item"><b>Genre: </b>` +
            movie.Genre +
            `</li>
            <li class="list-group-item"><b>Writer: </b>` +
            movie.Writer +
            `</li>
            <li class="list-group-item"><b>Actors: </b>` +
            movie.Actors +
            `</li>
            <li class="list-group-item"><b>Plot: </b> <br>` +
            movie.Plot +
            `</li>
              </ul>
            </div>
          </div>
        </div>
        `
        );
      }
    },
  });
});
