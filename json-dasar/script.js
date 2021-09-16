//Object to JSON using JSON.stringify()
var obj = {
  Nama: "Farhan Rizky",
  Nim: "1197050041",
  Fakultas: "Sains dan Teknologi",
  Jurusan: "Teknik Informatika",
  Angkatan: 2019,
  Hobi: ["Makan", "Minum", "Tidur"],
  Ortu: {
    Ibu: "Elly Malia",
    Ayah: "Wawan Setiawan",
  },
};

console.log(JSON.stringify(obj));

//JSON to Object using JSON.parse()
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let mahasiswa = JSON.parse(this.responseText);

    console.log(mahasiswa);
  }
};

xhr.open("GET", "coba.json", true);
xhr.send();

//JSON to Object using jQuery
$.getJSON("coba.json", function (res) {
  console.log(res);
});
