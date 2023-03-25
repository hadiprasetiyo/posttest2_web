// SAVE DATA DARI FORM
const submit = document.getElementById("kirim");
submit.onclick = Save_data;

function Save_data(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const alamat = document.getElementById("alamat").value;
  const jenjang = document.getElementById("jenjang").value;
  const jenis_kelamin = document.getElementById("jenis_kelamin").value;

  // mengambil data users yang sudah ada di local storage
  var form_data = JSON.parse(sessionStorage.getItem("form_data")) || [];

  // menambahkan data users baru ke dalam array
  form_data.push({
    nama: nama,
    email: email,
    alamat: alamat,
    jenjang: jenjang,
    jenis_kelamin: jenis_kelamin,
  });

  // menyimpan data users ke dalam local storage
  sessionStorage.setItem("form_data", JSON.stringify(form_data));
  alert("Terima Kasih Telah Mendaftar!");
  window.location.href = "biodata.html";
}