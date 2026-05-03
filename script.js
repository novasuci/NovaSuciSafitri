// =============================
// HAMBURGER MENU (NAVIGASI HP)
// =============================
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

hamburger.addEventListener('click', function () {
  // Toggle class 'active' pada tombol dan 'open' pada nav
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// Tutup menu saat salah satu link diklik
document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  });
});


// =============================
// SMOOTH SCROLL KE SECTION
// Ini sudah diatur di CSS (scroll-behavior: smooth)
// Script ini sebagai fallback dan untuk offset header
// =============================
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();

    const headerHeight = document.querySelector('.header').offsetHeight;
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;

    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  });
});


// =============================
// TOMBOL MOTIVASI ACAK
// =============================
const motivasiList = [
  "Belajarlah seolah kamu tidak pernah bisa cukup belajar. — Albert Einstein",
  "Kesuksesan bukan kunci kebahagiaan. Kebahagiaanlah kunci kesuksesan. — Albert Schweitzer",
  "Jangan takut gagal. Takutlah tidak pernah mencoba.",
  "Satu langkah kecil setiap hari akan membawamu ke tujuan besar.",
  "Ilmu yang bermanfaat adalah cahaya yang tidak pernah padam.",
  "Konsistensi mengalahkan bakat yang tidak punya disiplin.",
  "Impianmu tidak akan kadaluarsa. Mulailah hari ini.",
  "Kamu lebih kuat dari yang kamu pikirkan. Teruslah berjalan.",
  "Setiap ahli pernah menjadi pemula. Jangan menyerah.",
  "Bukan tentang seberapa cerdas kamu, tapi seberapa keras kamu berusaha."
];

const btnMotivasi  = document.getElementById('btnMotivasi');
const motivasiBox  = document.getElementById('motivasiBox');

btnMotivasi.addEventListener('click', function () {
  // Ambil kutipan secara acak
  const acak = Math.floor(Math.random() * motivasiList.length);
  motivasiBox.textContent = '"' + motivasiList[acak] + '"';

  // Tampilkan dengan animasi ulang (reset dulu animasi)
  motivasiBox.style.display = 'none';
  // Trigger reflow agar animasi reset
  void motivasiBox.offsetWidth;
  motivasiBox.style.display = 'block';
});


// =============================
// TOMBOL KEMBALI KE ATAS
// =============================
const backToTop = document.getElementById('backToTop');

// Tampilkan tombol saat scroll melebihi 300px
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// Scroll ke paling atas saat diklik
backToTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
