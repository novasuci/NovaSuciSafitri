// ===================================
// TOMBOL MOTIVASI ACAK
// ===================================

// Daftar kata-kata motivasi
const motivasiList = [
  "\"Belajar bukan tentang menjadi pintar, tapi tentang tidak menyerah.\" – Anonim",
  "\"Kegagalan adalah guru terbaik yang pernah ada.\" – Thomas Edison",
  "\"Satu langkah kecil hari ini lebih baik dari tidak melangkah sama sekali.\"",
  "\"Ilmu itu cahaya. Terus nyalakan, jangan biarkan padam.\"",
  "\"Kamu tidak perlu sempurna, kamu hanya perlu terus mencoba.\"",
  "\"Kesulitan hari ini adalah kekuatan kamu di masa depan.\"",
  "\"Kode pertamamu tidak harus bagus, yang penting jalan dulu!\" 😄",
  "\"Belajar AI bukan soal robot, tapi soal memahami cara kerja dunia.\"",
];

const btnMotivasi = document.getElementById('btnMotivasi');
const motivasiBox = document.getElementById('motivasiBox');

btnMotivasi.addEventListener('click', function () {
  // Pilih motivasi secara acak
  const acak = Math.floor(Math.random() * motivasiList.length);
  motivasiBox.textContent = motivasiList[acak];

  // Tampilkan box dengan animasi ulang
  motivasiBox.style.display = 'none';
  // Paksa reflow agar animasi bisa diulang
  void motivasiBox.offsetWidth;
  motivasiBox.style.display = 'block';
});


// ===================================
// MENU HAMBURGER (untuk HP)
// ===================================

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
  // Toggle class 'open' untuk menampilkan/menyembunyikan menu
  navLinks.classList.toggle('open');
});

// Tutup menu saat salah satu link diklik
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
  });
});


// ===================================
// TOMBOL KEMBALI KE ATAS
// ===================================

const backToTop = document.getElementById('backToTop');

// Tampilkan tombol saat user scroll ke bawah >300px
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

// Scroll ke atas saat tombol diklik
backToTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ===================================
// HIGHLIGHT LINK NAVIGASI AKTIF
// ===================================

// Ambil semua section dan link nav
const sections  = document.querySelectorAll('section[id]');
const navItems  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
  let posisiSekarang = window.scrollY + 80; // offset karena nav sticky

  sections.forEach(function (sec) {
    const atas   = sec.offsetTop;
    const tinggi = sec.offsetHeight;
    const id     = sec.getAttribute('id');

    if (posisiSekarang >= atas && posisiSekarang < atas + tinggi) {
      // Hapus aktif dari semua link dulu
      navItems.forEach(a => a.classList.remove('active'));
      // Kasih aktif ke link yang sesuai
      const linkAktif = document.querySelector('.nav-links a[href="#' + id + '"]');
      if (linkAktif) linkAktif.classList.add('active');
    }
  });
});
