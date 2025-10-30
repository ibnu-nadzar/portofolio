// Pop-up saat tombol ditekan
document.getElementById("tombol").addEventListener("click", function() {
    alert("Halo! Kamu baru saja menekan tombol.");
});

// Validasi form sederhana
document.getElementById("formKontak").addEventListener("submit", function(e) {
    let nama = document.getElementById("nama").value;
    let pesan = document.getElementById("pesan").value;

    if (nama === "" || pesan === "") {
        alert("Form tidak boleh kosong!");
        e.preventDefault(); // hentikan pengiriman form
    } else {
        alert("Pesan berhasil dikirim!");
    }
});
