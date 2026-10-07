const root = document.documentElement;
const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
const themeToggle = document.querySelector('#theme-toggle');
const themeLabel = themeToggle.querySelector('.theme-label');
const langToggle = document.querySelector('#lang-toggle');
const filterButtons = [...document.querySelectorAll('.filter-button')];
const projects = [...document.querySelectorAll('.project')];
const filterStatus = document.querySelector('#filter-status');
const mapNodes = [...document.querySelectorAll('.map-node')];
const mapDetail = document.querySelector('#map-detail');

const translations = {
  id: {
    navImpact: 'Dampak',
    navProjects: 'Proyek',
    navJourney: 'Perjalanan',
    navContact: 'Kontak',
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
    impactTitle: 'Hasil terukur, bukan janji samar.',
    impactIntro: 'Dampak terkuat dari lebih satu dekade membangun dan meningkatkan skala ekosistem hotel tiket.com.',
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
    projectCuan: 'Platform full-stack untuk mengelola akun trading otomatis, pengaturan strategi, operasi VPS, dan pemantauan akun.',
    visitCuan: 'Kunjungi cuanhero.com',
    projectAluthra: 'Game kartu fantasy RPG yang dikembangkan secara independen, mencakup arsitektur game, gameplay, UI, progression, pengelolaan konten, dan integrasi backend.',
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
  const selectedMap = document.querySelector('.map-node.is-active')?.dataset.mapDetail || 'center';
  mapDetail.textContent = mapCopy[language][selectedMap];
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  themeLabel.textContent = language === 'id' ? (nextTheme === 'light' ? 'Terang' : 'Gelap') : (nextTheme === 'light' ? 'Light' : 'Dark');
  themeToggle.setAttribute('aria-label', language === 'id' ? `Ganti ke tema ${nextTheme === 'light' ? 'terang' : 'gelap'}` : `Switch to ${nextTheme} theme`);
}

function setTheme(theme) {
  root.dataset.theme = theme;
  const nextLabel = theme === 'dark' ? 'Light' : 'Dark';
  themeLabel.textContent = language === 'id' ? (nextLabel === 'Light' ? 'Terang' : 'Gelap') : nextLabel;
  themeToggle.setAttribute('aria-label', language === 'id' ? `Ganti ke tema ${nextLabel === 'Light' ? 'terang' : 'gelap'}` : `Switch to ${nextLabel.toLowerCase()} theme`);
  document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#0b0d0c' : '#f2efe7');
  localStorage.setItem('portfolio-theme', theme);
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

themeToggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
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

const mapCopy = {
  en: {
    center: 'Hands-on technical direction from architecture to production.',
    lead: 'Teams of 8-10 engineers with clear standards and practical mentoring.',
    build: 'B2C, B2B, supplier, mobile, Web3, and internal products.',
    scale: 'High-traffic platforms built for millions of users.',
    ai: 'LLM integration, agents, prompting, and workflow automation.'
  },
  id: {
    center: 'Arah teknis hands-on dari arsitektur hingga production.',
    lead: 'Tim berisi 8-10 engineer dengan standar jelas dan mentoring praktis.',
    build: 'Produk B2C, B2B, supplier, mobile, Web3, dan internal.',
    scale: 'Platform high-traffic yang dibangun untuk jutaan pengguna.',
    ai: 'Integrasi LLM, agents, prompting, dan otomasi workflow.'
  }
};

mapNodes.forEach((node) => {
  node.addEventListener('click', () => {
    mapNodes.forEach((item) => {
      const selected = item === node;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    mapDetail.textContent = mapCopy[language][node.dataset.mapDetail];
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

const preferredTheme = localStorage.getItem('portfolio-theme');
if (preferredTheme === 'light' || preferredTheme === 'dark') setTheme(preferredTheme);

body.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.focus();
  }
});
