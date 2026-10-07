const root = document.documentElement;
const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
const langToggle = document.querySelector('#lang-toggle');
const filterButtons = [...document.querySelectorAll('.filter-button')];
const projects = [...document.querySelectorAll('.project')];
const filterStatus = document.querySelector('#filter-status');

const translations = {
  id: {
    navImpact: 'Tentang',
    navCapabilities: 'Keahlian',
    navProjects: 'Karya',
    navJourney: 'Perjalanan',
    navContact: 'Kontak',
    headerCta: 'Mari bicara',
    heroHello: 'Halo, saya Deni.',
    heroLead: 'Technical Lead',
    heroEngineer: 'Full-Stack Engineer.',
    portraitAlt: 'Deni Setyawan berdiri dan tersenyum',
    proofYears: 'tahun membangun software',
    proofTeam: 'engineer yang dipimpin',
    role: 'Technical Lead / Full-Stack Engineer / AI Engineer',
    heroTitle: 'Saya membangun sistem yang tetap andal saat risikonya nyata.',
    heroSummary: 'Selama lebih dari 15 tahun, saya mengubah kebutuhan produk yang rumit menjadi platform andal, standar engineering yang praktis, dan tim yang mampu mengirimkan hasil dengan percaya diri.',
    seeWork: 'Lihat karya pilihan',
    startConversation: 'Mulai percakapan',
    mapOwner: 'pemilik sistem',
    mapLead: 'Pimpin',
    mapTeams: 'tim',
    mapBuild: 'Bangun',
    mapProducts: 'produk',
    mapScale: 'Skalakan',
    mapPlatforms: 'platform',
    mapWorkflows: 'alur kerja',
    years: '15+ tahun di software engineering',
    impactTitle: 'Saya tetap dekat dengan kode, tim, dan hasil akhirnya.',
    impactIntro: 'Pekerjaan saya mencakup arsitektur, engineering langsung, mentoring, dan delivery untuk produk berskala besar.',
    impactTeam: 'engineer frontend dan backend yang dipimpin dalam delivery, arsitektur, dan mentoring',
    impactDefects: 'penurunan defect tahunan setelah penguatan review, testing, dan praktik engineering',
    impactVelocity: 'peningkatan kecepatan pengembangan melalui sistem reusable dan standar yang lebih jelas',
    impactTiket: 'membangun platform hotel B2C, B2B, supplier, dan internal di tiket.com',
    projectsTitle: 'Produk yang dibentuk dari berbagai jenis kompleksitas.',
    filterAll: 'Semua',
    filterPlatforms: 'Platform',
    tiketAlt: 'Tampilan desktop platform pencarian dan pemesanan hotel tiket.com',
    tiketCaption: 'Pengalaman pencarian dan pemesanan hotel di platform tiket.com.',
    visitTiket: 'Kunjungi tiket.com/hotel',
    projectTiket: 'Sistem inti booking, partner, supplier, dan internal yang melayani jutaan pengguna. Pekerjaan mencakup arsitektur, modernisasi, performa, kualitas kode, dan kepemimpinan delivery.',
    tiketBookingDesc: 'Pengalaman pencarian dan pemesanan hotel untuk pelanggan, mulai dari pencarian destinasi dan pemilihan properti hingga pemilihan kamar dan reservasi.',
    tiketDashboardDesc: 'Extranet untuk mitra akomodasi guna mengelola reservasi, konten properti dan kamar, ketersediaan, harga, promosi, pembayaran, serta akses admin.',
    tiketHelpDesc: 'Basis pengetahuan mandiri yang membantu mitra akomodasi memahami pendaftaran, pengaturan akun, detail properti, harga, pemesanan, dan promosi.',
    tixAlt: 'Halaman tiket.com Extranet untuk mitra akomodasi',
    tixCaption: 'Pintu masuk pendaftaran dan pengelolaan akomodasi bagi mitra tiket.com Extranet.',
    tixHelpAlt: 'Halaman utama tiket.com Property Help Center',
    tixHelpCaption: 'Panduan dan artikel operasional yang dapat dicari oleh mitra akomodasi.',
    cuanAlt: 'Platform trading otomatis CuanHero ditampilkan pada desktop dan mobile',
    cuanCaption: 'Pengalaman produk CuanHero yang responsif pada desktop dan mobile.',
    projectCuan: 'Platform full-stack untuk mengelola akun trading otomatis, pengaturan strategi, operasi VPS, dan pemantauan akun.',
    visitCuan: 'Kunjungi cuanhero.com',
    aluthraAlt: 'Layar beranda dan toko game kartu fantasy RPG ALUTHRA pada perangkat mobile',
    aluthraCaption: 'Antarmuka beranda dan toko ALUTHRA untuk pengalaman fantasy RPG di perangkat mobile.',
    projectAluthra: 'Game kartu fantasy RPG yang dikembangkan secara independen, mencakup arsitektur game, gameplay, UI, progression, pengelolaan konten, dan integrasi backend.',
    nikaAlt: 'Dashboard dan antarmuka point-of-sale Nika-POS ditampilkan pada desktop dan tablet',
    nikaCaption: 'Dashboard dan alur penjualan Nika-POS pada desktop dan tablet.',
    projectNika: 'Aplikasi point-of-sale mobile untuk operasi retail harian, termasuk transaksi penjualan dan pencetakan struk melalui Bluetooth.',
    journeyTitle: 'Karier yang dibangun dengan tetap dekat pada pekerjaan teknis.',
    journeyIntro: 'Peran leadership tidak menggantikan engineering. Peran itu memperluas tanggung jawab di sekitarnya.',
    timelineTiket: 'Memimpin engineer frontend dan backend di seluruh ekosistem hotel. Menentukan arah teknis, memodernisasi aplikasi lama, meningkatkan kualitas engineering, serta berkolaborasi dengan tim Product, Design, QA, Backend, dan bisnis.',
    timelineGoat: 'Membangun platform Web3 NFT dengan konektivitas wallet, metadata, transaksi blockchain, serta integrasi frontend dan backend.',
    timelineOutpost: 'Memimpin tim kecil yang mengerjakan aplikasi web responsif dan mengoordinasikan implementasi teknis untuk berbagai klien.',
    timelineEarly: 'Membangun game browser, aplikasi web, dan website klien sambil menangani gameplay, frontend, backend, database, performa, dan dukungan teknis.',
    details: 'Detail',
    capabilitiesTitle: 'Stack luas. Pusat keahlian yang jelas.',
    capabilitiesIntro: 'Perangkat berubah. Fokus pekerjaan tetap pada arsitektur, delivery yang andal, hasil produk, dan pertumbuhan engineering.',
    contactKicker: 'Punya sistem kompleks, tim yang berkembang, atau produk yang membutuhkan arah teknis lebih kuat?',
    contactTitle: 'Mari bicara tentang masalah engineering yang sebenarnya.',
    backTop: 'Kembali ke atas'
  }
};

