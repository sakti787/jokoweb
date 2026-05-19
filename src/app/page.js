'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.toggleFaq = (el) => {
      const item = el.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    };
    window.sendPrompt = (msg) => { console.log('sendPrompt:', msg); };
  }, []);

  return (
    <>


      {/*  NAV  */}
      <nav>
        <div className="nav-logo">
          <div className="logo-icon">W</div>
          Jokoweb
        </div>
        <div className="nav-links">
          <a href="#value">Layanan</a>
          <a href="#portfolio">Portofolio</a>
          <a href="#paket">Harga</a>
          <a href="#faq">FAQ</a>
          <a href="#kontak">Kontak</a>
        </div>
        <div className="nav-ctas">
          <button className="btn-outline" onClick={(e) => { document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' }) }}>Lihat Portofolio</button>
          <button className="btn-solid" onClick={(e) => { document.getElementById('kontak').scrollIntoView({ behavior: 'smooth' }) }}>Konsultasi Gratis</button>
        </div>
      </nav>

      {/*  HERO  */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow fu"><div className="eyebrow-dot"></div> #1 Jasa Website UMKM Semarang</div>
          <h1 className="fu d1">Buat Website <span className="hl">Profesional</span> untuk Bisnis Anda — Cepat dan Modern</h1>
          <p className="hero-sub fu d2">Website yang tidak hanya indah dilihat, tapi benar-benar mendukung penjualan dan perkembangan bisnis Anda secara online.</p>
          <div className="hero-ctas fu d3">
            <button className="btn-hero-primary" onClick={(e) => { document.getElementById('kontak').scrollIntoView({ behavior: 'smooth' }) }}>
              🎯 Konsultasi Gratis Sekarang
            </button>
            <button className="btn-hero-secondary" onClick={(e) => { document.getElementById('kontak').scrollIntoView({ behavior: 'smooth' }) }}>
              🚀 Buat Website Hari Ini
            </button>
            <button className="btn-hero-wa">
              💬 WhatsApp Kami
            </button>
          </div>
          <div className="hero-trust fu d4">
            <div className="trust-avatars">
              <span>AR</span><span>BS</span><span>CW</span>
            </div>
            <p className="trust-text"><strong>50+ bisnis</strong> sudah online bersama kami</p>
          </div>
        </div>

        <div className="hero-right fu d2">
          <div className="device-wrap">
            <div className="fb-developer">
              <div className="fb-dev-avatar">👨‍💻</div>
              <div>
                <div className="fb-dev-num">50+</div>
                <div className="fb-dev-label">Website dibuat</div>
              </div>
            </div>

            {/*  LAPTOP  */}
            <div className="device-laptop">
              <div className="laptop-screen">
                <div className="ls-nav">
                  <div className="ls-logo"></div>
                  <div className="ls-links"><div className="ls-link"></div><div className="ls-link"></div><div className="ls-link"></div></div>
                </div>
                <div className="ls-hero">
                  <div className="ls-text-block">
                    <div className="ls-h1"></div>
                    <div className="ls-h2"></div>
                    <div className="ls-p"></div>
                    <div className="ls-p2"></div>
                    <div className="ls-btns">
                      <div className="ls-btn" style={{ "width": "70px", "background": "#fff", "opacity": ".9" }}></div>
                      <div className="ls-btn" style={{ "width": "60px", "background": "#25D366", "opacity": ".9" }}></div>
                    </div>
                  </div>
                  <div className="ls-img"></div>
                </div>
                <div className="ls-section">
                  <div className="ls-sec-title"></div>
                  <div className="ls-cards">
                    <div className="ls-card"><div className="ls-ci"></div><div className="ls-cl" style={{ "width": "70%" }}></div><div className="ls-cl" style={{ "width": "90%" }}></div></div>
                    <div className="ls-card feat"><div className="ls-ci"></div><div className="ls-cl" style={{ "width": "80%" }}></div><div className="ls-cl" style={{ "width": "95%" }}></div></div>
                    <div className="ls-card"><div className="ls-ci"></div><div className="ls-cl" style={{ "width": "65%" }}></div><div className="ls-cl" style={{ "width": "85%" }}></div></div>
                  </div>
                </div>
              </div>
              <div className="laptop-base"><div className="laptop-notch"></div></div>
            </div>

            {/*  TABLET  */}
            <div className="device-tablet">
              <div className="tablet-screen">
                <div className="ts-nav">
                  <div className="ts-logo"></div>
                  <div className="ts-links"><div className="ts-link"></div><div className="ts-link"></div></div>
                </div>
                <div className="ts-hero">
                  <div className="ts-h"></div>
                  <div className="ts-p"></div>
                  <div className="ts-btn"></div>
                </div>
                <div className="ts-body">
                  <div className="ts-card"><div className="ts-cl" style={{ "width": "80%" }}></div><div className="ts-cl" style={{ "width": "60%" }}></div></div>
                  <div className="ts-card"><div className="ts-cl" style={{ "width": "70%" }}></div><div className="ts-cl" style={{ "width": "90%" }}></div></div>
                  <div className="ts-card"><div className="ts-cl" style={{ "width": "85%" }}></div><div className="ts-cl" style={{ "width": "65%" }}></div></div>
                  <div className="ts-card"><div className="ts-cl" style={{ "width": "75%" }}></div><div className="ts-cl" style={{ "width": "80%" }}></div></div>
                </div>
              </div>
            </div>

            {/*  PHONE  */}
            <div className="device-phone">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="ps-header"><div className="ps-logo"></div></div>
                <div className="ps-hero-text">
                  <div className="ps-h"></div>
                  <div className="ps-p"></div>
                  <div className="ps-p" style={{ "width": "60%" }}></div>
                </div>
                <div className="ps-btn"></div>
                <div className="ps-cards">
                  <div className="ps-card"><div className="ps-cl" style={{ "width": "80%" }}></div><div className="ps-cl" style={{ "width": "60%" }}></div></div>
                  <div className="ps-card"><div className="ps-cl" style={{ "width": "70%" }}></div><div className="ps-cl" style={{ "width": "85%" }}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  STATS  */}
      <div className="stats">
        <div><div className="stat-num">50+</div><div className="stat-label">Website selesai dibuat</div></div>
        <div><div className="stat-num">7</div><div className="stat-label">Hari rata-rata pengerjaan</div></div>
        <div><div className="stat-num">100%</div><div className="stat-label">Klien puas & rekomen</div></div>
        <div><div className="stat-num">3th</div><div className="stat-label">Pengalaman di bidang web</div></div>
      </div>

      {/*  VALUE PROPOSITION  */}
      <section className="value" id="value">
        <div className="center">
          <div className="tag">Kenapa pilih kami</div>
          <h2 className="sec-title">Semua yang bisnis Anda butuhkan</h2>
          <p className="sec-desc">Setiap website yang kami buat dirancang untuk menghadirkan nilai nyata bagi bisnis Anda.</p>
        </div>
        <div className="value-grid">
          <div className="val-card">
            <div className="val-icon">🎨</div>
            <div className="val-title">Desain custom & modern</div>
            <p className="val-desc">Bukan template generik. Desain disesuaikan dengan karakter dan target pasar bisnis Anda.</p>
          </div>
          <div className="val-card">
            <div className="val-icon">📱</div>
            <div className="val-title">Mobile-friendly & responsive</div>
            <p className="val-desc">Tampil sempurna di semua perangkat — smartphone, tablet, maupun laptop.</p>
          </div>
          <div className="val-card">
            <div className="val-icon">🔍</div>
            <div className="val-title">Optimasi SEO</div>
            <p className="val-desc">Dioptimasi agar mudah ditemukan di Google dan mesin pencari lainnya.</p>
          </div>
          <div className="val-card">
            <div className="val-icon">⚡</div>
            <div className="val-title">Performa cepat & aman</div>
            <p className="val-desc">Loading cepat dengan SSL gratis untuk keamanan pengunjung website Anda.</p>
          </div>
          <div className="val-card">
            <div className="val-icon">✏️</div>
            <div className="val-title">Revisi sesuai paket</div>
            <p className="val-desc">Garansi revisi sampai Anda puas dengan hasil akhir website yang dibuat.</p>
          </div>
          <div className="val-card">
            <div className="val-icon">🛠️</div>
            <div className="val-title">Maintenance after sales</div>
            <p className="val-desc">Ada yang merawat setelah launch. Support teknis 30 hari gratis setelah website live.</p>
          </div>
          <div className="val-card">
            <div className="val-icon">🌐</div>
            <div className="val-title">Domain & hosting included</div>
            <p className="val-desc">Semua paket sudah termasuk domain .com dan hosting 1 tahun. Tidak ada biaya tersembunyi.</p>
          </div>
          <div className="val-card">
            <div className="val-icon">🤝</div>
            <div className="val-title">Custom sesuai kebutuhan</div>
            <p className="val-desc">Konsultasi dulu, kami bantu rekomendasikan solusi yang paling tepat untuk bisnis Anda.</p>
          </div>
        </div>
      </section>

      {/*  PORTFOLIO  */}
      <section className="portfolio" id="portfolio">
        <div className="center">
          <div className="tag">Portofolio</div>
          <h2 className="sec-title">Hasil kerja kami</h2>
          <p className="sec-desc">Beberapa website yang sudah kami bangun untuk klien dari berbagai industri.</p>
        </div>
        <div className="portfolio-grid">
          <div className="port-card" onClick={(e) => { sendPrompt('Ceritakan lebih detail tentang contoh portofolio jasa website untuk toko batik') }}>
            <div className="port-img" style={{ "background": "linear-gradient(135deg,#dbeafe,#bfdbfe)" }}>
              <div className="port-browser">
                <div className="pb-bar">
                  <div className="pb-dot" style={{ "background": "#fc5f57" }}></div>
                  <div className="pb-dot" style={{ "background": "#fdbc2c" }}></div>
                  <div className="pb-dot" style={{ "background": "#33c948" }}></div>
                  <div className="pb-url">tokobatikjawa.com</div>
                </div>
                <div className="pb-content">
                  <div className="pb-hero" style={{ "background": "linear-gradient(135deg,#1240b0,#0ea5e9)" }}></div>
                  <div className="pb-row"><div className="pb-card"></div><div className="pb-card"></div><div className="pb-card"></div></div>
                </div>
              </div>
            </div>
            <div className="port-info">
              <div className="port-tag">Toko Online</div>
              <div className="port-name">Batik Jawa Store</div>
              <p className="port-desc">E-commerce batik dengan katalog produk, keranjang belanja, dan integrasi pembayaran.</p>
            </div>
          </div>
          <div className="port-card" onClick={(e) => { sendPrompt('Ceritakan lebih detail tentang contoh portofolio jasa website untuk klinik') }}>
            <div className="port-img" style={{ "background": "linear-gradient(135deg,#dcfce7,#bbf7d0)" }}>
              <div className="port-browser">
                <div className="pb-bar">
                  <div className="pb-dot" style={{ "background": "#fc5f57" }}></div>
                  <div className="pb-dot" style={{ "background": "#fdbc2c" }}></div>
                  <div className="pb-dot" style={{ "background": "#33c948" }}></div>
                  <div className="pb-url">kliniksehatplus.com</div>
                </div>
                <div className="pb-content">
                  <div className="pb-hero" style={{ "background": "linear-gradient(135deg,#065f46,#059669)" }}></div>
                  <div className="pb-row"><div className="pb-card"></div><div className="pb-card"></div><div className="pb-card"></div></div>
                </div>
              </div>
            </div>
            <div className="port-info">
              <div className="port-tag">Company Profile</div>
              <div className="port-name">Klinik Sehat Plus</div>
              <p className="port-desc">Website profil klinik dengan jadwal dokter, layanan, dan sistem pendaftaran online.</p>
            </div>
          </div>
          <div className="port-card" onClick={(e) => { sendPrompt('Ceritakan lebih detail tentang contoh portofolio jasa website untuk katering') }}>
            <div className="port-img" style={{ "background": "linear-gradient(135deg,#fef3c7,#fde68a)" }}>
              <div className="port-browser">
                <div className="pb-bar">
                  <div className="pb-dot" style={{ "background": "#fc5f57" }}></div>
                  <div className="pb-dot" style={{ "background": "#fdbc2c" }}></div>
                  <div className="pb-dot" style={{ "background": "#33c948" }}></div>
                  <div className="pb-url">kateringsarirasa.com</div>
                </div>
                <div className="pb-content">
                  <div className="pb-hero" style={{ "background": "linear-gradient(135deg,#92400e,#f59e0b)" }}></div>
                  <div className="pb-row"><div className="pb-card"></div><div className="pb-card"></div><div className="pb-card"></div></div>
                </div>
              </div>
            </div>
            <div className="port-info">
              <div className="port-tag">Landing Page</div>
              <div className="port-name">Katering Sari Rasa</div>
              <p className="port-desc">Landing page katering dengan menu, testimoni, dan form pemesanan langsung via WhatsApp.</p>
            </div>
          </div>
        </div>
        <div style={{ "textAlign": "center", "marginTop": "32px" }}>
          <button className="btn-outline" onClick={(e) => { sendPrompt('Tampilkan lebih banyak portofolio website yang sudah dibuat') }}>Lihat Semua Portofolio →</button>
        </div>
      </section>

      {/*  PAKET  */}
      <section className="paket" id="paket">
        <div className="center">
          <div className="tag">Paket harga</div>
          <h2 className="sec-title">Pilih paket yang sesuai</h2>
          <p className="sec-desc">Semua paket sudah termasuk domain .com, hosting 1 tahun, SSL gratis, dan garansi revisi.</p>
        </div>
        <div className="paket-grid">
          <div className="paket-card">
            <div className="pk-icon">🚀</div>
            <div className="pk-name">Basic</div>
            <div className="pk-price">Rp 1.200.000</div>
            <p className="pk-desc">Cocok untuk bisnis yang baru mulai go-online dengan cepat dan terjangkau.</p>
            <div className="pk-features">
              <div className="pk-feat"><div className="pkf-check">✓</div> Landing page 1 halaman</div>
              <div className="pk-feat"><div className="pkf-check">✓</div> Domain .com + hosting 1 tahun</div>
              <div className="pk-feat"><div className="pkf-check">✓</div> Mobile responsive</div>
              <div className="pk-feat"><div className="pkf-check">✓</div> WhatsApp CTA button</div>
              <div className="pk-feat"><div className="pkf-check">✓</div> Revisi 2x</div>
            </div>
            <button className="btn-paket" onClick={(e) => { document.getElementById('kontak').scrollIntoView({ behavior: 'smooth' }) }}>Pesan Sekarang</button>
          </div>

          <div className="paket-card featured">
            <div className="ribbon">TERPOPULER</div>
            <div className="pk-icon">⭐</div>
            <div className="pk-name">Standard</div>
            <div className="pk-price">Rp 3.500.000</div>
            <p className="pk-desc">Paket lengkap untuk UMKM yang ingin tampil profesional dan dipercaya pelanggan.</p>
            <div className="pk-features">
              <div className="pk-feat"><div className="pkf-check">✓</div> Company profile 5–7 halaman</div>
              <div className="pk-feat"><div className="pkf-check">✓</div> Domain + hosting 1 tahun</div>
              <div className="pk-feat"><div className="pkf-check">✓</div> SEO on-page optimization</div>
              <div className="pk-feat"><div className="pkf-check">✓</div> Google Maps + form kontak</div>
              <div className="pk-feat"><div className="pkf-check">✓</div> Revisi 3x + support 30 hari</div>
            </div>
            <button className="btn-paket" onClick={(e) => { document.getElementById('kontak').scrollIntoView({ behavior: 'smooth' }) }}>Pesan Sekarang</button>
          </div>

          <div className="paket-card">
            <div className="pk-icon">🛒</div>
            <div className="pk-name">Premium</div>
            <div className="pk-price">Rp 7.500.000</div>
            <p className="pk-desc">Toko online lengkap dengan sistem pembayaran dan manajemen produk & pesanan.</p>
            <div className="pk-features">
              <div className="pk-feat"><div className="pkf-check">✓</div> Toko online + katalog produk</div>
              <div className="pk-feat"><div className="pkf-check">✓</div> Payment gateway (Midtrans)</div>
              <div className="pk-feat"><div className="pkf-check">✓</div> Dashboard admin</div>
              <div className="pk-feat"><div className="pkf-check">✓</div> Revisi 5x + pelatihan admin</div>
              <div className="pk-feat"><div className="pkf-check">✓</div> Support 60 hari setelah launch</div>
            </div>
            <button className="btn-paket" onClick={(e) => { document.getElementById('kontak').scrollIntoView({ behavior: 'smooth' }) }}>Pesan Sekarang</button>
          </div>
        </div>
      </section>

      {/*  PROSES  */}
      <section className="proses" id="proses">
        <div className="center">
          <div className="tag">Cara kerja</div>
          <h2 className="sec-title">Dari konsultasi hingga website live</h2>
        </div>
        <div className="proses-steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-name">Konsultasi Gratis</div>
            <p className="step-desc">Diskusi kebutuhan, target pasar, dan referensi desain Anda — tanpa biaya, tanpa komitmen.</p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-name">Desain & Review</div>
            <p className="step-desc">Kami buat mockup desain untuk disetujui sebelum masuk ke tahap pengembangan penuh.</p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-name">Pengembangan</div>
            <p className="step-desc">Website dibangun, konten diisi, SEO dioptimasi, dan diuji di semua perangkat.</p>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-name">Launch & Support 🎉</div>
            <p className="step-desc">Website live, training penggunaan, dan after-sales support sesuai paket yang dipilih.</p>
          </div>
        </div>
      </section>

      {/*  TESTIMONI  */}
      <section className="testimoni" id="testimoni">
        <div className="center">
          <div className="tag">Testimoni</div>
          <h2 className="sec-title">Kata mereka yang sudah merasakan</h2>
        </div>
        <div className="testi-grid">
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <div className="testi-text"><span>Prosesnya cepat dan hasilnya jauh di atas ekspektasi. Sekarang pelanggan bisa nemuin toko saya di Google dengan mudah!</span></div>
            <div className="testi-author">
              <div className="testi-av" style={{ "background": "#1a4fd6" }}>AR</div>
              <div><div className="testi-name">Andi Raharjo</div><div className="testi-biz">Toko Batik Andi · Semarang</div></div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <div className="testi-text"><span>Sudah 3 bulan pakai website dari Jokoweb, orderan online naik sekitar 40%. Investasi yang sangat worth it!</span></div>
            <div className="testi-author">
              <div className="testi-av" style={{ "background": "#0ea5e9" }}>BS</div>
              <div><div className="testi-name">Bu Sari</div><div className="testi-biz">Katering Sari Rasa · Ungaran</div></div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <div className="testi-text"><span>Awalnya ragu karena baru pertama buat website. Ternyata prosesnya mudah dan hasilnya profesional banget!</span></div>
            <div className="testi-author">
              <div className="testi-av" style={{ "background": "#8b5cf6" }}>CW</div>
              <div><div className="testi-name">Clara Wulandari</div><div className="testi-biz">Salon Cantika · Tembalang</div></div>
            </div>
          </div>
        </div>
      </section>

      {/*  FAQ  */}
      <section className="faq" id="faq">
        <div className="center">
          <div className="tag">FAQ</div>
          <h2 className="sec-title">Pertanyaan yang sering ditanyakan</h2>
        </div>
        <div className="faq-list" id="faqList">
          <div className="faq-item open">
            <div className="faq-q" onClick={(e) => { toggleFaq(e.currentTarget) }}>
              Berapa lama proses pembuatan website?
              <div className="faq-icon">+</div>
            </div>
            <div className="faq-a">Rata-rata 5–10 hari kerja tergantung paket dan kelengkapan konten dari klien. Paket Starter bisa selesai dalam 3–5 hari, sedangkan paket Premium dengan fitur e-commerce membutuhkan 10–14 hari.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={(e) => { toggleFaq(e.currentTarget) }}>
              Apakah saya bisa minta revisi setelah website jadi?
              <div className="faq-icon">+</div>
            </div>
            <div className="faq-a">Ya, setiap paket sudah termasuk garansi revisi. Basic 2x revisi, Standard 3x, dan Premium 5x. Revisi bisa mencakup perubahan teks, warna, layout, dan penambahan konten sesuai ketentuan paket.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={(e) => { toggleFaq(e.currentTarget) }}>
              Apakah saya perlu paham teknologi untuk pakai website ini?
              <div className="faq-icon">+</div>
            </div>
            <div className="faq-a">Sama sekali tidak. Kami akan memberikan training penggunaan dan panduan tertulis setelah website selesai. Anda cukup fokus mengisi konten — kami yang urus teknisnya.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={(e) => { toggleFaq(e.currentTarget) }}>
              Biaya apa saja yang perlu saya siapkan?
              <div className="faq-icon">+</div>
            </div>
            <div className="faq-a">Harga paket sudah all-in: termasuk domain .com 1 tahun, hosting 1 tahun, SSL gratis, dan biaya pembuatan. Setelah 1 tahun, biaya perpanjangan domain dan hosting sekitar Rp 300–500 ribu per tahun.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={(e) => { toggleFaq(e.currentTarget) }}>
              Apakah ada after-sales support setelah website selesai?
              <div className="faq-icon">+</div>
            </div>
            <div className="faq-a">Ada. Setiap paket mendapatkan support teknis gratis: Basic 14 hari, Standard 30 hari, Premium 60 hari. Setelah itu, tersedia paket maintenance bulanan jika Anda membutuhkan.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={(e) => { toggleFaq(e.currentTarget) }}>
              Bisa minta paket custom di luar tiga paket yang ada?
              <div className="faq-icon">+</div>
            </div>
            <div className="faq-a">Bisa. Hubungi kami melalui WhatsApp atau form konsultasi, ceritakan kebutuhan spesifik bisnis Anda, dan kami akan siapkan penawaran custom yang sesuai budget dan kebutuhan.</div>
          </div>
        </div>
      </section>

      {/*  KONTAK  */}
      <section className="kontak" id="kontak">
        <div className="center">
          <div className="tag">Hubungi kami</div>
          <h2 className="sec-title">Konsultasi gratis, tanpa komitmen</h2>
          <p className="sec-desc">Ceritakan bisnis Anda dan kami bantu rekomendasikan solusi terbaik.</p>
        </div>
        <div className="kontak-grid">
          <div className="kontak-info">
            <div className="ki-item">
              <div className="ki-icon">📍</div>
              <div>
                <div className="ki-title">Lokasi</div>
                <div className="ki-val">Semarang, Jawa Tengah</div>
                <div className="ki-sub">Melayani seluruh Indonesia (remote)</div>
              </div>
            </div>
            <div className="ki-item">
              <div className="ki-icon">💬</div>
              <div>
                <div className="ki-title">WhatsApp</div>
                <div className="ki-val">+62 812 8153 3402</div>
                <div className="ki-sub">Respon cepat jam kerja</div>
              </div>
            </div>
            <div className="ki-item">
              <div className="ki-icon">📧</div>
              <div>
                <div className="ki-title">Email</div>
                <div className="ki-val">halo@Jokoweb.id</div>
              </div>
            </div>
            <div className="ki-item">
              <div className="ki-icon">📱</div>
              <div>
                <div className="ki-title">Media sosial</div>
                <div className="sosmed-row">
                  <div className="sm-btn">ig</div>
                  <div className="sm-btn">tt</div>
                  <div className="sm-btn">in</div>
                  <div className="sm-btn">yt</div>
                </div>
              </div>
            </div>
            <div className="guarantee">
              <div className="guar-title">🛡️ Jaminan layanan kami</div>
              <div className="guar-list">
                <div className="guar-item"><span className="guar-check">✓</span> Uang kembali jika tidak puas (syarat berlaku)</div>
                <div className="guar-item"><span className="guar-check">✓</span> Garansi revisi sesuai paket</div>
                <div className="guar-item"><span className="guar-check">✓</span> After-sales support gratis</div>
                <div className="guar-item"><span className="guar-check">✓</span> Pengerjaan sesuai timeline</div>
              </div>
            </div>
          </div>

          <div className="kontak-form">
            <div className="form-title">Kirim pesan</div>
            <div className="form-sub">Isi form atau langsung WA kami untuk respons lebih cepat.</div>
            <div className="form-row">
              <div className="fg"><label>Nama lengkap</label><input type="text" placeholder="Budi Santoso" /></div>
              <div className="fg"><label>Nomor WhatsApp</label><input type="tel" placeholder="0812xxxxxxxx" /></div>
            </div>
            <div className="fg"><label>Nama bisnis</label><input type="text" placeholder="Nama toko / usaha Anda" /></div>
            <div className="fg">
              <label>Paket yang diminati</label>
              <select>
                <option>Pilih paket...</option>
                <option>Basic — Rp 1.200.000</option>
                <option>Standard — Rp 3.500.000</option>
                <option>Premium — Rp 7.500.000</option>
                <option>Custom (diskusi dulu)</option>
              </select>
            </div>
            <div className="fg"><label>Ceritakan bisnis Anda</label><textarea placeholder="Bisnis saya bergerak di bidang... target pelanggan saya adalah..."></textarea></div>
            <button className="btn-submit">Kirim & Konsultasi Gratis →</button>
            <div className="cta-alt-row">
              <button className="btn-alt btn-alt-wa">💬 WhatsApp Langsung</button>
              <button className="btn-alt btn-alt-port" onClick={(e) => { document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' }) }}>📂 Lihat Portofolio</button>
            </div>
          </div>
        </div>
      </section>

      {/*  FOOTER  */}
      <footer>
        <div className="footer-grid">
          <div>
            <div className="f-logo"><div className="f-logo-icon">W</div> Jokoweb</div>
            <p className="f-desc">Jasa pembuatan website profesional untuk UMKM dan bisnis lokal. Terjangkau, cepat, dan ada yang merawat setelah selesai.</p>
            <div className="f-socials">
              <div className="f-sm">ig</div>
              <div className="f-sm">tt</div>
              <div className="f-sm">in</div>
              <div className="f-sm">yt</div>
            </div>
          </div>
          <div>
            <div className="f-col-title">Layanan</div>
            <div className="f-links">
              <a href="#">Landing page</a>
              <a href="#">Company profile</a>
              <a href="#">Toko online</a>
              <a href="#">Maintenance web</a>
            </div>
          </div>
          <div>
            <div className="f-col-title">Perusahaan</div>
            <div className="f-links">
              <a href="#">Tentang kami</a>
              <a href="#">Portofolio</a>
              <a href="#">Blog tips website</a>
              <a href="#">Kontak</a>
            </div>
          </div>
          <div>
            <div className="f-col-title">Informasi</div>
            <div className="f-links">
              <a href="#">FAQ</a>
              <a href="#">Syarat & ketentuan</a>
              <a href="#">Kebijakan privasi</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
        <div className="f-bottom">
          <span>© 2025 Jokoweb · Semarang, Jawa Tengah. All rights reserved.</span>
          <div className="f-socials">
            <div className="f-sm">ig</div>
            <div className="f-sm">tt</div>
            <div className="f-sm">in</div>
          </div>
        </div>
      </footer>

      <div className="wa-float" title="Chat WhatsApp">💬</div>



    </>
  );
}
