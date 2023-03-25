// REGISTER
const register = document.getElementById("submit");
register.onclick = registerr;

function registerr(e) {
  e.preventDefault();
  var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

  const input_username = document.getElementById("input_username").value;
  const input_password = document.getElementById("input_password").value;

  if (input_username === "" || input_password === "") {
    alert("Semua field harus diisi");
    return false;
  }

    // mengambil data users yang sudah ada di local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // menambahkan data users baru ke dalam array
    users.push({ nama: input_username, password: input_password });

    // menyimpan data users ke dalam local storage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Selamat Anda Telah Berhasil Daftar");
    window.location.href = "index.html";
}