const english = Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map((node) => [node.dataset.i18n, node.textContent]));
const englishAlt = Object.fromEntries([...document.querySelectorAll('[data-i18n-alt]')].map((node) => [node.dataset.i18nAlt, node.getAttribute('alt')]));
let language = 'en';

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = language === 'id' ? translations.id[node.dataset.i18n] : english[node.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((node) => {
    node.setAttribute('alt', language === 'id' ? translations.id[node.dataset.i18nAlt] : englishAlt[node.dataset.i18nAlt]);
  });
  root.lang = language;
  langToggle.textContent = language === 'en' ? 'ID' : 'EN';
  langToggle.setAttribute('aria-label', language === 'en' ? 'Switch language to Indonesian' : 'Ganti bahasa ke Inggris');
  updateDynamicLabels();
}

function updateDynamicLabels() {
  const visible = projects.filter((project) => !project.hidden).length;
  filterStatus.textContent = language === 'id' ? `Menampilkan ${visible} proyek.` : `Showing ${visible} project${visible === 1 ? '' : 's'}.`;
}

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});

nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
});

langToggle.addEventListener('click', () => setLanguage(language === 'en' ? 'id' : 'en'));

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let visible = 0;
    projects.forEach((project) => {
      const match = filter === 'all' || project.dataset.category === filter;
      project.hidden = !match;
      if (match) visible += 1;
    });
    filterStatus.textContent = language === 'id' ? `Menampilkan ${visible} proyek.` : `Showing ${visible} project${visible === 1 ? '' : 's'}.`;
  });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.primary-nav a').forEach((link) => {
      if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-35% 0px -55% 0px' });
document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));

body.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.focus();
  }
});
