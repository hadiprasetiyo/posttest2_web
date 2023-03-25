
const form_data = JSON.parse(sessionStorage.getItem('form_data'));

for (let i = 0; i < form_data.length; i++) {
    const nama = form_data[i].nama;
    const email = form_data[i].email;
    const alamat = form_data[i].alamat;
    const jenjang = form_data[i].jenjang;
    const jenis_kelamin = form_data[i].jenis_kelamin;

    inputNama.innerHTML   ="Nama    : " + nama;
    inputEmail.innerHTML  ="Email   : " + email;
    inputAlamat.innerHTML ="Alamat : " + alamat;
    inputJenjang.innerHTML ="Jenjang  : " + jenjang;
    inputGender.innerHTML ="Jenis Kelamin : " + jenis_kelamin;
}
